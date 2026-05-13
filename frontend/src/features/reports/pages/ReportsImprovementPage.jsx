import useReports from "../hooks/useReports";
import ReportsTable from "../components/ReportsTable";

export default function ReportsImprovementPage() {

  const {
    filteredReports,
  } = useReports();

  const improvementReports = filteredReports.filter(
    (r) => r.type === "improvement"
  );

  return (
    <div className="reports-subpage">

      <div className="subpage-header">
        <h3>Improvement Reports</h3>
      </div>

      <ReportsTable
        data={improvementReports}
      />

    </div>
  );
}