import { useMemo, useState } from "react";
import { mockEvidence } from "../data/mockEvidence";

export default function useEvidenceWorkflow() {

  /* ======================================================
     STATE
  ====================================================== */

  const [evidences, setEvidences] = useState(mockEvidence);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("all");

  const [selectedEvidence, setSelectedEvidence] = useState(null);

  /* ======================================================
     FILTER
  ====================================================== */

  const filteredEvidences = useMemo(() => {

    return evidences.filter((item) => {

      const keyword = search.toLowerCase();

      const matchSearch =
        item.title.toLowerCase().includes(keyword) ||
        item.code.toLowerCase().includes(keyword) ||
        item.department.toLowerCase().includes(keyword);

      const matchStatus =
        statusFilter === "all"
          ? true
          : item.status === statusFilter;

      return matchSearch && matchStatus;
    });

  }, [evidences, search, statusFilter]);

  /* ======================================================
     WORKFLOW ACTIONS
  ====================================================== */

  const approveEvidence = (id) => {

    setEvidences((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "approved",
              updatedAt: new Date().toISOString().split("T")[0],
            }
          : item
      )
    );
  };

  const rejectEvidence = (id) => {

    setEvidences((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "rejected",
              updatedAt: new Date().toISOString().split("T")[0],
            }
          : item
      )
    );
  };

  /* ======================================================
     SELECT DETAIL
  ====================================================== */

  const selectEvidence = (id) => {

    const found = evidences.find((item) => item.id === id);

    setSelectedEvidence(found || null);
  };

  /* ======================================================
     STATS
  ====================================================== */

  const stats = useMemo(() => {

    const total = evidences.length;

    const approved = evidences.filter(
      (item) => item.status === "approved"
    ).length;

    const pending = evidences.filter(
      (item) => item.status === "pending"
    ).length;

    const rejected = evidences.filter(
      (item) => item.status === "rejected"
    ).length;

    const reviewing = evidences.filter(
      (item) => item.status === "reviewing"
    ).length;

    return {
      total,
      approved,
      pending,
      rejected,
      reviewing,
    };

  }, [evidences]);

  /* ======================================================
     RETURN
  ====================================================== */

  return {

    evidences,

    filteredEvidences,

    selectedEvidence,

    search,
    setSearch,

    statusFilter,
    setStatusFilter,

    approveEvidence,
    rejectEvidence,

    selectEvidence,

    stats,
  };
}