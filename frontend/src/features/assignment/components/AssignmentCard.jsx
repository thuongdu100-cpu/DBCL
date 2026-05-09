import AssignmentStatusBadge from "./AssignmentStatusBadge";
import AssignmentProgressBar from "./AssignmentProgressBar";

export default function AssignmentCard({ item }) {

  return (
    <div className="assignment-card">

      <h3>{item.title}</h3>

      <p className="desc">{item.description}</p>

      <AssignmentStatusBadge status={item.status} />

      <AssignmentProgressBar value={item.progress} />

    </div>
  );
}