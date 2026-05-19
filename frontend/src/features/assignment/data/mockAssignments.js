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

// ======================================================
// MOCK ASSIGNMENTS (ENHANCED - SAFE EXTENSION)
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

    // =========================
    // NEW SAFE EXTENSIONS
    // =========================
    tags: ["evidence", "audit"],
    department: "CNTT",
    createdSource: "system",
    riskLevel: "medium",
    viewCount: 4,
    lastUpdated: "2026-05-10T09:00:00Z",
  },

  {
    id: "ASG002",
    title: "Cập nhật minh chứng chương trình đào tạo",
    description:
      "Faculty cập nhật minh chứng mới cho chương trình đào tạo 2024.",

    standardId: "STD02",
    criteriaId: "CR05",
    indicatorId: "IND09",

    createdBy: { id: "U01", name: "QA Officer", role: "qa" },

    assignedTo: { id: "U11", name: "Trần Thị B", role: "faculty" },

    reviewer: { id: "U03", name: "Manager C", role: "manager" },

    status: "in_progress",
    priority: "medium",

    createdAt: "2026-05-11T10:00:00Z",
    assignedAt: "2026-05-11T10:30:00Z",
    startedAt: "2026-05-12T08:00:00Z",

    submittedAt: null,
    reviewedAt: null,

    dueDate: "2026-05-20T23:59:59Z",
    progress: 45,

    attachments: [{ id: "F01", name: "curriculum.pdf" }],
    comments: [
      {
        user: "Trần Thị B",
        message: "Đang thu thập dữ liệu từ khoa",
        timestamp: "2026-05-12T10:00:00Z",
      },
    ],

    history: [
      { action: "created", by: "QA Officer", timestamp: "2026-05-11T10:00:00Z" },
      { action: "assigned", by: "QA Officer", timestamp: "2026-05-11T10:30:00Z" },
      { action: "started", by: "Trần Thị B", timestamp: "2026-05-12T08:00:00Z" },
    ],

    // NEW
    tags: ["curriculum", "update"],
    department: "CNTT",
    createdSource: "system",
    riskLevel: "low",
    viewCount: 8,
    lastUpdated: "2026-05-12T10:00:00Z",
  },

  {
    id: "ASG003",
    title: "Rà soát minh chứng kiểm định",
    description: "Manager review toàn bộ minh chứng trước khi audit.",

    standardId: "STD03",
    criteriaId: "CR10",
    indicatorId: "IND21",

    assignedTo: { id: "U02", name: "Manager B", role: "manager" },

    reviewer: { id: "U00", name: "Admin", role: "admin" },

    status: "waiting_review",
    priority: "critical",

    createdAt: "2026-05-09T08:00:00Z",
    assignedAt: "2026-05-09T09:00:00Z",

    startedAt: "2026-05-10T08:00:00Z",
    submittedAt: "2026-05-13T12:00:00Z",

    reviewedAt: null,

    dueDate: "2026-05-15T23:59:59Z",
    progress: 90,

    attachments: [{ id: "F02", name: "evidence_bundle.zip" }],
    comments: [],

    history: [
      { action: "created", by: "QA", timestamp: "2026-05-09T08:00:00Z" },
      { action: "submitted", by: "Manager B", timestamp: "2026-05-13T12:00:00Z" },
    ],

    // NEW
    tags: ["audit", "verification"],
    department: "QA",
    createdSource: "system",
    riskLevel: "high",
    viewCount: 15,
    lastUpdated: "2026-05-13T12:30:00Z",
  },

  {
    id: "ASG004",
    title: "Kiểm tra hồ sơ giảng viên",
    description: "Đối chiếu hồ sơ giảng viên với yêu cầu kiểm định mới nhất.",

    status: "done",
    priority: "medium",

    assignedTo: { id: "U12", name: "Lê Văn C", role: "faculty" },

    dueDate: "2026-05-06T23:59:59Z",
    progress: 100,

    // NEW
    tags: ["faculty", "profile"],
    department: "HR",
    createdSource: "import",
    riskLevel: "low",
    viewCount: 21,
    lastUpdated: "2026-05-05T10:00:00Z",
  },

  {
    id: "ASG005",
    title: "Cập nhật báo cáo tự đánh giá",

    status: "rejected",
    priority: "high",

    assignedTo: { id: "U13", name: "Phạm Thị D", role: "faculty" },

    dueDate: "2026-05-10T23:59:59Z",
    progress: 75,

    // NEW
    tags: ["report", "self-evaluation"],
    department: "QA",
    createdSource: "manual",
    riskLevel: "high",
    viewCount: 11,
    lastUpdated: "2026-05-09T10:00:00Z",
  },

  {
    id: "ASG006",
    title: "Tổng hợp minh chứng nghiên cứu khoa học",

    status: "overdue",
    priority: "critical",

    assignedTo: { id: "U10", name: "Nguyễn Văn A", role: "faculty" },

    dueDate: "2026-05-08T23:59:59Z",
    progress: 60,

    // NEW
    tags: ["research", "science"],
    department: "CNTT",
    createdSource: "system",
    riskLevel: "high",
    viewCount: 30,
    lastUpdated: "2026-05-08T09:00:00Z",
  },

  {
    id: "ASG007",
    title: "Đánh giá chuẩn đầu ra",

    status: "created",
    priority: "low",

    assignedTo: null,

    dueDate: "2026-05-30T23:59:59Z",
    progress: 0,

    // NEW
    tags: ["output", "evaluation"],
    department: "QA",
    createdSource: "manual",
    riskLevel: "low",
    viewCount: 2,
    lastUpdated: "2026-05-15T08:00:00Z",
  },
  {
  id: "ASG008",

  title: "Kiểm định cơ sở vật chất phòng học",
  description: "Đánh giá tình trạng cơ sở vật chất phục vụ giảng dạy.",

  standardId: "STD08",
  criteriaId: "CR25",
  indicatorId: "IND50",

  createdBy: { id: "U01", name: "QA Officer", role: "qa" },
  assignedTo: { id: "U14", name: "Hoàng Văn E", role: "faculty" },
  reviewer: { id: "U03", name: "Manager C", role: "manager" },

  status: "in_progress",
  priority: "high",

  createdAt: "2026-05-16T08:00:00Z",
  assignedAt: "2026-05-16T09:00:00Z",
  startedAt: "2026-05-16T10:00:00Z",

  submittedAt: null,
  reviewedAt: null,

  dueDate: "2026-05-25T23:59:59Z",
  progress: 30,

  attachments: [],
  comments: [],

  history: [
    { action: "created", by: "QA Officer", timestamp: "2026-05-16T08:00:00Z" },
    { action: "assigned", by: "QA Officer", timestamp: "2026-05-16T09:00:00Z" },
    { action: "started", by: "Hoàng Văn E", timestamp: "2026-05-16T10:00:00Z" }
  ],

  tags: ["facility", "audit"],
  department: "QA",
  createdSource: "system",
  riskLevel: "medium",
  viewCount: 6,
  lastUpdated: "2026-05-16T10:00:00Z",
},
{
  id: "ASG009",

  title: "Rà soát chương trình đào tạo mới",
  description: "Kiểm tra sự phù hợp của CTĐT theo chuẩn mới.",

  standardId: "STD09",
  criteriaId: "CR27",
  indicatorId: "IND55",

  createdBy: { id: "U01", name: "QA Officer", role: "qa" },
  assignedTo: { id: "U11", name: "Trần Thị B", role: "faculty" },
  reviewer: { id: "U02", name: "Manager B", role: "manager" },

  status: "waiting_review",
  priority: "critical",

  createdAt: "2026-05-14T08:00:00Z",
  assignedAt: "2026-05-14T09:00:00Z",
  startedAt: "2026-05-14T10:00:00Z",
  submittedAt: "2026-05-17T12:00:00Z",

  reviewedAt: null,

  dueDate: "2026-05-18T23:59:59Z",
  progress: 85,

  attachments: [],
  comments: [],

  history: [
    { action: "created", by: "QA Officer", timestamp: "2026-05-14T08:00:00Z" },
    { action: "submitted", by: "Trần Thị B", timestamp: "2026-05-17T12:00:00Z" }
  ],

  tags: ["curriculum", "review"],
  department: "CNTT",
  createdSource: "system",
  riskLevel: "high",
  viewCount: 18,
  lastUpdated: "2026-05-17T12:30:00Z",
},
{
  id: "ASG010",

  title: "Tổng hợp minh chứng giảng dạy",
  description: "Thu thập minh chứng giảng dạy học phần kỳ 1.",

  status: "done",
  priority: "medium",

  assignedTo: { id: "U10", name: "Nguyễn Văn A", role: "faculty" },

  dueDate: "2026-05-12T23:59:59Z",
  progress: 100,

  history: [],

  tags: ["teaching", "evidence"],
  department: "CNTT",
  createdSource: "import",
  riskLevel: "low",
  viewCount: 25,
  lastUpdated: "2026-05-12T11:00:00Z",
},
{
  id: "ASG011",

  title: "Kiểm tra minh chứng nghiên cứu quốc tế",
  description: "Đối chiếu bài báo quốc tế của giảng viên.",

  status: "overdue",
  priority: "critical",

  assignedTo: { id: "U15", name: "Phạm Văn F", role: "faculty" },

  dueDate: "2026-05-10T23:59:59Z",
  progress: 55,

  history: [],

  tags: ["research", "international"],
  department: "CNTT",
  createdSource: "system",
  riskLevel: "high",
  viewCount: 40,
  lastUpdated: "2026-05-10T08:00:00Z",
},{
  id: "ASG012",

  title: "Đánh giá chất lượng đào tạo nội bộ",
  description: "Rà soát toàn bộ chất lượng đào tạo theo tiêu chuẩn QA.",

  status: "assigned",
  priority: "high",

  assignedTo: { id: "U16", name: "Lê Thị G", role: "faculty" },
  reviewer: { id: "U03", name: "Manager C", role: "manager" },

  dueDate: "2026-05-28T23:59:59Z",
  progress: 20,

  history: [],

  tags: ["quality", "internal-review"],
  department: "QA",
  createdSource: "system",
  riskLevel: "medium",
  viewCount: 9,
  lastUpdated: "2026-05-16T09:00:00Z",
}
];