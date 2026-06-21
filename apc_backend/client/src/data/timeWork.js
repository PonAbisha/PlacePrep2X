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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

      ratio:
        "Wages Ratio = Work Ratio"
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
  }
  ]
  // ... [99 more Time & Work questions would go here]
};