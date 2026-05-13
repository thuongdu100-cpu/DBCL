import ImprovementCard from "./ImprovementCard";

export default function ImprovementColumn({
  title,
  status,
  items = [],
  onSelect,
}) {

  return (

    <div className={`im-column ${status}`}>

      <div className="im-column-header">

        <h3>{title}</h3>

        <span>
          {items.length}
        </span>

      </div>

      <div className="im-column-body">

        {items.map(item => (

          <ImprovementCard
            key={item.id}
            item={item}
            onClick={() => onSelect(item)}
          />

        ))}

      </div>

    </div>
  );
}