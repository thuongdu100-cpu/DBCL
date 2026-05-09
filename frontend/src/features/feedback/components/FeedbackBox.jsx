export default function FeedbackBox({ item }) {

  return (
    <div className="feedback-box">

      <div>
        <strong>Evidence ID:</strong> {item.evidenceId}
      </div>

      <div>{item.message}</div>

      <small>{item.createdAt}</small>

      <span className={`status ${item.status}`}>
        {item.status}
      </span>

    </div>
  );
}