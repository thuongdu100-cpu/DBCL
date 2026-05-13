export default function ReportsFilter({
  filters = {},
  setFilters,
}) {

  // safety guard
  if (!setFilters) return null;

  const handleKeywordChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      keyword: e.target.value,
    }));
  };

  const handleTypeChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      type: e.target.value,
    }));
  };

  return (
    <div className="reports-filter">

      {/* KEYWORD SEARCH */}
      <input
        placeholder="Tìm báo cáo..."
        value={filters?.keyword || ""}
        onChange={handleKeywordChange}
      />

      {/* TYPE FILTER */}
      <select
        value={filters?.type || "all"}
        onChange={handleTypeChange}
      >
        <option value="all">Tất cả</option>
        <option value="evaluation">Evaluation</option>
        <option value="evidence">Evidence</option>
        <option value="improvement">Improvement</option>
      </select>

    </div>
  );
}