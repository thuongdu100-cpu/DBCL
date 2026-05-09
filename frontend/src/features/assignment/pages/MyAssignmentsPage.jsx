import useAssignments from "../hooks/useAssignments";
import AssignmentCard from "../components/AssignmentCard";

export default function MyAssignmentsPage() {

  const { list } = useAssignments();

  return (
    <div className="assignment-page">

      <h2>My Assignments</h2>

      <div className="assignment-grid">
        {list.map(item => (
          <AssignmentCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
}