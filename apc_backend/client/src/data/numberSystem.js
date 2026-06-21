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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
  }
  ]
};