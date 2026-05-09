import useEvidenceWorkflow from "../hooks/useEvidenceWorkflow";
import EvidenceTimeline from "../components/EvidenceTimeline";

export default function EvidenceDetailPage({ id = 1 }) {

  const { list } = useEvidenceWorkflow();

  const item = list.find(e => e.id === id);

  if (!item) return <div>Not found</div>;

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>

      <h4>History</h4>
      <EvidenceTimeline history={item.history} />
    </div>
  );
}