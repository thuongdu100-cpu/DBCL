import { useState } from "react";

export default function FeedbackForm({ onSubmit }) {

  const [message, setMessage] = useState("");

  return (
    <div className="feedback-form">

      <textarea
        placeholder="Enter feedback..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={() => {
          onSubmit(message);
          setMessage("");
        }}
      >
        Send Feedback
      </button>

    </div>
  );
}