import useAssignments from "../hooks/useAssignments";

export default function AssignmentDetailPage({ id = 1 }) {

  const { list } = useAssignments();

  const item = list.find(a => a.id === id);

  if (!item) return <div>Not found</div>;

  return (
    <div className="assignment-detail">

      <h2>{item.title}</h2>

      <p>{item.description}</p>

      <p>Progress: {item.progress}%</p>

    </div>
  );
}