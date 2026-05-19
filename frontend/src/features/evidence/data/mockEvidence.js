export const mockEvidence = [

  {
    id: 1,
    code: "MC001",
    title: "Biên bản họp khoa tháng 5",
    description:
      "Biên bản họp khoa phục vụ công tác kiểm định chất lượng.",
    standard: "Tiêu chuẩn 1",
    criterion: "1.1",
    department: "Khoa Công nghệ thông tin",
    status: "approved",
    uploadedBy: "Nguyễn Văn A",
    uploaderRole: "faculty",
    reviewer: "Trần Văn B",
    fileType: "PDF",
    fileSize: "2.4 MB",
    createdAt: "2026-05-10",
    updatedAt: "2026-05-12",

    timeline: [
      {
        id: 1,
        action: "Tải minh chứng",
        actor: "Nguyễn Văn A",
        role: "faculty",
        date: "2026-05-10",
        status: "completed",
      },
    ],
  },

  {
    id: 2,
    code: "MC002",
    title: "Kế hoạch cải tiến chương trình đào tạo",
    description:
      "Kế hoạch cải tiến CTĐT sau đánh giá nội bộ.",
    standard: "Tiêu chuẩn 2",
    criterion: "2.3",
    department: "Khoa Kinh tế",
    status: "reviewing",
    uploadedBy: "Phạm Văn D",
    uploaderRole: "faculty",
    reviewer: "Nguyễn Văn E",
    fileType: "DOCX",
    fileSize: "1.1 MB",
    createdAt: "2026-05-13",
    updatedAt: "2026-05-14",

    timeline: [],
  },

  {
    id: 3,
    code: "MC003",
    title: "Báo cáo khảo sát sinh viên",
    description:
      "Báo cáo khảo sát sinh viên cuối học kỳ.",
    standard: "Tiêu chuẩn 3",
    criterion: "3.2",
    department: "Phòng Khảo thí",
    status: "pending",
    uploadedBy: "Hoàng Văn F",
    uploaderRole: "faculty",
    reviewer: "Chưa phân công",
    fileType: "XLSX",
    fileSize: "3.8 MB",
    createdAt: "2026-05-14",
    updatedAt: "2026-05-14",

    timeline: [],
  },

  {
    id: 4,
    code: "MC004",
    title: "Báo cáo tự đánh giá khoa CNTT",
    description:
      "Báo cáo tự đánh giá phục vụ kiểm định.",
    standard: "Tiêu chuẩn 1",
    criterion: "1.2",
    department: "Khoa Công nghệ thông tin",
    status: "approved",
    uploadedBy: "Lê Minh H",
    uploaderRole: "leader",
    reviewer: "Phòng ĐBCL",
    fileType: "PDF",
    fileSize: "5.1 MB",
    createdAt: "2026-05-15",
    updatedAt: "2026-05-16",

    timeline: [],
  },

  {
    id: 5,
    code: "MC005",
    title: "Danh sách giảng viên cơ hữu",
    description:
      "Danh sách giảng viên phục vụ minh chứng nhân sự.",
    standard: "Tiêu chuẩn 4",
    criterion: "4.1",
    department: "Phòng Tổ chức",
    status: "approved",
    uploadedBy: "Nguyễn Thị L",
    uploaderRole: "staff",
    reviewer: "Trần Văn K",
    fileType: "XLSX",
    fileSize: "900 KB",
    createdAt: "2026-05-11",
    updatedAt: "2026-05-13",

    timeline: [],
  },

  {
    id: 6,
    code: "MC006",
    title: "Kế hoạch khảo sát cựu sinh viên",
    description:
      "Kế hoạch triển khai khảo sát đầu ra.",
    standard: "Tiêu chuẩn 5",
    criterion: "5.2",
    department: "Phòng CTSV",
    status: "reviewing",
    uploadedBy: "Trần Quốc M",
    uploaderRole: "faculty",
    reviewer: "Nguyễn Văn E",
    fileType: "DOCX",
    fileSize: "1.8 MB",
    createdAt: "2026-05-17",
    updatedAt: "2026-05-18",

    timeline: [],
  },

  {
    id: 7,
    code: "MC007",
    title: "Biên bản nghiệm thu đề tài",
    description:
      "Minh chứng nghiên cứu khoa học.",
    standard: "Tiêu chuẩn 6",
    criterion: "6.1",
    department: "Khoa Điện tử",
    status: "rejected",
    uploadedBy: "Võ Thành N",
    uploaderRole: "faculty",
    reviewer: "Lê Thị C",
    fileType: "PDF",
    fileSize: "2.2 MB",
    createdAt: "2026-05-12",
    updatedAt: "2026-05-15",

    timeline: [],
  },

  {
    id: 8,
    code: "MC008",
    title: "Kế hoạch cải tiến cơ sở vật chất",
    description:
      "Đề xuất nâng cấp phòng học.",
    standard: "Tiêu chuẩn 7",
    criterion: "7.3",
    department: "Phòng Quản trị",
    status: "pending",
    uploadedBy: "Đặng Văn P",
    uploaderRole: "staff",
    reviewer: "Chưa phân công",
    fileType: "DOCX",
    fileSize: "1.4 MB",
    createdAt: "2026-05-18",
    updatedAt: "2026-05-18",

    timeline: [],
  },

  {
    id: 9,
    code: "MC009",
    title: "Báo cáo đánh giá chuẩn đầu ra",
    description:
      "Đánh giá chuẩn đầu ra sinh viên.",
    standard: "Tiêu chuẩn 3",
    criterion: "3.4",
    department: "Khoa Ngoại ngữ",
    status: "approved",
    uploadedBy: "Nguyễn Minh Q",
    uploaderRole: "leader",
    reviewer: "Lê Thị C",
    fileType: "PDF",
    fileSize: "4.7 MB",
    createdAt: "2026-05-08",
    updatedAt: "2026-05-10",

    timeline: [],
  },

  {
    id: 10,
    code: "MC010",
    title: "Minh chứng hợp tác doanh nghiệp",
    description:
      "Biên bản ký kết hợp tác doanh nghiệp.",
    standard: "Tiêu chuẩn 8",
    criterion: "8.1",
    department: "Phòng Quan hệ doanh nghiệp",
    status: "reviewing",
    uploadedBy: "Phạm Văn S",
    uploaderRole: "staff",
    reviewer: "Nguyễn Văn E",
    fileType: "PDF",
    fileSize: "3.2 MB",
    createdAt: "2026-05-16",
    updatedAt: "2026-05-17",

    timeline: [],
  },

  {
    id: 11,
    code: "MC011",
    title: "Báo cáo tài chính khoa",
    description:
      "Tổng hợp ngân sách hoạt động.",
    standard: "Tiêu chuẩn 9",
    criterion: "9.2",
    department: "Phòng Tài chính",
    status: "approved",
    uploadedBy: "Lưu Thị T",
    uploaderRole: "staff",
    reviewer: "Trần Văn K",
    fileType: "XLSX",
    fileSize: "2.9 MB",
    createdAt: "2026-05-09",
    updatedAt: "2026-05-11",

    timeline: [],
  },

  {
    id: 12,
    code: "MC012",
    title: "Khảo sát mức độ hài lòng sinh viên",
    description:
      "Kết quả khảo sát chất lượng đào tạo.",
    standard: "Tiêu chuẩn 10",
    criterion: "10.1",
    department: "Phòng ĐBCL",
    status: "rejected",
    uploadedBy: "Nguyễn Hải U",
    uploaderRole: "qa",
    reviewer: "Lê Thị C",
    fileType: "PDF",
    fileSize: "1.6 MB",
    createdAt: "2026-05-13",
    updatedAt: "2026-05-15",

    timeline: [],
  },

];