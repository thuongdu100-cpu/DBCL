export default function ReportsCard({ item, onClick }) {

  // safety guard
  if (!item) return null;

  const handleClick = () => {
    onClick?.(item);
  };

  return (
    <article
      className="reports-card"
      onClick={handleClick}
    >

      {/* TOP META */}
      <div className="reports-card-top">

        <span className={`reports-type ${item?.type}`}>
          {item?.type}
        </span>

        <span className={`reports-status ${item?.status}`}>
          {item?.status}
        </span>

      </div>

      {/* TITLE */}
      <h3 className="reports-card-title">
        {item?.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="reports-card-desc">
        {item?.description}
      </p>

      {/* FOOTER */}
      <div className="reports-card-footer">

        <span className="reports-owner">
          {item?.owner}
        </span>

        <span className="reports-date">
          {item?.createdAt}
        </span>

      </div>

    </article>
  );
}