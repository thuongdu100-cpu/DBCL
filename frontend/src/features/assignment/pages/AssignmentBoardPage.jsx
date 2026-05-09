import useAssignments from "../hooks/useAssignments";

export default function AssignmentBoardPage() {

  const { list } = useAssignments();

  return (
    <div className="assignment-page">

      <h2>Assignment Board</h2>

      <div className="board">

        {list.map(item => (
          <div key={item.id} className="board-item">
            {item.title}
          </div>
        ))}

      </div>

    </div>
  );
}