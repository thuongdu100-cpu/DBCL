export const mockEvidence = [
  {
    id: 1,
    title: "Minh chứng chuẩn CTDT",
    description: "File minh chứng chương trình đào tạo",
    status: "PENDING",
    createdBy: "faculty",
    assignedTo: "qa",
    history: [
      { action: "CREATE", by: "faculty" }
    ],
  },
  {
    id: 2,
    title: "Báo cáo kiểm định",
    description: "Báo cáo nội bộ",
    status: "REJECTED",
    createdBy: "faculty",
    assignedTo: "manager",
    history: [
      { action: "CREATE", by: "faculty" },
      { action: "REJECT", by: "manager", reason: "Thiếu file" }
    ],
  }
];