export const mockRoles = [
  {
    id: 1,
    code: "admin",
    name: "Quản trị hệ thống",
    description: "Toàn quyền hệ thống",
    users: ["admin", "qa"], // 👈 fake user mapping
    status: "ACTIVE",
    permissions: [
      "view_dashboard",
      "manage_users",
      "manage_roles",
      "manage_standard",
      "manage_evaluation",
      "manage_assignment",
      "view_evidence",
      "upload_evidence",
      "review_evidence",
      "manage_improvement",
      "view_report",
    ],
  },

  {
    id: 2,
    code: "qa",
    name: "Phòng KT & ĐBCL",
    description: "Quản lý tiêu chuẩn và đánh giá",
    users: ["qa"],
    status: "ACTIVE",
    permissions: [
      "view_dashboard",
      "manage_standard",
      "manage_evaluation",
      "manage_assignment",
      "view_evidence",
      "upload_evidence",
      "review_evidence",
      "manage_improvement",
      "view_report",
    ],
  },

  {
    id: 3,
    code: "manager",
    name: "Trưởng phòng",
    description: "Rà soát & phê duyệt",
    users: ["manager"],
    status: "ACTIVE",
    permissions: [
      "view_dashboard",
      "review_evidence",
      "manage_improvement",
      "view_report",
    ],
  },

  {
    id: 4,
    code: "faculty",
    name: "Đơn vị / Khoa",
    description: "Upload minh chứng",
    users: ["faculty"],
    status: "ACTIVE",
    permissions: [
      "view_dashboard",
      "view_evidence",
      "upload_evidence",
    ],
  },

  {
    id: 5,
    code: "leader",
    name: "Lãnh đạo",
    description: "Xem báo cáo",
    users: ["leader"],
    status: "ACTIVE",
    permissions: [
      "view_dashboard",
      "view_report",
    ],
  },
];