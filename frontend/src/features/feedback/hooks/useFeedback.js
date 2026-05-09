import { useState } from "react";
import { feedbackService } from "../services/feedback.service";

export default function useFeedback() {

  const [feedbacks, setFeedbacks] = useState(
    feedbackService.getAll()
  );

  const refresh = () => {
    setFeedbacks([...feedbackService.getAll()]);
  };

  const createFeedback = (payload) => {
    feedbackService.create(payload);
    refresh();
  };

  const getByEvidence = (id) => {
    return feedbackService.getByEvidence(id);
  };

  return {
    feedbacks,
    createFeedback,
    getByEvidence,
  };
}