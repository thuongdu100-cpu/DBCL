export default function ReportsFilter({ filters, setFilters }) {
  return (
    <div className="panel reports-filter">

      <input
        placeholder="Tìm báo cáo..."
        value={filters.keyword}
        onChange={(e) =>
          setFilters({ ...filters, keyword: e.target.value })
        }
      />

      <select
        value={filters.type}
        onChange={(e) =>
          setFilters({ ...filters, type: e.target.value })
        }
      >
        <option value="all">Tất cả</option>
        <option value="evaluation">Đánh giá</option>
        <option value="evidence">Minh chứng</option>
        <option value="improvement">Cải tiến</option>
      </select>

    </div>
  );
}