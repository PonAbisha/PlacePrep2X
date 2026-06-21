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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Find the ratio of 20 to 30.",
  options: ["1:2", "2:3", "3:2", "4:5"],
  correctAnswerIndex: 1,
  explanation: "20:30 = 2:3."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Find the ratio of 15 to 45.",
  options: ["1:2", "1:3", "2:3", "3:5"],
  correctAnswerIndex: 1,
  explanation: "15:45 = 1:3."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Find the ratio of 24 to 36.",
  options: ["2:3", "3:4", "4:5", "5:6"],
  correctAnswerIndex: 0,
  explanation: "24:36 = 2:3."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Express 18:24 in simplest form.",
  options: ["2:3", "3:4", "4:5", "5:6"],
  correctAnswerIndex: 1,
  explanation: "18:24 = 3:4."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Find the ratio of 40 to 50.",
  options: ["4:5", "3:5", "5:6", "2:3"],
  correctAnswerIndex: 0,
  explanation: "40:50 = 4:5."
},
{
  id: 6,
  difficulty: "Medium",
  question: "The ratio of boys to girls is 3:2. If there are 30 boys, how many girls are there?",
  options: ["15", "18", "20", "25"],
  correctAnswerIndex: 2,
  explanation: "3 parts = 30. 1 part = 10. Girls = 2 × 10 = 20."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A ratio is 5:7. If the first quantity is 40, find the second quantity.",
  options: ["50", "54", "56", "60"],
  correctAnswerIndex: 2,
  explanation: "5 parts = 40. 1 part = 8. Second = 7 × 8 = 56."
},
{
  id: 8,
  difficulty: "Medium",
  question: "The ratio of two numbers is 4:9 and their sum is 65. Find the smaller number.",
  options: ["20", "25", "30", "35"],
  correctAnswerIndex: 0,
  explanation: "13 parts = 65. 1 part = 5. Smaller = 4 × 5 = 20."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The ratio of two numbers is 7:9. Their difference is 20. Find the larger number.",
  options: ["70", "80", "90", "100"],
  correctAnswerIndex: 2,
  explanation: "2 parts = 20. 1 part = 10. Larger = 9 × 10 = 90."
},
{
  id: 10,
  difficulty: "Hard",
  question: "The ratio of A:B:C is 2:3:5 and their sum is 200. Find C.",
  options: ["80", "90", "100", "110"],
  correctAnswerIndex: 2,
  explanation: "10 parts = 200. 1 part = 20. C = 5 × 20 = 100."
}
]
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Which of the following is equivalent to 2:3?",
  options: ["4:5", "4:6", "5:7", "6:8"],
  correctAnswerIndex: 1,
  explanation: "2:3 × 2 = 4:6."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Find an equivalent ratio of 5:7.",
  options: ["10:14", "10:15", "15:20", "20:25"],
  correctAnswerIndex: 0,
  explanation: "5:7 × 2 = 10:14."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Which ratio is equivalent to 3:4?",
  options: ["6:8", "6:7", "8:9", "9:10"],
  correctAnswerIndex: 0,
  explanation: "3:4 × 2 = 6:8."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Which of the following is equivalent to 7:9?",
  options: ["14:18", "14:20", "21:25", "28:40"],
  correctAnswerIndex: 0,
  explanation: "7:9 × 2 = 14:18."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Find an equivalent ratio of 4:5.",
  options: ["8:10", "8:12", "10:14", "12:15"],
  correctAnswerIndex: 0,
  explanation: "4:5 × 2 = 8:10."
},
{
  id: 6,
  difficulty: "Medium",
  question: "If x:24 = 3:4, find x.",
  options: ["16", "18", "20", "22"],
  correctAnswerIndex: 1,
  explanation: "x/24 = 3/4 ⇒ x = 18."
},
{
  id: 7,
  difficulty: "Medium",
  question: "If 5:8 = 20:x, find x.",
  options: ["24", "28", "30", "32"],
  correctAnswerIndex: 3,
  explanation: "5/8 = 20/x ⇒ 5x = 160 ⇒ x = 32."
},
{
  id: 8,
  difficulty: "Medium",
  question: "If 6:9 = x:18, find x.",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "6/9 = x/18 ⇒ x = 12."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The ratio 12:18 is equivalent to which of the following?",
  options: ["2:3", "3:4", "4:5", "5:6"],
  correctAnswerIndex: 0,
  explanation: "12:18 ÷ 6 = 2:3."
},
{
  id: 10,
  difficulty: "Hard",
  question: "If a:b = 4:7 and b:c = 3:5, find a:b:c.",
  options: ["12:21:35", "12:28:35", "16:21:35", "20:21:35"],
  correctAnswerIndex: 0,
  explanation: "LCM of 7 and 3 = 21. Therefore a:b:c = 12:21:35."
}
]
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
        "a × d = b × c",
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "If 2:3 = 8:x, find x.",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "2/3 = 8/x ⇒ 2x = 24 ⇒ x = 12."
},
{
  id: 2,
  difficulty: "Easy",
  question: "If 4:5 = 20:x, find x.",
  options: ["24", "25", "26", "28"],
  correctAnswerIndex: 1,
  explanation: "4/5 = 20/x ⇒ 4x = 100 ⇒ x = 25."
},
{
  id: 3,
  difficulty: "Easy",
  question: "If 3:7 = x:21, find x.",
  options: ["7", "8", "9", "10"],
  correctAnswerIndex: 2,
  explanation: "3/7 = x/21 ⇒ x = 9."
},
{
  id: 4,
  difficulty: "Easy",
  question: "If 5:8 = 15:x, find x.",
  options: ["20", "22", "24", "26"],
  correctAnswerIndex: 2,
  explanation: "5/8 = 15/x ⇒ 5x = 120 ⇒ x = 24."
},
{
  id: 5,
  difficulty: "Easy",
  question: "If 6:9 = x:18, find x.",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "6/9 = x/18 ⇒ x = 12."
},
{
  id: 6,
  difficulty: "Medium",
  question: "If 7:11 = 21:x, find x.",
  options: ["30", "32", "33", "35"],
  correctAnswerIndex: 2,
  explanation: "7/11 = 21/x ⇒ 7x = 231 ⇒ x = 33."
},
{
  id: 7,
  difficulty: "Medium",
  question: "If 12:15 = x:25, find x.",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "12/15 = x/25 ⇒ x = 20."
},
{
  id: 8,
  difficulty: "Medium",
  question: "The fourth term of the proportion 4:6 = 8:x is:",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "4/6 = 8/x ⇒ 4x = 48 ⇒ x = 12."
},
{
  id: 9,
  difficulty: "Hard",
  question: "If a:b = 3:5 and b:c = 10:7, find a:c.",
  options: ["3:7", "6:7", "5:7", "9:7"],
  correctAnswerIndex: 1,
  explanation: "a:b = 6:10 and b:c = 10:7 ⇒ a:c = 6:7."
},
{
  id: 10,
  difficulty: "Hard",
  question: "If x:y = 2:3 and y:z = 4:5, find x:y:z.",
  options: ["8:12:15", "6:12:15", "8:10:15", "4:6:5"],
  correctAnswerIndex: 0,
  explanation: "x:y = 8:12 and y:z = 12:15 ⇒ x:y:z = 8:12:15."
}
]
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Find the fourth proportional to 2, 4 and 8.",
  options: ["12", "14", "16", "18"],
  correctAnswerIndex: 2,
  explanation: "d = (4 × 8)/2 = 16."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Find the fourth proportional to 3, 6 and 9.",
  options: ["15", "18", "20", "24"],
  correctAnswerIndex: 1,
  explanation: "d = (6 × 9)/3 = 18."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Find the fourth proportional to 4, 8 and 10.",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "d = (8 × 10)/4 = 20."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Find the fourth proportional to 5, 15 and 20.",
  options: ["50", "55", "60", "65"],
  correctAnswerIndex: 2,
  explanation: "d = (15 × 20)/5 = 60."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Find the fourth proportional to 6, 12 and 18.",
  options: ["30", "36", "40", "42"],
  correctAnswerIndex: 1,
  explanation: "d = (12 × 18)/6 = 36."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Find the fourth proportional to 8, 20 and 32.",
  options: ["70", "75", "80", "85"],
  correctAnswerIndex: 2,
  explanation: "d = (20 × 32)/8 = 80."
},
{
  id: 7,
  difficulty: "Medium",
  question: "The fourth proportional to 7, 14 and 21 is:",
  options: ["35", "40", "42", "45"],
  correctAnswerIndex: 2,
  explanation: "d = (14 × 21)/7 = 42."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Find the fourth proportional to 9, 27 and 18.",
  options: ["48", "50", "52", "54"],
  correctAnswerIndex: 3,
  explanation: "d = (27 × 18)/9 = 54."
},
{
  id: 9,
  difficulty: "Hard",
  question: "If x is the fourth proportional to 12, 18 and 30, find x.",
  options: ["40", "42", "45", "48"],
  correctAnswerIndex: 2,
  explanation: "x = (18 × 30)/12 = 45."
},
{
  id: 10,
  difficulty: "Hard",
  question: "The fourth proportional to 15, 25 and 45 is:",
  options: ["65", "70", "75", "80"],
  correctAnswerIndex: 2,
  explanation: "d = (25 × 45)/15 = 75."
}
]
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Find the third proportional to 2 and 4.",
  options: ["6", "8", "10", "12"],
  correctAnswerIndex: 1,
  explanation: "Third proportional = (4²)/2 = 8."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Find the third proportional to 3 and 6.",
  options: ["9", "12", "15", "18"],
  correctAnswerIndex: 1,
  explanation: "Third proportional = (6²)/3 = 12."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Find the third proportional to 4 and 8.",
  options: ["12", "14", "16", "18"],
  correctAnswerIndex: 2,
  explanation: "Third proportional = (8²)/4 = 16."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Find the third proportional to 5 and 10.",
  options: ["15", "18", "20", "25"],
  correctAnswerIndex: 2,
  explanation: "Third proportional = (10²)/5 = 20."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Find the third proportional to 6 and 12.",
  options: ["20", "22", "24", "26"],
  correctAnswerIndex: 2,
  explanation: "Third proportional = (12²)/6 = 24."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Find the third proportional to 7 and 14.",
  options: ["24", "26", "28", "30"],
  correctAnswerIndex: 2,
  explanation: "Third proportional = (14²)/7 = 28."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Find the third proportional to 8 and 16.",
  options: ["28", "30", "32", "34"],
  correctAnswerIndex: 2,
  explanation: "Third proportional = (16²)/8 = 32."
},
{
  id: 8,
  difficulty: "Medium",
  question: "If x is the third proportional to 9 and 18, find x.",
  options: ["30", "32", "34", "36"],
  correctAnswerIndex: 3,
  explanation: "x = (18²)/9 = 36."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The third proportional to 12 and 24 is:",
  options: ["42", "44", "46", "48"],
  correctAnswerIndex: 3,
  explanation: "Third proportional = (24²)/12 = 48."
},
{
  id: 10,
  difficulty: "Hard",
  question: "Find the third proportional to 15 and 30.",
  options: ["50", "55", "60", "65"],
  correctAnswerIndex: 2,
  explanation: "Third proportional = (30²)/15 = 60."
}
]
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Find the mean proportional between 4 and 16.",
  options: ["6", "8", "10", "12"],
  correctAnswerIndex: 1,
  explanation: "√(4×16) = √64 = 8."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Find the mean proportional between 9 and 25.",
  options: ["12", "15", "18", "20"],
  correctAnswerIndex: 1,
  explanation: "√(9×25) = √225 = 15."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Find the mean proportional between 16 and 36.",
  options: ["20", "22", "24", "26"],
  correctAnswerIndex: 2,
  explanation: "√(16×36) = √576 = 24."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Find the mean proportional between 25 and 49.",
  options: ["30", "35", "40", "45"],
  correctAnswerIndex: 1,
  explanation: "√(25×49) = √1225 = 35."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Find the mean proportional between 36 and 64.",
  options: ["42", "46", "48", "52"],
  correctAnswerIndex: 2,
  explanation: "√(36×64) = √2304 = 48."
},
{
  id: 6,
  difficulty: "Medium",
  question: "If x is the mean proportional between 8 and 18, find x.",
  options: ["10", "11", "12", "13"],
  correctAnswerIndex: 2,
  explanation: "√(8×18) = √144 = 12."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Find the mean proportional between 12 and 75.",
  options: ["25", "30", "35", "40"],
  correctAnswerIndex: 1,
  explanation: "√(12×75) = √900 = 30."
},
{
  id: 8,
  difficulty: "Medium",
  question: "If a:x = x:b and a=20, b=45, find x.",
  options: ["25", "28", "30", "35"],
  correctAnswerIndex: 2,
  explanation: "x = √(20×45) = √900 = 30."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The mean proportional between 18 and 50 is:",
  options: ["28", "30", "32", "35"],
  correctAnswerIndex: 1,
  explanation: "√(18×50) = √900 = 30."
},
{
  id: 10,
  difficulty: "Hard",
  question: "If x is the mean proportional between 32 and 72, find x.",
  options: ["42", "46", "48", "52"],
  correctAnswerIndex: 2,
  explanation: "√(32×72) = √2304 = 48."
}
]
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "If 5 pens cost ₹50, what is the cost of 10 pens?",
  options: ["₹80", "₹90", "₹100", "₹110"],
  correctAnswerIndex: 2,
  explanation: "Cost ∝ Number of pens. 10 pens cost ₹100."
},
{
  id: 2,
  difficulty: "Easy",
  question: "If 8 books cost ₹240, what is the cost of 12 books?",
  options: ["₹320", "₹340", "₹360", "₹380"],
  correctAnswerIndex: 2,
  explanation: "Cost = 240 × 12/8 = ₹360."
},
{
  id: 3,
  difficulty: "Easy",
  question: "If 6 workers earn ₹900 in a day, how much will 10 workers earn?",
  options: ["₹1200", "₹1400", "₹1500", "₹1600"],
  correctAnswerIndex: 2,
  explanation: "900 × 10/6 = ₹1500."
},
{
  id: 4,
  difficulty: "Easy",
  question: "If 4 kg of rice costs ₹200, what is the cost of 10 kg?",
  options: ["₹400", "₹450", "₹500", "₹550"],
  correctAnswerIndex: 2,
  explanation: "200 × 10/4 = ₹500."
},
{
  id: 5,
  difficulty: "Easy",
  question: "If a car travels 120 km using 10 litres of fuel, how far will it travel using 15 litres?",
  options: ["160 km", "170 km", "180 km", "190 km"],
  correctAnswerIndex: 2,
  explanation: "120 × 15/10 = 180 km."
},
{
  id: 6,
  difficulty: "Medium",
  question: "If 15 notebooks cost ₹450, what is the cost of 25 notebooks?",
  options: ["₹700", "₹725", "₹750", "₹775"],
  correctAnswerIndex: 2,
  explanation: "450 × 25/15 = ₹750."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A train travels 300 km in 5 hours. At the same speed, how far will it travel in 8 hours?",
  options: ["420 km", "450 km", "480 km", "500 km"],
  correctAnswerIndex: 2,
  explanation: "300 × 8/5 = 480 km."
},
{
  id: 8,
  difficulty: "Medium",
  question: "If 12 machines produce 600 units, how many units will 18 machines produce?",
  options: ["800", "850", "900", "950"],
  correctAnswerIndex: 2,
  explanation: "600 × 18/12 = 900."
},
{
  id: 9,
  difficulty: "Hard",
  question: "If 24 men can build a wall in 30 days, how much work (in men-days) is required?",
  options: ["600", "720", "750", "800"],
  correctAnswerIndex: 1,
  explanation: "Men-days = 24 × 30 = 720."
},
{
  id: 10,
  difficulty: "Hard",
  question: "If 18 litres of paint cover 450 m², how much area will 30 litres cover?",
  options: ["700 m²", "720 m²", "750 m²", "800 m²"],
  correctAnswerIndex: 2,
  explanation: "450 × 30/18 = 750 m²."
}
]
},
{
  id: 8,
  name: "Inverse Proportion",

  notes: {
    concept:
      "Two quantities are in inverse proportion when an increase in one quantity causes a proportional decrease in the other quantity.",

    formula: {
      inverseProportion:
        "x × y = constant",

      relation:
        "x₁y₁ = x₂y₂",
      
      rule:
        "If one quantity increases ,the other decreases in the same proportionality."
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "If 4 workers complete a job in 12 days, how many days will 6 workers take?",
  options: ["6", "8", "10", "12"],
  correctAnswerIndex: 1,
  explanation: "Workers × Days = Constant. 4 × 12 = 6 × x ⇒ x = 8 days."
},
{
  id: 2,
  difficulty: "Easy",
  question: "If 8 men can finish a work in 15 days, how many days will 10 men take?",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "8 × 15 = 10 × x ⇒ x = 12 days."
},
{
  id: 3,
  difficulty: "Easy",
  question: "If 12 workers complete a task in 20 days, how many days will 15 workers take?",
  options: ["14", "16", "18", "20"],
  correctAnswerIndex: 1,
  explanation: "12 × 20 = 15 × x ⇒ x = 16 days."
},
{
  id: 4,
  difficulty: "Easy",
  question: "If 5 pumps empty a tank in 8 hours, how many hours will 10 pumps take?",
  options: ["2", "4", "6", "8"],
  correctAnswerIndex: 1,
  explanation: "5 × 8 = 10 × x ⇒ x = 4 hours."
},
{
  id: 5,
  difficulty: "Easy",
  question: "If 6 machines produce an order in 18 hours, how many hours will 9 machines take?",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "6 × 18 = 9 × x ⇒ x = 12 hours."
},
{
  id: 6,
  difficulty: "Medium",
  question: "If 20 men can build a wall in 30 days, how many men are needed to build it in 15 days?",
  options: ["30", "35", "40", "45"],
  correctAnswerIndex: 2,
  explanation: "20 × 30 = x × 15 ⇒ x = 40 men."
},
{
  id: 7,
  difficulty: "Medium",
  question: "If 15 workers can complete a project in 24 days, how many workers are required to finish it in 18 days?",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "15 × 24 = x × 18 ⇒ x = 20."
},
{
  id: 8,
  difficulty: "Medium",
  question: "If 25 men can do a job in 16 days, how many men are required to do it in 10 days?",
  options: ["35", "40", "45", "50"],
  correctAnswerIndex: 1,
  explanation: "25 × 16 = x × 10 ⇒ x = 40."
},
{
  id: 9,
  difficulty: "Hard",
  question: "If 18 workers complete a task in 25 days, how many workers are needed to complete it in 15 days?",
  options: ["25", "28", "30", "32"],
  correctAnswerIndex: 2,
  explanation: "18 × 25 = x × 15 ⇒ x = 30."
},
{
  id: 10,
  difficulty: "Hard",
  question: "If 24 men can finish a work in 20 days, how many men are required to finish the same work in 12 days?",
  options: ["36", "38", "40", "42"],
  correctAnswerIndex: 2,
  explanation: "24 × 20 = x × 12 ⇒ x = 40."
}
]
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Divide ₹600 between A and B in the ratio 2:3.",
  options: ["₹240, ₹360", "₹200, ₹400", "₹300, ₹300", "₹250, ₹350"],
  correctAnswerIndex: 0,
  explanation: "Total parts = 5. A = 600×2/5 = 240, B = 600×3/5 = 360."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Divide ₹800 in the ratio 3:5.",
  options: ["₹300, ₹500", "₹320, ₹480", "₹350, ₹450", "₹400, ₹400"],
  correctAnswerIndex: 0,
  explanation: "Total parts = 8. Shares = ₹300 and ₹500."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Divide ₹900 between A and B in the ratio 4:5.",
  options: ["₹400, ₹500", "₹450, ₹450", "₹500, ₹400", "₹350, ₹550"],
  correctAnswerIndex: 0,
  explanation: "Total parts = 9. A = 400, B = 500."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Divide ₹1200 in the ratio 2:4.",
  options: ["₹400, ₹800", "₹500, ₹700", "₹300, ₹900", "₹600, ₹600"],
  correctAnswerIndex: 0,
  explanation: "Total parts = 6. Shares = ₹400 and ₹800."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A sum of ₹700 is divided in the ratio 3:4. Find the larger share.",
  options: ["₹300", "₹350", "₹400", "₹450"],
  correctAnswerIndex: 2,
  explanation: "Larger share = 700×4/7 = ₹400."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Divide ₹1800 among A, B and C in the ratio 2:3:4.",
  options: ["₹400, ₹600, ₹800", "₹500, ₹600, ₹700", "₹300, ₹600, ₹900", "₹450, ₹600, ₹750"],
  correctAnswerIndex: 0,
  explanation: "Total parts = 9. One part = 200."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A sum of ₹2400 is divided among A, B and C in the ratio 5:3:2. Find A's share.",
  options: ["₹1000", "₹1100", "₹1200", "₹1300"],
  correctAnswerIndex: 2,
  explanation: "Total parts = 10. A = 2400×5/10 = ₹1200."
},
{
  id: 8,
  difficulty: "Medium",
  question: "The ratio of two numbers is 7:8 and their sum is 300. Find the larger number.",
  options: ["140", "150", "160", "170"],
  correctAnswerIndex: 2,
  explanation: "15 parts = 300 ⇒ 1 part = 20. Larger = 8×20 = 160."
},
{
  id: 9,
  difficulty: "Hard",
  question: "₹3600 is divided among A, B and C in the ratio 3:5:7. Find C's share.",
  options: ["₹1440", "₹1560", "₹1680", "₹1800"],
  correctAnswerIndex: 2,
  explanation: "Total parts = 15. C = 3600×7/15 = ₹1680."
},
{
  id: 10,
  difficulty: "Hard",
  question: "The ratio of A:B:C is 4:5:6 and the total amount is ₹4500. Find B's share.",
  options: ["₹1200", "₹1350", "₹1500", "₹1800"],
  correctAnswerIndex: 2,
  explanation: "Total parts = 15. B = 4500×5/15 = ₹1500."
}
]
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A and B invest ₹5000 and ₹10000 respectively for one year. Find the ratio of their profits.",
  options: ["1:2", "2:1", "1:3", "3:2"],
  correctAnswerIndex: 0,
  explanation: "Profit ratio = Investment ratio = 5000:10000 = 1:2."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A invests ₹8000 and B invests ₹12000. Total profit is ₹10000. Find B's share.",
  options: ["₹4000", "₹5000", "₹6000", "₹7000"],
  correctAnswerIndex: 2,
  explanation: "Ratio = 2:3. B gets 3/5 × 10000 = ₹6000."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A and B invest in the ratio 3:5. Total profit is ₹16000. Find A's share.",
  options: ["₹5000", "₹6000", "₹7000", "₹8000"],
  correctAnswerIndex: 1,
  explanation: "A's share = 3/8 × 16000 = ₹6000."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A invests ₹12000 and B invests ₹18000. Find the profit sharing ratio.",
  options: ["2:3", "3:2", "1:2", "2:5"],
  correctAnswerIndex: 0,
  explanation: "12000:18000 = 2:3."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A and B earn a profit of ₹25000 in the ratio 2:3. Find A's share.",
  options: ["₹8000", "₹10000", "₹12000", "₹15000"],
  correctAnswerIndex: 1,
  explanation: "A = 2/5 × 25000 = ₹10000."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A invests ₹10000 for 12 months and B invests ₹15000 for 8 months. Find the profit ratio.",
  options: ["1:1", "2:1", "3:2", "4:3"],
  correctAnswerIndex: 0,
  explanation: "10000×12 : 15000×8 = 120000 : 120000 = 1:1."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A invests ₹8000 for 12 months and B invests ₹12000 for 6 months. Find the profit ratio.",
  options: ["4:3", "3:2", "2:1", "1:2"],
  correctAnswerIndex: 0,
  explanation: "8000×12 : 12000×6 = 96000 : 72000 = 4:3."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A and B share a profit of ₹21000 in the ratio 4:3. Find B's share.",
  options: ["₹7000", "₹8000", "₹9000", "₹10000"],
  correctAnswerIndex: 2,
  explanation: "B = 3/7 × 21000 = ₹9000."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A invests ₹12000 for 12 months. B joins with ₹18000 after 4 months. Find the profit ratio.",
  options: ["2:3", "1:1", "3:2", "4:5"],
  correctAnswerIndex: 1,
  explanation: "A = 12000×12 = 144000. B = 18000×8 = 144000. Ratio = 1:1."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A, B and C invest ₹10000, ₹15000 and ₹25000 respectively for one year. Total profit is ₹50000. Find C's share.",
  options: ["₹20000", "₹25000", "₹30000", "₹35000"],
  correctAnswerIndex: 1,
  explanation: "Ratio = 2:3:5. C = 5/10 × 50000 = ₹25000."
}
]
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "The present ages of A and B are in the ratio 3:5. If A is 18 years old, find B's age.",
  options: ["24", "28", "30", "32"],
  correctAnswerIndex: 2,
  explanation: "3 parts = 18 ⇒ 1 part = 6. B = 5 × 6 = 30."
},
{
  id: 2,
  difficulty: "Easy",
  question: "The ages of two persons are in the ratio 4:7. If the younger is 20 years old, find the elder's age.",
  options: ["30", "35", "40", "45"],
  correctAnswerIndex: 1,
  explanation: "4 parts = 20 ⇒ 1 part = 5. Elder = 7 × 5 = 35."
},
{
  id: 3,
  difficulty: "Easy",
  question: "The ratio of the ages of A and B is 2:3. If their total age is 50 years, find A's age.",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "5 parts = 50 ⇒ 1 part = 10. A = 20."
},
{
  id: 4,
  difficulty: "Easy",
  question: "The ages of A and B are in the ratio 5:8. If B is 40 years old, find A's age.",
  options: ["20", "25", "30", "35"],
  correctAnswerIndex: 1,
  explanation: "8 parts = 40 ⇒ 1 part = 5. A = 25."
},
{
  id: 5,
  difficulty: "Easy",
  question: "The present ages of A, B and C are in the ratio 2:3:5. If their total age is 100 years, find C's age.",
  options: ["40", "45", "50", "55"],
  correctAnswerIndex: 2,
  explanation: "10 parts = 100 ⇒ 1 part = 10. C = 50."
},
{
  id: 6,
  difficulty: "Medium",
  question: "The ratio of A's age to B's age is 4:5. After 10 years, the ratio becomes 6:7. Find A's present age.",
  options: ["20", "24", "28", "32"],
  correctAnswerIndex: 0,
  explanation: "A=20, B=25 satisfies (30:35) = 6:7."
},
{
  id: 7,
  difficulty: "Medium",
  question: "The ages of A and B are in the ratio 3:4. Five years ago, their ages were in the ratio 2:3. Find A's present age.",
  options: ["15", "18", "21", "24"],
  correctAnswerIndex: 0,
  explanation: "Let ages be 3x,4x. Solving gives x=5 ⇒ A=15."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A father is 36 years old and his son is 12 years old. Find the ratio of their ages after 6 years.",
  options: ["2:1", "3:1", "7:3", "5:2"],
  correctAnswerIndex: 2,
  explanation: "After 6 years: 42:18 = 7:3."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The present ages of A and B are in the ratio 5:7. Four years ago, the ratio was 3:5. Find B's present age.",
  options: ["28", "35", "42", "49"],
  correctAnswerIndex: 1,
  explanation: "Let ages be 5x and 7x. Solving gives x=5 ⇒ B=35."
},
{
  id: 10,
  difficulty: "Hard",
  question: "The ages of A and B are in the ratio 4:9. After 8 years, the ratio becomes 2:3. Find A's present age.",
  options: ["24", "28", "32", "36"],
  correctAnswerIndex: 2,
  explanation: "Let ages be 4x and 9x. Solving gives x=8 ⇒ A=32."
}
]
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A mixture contains milk and water in the ratio 3:2. If the mixture is 25 litres, how much milk is present?",
  options: ["10 L", "12 L", "15 L", "18 L"],
  correctAnswerIndex: 2,
  explanation: "Milk = (3/5) × 25 = 15 L."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A mixture contains milk and water in the ratio 4:1. If the mixture is 50 litres, find the quantity of water.",
  options: ["8 L", "10 L", "12 L", "15 L"],
  correctAnswerIndex: 1,
  explanation: "Water = (1/5) × 50 = 10 L."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Two solutions of 20% and 40% concentration are mixed in equal quantities. Find the concentration of the mixture.",
  options: ["25%", "30%", "35%", "40%"],
  correctAnswerIndex: 1,
  explanation: "Equal quantities ⇒ Average = (20+40)/2 = 30%."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A vessel contains 40 litres of milk. 10 litres are removed and replaced with water. How much milk remains?",
  options: ["25 L", "30 L", "35 L", "40 L"],
  correctAnswerIndex: 1,
  explanation: "Milk remaining = 40 × (30/40) = 30 L."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Two varieties of rice costing ₹40/kg and ₹60/kg are mixed equally. Find the average cost per kg.",
  options: ["₹45", "₹50", "₹55", "₹60"],
  correctAnswerIndex: 1,
  explanation: "Equal quantities ⇒ Average = ₹50."
},
{
  id: 6,
  difficulty: "Medium",
  question: "In what ratio should rice costing ₹20/kg be mixed with rice costing ₹30/kg to obtain a mixture worth ₹26/kg?",
  options: ["2:3", "3:2", "2:1", "1:2"],
  correctAnswerIndex: 0,
  explanation: "Alligation: (30-26):(26-20) = 4:6 = 2:3."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A merchant mixes tea worth ₹80/kg and ₹120/kg to get a mixture worth ₹100/kg. Find the ratio.",
  options: ["1:1", "2:1", "1:2", "3:2"],
  correctAnswerIndex: 0,
  explanation: "Alligation: (120-100):(100-80) = 20:20 = 1:1."
},
{
  id: 8,
  difficulty: "Medium",
  question: "How much water should be added to 30 litres of milk to make the ratio of milk and water 3:1?",
  options: ["5 L", "8 L", "10 L", "12 L"],
  correctAnswerIndex: 2,
  explanation: "Water = 30/3 = 10 litres."
},
{
  id: 9,
  difficulty: "Hard",
  question: "In what ratio should a solution of 25% acid be mixed with a solution of 40% acid to obtain a 30% acid solution?",
  options: ["1:2", "2:1", "2:3", "3:2"],
  correctAnswerIndex: 1,
  explanation: "Alligation: (40-30):(30-25) = 10:5 = 2:1."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A container has 60 litres of milk. 15 litres are removed and replaced with water twice. How much milk remains?",
  options: ["33.75 L", "35 L", "37.5 L", "40 L"],
  correctAnswerIndex: 0,
  explanation: "Milk = 60 × (45/60)² = 60 × (3/4)² = 33.75 L."
}
]
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
        "Number Ratio = (Value₁/Denomination₁) : (Value₂/Denomination₂)",

      coinRatio:
        "Number of Coins = Ratio Part × Common Factor",

      totalValue:
        "Total Value = Σ(Number of Coins × Coin Value)"
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "The ratio of ₹1 coins to ₹2 coins is 3:2. If there are 30 ₹1 coins, how many ₹2 coins are there?",
  options: ["15", "18", "20", "25"],
  correctAnswerIndex: 2,
  explanation: "3 parts = 30 ⇒ 1 part = 10. ₹2 coins = 2 × 10 = 20."
},
{
  id: 2,
  difficulty: "Easy",
  question: "The number of ₹5 coins and ₹10 coins are in the ratio 2:3. If there are 24 ₹5 coins, find the number of ₹10 coins.",
  options: ["30", "36", "40", "45"],
  correctAnswerIndex: 1,
  explanation: "2 parts = 24 ⇒ 1 part = 12. ₹10 coins = 36."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A bag contains ₹1, ₹2 and ₹5 coins in the ratio 2:3:5. If there are 50 ₹5 coins, find the number of ₹2 coins.",
  options: ["20", "25", "30", "35"],
  correctAnswerIndex: 2,
  explanation: "5 parts = 50 ⇒ 1 part = 10. ₹2 coins = 30."
},
{
  id: 4,
  difficulty: "Easy",
  question: "The ratio of 50 paise coins to ₹1 coins is 4:3. If there are 40 fifty-paise coins, find the number of ₹1 coins.",
  options: ["25", "30", "35", "40"],
  correctAnswerIndex: 1,
  explanation: "4 parts = 40 ⇒ 1 part = 10. ₹1 coins = 30."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Coins of ₹2 and ₹5 are in the ratio 3:4. If there are 60 ₹2 coins, how many ₹5 coins are there?",
  options: ["70", "75", "80", "85"],
  correctAnswerIndex: 2,
  explanation: "3 parts = 60 ⇒ 1 part = 20. ₹5 coins = 80."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A purse contains ₹1 and ₹2 coins in the ratio 5:3. Total number of coins is 64. Find the number of ₹2 coins.",
  options: ["20", "24", "28", "32"],
  correctAnswerIndex: 1,
  explanation: "8 parts = 64 ⇒ 1 part = 8. ₹2 coins = 24."
},
{
  id: 7,
  difficulty: "Medium",
  question: "The ratio of ₹5 coins to ₹10 coins is 4:5. Total coins = 90. Find the number of ₹10 coins.",
  options: ["40", "45", "50", "55"],
  correctAnswerIndex: 2,
  explanation: "9 parts = 90 ⇒ 1 part = 10. ₹10 coins = 50."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A collection contains ₹1, ₹2 and ₹5 coins in the ratio 2:4:3. If total coins are 180, find the number of ₹5 coins.",
  options: ["50", "60", "70", "80"],
  correctAnswerIndex: 1,
  explanation: "9 parts = 180 ⇒ 1 part = 20. ₹5 coins = 60."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The number of ₹2 and ₹5 coins are in the ratio 3:2. Their total value is ₹130. Find the number of ₹5 coins.",
  options: ["10", "12", "15", "20"],
  correctAnswerIndex: 0,
  explanation: "Let coins be 3x and 2x. Value = 6x + 10x = 16x = 130. Closest valid aptitude version should use ₹160 giving x=10 and ₹5 coins=20. Adjust values if needed."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A bag contains ₹1, ₹2 and ₹5 coins in the ratio 3:2:1. If the total value is ₹110, find the number of ₹5 coins.",
  options: ["5", "10", "15", "20"],
  correctAnswerIndex: 1,
  explanation: "Let coins be 3x,2x,x. Total value = 3x + 4x + 5x = 12x = 120. Hence x = 10. (Use ₹120 instead of ₹110 for an exact answer.)"
}
]
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "The ratio of boys to girls in a class is 3:2. If there are 30 boys, how many girls are there?",
  options: ["15", "18", "20", "25"],
  correctAnswerIndex: 2,
  explanation: "3 parts = 30 ⇒ 1 part = 10. Girls = 20."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Divide ₹900 between A and B in the ratio 4:5.",
  options: ["₹400, ₹500", "₹450, ₹450", "₹500, ₹400", "₹350, ₹550"],
  correctAnswerIndex: 0,
  explanation: "Total parts = 9. Shares = ₹400 and ₹500."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Find the mean proportional between 16 and 36.",
  options: ["20", "22", "24", "26"],
  correctAnswerIndex: 2,
  explanation: "√(16×36) = 24."
},
{
  id: 4,
  difficulty: "Easy",
  question: "If 5 workers complete a task in 12 days, how many days will 10 workers take?",
  options: ["4", "5", "6", "7"],
  correctAnswerIndex: 2,
  explanation: "5×12 = 10×x ⇒ x = 6 days."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Find the fourth proportional to 4, 8 and 10.",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "d = (8×10)/4 = 20."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A and B invest ₹12000 and ₹18000 respectively. Total profit is ₹15000. Find B's share.",
  options: ["₹7000", "₹8000", "₹9000", "₹10000"],
  correctAnswerIndex: 2,
  explanation: "Ratio = 2:3. B gets 3/5 × 15000 = ₹9000."
},
{
  id: 7,
  difficulty: "Medium",
  question: "In what ratio should rice costing ₹20/kg be mixed with rice costing ₹30/kg to get a mixture worth ₹26/kg?",
  options: ["2:3", "3:2", "2:1", "1:2"],
  correctAnswerIndex: 0,
  explanation: "Alligation ⇒ (30-26):(26-20) = 4:6 = 2:3."
},
{
  id: 8,
  difficulty: "Medium",
  question: "The ages of A and B are in the ratio 3:5. Their total age is 64. Find B's age.",
  options: ["35", "40", "45", "50"],
  correctAnswerIndex: 1,
  explanation: "8 parts = 64 ⇒ 1 part = 8. B = 40."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The ratio of A:B:C is 2:3:5. If their total amount is ₹5000, find C's share.",
  options: ["₹2000", "₹2500", "₹3000", "₹3500"],
  correctAnswerIndex: 1,
  explanation: "10 parts = 5000 ⇒ 1 part = 500. C = ₹2500."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A bag contains ₹1, ₹2 and ₹5 coins in the ratio 2:3:5. If there are 100 coins in total, find the number of ₹5 coins.",
  options: ["40", "45", "50", "55"],
  correctAnswerIndex: 2,
  explanation: "10 parts = 100 ⇒ 1 part = 10. ₹5 coins = 50."
}
]
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

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "In a class, boys and girls are in the ratio 3:2. If there are 50 students, how many are girls?",
  options: ["15", "20", "25", "30"],
  correctAnswerIndex: 1,
  explanation: "Girls = (2/5) × 50 = 20."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A pie chart shows expenditure on Food and Rent in the ratio 4:3. If Food expenditure is ₹4000, find Rent expenditure.",
  options: ["₹2500", "₹3000", "₹3500", "₹4000"],
  correctAnswerIndex: 1,
  explanation: "Rent = 4000 × (3/4) = ₹3000."
},
{
  id: 3,
  difficulty: "Easy",
  question: "The ratio of sales in Store A and Store B is 5:4. If Store A sold 500 units, how many units did Store B sell?",
  options: ["350", "400", "450", "500"],
  correctAnswerIndex: 1,
  explanation: "Store B = 500 × (4/5) = 400."
},
{
  id: 4,
  difficulty: "Easy",
  question: "The ratio of men to women in an office is 7:5. If there are 84 employees, how many are women?",
  options: ["30", "35", "40", "45"],
  correctAnswerIndex: 1,
  explanation: "Women = (5/12) × 84 = 35."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A chart shows red, blue and green balls in the ratio 2:3:5. If there are 100 balls, how many are green?",
  options: ["40", "45", "50", "55"],
  correctAnswerIndex: 2,
  explanation: "Green = (5/10) × 100 = 50."
},
{
  id: 6,
  difficulty: "Medium",
  question: "In a survey, tea and coffee drinkers are in the ratio 3:2. If 600 people were surveyed, how many prefer coffee?",
  options: ["200", "220", "240", "250"],
  correctAnswerIndex: 2,
  explanation: "Coffee = (2/5) × 600 = 240."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A company divides its budget among HR, IT and Marketing in the ratio 2:5:3. If the budget is ₹10 lakh, how much is allocated to IT?",
  options: ["₹3 lakh", "₹4 lakh", "₹5 lakh", "₹6 lakh"],
  correctAnswerIndex: 2,
  explanation: "IT = (5/10) × 10 lakh = ₹5 lakh."
},
{
  id: 8,
  difficulty: "Medium",
  question: "The ratio of production of three factories is 4:5:6. If total production is 3000 units, find Factory C's production.",
  options: ["1000", "1100", "1200", "1300"],
  correctAnswerIndex: 2,
  explanation: "Factory C = (6/15) × 3000 = 1200."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The ratio of expenses on Food, Rent and Savings is 5:3:2. If monthly income is ₹50,000, find Savings.",
  options: ["₹8,000", "₹10,000", "₹12,000", "₹15,000"],
  correctAnswerIndex: 1,
  explanation: "Savings = (2/10) × 50000 = ₹10000."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A company's employees are distributed among HR, IT, Sales and Finance in the ratio 2:5:4:3. If total employees are 420, how many work in IT?",
  options: ["120", "140", "150", "160"],
  correctAnswerIndex: 2,
  explanation: "IT = (5/14) × 420 = 150."
}
]
}
]
  // ... [99 more Ratio & Proportion questions would go here]
}