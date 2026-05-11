import useFeedback from "../hooks/useFeedback";
import "../styles/feedback.css";
export default function FeedbackHistoryPage() {

  const { feedbacks } = useFeedback();

  return (
    <div>

      <h2>Feedback History</h2>

      {feedbacks.map(f => (
        <div key={f.id}>

          <p>{f.message}</p>
          <small>{f.createdAt}</small>

        </div>
      ))}

    </div>
  );
}