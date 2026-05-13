import { NavLink } from "react-router-dom";

export default function ReportsTabs() {
  return (
    <div className="reports-tabs">
        
        <NavLink to="activity">Activity</NavLink>
        <NavLink to="evaluation">Evaluation</NavLink>
        <NavLink to="evidence">Evidence</NavLink>
        <NavLink to="improvement">Improvement</NavLink>
        

    </div>
  );
}