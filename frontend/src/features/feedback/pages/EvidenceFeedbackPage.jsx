import { useState } from "react";
import useFeedback from "../hooks/useFeedback";

export default function EvidenceFeedbackPage() {

  const { feedbacks, createFeedback } = useFeedback();

  const [text, setText] = useState("");

  return (
    <div>

      <h2>Evidence Feedback</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => createFeedback(text)}
      >
        Send Feedback
      </button>

      <div>
        {feedbacks.map(f => (
          <div key={f.id}>
            {f.message}
          </div>
        ))}
      </div>

    </div>
  );
}