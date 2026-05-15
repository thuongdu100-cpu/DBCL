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

      {
        id: 2,
        action: "Trưởng khoa tiếp nhận",
        actor: "Trần Văn B",
        role: "leader",
        date: "2026-05-11",
        status: "completed",
      },

      {
        id: 3,
        action: "Phòng ĐBCL phê duyệt",
        actor: "Lê Thị C",
        role: "qa",
        date: "2026-05-12",
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

    timeline: [

      {
        id: 1,
        action: "Tải minh chứng",
        actor: "Phạm Văn D",
        role: "faculty",
        date: "2026-05-13",
        status: "completed",
      },

      {
        id: 2,
        action: "Đưa vào hàng chờ kiểm duyệt",
        actor: "Nguyễn Văn E",
        role: "leader",
        date: "2026-05-14",
        status: "completed",
      },

    ],
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

    timeline: [

      {
        id: 1,
        action: "Tải minh chứng",
        actor: "Hoàng Văn F",
        role: "faculty",
        date: "2026-05-14",
        status: "completed",
      },

    ],
  },

];