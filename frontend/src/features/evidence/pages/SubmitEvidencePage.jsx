import EvidenceForm from "../components/EvidenceForm";
import useEvidenceWorkflow from "../hooks/useEvidenceWorkflow";

export default function SubmitEvidencePage() {

  const { submit } = useEvidenceWorkflow();

  return (
    <div>
      <h2>Submit Evidence</h2>

      <EvidenceForm onSubmit={submit} />
    </div>
  );
}