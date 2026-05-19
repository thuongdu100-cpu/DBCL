import { useMemo } from "react";

import "../styles/dashboard.css";

import ProgressChart from "../components/ProgressChart";
import EvidencePieChart from "../components/EvidencePieChart";
import EvaluationBarChart from "../components/AssignmentStatusChart";
import {
  standards,
  workflowData,
} from "../../standard/data/mockData";


export default function StandardDashboard() {

  /* ======================================================
     KPI ANALYTICS
  ====================================================== */

  const dashboardStats = useMemo(() => {

    const totalStandards =
      standards.length;

    const totalCriteria =
      standards.reduce(

        (sum, standard) => {

          return (
            sum +
            standard.criteria.length
          );

        },

        0
      );

    const totalIndicators =
      standards.reduce(

        (sum, standard) => {

          return (

            sum +

            standard.criteria.reduce(

              (criteriaSum, criteria) => {

                return (
                  criteriaSum +
                  criteria.indicators.length
                );

              },

              0
            )

          );

        },

        0
      );

    const averageProgress = Math.round(

      workflowData.reduce(

        (sum, item) => {

          return sum + item.progress;

        },

        0

      ) / workflowData.length

    );

    return {

      totalStandards,
      totalCriteria,
      totalIndicators,
      averageProgress,

    };

  }, []);

  /* ======================================================
     RENDER
  ====================================================== */

  return (

    <div className="dashboard">

      {/* KPI */}
      <div className="kpi-grid">

        <div className="kpi-card">

          <div className="kpi-title">
            Tổng tiêu chuẩn
          </div>

          <div className="kpi-value">
            {dashboardStats.totalStandards}
          </div>

        </div>

        <div className="kpi-card">

          <div className="kpi-title">
            Tổng tiêu chí
          </div>

          <div className="kpi-value">
            {dashboardStats.totalCriteria}
          </div>

        </div>

        <div className="kpi-card">

          <div className="kpi-title">
            Tổng chỉ báo
          </div>

          <div className="kpi-value">
            {dashboardStats.totalIndicators}
          </div>

        </div>

        <div className="kpi-card">

          <div className="kpi-title">
            Tỷ lệ hoàn thành
          </div>

          <div className="kpi-value success">
            {dashboardStats.averageProgress}%
          </div>

        </div>

      </div>

      {/* ROW 1 */}
      <div className="dashboard-grid">

        <EvaluationBarChart />

        <ProgressChart />

      </div>

      {/* ROW 2 */}
      <div className="dashboard-grid">

        <EvidencePieChart />

      </div>

    </div>
  );
}