// ======================================================
// ASSIGNMENT MOCK DATA (WORKFLOW-BASED)
// ======================================================

export const ASSIGNMENT_STATUS = {
  CREATED: "created",
  ASSIGNED: "assigned",
  IN_PROGRESS: "in_progress",
  WAITING_REVIEW: "waiting_review",
  DONE: "done",
  REJECTED: "rejected",
  OVERDUE: "overdue",
};

export const ASSIGNMENT_PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
  CRITICAL: "critical",
};

// ======================================================
// MOCK ASSIGNMENTS
// ======================================================

export const mockAssignments = [
  {
    id: "ASG001",

    title: "Thu thập minh chứng tiêu chuẩn 1.1",
    description:
      "Giảng viên thu thập minh chứng liên quan đến tiêu chuẩn 1.1 theo yêu cầu QA.",

    standardId: "STD01",
    criteriaId: "CR01",
    indicatorId: "IND01",

    // PEOPLE
    createdBy: {
      id: "U01",
      name: "QA Officer",
      role: "qa",
    },

    assignedTo: {
      id: "U10",
      name: "Nguyễn Văn A",
      role: "faculty",
    },

    reviewer: {
      id: "U02",
      name: "Manager B",
      role: "manager",
    },

    // WORKFLOW STATE
    status: "assigned",

    priority: "high",

    // TIME CONTROL
    createdAt: "2026-05-10T08:00:00Z",
    assignedAt: "2026-05-10T09:00:00Z",
    startedAt: null,
    submittedAt: null,
    reviewedAt: null,

    dueDate: "2026-05-18T23:59:59Z",

    // PROGRESS
    progress: 0,

    // BUSINESS DATA
    attachments: [],
    comments: [],

    // HISTORY (AUDIT TRAIL)
    history: [
      {
        action: "created",
        by: "QA Officer",
        timestamp: "2026-05-10T08:00:00Z",
      },
      {
        action: "assigned",
        by: "QA Officer",
        timestamp: "2026-05-10T09:00:00Z",
      },
    ],
  },

  {
    id: "ASG002",

    title: "Cập nhật minh chứng chương trình đào tạo",
    description:
      "Faculty cập nhật minh chứng mới cho chương trình đào tạo 2024.",

    standardId: "STD02",
    criteriaId: "CR05",
    indicatorId: "IND09",

    createdBy: {
      id: "U01",
      name: "QA Officer",
      role: "qa",
    },

    assignedTo: {
      id: "U11",
      name: "Trần Thị B",
      role: "faculty",
    },

    reviewer: {
      id: "U03",
      name: "Manager C",
      role: "manager",
    },

    status: "in_progress",
    priority: "medium",

    createdAt: "2026-05-11T10:00:00Z",
    assignedAt: "2026-05-11T10:30:00Z",
    startedAt: "2026-05-12T08:00:00Z",

    submittedAt: null,
    reviewedAt: null,

    dueDate: "2026-05-20T23:59:59Z",

    progress: 45,

    attachments: [
      {
        id: "F01",
        name: "curriculum.pdf",
      },
    ],

    comments: [
      {
        user: "Trần Thị B",
        message: "Đang thu thập dữ liệu từ khoa",
        timestamp: "2026-05-12T10:00:00Z",
      },
    ],

    history: [
      {
        action: "created",
        by: "QA Officer",
        timestamp: "2026-05-11T10:00:00Z",
      },
      {
        action: "assigned",
        by: "QA Officer",
        timestamp: "2026-05-11T10:30:00Z",
      },
      {
        action: "started",
        by: "Trần Thị B",
        timestamp: "2026-05-12T08:00:00Z",
      },
    ],
  },

  {
    id: "ASG003",

    title: "Rà soát minh chứng kiểm định",
    description: "Manager review toàn bộ minh chứng trước khi audit.",

    standardId: "STD03",
    criteriaId: "CR10",
    indicatorId: "IND21",

    createdBy: {
      id: "U01",
      name: "QA Officer",
      role: "qa",
    },

    assignedTo: {
      id: "U02",
      name: "Manager B",
      role: "manager",
    },

    reviewer: {
      id: "U00",
      name: "Admin",
      role: "admin",
    },

    status: "waiting_review",
    priority: "critical",

    createdAt: "2026-05-09T08:00:00Z",
    assignedAt: "2026-05-09T09:00:00Z",
    startedAt: "2026-05-10T08:00:00Z",
    submittedAt: "2026-05-13T12:00:00Z",

    reviewedAt: null,

    dueDate: "2026-05-15T23:59:59Z",

    progress: 90,

    attachments: [
      { id: "F02", name: "evidence_bundle.zip" },
    ],

    comments: [],

    history: [
      { action: "created", by: "QA", timestamp: "2026-05-09T08:00:00Z" },
      { action: "assigned", by: "QA", timestamp: "2026-05-09T09:00:00Z" },
      { action: "submitted", by: "Manager B", timestamp: "2026-05-13T12:00:00Z" },
    ],
  },
];