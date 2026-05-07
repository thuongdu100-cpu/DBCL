// src/features/standard/data/mockData.js

export const mockStandards = [
  {
    id: "S1",
    name: "Standard 1 - Quality Assurance",
    criteria: [
      {
        id: "C1",
        name: "Criteria 1.1 - Teaching Quality",
        indicators: [
          {
            id: "I1",
            name: "Indicator 1.1.1 - Lesson Plan",
            description: "Check lesson plan compliance"
          },
          {
            id: "I2",
            name: "Indicator 1.1.2 - Assessment Method",
            description: "Evaluate assessment method quality"
          }
        ]
      }
    ]
  },
  {
    id: "S2",
    name: "Standard 2 - Curriculum",
    criteria: [
      {
        id: "C2",
        name: "Criteria 2.1 - Curriculum Design",
        indicators: [
          {
            id: "I3",
            name: "Indicator 2.1.1 - Structure",
            description: "Curriculum structure evaluation"
          }
        ]
      }
    ]
  }
];