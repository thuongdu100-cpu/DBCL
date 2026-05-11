export const standards = [
  {
    id: "STD-01",
    name: "Tiêu chuẩn đào tạo",
    description: "Đánh giá chất lượng đào tạo toàn diện",

    criteria: [
      {
        id: "CRI-01",
        name: "Đội ngũ giảng viên",
        description: "Chất lượng và năng lực giảng viên",

        indicators: [
          {
            id: "IND-01",
            name: "Tỷ lệ tiến sĩ",
            description: "Tỷ lệ giảng viên có học vị tiến sĩ",
          },
          {
            id: "IND-02",
            name: "Nghiên cứu khoa học",
            description: "Số lượng công trình nghiên cứu",
          },
          {
            id: "IND-05",
            name: "Giảng viên quốc tế",
            description: "Tỷ lệ giảng viên nước ngoài",
          },
        ],
      },

      {
        id: "CRI-02",
        name: "Cơ sở vật chất",
        description: "Hạ tầng phục vụ đào tạo",

        indicators: [
          {
            id: "IND-03",
            name: "Thiết bị giảng dạy",
            description: "Thiết bị hỗ trợ học tập",
          },
          {
            id: "IND-06",
            name: "Phòng học thông minh",
            description: "Smart classroom readiness",
          },
        ],
      },

      {
        id: "CRI-04",
        name: "Chương trình đào tạo",
        description: "Chất lượng chương trình học",

        indicators: [
          {
            id: "IND-07",
            name: "Cập nhật giáo trình",
            description: "Chu kỳ cập nhật nội dung",
          },
        ],
      },
    ],
  },

  {
    id: "STD-02",
    name: "Tiêu chuẩn kiểm định",
    description: "Hệ thống đảm bảo chất lượng",

    criteria: [
      {
        id: "CRI-03",
        name: "Quản lý chất lượng",
        description: "Hệ thống QA/QC",

        indicators: [
          {
            id: "IND-04",
            name: "ISO nội bộ",
            description: "Triển khai ISO",
          },
          {
            id: "IND-08",
            name: "Kiểm định nội bộ",
            description: "Audit nội bộ định kỳ",
          },
        ],
      },

      {
        id: "CRI-05",
        name: "Báo cáo & minh chứng",
        description: "Hệ thống báo cáo",

        indicators: [
          {
            id: "IND-09",
            name: "Tần suất báo cáo",
            description: "Chu kỳ báo cáo chất lượng",
          },
        ],
      },
    ],
  },
];

export const workflowData = [
  {
    indicatorId: "IND-01",
    progress: 75,
    status: "IN_PROGRESS",
    assignmentCount: 5,
    evidenceCount: 18,
    feedbackCount: 3,
    approvedCount: 10,
  },

  {
    indicatorId: "IND-02",
    progress: 92,
    status: "IN_PROGRESS",
    assignmentCount: 6,
    evidenceCount: 22,
    feedbackCount: 5,
    approvedCount: 15,
  },

  {
    indicatorId: "IND-03",
    progress: 45,
    status: "NEED_FIX",
    assignmentCount: 2,
    evidenceCount: 5,
    feedbackCount: 4,
    approvedCount: 2,
  },

  {
    indicatorId: "IND-04",
    progress: 100,
    status: "APPROVED",
    assignmentCount: 4,
    evidenceCount: 12,
    feedbackCount: 1,
    approvedCount: 12,
  },

  {
    indicatorId: "IND-05",
    progress: 60,
    status: "IN_PROGRESS",
    assignmentCount: 3,
    evidenceCount: 9,
    feedbackCount: 2,
    approvedCount: 5,
  },

  {
    indicatorId: "IND-06",
    progress: 30,
    status: "PENDING",
    assignmentCount: 1,
    evidenceCount: 3,
    feedbackCount: 0,
    approvedCount: 0,
  },

  {
    indicatorId: "IND-07",
    progress: 80,
    status: "IN_PROGRESS",
    assignmentCount: 4,
    evidenceCount: 14,
    feedbackCount: 2,
    approvedCount: 9,
  },

  {
    indicatorId: "IND-08",
    progress: 55,
    status: "NEED_FIX",
    assignmentCount: 2,
    evidenceCount: 6,
    feedbackCount: 3,
    approvedCount: 3,
  },

  {
    indicatorId: "IND-09",
    progress: 10,
    status: "PENDING",
    assignmentCount: 1,
    evidenceCount: 1,
    feedbackCount: 0,
    approvedCount: 0,
  },
];