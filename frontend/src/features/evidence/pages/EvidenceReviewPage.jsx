import useEvidenceWorkflow from "../hooks/useEvidenceWorkflow";
import "../styles/evidence.css";

export default function EvidenceReviewPage() {

  const { list, approve, reject } = useEvidenceWorkflow();

  return (
    <div>
      <h2>Review Evidence</h2>

      {list.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>

          <button onClick={() => approve(item.id, "manager")}>
            Approve
          </button>

          <button onClick={() => reject(item.id, "manager", "Invalid")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}