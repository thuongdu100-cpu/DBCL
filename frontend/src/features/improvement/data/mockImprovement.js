// features/improvement/data/mockImprovement.js

export const mockImprovement = [
  // =========================
  // NOT STARTED
  // =========================

  {
    id: "IMP-001",

    standardCode: "STD-01",
    criterionCode: "CRI-01.02",
    indicatorCode: "IND-01.02.01",

    evaluationId: "EV-2026-001",

    criterion: "Đội ngũ giảng viên",
    indicator: "Tỷ lệ giảng viên có chứng chỉ nghiệp vụ",

    issue:
      "Chỉ đạt 58% giảng viên có chứng chỉ nghiệp vụ sư phạm",

    objective:
      "Đạt tối thiểu 80% trước học kỳ mới",

    actions:
      "Tổ chức khóa đào tạo và hỗ trợ đăng ký chứng chỉ",

    owner: "QA Department",

    status: "not_started",

    priority: "high",

    progress: 0,

    deadline: "2026-07-15",
  },

  {
    id: "IMP-002",

    standardCode: "STD-03",
    criterionCode: "CRI-03.01",
    indicatorCode: "IND-03.01.02",

    evaluationId: "EV-2026-002",

    criterion: "Cơ sở vật chất",
    indicator: "Số lượng phòng thực hành đạt chuẩn",

    issue:
      "Thiếu 2 phòng lab phục vụ thực hành môn mạng máy tính",

    objective:
      "Hoàn thành bổ sung 2 phòng lab mới",

    actions:
      "Mua thiết bị và cải tạo phòng thực hành",

    owner: "Admin Team",

    status: "not_started",

    priority: "medium",

    progress: 0,

    deadline: "2026-08-01",
  },

  // =========================
  // IN PROGRESS
  // =========================

  {
    id: "IMP-003",

    standardCode: "STD-02",
    criterionCode: "CRI-02.03",
    indicatorCode: "IND-02.03.01",

    evaluationId: "EV-2026-003",

    criterion: "Chương trình đào tạo",
    indicator: "Tỷ lệ học phần cập nhật syllabus",

    issue:
      "Nhiều học phần chưa cập nhật syllabus phiên bản mới",

    objective:
      "100% học phần cập nhật trước học kỳ Fall",

    actions:
      "Yêu cầu trưởng bộ môn rà soát và cập nhật",

    owner: "Academic Affairs",

    status: "in_progress",

    priority: "high",

    progress: 45,

    deadline: "2026-06-20",
  },

  {
    id: "IMP-004",

    standardCode: "STD-05",
    criterionCode: "CRI-05.02",
    indicatorCode: "IND-05.02.04",

    evaluationId: "EV-2026-004",

    criterion: "Khảo sát sinh viên",
    indicator: "Mức độ hài lòng sinh viên",

    issue:
      "Điểm hài lòng môn học chỉ đạt 3.1/5",

    objective:
      "Đạt mức tối thiểu 4.0/5",

    actions:
      "Rà soát phương pháp giảng dạy và hỗ trợ học tập",

    owner: "Student Service",

    status: "in_progress",

    priority: "medium",

    progress: 60,

    deadline: "2026-06-30",
  },

  {
    id: "IMP-005",

    standardCode: "STD-04",
    criterionCode: "CRI-04.01",
    indicatorCode: "IND-04.01.03",

    evaluationId: "EV-2026-005",

    criterion: "Nghiên cứu khoa học",
    indicator: "Số bài báo quốc tế",

    issue:
      "Số lượng bài báo quốc tế giảm 20%",

    objective:
      "Khôi phục số lượng bài báo về mức KPI",

    actions:
      "Hỗ trợ kinh phí nghiên cứu và workshop",

    owner: "Research Office",

    status: "in_progress",

    priority: "low",

    progress: 35,

    deadline: "2026-09-10",
  },

  // =========================
  // REVIEW
  // =========================

  {
    id: "IMP-006",

    standardCode: "STD-06",
    criterionCode: "CRI-06.01",
    indicatorCode: "IND-06.01.01",

    evaluationId: "EV-2026-006",

    criterion: "Minh chứng",
    indicator: "Tỷ lệ minh chứng hợp lệ",

    issue:
      "Nhiều minh chứng upload sai định dạng",

    objective:
      "Đảm bảo toàn bộ minh chứng hợp lệ",

    actions:
      "QA rà soát và chuẩn hóa minh chứng",

    owner: "QA Team",

    status: "review",

    priority: "medium",

    progress: 90,

    deadline: "2026-05-25",
  },

  {
    id: "IMP-007",

    standardCode: "STD-07",
    criterionCode: "CRI-07.03",
    indicatorCode: "IND-07.03.02",

    evaluationId: "EV-2026-007",

    criterion: "Hệ thống CNTT",
    indicator: "Tỷ lệ uptime hệ thống",

    issue:
      "Hệ thống downtime vượt SLA",

    objective:
      "Đảm bảo uptime ≥ 99.9%",

    actions:
      "Tối ưu server và monitoring",

    owner: "IT Department",

    status: "review",

    priority: "high",

    progress: 95,

    deadline: "2026-05-18",
  },

  // =========================
  // DONE
  // =========================

  {
    id: "IMP-008",

    standardCode: "STD-08",
    criterionCode: "CRI-08.01",
    indicatorCode: "IND-08.01.01",

    evaluationId: "EV-2026-008",

    criterion: "Thư viện",
    indicator: "Số lượng tài liệu điện tử",

    issue:
      "Thiếu tài liệu học tập chuyên ngành AI",

    objective:
      "Bổ sung đầy đủ tài liệu AI",

    actions:
      "Mua license ebook và journal",

    owner: "Library Center",

    status: "done",

    priority: "medium",

    progress: 100,

    deadline: "2026-04-15",
  },

  {
    id: "IMP-009",

    standardCode: "STD-09",
    criterionCode: "CRI-09.02",
    indicatorCode: "IND-09.02.02",

    evaluationId: "EV-2026-009",

    criterion: "Hỗ trợ sinh viên",
    indicator: "Tỷ lệ sinh viên có việc làm",

    issue:
      "Tỷ lệ có việc làm sau tốt nghiệp thấp",

    objective:
      "Đạt ≥ 90% sinh viên có việc làm",

    actions:
      "Mở rộng doanh nghiệp liên kết",

    owner: "Career Center",

    status: "done",

    priority: "high",

    progress: 100,

    deadline: "2026-03-30",
  },

];