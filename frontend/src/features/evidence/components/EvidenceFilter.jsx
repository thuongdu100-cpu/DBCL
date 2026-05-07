export default function EvidenceFilter({ filters, setFilters }) {
  return (
    <div className="panel evidence-filter">

      <input
        placeholder="Tìm minh chứng theo tên hoặc tiêu chí..."
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
        <option value="draft">Nháp</option>
        <option value="submitted">Đã gửi</option>
        <option value="approved">Đã duyệt</option>
        <option value="rejected">Từ chối</option>
      </select>

    </div>
  );
}