import useEvidenceWorkflow from "../hooks/useEvidenceWorkflow";
import EvidenceTimeline from "../components/EvidenceTimeline";
import "../styles/evidence.css";

export default function EvidenceHistoryPage() {

  const { list } = useEvidenceWorkflow();

  return (
    <div>
      <h2>Evidence History</h2>

      {list.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>

          <EvidenceTimeline history={item.history} />
        </div>
      ))}
    </div>
  );
}