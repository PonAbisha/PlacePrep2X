export const ratioProportionQuestions = {  // Placeholder for 100 Ratio & Proportion questions (40 Easy, 40 Medium, 20 Hard)
  patterns:[
    {
  id: 1,
  name: "Basics of Ratio",

  notes: {
    concept:
      "A ratio compares two quantities of the same kind by division.",

    formula: {
      ratio:
        "Ratio = First Quantity : Second Quantity"
    },

    shortcuts: [
      "a:b = a/b",
      "Ratios can be simplified like fractions",
      "Units must be the same before comparison"
    ],

    example: {
      question:
        "Find the ratio of 20 to 30.",

      solution:
        "20:30 = 2:3"
    },

    tips: [
      "Always convert quantities to the same unit.",
      "Simplify ratios to lowest terms."
    ]
  },

  questions: []
},
{
  id: 2,
  name: "Equivalent Ratios",

  notes: {
    concept:
      "Two ratios are equivalent if they represent the same fraction.",

    formula: {
      equivalent:
        "a:b = ka:kb"
    },

    shortcuts: [
      "Multiply or divide both terms by same number",
      "Equivalent ratios have equal fractional value"
    ],

    example: {
      question:
        "Find an equivalent ratio of 3:5.",

      solution:
        "3:5 = 6:10 = 9:15"
    },

    tips: [
      "Apply the same operation to both terms."
    ]
  },

  questions: []
},
{
  id: 3,
  name: "Proportion Basics",

  notes: {
    concept:
      "A proportion states that two ratios are equal.",

    formula: {
      proportion:
        "a:b = c:d",

      crossMultiplication:
        "a × d = b × c"
    },

    shortcuts: [
      "Use cross multiplication to find missing values",
      "Product of extremes = Product of means",
      "If a:b = c:d, then a/b = c/d"
    ],

    example: {
      question:
        "If 3:5 = x:20, find x.",

      solution:
        "3 × 20 = 5 × x ⇒ 60 = 5x ⇒ x = 12."
    },

    tips: [
      "Cross multiplication is the fastest method.",
      "Always simplify ratios before comparing."
    ]
  },

  questions: []
},
{
  id: 4,
  name: "Fourth Proportional",

  notes: {
    concept:
      "The fourth proportional to a, b and c is a number d such that a:b = c:d.",

    formula: {
      fourthProportional:
        "d = (b × c) / a"
    },

    shortcuts: [
      "Use cross multiplication directly",
      "Fourth proportional is the 4th term of a proportion"
    ],

    example: {
      question:
        "Find the fourth proportional to 4, 8 and 10.",

      solution:
        "d = (8 × 10)/4 = 20."
    },

    tips: [
      "Write the proportion first.",
      "Identify a, b and c correctly before applying the formula."
    ]
  },

  questions: []
},
{
  id: 5,
  name: "Third Proportional",

  notes: {
    concept:
      "The third proportional to two numbers a and b is a number c such that a:b = b:c.",

    formula: {
      thirdProportional:
        "c = (b²) / a"
    },

    shortcuts: [
      "Third proportional is the third term in a continued proportion",
      "Use direct formula instead of cross multiplication"
    ],

    example: {
      question:
        "Find the third proportional to 4 and 8.",

      solution:
        "c = (8²)/4 = 64/4 = 16."
    },

    tips: [
      "Remember the format a:b = b:c.",
      "Square the second term and divide by the first."
    ]
  },

  questions: []
},
{
  id: 6,
  name: "Mean Proportional",

  notes: {
    concept:
      "The mean proportional between two numbers a and b is a number x such that a:x = x:b.",

    formula: {
      meanProportional:
        "x = √(ab)"
    },

    shortcuts: [
      "Mean proportional = Geometric Mean",
      "Multiply the two numbers and take square root"
    ],

    example: {
      question:
        "Find the mean proportional between 4 and 25.",

      solution:
        "x = √(4×25) = √100 = 10."
    },

    tips: [
      "Always use the square root formula.",
      "Check whether the question asks for mean or third proportional."
    ]
  },

  questions: []
},
{
  id: 7,
  name: "Direct Proportion",

  notes: {
    concept:
      "Two quantities are in direct proportion when an increase in one quantity causes a proportional increase in the other quantity.",

    formula: {
      directProportion:
        "x/y = k",

      relation:
        "x₁/y₁ = x₂/y₂"
    },

    shortcuts: [
      "More workers → More work",
      "More quantity → More cost",
      "Both quantities move in the same direction"
    ],

    example: {
      question:
        "If 5 pens cost ₹50, what is the cost of 8 pens?",

      solution:
        "5/50 = 8/x ⇒ x = (50×8)/5 = ₹80."
    },

    tips: [
      "Check whether both quantities increase together.",
      "Use cross multiplication for quick calculations.",
      "Common in cost, quantity and wage problems."
    ]
  },

  questions: []
},
{
  id: 8,
  name: "Inverse Proportion",

  notes: {
    concept:
      "Two quantities are in inverse proportion when an increase in one quantity causes a proportional decrease in the other quantity.",

    formula: {
      inverseProportion:
        "x × y = k",

      relation:
        "x₁y₁ = x₂y₂"
    },

    shortcuts: [
      "More workers → Less time",
      "More speed → Less time",
      "One quantity increases while the other decreases"
    ],

    example: {
      question:
        "If 8 workers complete a job in 15 days, how many days will 12 workers take?",

      solution:
        "8×15 = 12×x ⇒ x = 10 days."
    },

    tips: [
      "Check whether quantities move in opposite directions.",
      "Use product equality instead of ratio equality.",
      "Common in Time & Work and Speed problems."
    ]
  },

  questions: []
},
{
  id: 9,
  name: "Ratio Sharing Problems",

  notes: {
    concept:
      "When a total amount is divided among people in a given ratio, each person's share is proportional to their ratio part.",

    formula: {
      share:
        "Individual Share = (Individual Ratio / Sum of Ratios) × Total Amount"
    },

    shortcuts: [
      "First find the sum of ratio terms",
      "Divide total amount according to ratio parts",
      "Larger ratio means larger share"
    ],

    example: {
      question:
        "₹720 is divided between A and B in the ratio 5:7. Find their shares.",

      solution:
        "Total ratio = 5+7 = 12. A = (5/12)×720 = ₹300, B = (7/12)×720 = ₹420."
    },

    tips: [
      "Always calculate total ratio first.",
      "Use ratio parts instead of actual values.",
      "Very common in placement aptitude."
    ]
  },

  questions: []
},
{
  id: 10,
  name: "Partnership Problems",

  notes: {
    concept:
      "In partnership, profit is shared according to the product of investment and time.",

    formula: {
      ratio:
        "Profit Ratio = Capital × Time",

      share:
        "Partner Share = (Individual Ratio / Total Ratio) × Total Profit"
    },

    shortcuts: [
      "Profit ∝ Capital × Time",
      "If time is same ⇒ Profit Ratio = Capital Ratio",
      "If capital is same ⇒ Profit Ratio = Time Ratio"
    ],

    example: {
      question:
        "A invests ₹20,000 for 12 months and B invests ₹30,000 for 8 months. Find the profit-sharing ratio.",

      solution:
        "A:B = (20000×12):(30000×8) = 240000:240000 = 1:1."
    },

    tips: [
      "Always multiply capital and time first.",
      "Convert years and months into the same unit.",
      "Partnership questions are highly important for placements and banking exams."
    ]
  },

  questions: []
},
{
  id: 11,
  name: "Ages Problems",

  notes: {
    concept:
      "Age problems often use ratios to compare present, past, or future ages of people.",

    formula: {
      ratio:
        "Present Ages = Ratio × Common Factor",

      future:
        "Future Age = Present Age + Years",

      past:
        "Past Age = Present Age - Years"
    },

    shortcuts: [
      "Assume ages as ratio terms × x",
      "Age difference remains constant",
      "Use common factor method for faster solving"
    ],

    example: {
      question:
        "The ages of A and B are in the ratio 3:5. If B is 10 years older than A, find their ages.",

      solution:
        "Difference in ratio = 5 - 3 = 2 parts = 10 years. 1 part = 5 years. A = 15 years, B = 25 years."
    },

    tips: [
      "Age difference never changes.",
      "Convert ratios into actual ages using a common factor.",
      "Very common in aptitude and placement tests."
    ]
  },

  questions: []
},
{
  id: 12,
  name: "Mixture and Alligation",

  notes: {
    concept:
      "Mixture and Alligation problems determine the ratio in which two quantities with different values are mixed to obtain a desired value.",

    formula: {
      alligation:
        "Required Ratio = (Higher Value - Mean Value) : (Mean Value - Lower Value)"
    },

    shortcuts: [
      "Write Higher, Mean, Lower values vertically",
      "Cross subtract to get ratio",
      "Used heavily in milk-water and profit mixture questions"
    ],

    example: {
      question:
        "Rice worth ₹80/kg is mixed with rice worth ₹50/kg to obtain a mixture worth ₹68/kg. Find the mixing ratio.",

      solution:
        "Ratio = (80-68):(68-50) = 12:18 = 2:3."
    },

    tips: [
      "Apply alligation only when the mean value lies between the two values.",
      "Simplify the final ratio.",
      "Very important for placement and banking exams."
    ]
  },

  questions: []
},
{
  id: 13,
  name: "Coins and Currency Ratio Problems",

  notes: {
    concept:
      "These problems involve finding the ratio of the number of coins or notes when their denominations and total values are given.",

    formula: {
      value:
        "Total Value = Number × Denomination",

      ratio:
        "Number Ratio = (Value₁/Denomination₁) : (Value₂/Denomination₂)"
    },

    shortcuts: [
      "Always convert money into total value first",
      "Number of coins = Total Value ÷ Coin Value",
      "Keep denominations in the same unit"
    ],

    example: {
      question:
        "The values of ₹1 coins and ₹2 coins are equal. Find the ratio of their numbers.",

      solution:
        "Let total value be ₹100 each. Number of ₹1 coins = 100, Number of ₹2 coins = 50. Ratio = 100:50 = 2:1."
    },

    tips: [
      "Do not compare denominations directly.",
      "Convert to total values first.",
      "Common in ratio and arithmetic aptitude questions."
    ]
  },

  questions: []
},
{
  id: 14,
  name: "Mixed Placement Questions",

  notes: {
    concept:
      "Mixed questions combine ratio, proportion, ages, partnership, direct variation, inverse variation, and alligation concepts in a single problem.",

    formula: {
      ratio:
        "a:b = c:d",

      direct:
        "x₁/y₁ = x₂/y₂",

      inverse:
        "x₁y₁ = x₂y₂"
    },

    shortcuts: [
      "Identify the underlying concept first",
      "Convert word problems into ratios",
      "Use cross multiplication wherever possible",
      "Draw a table for complex problems"
    ],

    example: {
      question:
        "The ratio of boys to girls is 5:3. If 16 more girls join, the ratio becomes 5:4. Find the original number of students.",

      solution:
        "Difference = 1 part = 16. Original ratio total = 5+3 = 8 parts. Total students = 8×16 = 128."
    },

    tips: [
      "Placement exams often mix multiple concepts.",
      "Write given information as ratios first.",
      "Simplify before calculating."
    ]
  },

  questions: []
},
{
  id: 15,
  name: "Data Interpretation",

  notes: {
    concept:
      "Data Interpretation (DI) questions use tables, bar graphs, pie charts, and datasets to test the application of ratio and proportion concepts.",

    formula: {
      ratio:
        "Ratio = Quantity₁ : Quantity₂",

      percentage:
        "Percentage = (Part / Total) × 100",

      proportion:
        "a:b = c:d"
    },

    shortcuts: [
      "Read the entire table/chart before calculating",
      "Simplify ratios immediately",
      "Use approximation when answer choices are far apart",
      "Convert percentages into ratios whenever possible"
    ],

    example: {
      question:
        "A table shows Sales of Product A = 300 units and Product B = 450 units. Find the ratio of sales of A to B.",

      solution:
        "Ratio = 300:450 = 2:3."
    },

    tips: [
      "Always identify the base value before comparing.",
      "Keep units consistent throughout calculations.",
      "Most DI questions combine ratio, percentage, and average concepts.",
      "Practice speed because DI questions are calculation-intensive."
    ]
  },

  questions: []
}
]
  // ... [99 more Ratio & Proportion questions would go here]
}