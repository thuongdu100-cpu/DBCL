export default function EvidenceFilter({

  search,
  setSearch,

  statusFilter,
  setStatusFilter,

}) {

  return (

    <div className="evidence-filter">

      {/* SEARCH */}
      <div className="evidence-filter-search">

        <input
          type="text"
          placeholder="Tìm mã minh chứng, tiêu đề, phòng ban..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* STATUS */}
      <div className="evidence-filter-status">

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >

          <option value="all">
            Tất cả trạng thái
          </option>

          <option value="pending">
            Chờ xử lý
          </option>

          <option value="reviewing">
            Đang kiểm duyệt
          </option>

          <option value="approved">
            Đã duyệt
          </option>

          <option value="rejected">
            Từ chối
          </option>

        </select>

      </div>

    </div>
  );
}