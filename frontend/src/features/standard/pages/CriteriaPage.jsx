
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TableBlock from "../components/TableBlock";
import StandardBreadcrumb from "../components/StandardBreadcrumb";
import DetailPanel from "../components/DetailPanel";

import { standardService } from "../services/standard.service";

export default function CriteriaPage() {

  const { standardId } = useParams();

  const navigate = useNavigate();

  const [standard, setStandard] =
    useState(null);

  useEffect(() => {

    standardService
      .getById(standardId)
      .then((data) => {

        if (!data) {

          setStandard(null);
          return;
        }

        setStandard(data);
      });

  }, [standardId]);

  const refresh = async () => {

    const fresh =
      await standardService.getById(
        standardId
      );

    setStandard(fresh);
  };

  const handleAdd = async (row) => {

    const fresh =
      await standardService.getById(
        standardId
      );

    if (!fresh) return;

    const newCriteria = {

      id: `CRI-${Date.now()}`,

      name: row.name || "",

      description:
        row.description || "",

      indicators: [],
    };

    await standardService.update(
      standardId,
      {

        ...fresh,

        criteria: [
          ...fresh.criteria,
          newCriteria,
        ],
      }
    );

    refresh();
  };

  const handleDelete = async (id) => {

    const fresh =
      await standardService.getById(
        standardId
      );

    if (!fresh) return;

    await standardService.update(
      standardId,
      {

        ...fresh,

        criteria:
          fresh.criteria.filter(
            c => c.id !== id
          ),
      }
    );

    refresh();
  };

  const handleUpdate = async (
    id,
    payload
  ) => {

    const fresh =
      await standardService.getById(
        standardId
      );

    if (!fresh) return;

    const updatedCriteria =
      fresh.criteria.map(c =>

        c.id === id
          ? { ...c, ...payload }
          : c
      );

    await standardService.update(
      standardId,
      {

        ...fresh,

        criteria: updatedCriteria,
      }
    );

    refresh();
  };

  if (!standard) {

    return (

      <div className="standard-page">

        <div className="standard-left">

          <StandardBreadcrumb />

          <div className="workflow-empty">
            Không tìm thấy tiêu chuẩn
          </div>

        </div>

      </div>
    );
  }

  return (

    <div className="standard-page">

      <div className="standard-left">

        <StandardBreadcrumb />

        <div className="page-header">

          <div className="page-subtitle">
            Tiêu chí
          </div>

          <div className="page-title">
            {standard.name}
          </div>

        </div>

        <TableBlock
          title="Danh sách tiêu chí"
          data={standard.criteria}
          columns={[
            {
              key: "name",
              label: "Tên",
            },

            {
              key: "description",
              label: "Mô tả",
            },
          ]}
          onRowClick={(item) =>
            navigate(
              `/standard/${standardId}/${item.id}`
            )
          }
          onCreate={handleAdd}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

      </div>

      <DetailPanel
        standard={standard}
      />

    </div>
  );
}
