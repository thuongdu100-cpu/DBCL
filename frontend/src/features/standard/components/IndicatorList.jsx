export default function IndicatorList({ data, onSelect, selected }) {
  return (
    <div>
      <h3 className="section-title">Indicators</h3>

      {data.map((i) => (
        <div
          key={i.id}
          className={`item ${selected?.id === i.id ? "active" : ""}`}
          onClick={() => onSelect(i)}
        >
          {i.name}
        </div>
      ))}
    </div>
  );
}