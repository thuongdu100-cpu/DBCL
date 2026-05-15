import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TableBlock from "../components/TableBlock";
import StandardBreadcrumb from "../components/StandardBreadcrumb";
import { standardService } from "../services/standard.service";

export default function CriteriaPage() {

  const { standardId } = useParams();
  const navigate = useNavigate();

  const [standard, setStandard] = useState(null);

  useEffect(() => {
    standardService.getById(standardId).then(setStandard);
  }, [standardId]);

  const handleAdd = async (row) => {

    const newCriteria = {
      id: `CRI-${Date.now()}`,
      name: row.name || "",
      description: row.description || "",
      indicators: [],
    };

    const fresh = await standardService.getById(standardId);

    const updated = {
      ...fresh,
      criteria: [...fresh.criteria, newCriteria],
    };

    await standardService.update(standardId, updated);
    setStandard(await standardService.getById(standardId));
  };

  const handleDelete = async (id) => {

  const fresh = await standardService.getById(standardId);

  const updated = {
    ...fresh,
    criteria: fresh.criteria.filter(c => c.id !== id),
  };

  await standardService.update(standardId, updated);

  setStandard(await standardService.getById(standardId));
};

  const handleUpdate = async (id, payload) => {

    const fresh = await standardService.getById(standardId);

    const updatedCriteria = fresh.criteria.map(c =>
      c.id === id ? { ...c, ...payload } : c
    );

    await standardService.update(standardId, {
      ...fresh,
      criteria: updatedCriteria,
    });

    setStandard(await standardService.getById(standardId));
  };

  if (!standard) return null;

  return (
    <div className="standard-page">

      <div className="standard-left">

        <StandardBreadcrumb />

        <div className="page-header">
          <div className="page-subtitle">Tiêu chí</div>
          <div className="page-title">{standard.name}</div>
        </div>

        <TableBlock
          title="Danh sách tiêu chí"
          data={standard.criteria}
          columns={[
            { key: "name", label: "Tên" },
            { key: "description", label: "Mô tả" },
          ]}
          onRowClick={(item) =>
            navigate(`/standard/${standardId}/${item.id}`)
          }
          onCreate={handleAdd}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

      </div>

    </div>
  );
}