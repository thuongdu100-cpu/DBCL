
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

  {
    id: "STD-03",
    name: "Tiêu chuẩn nghiên cứu khoa học",
    description: "Đánh giá hoạt động nghiên cứu và chuyển giao",

    criteria: [

      {
        id: "CRI-06",
        name: "Công bố khoa học",
        description: "Hiệu quả công bố nghiên cứu",

        indicators: [

          {
            id: "IND-10",
            name: "Bài báo quốc tế",
            description: "Số lượng bài báo SCOPUS/ISI",
          },

          {
            id: "IND-11",
            name: "Hội nghị khoa học",
            description: "Tham gia hội nghị chuyên ngành",
          },

        ],
      },

      {
        id: "CRI-07",
        name: "Chuyển giao công nghệ",
        description: "Ứng dụng nghiên cứu thực tiễn",

        indicators: [

          {
            id: "IND-12",
            name: "Dự án doanh nghiệp",
            description: "Hợp tác doanh nghiệp",
          },

        ],
      },

    ],
  },

  {
    id: "STD-04",
    name: "Tiêu chuẩn người học",
    description: "Đánh giá chất lượng sinh viên",

    criteria: [

      {
        id: "CRI-08",
        name: "Kết quả học tập",
        description: "Hiệu quả đào tạo sinh viên",

        indicators: [

          {
            id: "IND-13",
            name: "Tỷ lệ tốt nghiệp",
            description: "Sinh viên tốt nghiệp đúng hạn",
          },

          {
            id: "IND-14",
            name: "Sinh viên xuất sắc",
            description: "Tỷ lệ sinh viên loại giỏi",
          },

        ],
      },

      {
        id: "CRI-09",
        name: "Việc làm sau tốt nghiệp",
        description: "Khả năng đáp ứng thị trường",

        indicators: [

          {
            id: "IND-15",
            name: "Tỷ lệ có việc làm",
            description: "Có việc sau 12 tháng",
          },

        ],
      },

    ],
  },

  {
    id: "STD-05",
    name: "Tiêu chuẩn phục vụ cộng đồng",
    description: "Đánh giá trách nhiệm xã hội",

    criteria: [

      {
        id: "CRI-10",
        name: "Hoạt động cộng đồng",
        description: "Đóng góp xã hội",

        indicators: [

          {
            id: "IND-16",
            name: "Chương trình thiện nguyện",
            description: "Số lượng chương trình xã hội",
          },

          {
            id: "IND-17",
            name: "Hợp tác địa phương",
            description: "Liên kết cộng đồng",
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

  {
    indicatorId: "IND-10",
    progress: 88,
    status: "APPROVED",
    assignmentCount: 8,
    evidenceCount: 26,
    feedbackCount: 2,
    approvedCount: 24,
  },

  {
    indicatorId: "IND-11",
    progress: 67,
    status: "IN_PROGRESS",
    assignmentCount: 5,
    evidenceCount: 11,
    feedbackCount: 4,
    approvedCount: 7,
  },

  {
    indicatorId: "IND-12",
    progress: 40,
    status: "NEED_FIX",
    assignmentCount: 3,
    evidenceCount: 8,
    feedbackCount: 5,
    approvedCount: 2,
  },

  {
    indicatorId: "IND-13",
    progress: 95,
    status: "APPROVED",
    assignmentCount: 6,
    evidenceCount: 30,
    feedbackCount: 1,
    approvedCount: 28,
  },

  {
    indicatorId: "IND-14",
    progress: 72,
    status: "IN_PROGRESS",
    assignmentCount: 4,
    evidenceCount: 15,
    feedbackCount: 3,
    approvedCount: 10,
  },

  {
    indicatorId: "IND-15",
    progress: 20,
    status: "PENDING",
    assignmentCount: 2,
    evidenceCount: 4,
    feedbackCount: 0,
    approvedCount: 0,
  },

  {
    indicatorId: "IND-16",
    progress: 83,
    status: "APPROVED",
    assignmentCount: 5,
    evidenceCount: 17,
    feedbackCount: 2,
    approvedCount: 14,
  },

  {
    indicatorId: "IND-17",
    progress: 58,
    status: "IN_PROGRESS",
    assignmentCount: 3,
    evidenceCount: 7,
    feedbackCount: 2,
    approvedCount: 4,
  },

];

