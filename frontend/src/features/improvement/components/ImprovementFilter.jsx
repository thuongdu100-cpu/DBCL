export default function ImprovementFilter({ filters, setFilters }) {
  return (
    <div className="panel improvement-filter">

      <input
        placeholder="Tìm theo tiêu chí hoặc kế hoạch..."
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
        <option value="not_started">Chưa bắt đầu</option>
        <option value="in_progress">Đang thực hiện</option>
        <option value="done">Hoàn thành</option>
      </select>

    </div>
  );
}