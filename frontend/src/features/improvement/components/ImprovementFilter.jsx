

export default function ImprovementFilter({
  filters,
  setFilters,
}) {

  return (

    <div className="im-filter">

      <div className="im-filter-search">

        <input
          type="text"
          placeholder="Tìm theo tiêu chí, vấn đề..."
          value={filters.keyword}
          onChange={(e) =>
            setFilters(prev => ({
              ...prev,
              keyword: e.target.value,
            }))
          }
        />

      </div>

      <div className="im-filter-right">

        <select
          value={filters.status}
          onChange={(e) =>
            setFilters(prev => ({
              ...prev,
              status: e.target.value,
            }))
          }
        >
          <option value="all">
            Tất cả trạng thái
          </option>

          <option value="not_started">
            Chưa bắt đầu
          </option>

          <option value="in_progress">
            Đang thực hiện
          </option>

          <option value="review">
            Đánh giá
          </option>

          <option value="done">
            Hoàn thành
          </option>

        </select>

      </div>

    </div>
  );
}