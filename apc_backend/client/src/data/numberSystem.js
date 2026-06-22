export const numberSystemQuestions = {
  patterns:[
    {
  id: 1,
  name: "Number System Basics",

  notes: {
    concept:
      "Number System deals with different types of numbers such as Natural, Whole, Integers, Rational and Irrational Numbers.",

    formula: {
      natural:
        "Natural Numbers = {1,2,3,...}",

      whole:
        "Whole Numbers = {0,1,2,3,...}",

      integers:
        "Integers = {...,-2,-1,0,1,2,...}"
    },

    shortcuts: [
      "Natural Numbers start from 1",
      "Whole Numbers start from 0",
      "Integers include negative numbers"
    ],

    example: {
      question:
        "Is -5 a Whole Number?",

      solution:
        "No. -5 is an Integer but not a Whole Number."
    },

    tips: [
      "Learn number classifications first.",
      "Many aptitude questions are concept-based."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Which of the following is a natural number?",
  options: ["-1", "0", "1", "1/2"],
  correctAnswerIndex: 2,
  explanation: "Natural numbers start from 1."
},
{
  id: 2,
  difficulty: "Easy",
  question: "How many integers are there between 15 and 30?",
  options: ["13", "14", "15", "16"],
  correctAnswerIndex: 1,
  explanation: "16 to 29 = 14 integers."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Which of the following is a rational number?",
  options: ["√2", "π", "3/4", "√5"],
  correctAnswerIndex: 2,
  explanation: "3/4 can be expressed as p/q."
},
{
  id: 4,
  difficulty: "Easy",
  question: "The smallest whole number is:",
  options: ["0", "1", "-1", "2"],
  correctAnswerIndex: 0,
  explanation: "Whole numbers begin from 0."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Which of the following is irrational?",
  options: ["2/3", "0.5", "√3", "5"],
  correctAnswerIndex: 2,
  explanation: "√3 is irrational."
},
{
  id: 6,
  difficulty: "Medium",
  question: "How many even numbers are there from 1 to 100?",
  options: ["49", "50", "51", "52"],
  correctAnswerIndex: 1,
  explanation: "2,4,...,100 ⇒ 50 numbers."
},
{
  id: 7,
  difficulty: "Medium",
  question: "How many odd numbers are there from 1 to 99?",
  options: ["48", "49", "50", "51"],
  correctAnswerIndex: 2,
  explanation: "1,3,...,99 ⇒ 50 odd numbers."
},
{
  id: 8,
  difficulty: "Medium",
  question: "The sum of first 20 natural numbers is:",
  options: ["190", "200", "210", "220"],
  correctAnswerIndex: 2,
  explanation: "n(n+1)/2 = 20×21/2 = 210."
},
{
  id: 9,
  difficulty: "Hard",
  question: "How many integers are there between -20 and 20?",
  options: ["39", "40", "41", "42"],
  correctAnswerIndex: 0,
  explanation: "-19 to 19 = 39 integers."
},
{
  id: 10,
  difficulty: "Hard",
  question: "The sum of first 50 odd numbers is:",
  options: ["2500", "2550", "2600", "2450"],
  correctAnswerIndex: 0,
  explanation: "Sum of first n odd numbers = n² = 50² = 2500."
}
]
  },
  {
  id: 2,
  name: "Divisibility Rules",

  notes: {
    concept:
      "Divisibility rules help determine whether a number is divisible by another number without actual division.",

    formula: {
      by2:
        "Last digit is even",

      by3:
        "Sum of digits divisible by 3",

      by5:
        "Last digit is 0 or 5",

      by9:
        "Sum of digits divisible by 9"
    },

    shortcuts: [
      "2 → Even digit",
      "3 → Digit sum divisible by 3",
      "5 → Ends in 0 or 5",
      "9 → Digit sum divisible by 9"
    ],

    example: {
      question:
        "Is 432 divisible by 9?",

      solution:
        "4+3+2 = 9. Since 9 is divisible by 9, 432 is divisible by 9."
    },

    tips: [
      "Memorize common divisibility rules.",
      "Very useful in remainder and factor questions."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Which of the following numbers is divisible by 3?",
  options: ["124", "135", "142", "151"],
  correctAnswerIndex: 1,
  explanation: "1+3+5=9, which is divisible by 3."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Which of the following numbers is divisible by 9?",
  options: ["234", "351", "472", "563"],
  correctAnswerIndex: 1,
  explanation: "3+5+1=9, divisible by 9."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Which number is divisible by 5?",
  options: ["123", "246", "375", "498"],
  correctAnswerIndex: 2,
  explanation: "Numbers ending in 0 or 5 are divisible by 5."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Which number is divisible by 10?",
  options: ["150", "255", "345", "455"],
  correctAnswerIndex: 0,
  explanation: "Numbers ending in 0 are divisible by 10."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Which number is divisible by 11?",
  options: ["121", "123", "125", "127"],
  correctAnswerIndex: 0,
  explanation: "121 = 11 × 11."
},
{
  id: 6,
  difficulty: "Medium",
  question: "The smallest number to be added to 8754 to make it divisible by 9 is:",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 0,
  explanation: "8+7+5+4=24. Next multiple of 9 is 27. Add 3."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Which of the following numbers is divisible by both 2 and 3?",
  options: ["124", "135", "246", "355"],
  correctAnswerIndex: 2,
  explanation: "246 is even and 2+4+6=12 is divisible by 3."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Find the digit x if 42x is divisible by 3.",
  options: ["1", "2", "4", "6"],
  correctAnswerIndex: 1,
  explanation: "4+2+x must be divisible by 3. 6+x divisible by 3. x=2 works."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The greatest 3-digit number divisible by 11 is:",
  options: ["979", "990", "999", "968"],
  correctAnswerIndex: 1,
  explanation: "11 × 90 = 990."
},
{
  id: 10,
  difficulty: "Hard",
  question: "How many numbers from 1 to 100 are divisible by both 2 and 5?",
  options: ["5", "10", "15", "20"],
  correctAnswerIndex: 1,
  explanation: "Divisible by both 2 and 5 means divisible by 10. There are 10 such numbers."
}
]
  },
  {
  id: 3,
  name: "Factors and Multiples",

  notes: {
    concept:
      "A factor is a number that divides another number exactly, while a multiple is obtained by multiplying a number by an integer.",

    formula: {
      factor:
        "Factor divides a number completely",

      multiple:
        "Multiple = Number × Integer"
    },

    shortcuts: [
      "Factors of a number are finite",
      "Multiples of a number are infinite",
      "Every number is a factor of itself",
      "Every number is a multiple of itself"
    ],

    example: {
      question:
        "Find the factors of 24.",

      solution:
        "Factors = 1, 2, 3, 4, 6, 8, 12, 24."
    },

    tips: [
      "Factors always divide exactly.",
      "Multiples are obtained through multiplication.",
      "Frequently used in HCF and LCM problems."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "How many factors does 12 have?",
  options: ["4", "5", "6", "7"],
  correctAnswerIndex: 2,
  explanation: "Factors of 12 = {1,2,3,4,6,12}."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Which of the following is a factor of 36?",
  options: ["5", "7", "9", "11"],
  correctAnswerIndex: 2,
  explanation: "36 ÷ 9 = 4."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Which of the following is a multiple of 18?",
  options: ["52", "54", "56", "58"],
  correctAnswerIndex: 1,
  explanation: "18 × 3 = 54."
},
{
  id: 4,
  difficulty: "Easy",
  question: "How many multiples of 7 are there between 1 and 50?",
  options: ["6", "7", "8", "9"],
  correctAnswerIndex: 1,
  explanation: "7,14,21,28,35,42,49 → 7 multiples."
},
{
  id: 5,
  difficulty: "Easy",
  question: "The greatest factor of any number is:",
  options: ["1", "Number itself", "Half of number", "Square root"],
  correctAnswerIndex: 1,
  explanation: "Every number is divisible by itself."
},
{
  id: 6,
  difficulty: "Medium",
  question: "How many factors does 24 have?",
  options: ["6", "7", "8", "9"],
  correctAnswerIndex: 2,
  explanation: "24 = 2³ × 3¹. Factors = (3+1)(1+1) = 8."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Find the number of factors of 72.",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "72 = 2³ × 3². Factors = (3+1)(2+1)=12."
},
{
  id: 8,
  difficulty: "Medium",
  question: "How many multiples of 12 are there between 1 and 100?",
  options: ["7", "8", "9", "10"],
  correctAnswerIndex: 1,
  explanation: "12×8=96 and 12×9=108. Hence 8 multiples."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The sum of all factors of 18 is:",
  options: ["36", "39", "42", "45"],
  correctAnswerIndex: 1,
  explanation: "Factors: 1,2,3,6,9,18. Sum = 39."
},
{
  id: 10,
  difficulty: "Hard",
  question: "How many factors does 100 have?",
  options: ["7", "8", "9", "10"],
  correctAnswerIndex: 2,
  explanation: "100 = 2² × 5². Factors = (2+1)(2+1)=9."
}
]
  },
  {
  id: 4,
  name: "HCF and LCM",

  notes: {
    concept:
      "HCF (Highest Common Factor) is the greatest common divisor of two or more numbers. LCM (Least Common Multiple) is the smallest common multiple of two or more numbers.",

    formula: {
      hcf:
        "HCF = Highest Common Factor",

      lcm:
        "LCM = Least Common Multiple",

      relation:
        "HCF × LCM = Product of Two Numbers"
    },

    shortcuts: [
      "HCF is always ≤ smallest number",
      "LCM is always ≥ largest number",
      "Use prime factorization for quick solving",
      "HCF × LCM = Product (for two numbers)"
    ],

    example: {
      question:
        "Find the HCF and LCM of 12 and 18.",

      solution:
        "12 = 2² × 3, 18 = 2 × 3². HCF = 2 × 3 = 6. LCM = 2² × 3² = 36."
    },

    tips: [
      "Prime factorization is the fastest method.",
      "Memorize HCF × LCM relation.",
      "One of the most important placement topics."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Find the HCF of 12 and 18.",
  options: ["3", "6", "9", "12"],
  correctAnswerIndex: 1,
  explanation: "Common factors are 1,2,3,6. Highest = 6."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Find the LCM of 6 and 8.",
  options: ["12", "24", "36", "48"],
  correctAnswerIndex: 1,
  explanation: "LCM(6,8) = 24."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Find the HCF of 24 and 36.",
  options: ["6", "8", "12", "18"],
  correctAnswerIndex: 2,
  explanation: "HCF(24,36) = 12."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Find the LCM of 12 and 15.",
  options: ["30", "45", "60", "90"],
  correctAnswerIndex: 2,
  explanation: "LCM(12,15) = 60."
},
{
  id: 5,
  difficulty: "Easy",
  question: "The product of two numbers is 120 and their HCF is 2. If one number is 10, the other is:",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 2,
  explanation: "120 ÷ 10 = 12."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Find the HCF of 72 and 120.",
  options: ["12", "18", "24", "36"],
  correctAnswerIndex: 2,
  explanation: "72 = 2³×3², 120 = 2³×3×5. HCF = 2³×3 = 24."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Find the LCM of 18, 24 and 30.",
  options: ["180", "240", "360", "720"],
  correctAnswerIndex: 2,
  explanation: "LCM = 2³×3²×5 = 360."
},
{
  id: 8,
  difficulty: "Medium",
  question: "If HCF = 8 and LCM = 240 for two numbers, and one number is 48, find the other.",
  options: ["32", "40", "48", "64"],
  correctAnswerIndex: 1,
  explanation: "(48 × x) = HCF × LCM = 8 × 240 = 1920. x = 40."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The HCF of two numbers is 16 and their LCM is 960. If one number is 160, find the other.",
  options: ["96", "100", "120", "140"],
  correctAnswerIndex: 0,
  explanation: "(160 × x) = 16 × 960 = 15360. x = 96."
},
{
  id: 10,
  difficulty: "Hard",
  question: "Find the least number divisible by 12, 15 and 20.",
  options: ["30", "45", "60", "300"],
  correctAnswerIndex: 2,
  explanation: "LCM(12,15,20) = 60."
}
]
  },
  {
  id: 5,
  name: "Remainder Theorem Basics",

  notes: {
    concept:
      "Remainder problems determine the value left after division. They are very common in placement aptitude tests.",

    formula: {
      dividend:
        "Dividend = Divisor × Quotient + Remainder",

      remainder:
        "Remainder < Divisor"
    },

    shortcuts: [
      "Remainder is always less than divisor",
      "Use cyclic patterns for large powers",
      "Check divisibility first"
    ],

    example: {
      question:
        "Find the remainder when 29 is divided by 6.",

      solution:
        "29 = 6 × 4 + 5. Therefore, remainder = 5."
    },

    tips: [
      "Memorize Dividend = Divisor × Quotient + Remainder.",
      "Many advanced problems build on this concept.",
      "Frequently asked in placement exams."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "What is the remainder when 17 is divided by 5?",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 1,
  explanation: "17 = 5 × 3 + 2."
},
{
  id: 2,
  difficulty: "Easy",
  question: "What is the remainder when 29 is divided by 4?",
  options: ["0", "1", "2", "3"],
  correctAnswerIndex: 1,
  explanation: "29 = 4 × 7 + 1."
},
{
  id: 3,
  difficulty: "Easy",
  question: "What is the remainder when 45 is divided by 7?",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 2,
  explanation: "45 = 7 × 6 + 3."
},
{
  id: 4,
  difficulty: "Easy",
  question: "What is the remainder when 100 is divided by 9?",
  options: ["0", "1", "2", "3"],
  correctAnswerIndex: 0,
  explanation: "100 = 9 × 11 + 1."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A number leaves remainder 4 when divided by 7. What remainder will (number + 3) leave when divided by 7?",
  options: ["0", "1", "2", "3"],
  correctAnswerIndex: 0,
  explanation: "4 + 3 = 7 ⇒ remainder 0."
},
{
  id: 6,
  difficulty: "Medium",
  question: "What is the remainder when 125 is divided by 8?",
  options: ["3", "4", "5", "6"],
  correctAnswerIndex: 2,
  explanation: "125 = 8 × 15 + 5."
},
{
  id: 7,
  difficulty: "Medium",
  question: "If a number leaves remainder 2 when divided by 5, what remainder will twice the number leave when divided by 5?",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 3,
  explanation: "2 × 2 = 4. Remainder = 4."
},
{
  id: 8,
  difficulty: "Medium",
  question: "What is the remainder when 256 is divided by 11?",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 3,
  explanation: "256 = 11 × 23 + 3."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A number leaves remainder 5 when divided by 8. What remainder will its square leave when divided by 8?",
  options: ["1", "3", "5", "7"],
  correctAnswerIndex: 0,
  explanation: "5² = 25. 25 ÷ 8 leaves remainder 1."
},
{
  id: 10,
  difficulty: "Hard",
  question: "What is the remainder when 999 is divided by 13?",
  options: ["10", "11", "12", "0"],
  correctAnswerIndex: 2,
  explanation: "999 = 13 × 76 + 11."
}
]
  },
  {
  id: 6,
  name: "Unit Digit Problems",

  notes: {
    concept:
      "Unit digit problems ask for the last digit of large powers or expressions without calculating the entire value.",

    formula: {
      unitDigit:
        "Only the last digit affects the unit digit of powers"
    },

    shortcuts: [
      "2 → 2,4,8,6 (cycle length 4)",
      "3 → 3,9,7,1 (cycle length 4)",
      "4 → 4,6 (cycle length 2)",
      "5 → Always 5",
      "6 → Always 6",
      "9 → 9,1 (cycle length 2)"
    ],

    example: {
      question:
        "Find the unit digit of 2^15.",

      solution:
        "Cycle of 2 = {2,4,8,6}. 15 mod 4 = 3. Third term = 8. Unit digit = 8."
    },

    tips: [
      "Memorize common cycles.",
      "Use exponent mod cycle length.",
      "One of the most important Number System patterns."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "What is the unit digit of 2²?",
  options: ["2", "4", "6", "8"],
  correctAnswerIndex: 1,
  explanation: "2² = 4."
},
{
  id: 2,
  difficulty: "Easy",
  question: "What is the unit digit of 3⁴?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 0,
  explanation: "3⁴ = 81."
},
{
  id: 3,
  difficulty: "Easy",
  question: "What is the unit digit of 7³?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 1,
  explanation: "7³ = 343."
},
{
  id: 4,
  difficulty: "Easy",
  question: "What is the unit digit of 5¹⁰?",
  options: ["0", "5", "1", "6"],
  correctAnswerIndex: 1,
  explanation: "Any power of 5 ends in 5."
},
{
  id: 5,
  difficulty: "Easy",
  question: "What is the unit digit of 9²?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 0,
  explanation: "9² = 81."
},
{
  id: 6,
  difficulty: "Medium",
  question: "What is the unit digit of 2¹⁰?",
  options: ["2", "4", "6", "8"],
  correctAnswerIndex: 1,
  explanation: "Cycle of 2 → 2,4,8,6. 10 mod 4 = 2. Unit digit = 4."
},
{
  id: 7,
  difficulty: "Medium",
  question: "What is the unit digit of 3⁷?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 2,
  explanation: "Cycle of 3 → 3,9,7,1. 7 mod 4 = 3. Unit digit = 7."
},
{
  id: 8,
  difficulty: "Medium",
  question: "What is the unit digit of 8⁵?",
  options: ["2", "4", "6", "8"],
  correctAnswerIndex: 3,
  explanation: "Cycle of 8 → 8,4,2,6. 5 mod 4 = 1. Unit digit = 8."
},
{
  id: 9,
  difficulty: "Hard",
  question: "What is the unit digit of 17¹⁰⁰?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 0,
  explanation: "Only unit digit matters. 7 cycle = 7,9,3,1. 100 mod 4 = 0 ⇒ unit digit = 1."
},
{
  id: 10,
  difficulty: "Hard",
  question: "What is the unit digit of 23⁵⁰?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 3,
  explanation: "3 cycle = 3,9,7,1. 50 mod 4 = 2 ⇒ unit digit = 9."
}
]
  },
  {
  id: 7,
  name: "Cyclicity of Numbers",

  notes: {
    concept:
      "Many numbers repeat their unit digits in a fixed cycle when raised to successive powers. This repeating pattern is called cyclicity.",

    formula: {
      cyclicity:
        "Unit Digit depends on exponent mod Cycle Length"
    },

    shortcuts: [
      "2 → 2,4,8,6 (Cycle 4)",
      "3 → 3,9,7,1 (Cycle 4)",
      "4 → 4,6 (Cycle 2)",
      "7 → 7,9,3,1 (Cycle 4)",
      "8 → 8,4,2,6 (Cycle 4)",
      "9 → 9,1 (Cycle 2)"
    ],

    example: {
      question:
        "Find the unit digit of 7^23.",

      solution:
        "Cycle of 7 = {7,9,3,1}. 23 mod 4 = 3. Third term = 3. Unit digit = 3."
    },

    tips: [
      "Memorize common cycles.",
      "Find exponent modulo cycle length.",
      "Frequently asked in aptitude tests."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "What is the unit digit of 2⁵?",
  options: ["2", "4", "6", "8"],
  correctAnswerIndex: 0,
  explanation: "Cycle of 2 → 2,4,8,6. 5 mod 4 = 1. Unit digit = 2."
},
{
  id: 2,
  difficulty: "Easy",
  question: "What is the unit digit of 3⁶?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 3,
  explanation: "Cycle of 3 → 3,9,7,1. 6 mod 4 = 2. Unit digit = 9."
},
{
  id: 3,
  difficulty: "Easy",
  question: "What is the unit digit of 4⁷?",
  options: ["4", "6", "8", "2"],
  correctAnswerIndex: 0,
  explanation: "Cycle of 4 → 4,6. Odd power ⇒ 4."
},
{
  id: 4,
  difficulty: "Easy",
  question: "What is the unit digit of 9¹¹?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 3,
  explanation: "Cycle of 9 → 9,1. Odd power ⇒ 9."
},
{
  id: 5,
  difficulty: "Easy",
  question: "What is the unit digit of 7⁸?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 0,
  explanation: "Cycle of 7 → 7,9,3,1. 8 mod 4 = 0 ⇒ 1."
},
{
  id: 6,
  difficulty: "Medium",
  question: "What is the unit digit of 2³⁰?",
  options: ["2", "4", "6", "8"],
  correctAnswerIndex: 1,
  explanation: "30 mod 4 = 2. Cycle of 2 → 2,4,8,6. Unit digit = 4."
},
{
  id: 7,
  difficulty: "Medium",
  question: "What is the unit digit of 13²⁵?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 1,
  explanation: "Use unit digit 3. 25 mod 4 = 1 ⇒ unit digit = 3."
},
{
  id: 8,
  difficulty: "Medium",
  question: "What is the unit digit of 18³³?",
  options: ["2", "4", "6", "8"],
  correctAnswerIndex: 3,
  explanation: "Use unit digit 8. 33 mod 4 = 1 ⇒ unit digit = 8."
},
{
  id: 9,
  difficulty: "Hard",
  question: "What is the unit digit of 27⁵⁰?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 3,
  explanation: "Use unit digit 7. 50 mod 4 = 2. Cycle: 7,9,3,1 ⇒ 9."
},
{
  id: 10,
  difficulty: "Hard",
  question: "What is the unit digit of 43¹⁰⁰?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 0,
  explanation: "Use unit digit 3. 100 mod 4 = 0. Cycle: 3,9,7,1 ⇒ 1."
}
]
  },
  {
  id: 8,
  name: "Trailing Zeros",

  notes: {
    concept:
      "Trailing zeros are the zeros at the end of a number. In factorials, they are determined by the number of factors of 10, i.e., pairs of 2 and 5.",

    formula: {
      trailingZeros:
        "Trailing Zeros in n! = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ..."
    },

    shortcuts: [
      "Count factors of 5 only",
      "Factors of 2 are always more than factors of 5",
      "Add n/5, n/25, n/125..."
    ],

    example: {
      question:
        "Find the number of trailing zeros in 100!.",

      solution:
        "⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24. Therefore, 100! has 24 trailing zeros."
    },

    tips: [
      "Ignore factors of 2.",
      "Keep dividing by powers of 5.",
      "One of the most frequently asked Number System topics."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "How many trailing zeros are there in 5! ?",
  options: ["0", "1", "2", "3"],
  correctAnswerIndex: 1,
  explanation: "5! = 120, which has 1 trailing zero."
},
{
  id: 2,
  difficulty: "Easy",
  question: "How many trailing zeros are there in 10! ?",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 1,
  explanation: "⌊10/5⌋ = 2."
},
{
  id: 3,
  difficulty: "Easy",
  question: "How many trailing zeros are there in 15! ?",
  options: ["2", "3", "4", "5"],
  correctAnswerIndex: 1,
  explanation: "⌊15/5⌋ = 3."
},
{
  id: 4,
  difficulty: "Easy",
  question: "How many trailing zeros are there in 20! ?",
  options: ["3", "4", "5", "6"],
  correctAnswerIndex: 1,
  explanation: "⌊20/5⌋ = 4."
},
{
  id: 5,
  difficulty: "Easy",
  question: "How many trailing zeros are there in 25! ?",
  options: ["5", "6", "7", "8"],
  correctAnswerIndex: 1,
  explanation: "⌊25/5⌋ + ⌊25/25⌋ = 5 + 1 = 6."
},
{
  id: 6,
  difficulty: "Medium",
  question: "How many trailing zeros are there in 50! ?",
  options: ["10", "11", "12", "13"],
  correctAnswerIndex: 2,
  explanation: "⌊50/5⌋ + ⌊50/25⌋ = 10 + 2 = 12."
},
{
  id: 7,
  difficulty: "Medium",
  question: "How many trailing zeros are there in 100! ?",
  options: ["20", "22", "24", "26"],
  correctAnswerIndex: 2,
  explanation: "⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24."
},
{
  id: 8,
  difficulty: "Medium",
  question: "How many trailing zeros are there in 125! ?",
  options: ["28", "30", "31", "32"],
  correctAnswerIndex: 0,
  explanation: "25 + 5 + 1 = 31."
},
{
  id: 9,
  difficulty: "Hard",
  question: "How many trailing zeros are there in 200! ?",
  options: ["45", "48", "49", "50"],
  correctAnswerIndex: 2,
  explanation: "40 + 8 + 1 = 49."
},
{
  id: 10,
  difficulty: "Hard",
  question: "The number of trailing zeros in 500! is:",
  options: ["120", "124", "126", "130"],
  correctAnswerIndex: 1,
  explanation: "100 + 20 + 4 = 124."
}
]
  },
  {
  id: 9,
  name: "Even and Odd Numbers",

  notes: {
    concept:
      "Even numbers are divisible by 2, while odd numbers are not divisible by 2.",

    formula: {
      even:
        "Even Number = 2n",

      odd:
        "Odd Number = 2n + 1"
    },

    shortcuts: [
      "Even + Even = Even",
      "Odd + Odd = Even",
      "Even + Odd = Odd",
      "Odd × Odd = Odd",
      "Even × Any Number = Even"
    ],

    example: {
      question:
        "Determine whether 17 + 25 is even or odd.",

      solution:
        "17 and 25 are odd. Odd + Odd = Even. Therefore, 42 is even."
    },

    tips: [
      "Memorize addition and multiplication rules.",
      "Useful in algebra and number system problems.",
      "Frequently appears in placement aptitude."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Which of the following is an even number?",
  options: ["15", "21", "28", "33"],
  correctAnswerIndex: 2,
  explanation: "28 is divisible by 2."
},
{
  id: 2,
  difficulty: "Easy",
  question: "The sum of two odd numbers is always:",
  options: ["Odd", "Even", "Prime", "Composite"],
  correctAnswerIndex: 1,
  explanation: "Odd + Odd = Even."
},
{
  id: 3,
  difficulty: "Easy",
  question: "The sum of an even and an odd number is:",
  options: ["Even", "Odd", "Prime", "Composite"],
  correctAnswerIndex: 1,
  explanation: "Even + Odd = Odd."
},
{
  id: 4,
  difficulty: "Easy",
  question: "The product of two odd numbers is:",
  options: ["Even", "Odd", "Prime", "Zero"],
  correctAnswerIndex: 1,
  explanation: "Odd × Odd = Odd."
},
{
  id: 5,
  difficulty: "Easy",
  question: "The product of an even number and an odd number is:",
  options: ["Even", "Odd", "Prime", "Cannot determine"],
  correctAnswerIndex: 0,
  explanation: "Even × Odd = Even."
},
{
  id: 6,
  difficulty: "Medium",
  question: "If x is even and y is odd, then x² + y² is:",
  options: ["Even", "Odd", "Prime", "Cannot determine"],
  correctAnswerIndex: 1,
  explanation: "Even² = Even, Odd² = Odd. Even + Odd = Odd."
},
{
  id: 7,
  difficulty: "Medium",
  question: "The sum of three consecutive integers is always:",
  options: ["Odd", "Even", "Divisible by 3", "Prime"],
  correctAnswerIndex: 2,
  explanation: "n + (n+1) + (n+2) = 3n + 3 = 3(n+1)."
},
{
  id: 8,
  difficulty: "Medium",
  question: "How many odd numbers are there between 1 and 100?",
  options: ["49", "50", "51", "52"],
  correctAnswerIndex: 1,
  explanation: "1,3,5,...,99 → 50 odd numbers."
},
{
  id: 9,
  difficulty: "Hard",
  question: "If the product of three integers is odd, then the numbers must be:",
  options: ["All even", "Two odd and one even", "All odd", "Cannot determine"],
  correctAnswerIndex: 2,
  explanation: "A product is odd only when all factors are odd."
},
{
  id: 10,
  difficulty: "Hard",
  question: "The sum of first 50 even numbers is:",
  options: ["2500", "2550", "2600", "2450"],
  correctAnswerIndex: 1,
  explanation: "Sum of first n even numbers = n(n+1) = 50×51 = 2550."
}
]
  },
  {
  id: 10,
  name: "Prime Numbers",

  notes: {
    concept:
      "A prime number has exactly two distinct factors: 1 and itself.",

    formula: {
      prime:
        "Prime Number ⇒ Exactly 2 Factors",

      composite:
        "Composite Number ⇒ More than 2 Factors"
    },

    shortcuts: [
      "2 is the only even prime number",
      "1 is neither prime nor composite",
      "Check divisibility up to √n",
      "Every prime greater than 3 is of the form 6k ± 1"
    ],

    example: {
      question:
        "Is 29 a prime number?",

      solution:
        "√29 ≈ 5.38. Check divisibility by 2, 3 and 5. None divide 29. Therefore, 29 is prime."
    },

    tips: [
      "Use square root checking for faster solutions.",
      "Memorize primes up to 100.",
      "Very important for HCF, LCM and factorization questions."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Which of the following is a prime number?",
  options: ["21", "27", "29", "35"],
  correctAnswerIndex: 2,
  explanation: "29 has only two factors: 1 and 29."
},
{
  id: 2,
  difficulty: "Easy",
  question: "How many prime numbers are there between 1 and 10?",
  options: ["3", "4", "5", "6"],
  correctAnswerIndex: 1,
  explanation: "2, 3, 5, 7."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Which is the smallest prime number?",
  options: ["0", "1", "2", "3"],
  correctAnswerIndex: 2,
  explanation: "2 is the smallest prime number."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Which of the following is not a prime number?",
  options: ["11", "13", "15", "17"],
  correctAnswerIndex: 2,
  explanation: "15 = 3 × 5."
},
{
  id: 5,
  difficulty: "Easy",
  question: "What is the sum of the first five prime numbers?",
  options: ["26", "28", "30", "32"],
  correctAnswerIndex: 1,
  explanation: "2 + 3 + 5 + 7 + 11 = 28."
},
{
  id: 6,
  difficulty: "Medium",
  question: "How many prime numbers are there between 1 and 20?",
  options: ["7", "8", "9", "10"],
  correctAnswerIndex: 1,
  explanation: "2,3,5,7,11,13,17,19."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Which of the following numbers is a twin prime with 29?",
  options: ["25", "27", "31", "33"],
  correctAnswerIndex: 2,
  explanation: "29 and 31 differ by 2 and both are prime."
},
{
  id: 8,
  difficulty: "Medium",
  question: "The product of two prime numbers is 77. What are the numbers?",
  options: ["7 and 11", "5 and 15", "3 and 21", "1 and 77"],
  correctAnswerIndex: 0,
  explanation: "77 = 7 × 11."
},
{
  id: 9,
  difficulty: "Hard",
  question: "How many prime numbers are there between 50 and 70?",
  options: ["4", "5", "6", "7"],
  correctAnswerIndex: 1,
  explanation: "53, 59, 61, 67, 69(not prime). Total = 5 primes."
},
{
  id: 10,
  difficulty: "Hard",
  question: "Which of the following is the largest prime number?",
  options: ["91", "97", "99", "95"],
  correctAnswerIndex: 1,
  explanation: "97 is prime; others are composite."
}
]
  },
  {
  id: 11,
  name: "Co-prime Numbers",

  notes: {
    concept:
      "Two numbers are called co-prime numbers if their HCF (Highest Common Factor) is 1.",

    formula: {
      coprime:
        "HCF(a,b) = 1"
    },

    shortcuts: [
      "Co-prime numbers need not be prime numbers",
      "Consecutive numbers are always co-prime",
      "A prime number and its multiple are not co-prime"
    ],

    example: {
      question:
        "Are 8 and 15 co-prime?",

      solution:
        "Factors of 8 = {1,2,4,8}. Factors of 15 = {1,3,5,15}. Common factor = 1. Hence they are co-prime."
    },

    tips: [
      "Check HCF first.",
      "Consecutive integers are always co-prime.",
      "Frequently appears in HCF and LCM problems."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Which of the following pairs are co-prime?",
  options: ["8 and 12", "9 and 15", "7 and 20", "14 and 21"],
  correctAnswerIndex: 2,
  explanation: "HCF(7,20) = 1."
},
{
  id: 2,
  difficulty: "Easy",
  question: "The HCF of two co-prime numbers is:",
  options: ["0", "1", "2", "Depends on numbers"],
  correctAnswerIndex: 1,
  explanation: "Co-prime numbers always have HCF = 1."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Which pair is NOT co-prime?",
  options: ["11 and 12", "15 and 16", "18 and 25", "21 and 35"],
  correctAnswerIndex: 3,
  explanation: "HCF(21,35) = 7."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Are 8 and 15 co-prime?",
  options: ["Yes", "No", "Cannot determine", "Sometimes"],
  correctAnswerIndex: 0,
  explanation: "HCF(8,15) = 1."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Which of the following consecutive numbers are always co-prime?",
  options: ["n and n+1", "n and n+2", "n and n+3", "None"],
  correctAnswerIndex: 0,
  explanation: "Consecutive numbers always have HCF = 1."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Find the HCF of 35 and 64.",
  options: ["1", "5", "7", "None"],
  correctAnswerIndex: 0,
  explanation: "No common factor except 1."
},
{
  id: 7,
  difficulty: "Medium",
  question: "If two numbers are co-prime and their product is 221, one number is 13. Find the other.",
  options: ["15", "16", "17", "19"],
  correctAnswerIndex: 2,
  explanation: "221 = 13 × 17."
},
{
  id: 8,
  difficulty: "Medium",
  question: "How many numbers from 1 to 10 are co-prime with 10?",
  options: ["3", "4", "5", "6"],
  correctAnswerIndex: 1,
  explanation: "1,3,7,9 are co-prime with 10."
},
{
  id: 9,
  difficulty: "Hard",
  question: "If two co-prime numbers have product 143, what are the numbers?",
  options: ["11 and 13", "7 and 21", "1 and 143", "9 and 15"],
  correctAnswerIndex: 0,
  explanation: "143 = 11 × 13 and HCF(11,13)=1."
},
{
  id: 10,
  difficulty: "Hard",
  question: "The number of integers between 1 and 12 that are co-prime to 12 is:",
  options: ["2", "3", "4", "5"],
  correctAnswerIndex: 2,
  explanation: "1,5,7,11 are co-prime with 12."
}
]
  },
  {
  id: 12,
  name: "Surds and Indices",

  notes: {
    concept:
      "Indices deal with powers and exponents, while surds are irrational roots that cannot be simplified into rational numbers.",

    formula: {
      index1:
        "aᵐ × aⁿ = aᵐ⁺ⁿ",

      index2:
        "aᵐ / aⁿ = aᵐ⁻ⁿ",

      index3:
        "(aᵐ)ⁿ = aᵐⁿ",

      surd:
        "√a × √b = √(ab)"
    },

    shortcuts: [
      "Add powers while multiplying",
      "Subtract powers while dividing",
      "Multiply powers when raising a power",
      "Simplify surds before calculation"
    ],

    example: {
      question:
        "Simplify √50.",

      solution:
        "√50 = √(25×2) = 5√2."
    },

    tips: [
      "Memorize exponent laws.",
      "Factorize numbers before simplifying surds.",
      "Useful in aptitude and quantitative reasoning."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "What is the value of √81?",
  options: ["7", "8", "9", "10"],
  correctAnswerIndex: 2,
  explanation: "√81 = 9."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Simplify 2³ × 2².",
  options: ["2⁵", "2⁶", "4⁵", "8²"],
  correctAnswerIndex: 0,
  explanation: "aᵐ × aⁿ = aᵐ⁺ⁿ."
},
{
  id: 3,
  difficulty: "Easy",
  question: "What is the value of 5⁰?",
  options: ["0", "1", "5", "Undefined"],
  correctAnswerIndex: 1,
  explanation: "Any non-zero number raised to 0 is 1."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Simplify √144.",
  options: ["10", "11", "12", "13"],
  correctAnswerIndex: 2,
  explanation: "√144 = 12."
},
{
  id: 5,
  difficulty: "Easy",
  question: "What is the value of 3² × 3³?",
  options: ["243", "729", "81", "27"],
  correctAnswerIndex: 0,
  explanation: "3⁵ = 243."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Simplify (2³)².",
  options: ["2⁵", "2⁶", "2⁸", "2⁹"],
  correctAnswerIndex: 1,
  explanation: "(aᵐ)ⁿ = aᵐⁿ = 2⁶."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Simplify √50.",
  options: ["5√2", "10√2", "25√2", "2√5"],
  correctAnswerIndex: 0,
  explanation: "√50 = √(25×2) = 5√2."
},
{
  id: 8,
  difficulty: "Medium",
  question: "What is the value of 2⁻³?",
  options: ["8", "1/8", "−8", "1/6"],
  correctAnswerIndex: 1,
  explanation: "a⁻ⁿ = 1/aⁿ."
},
{
  id: 9,
  difficulty: "Hard",
  question: "Simplify (√3 + √3)².",
  options: ["6", "9", "12", "18"],
  correctAnswerIndex: 2,
  explanation: "(2√3)² = 4×3 = 12."
},
{
  id: 10,
  difficulty: "Hard",
  question: "What is the value of 27^(2/3)?",
  options: ["3", "6", "9", "12"],
  correctAnswerIndex: 2,
  explanation: "27^(2/3) = (³√27)² = 3² = 9."
}
]
  },
  {
  id: 13,
  name: "Mixed Placement Questions",

  notes: {
    concept:
      "Mixed Number System questions combine divisibility, HCF, LCM, remainders, unit digits, cyclicity, primes, and factors in a single problem.",

    formula: {
      remainder:
        "Dividend = Divisor × Quotient + Remainder",

      hcfLcm:
        "HCF × LCM = Product of Two Numbers"
    },

    shortcuts: [
      "Identify the underlying concept first",
      "Use divisibility rules before calculations",
      "Apply cyclicity for large powers",
      "Prime factorization often simplifies problems"
    ],

    example: {
      question:
        "Find the unit digit of 3^27.",

      solution:
        "Cycle of 3 = {3,9,7,1}. 27 mod 4 = 3. Third term = 7. Unit digit = 7."
    },

    tips: [
      "Mixed questions test multiple concepts together.",
      "Break large problems into smaller steps.",
      "Very common in placement aptitude."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "What is the HCF of 24 and 36?",
  options: ["6", "8", "12", "18"],
  correctAnswerIndex: 2,
  explanation: "HCF(24,36) = 12."
},
{
  id: 2,
  difficulty: "Easy",
  question: "How many trailing zeros are there in 10! ?",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 1,
  explanation: "⌊10/5⌋ = 2."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Which of the following is a prime number?",
  options: ["21", "27", "29", "35"],
  correctAnswerIndex: 2,
  explanation: "29 is prime."
},
{
  id: 4,
  difficulty: "Easy",
  question: "What is the remainder when 37 is divided by 5?",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 1,
  explanation: "37 = 5 × 7 + 2."
},
{
  id: 5,
  difficulty: "Medium",
  question: "What is the unit digit of 7¹⁰?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 3,
  explanation: "Cycle of 7 → 7,9,3,1. 10 mod 4 = 2. Unit digit = 9."
},
{
  id: 6,
  difficulty: "Medium",
  question: "How many factors does 72 have?",
  options: ["10", "12", "14", "16"],
  correctAnswerIndex: 1,
  explanation: "72 = 2³ × 3². Factors = (3+1)(2+1)=12."
},
{
  id: 7,
  difficulty: "Medium",
  question: "The sum of first 20 natural numbers is:",
  options: ["190", "200", "210", "220"],
  correctAnswerIndex: 2,
  explanation: "20×21/2 = 210."
},
{
  id: 8,
  difficulty: "Hard",
  question: "What is the value of 27^(2/3)?",
  options: ["3", "6", "9", "12"],
  correctAnswerIndex: 2,
  explanation: "(³√27)² = 3² = 9."
},
{
  id: 9,
  difficulty: "Hard",
  question: "How many trailing zeros are there in 100! ?",
  options: ["20", "22", "24", "26"],
  correctAnswerIndex: 2,
  explanation: "⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24."
},
{
  id: 10,
  difficulty: "Hard",
  question: "If HCF of two numbers is 8 and LCM is 240, one number is 48. Find the other number.",
  options: ["32", "40", "48", "64"],
  correctAnswerIndex: 1,
  explanation: "Other number = (8×240)/48 = 40."
}
]
  },
  {
  id: 14,
  name: "Data Interpretation",

  notes: {
    concept:
      "Number System DI questions use tables, charts, and datasets involving factors, multiples, primes, divisibility, and remainders.",

    formula: {
      factor:
        "Factor divides a number completely",

      multiple:
        "Multiple = Number × Integer"
    },

    shortcuts: [
      "Extract data first",
      "Apply divisibility rules quickly",
      "Look for factor relationships",
      "Use approximation when possible"
    ],

    example: {
      question:
        "A table shows values 24, 36 and 48. Find their HCF.",

      solution:
        "HCF(24,36,48) = 12."
    },

    tips: [
      "Organize data before solving.",
      "Prime factorization is useful.",
      "Common in quantitative aptitude tests."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A survey of 200 students shows that 120 like Mathematics. What percentage of students like Mathematics?",
  options: ["50%", "55%", "60%", "65%"],
  correctAnswerIndex: 2,
  explanation: "(120/200) × 100 = 60%."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Out of 500 numbers tested, 150 were divisible by 3. What percentage were divisible by 3?",
  options: ["20%", "25%", "30%", "35%"],
  correctAnswerIndex: 2,
  explanation: "(150/500) × 100 = 30%."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Among 100 integers, 40 are even. What is the probability of selecting an even integer?",
  options: ["0.2", "0.3", "0.4", "0.5"],
  correctAnswerIndex: 2,
  explanation: "40/100 = 0.4."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A dataset contains 250 numbers. If 50 are prime numbers, what percentage are prime?",
  options: ["10%", "15%", "20%", "25%"],
  correctAnswerIndex: 2,
  explanation: "(50/250) × 100 = 20%."
},
{
  id: 5,
  difficulty: "Medium",
  question: "Out of 300 numbers, 180 are multiples of 5. What fraction of the numbers are multiples of 5?",
  options: ["2/5", "3/5", "4/5", "1/2"],
  correctAnswerIndex: 1,
  explanation: "180/300 = 3/5."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A survey shows 80 out of 400 numbers are perfect squares. What percentage are perfect squares?",
  options: ["15%", "20%", "25%", "30%"],
  correctAnswerIndex: 1,
  explanation: "(80/400) × 100 = 20%."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Among 600 integers, 240 are odd. What is the ratio of odd numbers to total numbers?",
  options: ["2:5", "3:5", "1:2", "4:5"],
  correctAnswerIndex: 0,
  explanation: "240:600 = 2:5."
},
{
  id: 8,
  difficulty: "Hard",
  question: "In a group of 1000 numbers, 600 are divisible by 2, 400 by 3 and 200 by both. How many are divisible by at least one of 2 or 3?",
  options: ["700", "800", "900", "1000"],
  correctAnswerIndex: 1,
  explanation: "600 + 400 - 200 = 800."
},
{
  id: 9,
  difficulty: "Hard",
  question: "Out of 500 numbers, 300 are even and 150 are multiples of 4. What percentage of even numbers are multiples of 4?",
  options: ["25%", "40%", "50%", "60%"],
  correctAnswerIndex: 2,
  explanation: "(150/300) × 100 = 50%."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A dataset contains 800 numbers. 320 are prime and 480 are composite. What is the ratio of prime to composite numbers?",
  options: ["2:3", "3:4", "4:5", "5:6"],
  correctAnswerIndex: 0,
  explanation: "320:480 = 2:3."
}
]
  },
  {
  id: 15,
  name: "Advanced Number System",

  notes: {
    concept:
      "Advanced Number System combines cyclicity, remainders, divisibility, factorials, prime factorization, and large-number computations.",

    formula: {
      trailingZeros:
        "⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ...",

      unitDigit:
        "Use cyclicity and exponent modulo cycle length"
    },

    shortcuts: [
      "Use cycles for large exponents",
      "Count factors of 5 for trailing zeros",
      "Prime factorization simplifies advanced problems",
      "Avoid direct calculation of large numbers"
    ],

    example: {
      question:
        "Find the number of trailing zeros in 125!.",

      solution:
        "⌊125/5⌋ + ⌊125/25⌋ + ⌊125/125⌋ = 25 + 5 + 1 = 31."
    },

    tips: [
      "Advanced questions usually combine multiple patterns.",
      "Focus on shortcuts rather than lengthy calculations.",
      "Frequently asked in higher-level aptitude rounds."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Hard",
  question: "What is the remainder when 2¹⁰⁰ is divided by 7?",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 1,
  explanation: "Cycle of 2 mod 7 = 2,4,1. 100 mod 3 = 1. Remainder = 2."
},
{
  id: 2,
  difficulty: "Hard",
  question: "What is the unit digit of 7¹⁰⁰?",
  options: ["1", "3", "7", "9"],
  correctAnswerIndex: 0,
  explanation: "Cycle of 7 = 7,9,3,1. 100 mod 4 = 0. Unit digit = 1."
},
{
  id: 3,
  difficulty: "Hard",
  question: "How many factors does 360 have?",
  options: ["20", "24", "30", "36"],
  correctAnswerIndex: 1,
  explanation: "360 = 2³×3²×5¹. Factors = (3+1)(2+1)(1+1)=24."
},
{
  id: 4,
  difficulty: "Hard",
  question: "Find the greatest 4-digit number divisible by 88.",
  options: ["9944", "9968", "9988", "9996"],
  correctAnswerIndex: 1,
  explanation: "⌊9999/88⌋ = 113. 113×88 = 9944."
},
{
  id: 5,
  difficulty: "Hard",
  question: "How many trailing zeros are there in 250! ?",
  options: ["60", "61", "62", "63"],
  correctAnswerIndex: 2,
  explanation: "⌊250/5⌋+⌊250/25⌋+⌊250/125⌋ = 50+10+2 = 62."
},
{
  id: 6,
  difficulty: "Hard",
  question: "What is the remainder when 17³ is divided by 13?",
  options: ["1", "4", "5", "8"],
  correctAnswerIndex: 0,
  explanation: "17 ≡ 4 (mod 13). 4³ = 64. 64 mod 13 = 12."
},
{
  id: 7,
  difficulty: "Hard",
  question: "Find the least number that must be added to 999 to make it divisible by 13.",
  options: ["1", "2", "3", "4"],
  correctAnswerIndex: 2,
  explanation: "999 mod 13 = 10. Need 3 more to reach next multiple."
},
{
  id: 8,
  difficulty: "Hard",
  question: "The LCM of two numbers is 180 and HCF is 12. If one number is 36, find the other.",
  options: ["48", "60", "72", "84"],
  correctAnswerIndex: 1,
  explanation: "(12×180)/36 = 60."
},
{
  id: 9,
  difficulty: "Hard",
  question: "What are the last two digits of 7⁵⁰?",
  options: ["01", "49", "43", "99"],
  correctAnswerIndex: 0,
  explanation: "Using cyclicity modulo 100, 7⁵⁰ ends with 01."
},
{
  id: 10,
  difficulty: "Hard",
  question: "How many numbers between 1 and 100 are co-prime with 100?",
  options: ["35", "40", "45", "50"],
  correctAnswerIndex: 1,
  explanation: "φ(100)=100(1-1/2)(1-1/5)=40."
}
]
  }
  ]
};