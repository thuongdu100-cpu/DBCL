
import {
  WORKFLOW_STATUS
}
from "../data/workflowStatus";

import ImprovementColumn from "./ImprovementColumn";

export default function ImprovementBoard({
  grouped,
  filters,
  onSelect,
}) {

  const filterItems = (items = []) => {

    return items.filter(item => {

      const keywordMatch =

        item.criterion
          .toLowerCase()
          .includes(filters.keyword.toLowerCase())

        ||

        item.issue
          .toLowerCase()
          .includes(filters.keyword.toLowerCase());

      const priorityMatch =

        filters.priority === "all"
          ? true
          : item.priority === filters.priority;

      const ownerMatch =

        filters.owner === "all"
          ? true
          : item.owner === filters.owner;

      return (
        keywordMatch &&
        priorityMatch &&
        ownerMatch
      );
    });
  };

  return (

    <div className="im-board">

      <ImprovementColumn
        title="Chưa bắt đầu"
        status="not_started"
        items={filterItems(grouped.not_started)}
        onSelect={onSelect}
      />

      <ImprovementColumn
        title="Đang thực hiện"
        status="in_progress"
        items={filterItems(grouped.in_progress)}
        onSelect={onSelect}
      />

      <ImprovementColumn
        title="Review"
        status="review"
        items={filterItems(grouped.review)}
        onSelect={onSelect}
      />

      <ImprovementColumn
        title="Hoàn thành"
        status="done"
        items={filterItems(grouped.done)}
        onSelect={onSelect}
      />

    </div>
  );
}