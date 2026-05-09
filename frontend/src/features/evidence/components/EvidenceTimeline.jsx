export default function EvidenceTimeline({ history = [] }) {

  return (
    <ul>
      {history.map((h, i) => (
        <li key={i}>
          {h.action} - {h.by} {h.reason && `(${h.reason})`}
        </li>
      ))}
    </ul>
  );
}