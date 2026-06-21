export const probabilityQuestions = {
  patterns:[
    {
  id: 1,
  name: "Basic Probability",

  notes: {
    concept:
      "Probability measures the chance of an event occurring.",

    formula: {
      probability:
        "Probability = Favorable Outcomes / Total Outcomes"
    },

    shortcuts: [
      "Probability ranges from 0 to 1",
      "Impossible Event = 0",
      "Certain Event = 1"
    ],

    example: {
      question:
        "What is the probability of getting a Head when tossing a fair coin?",

      solution:
        "Favorable Outcomes = 1, Total Outcomes = 2. Probability = 1/2."
    },

    tips: [
      "Count total outcomes carefully.",
      "Probability can never be negative."
    ]
  },

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
  }
  ]
};