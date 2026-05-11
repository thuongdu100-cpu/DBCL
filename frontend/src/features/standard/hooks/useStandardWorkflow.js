import { useMemo } from "react";

export default function useStandardWorkflow({
  assignments = [],
  evidences = [],
  feedbacks = [],
}) {

  const progress = useMemo(() => {

    const total =
      assignments.length +
      evidences.length +
      feedbacks.length;

    if (!total) return 0;

    return Math.round(
      (
        evidences.length / total
      ) * 100
    );

  }, [
    assignments,
    evidences,
    feedbacks,
  ]);

  return {
    progress,
  };
}