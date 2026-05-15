import { useMemo } from "react";

import useEvidenceWorkflow from "../hooks/useEvidenceWorkflow";

export default function EvidenceDashboardPage() {

  /* ======================================================
     WORKFLOW
  ====================================================== */

  const {

    evidences,

  } = useEvidenceWorkflow();

  /* ======================================================
     KPI
  ====================================================== */

  const statistics = useMemo(() => {

    const total = evidences.length;

    const pending =
      evidences.filter(
        (item) => item.status === "pending"
      ).length;

    const reviewing =
      evidences.filter(
        (item) => item.status === "reviewing"
      ).length;

    const approved =
      evidences.filter(
        (item) => item.status === "approved"
      ).length;

    const rejected =
      evidences.filter(
        (item) => item.status === "rejected"
      ).length;

    return {

      total,
      pending,
      reviewing,
      approved,
      rejected,

    };

  }, [evidences]);

  /* ======================================================
     STANDARD DISTRIBUTION
  ====================================================== */

  const standardStats = useMemo(() => {

    const map = {};

    evidences.forEach((item) => {

      if (!map[item.standard]) {

        map[item.standard] = 0;
      }

      map[item.standard] += 1;
    });

    return Object.entries(map);

  }, [evidences]);

  /* ======================================================
     DEPARTMENT DISTRIBUTION
  ====================================================== */

  const departmentStats = useMemo(() => {

    const map = {};

    evidences.forEach((item) => {

      if (!map[item.department]) {

        map[item.department] = 0;
      }

      map[item.department] += 1;
    });

    return Object.entries(map);

  }, [evidences]);

  /* ======================================================
     RENDER
  ====================================================== */

  return (

    <section className="evidence-page">

      {/* HEADER */}
      <div className="evidence-page-header">

        <div>

          <h2>
            Dashboard minh chứng
          </h2>

          <p>
            Tổng quan thống kê và workflow minh chứng hệ thống
          </p>

        </div>

      </div>

      {/* KPI */}
      <div className="evidence-dashboard-grid">

        <div className="evidence-kpi-card">

          <h3>Tổng minh chứng</h3>

          <strong>
            {statistics.total}
          </strong>

        </div>

        <div className="evidence-kpi-card pending">

          <h3>Chờ xử lý</h3>

          <strong>
            {statistics.pending}
          </strong>

        </div>

        <div className="evidence-kpi-card reviewing">

          <h3>Đang kiểm duyệt</h3>

          <strong>
            {statistics.reviewing}
          </strong>

        </div>

        <div className="evidence-kpi-card approved">

          <h3>Đã duyệt</h3>

          <strong>
            {statistics.approved}
          </strong>

        </div>

        <div className="evidence-kpi-card rejected">

          <h3>Từ chối</h3>

          <strong>
            {statistics.rejected}
          </strong>

        </div>

      </div>

      {/* DISTRIBUTION */}
      <div className="evidence-dashboard-layout">

        {/* STANDARD */}
        <div className="evidence-dashboard-card">

          <h3>
            Phân bố theo tiêu chuẩn
          </h3>

          <div className="evidence-dashboard-list">

            {standardStats.map(([name, total]) => (

              <div
                key={name}
                className="evidence-dashboard-item"
              >

                <span>{name}</span>

                <strong>{total}</strong>

              </div>
            ))}

          </div>

        </div>

        {/* DEPARTMENT */}
        <div className="evidence-dashboard-card">

          <h3>
            Phân bố theo khoa / phòng
          </h3>

          <div className="evidence-dashboard-list">

            {departmentStats.map(([name, total]) => (

              <div
                key={name}
                className="evidence-dashboard-item"
              >

                <span>{name}</span>

                <strong>{total}</strong>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}