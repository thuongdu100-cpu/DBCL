export default function CriteriaList({ data, onSelect, selected }) {
  return (
    <div>
      <h3 className="section-title">Criteria</h3>

      {data.map((c) => (
        <div
          key={c.id}
          className={`item ${selected?.id === c.id ? "active" : ""}`}
          onClick={() => onSelect(c)}
        >
          {c.name}
        </div>
      ))}
    </div>
  );
}