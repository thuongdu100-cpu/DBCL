export default function EvaluationFilter({ filters, setFilters }) {
  return (
    <div className="panel filter">

      <input
        placeholder="Tìm tiêu chí..."
        value={filters.keyword}
        onChange={(e) =>
          setFilters({ ...filters, keyword: e.target.value })
        }
      />

      <select
        value={filters.status}
        onChange={(e) =>
          setFilters({ ...filters, status: e.target.value })
        }
      >
        <option value="all">Tất cả</option>
        <option value="achieved">Đạt</option>
        <option value="not_achieved">Chưa đạt</option>
        <option value="partial">Một phần</option>
      </select>

    </div>
  );
}