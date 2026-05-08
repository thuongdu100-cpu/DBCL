export const mockStandards = [
  {
    id: "S1",
    name: "Bộ tiêu chuẩn kiểm định chất lượng giảng dạy",
    description:
      "Đánh giá toàn diện hoạt động giảng dạy, phương pháp và hiệu quả đào tạo",
    year: 2026,

    criteria: [
      {
        id: "C1",
        name: "Hoạt động giảng dạy",
        description:
          "Đánh giá quá trình tổ chức và thực hiện giảng dạy",

        indicators: [
          {
            id: "I1",
            name: "Kế hoạch giảng dạy",
            description:
              "Mức độ đầy đủ và tuân thủ kế hoạch giảng dạy",
          },
          {
            id: "I2",
            name: "Phương pháp giảng dạy",
            description:
              "Sự phù hợp và hiệu quả của phương pháp giảng dạy",
          },
        ],
      },

      {
        id: "C2",
        name: "Đánh giá kết quả học tập",
        description:
          "Đánh giá quá trình kiểm tra và đánh giá sinh viên",

        indicators: [
          {
            id: "I3",
            name: "Công cụ đánh giá",
            description:
              "Sự đa dạng và phù hợp của công cụ đánh giá",
          },
        ],
      },
    ],
  },

  {
    id: "S2",
    name: "Bộ tiêu chuẩn chương trình đào tạo",
    description:
      "Đánh giá thiết kế, cấu trúc và chất lượng chương trình đào tạo",
    year: 2026,

    criteria: [
      {
        id: "C3",
        name: "Cấu trúc chương trình",
        description:
          "Mức độ hợp lý trong thiết kế chương trình",

        indicators: [
          {
            id: "I4",
            name: "Phân bổ học phần",
            description:
              "Tính hợp lý của phân bổ tín chỉ",
          },
        ],
      },
    ],
  },
];