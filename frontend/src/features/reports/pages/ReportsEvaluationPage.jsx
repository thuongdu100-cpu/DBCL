import useReports from "../hooks/useReports";
import ReportsFilter from "../components/ReportsFilter";
import ReportsTable from "../components/ReportsTable";


export default function ReportsEvaluationPage() {

  const { filteredReports, filters, setFilters } = useReports();

  const data = filteredReports.filter(
    (r) => r.type === "evaluation"
  );

  const handleExport = (format) => {
    console.log("Export evaluation:", format, data);
   
  };

  return (
    <div className="reports-subpage">

      {/* HEADER SUBPAGE */}
      <div className="subpage-header">
        <h3>Evaluation Reports</h3>
      </div>

      {/* FILTER */}
      <ReportsFilter
        filters={filters}
        setFilters={setFilters}
      />

      {/* TABLE */}
      <ReportsTable data={data} />

    </div>
  );
}