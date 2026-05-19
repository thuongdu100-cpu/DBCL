
import { useParams } from "react-router-dom";

import {
  standards,
  workflowData,
} from "../data/mockData";

import StandardBreadcrumb from "../components/StandardBreadcrumb";
import WorkflowProgress from "../components/WorkflowProgress";
import WorkflowStatusBadge from "../components/WorkflowStatusBadge";
import SummaryCard from "../components/SummaryCard";
import DetailPanel from "../components/DetailPanel";

import "../styles/standard.css";

export default function IndicatorWorkflowPage() {

  const {
    standardId,
    criteriaId,
    indicatorId,
  } = useParams();

  const standard =
    standards.find(
      s => s.id === standardId
    );

  const criteria =
    standard?.criteria?.find(
      c => c.id === criteriaId
    );

  const indicator =
    criteria?.indicators?.find(
      i => i.id === indicatorId
    );

  const workflow =
    workflowData.find(
      w => w.indicatorId === indicatorId
    ) || null;

  if (
    !standard ||
    !criteria ||
    !indicator
  ) {

    return (

      <div className="standard-page">

        <div className="standard-left">

          <StandardBreadcrumb />

          <div className="workflow-empty">
            Không tìm thấy workflow chỉ báo
          </div>

        </div>

      </div>
    );
  }

  return (

    <div className="standard-page">

      <div className="standard-left">

        <StandardBreadcrumb />

        <div className="workflow-page">

          <div className="workflow-header">

            <div className="page-header">

              <div className="page-subtitle">
                Workflow chỉ báo
              </div>

              <h2 className="workflow-title">
                {indicator.name}
              </h2>

            </div>

            <WorkflowStatusBadge
              status={
                workflow?.status ||
                "PENDING"
              }
            />

          </div>

          <div className="workflow-description">
            {indicator.description}
          </div>

          <WorkflowProgress
            progress={
              workflow?.progress || 0
            }
          />

          <div className="workflow-grid">

            <SummaryCard
              title="Phân công"
              value={
                workflow?.assignmentCount || 0
              }
            />

            <SummaryCard
              title="Minh chứng"
              value={
                workflow?.evidenceCount || 0
              }
            />

            <SummaryCard
              title="Feedback"
              value={
                workflow?.feedbackCount || 0
              }
            />

            <SummaryCard
              title="Đã duyệt"
              value={
                workflow?.approvedCount || 0
              }
            />

          </div>

        </div>

      </div>

      <DetailPanel
        standard={standard}
        criteria={criteria}
        indicator={indicator}
      />

    </div>
  );
}

