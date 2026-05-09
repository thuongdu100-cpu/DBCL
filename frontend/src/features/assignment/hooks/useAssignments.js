import { useState } from "react";
import { assignmentService } from "../services/assignment.service";

export default function useAssignments() {

  const [list, setList] = useState(assignmentService.getAll());

  const refresh = () => {
    setList([...assignmentService.getAll()]);
  };

  const updateProgress = (id, progress) => {
    assignmentService.updateProgress(id, progress);
    refresh();
  };

  const create = (data) => {
    assignmentService.create(data);
    refresh();
  };

  return {
    list,
    refresh,
    updateProgress,
    create,
  };
}