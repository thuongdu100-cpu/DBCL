export default function ImprovementCard({
  item,
  onClick,
}) {

  return (

    <div
      className="im-card"
      onClick={onClick}
    >

      <div className="im-card-top">

        <span className={`im-priority ${item.priority}`}>
          {item.priority}
        </span>

        <span className="im-card-progress">
            {item.progress}%
        </span>

      </div>

      <h4 className="im-card-title">
        {item.criterion}
      </h4>

      <p className="im-card-issue">
        {item.issue}
      </p>

      <div className="im-card-footer">

        <span>
          {item.owner}
        </span>

        <span>
          {item.deadline}
        </span>

      </div>

    </div>
  );
}