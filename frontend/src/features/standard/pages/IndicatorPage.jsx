import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TableBlock from "../components/TableBlock";
import StandardBreadcrumb from "../components/StandardBreadcrumb";
import { standardService } from "../services/standard.service";

export default function IndicatorPage() {

  const { standardId, criteriaId } = useParams();
  const navigate = useNavigate();

  const [standard, setStandard] = useState(null);
  const [criteria, setCriteria] = useState(null);

  useEffect(() => {
    standardService.getById(standardId).then(data => {

      setStandard(data);

      const found = data.criteria.find(c => c.id === criteriaId);
      setCriteria(found);

    });
  }, [standardId, criteriaId]);

  const refresh = async () => {
    const fresh = await standardService.getById(standardId);
    setStandard(fresh);
    setCriteria(fresh.criteria.find(c => c.id === criteriaId));
  };

  const handleAdd = async (row) => {

    const newIndicator = {
      id: `IND-${Date.now()}`,
      name: row.name || "",
      description: row.description || "",
    };

    const fresh = await standardService.getById(standardId);

    const updatedCriteria = fresh.criteria.map(c =>
      c.id === criteriaId
        ? {
            ...c,
            indicators: [...c.indicators, newIndicator],
          }
        : c
    );

    await standardService.update(standardId, {
      ...fresh,
      criteria: updatedCriteria,
    });

    refresh();
  };

  const handleDelete = async (id) => {

  const fresh = await standardService.getById(standardId);

  const updatedCriteria = fresh.criteria.map(c => {

    if (c.id !== criteriaId) return c;

    return {
      ...c,
      indicators: c.indicators.filter(i => i.id !== id),
    };
  });

  await standardService.update(standardId, {
    ...fresh,
    criteria: updatedCriteria,
  });

  const refreshed = await standardService.getById(standardId);

  setStandard(refreshed);
  setCriteria(refreshed.criteria.find(c => c.id === criteriaId));
};

  const handleUpdate = async (id, payload) => {

    const fresh = await standardService.getById(standardId);

    const updatedCriteria = fresh.criteria.map(c => {
      if (c.id !== criteriaId) return c;

      return {
        ...c,
        indicators: c.indicators.map(i =>
          i.id === id ? { ...i, ...payload } : i
        ),
      };
    });

    await standardService.update(standardId, {
      ...fresh,
      criteria: updatedCriteria,
    });

    refresh();
  };

  if (!criteria) return null;

  return (
    <div className="standard-page">

      <div className="standard-left">

        <StandardBreadcrumb />

        <div className="page-header">
          <div className="page-subtitle">Chỉ báo</div>
          <div className="page-title">{criteria.name}</div>
        </div>

        <TableBlock
          title="Danh sách chỉ báo"
          data={criteria.indicators}
          columns={[
            { key: "name", label: "Tên" },
            { key: "description", label: "Mô tả" },
          ]}
          onRowClick={(item) =>
            navigate(
              `/dbcl/standard/${standardId}/${criteriaId}/${item.id}`
            )
          }
          onCreate={handleAdd}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

      </div>

    </div>
  );
}