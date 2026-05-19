export function getEvidenceStatistics(evidences = []) {

  return {

    total: evidences.length,

    pending:
      evidences.filter(
        item => item.status === "pending"
      ).length,

    reviewing:
      evidences.filter(
        item => item.status === "reviewing"
      ).length,

    approved:
      evidences.filter(
        item => item.status === "approved"
      ).length,

    rejected:
      evidences.filter(
        item => item.status === "rejected"
      ).length,

  };
}

/* ======================================================
   STATUS CHART
====================================================== */

export function getEvidenceStatusChart(evidences = []) {

  const stats =
    getEvidenceStatistics(evidences);

  return [

    {
      label: "Đã duyệt",
      value: stats.approved,
      className: "success",
    },

    {
      label: "Từ chối",
      value: stats.rejected,
      className: "danger",
    },

    {
      label: "Đang xử lý",
      value: stats.reviewing,
      className: "warning",
    },

    {
      label: "Chờ xử lý",
      value: stats.pending,
      className: "pending",
    },

  ];
}

/* ======================================================
   STANDARD DISTRIBUTION
====================================================== */

export function getStandardDistribution(
  evidences = []
) {

  const map = {};

  evidences.forEach((item) => {

    if (!map[item.standard]) {

      map[item.standard] = 0;
    }

    map[item.standard] += 1;
  });

  return Object.entries(map);
}

/* ======================================================
   DEPARTMENT DISTRIBUTION
====================================================== */

export function getDepartmentDistribution(
  evidences = []
) {

  const map = {};

  evidences.forEach((item) => {

    if (!map[item.department]) {

      map[item.department] = 0;
    }

    map[item.department] += 1;
  });

  return Object.entries(map);
}