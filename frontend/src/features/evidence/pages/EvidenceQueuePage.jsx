import useEvidenceWorkflow from "../hooks/useEvidenceWorkflow";
import EvidenceStatusBadge from "../components/EvidenceStatusBadge";
import "../styles/evidence.css";

export default function EvidenceQueuePage() {

  const { list } = useEvidenceWorkflow();

  return (
    <div>
      <h2>Evidence Queue</h2>

      {list.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>

          <EvidenceStatusBadge status={item.status} />
        </div>
      ))}
    </div>
  );
}