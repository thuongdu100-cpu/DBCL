import { useMemo } from "react";

export default function ReportsTable({
  data = [],
  filters = {},
  onRowClick,
}) {

  // =========================
  // SAFE DATA LAYER
  // =========================
  const safeData = Array.isArray(data) ? data : [];

  // =========================
  // FILTER ENGINE (MEMOIZED)
  // =========================
  const filtered = useMemo(() => {

    return safeData.filter((item) => {

      const matchType =
        !filters?.type ||
        filters.type === "all" ||
        item.type === filters.type;

      const matchKeyword =
        (item.title || "")
          .toLowerCase()
          .includes((filters?.keyword || "").toLowerCase());

      return matchType && matchKeyword;
    });

  }, [safeData, filters]);

  return (
    <div className="reports-table-wrapper">

      <table className="reports-table">

        {/* HEADER */}
        <thead>
          <tr>
            <th>Mã</th>
            <th>Tiêu đề</th>
            <th>Loại</th>
            <th>Ngày tạo</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>

          {filtered.length > 0 ? (
            filtered.map((item) => (
              <tr
                key={item.id}
                onClick={() => onRowClick?.(item)}
                className="reports-row"
              >
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>{item.createdAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                style={{ textAlign: "center" }}
              >
                No data
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}