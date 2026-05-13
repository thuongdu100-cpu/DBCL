import useReports from "../hooks/useReports";
import ReportsTable from "../components/ReportsTable";

export default function ReportsEvidencePage() {

  const {
    filteredReports,
  } = useReports();

  const evidenceReports = filteredReports.filter(
    (r) => r.type === "evidence"
  );

  return (
    <div className="reports-subpage">

      <div className="subpage-header">
        <h3>Evidence Reports</h3>
      </div>

      <ReportsTable
        data={evidenceReports}
      />

    </div>
  );
}