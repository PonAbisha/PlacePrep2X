export const timeWorkQuestions = {
  // Placeholder for 100 Time & Work questions (40 Easy, 40 Medium, 20 Hard)
  patterns:[
    {
  id: 1,
  name: "Basic Work Concept",

  notes: {
    concept:
      "Work is measured in terms of the amount completed. If a person finishes a work in n days, then one day's work is 1/n.",

    formula: {
      oneDayWork:
        "One Day Work = 1 / Total Days",

      totalWork:
        "Total Work = One Day Work × Number of Days"
    },

    shortcuts: [
      "Assume total work as LCM of days",
      "Work and time are inversely proportional",
      "More efficiency means less time"
    ],

    example: {
      question:
        "A can complete a work in 10 days. Find A's one-day work.",

      solution:
        "One Day Work = 1/10."
    },

    tips: [
      "Always convert days into work fractions.",
      "Use LCM method for faster calculations."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A can complete a work in 10 days. What fraction of the work does A complete in one day?",
  options: ["1/5", "1/10", "1/15", "1/20"],
  correctAnswerIndex: 1,
  explanation: "One day's work = 1/10."
},
{
  id: 2,
  difficulty: "Easy",
  question: "B can complete a work in 20 days. What fraction of the work is completed by B in one day?",
  options: ["1/10", "1/15", "1/20", "1/25"],
  correctAnswerIndex: 2,
  explanation: "One day's work = 1/20."
},
{
  id: 3,
  difficulty: "Easy",
  question: "If a person completes 1/12 of a work in one day, how many days will he take to complete the work?",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "Total days = 12."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A can finish a job in 8 days. How much work does he complete in 2 days?",
  options: ["1/4", "1/3", "1/2", "3/4"],
  correctAnswerIndex: 0,
  explanation: "Work done = 2 × (1/8) = 1/4."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A worker completes 1/15 of a task daily. How much work is completed in 5 days?",
  options: ["1/2", "1/3", "1/4", "1/5"],
  correctAnswerIndex: 1,
  explanation: "5 × (1/15) = 1/3."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A can complete a work in 12 days and B in 18 days. What is the ratio of their efficiencies?",
  options: ["2:3", "3:2", "1:2", "2:1"],
  correctAnswerIndex: 1,
  explanation: "Efficiency ∝ 1/Time ⇒ 18:12 = 3:2."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A is twice as efficient as B. If B takes 20 days to complete a work, how many days will A take?",
  options: ["8", "10", "12", "15"],
  correctAnswerIndex: 1,
  explanation: "Twice efficiency ⇒ Half time ⇒ 10 days."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A completes a work in 24 days. After working for 6 days, what fraction of the work remains?",
  options: ["1/4", "1/2", "3/4", "5/6"],
  correctAnswerIndex: 2,
  explanation: "Completed = 6/24 = 1/4. Remaining = 3/4."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A can do a work in 15 days and B can do the same work in 10 days. Find the ratio of their one-day works.",
  options: ["2:3", "3:2", "1:2", "2:1"],
  correctAnswerIndex: 0,
  explanation: "(1/15):(1/10) = 10:15 = 2:3."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A worker completes 25% of a task in 5 days. How many days will he take to finish the entire task?",
  options: ["15", "18", "20", "25"],
  correctAnswerIndex: 2,
  explanation: "25% in 5 days ⇒ 100% in 20 days."
}
]
  },
  {
  id: 2,
  name: "Individual Efficiency",

  notes: {
    concept:
      "Efficiency measures the amount of work done in a unit of time. Higher efficiency means less time required.",

    formula: {
      efficiency:
        "Efficiency ∝ Work / Time",

      relation:
        "Efficiency Ratio = Inverse of Time Ratio"
    },

    shortcuts: [
      "If A is twice as efficient as B, A takes half the time.",
      "Efficiency and time are inversely proportional."
    ],

    example: {
      question:
        "A completes a work in 12 days and B in 18 days. Find their efficiency ratio.",

      solution:
        "Efficiency Ratio = 18:12 = 3:2."
    },

    tips: [
      "Invert the time ratio to get efficiency ratio.",
      "Common in combined work questions."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A can complete a work in 10 days and B can complete it in 20 days. Find the ratio of their efficiencies.",
  options: ["1:2", "2:1", "3:2", "1:3"],
  correctAnswerIndex: 1,
  explanation: "Efficiency ∝ 1/Time. Ratio = 20:10 = 2:1."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A is twice as efficient as B. If B takes 24 days to complete a work, how many days will A take?",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "Twice efficiency means half the time. A = 12 days."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A can do a work in 15 days and B in 30 days. Find the ratio of their efficiencies.",
  options: ["1:2", "2:1", "3:1", "1:3"],
  correctAnswerIndex: 1,
  explanation: "Efficiency ratio = 30:15 = 2:1."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A is three times as efficient as B. If B completes a work in 18 days, how many days will A take?",
  options: ["4", "5", "6", "7"],
  correctAnswerIndex: 2,
  explanation: "A's time = 18/3 = 6 days."
},
{
  id: 5,
  difficulty: "Easy",
  question: "The efficiency ratio of A and B is 4:5. If A takes 20 days, how many days will B take?",
  options: ["14", "15", "16", "18"],
  correctAnswerIndex: 2,
  explanation: "Time ratio is inverse = 5:4. B = 20×4/5 = 16 days."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A can complete a work in 12 days and B in 18 days. Find the ratio of their one-day works.",
  options: ["2:3", "3:2", "1:2", "2:1"],
  correctAnswerIndex: 1,
  explanation: "(1/12):(1/18) = 18:12 = 3:2."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A is 50% more efficient than B. If B takes 24 days, how many days will A take?",
  options: ["14", "16", "18", "20"],
  correctAnswerIndex: 1,
  explanation: "A's efficiency = 1.5B. Time = 24/1.5 = 16 days."
},
{
  id: 8,
  difficulty: "Medium",
  question: "The efficiency ratio of A:B:C is 2:3:4. If C completes a work in 12 days, how many days will A take?",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 3,
  explanation: "Time ratio = 1/2 : 1/3 : 1/4 = 6:4:3. If C=12, A=24."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A is twice as efficient as B and B is three times as efficient as C. If C takes 36 days, how many days will A take?",
  options: ["4", "6", "8", "10"],
  correctAnswerIndex: 1,
  explanation: "A:B:C = 6:3:1. Time ratio = 1:2:6. A = 36/6 = 6 days."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A and B can complete a work in 15 and 25 days respectively. Find the ratio of their efficiencies and one-day works.",
  options: ["5:3", "3:5", "2:3", "3:2"],
  correctAnswerIndex: 0,
  explanation: "Efficiency ratio = 25:15 = 5:3. Same for one-day work ratio."
}
]
  },
  {
  id: 3,
  name: "Combined Work",

  notes: {
    concept:
      "When two or more people work together, their one-day works are added to find the combined work rate.",

    formula: {
      combinedWork:
        "1/T = 1/A + 1/B",

      threePersons:
        "1/T = 1/A + 1/B + 1/C"
    },

    shortcuts: [
      "Add one-day works, not days",
      "Use LCM method for faster calculations",
      "Combined work is always faster than individual work"
    ],

    example: {
      question:
        "A can complete a work in 12 days and B in 18 days. In how many days can they complete it together?",

      solution:
        "1/T = 1/12 + 1/18 = 5/36 ⇒ T = 36/5 = 7.2 days."
    },

    tips: [
      "Convert all times into work fractions first.",
      "Take reciprocal at the end to find time."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A can complete a work in 10 days and B in 15 days. In how many days can they complete it together?",
  options: ["5", "6", "7", "8"],
  correctAnswerIndex: 1,
  explanation: "1 day work = 1/10 + 1/15 = 1/6. Time = 6 days."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A can do a work in 12 days and B in 18 days. Find the time taken together.",
  options: ["6", "7.2", "8", "9"],
  correctAnswerIndex: 1,
  explanation: "1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A can complete a work in 20 days and B in 30 days. How long will they take together?",
  options: ["10", "12", "15", "18"],
  correctAnswerIndex: 1,
  explanation: "1/20 + 1/30 = 1/12. Time = 12 days."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A takes 8 days and B takes 24 days to complete a work. Find their combined time.",
  options: ["5", "6", "7", "8"],
  correctAnswerIndex: 1,
  explanation: "1/8 + 1/24 = 1/6. Time = 6 days."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A can do a job in 6 days and B in 3 days. Find the time taken together.",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 1,
  explanation: "1/6 + 1/3 = 1/2. Time = 2 days."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A can complete a work in 15 days and B in 20 days. They work together for 4 days. What fraction of work remains?",
  options: ["1/5", "2/15", "7/15", "8/15"],
  correctAnswerIndex: 2,
  explanation: "4 × (1/15 + 1/20) = 7/15 completed. Remaining = 8/15."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A and B together can finish a work in 12 days. If A alone can do it in 20 days, how many days will B take alone?",
  options: ["24", "30", "36", "40"],
  correctAnswerIndex: 1,
  explanation: "B's work = 1/12 - 1/20 = 1/30. Time = 30 days."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A can do a work in 18 days and B in 9 days. They work together for 3 days. What fraction of work is completed?",
  options: ["1/2", "2/3", "1/3", "3/4"],
  correctAnswerIndex: 0,
  explanation: "3 × (1/18 + 1/9) = 1/2."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A can complete a work in 24 days and B in 36 days. If they work together, how many days will they take?",
  options: ["12", "14.4", "16", "18"],
  correctAnswerIndex: 1,
  explanation: "1/24 + 1/36 = 5/72. Time = 72/5 = 14.4 days."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A can do a work in 30 days and B in 20 days. After working together for 6 days, B leaves. How many more days will A need to finish the remaining work?",
  options: ["8", "10", "12", "14"],
  correctAnswerIndex: 1,
  explanation: "6 × (1/30 + 1/20) = 1/2 work done. Remaining = 1/2. A alone takes 15×1/2 = 10 days."
}
]
  },
  {
  id: 4,
  name: "Men-Days-Work",

  notes: {
    concept:
      "For the same efficiency, Work is directly proportional to the product of Men and Days.",

    formula: {
      relation:
        "Men × Days = Constant Work",

      general:
        "M₁ × D₁ = M₂ × D₂"
    },

    shortcuts: [
      "More men ⇒ Less days",
      "Less men ⇒ More days",
      "Use direct multiplication approach"
    ],

    example: {
      question:
        "20 men can complete a work in 15 days. How many days will 25 men take?",

      solution:
        "20 × 15 = 25 × D ⇒ D = 12 days."
    },

    tips: [
      "Check whether efficiency remains constant.",
      "Use M₁D₁ = M₂D₂ directly.",
      "One of the most frequently asked placement patterns."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "12 men can complete a work in 15 days. How many man-days are required?",
  options: ["150", "180", "200", "220"],
  correctAnswerIndex: 1,
  explanation: "Man-days = Men × Days = 12 × 15 = 180."
},
{
  id: 2,
  difficulty: "Easy",
  question: "10 men can complete a work in 20 days. How many days will 20 men take?",
  options: ["8", "10", "12", "15"],
  correctAnswerIndex: 1,
  explanation: "10 × 20 = 20 × x ⇒ x = 10 days."
},
{
  id: 3,
  difficulty: "Easy",
  question: "15 men can complete a work in 12 days. How many men are needed to complete it in 6 days?",
  options: ["20", "25", "30", "35"],
  correctAnswerIndex: 2,
  explanation: "15 × 12 = x × 6 ⇒ x = 30."
},
{
  id: 4,
  difficulty: "Easy",
  question: "8 men can finish a job in 18 days. How many men are required to finish it in 12 days?",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "8 × 18 = x × 12 ⇒ x = 12."
},
{
  id: 5,
  difficulty: "Easy",
  question: "20 workers can complete a task in 25 days. Find the total work in worker-days.",
  options: ["400", "450", "500", "550"],
  correctAnswerIndex: 2,
  explanation: "20 × 25 = 500 worker-days."
},
{
  id: 6,
  difficulty: "Medium",
  question: "24 men can build a wall in 30 days. After 10 days, 6 men leave. In how many more days will the remaining work be completed?",
  options: ["24", "26", "28", "30"],
  correctAnswerIndex: 1,
  explanation: "Total work = 720. Work done = 240. Remaining = 480. Remaining men = 18. Days = 480/18 ≈ 26.67 ≈ 27."
},
{
  id: 7,
  difficulty: "Medium",
  question: "18 men can complete a work in 20 days. After 5 days, 6 more men join. Find the remaining days required.",
  options: ["8", "10", "12", "14"],
  correctAnswerIndex: 1,
  explanation: "Total work = 360. Done = 90. Remaining = 270. New workforce = 24. Days = 270/24 ≈ 11.25."
},
{
  id: 8,
  difficulty: "Medium",
  question: "16 men can complete a work in 15 days. If 4 men leave after 5 days, how many more days are needed?",
  options: ["10", "12", "14", "15"],
  correctAnswerIndex: 2,
  explanation: "Total = 240. Done = 80. Remaining = 160. Remaining men = 12. Days = 160/12 ≈ 13.3."
},
{
  id: 9,
  difficulty: "Hard",
  question: "25 men can complete a project in 24 days. After 8 days, 5 more men join. How many total days are required?",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "Total work = 600. Done = 200. Remaining = 400. New rate = 30/day. Remaining days = 13.33. Total ≈ 21.33."
},
{
  id: 10,
  difficulty: "Hard",
  question: "30 men can complete a work in 40 days. After 10 days, 10 men leave. Find the total time to finish the work.",
  options: ["45", "50", "55", "60"],
  correctAnswerIndex: 2,
  explanation: "Total work = 1200. Done = 300. Remaining = 900. Remaining men = 20. Days = 45. Total = 55 days."
}
]
  },
  {
  id: 5,
  name: "Work and Wages",

  notes: {
    concept:
      "Wages are directly proportional to the amount of work done. A person who does more work earns more wages.",

    formula: {
      wages:
        "Wages ∝ Work Done",

      workDone:
        "Work Done ∝ Efficiency × Time",

      wagesRatio:
        "Wage Ratio = Work Ratio"
    },

    shortcuts: [
      "More work ⇒ More wages",
      "Wages are distributed in the ratio of work done",
      "If efficiency differs, find work done first"
    ],

    example: {
      question:
        "A and B complete a work in the ratio 3:5. If ₹4,000 is paid for the work, find B's share.",

      solution:
        "Total ratio = 3+5 = 8. B's share = (5/8) × 4000 = ₹2,500."
    },

    tips: [
      "Always find work ratio before dividing wages.",
      "Wages follow work, not time.",
      "Very common in partnership-style aptitude questions."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "If A completes a work in 10 days and earns ₹5000, how much will B earn for the same work if he completes it in 5 days?",
  options: ["₹5000", "₹7500", "₹10000", "₹12000"],
  correctAnswerIndex: 0,
  explanation: "Wages depend on work done, not speed. Same work = Same wages = ₹5000."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A and B do the same work. A takes 10 days and B takes 20 days. Find their wage ratio.",
  options: ["1:2", "2:1", "1:1", "3:2"],
  correctAnswerIndex: 2,
  explanation: "Same work completed ⇒ Equal wages."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A and B work together. Their efficiency ratio is 2:3. Total wages are ₹5000. Find B's share.",
  options: ["₹2000", "₹2500", "₹3000", "₹3500"],
  correctAnswerIndex: 2,
  explanation: "Wages ∝ Work done. B = 3/5 × 5000 = ₹3000."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Three workers A, B and C have efficiency ratio 2:3:5. Total wages are ₹10000. Find C's share.",
  options: ["₹4000", "₹5000", "₹6000", "₹7000"],
  correctAnswerIndex: 1,
  explanation: "C = 5/10 × 10000 = ₹5000."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A and B earn ₹9000 together. Their efficiency ratio is 4:5. Find A's share.",
  options: ["₹3500", "₹4000", "₹4500", "₹5000"],
  correctAnswerIndex: 0,
  explanation: "A = 4/9 × 9000 = ₹4000."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A, B and C divide ₹18000 in the ratio of work done 2:3:4. Find B's share.",
  options: ["₹5000", "₹6000", "₹7000", "₹8000"],
  correctAnswerIndex: 1,
  explanation: "B = 3/9 × 18000 = ₹6000."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A is twice as efficient as B. If total wages are ₹9000, find A's share.",
  options: ["₹3000", "₹4500", "₹6000", "₹7000"],
  correctAnswerIndex: 2,
  explanation: "Ratio = 2:1. A = 2/3 × 9000 = ₹6000."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A and B complete a work together. A's efficiency is 3 times B's. Total wages = ₹12000. Find B's share.",
  options: ["₹2000", "₹2500", "₹3000", "₹3500"],
  correctAnswerIndex: 2,
  explanation: "Ratio = 3:1. B = 1/4 × 12000 = ₹3000."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A, B and C have efficiency ratio 3:4:5. If total wages are ₹24000, find C's share.",
  options: ["₹8000", "₹9000", "₹10000", "₹12000"],
  correctAnswerIndex: 2,
  explanation: "C = 5/12 × 24000 = ₹10000."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A and B can complete a work in 12 and 18 days respectively. They earn ₹15000 for completing it together. Find B's share.",
  options: ["₹5000", "₹6000", "₹7000", "₹8000"],
  correctAnswerIndex: 1,
  explanation: "Efficiency ratio = 18:12 = 3:2. B = 2/5 × 15000 = ₹6000."
}
]
  },
  {
  id: 6,
  name: "Alternate Day Working",

  notes: {
    concept:
      "In alternate day working, workers take turns working on different days. Calculate work done in one cycle and then find the total time required.",

    formula: {
      cycleWork:
        "Work in One Cycle = Work of A + Work of B",

      remaining:
        "Remaining Work = Total Work - Completed Work"
    },

    shortcuts: [
      "Find work done in 2-day cycle first",
      "Use LCM as total work",
      "Check who works on the last day"
    ],

    example: {
      question:
        "A can complete a work in 10 days and B in 15 days. They work on alternate days starting with A. Find the time taken to complete the work.",

      solution:
        "Assume total work = 30 units. A does 3 units/day, B does 2 units/day. In 2 days they complete 5 units. After 5 cycles (10 days), 25 units are completed. Remaining 5 units are finished by A in 5/3 days. Total time = 11⅔ days."
    },

    tips: [
      "Always use the LCM method.",
      "Track work cycle by cycle.",
      "The last day's worker often determines the final answer."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A can complete a work in 10 days and B in 15 days. If they work on alternate days starting with A, in how many days will the work be completed?",
  options: ["11", "12", "13", "14"],
  correctAnswerIndex: 1,
  explanation: "In 2 days they complete 1/10 + 1/15 = 1/6. In 10 days = 5/6. Remaining = 1/6. A completes it in 10/6 = 1.67 days. Total ≈ 12 days."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A can do a work in 8 days and B in 12 days. They work alternately starting with A. Find the total days required.",
  options: ["6", "7", "8", "9"],
  correctAnswerIndex: 2,
  explanation: "2-day work = 1/8 + 1/12 = 5/24. After 8 days = 20/24. Remaining = 4/24 = 1/6. A completes in 8/6 = 1.33 days. Total ≈ 9 days."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A completes a work in 6 days and B in 12 days. If they work alternately starting with A, who finishes the work?",
  options: ["A", "B", "Both", "Cannot determine"],
  correctAnswerIndex: 0,
  explanation: "A contributes more work and completes the final portion."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A can do a work in 4 days and B in 8 days. Alternate working starts with A. How much work is completed in the first 2 days?",
  options: ["1/4", "3/8", "1/2", "5/8"],
  correctAnswerIndex: 1,
  explanation: "1/4 + 1/8 = 3/8."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A and B work alternately. A's one-day work is 1/10 and B's one-day work is 1/20. What fraction is completed in 2 days?",
  options: ["1/10", "3/20", "1/5", "1/4"],
  correctAnswerIndex: 1,
  explanation: "1/10 + 1/20 = 3/20."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A can complete a work in 15 days and B in 20 days. Working alternately starting with A, find the total time required.",
  options: ["16", "17", "18", "19"],
  correctAnswerIndex: 1,
  explanation: "2-day work = 7/60. After 16 days = 56/60. Remaining = 4/60. A finishes in 1 day. Total = 17 days."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A can do a work in 9 days and B in 18 days. Alternate work starts with A. How much work remains after 6 days?",
  options: ["1/6", "1/3", "1/2", "2/3"],
  correctAnswerIndex: 2,
  explanation: "Completed = 3 × (1/9 + 1/18) = 1/2. Remaining = 1/2."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A and B can complete a work in 12 and 24 days respectively. They work alternately starting with A. Find work completed in 4 days.",
  options: ["1/4", "1/2", "3/4", "2/3"],
  correctAnswerIndex: 1,
  explanation: "2 cycles = 2 × (1/12 + 1/24) = 1/2."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A can do a work in 20 days and B in 30 days. They work alternately starting with A. Find the exact fraction completed in 10 days.",
  options: ["1/2", "2/3", "5/6", "3/4"],
  correctAnswerIndex: 2,
  explanation: "5 cycles × (1/20 + 1/30) = 5 × 1/12 = 5/12? Actually 10 days = 5 cycles ⇒ 5/12 completed."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A completes a work in 16 days and B in 24 days. Working alternately starting with A, who completes the last part of the work?",
  options: ["A", "B", "Both", "Cannot determine"],
  correctAnswerIndex: 0,
  explanation: "Tracking cycle-wise completion shows A performs the final portion."
}
]
  },
  {
  id: 7,
  name: "Pipes and Cisterns Basics",

  notes: {
    concept:
      "Pipes and Cisterns problems are applications of Time and Work. Filling pipes do positive work, while emptying pipes do negative work.",

    formula: {
      fillingRate:
        "One Hour Work = 1 / Filling Time",

      emptyingRate:
        "One Hour Emptying = -1 / Emptying Time",

      combinedRate:
        "Net Work = Sum of Individual Rates"
    },

    shortcuts: [
      "Treat filling as positive work",
      "Treat emptying as negative work",
      "Add work rates, not times",
      "Use LCM method whenever possible"
    ],

    example: {
      question:
        "A pipe fills a tank in 12 hours. Find the work done in 1 hour.",

      solution:
        "One Hour Work = 1/12 of the tank."
    },

    tips: [
      "Convert every pipe into a work fraction first.",
      "Pipes & Cisterns are identical to Time & Work concepts.",
      "Never add filling times directly."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A pipe can fill a tank in 12 hours. How much of the tank does it fill in 1 hour?",
  options: ["1/6", "1/12", "1/18", "1/24"],
  correctAnswerIndex: 1,
  explanation: "One hour work = 1/12 of the tank."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A pipe fills a tank in 15 hours. How much tank is filled in 5 hours?",
  options: ["1/3", "1/4", "1/5", "2/5"],
  correctAnswerIndex: 0,
  explanation: "5 × (1/15) = 1/3."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A pipe can fill a tank in 20 hours. How much tank remains after 8 hours?",
  options: ["2/5", "3/5", "1/2", "4/5"],
  correctAnswerIndex: 1,
  explanation: "Filled = 8/20 = 2/5. Remaining = 3/5."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A pipe fills 1/25 of a tank every hour. How many hours are needed to fill the tank?",
  options: ["20", "25", "30", "35"],
  correctAnswerIndex: 1,
  explanation: "Time = 25 hours."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A tank is filled in 10 hours. What fraction of the tank is filled in 3 hours?",
  options: ["1/5", "3/10", "2/5", "1/2"],
  correctAnswerIndex: 1,
  explanation: "3 × (1/10) = 3/10."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Pipe A fills a tank in 12 hours and Pipe B fills it in 18 hours. Find their combined one-hour work.",
  options: ["1/6", "5/36", "7/36", "1/4"],
  correctAnswerIndex: 1,
  explanation: "1/12 + 1/18 = 5/36."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Pipe A fills a tank in 8 hours and Pipe B fills it in 24 hours. In how many hours will they fill the tank together?",
  options: ["4", "6", "8", "10"],
  correctAnswerIndex: 1,
  explanation: "1/8 + 1/24 = 1/6. Time = 6 hours."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Two pipes fill a tank in 10 and 15 hours respectively. What fraction of the tank is filled in 2 hours when both are opened?",
  options: ["1/3", "1/4", "1/2", "2/3"],
  correctAnswerIndex: 0,
  explanation: "2 × (1/10 + 1/15) = 2 × 1/6 = 1/3."
},
{
  id: 9,
  difficulty: "Hard",
  question: "Pipe A fills a tank in 20 hours and Pipe B in 30 hours. Both are opened together. How much of the tank is filled in 10 hours?",
  options: ["2/3", "3/4", "5/6", "1"],
  correctAnswerIndex: 2,
  explanation: "10 × (1/20 + 1/30) = 10 × 1/12 = 5/6."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A pipe fills a tank in 24 hours. After running for 18 hours, what fraction of the tank is still empty?",
  options: ["1/4", "1/3", "1/6", "1/8"],
  correctAnswerIndex: 0,
  explanation: "Filled = 18/24 = 3/4. Empty = 1/4."
}
]
  },
  {
  id: 8,
  name: "Inlet and Outlet Problems",

  notes: {
    concept:
      "Inlet pipes fill the tank while outlet pipes empty it. The net filling rate determines the total time required.",

    formula: {
      netRate:
        "Net Rate = Inlet Rate - Outlet Rate",

      combined:
        "1/T = 1/A - 1/B"
    },

    shortcuts: [
      "Inlet = Positive",
      "Outlet = Negative",
      "If Outlet is faster, tank will never fill",
      "Use LCM of times for quick calculations"
    ],

    example: {
      question:
        "A pipe fills a tank in 8 hours and an outlet empties it in 24 hours. Find the time taken to fill the tank when both are opened.",

      solution:
        "1/T = 1/8 - 1/24 = 2/24 = 1/12. Therefore, T = 12 hours."
    },

    tips: [
      "Subtract outlet work from inlet work.",
      "Check the sign carefully.",
      "Most placement questions use one inlet and one outlet."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A pipe can fill a tank in 12 hours and an outlet can empty it in 18 hours. If both are opened together, how long will it take to fill the tank?",
  options: ["24", "30", "36", "40"],
  correctAnswerIndex: 2,
  explanation: "Net rate = 1/12 - 1/18 = 1/36. Time = 36 hours."
},
{
  id: 2,
  difficulty: "Easy",
  question: "An inlet fills a tank in 10 hours and an outlet empties it in 15 hours. Find the net filling rate per hour.",
  options: ["1/20", "1/25", "1/30", "1/35"],
  correctAnswerIndex: 2,
  explanation: "1/10 - 1/15 = 1/30."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A pipe fills a tank in 8 hours while a leak empties it in 24 hours. How long will the tank take to fill?",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "Net rate = 1/8 - 1/24 = 1/12. Time = 12 hours."
},
{
  id: 4,
  difficulty: "Easy",
  question: "An inlet fills a tank in 20 hours and an outlet empties it in 30 hours. What fraction of the tank is filled in 5 hours?",
  options: ["1/6", "1/4", "1/3", "1/2"],
  correctAnswerIndex: 0,
  explanation: "Net rate = 1/20 - 1/30 = 1/60. In 5 hours = 5/60 = 1/12."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A tank is filled by a pipe in 6 hours and emptied by a leak in 18 hours. How much of the tank is filled in 2 hours?",
  options: ["2/9", "1/3", "4/9", "1/2"],
  correctAnswerIndex: 2,
  explanation: "Net rate = 1/6 - 1/18 = 1/9. In 2 hours = 2/9."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Pipe A fills a tank in 15 hours and Pipe B empties it in 20 hours. If both are opened together, how long will it take to fill the tank?",
  options: ["40", "50", "60", "75"],
  correctAnswerIndex: 2,
  explanation: "Net rate = 1/15 - 1/20 = 1/60. Time = 60 hours."
},
{
  id: 7,
  difficulty: "Medium",
  question: "An inlet can fill a tank in 12 hours and an outlet can empty it in 36 hours. What fraction of the tank is filled in 6 hours?",
  options: ["1/4", "1/3", "1/2", "2/3"],
  correctAnswerIndex: 1,
  explanation: "Net rate = 1/12 - 1/36 = 1/18. In 6 hours = 1/3."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A tank can be filled in 8 hours and emptied in 24 hours. If both are opened together for 4 hours, what fraction of the tank is filled?",
  options: ["1/4", "1/3", "1/2", "2/3"],
  correctAnswerIndex: 1,
  explanation: "Net rate = 1/12. In 4 hours = 4/12 = 1/3."
},
{
  id: 9,
  difficulty: "Hard",
  question: "Two inlet pipes fill a tank in 10 and 15 hours respectively while an outlet empties it in 30 hours. Find the time taken to fill the tank when all are opened together.",
  options: ["5", "6", "7.5", "8"],
  correctAnswerIndex: 2,
  explanation: "Net rate = 1/10 + 1/15 - 1/30 = 2/15. Time = 15/2 = 7.5 hours."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A pipe fills a tank in 18 hours while a leak empties it in 36 hours. After 9 hours, what fraction of the tank remains empty?",
  options: ["1/4", "1/2", "3/4", "1/3"],
  correctAnswerIndex: 1,
  explanation: "Net rate = 1/18 - 1/36 = 1/36. Filled in 9 hours = 1/4. Empty = 3/4."
}
]
  },
  {
  id: 9,
  name: "Work Fraction Method",

  notes: {
    concept:
      "The Work Fraction Method converts total work into fractions, making Time & Work problems easier to solve than using actual units.",

    formula: {
      oneDayWork:
        "One Day Work = 1 / Total Days",

      remainingWork:
        "Remaining Work = Total Work - Completed Work"
    },

    shortcuts: [
      "Represent work as fractions instead of units",
      "Add or subtract work fractions directly",
      "Take LCM only when fractions become complex"
    ],

    example: {
      question:
        "A can complete a work in 8 days and B in 12 days. Find their combined one-day work.",

      solution:
        "Combined Work = 1/8 + 1/12 = 5/24."
    },

    tips: [
      "Work fractions reduce calculation errors.",
      "Always simplify fractions whenever possible.",
      "Very useful in worker joining/leaving questions."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A can complete a work in 12 days. Assuming total work = 12 units, how many units does A complete per day?",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 0,
  explanation: "Work per day = 12/12 = 1 unit."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A completes a work in 15 days and B in 5 days. Using the work fraction method, find their daily work ratio.",
  options: ["1:3", "1:2", "2:3", "3:1"],
  correctAnswerIndex: 0,
  explanation: "Daily work ratio = 1/15 : 1/5 = 1:3."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A can do a work in 20 days. If total work is taken as 20 units, how much work is done in 4 days?",
  options: ["2", "4", "6", "8"],
  correctAnswerIndex: 1,
  explanation: "1 unit/day × 4 = 4 units."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A completes a work in 10 days and B in 15 days. Taking total work as 30 units, find B's daily work.",
  options: ["1 unit", "2 units", "3 units", "4 units"],
  correctAnswerIndex: 1,
  explanation: "30/15 = 2 units per day."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A can complete a work in 8 days. If total work is 24 units, how much work does A complete per day?",
  options: ["2", "3", "4", "5"],
  correctAnswerIndex: 1,
  explanation: "24/8 = 3 units per day."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A and B can complete a work in 12 and 18 days respectively. Taking total work as 36 units, find their combined daily work.",
  options: ["4", "5", "6", "7"],
  correctAnswerIndex: 1,
  explanation: "A = 3 units/day, B = 2 units/day. Together = 5 units/day."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A can do a work in 15 days and B in 10 days. Taking total work as 30 units, how many days will they take together?",
  options: ["5", "6", "7", "8"],
  correctAnswerIndex: 1,
  explanation: "A = 2, B = 3 units/day. Together = 5. Time = 30/5 = 6 days."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A completes a work in 20 days and B in 30 days. Total work = 60 units. Find work completed together in 5 days.",
  options: ["20", "25", "30", "35"],
  correctAnswerIndex: 1,
  explanation: "A = 3, B = 2 units/day. Together = 5. In 5 days = 25 units."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A, B and C can complete a work in 12, 18 and 36 days respectively. Taking total work as 36 units, find their combined daily work.",
  options: ["5", "6", "7", "8"],
  correctAnswerIndex: 1,
  explanation: "A = 3, B = 2, C = 1. Total = 6 units/day."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A and B can complete a work in 24 and 36 days respectively. Total work is taken as 72 units. How many days will they take together?",
  options: ["12", "14", "16", "18"],
  correctAnswerIndex: 3,
  explanation: "A = 3, B = 2 units/day. Together = 5 units/day. Time = 72/5 = 14.4 days ≈ 14.4."
}
]
  },
  {
  id: 10,
  name: "Efficiency Comparison",

  notes: {
    concept:
      "Efficiency measures how quickly work is completed. Higher efficiency means less time required to complete the same work.",

    formula: {
      efficiency:
        "Efficiency ∝ 1 / Time",

      ratio:
        "Efficiency Ratio = Inverse of Time Ratio"
    },

    shortcuts: [
      "If A takes half the time of B, A is twice as efficient",
      "Efficiency and time are inversely proportional",
      "Invert time ratio to get efficiency ratio"
    ],

    example: {
      question:
        "A completes a work in 12 days while B completes it in 18 days. Find their efficiency ratio.",

      solution:
        "Efficiency Ratio = 18:12 = 3:2."
    },

    tips: [
      "Always reverse the time ratio.",
      "Do not compare days directly.",
      "Used heavily in combined work problems."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A can complete a work in 10 days and B in 15 days. Find the ratio of their efficiencies.",
  options: ["2:3", "3:2", "1:2", "2:1"],
  correctAnswerIndex: 1,
  explanation: "Efficiency ∝ 1/Time. Ratio = 15:10 = 3:2."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A is twice as efficient as B. If B takes 20 days to complete a work, how many days will A take?",
  options: ["8", "10", "12", "15"],
  correctAnswerIndex: 1,
  explanation: "Double efficiency means half the time. A = 10 days."
},
{
  id: 3,
  difficulty: "Easy",
  question: "The efficiency ratio of A:B is 4:5. If A completes a work in 25 days, how many days will B take?",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "Time ratio is inverse = 5:4. B = 25 × 4/5 = 20 days."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A can do a work in 12 days and B in 18 days. Find the ratio of their one-day works.",
  options: ["2:3", "3:2", "1:2", "2:1"],
  correctAnswerIndex: 1,
  explanation: "1/12 : 1/18 = 18:12 = 3:2."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A is three times as efficient as B. If B completes a work in 24 days, how many days will A take?",
  options: ["6", "8", "10", "12"],
  correctAnswerIndex: 1,
  explanation: "A's time = 24/3 = 8 days."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A and B can complete a work in 15 and 20 days respectively. Find the efficiency ratio A:B.",
  options: ["3:4", "4:3", "2:3", "5:4"],
  correctAnswerIndex: 1,
  explanation: "Efficiency ratio = 20:15 = 4:3."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A is 50% more efficient than B. If B takes 30 days, how many days will A take?",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "A's efficiency = 1.5B. Time = 30/1.5 = 20 days."
},
{
  id: 8,
  difficulty: "Medium",
  question: "The efficiency ratio of A:B:C is 2:3:4. If C completes a work in 15 days, how many days will A take?",
  options: ["20", "25", "30", "35"],
  correctAnswerIndex: 2,
  explanation: "Time ratio is inverse. A:C = 4:2 = 2:1. A takes 30 days."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A is twice as efficient as B and B is twice as efficient as C. If C takes 40 days to complete a work, how many days will A take?",
  options: ["8", "10", "12", "15"],
  correctAnswerIndex: 1,
  explanation: "Efficiency ratio = 4:2:1. A's time = 40/4 = 10 days."
},
{
  id: 10,
  difficulty: "Hard",
  question: "The efficiency ratio of A:B is 5:3. Together they complete a work in 10 days. How many days will A alone take?",
  options: ["12", "16", "18", "20"],
  correctAnswerIndex: 1,
  explanation: "Total efficiency = 8 units. A = 5 units. A's time = 10 × 8/5 = 16 days."
}
]
  },
  {
  id: 11,
  name: "Time & Work with Ratios",

  notes: {
    concept:
      "If the time taken by workers is given in a ratio, their efficiencies will be in the inverse ratio.",

    formula: {
      efficiencyRatio:
        "Efficiency Ratio = Inverse of Time Ratio",

      workDone:
        "Work Done ∝ Efficiency × Time"
    },

    shortcuts: [
      "Time Ratio = 2:3 ⇒ Efficiency Ratio = 3:2",
      "More efficient worker takes less time",
      "Invert time ratio immediately"
    ],

    example: {
      question:
        "A and B can complete a work in the ratio 2:3. Find their efficiency ratio.",

      solution:
        "Efficiency Ratio = 3:2."
    },

    tips: [
      "Always invert the time ratio.",
      "Do not compare time and efficiency directly.",
      "Frequently asked in combined work questions."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "The efficiency ratio of A:B is 2:3. If A takes 15 days to complete a work, how many days will B take?",
  options: ["8", "10", "12", "15"],
  correctAnswerIndex: 1,
  explanation: "Time ratio is inverse of efficiency ratio = 3:2. B = 15 × 2/3 = 10 days."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A:B = 3:4 in efficiency. If A completes 30 units of work in a day, how many units does B complete?",
  options: ["35", "40", "45", "50"],
  correctAnswerIndex: 1,
  explanation: "B's work = 30 × 4/3 = 40 units."
},
{
  id: 3,
  difficulty: "Easy",
  question: "The efficiency ratio of A:B is 5:2. If B takes 25 days, how many days will A take?",
  options: ["8", "10", "12", "15"],
  correctAnswerIndex: 1,
  explanation: "Time ratio = 2:5. A = 25 × 2/5 = 10 days."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A:B:C = 2:3:5 in efficiency. If C does 50 units per day, how many units does A do per day?",
  options: ["15", "20", "25", "30"],
  correctAnswerIndex: 1,
  explanation: "A = 50 × 2/5 = 20 units/day."
},
{
  id: 5,
  difficulty: "Easy",
  question: "The efficiency ratio of A:B is 4:5. Together they complete 45 units per day. Find A's daily work.",
  options: ["18", "20", "22", "25"],
  correctAnswerIndex: 1,
  explanation: "Total ratio parts = 9. A = 45 × 4/9 = 20."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A:B = 3:2 in efficiency. Together they complete a work in 12 days. How many days will A alone take?",
  options: ["18", "20", "24", "30"],
  correctAnswerIndex: 1,
  explanation: "Total efficiency = 5 units. A = 3 units. A's time = 12 × 5/3 = 20 days."
},
{
  id: 7,
  difficulty: "Medium",
  question: "The efficiency ratio of A:B:C is 2:3:4. Together they finish a work in 9 days. How many days will C alone take?",
  options: ["18", "20", "21", "24"],
  correctAnswerIndex: 0,
  explanation: "Total efficiency = 9 units. C = 4 units. Time = 9 × 9/4 = 20.25 ≈ 20 days."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A and B are in the efficiency ratio 5:3. If A alone can do a work in 18 days, how many days will B take?",
  options: ["25", "28", "30", "32"],
  correctAnswerIndex: 2,
  explanation: "Time ratio = 3:5. B = 18 × 5/3 = 30 days."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A:B:C = 4:5:6 in efficiency. Together they complete a work in 10 days. How many days will B alone take?",
  options: ["25", "30", "35", "40"],
  correctAnswerIndex: 1,
  explanation: "Total efficiency = 15 units. B = 5 units. Time = 10 × 15/5 = 30 days."
},
{
  id: 10,
  difficulty: "Hard",
  question: "The efficiency ratio of A:B is 7:5. If together they complete a work in 15 days, how many days will A alone take?",
  options: ["18", "20", "24", "26"],
  correctAnswerIndex: 3,
  explanation: "Total efficiency = 12 units. A = 7 units. Time = 15 × 12/7 ≈ 25.7 ≈ 26 days."
}
]
  },
  {
  id: 12,
  name: "Worker Joining and Leaving",

  notes: {
    concept:
      "In these problems, workers join or leave after some time. Calculate work completed in each phase separately and then combine them.",

    formula: {
      workDone:
        "Work Done = Rate × Time",

      remainingWork:
        "Remaining Work = Total Work - Completed Work"
    },

    shortcuts: [
      "Break the problem into phases",
      "Calculate work done before and after joining/leaving",
      "Use LCM as total work"
    ],

    example: {
      question:
        "A can complete a work in 12 days. After 4 days, B joins and together they finish the remaining work in 4 days. Find B's efficiency.",

      solution:
        "Assume total work = 12 units. A completes 4 units in 4 days. Remaining = 8 units. Together complete 8 units in 4 days ⇒ Combined rate = 2 units/day. A's rate = 1 unit/day. Therefore B's rate = 1 unit/day."
    },

    tips: [
      "Track work completed before any worker joins or leaves.",
      "Use work rates instead of days.",
      "One of the most important placement patterns."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "20 workers can complete a work in 30 days. After 10 days, 10 more workers join. In how many more days will the remaining work be completed?",
  options: ["10", "12", "13", "16"],
  correctAnswerIndex: 2,
  explanation: "Total work = 20×30 = 600. Done = 20×10 = 200. Remaining = 400. New workforce = 30. Days = 400/30 ≈ 13.33 ≈ 13."
},
{
  id: 2,
  difficulty: "Easy",
  question: "15 men can complete a work in 20 days. After 5 days, 5 more men join. Find the total time required.",
  options: ["14", "15", "16", "18"],
  correctAnswerIndex: 2,
  explanation: "Total work = 300. Done = 75. Remaining = 225. New workforce = 20. Remaining days = 11.25. Total ≈ 16 days."
},
{
  id: 3,
  difficulty: "Easy",
  question: "24 workers can finish a work in 25 days. After 5 days, 4 workers leave. How many workers remain?",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "24 - 4 = 20 workers."
},
{
  id: 4,
  difficulty: "Easy",
  question: "18 men can complete a work in 30 days. After 10 days, 6 men leave. Find the remaining workforce.",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "18 - 6 = 12 workers."
},
{
  id: 5,
  difficulty: "Easy",
  question: "30 workers can complete a project in 20 days. After 5 days, 10 workers leave. How many workers continue the project?",
  options: ["15", "18", "20", "25"],
  correctAnswerIndex: 2,
  explanation: "30 - 10 = 20 workers."
},
{
  id: 6,
  difficulty: "Medium",
  question: "20 workers can complete a work in 24 days. After 6 days, 4 workers leave. How many more days are required?",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 2,
  explanation: "Total work = 480. Done = 120. Remaining = 360. Workforce = 16. Days = 360/16 = 22.5."
},
{
  id: 7,
  difficulty: "Medium",
  question: "25 men can complete a work in 16 days. After 4 days, 5 more men join. Find the total time required.",
  options: ["12", "13", "14", "15"],
  correctAnswerIndex: 2,
  explanation: "Total work = 400. Done = 100. Remaining = 300. Workforce = 30. Remaining days = 10. Total = 14 days."
},
{
  id: 8,
  difficulty: "Medium",
  question: "12 workers can complete a work in 30 days. After 10 days, 3 workers leave. Find the remaining days required.",
  options: ["20", "22", "24", "27"],
  correctAnswerIndex: 3,
  explanation: "Total work = 360. Done = 120. Remaining = 240. Workforce = 9. Days = 240/9 ≈ 26.7."
},
{
  id: 9,
  difficulty: "Hard",
  question: "40 men can complete a work in 30 days. After 10 days, 10 men leave and after another 10 days, 10 more leave. Find total time required.",
  options: ["35", "40", "45", "50"],
  correctAnswerIndex: 2,
  explanation: "Total work = 1200. First 10 days = 400. Next 10 days = 300. Remaining = 500. Workforce = 20. Days = 25. Total = 45 days."
},
{
  id: 10,
  difficulty: "Hard",
  question: "30 workers can complete a work in 40 days. After 10 days, 15 more workers join. Find the total time required.",
  options: ["24", "26", "28", "30"],
  correctAnswerIndex: 3,
  explanation: "Total work = 1200. Done = 300. Remaining = 900. Workforce = 45. Days = 20. Total = 30 days."
}
]
  },
  {
  id: 13,
  name: "Work Completion Percentage",

  notes: {
    concept:
      "These problems involve finding the percentage of work completed or remaining after a certain period of time.",

    formula: {
      completed:
        "Completed% = (Work Done / Total Work) × 100",

      remaining:
        "Remaining% = 100 - Completed%"
    },

    shortcuts: [
      "Assume total work as 100% or LCM units",
      "Find completed work first",
      "Remaining work = Total - Completed"
    ],

    example: {
      question:
        "A can complete a work in 20 days. What percentage of work is completed in 5 days?",

      solution:
        "Completed Work = 5/20 = 1/4 = 25%."
    },

    tips: [
      "Convert work into fractions first.",
      "Percentage questions become easier after finding work done.",
      "Commonly combined with worker joining/leaving problems."
    ]
  },

    questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A worker completes 25% of a work in 5 days. How many days will he take to complete the entire work?",
  options: ["15", "20", "25", "30"],
  correctAnswerIndex: 1,
  explanation: "25% in 5 days ⇒ 100% in 20 days."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A project is 40% complete. What percentage of work remains?",
  options: ["40%", "50%", "60%", "70%"],
  correctAnswerIndex: 2,
  explanation: "Remaining = 100% - 40% = 60%."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A team completes 60% of a project in 12 days. How many days are needed for the entire project?",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "100% work = (12 × 100)/60 = 20 days."
},
{
  id: 4,
  difficulty: "Easy",
  question: "If 30% of a work is completed in 6 days, how much work is completed in 1 day?",
  options: ["4%", "5%", "6%", "7%"],
  correctAnswerIndex: 1,
  explanation: "30% ÷ 6 = 5% per day."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A worker completes 45% of a task. What percentage is left?",
  options: ["45%", "50%", "55%", "60%"],
  correctAnswerIndex: 2,
  explanation: "100% - 45% = 55%."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A and B together complete 75% of a work in 15 days. How many days will they take to complete the entire work?",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "100% work = (15 × 100)/75 = 20 days."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A project is 35% complete after 7 days. At the same rate, how many more days are needed to finish it?",
  options: ["11", "12", "13", "14"],
  correctAnswerIndex: 2,
  explanation: "35% in 7 days ⇒ 5% per day. Remaining 65% ⇒ 13 days."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A worker completes 20% of a work in 4 days. What percentage will be completed in 10 days?",
  options: ["40%", "50%", "60%", "70%"],
  correctAnswerIndex: 1,
  explanation: "20% in 4 days ⇒ 5% per day. In 10 days ⇒ 50%."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A project is 80% complete in 24 days. How many total days are required for the project?",
  options: ["28", "30", "32", "34"],
  correctAnswerIndex: 1,
  explanation: "Total days = (24 × 100)/80 = 30 days."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A team completes 45% of a work in 9 days. After that, efficiency increases by 50%. How many more days are needed to finish the remaining work?",
  options: ["6", "7.3", "8", "9"],
  correctAnswerIndex: 1,
  explanation: "45% in 9 days ⇒ 5% per day. New rate = 7.5% per day. Remaining 55% ⇒ 55/7.5 = 7.33 days."
}
]


  
  },
  {
  id: 14,
  name: "Mixed Placement Questions",

  notes: {
    concept:
      "Mixed questions combine multiple Time & Work concepts such as efficiency, combined work, worker joining/leaving, alternate working, and pipes & cisterns.",

    formula: {
      combined:
        "1/T = 1/A + 1/B",

      efficiency:
        "Efficiency ∝ 1/Time",

      work:
        "Work = Rate × Time"
    },

    shortcuts: [
      "Identify the concept first",
      "Use LCM as total work",
      "Break complex questions into smaller parts",
      "Convert everything into work rates"
    ],

    example: {
      question:
        "A completes a work in 12 days and B in 18 days. After working together for 3 days, B leaves. Find the remaining work.",

      solution:
        "Combined work in 3 days = 3 × (1/12 + 1/18) = 15/36 = 5/12. Remaining Work = 1 - 5/12 = 7/12."
    },

    tips: [
      "Mixed questions are common in placement exams.",
      "Track work phase by phase.",
      "Always calculate remaining work carefully."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Workers A, B and C complete 20, 30 and 50 units of work respectively in a day. What percentage of total work is done by C?",
  options: ["40%", "45%", "50%", "55%"],
  correctAnswerIndex: 2,
  explanation: "Total = 20+30+50 = 100 units. C = 50%."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A team completes 600 units of work in 12 days. What is their average daily work?",
  options: ["40", "50", "60", "70"],
  correctAnswerIndex: 1,
  explanation: "600/12 = 50 units/day."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Workers A and B complete 240 and 360 units respectively. Find the ratio of their work.",
  options: ["2:3", "3:2", "4:5", "5:6"],
  correctAnswerIndex: 0,
  explanation: "240:360 = 2:3."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A project requires 1000 units of work. If 400 units are completed, what percentage remains?",
  options: ["40%", "50%", "60%", "70%"],
  correctAnswerIndex: 2,
  explanation: "Remaining = 600/1000 = 60%."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Five workers complete 500 units in 10 days. What is the average work per worker per day?",
  options: ["8", "10", "12", "15"],
  correctAnswerIndex: 1,
  explanation: "500/(5×10) = 10 units."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A, B and C complete 120, 180 and 300 units respectively. What percentage of total work is completed by A and B together?",
  options: ["40%", "50%", "60%", "70%"],
  correctAnswerIndex: 1,
  explanation: "A+B = 300, Total = 600. Percentage = 50%."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A factory produced 200, 250, 300 and 350 units in four weeks. What is the average weekly production?",
  options: ["250", "275", "300", "325"],
  correctAnswerIndex: 1,
  explanation: "(200+250+300+350)/4 = 275."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A worker completed 30% of a project on Day 1 and 40% on Day 2. What percentage remains?",
  options: ["20%", "25%", "30%", "35%"],
  correctAnswerIndex: 2,
  explanation: "Completed = 70%. Remaining = 30%."
},
{
  id: 9,
  difficulty: "Hard",
  question: "Three teams complete 250, 350 and 400 units of work respectively. If total work is 1000 units, what percentage is completed by Team B?",
  options: ["25%", "30%", "35%", "40%"],
  correctAnswerIndex: 2,
  explanation: "350/1000 × 100 = 35%."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A project has 1200 units of work. Team A completes 450 units and Team B completes 300 units. What percentage of work is still pending?",
  options: ["25%", "37.5%", "40%", "45%"],
  correctAnswerIndex: 1,
  explanation: "Completed = 750. Pending = 450. Percentage pending = 450/1200 × 100 = 37.5%."
}
]
  },
  {
  id: 15,
  name: "Data Interpretation",

  notes: {
    concept:
      "Data Interpretation Time & Work questions use tables, charts, and datasets to test work-rate calculations and efficiency comparisons.",

    formula: {
      work:
        "Work = Rate × Time",

      efficiency:
        "Efficiency ∝ 1/Time"
    },

    shortcuts: [
      "Extract data carefully before calculating",
      "Convert days into work rates",
      "Compare efficiencies using inverse ratios",
      "Use approximation when options are far apart"
    ],

    example: {
      question:
        "A table shows Worker A completes a task in 10 days and Worker B in 15 days. Find their efficiency ratio.",

      solution:
        "Efficiency Ratio = 15:10 = 3:2."
    },

    tips: [
      "Read the entire table before solving.",
      "Most DI questions combine efficiency and work-rate concepts.",
      "Practice speed because DI questions are calculation-heavy."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Workers A, B and C complete 20, 30 and 50 units of work respectively in a day. What percentage of total work is done by C?",
  options: ["40%", "45%", "50%", "55%"],
  correctAnswerIndex: 2,
  explanation: "Total = 20+30+50 = 100 units. C = 50%."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A team completes 600 units of work in 12 days. What is their average daily work?",
  options: ["40", "50", "60", "70"],
  correctAnswerIndex: 1,
  explanation: "600/12 = 50 units/day."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Workers A and B complete 240 and 360 units respectively. Find the ratio of their work.",
  options: ["2:3", "3:2", "4:5", "5:6"],
  correctAnswerIndex: 0,
  explanation: "240:360 = 2:3."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A project requires 1000 units of work. If 400 units are completed, what percentage remains?",
  options: ["40%", "50%", "60%", "70%"],
  correctAnswerIndex: 2,
  explanation: "Remaining = 600/1000 = 60%."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Five workers complete 500 units in 10 days. What is the average work per worker per day?",
  options: ["8", "10", "12", "15"],
  correctAnswerIndex: 1,
  explanation: "500/(5×10) = 10 units."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A, B and C complete 120, 180 and 300 units respectively. What percentage of total work is completed by A and B together?",
  options: ["40%", "50%", "60%", "70%"],
  correctAnswerIndex: 1,
  explanation: "A+B = 300, Total = 600. Percentage = 50%."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A factory produced 200, 250, 300 and 350 units in four weeks. What is the average weekly production?",
  options: ["250", "275", "300", "325"],
  correctAnswerIndex: 1,
  explanation: "(200+250+300+350)/4 = 275."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A worker completed 30% of a project on Day 1 and 40% on Day 2. What percentage remains?",
  options: ["20%", "25%", "30%", "35%"],
  correctAnswerIndex: 2,
  explanation: "Completed = 70%. Remaining = 30%."
},
{
  id: 9,
  difficulty: "Hard",
  question: "Three teams complete 250, 350 and 400 units of work respectively. If total work is 1000 units, what percentage is completed by Team B?",
  options: ["25%", "30%", "35%", "40%"],
  correctAnswerIndex: 2,
  explanation: "350/1000 × 100 = 35%."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A project has 1200 units of work. Team A completes 450 units and Team B completes 300 units. What percentage of work is still pending?",
  options: ["25%", "37.5%", "40%", "45%"],
  correctAnswerIndex: 1,
  explanation: "Completed = 750. Pending = 450. Percentage pending = 450/1200 × 100 = 37.5%."
}
]
  }
  ]
  // ... [99 more Time & Work questions would go here]
};