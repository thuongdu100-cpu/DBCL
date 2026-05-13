import ReportsActivity from "../components/ReportsActivity";
import "../styles/reports.css";

export default function ReportsActivityPage() {

  return (
    <div className="reports-subpage">

      {/* CONTENT */}
      <section className="reports-activity-wrapper">

        <ReportsActivity />

      </section>

    </div>
  );
}