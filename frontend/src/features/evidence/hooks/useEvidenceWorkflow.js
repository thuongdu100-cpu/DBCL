import { useState } from "react";
import { evidenceWorkflowService } from "../services/evidenceWorkflow.service";

export default function useEvidenceWorkflow() {

  const [list, setList] = useState(evidenceWorkflowService.getAll());

  const refresh = () => {
    setList([...evidenceWorkflowService.getAll()]);
  };

  const submit = (data) => {
    evidenceWorkflowService.submit(data);
    refresh();
  };

  const approve = (id, by) => {
    evidenceWorkflowService.approve(id, by);
    refresh();
  };

  const reject = (id, by, reason) => {
    evidenceWorkflowService.reject(id, by, reason);
    refresh();
  };

  const resubmit = (id) => {
    evidenceWorkflowService.resubmit(id);
    refresh();
  };

  return {
    list,
    submit,
    approve,
    reject,
    resubmit,
    refresh,
  };
}