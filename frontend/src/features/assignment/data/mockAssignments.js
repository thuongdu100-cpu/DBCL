
// ======================================================
// ASSIGNMENT STATUS
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

export const ASSIGNMENT_STATUS_LABEL = {
  [ASSIGNMENT_STATUS.CREATED]: "Tạo mới",
  [ASSIGNMENT_STATUS.ASSIGNED]: "Đã giao",
  [ASSIGNMENT_STATUS.IN_PROGRESS]: "Đang thực hiện",
  [ASSIGNMENT_STATUS.WAITING_REVIEW]: "Chờ xem xét",
  [ASSIGNMENT_STATUS.DONE]: "Hoàn thành",
  [ASSIGNMENT_STATUS.REJECTED]: "Từ chối",
  [ASSIGNMENT_STATUS.OVERDUE]: "Quá hạn",
};

// ======================================================
// ASSIGNMENT PRIORITY
// ======================================================

export const ASSIGNMENT_PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
  CRITICAL: "critical",
};

export const ASSIGNMENT_PRIORITY_LABEL = {
  [ASSIGNMENT_PRIORITY.LOW]: "Thấp",
  [ASSIGNMENT_PRIORITY.MEDIUM]: "Trung bình",
  [ASSIGNMENT_PRIORITY.HIGH]: "Cao",
  [ASSIGNMENT_PRIORITY.CRITICAL]: "Khẩn cấp",
};
export const mockAssignments = [

  // ======================================================
  // OLD DATA
  // ======================================================

  {
    id: "ASG001",

    title: "Thu thập minh chứng tiêu chuẩn 1.1",
    description:
      "Giảng viên thu thập minh chứng liên quan đến tiêu chuẩn 1.1 theo yêu cầu QA.",

    standardId: "STD01",
    criteriaId: "CR01",
    indicatorId: "IND01",

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

    status: "assigned",
    priority: "high",

    createdAt: "2026-05-10T08:00:00Z",
    assignedAt: "2026-05-10T09:00:00Z",

    startedAt: null,
    submittedAt: null,
    reviewedAt: null,

    dueDate: "2026-05-18T23:59:59Z",

    progress: 0,

    attachments: [],
    comments: [],

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
      {
        id: "F02",
        name: "evidence_bundle.zip",
      },
    ],

    comments: [],

    history: [
      {
        action: "created",
        by: "QA",
        timestamp: "2026-05-09T08:00:00Z",
      },
      {
        action: "assigned",
        by: "QA",
        timestamp: "2026-05-09T09:00:00Z",
      },
      {
        action: "submitted",
        by: "Manager B",
        timestamp: "2026-05-13T12:00:00Z",
      },
    ],
  },

  // ======================================================
  // NEW MOCK DATA
  // ======================================================

  {
    id: "ASG004",

    title: "Kiểm tra hồ sơ giảng viên",
    description:
      "Đối chiếu hồ sơ giảng viên với yêu cầu kiểm định mới nhất.",

    standardId: "STD04",
    criteriaId: "CR12",
    indicatorId: "IND30",

    createdBy: {
      id: "U01",
      name: "QA Officer",
      role: "qa",
    },

    assignedTo: {
      id: "U12",
      name: "Lê Văn C",
      role: "faculty",
    },

    reviewer: {
      id: "U03",
      name: "Manager C",
      role: "manager",
    },

    status: "done",
    priority: "medium",

    createdAt: "2026-05-01T08:00:00Z",
    assignedAt: "2026-05-01T09:00:00Z",

    startedAt: "2026-05-02T08:00:00Z",
    submittedAt: "2026-05-04T14:00:00Z",
    reviewedAt: "2026-05-05T10:00:00Z",

    dueDate: "2026-05-06T23:59:59Z",

    progress: 100,

    attachments: [
      {
        id: "F03",
        name: "faculty_list.xlsx",
      },
    ],

    comments: [
      {
        user: "Manager C",
        message: "Đã hoàn tất kiểm tra.",
        timestamp: "2026-05-05T10:00:00Z",
      },
    ],

    history: [
      {
        action: "created",
        by: "QA Officer",
        timestamp: "2026-05-01T08:00:00Z",
      },
      {
        action: "assigned",
        by: "QA Officer",
        timestamp: "2026-05-01T09:00:00Z",
      },
      {
        action: "started",
        by: "Lê Văn C",
        timestamp: "2026-05-02T08:00:00Z",
      },
      {
        action: "submitted",
        by: "Lê Văn C",
        timestamp: "2026-05-04T14:00:00Z",
      },
      {
        action: "approved",
        by: "Manager C",
        timestamp: "2026-05-05T10:00:00Z",
      },
    ],
  },

  {
    id: "ASG005",

    title: "Cập nhật báo cáo tự đánh giá",
    description:
      "Bổ sung số liệu mới vào báo cáo tự đánh giá cấp khoa.",

    standardId: "STD05",
    criteriaId: "CR15",
    indicatorId: "IND33",

    createdBy: {
      id: "U01",
      name: "QA Officer",
      role: "qa",
    },

    assignedTo: {
      id: "U13",
      name: "Phạm Thị D",
      role: "faculty",
    },

    reviewer: {
      id: "U02",
      name: "Manager B",
      role: "manager",
    },

    status: "rejected",
    priority: "high",

    createdAt: "2026-05-06T08:00:00Z",
    assignedAt: "2026-05-06T09:30:00Z",

    startedAt: "2026-05-07T07:00:00Z",
    submittedAt: "2026-05-08T16:00:00Z",

    reviewedAt: "2026-05-09T10:00:00Z",

    dueDate: "2026-05-10T23:59:59Z",

    progress: 75,

    attachments: [],

    comments: [
      {
        user: "Manager B",
        message: "Thiếu minh chứng số liệu năm 2025.",
        timestamp: "2026-05-09T10:00:00Z",
      },
    ],

    history: [
      {
        action: "created",
        by: "QA Officer",
        timestamp: "2026-05-06T08:00:00Z",
      },
      {
        action: "assigned",
        by: "QA Officer",
        timestamp: "2026-05-06T09:30:00Z",
      },
      {
        action: "submitted",
        by: "Phạm Thị D",
        timestamp: "2026-05-08T16:00:00Z",
      },
      {
        action: "rejected",
        by: "Manager B",
        timestamp: "2026-05-09T10:00:00Z",
        reason: "Thiếu dữ liệu minh chứng",
      },
    ],
  },

  {
    id: "ASG006",

    title: "Tổng hợp minh chứng nghiên cứu khoa học",
    description:
      "Thu thập bài báo và đề tài nghiên cứu của khoa CNTT.",

    standardId: "STD06",
    criteriaId: "CR18",
    indicatorId: "IND40",

    createdBy: {
      id: "U00",
      name: "Admin",
      role: "admin",
    },

    assignedTo: {
      id: "U10",
      name: "Nguyễn Văn A",
      role: "faculty",
    },

    reviewer: {
      id: "U03",
      name: "Manager C",
      role: "manager",
    },

    status: "overdue",
    priority: "critical",

    createdAt: "2026-05-02T08:00:00Z",
    assignedAt: "2026-05-02T09:00:00Z",

    startedAt: "2026-05-03T08:00:00Z",

    submittedAt: null,
    reviewedAt: null,

    dueDate: "2026-05-08T23:59:59Z",

    progress: 60,

    attachments: [
      {
        id: "F04",
        name: "research_list.docx",
      },
    ],

    comments: [
      {
        user: "Nguyễn Văn A",
        message: "Đang chờ dữ liệu từ phòng khoa học.",
        timestamp: "2026-05-08T09:00:00Z",
      },
    ],

    history: [
      {
        action: "created",
        by: "Admin",
        timestamp: "2026-05-02T08:00:00Z",
      },
      {
        action: "assigned",
        by: "Admin",
        timestamp: "2026-05-02T09:00:00Z",
      },
      {
        action: "started",
        by: "Nguyễn Văn A",
        timestamp: "2026-05-03T08:00:00Z",
      },
    ],
  },

  {
    id: "ASG007",

    title: "Đánh giá chuẩn đầu ra",
    description:
      "Rà soát mức độ đáp ứng chuẩn đầu ra của sinh viên.",

    standardId: "STD07",
    criteriaId: "CR22",
    indicatorId: "IND44",

    createdBy: {
      id: "U01",
      name: "QA Officer",
      role: "qa",
    },

    assignedTo: null,

    reviewer: null,

    status: "created",
    priority: "low",

    createdAt: "2026-05-15T08:00:00Z",
    assignedAt: null,

    startedAt: null,
    submittedAt: null,
    reviewedAt: null,

    dueDate: "2026-05-30T23:59:59Z",

    progress: 0,

    attachments: [],
    comments: [],

    history: [
      {
        action: "created",
        by: "QA Officer",
        timestamp: "2026-05-15T08:00:00Z",
      },
    ],
  },

];