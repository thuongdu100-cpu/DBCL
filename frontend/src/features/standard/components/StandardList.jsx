export default function StandardList({ data, onSelect, selected }) {
  return (
    <div>
      <h3 className="section-title">Standards</h3>

      {data.map((s) => (
        <div
          key={s.id}
          className={`item ${selected?.id === s.id ? "active" : ""}`}
          onClick={() => onSelect(s)}
        >
          {s.name}
        </div>
      ))}
    </div>
  );
}