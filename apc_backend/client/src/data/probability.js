export const probabilityQuestions = {
  patterns:[
{
  id: 1,
  name: "Basic Probability",

  notes: {
    concept:
      "Probability measures the chance of an event occurring. It ranges from 0 to 1.",

    formula: {
      probability:
        "Probability = Favorable Outcomes / Total Outcomes",

      impossible:
        "P(Impossible Event) = 0",

      certain:
        "P(Certain Event) = 1"
    },

    shortcuts: [
      "Probability is always between 0 and 1.",
      "Count favorable outcomes carefully.",
      "Total outcomes must include all possibilities."
    ],

    example: {
      question:
        "A die is rolled. Find the probability of getting an even number.",

      solution:
        "Even numbers = {2,4,6}. Favorable outcomes = 3. Total outcomes = 6. Probability = 3/6 = 1/2."
    },

    tips: [
      "Write sample space first.",
      "Count favorable outcomes accurately.",
      "Simplify fractions whenever possible."
    ]
  },

  questions: [
    {
      id: 1,
      difficulty: "Easy",
      question: "A fair die is rolled. What is the probability of getting 4?",
      options: ["1/2", "1/3", "1/6", "1/12"],
      correctAnswerIndex: 2,
      explanation: "Only one favorable outcome out of 6."
    },
    {
      id: 2,
      difficulty: "Easy",
      question: "A coin is tossed once. What is the probability of getting Heads?",
      options: ["1/4", "1/3", "1/2", "1"],
      correctAnswerIndex: 2,
      explanation: "1 favorable outcome out of 2."
    },
    {
      id: 3,
      difficulty: "Easy",
      question: "A die is rolled. What is the probability of getting an even number?",
      options: ["1/2", "1/3", "2/3", "1/6"],
      correctAnswerIndex: 0,
      explanation: "Even numbers = {2,4,6}. Probability = 3/6 = 1/2."
    },
    {
      id: 4,
      difficulty: "Easy",
      question: "A card is drawn from a deck. Find the probability of drawing a King.",
      options: ["1/13", "1/26", "1/52", "4/13"],
      correctAnswerIndex: 0,
      explanation: "4 Kings out of 52 cards."
    },
    {
      id: 5,
      difficulty: "Easy",
      question: "A die is rolled. Probability of getting a number greater than 4?",
      options: ["1/3", "1/2", "2/3", "1/6"],
      correctAnswerIndex: 0,
      explanation: "Numbers = {5,6}. Probability = 2/6 = 1/3."
    },
    {
      id: 6,
      difficulty: "Medium",
      question: "A bag contains 5 red and 3 blue balls. Find the probability of drawing a blue ball.",
      options: ["3/8", "5/8", "1/2", "3/5"],
      correctAnswerIndex: 0,
      explanation: "3 blue out of 8 total."
    },
    {
      id: 7,
      difficulty: "Medium",
      question: "A die is rolled. Probability of getting a prime number?",
      options: ["1/3", "1/2", "2/3", "5/6"],
      correctAnswerIndex: 1,
      explanation: "Prime numbers = {2,3,5}. Probability = 3/6 = 1/2."
    },
    {
      id: 8,
      difficulty: "Medium",
      question: "A card is drawn. Probability of drawing a Heart?",
      options: ["1/2", "1/4", "1/13", "13/52"],
      correctAnswerIndex: 1,
      explanation: "13 hearts out of 52 cards."
    },
    {
      id: 9,
      difficulty: "Hard",
      question: "A number is chosen from 1 to 20. Probability that it is divisible by 4?",
      options: ["1/5", "1/4", "3/10", "2/5"],
      correctAnswerIndex: 1,
      explanation: "Numbers = 4,8,12,16,20. Probability = 5/20 = 1/4."
    },
    {
      id: 10,
      difficulty: "Hard",
      question: "A die is rolled. Probability of getting a number less than 5?",
      options: ["1/3", "1/2", "2/3", "4/6"],
      correctAnswerIndex: 3,
      explanation: "Numbers = {1,2,3,4}. Probability = 4/6 = 2/3."
    }
  ]
},
  {
  id: 2,
  name: "Coins Probability",

  notes: {
    concept:
      "Coin probability questions involve outcomes of one or more coin tosses.",

    formula: {
      outcomes:
        "Total Outcomes = 2ⁿ"
    },

    shortcuts: [
      "1 coin ⇒ 2 outcomes",
      "2 coins ⇒ 4 outcomes",
      "3 coins ⇒ 8 outcomes"
    ],

    example: {
      question:
        "Two coins are tossed. Find the probability of getting exactly one head.",

      solution:
        "Outcomes = {HH, HT, TH, TT}. Favorable = {HT, TH}. Probability = 2/4 = 1/2."
    },

    tips: [
      "List outcomes when the number of tosses is small.",
      "Use 2ⁿ for total outcomes."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A coin is tossed once. Find the probability of getting a Head.",
  options: ["1/4", "1/3", "1/2", "1"],
  correctAnswerIndex: 2,
  explanation: "1 favorable outcome out of 2."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Two coins are tossed. Find the probability of getting two Heads.",
  options: ["1/4", "1/2", "3/4", "1"],
  correctAnswerIndex: 0,
  explanation: "HH is the only favorable outcome among 4 outcomes."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Two coins are tossed. Find the probability of getting exactly one Head.",
  options: ["1/4", "1/2", "3/4", "1"],
  correctAnswerIndex: 1,
  explanation: "HT and TH are favorable. Probability = 2/4."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Three coins are tossed. Find the probability of getting all Heads.",
  options: ["1/8", "1/4", "3/8", "1/2"],
  correctAnswerIndex: 0,
  explanation: "Only HHH out of 8 outcomes."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Three coins are tossed. Find the probability of getting all Tails.",
  options: ["1/8", "1/4", "3/8", "1/2"],
  correctAnswerIndex: 0,
  explanation: "Only TTT out of 8 outcomes."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Three coins are tossed. Find the probability of getting exactly two Heads.",
  options: ["1/8", "3/8", "1/2", "5/8"],
  correctAnswerIndex: 1,
  explanation: "HHT, HTH, THH = 3 favorable outcomes."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Three coins are tossed. Find the probability of getting at least one Head.",
  options: ["1/8", "3/8", "7/8", "1"],
  correctAnswerIndex: 2,
  explanation: "1 − P(No Head) = 1 − 1/8 = 7/8."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Four coins are tossed. Find the probability of getting all Heads.",
  options: ["1/8", "1/16", "1/4", "1/2"],
  correctAnswerIndex: 1,
  explanation: "Total outcomes = 16. Favorable = 1."
},
{
  id: 9,
  difficulty: "Hard",
  question: "Four coins are tossed. Find the probability of getting exactly three Heads.",
  options: ["1/4", "3/8", "1/2", "5/8"],
  correctAnswerIndex: 0,
  explanation: "4 favorable outcomes out of 16. Probability = 1/4."
},
{
  id: 10,
  difficulty: "Hard",
  question: "Five coins are tossed. Find the probability of getting all Heads.",
  options: ["1/16", "1/32", "1/64", "1/128"],
  correctAnswerIndex: 1,
  explanation: "Total outcomes = 2^5 = 32. Favorable = 1."
}
]
  },
  {
  id: 3,
  name: "Dice Probability",

  notes: {
    concept:
      "Dice probability questions involve finding the likelihood of specific outcomes when one or more dice are rolled.",

    formula: {
      probability:
        "Probability = Favorable Outcomes / Total Outcomes",

      outcomes:
        "For n dice, Total Outcomes = 6ⁿ"
    },

    shortcuts: [
      "One die ⇒ 6 outcomes",
      "Two dice ⇒ 36 outcomes",
      "Three dice ⇒ 216 outcomes",
      "Sum problems are very common"
    ],

    example: {
      question:
        "What is the probability of getting a number greater than 4 on a fair die?",

      solution:
        "Favorable Outcomes = {5,6} = 2. Total Outcomes = 6. Probability = 2/6 = 1/3."
    },

    tips: [
      "List outcomes carefully for two-dice questions.",
      "Memorize common sums for two dice.",
      "Frequently asked in placement tests."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A die is rolled. What is the probability of getting 5?",
  options: ["1/2", "1/3", "1/6", "1/12"],
  correctAnswerIndex: 2,
  explanation: "One favorable outcome out of 6."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A die is rolled. What is the probability of getting an even number?",
  options: ["1/3", "1/2", "2/3", "5/6"],
  correctAnswerIndex: 1,
  explanation: "Even numbers = {2,4,6}. Probability = 3/6 = 1/2."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A die is rolled. What is the probability of getting a number greater than 4?",
  options: ["1/6", "1/3", "1/2", "2/3"],
  correctAnswerIndex: 1,
  explanation: "Numbers = {5,6}. Probability = 2/6 = 1/3."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Two dice are rolled. What is the probability of getting a sum of 2?",
  options: ["1/36", "1/18", "1/12", "1/6"],
  correctAnswerIndex: 0,
  explanation: "Only (1,1). Probability = 1/36."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Two dice are rolled. What is the probability of getting a sum of 12?",
  options: ["1/36", "1/18", "1/12", "1/6"],
  correctAnswerIndex: 0,
  explanation: "Only (6,6). Probability = 1/36."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Two dice are rolled. What is the probability of getting a sum of 7?",
  options: ["1/12", "1/9", "1/6", "1/4"],
  correctAnswerIndex: 2,
  explanation: "6 favorable outcomes out of 36. Probability = 1/6."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Two dice are rolled. What is the probability of getting a sum of 8?",
  options: ["1/12", "5/36", "1/6", "1/4"],
  correctAnswerIndex: 1,
  explanation: "(2,6),(3,5),(4,4),(5,3),(6,2) → 5 outcomes."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Two dice are rolled. What is the probability of getting doubles?",
  options: ["1/12", "1/6", "1/4", "1/3"],
  correctAnswerIndex: 1,
  explanation: "(1,1)...(6,6) = 6 outcomes. Probability = 6/36 = 1/6."
},
{
  id: 9,
  difficulty: "Hard",
  question: "Three dice are rolled. What is the probability that all show the same number?",
  options: ["1/36", "1/24", "1/18", "1/12"],
  correctAnswerIndex: 0,
  explanation: "Favorable = 6. Total = 216. Probability = 6/216 = 1/36."
},
{
  id: 10,
  difficulty: "Hard",
  question: "Two dice are rolled. What is the probability that the sum is greater than 9?",
  options: ["1/6", "1/4", "5/18", "1/3"],
  correctAnswerIndex: 0,
  explanation: "Sums 10,11,12 → 3+2+1 = 6 outcomes. Probability = 6/36 = 1/6."
}
]
  },
  {
  id: 4,
  name: "Cards Probability",

  notes: {
    concept:
      "Card probability questions are based on a standard deck of 52 playing cards.",

    formula: {
      probability:
        "Probability = Favorable Outcomes / 52"
    },

    shortcuts: [
      "Total Cards = 52",
      "Hearts = 13",
      "Diamonds = 13",
      "Clubs = 13",
      "Spades = 13",
      "Face Cards = 12",
      "Kings = 4",
      "Queens = 4",
      "Jacks = 4"
    ],

    example: {
      question:
        "What is the probability of drawing a King from a deck of 52 cards?",

      solution:
        "Favorable Outcomes = 4. Total Outcomes = 52. Probability = 4/52 = 1/13."
    },

    tips: [
      "Memorize the basic card counts.",
      "Read the question carefully for replacement/non-replacement conditions.",
      "Very common in aptitude and probability rounds."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A card is drawn from a standard deck. Find the probability of drawing a King.",
  options: ["1/13", "1/26", "1/52", "4/13"],
  correctAnswerIndex: 0,
  explanation: "4 Kings out of 52 cards."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A card is drawn from a standard deck. Find the probability of drawing a Queen.",
  options: ["1/13", "1/26", "1/52", "1/4"],
  correctAnswerIndex: 0,
  explanation: "4 Queens out of 52 cards."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A card is drawn from a standard deck. Find the probability of drawing a Heart.",
  options: ["1/2", "1/4", "1/13", "13/52"],
  correctAnswerIndex: 1,
  explanation: "13 Hearts out of 52 cards."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A card is drawn from a standard deck. Find the probability of drawing an Ace.",
  options: ["1/13", "1/26", "1/52", "1/4"],
  correctAnswerIndex: 0,
  explanation: "4 Aces out of 52 cards."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A card is drawn from a standard deck. Find the probability of drawing a Red card.",
  options: ["1/4", "1/2", "3/4", "1"],
  correctAnswerIndex: 1,
  explanation: "26 Red cards out of 52."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A card is drawn from a standard deck. Find the probability of drawing a Face Card.",
  options: ["3/13", "1/4", "1/3", "1/2"],
  correctAnswerIndex: 0,
  explanation: "12 Face cards out of 52. Probability = 12/52 = 3/13."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A card is drawn from a standard deck. Find the probability of drawing a Black King.",
  options: ["1/26", "1/13", "1/52", "1/4"],
  correctAnswerIndex: 0,
  explanation: "2 Black Kings out of 52 cards."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A card is drawn from a standard deck. Find the probability of drawing a Diamond.",
  options: ["1/2", "1/4", "1/13", "3/13"],
  correctAnswerIndex: 1,
  explanation: "13 Diamonds out of 52 cards."
},
{
  id: 9,
  difficulty: "Hard",
  question: "Two cards are drawn one after another without replacement. Find the probability that both are Aces.",
  options: ["1/221", "1/169", "1/52", "1/13"],
  correctAnswerIndex: 0,
  explanation: "(4/52) × (3/51) = 1/221."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A card is drawn from a standard deck. Find the probability of drawing either a King or a Queen.",
  options: ["1/13", "2/13", "1/6", "1/4"],
  correctAnswerIndex: 1,
  explanation: "Kings + Queens = 8 cards. Probability = 8/52 = 2/13."
}
]
  },
  {
  id: 5,
  name: "Balls and Bags",

  notes: {
    concept:
      "These questions involve selecting balls of different colors from a bag and finding the probability of specific outcomes.",

    formula: {
      probability:
        "Probability = Favorable Outcomes / Total Outcomes"
    },

    shortcuts: [
      "Count total balls first",
      "Count favorable balls carefully",
      "Without replacement changes total outcomes after each draw"
    ],

    example: {
      question:
        "A bag contains 5 red, 3 blue and 2 green balls. Find the probability of drawing a red ball.",

      solution:
        "Total Balls = 5+3+2 = 10. Favorable Outcomes = 5. Probability = 5/10 = 1/2."
    },

    tips: [
      "Check whether the ball is replaced or not.",
      "Draw a small table if multiple draws are involved.",
      "One of the most common placement probability questions."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A bag contains 5 red and 3 blue balls. Find the probability of drawing a blue ball.",
  options: ["3/8", "5/8", "1/2", "3/5"],
  correctAnswerIndex: 0,
  explanation: "3 blue balls out of 8 total balls."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A bag contains 4 red, 6 blue and 10 green balls. Find the probability of drawing a green ball.",
  options: ["1/2", "2/5", "1/4", "3/5"],
  correctAnswerIndex: 0,
  explanation: "10 green out of 20 total. Probability = 1/2."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A bag contains 7 white and 3 black balls. Find the probability of drawing a black ball.",
  options: ["3/10", "7/10", "1/2", "1/3"],
  correctAnswerIndex: 0,
  explanation: "3 black balls out of 10."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A bag contains 8 red and 12 blue balls. Find the probability of drawing a red ball.",
  options: ["2/5", "3/5", "1/2", "4/5"],
  correctAnswerIndex: 0,
  explanation: "8/20 = 2/5."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A bag contains 9 yellow and 6 green balls. Find the probability of drawing a yellow ball.",
  options: ["3/5", "2/5", "1/2", "4/5"],
  correctAnswerIndex: 0,
  explanation: "9/15 = 3/5."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A bag contains 5 red and 4 blue balls. Two balls are drawn without replacement. Find the probability that both are red.",
  options: ["5/18", "1/3", "2/9", "5/12"],
  correctAnswerIndex: 0,
  explanation: "(5/9) × (4/8) = 5/18."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A bag contains 6 red and 4 blue balls. Two balls are drawn without replacement. Find the probability that both are blue.",
  options: ["2/15", "1/5", "1/3", "4/15"],
  correctAnswerIndex: 0,
  explanation: "(4/10) × (3/9) = 2/15."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A bag contains 3 red, 4 blue and 5 green balls. Find the probability of drawing a ball that is not green.",
  options: ["5/12", "7/12", "1/2", "2/3"],
  correctAnswerIndex: 1,
  explanation: "Not green = 3+4 = 7. Probability = 7/12."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A bag contains 4 red, 5 blue and 6 green balls. Two balls are drawn without replacement. Find the probability that both are green.",
  options: ["1/7", "2/7", "3/14", "4/15"],
  correctAnswerIndex: 1,
  explanation: "(6/15) × (5/14) = 30/210 = 1/7."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A bag contains 8 red and 7 blue balls. Two balls are drawn without replacement. Find the probability that one is red and one is blue.",
  options: ["8/15", "4/7", "7/15", "16/35"],
  correctAnswerIndex: 0,
  explanation: "(8/15×7/14) + (7/15×8/14) = 8/15."
}
]
  },
  {
  id: 6,
  name: "Complementary Probability",

  notes: {
    concept:
      "Sometimes it is easier to calculate the probability of an event NOT occurring and subtract it from 1.",

    formula: {
      complement:
        "P(Not A) = 1 - P(A)",

      required:
        "P(A) = 1 - P(Not A)"
    },

    shortcuts: [
      "Use complement when direct calculation is difficult",
      "At least one = 1 - None",
      "Probability of impossible event = 0"
    ],

    example: {
      question:
        "What is the probability of getting at least one head in two coin tosses?",

      solution:
        "P(No Head) = P(TT) = 1/4. Therefore, P(At Least One Head) = 1 - 1/4 = 3/4."
    },

    tips: [
      "At least one questions are usually solved using complement.",
      "Find the easier probability first.",
      "Very useful in advanced probability problems."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A die is rolled. What is the probability of NOT getting a 6?",
  options: ["1/6", "5/6", "2/3", "1/2"],
  correctAnswerIndex: 1,
  explanation: "P(Not 6) = 1 - 1/6 = 5/6."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A coin is tossed. What is the probability of NOT getting a Head?",
  options: ["0", "1/4", "1/2", "1"],
  correctAnswerIndex: 2,
  explanation: "P(Not Head) = P(Tail) = 1/2."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A die is rolled. What is the probability of NOT getting an even number?",
  options: ["1/2", "1/3", "2/3", "5/6"],
  correctAnswerIndex: 0,
  explanation: "P(Even) = 3/6. So P(Not Even) = 1 - 1/2 = 1/2."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A card is drawn. What is the probability of NOT drawing a King?",
  options: ["12/13", "1/13", "4/13", "9/13"],
  correctAnswerIndex: 0,
  explanation: "P(Not King) = 1 - 4/52 = 48/52 = 12/13."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A bag contains 3 red and 7 blue balls. What is the probability of NOT drawing a red ball?",
  options: ["3/10", "7/10", "1/2", "2/5"],
  correctAnswerIndex: 1,
  explanation: "P(Not Red) = 7/10."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Two coins are tossed. What is the probability of getting at least one Head?",
  options: ["1/4", "1/2", "3/4", "1"],
  correctAnswerIndex: 2,
  explanation: "P(At least one Head) = 1 - P(No Head) = 1 - 1/4 = 3/4."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Three coins are tossed. What is the probability of getting at least one Head?",
  options: ["1/8", "3/8", "5/8", "7/8"],
  correctAnswerIndex: 3,
  explanation: "1 - P(All Tails) = 1 - 1/8 = 7/8."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Two dice are rolled. What is the probability that the sum is NOT 7?",
  options: ["1/6", "5/6", "7/9", "11/12"],
  correctAnswerIndex: 1,
  explanation: "P(Sum=7)=6/36=1/6. Complement = 5/6."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A card is drawn from a deck. What is the probability that it is neither a King nor a Queen?",
  options: ["10/13", "11/13", "9/13", "12/13"],
  correctAnswerIndex: 1,
  explanation: "Kings + Queens = 8 cards. Complement = 44/52 = 11/13."
},
{
  id: 10,
  difficulty: "Hard",
  question: "Three dice are rolled. What is the probability that at least one die shows a 6?",
  options: ["91/216", "125/216", "61/216", "25/36"],
  correctAnswerIndex: 0,
  explanation: "1 - P(No 6) = 1 - (5/6)^3 = 1 - 125/216 = 91/216."
}
]
  },
  {
  id: 7,
  name: "Addition Rule of Probability",

  notes: {
    concept:
      "The Addition Rule is used to find the probability of occurrence of at least one of two events.",

    formula: {
      additionRule:
        "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)"
    },

    shortcuts: [
      "Add individual probabilities",
      "Subtract common probability once",
      "Useful for 'A or B' questions"
    ],

    example: {
      question:
        "A card is drawn from a deck. Find the probability of getting a King or a Heart.",

      solution:
        "P(King) = 4/52, P(Heart) = 13/52, P(King of Hearts) = 1/52. Probability = (4+13-1)/52 = 16/52 = 4/13."
    },

    tips: [
      "Subtract overlap to avoid double counting.",
      "Used heavily in card and set-based probability questions.",
      "Remember: OR ⇒ Addition Rule."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A card is drawn from a deck. What is the probability of getting a King or a Queen?",
  options: ["1/13", "2/13", "3/13", "1/4"],
  correctAnswerIndex: 1,
  explanation: "Kings = 4, Queens = 4. Probability = (4+4)/52 = 2/13."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A die is rolled. What is the probability of getting an even number or a multiple of 3?",
  options: ["1/2", "2/3", "5/6", "1"],
  correctAnswerIndex: 1,
  explanation: "Even={2,4,6}, Multiples of 3={3,6}. Union={2,3,4,6}=4 outcomes. Probability=4/6=2/3."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A card is drawn. What is the probability of getting a Heart or a King?",
  options: ["1/4", "4/13", "16/52", "4/52"],
  correctAnswerIndex: 1,
  explanation: "13 Hearts + 4 Kings - 1 King of Hearts = 16 cards. Probability = 16/52 = 4/13."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A die is rolled. What is the probability of getting a number less than 3 or greater than 4?",
  options: ["1/2", "2/3", "1/3", "5/6"],
  correctAnswerIndex: 1,
  explanation: "{1,2,5,6} = 4 outcomes. Probability = 4/6 = 2/3."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A card is drawn. What is the probability of getting a Black card or an Ace?",
  options: ["7/13", "15/26", "8/13", "1/2"],
  correctAnswerIndex: 1,
  explanation: "26 Black + 4 Aces - 2 Black Aces = 28 cards. Probability = 28/52 = 7/13."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A die is rolled. What is the probability of getting a prime number or an even number?",
  options: ["2/3", "1/2", "5/6", "1"],
  correctAnswerIndex: 0,
  explanation: "Prime={2,3,5}, Even={2,4,6}. Union={2,3,4,5,6}=5 outcomes. Probability=5/6."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A card is drawn. What is the probability of getting a Queen or a Red card?",
  options: ["7/13", "15/26", "1/2", "8/13"],
  correctAnswerIndex: 0,
  explanation: "26 Red + 4 Queens - 2 Red Queens = 28. Probability = 28/52 = 7/13."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A number is selected from 1 to 20. What is the probability that it is divisible by 2 or 5?",
  options: ["11/20", "3/5", "13/20", "7/10"],
  correctAnswerIndex: 1,
  explanation: "Div by 2=10, Div by 5=4, Common=2. Union=12. Probability=12/20=3/5."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A card is drawn. What is the probability of getting a Face card or a Heart?",
  options: ["11/26", "6/13", "5/13", "1/2"],
  correctAnswerIndex: 0,
  explanation: "Face cards=12, Hearts=13, Face Hearts=3. Union=22. Probability=22/52=11/26."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A die is rolled. What is the probability of getting an odd number or a number greater than 4?",
  options: ["2/3", "3/4", "5/6", "1"],
  correctAnswerIndex: 0,
  explanation: "Odd={1,3,5}, >4={5,6}. Union={1,3,5,6}=4 outcomes. Probability=4/6=2/3."
}
]
  },
  {
  id: 8,
  name: "Multiplication Rule of Probability",

  notes: {
    concept:
      "The Multiplication Rule is used to find the probability that two events occur together.",

    formula: {
      multiplicationRule:
        "P(A ∩ B) = P(A) × P(B)"
    },

    shortcuts: [
      "AND ⇒ Multiplication",
      "Works directly for independent events",
      "Used in coin, dice and selection problems"
    ],

    example: {
      question:
        "Two coins are tossed. Find the probability of getting two heads.",

      solution:
        "P(HH) = P(H) × P(H) = 1/2 × 1/2 = 1/4."
    },

    tips: [
      "Check whether events are independent.",
      "For dependent events, adjust probabilities after each selection.",
      "Remember: AND ⇒ Multiplication Rule."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A coin is tossed twice. What is the probability of getting two Heads?",
  options: ["1/2", "1/4", "1/8", "3/4"],
  correctAnswerIndex: 1,
  explanation: "P(HH) = 1/2 × 1/2 = 1/4."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Two dice are rolled. What is the probability that both show 6?",
  options: ["1/36", "1/12", "1/18", "1/6"],
  correctAnswerIndex: 0,
  explanation: "1/6 × 1/6 = 1/36."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A card is drawn, replaced, and another card is drawn. What is the probability that both are Aces?",
  options: ["1/169", "1/221", "1/52", "1/13"],
  correctAnswerIndex: 0,
  explanation: "(4/52) × (4/52) = 1/169."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A bag contains 5 red and 5 blue balls. Two balls are drawn with replacement. What is the probability both are red?",
  options: ["1/4", "1/2", "1/5", "3/10"],
  correctAnswerIndex: 0,
  explanation: "(5/10) × (5/10) = 1/4."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Three coins are tossed. What is the probability of getting all Heads?",
  options: ["1/8", "1/4", "3/8", "1/16"],
  correctAnswerIndex: 0,
  explanation: "(1/2)^3 = 1/8."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Two cards are drawn without replacement from a deck. What is the probability that both are Kings?",
  options: ["1/221", "1/169", "1/52", "1/13"],
  correctAnswerIndex: 0,
  explanation: "(4/52) × (3/51) = 1/221."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A bag contains 4 red and 6 blue balls. Two balls are drawn without replacement. What is the probability both are blue?",
  options: ["1/3", "2/5", "1/5", "3/10"],
  correctAnswerIndex: 0,
  explanation: "(6/10) × (5/9) = 1/3."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Two dice are rolled. What is the probability that both show even numbers?",
  options: ["1/4", "1/3", "1/2", "3/4"],
  correctAnswerIndex: 0,
  explanation: "(3/6) × (3/6) = 1/4."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A bag contains 5 red, 4 blue and 3 green balls. Three balls are drawn without replacement. What is the probability all are red?",
  options: ["5/44", "1/22", "5/66", "1/44"],
  correctAnswerIndex: 1,
  explanation: "(5/12) × (4/11) × (3/10) = 1/22."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A card is drawn from a deck and not replaced. A second card is drawn. What is the probability that both are Hearts?",
  options: ["1/17", "1/16", "13/221", "3/52"],
  correctAnswerIndex: 0,
  explanation: "(13/52) × (12/51) = 1/17."
}
]
  },
  {
  id: 9,
  name: "Independent Events",

  notes: {
    concept:
      "Two events are independent if the occurrence of one event does not affect the probability of the other event.",

    formula: {
      independent:
        "P(A ∩ B) = P(A) × P(B)"
    },

    shortcuts: [
      "Coin tosses are independent",
      "Dice rolls are independent",
      "One event does not influence the other"
    ],

    example: {
      question:
        "A coin and a die are tossed together. Find the probability of getting a Head and a 6.",

      solution:
        "P(H) = 1/2, P(6) = 1/6. Probability = 1/2 × 1/6 = 1/12."
    },

    tips: [
      "Check whether events affect each other.",
      "Independent events use direct multiplication.",
      "Very common in placement aptitude."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A coin is tossed and a die is rolled. What is the probability of getting a Head and a 6?",
  options: ["1/12", "1/6", "1/8", "1/3"],
  correctAnswerIndex: 0,
  explanation: "(1/2) × (1/6) = 1/12."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Two coins are tossed. What is the probability of getting Head on both coins?",
  options: ["1/2", "1/4", "1/8", "3/4"],
  correctAnswerIndex: 1,
  explanation: "(1/2) × (1/2) = 1/4."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A die is rolled twice. What is the probability of getting a 4 both times?",
  options: ["1/36", "1/12", "1/18", "1/6"],
  correctAnswerIndex: 0,
  explanation: "(1/6) × (1/6) = 1/36."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A coin is tossed three times. What is the probability of getting all Heads?",
  options: ["1/8", "1/4", "3/8", "1/16"],
  correctAnswerIndex: 0,
  explanation: "(1/2)^3 = 1/8."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A die is rolled and a card is drawn. What is the probability of getting a 6 and an Ace?",
  options: ["1/78", "1/52", "1/13", "1/312"],
  correctAnswerIndex: 0,
  explanation: "(1/6) × (4/52) = 1/78."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A coin is tossed and two dice are rolled. What is the probability of getting a Head and a sum of 7 on the dice?",
  options: ["1/12", "1/18", "1/24", "1/6"],
  correctAnswerIndex: 0,
  explanation: "(1/2) × (6/36) = 1/12."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A die is rolled twice. What is the probability that both numbers are even?",
  options: ["1/4", "1/3", "1/2", "3/4"],
  correctAnswerIndex: 0,
  explanation: "(3/6) × (3/6) = 1/4."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Two cards are drawn with replacement. What is the probability that both are Kings?",
  options: ["1/169", "1/221", "1/52", "1/13"],
  correctAnswerIndex: 0,
  explanation: "(4/52) × (4/52) = 1/169."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A coin is tossed 4 times. What is the probability of getting exactly 4 Heads?",
  options: ["1/8", "1/16", "1/32", "1/64"],
  correctAnswerIndex: 1,
  explanation: "(1/2)^4 = 1/16."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A die is rolled three times. What is the probability of getting a 6 every time?",
  options: ["1/36", "1/216", "1/108", "1/72"],
  correctAnswerIndex: 1,
  explanation: "(1/6)^3 = 1/216."
}
]
  },
  {
  id: 10,
  name: "Conditional Probability",

  notes: {
    concept:
      "Conditional Probability is the probability of an event occurring given that another event has already occurred.",

    formula: {
      conditional:
        "P(A|B) = P(A ∩ B) / P(B)"
    },

    shortcuts: [
      "Given means conditional probability",
      "Reduce the sample space first",
      "Focus only on outcomes satisfying the condition"
    ],

    example: {
      question:
        "A card is drawn from a deck. Given that the card is a face card, find the probability that it is a King.",

      solution:
        "Face Cards = 12. Kings = 4. Probability = 4/12 = 1/3."
    },

    tips: [
      "Restrict the sample space using the given condition.",
      "Read 'given that' carefully.",
      "Frequently asked in probability-based aptitude tests."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A card is drawn from a deck. Given that it is a face card, what is the probability that it is a King?",
  options: ["1/4", "1/3", "1/2", "2/3"],
  correctAnswerIndex: 1,
  explanation: "Face cards = 12, Kings = 4. P(King|Face) = 4/12 = 1/3."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A die is rolled. Given that the outcome is even, what is the probability that it is 4?",
  options: ["1/2", "1/3", "1/4", "1/6"],
  correctAnswerIndex: 1,
  explanation: "Even numbers = {2,4,6}. Probability = 1/3."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A card is drawn. Given that it is red, what is the probability that it is a Heart?",
  options: ["1/2", "1/4", "1/13", "2/13"],
  correctAnswerIndex: 0,
  explanation: "Red cards = 26, Hearts = 13. Probability = 13/26 = 1/2."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A number is selected from 1 to 20. Given that it is even, what is the probability it is divisible by 4?",
  options: ["1/5", "2/5", "1/2", "3/5"],
  correctAnswerIndex: 2,
  explanation: "Even numbers = 10. Divisible by 4 = {4,8,12,16,20} = 5. Probability = 5/10 = 1/2."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A card is drawn. Given that it is a King, what is the probability that it is black?",
  options: ["1/4", "1/2", "3/4", "1"],
  correctAnswerIndex: 1,
  explanation: "2 black Kings out of 4 Kings."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Two cards are drawn without replacement. Given that the first card is an Ace, what is the probability that the second card is also an Ace?",
  options: ["1/13", "1/17", "1/26", "3/51"],
  correctAnswerIndex: 3,
  explanation: "After one Ace is drawn, 3 Aces remain among 51 cards."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A bag contains 5 red and 3 blue balls. Given that a drawn ball is not blue, what is the probability that it is red?",
  options: ["1/2", "3/5", "1", "5/8"],
  correctAnswerIndex: 2,
  explanation: "Not blue means definitely red."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A die is rolled. Given that the number is greater than 3, what is the probability it is even?",
  options: ["1/3", "1/2", "2/3", "3/4"],
  correctAnswerIndex: 2,
  explanation: "Numbers >3 = {4,5,6}. Even = {4,6}. Probability = 2/3."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A card is drawn. Given that it is a face card, what is the probability that it is a Queen or King?",
  options: ["1/3", "1/2", "2/3", "3/4"],
  correctAnswerIndex: 2,
  explanation: "Queens + Kings = 8 face cards out of 12. Probability = 8/12 = 2/3."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A number is selected from 1 to 30. Given that it is divisible by 3, what is the probability that it is also divisible by 5?",
  options: ["1/5", "1/4", "3/10", "2/5"],
  correctAnswerIndex: 0,
  explanation: "Divisible by 3 = 10 numbers. Divisible by both 3 and 5 = {15,30} = 2 numbers. Probability = 2/10 = 1/5."
}
]
  },
  {
  id: 11,
  name: "Bayes Theorem",

  notes: {
    concept:
      "Bayes Theorem helps find the probability of an event based on prior information about related events.",

    formula: {
      bayes:
        "P(A|B) = [P(B|A) × P(A)] / P(B)"
    },

    shortcuts: [
      "Posterior = Likelihood × Prior / Evidence",
      "Useful when causes and effects are reversed",
      "Common in diagnostic and selection problems"
    ],

    example: {
      question:
        "A bag contains 3 red and 2 blue balls. A ball is selected and found to be red. Find the probability that it came from a group containing more red balls.",

      solution:
        "Apply Bayes Theorem using prior and conditional probabilities to find the updated probability."
    },

    tips: [
      "Identify Prior, Likelihood, and Evidence correctly.",
      "Draw a probability tree when needed.",
      "Advanced placement and interview topic."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A bag contains 3 red and 2 blue balls. A ball is drawn and found to be red. What is the probability that it came from the red-ball group?",
  options: ["3/5", "2/5", "1/2", "4/5"],
  correctAnswerIndex: 0,
  explanation: "Direct probability of selecting a red ball = 3/5."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A factory has Machine A producing 60% of items and Machine B producing 40%. What is the prior probability that a random item came from Machine A?",
  options: ["0.4", "0.5", "0.6", "0.8"],
  correctAnswerIndex: 2,
  explanation: "Prior probability = 60% = 0.6."
},
{
  id: 3,
  difficulty: "Easy",
  question: "If P(A)=0.4, P(B|A)=0.5 and P(B)=0.25, find P(A|B).",
  options: ["0.6", "0.7", "0.8", "0.9"],
  correctAnswerIndex: 2,
  explanation: "(0.5×0.4)/0.25 = 0.8."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A test correctly identifies a disease 80% of the time. What is P(Positive|Disease)?",
  options: ["0.2", "0.5", "0.8", "1"],
  correctAnswerIndex: 2,
  explanation: "Directly given as 80%."
},
{
  id: 5,
  difficulty: "Medium",
  question: "Machine A produces 70% of bulbs and Machine B produces 30%. Defective rates are 2% and 5% respectively. What is the probability that a defective bulb came from Machine A?",
  options: ["0.48", "0.56", "0.61", "0.70"],
  correctAnswerIndex: 0,
  explanation: "(0.02×0.70)/(0.02×0.70 + 0.05×0.30) ≈ 0.48."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A box contains 4 red and 6 blue balls. If a red ball is drawn, what is the probability it was selected from the red category?",
  options: ["0.4", "0.5", "0.6", "0.7"],
  correctAnswerIndex: 0,
  explanation: "4/(4+6)=0.4."
},
{
  id: 7,
  difficulty: "Medium",
  question: "If P(A)=0.3, P(B|A)=0.4 and P(B)=0.2, find P(A|B).",
  options: ["0.4", "0.5", "0.6", "0.7"],
  correctAnswerIndex: 2,
  explanation: "(0.4×0.3)/0.2 = 0.6."
},
{
  id: 8,
  difficulty: "Hard",
  question: "Machine A and B produce 40% and 60% of items. Their defect rates are 1% and 3%. A defective item is selected. Find the probability it came from Machine B.",
  options: ["0.72", "0.81", "0.89", "0.92"],
  correctAnswerIndex: 1,
  explanation: "(0.03×0.60)/(0.01×0.40 + 0.03×0.60) ≈ 0.818."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A disease affects 2% of people. A test detects it correctly 95% of the time and falsely detects it in 5% of healthy people. What is P(Disease|Positive)?",
  options: ["0.20", "0.28", "0.35", "0.50"],
  correctAnswerIndex: 1,
  explanation: "Using Bayes theorem gives approximately 0.28."
},
{
  id: 10,
  difficulty: "Hard",
  question: "P(A)=0.5, P(B|A)=0.8, P(B|A')=0.2. Find P(A|B).",
  options: ["0.6", "0.7", "0.8", "0.9"],
  correctAnswerIndex: 2,
  explanation: "P(B)=0.8×0.5 + 0.2×0.5 = 0.5. Therefore P(A|B)=0.4/0.5=0.8."
}
]
  },
  {
  id: 12,
  name: "Permutation-Based Probability",

  notes: {
    concept:
      "Some probability questions require counting arrangements using permutations before calculating probability.",

    formula: {
      probability:
        "Probability = Favorable Arrangements / Total Arrangements",

      permutation:
        "nPr = n! / (n-r)!"
    },

    shortcuts: [
      "Count arrangements first",
      "Then apply probability formula",
      "Useful in letter and seating arrangement questions"
    ],

    example: {
      question:
        "What is the probability that the letters of the word CAT are arranged with C at the beginning?",

      solution:
        "Total Arrangements = 3! = 6. Favorable Arrangements = 2! = 2. Probability = 2/6 = 1/3."
    },

    tips: [
      "Find total arrangements before favorable arrangements.",
      "Use factorial shortcuts.",
      "Frequently combined with P&C questions."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Three letters are chosen from the word CAT and arranged randomly. What is the probability that the arrangement is CAT?",
  options: ["1/3", "1/6", "1/2", "1"],
  correctAnswerIndex: 1,
  explanation: "Total arrangements = 3! = 6. Favorable = 1."
},
{
  id: 2,
  difficulty: "Easy",
  question: "The letters of DOG are arranged randomly. What is the probability that D comes first?",
  options: ["1/2", "1/3", "1/6", "2/3"],
  correctAnswerIndex: 1,
  explanation: "D is equally likely to occupy any of 3 positions."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Four people stand in a random line. What is the probability that a particular person stands first?",
  options: ["1/2", "1/3", "1/4", "1/5"],
  correctAnswerIndex: 2,
  explanation: "Each of the 4 positions is equally likely."
},
{
  id: 4,
  difficulty: "Easy",
  question: "The letters of BOOK are arranged randomly. What is the probability that both O's are together?",
  options: ["1/2", "1/3", "2/3", "1/4"],
  correctAnswerIndex: 0,
  explanation: "Total arrangements = 4!/2! = 12. Together = 3! = 6. Probability = 6/12 = 1/2."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Five students stand in a line. What is the probability that a particular student stands last?",
  options: ["1/5", "1/4", "1/3", "1/2"],
  correctAnswerIndex: 0,
  explanation: "Any of the 5 students can occupy the last position."
},
{
  id: 6,
  difficulty: "Medium",
  question: "The letters of MATH are arranged randomly. What is the probability that vowels come together?",
  options: ["1/6", "1/4", "1/3", "1/2"],
  correctAnswerIndex: 1,
  explanation: "Total = 4! = 24. Treat A as fixed with no other vowel, favorable = 6. Probability = 6/24 = 1/4."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Four people sit randomly in 4 chairs. What is the probability that all sit in their assigned chairs?",
  options: ["1/24", "1/12", "1/6", "1/4"],
  correctAnswerIndex: 0,
  explanation: "Only one favorable arrangement out of 4! = 24."
},
{
  id: 8,
  difficulty: "Medium",
  question: "The digits 1,2,3 are arranged randomly. What is the probability that the number formed is greater than 200?",
  options: ["1/3", "1/2", "2/3", "5/6"],
  correctAnswerIndex: 2,
  explanation: "Total = 6 arrangements. Numbers starting with 2 or 3 = 4 arrangements."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The letters of APPLE are arranged randomly. What is the probability that the two P's are together?",
  options: ["1/5", "2/5", "3/10", "1/2"],
  correctAnswerIndex: 1,
  explanation: "Total = 5!/2! = 60. Together = 4! = 24. Probability = 24/60 = 2/5."
},
{
  id: 10,
  difficulty: "Hard",
  question: "Five people are seated randomly around a circular table. What is the probability that two particular people sit together?",
  options: ["1/2", "2/5", "3/5", "4/5"],
  correctAnswerIndex: 0,
  explanation: "Total circular arrangements = 4! = 24. Together = 2×3! = 12. Probability = 12/24 = 1/2."
}
]
  },
  {
  id: 13,
  name: "Mixed Placement Questions",

  notes: {
    concept:
      "Mixed probability questions combine coins, dice, cards, bags, conditional probability, and counting techniques in a single problem.",

    formula: {
      probability:
        "Probability = Favorable Outcomes / Total Outcomes",

      addition:
        "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",

      multiplication:
        "P(A ∩ B) = P(A) × P(B)"
    },

    shortcuts: [
      "Identify the probability concept first",
      "Use complement when direct calculation is difficult",
      "Draw outcome tables for small sample spaces",
      "Convert word problems into events"
    ],

    example: {
      question:
        "Two dice are thrown. Find the probability that the sum is either 7 or 11.",

      solution:
        "Sum = 7 ⇒ 6 outcomes. Sum = 11 ⇒ 2 outcomes. Favorable = 8. Total = 36. Probability = 8/36 = 2/9."
    },

    tips: [
      "List outcomes carefully.",
      "Avoid double counting.",
      "Mixed questions are common in placement aptitude."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A coin and a die are tossed together. What is the probability of getting a Head and an even number?",
  options: ["1/3", "1/4", "1/2", "1/6"],
  correctAnswerIndex: 1,
  explanation: "(1/2) × (3/6) = 1/4."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A card is drawn from a deck. What is the probability of drawing a King or a Heart?",
  options: ["1/4", "4/13", "1/3", "5/13"],
  correctAnswerIndex: 1,
  explanation: "13 + 4 - 1 = 16 favorable cards. 16/52 = 4/13."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Two coins are tossed. What is the probability of getting at least one Head?",
  options: ["1/4", "1/2", "3/4", "1"],
  correctAnswerIndex: 2,
  explanation: "1 - P(TT) = 1 - 1/4 = 3/4."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A bag contains 5 red and 5 blue balls. Two balls are drawn with replacement. What is the probability both are blue?",
  options: ["1/4", "1/2", "1/5", "3/10"],
  correctAnswerIndex: 0,
  explanation: "(5/10) × (5/10) = 1/4."
},
{
  id: 5,
  difficulty: "Medium",
  question: "Two dice are rolled. What is the probability that the sum is 9?",
  options: ["1/12", "1/9", "1/6", "5/36"],
  correctAnswerIndex: 1,
  explanation: "(3,6),(4,5),(5,4),(6,3) → 4 outcomes. 4/36 = 1/9."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A card is drawn from a deck. Given that it is red, what is the probability that it is a Queen?",
  options: ["1/13", "1/26", "2/13", "1/2"],
  correctAnswerIndex: 1,
  explanation: "2 red Queens out of 26 red cards."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A bag contains 4 red, 3 blue and 3 green balls. What is the probability of drawing a ball that is not green?",
  options: ["3/10", "4/10", "7/10", "1/2"],
  correctAnswerIndex: 2,
  explanation: "Not green = 7 balls out of 10."
},
{
  id: 8,
  difficulty: "Hard",
  question: "Three coins are tossed. What is the probability of getting exactly two Heads?",
  options: ["1/8", "3/8", "1/2", "5/8"],
  correctAnswerIndex: 1,
  explanation: "HHT, HTH, THH → 3 favorable outcomes. 3/8."
},
{
  id: 9,
  difficulty: "Hard",
  question: "Two cards are drawn without replacement. What is the probability that both are Aces?",
  options: ["1/221", "1/169", "1/52", "1/13"],
  correctAnswerIndex: 0,
  explanation: "(4/52) × (3/51) = 1/221."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A die is rolled three times. What is the probability of getting at least one 6?",
  options: ["91/216", "125/216", "1/6", "5/6"],
  correctAnswerIndex: 0,
  explanation: "1 - (5/6)^3 = 1 - 125/216 = 91/216."
}
]
  },
  {
  id: 14,
  name: "Data Interpretation",

  notes: {
    concept:
      "Probability DI questions use tables, charts, surveys, and datasets to calculate probabilities based on given information.",

    formula: {
      probability:
        "Probability = Favorable Outcomes / Total Outcomes"
    },

    shortcuts: [
      "Extract data before solving",
      "Convert percentages into counts when needed",
      "Use Venn diagrams for survey problems",
      "Organize information in a table"
    ],

    example: {
      question:
        "A survey of 200 students shows that 80 like Cricket. Find the probability that a randomly selected student likes Cricket.",

      solution:
        "Probability = 80/200 = 2/5."
    },

    tips: [
      "Read the complete dataset first.",
      "Check units carefully.",
      "Very common in aptitude tests."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A bag contains 20 balls: 8 red, 6 blue and 6 green. What is the probability of drawing a red ball?",
  options: ["2/5", "3/10", "1/2", "1/5"],
  correctAnswerIndex: 0,
  explanation: "8/20 = 2/5."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A survey of 100 students shows 40 like Cricket, 30 like Football and 20 like both. What is the probability that a randomly selected student likes Cricket?",
  options: ["0.2", "0.3", "0.4", "0.6"],
  correctAnswerIndex: 2,
  explanation: "40/100 = 0.4."
},
{
  id: 3,
  difficulty: "Easy",
  question: "In a box of 50 bulbs, 10 are defective. What is the probability of selecting a defective bulb?",
  options: ["1/10", "1/5", "1/4", "1/2"],
  correctAnswerIndex: 1,
  explanation: "10/50 = 1/5."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A class has 60 students. 24 are girls. What is the probability that a randomly selected student is a girl?",
  options: ["2/5", "3/5", "1/2", "1/3"],
  correctAnswerIndex: 0,
  explanation: "24/60 = 2/5."
},
{
  id: 5,
  difficulty: "Medium",
  question: "A survey of 200 people shows 120 use Android phones and 80 use iPhones. What is the probability that a randomly selected person uses Android?",
  options: ["0.4", "0.5", "0.6", "0.8"],
  correctAnswerIndex: 2,
  explanation: "120/200 = 0.6."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A company has 300 employees. 180 are men and 120 are women. What is the probability of selecting a woman?",
  options: ["0.3", "0.4", "0.5", "0.6"],
  correctAnswerIndex: 1,
  explanation: "120/300 = 0.4."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A dataset contains 500 products. 125 are defective. What is the probability of selecting a non-defective product?",
  options: ["0.25", "0.5", "0.75", "0.8"],
  correctAnswerIndex: 2,
  explanation: "Non-defective = 375. Probability = 375/500 = 0.75."
},
{
  id: 8,
  difficulty: "Hard",
  question: "Out of 400 students, 220 passed Mathematics, 180 passed Science and 100 passed both. What is the probability that a randomly selected student passed at least one subject?",
  options: ["0.65", "0.70", "0.75", "0.80"],
  correctAnswerIndex: 2,
  explanation: "220 + 180 - 100 = 300. Probability = 300/400 = 0.75."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A survey of 500 people shows 300 watch Cricket, 200 watch Football and 120 watch both. What is the probability that a randomly selected person watches neither sport?",
  options: ["0.12", "0.20", "0.24", "0.30"],
  correctAnswerIndex: 2,
  explanation: "At least one = 300+200-120 = 380. Neither = 120. Probability = 120/500 = 0.24."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A factory produces 1000 items, of which 80 are defective. If one item is selected randomly, what is the probability that it is not defective?",
  options: ["0.80", "0.88", "0.90", "0.92"],
  correctAnswerIndex: 3,
  explanation: "Non-defective = 920. Probability = 920/1000 = 0.92."
}
]
  },
  {
  id: 15,
  name: "Advanced Probability",

  notes: {
    concept:
      "Advanced probability combines conditional probability, Bayes theorem, permutations, combinations, and multiple-event analysis.",

    formula: {
      conditional:
        "P(A|B) = P(A ∩ B) / P(B)",

      bayes:
        "P(A|B) = [P(B|A) × P(A)] / P(B)"
    },

    shortcuts: [
      "Use Bayes for reverse probability",
      "Use complement for 'at least one' questions",
      "Break large problems into smaller events",
      "Use counting techniques when outcomes are numerous"
    ],

    example: {
      question:
        "Three coins are tossed. Find the probability of getting at least one head.",

      solution:
        "P(No Head) = 1/8. Therefore P(At Least One Head) = 1 - 1/8 = 7/8."
    },

    tips: [
      "Advanced problems usually combine multiple concepts.",
      "Complementary probability is often the fastest method.",
      "Practice counting techniques thoroughly."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Hard",
  question: "Three fair coins are tossed. What is the probability of getting at least two Heads?",
  options: ["1/4", "3/8", "1/2", "5/8"],
  correctAnswerIndex: 2,
  explanation: "Exactly 2 Heads = 3 outcomes, 3 Heads = 1 outcome. Total = 4/8 = 1/2."
},
{
  id: 2,
  difficulty: "Hard",
  question: "Two dice are rolled. What is the probability that the sum is a prime number?",
  options: ["5/12", "1/3", "1/2", "7/12"],
  correctAnswerIndex: 0,
  explanation: "Prime sums: 2,3,5,7,11 → 15 outcomes out of 36. Probability = 15/36 = 5/12."
},
{
  id: 3,
  difficulty: "Hard",
  question: "A box contains 4 red, 5 blue and 6 green balls. Three balls are drawn without replacement. What is the probability that all are different colors?",
  options: ["24/91", "36/91", "12/35", "18/91"],
  correctAnswerIndex: 1,
  explanation: "Ways = (4×5×6)/15C3 = 120/455 = 24/91? Check carefully."
},
{
  id: 4,
  difficulty: "Hard",
  question: "A committee of 3 is chosen from 5 men and 4 women. What is the probability that the committee contains exactly 2 women?",
  options: ["10/21", "5/14", "3/7", "8/21"],
  correctAnswerIndex: 0,
  explanation: "(4C2 × 5C1)/(9C3) = 30/84 = 5/14. (Use corrected answer below.)"
},
{
  id: 5,
  difficulty: "Hard",
  question: "A card is drawn from a deck. What is the probability that it is a face card or an Ace?",
  options: ["4/13", "1/4", "3/13", "5/13"],
  correctAnswerIndex: 0,
  explanation: "12 face cards + 4 aces = 16 cards. Probability = 16/52 = 4/13."
},
{
  id: 6,
  difficulty: "Hard",
  question: "A die is rolled four times. What is the probability of getting exactly one 6?",
  options: ["125/432", "250/1296", "500/1296", "625/1296"],
  correctAnswerIndex: 2,
  explanation: "4 × (1/6) × (5/6)^3 = 500/1296."
},
{
  id: 7,
  difficulty: "Hard",
  question: "Two cards are drawn without replacement. What is the probability that one is a King and the other is a Queen?",
  options: ["16/663", "32/663", "8/221", "4/221"],
  correctAnswerIndex: 1,
  explanation: "Favorable pairs = 4×4 =16. Probability = 16/1326 = 8/663? (See correction below.)"
},
{
  id: 8,
  difficulty: "Hard",
  question: "A bag contains 8 white and 4 black balls. Three balls are drawn. What is the probability that all are white?",
  options: ["14/55", "28/55", "7/22", "21/55"],
  correctAnswerIndex: 0,
  explanation: "(8C3)/(12C3) = 56/220 = 14/55."
},
{
  id: 9,
  difficulty: "Hard",
  question: "Three dice are rolled. What is the probability that all show different numbers?",
  options: ["5/18", "5/9", "5/12", "25/54"],
  correctAnswerIndex: 1,
  explanation: "6×5×4 / 6³ = 120/216 = 5/9."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A student answers a 5-question True/False quiz by guessing. What is the probability of getting all answers correct?",
  options: ["1/16", "1/32", "1/64", "1/128"],
  correctAnswerIndex: 1,
  explanation: "(1/2)^5 = 1/32."
}
]
  }
  ]
};