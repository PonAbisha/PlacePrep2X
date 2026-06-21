export const profitLossQuestions = {
  // Placeholder for 100 Profit & Loss questions (40 Easy, 40 Medium, 20 Hard)
  patterns:[
  {
  id: 1,
  name: "Basics of Profit and Loss",

  notes: {
    concept:
      "Profit and Loss occurs when the Selling Price differs from the Cost Price of an article.",

    formula: {
      profit:
        "Profit = Selling Price - Cost Price",

      loss:
        "Loss = Cost Price - Selling Price",

      cp:
        "Cost Price (CP) = Buying Price",

      sp:
        "Selling Price (SP) = Selling Price of Article"
    },

    shortcuts: [
      "SP > CP ⇒ Profit",
      "SP < CP ⇒ Loss",
      "SP = CP ⇒ No Profit No Loss"
    ],

    example: {
      question:
        "An article is bought for ₹500 and sold for ₹650. Find the profit.",

      solution:
        "Profit = 650 - 500 = ₹150."
    },

    tips: [
      "Always identify CP and SP first.",
      "Most Profit & Loss questions start from these basics.",
      "Check units carefully."
    ]
  },

  questions: [
    {
    id: 1,
    difficulty: "Easy",
    question: "An article is bought for ₹500 and sold for ₹650. Find the profit.",
    options: ["₹100", "₹120", "₹150", "₹180"],
    correctAnswerIndex: 2,
    explanation: "Profit = SP - CP = 650 - 500 = ₹150."
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "An article is bought for ₹800 and sold for ₹700. Find the loss.",
    options: ["₹50", "₹80", "₹100", "₹120"],
    correctAnswerIndex: 2,
    explanation: "Loss = CP - SP = 800 - 700 = ₹100."
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "A trader buys a book for ₹200 and sells it for ₹250. Find the profit.",
    options: ["₹40", "₹50", "₹60", "₹70"],
    correctAnswerIndex: 1,
    explanation: "Profit = 250 - 200 = ₹50."
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "A shirt is bought for ₹1000 and sold for ₹900. Find the loss.",
    options: ["₹50", "₹75", "₹100", "₹150"],
    correctAnswerIndex: 2,
    explanation: "Loss = 1000 - 900 = ₹100."
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "If CP = ₹600 and SP = ₹600, then the transaction results in:",
    options: ["Profit", "Loss", "No Profit No Loss", "Cannot Determine"],
    correctAnswerIndex: 2,
    explanation: "SP = CP, therefore No Profit No Loss."
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "An article is bought for ₹1200 and sold for ₹1380. Find the profit percentage.",
    options: ["10%", "12%", "15%", "18%"],
    correctAnswerIndex: 2,
    explanation: "Profit = 180. Profit% = (180/1200) × 100 = 15%."
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "A trader incurs a loss of ₹150 on an article purchased for ₹750. Find the loss percentage.",
    options: ["15%", "18%", "20%", "25%"],
    correctAnswerIndex: 2,
    explanation: "Loss% = (150/750) × 100 = 20%."
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "A product bought for ₹500 is sold at a profit of 20%. Find the selling price.",
    options: ["₹550", "₹575", "₹600", "₹625"],
    correctAnswerIndex: 2,
    explanation: "SP = 500 × 1.20 = ₹600."
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "A shopkeeper sells an article for ₹920 after giving an 8% loss. Find its cost price.",
    options: ["₹950", "₹1000", "₹1050", "₹1100"],
    correctAnswerIndex: 1,
    explanation: "CP = 920 × 100 / 92 = ₹1000."
  },
  {
    id: 10,
    difficulty: "Hard",
    question: "A trader gains 25% on an article sold for ₹1500. Find the cost price.",
    options: ["₹1000", "₹1100", "₹1200", "₹1250"],
    correctAnswerIndex: 2,
    explanation: "CP = 1500 × 100 / 125 = ₹1200."
  }
  ]
  },
  {
  id: 2,
  name: "Profit Percentage",

  notes: {
    concept:
      "Profit Percentage represents the profit earned as a percentage of the Cost Price.",

    formula: {
      profitPercentage:
        "Profit% = (Profit / Cost Price) × 100",

      profit:
        "Profit = Selling Price - Cost Price",

      sellingPrice:
        "Selling Price = Cost Price × (100 + Profit%) / 100"
    },

    shortcuts: [
      "20% Profit ⇒ SP = 1.20 × CP",
      "25% Profit ⇒ SP = 1.25 × CP",
      "50% Profit ⇒ SP = 1.50 × CP",
      "100% Profit ⇒ SP = 2 × CP"
    ],

    example: {
      question:
        "An article is bought for ₹800 and sold for ₹1000. Find the profit percentage.",

      solution:
        "Profit = 1000 - 800 = ₹200. Profit% = (200/800) × 100 = 25%."
    },

    tips: [
      "Profit percentage is always calculated on Cost Price.",
      "Do not calculate profit percentage on Selling Price.",
      "Memorize common profit multipliers."
    ]
  },

  questions: [
  {
    id: 1,
    difficulty: "Easy",
    question: "An article is bought for ₹400 and sold for ₹500. Find the profit percentage.",
    options: ["20%", "25%", "30%", "35%"],
    correctAnswerIndex: 1,
    explanation: "Profit = 500 - 400 = 100. Profit% = (100/400) × 100 = 25%."
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "A trader buys a pen for ₹80 and sells it for ₹100. Find the profit percentage.",
    options: ["20%", "25%", "30%", "35%"],
    correctAnswerIndex: 1,
    explanation: "Profit = 20. Profit% = (20/80) × 100 = 25%."
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "A book costing ₹200 is sold for ₹240. Find the profit percentage.",
    options: ["15%", "18%", "20%", "25%"],
    correctAnswerIndex: 2,
    explanation: "Profit = 40. Profit% = (40/200) × 100 = 20%."
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "An article purchased for ₹600 is sold for ₹720. Find the profit percentage.",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswerIndex: 1,
    explanation: "Profit = 120. Profit% = (120/600) × 100 = 20%."
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "A shopkeeper earns ₹90 profit on a product costing ₹450. Find the profit percentage.",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswerIndex: 1,
    explanation: "Profit% = (90/450) × 100 = 20%."
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "A trader sells an article for ₹960 making a profit of 20%. Find the cost price.",
    options: ["₹700", "₹750", "₹800", "₹850"],
    correctAnswerIndex: 2,
    explanation: "CP = 960 × 100 / 120 = ₹800."
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "An article is sold at ₹1500 after making a profit of 25%. Find the cost price.",
    options: ["₹1100", "₹1150", "₹1200", "₹1250"],
    correctAnswerIndex: 2,
    explanation: "CP = 1500 × 100 / 125 = ₹1200."
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "A product costing ₹800 is sold at a profit of 15%. Find the selling price.",
    options: ["₹900", "₹920", "₹940", "₹960"],
    correctAnswerIndex: 1,
    explanation: "SP = 800 × 115/100 = ₹920."
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "A trader gains 20% by selling an article. If he had sold it for ₹120 less, he would have gained 10%. Find the cost price.",
    options: ["₹1000", "₹1200", "₹1400", "₹1500"],
    correctAnswerIndex: 1,
    explanation: "Difference of 10% = ₹120. Therefore CP = 120 × 100 / 10 = ₹1200."
  },
  {
    id: 10,
    difficulty: "Hard",
    question: "A trader sold an article at 30% profit. Had he bought it for 20% less and sold at the same price, profit percentage would be:",
    options: ["50%", "55%", "60%", "62.5%"],
    correctAnswerIndex: 3,
    explanation: "Let CP=100. SP=130. New CP=80. Profit%=50/80×100=62.5%."
  }
  ]
  },
  {
  id:3,
  name:"Loss Percentage",
  notes:{
    concept:
     "Loss Percentage represents the loss incurred as a percentage of the Cost Price.",
     formula:{
      lossPercentage:
      "Loss% = (Loss / Cost Price) * 100",
      loss:
        "Loss = Cost Price - Selling Price",

      sellingPrice:
        "Selling Price = Cost Price × (100 - Loss%) / 100"
    },

    shortcuts: [
      "10% Loss ⇒ SP = 0.90 × CP",
      "20% Loss ⇒ SP = 0.80 × CP",
      "25% Loss ⇒ SP = 0.75 × CP",
      "50% Loss ⇒ SP = 0.50 × CP"
    ],

    example: {
      question:
        "An article is bought for ₹1000 and sold for ₹850. Find the loss percentage.",

      solution:
        "Loss = 1000 - 850 = ₹150. Loss% = (150/1000) × 100 = 15%."
    },

    tips: [
      "Loss percentage is always calculated on Cost Price.",
      "Use multipliers for quick aptitude calculations.",
      "Identify CP and SP carefully before applying formulas."
    ]
  },

  questions: [
  {
    id: 1,
    difficulty: "Easy",
    question: "An article costing ₹500 is sold for ₹450. Find the loss percentage.",
    options: ["5%", "8%", "10%", "12%"],
    correctAnswerIndex: 2,
    explanation: "Loss = 50. Loss% = (50/500) × 100 = 10%."
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "A trader buys an article for ₹800 and sells it for ₹720. Find the loss percentage.",
    options: ["8%", "10%", "12%", "15%"],
    correctAnswerIndex: 1,
    explanation: "Loss = 80. Loss% = (80/800) × 100 = 10%."
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "A product costing ₹300 is sold for ₹270. Find the loss percentage.",
    options: ["5%", "8%", "10%", "15%"],
    correctAnswerIndex: 2,
    explanation: "Loss = 30. Loss% = (30/300) × 100 = 10%."
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "An item purchased for ₹1000 is sold for ₹900. Find the loss percentage.",
    options: ["8%", "10%", "12%", "15%"],
    correctAnswerIndex: 1,
    explanation: "Loss = 100. Loss% = (100/1000) × 100 = 10%."
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "A trader incurs a loss of ₹40 on a product costing ₹400. Find the loss percentage.",
    options: ["5%", "8%", "10%", "12%"],
    correctAnswerIndex: 2,
    explanation: "Loss% = (40/400) × 100 = 10%."
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "An article is sold for ₹850 at a loss of 15%. Find the cost price.",
    options: ["₹900", "₹950", "₹1000", "₹1050"],
    correctAnswerIndex: 2,
    explanation: "CP = 850 × 100 / 85 = ₹1000."
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "A product costing ₹1200 is sold at a loss of 20%. Find the selling price.",
    options: ["₹900", "₹960", "₹1000", "₹1080"],
    correctAnswerIndex: 1,
    explanation: "SP = 1200 × 80/100 = ₹960."
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "An article is sold for ₹720 after a loss of 10%. Find its cost price.",
    options: ["₹750", "₹800", "₹850", "₹900"],
    correctAnswerIndex: 1,
    explanation: "CP = 720 × 100 / 90 = ₹800."
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "A trader sells an article at 20% loss. If he had sold it for ₹240 more, he would have gained 10%. Find the cost price.",
    options: ["₹600", "₹700", "₹800", "₹900"],
    correctAnswerIndex: 2,
    explanation: "Difference = 30% of CP = ₹240. CP = 240 × 100 / 30 = ₹800."
  },
  {
    id: 10,
    difficulty: "Hard",
    question: "An article is sold at 25% loss. Had it been sold for ₹300 more, there would have been no profit or loss. Find the cost price.",
    options: ["₹1000", "₹1100", "₹1200", "₹1300"],
    correctAnswerIndex: 2,
    explanation: "25% of CP = ₹300. CP = 300 × 100 / 25 = ₹1200."
  }
  ]
  },
  {
  id: 4,
  name: "Selling Price Calculation",

  notes: {
    concept:
      "Selling Price (SP) is the amount at which an article is sold. It can be calculated when Cost Price and Profit/Loss percentage are known.",

    formula: {
      profit:
        "SP = CP × (100 + Profit%) / 100",

      loss:
        "SP = CP × (100 - Loss%) / 100",

      general:
        "Selling Price = Cost Price ± Profit/Loss"
    },

    shortcuts: [
      "20% Profit ⇒ SP = 1.20 × CP",
      "25% Profit ⇒ SP = 1.25 × CP",
      "20% Loss ⇒ SP = 0.80 × CP",
      "25% Loss ⇒ SP = 0.75 × CP"
    ],

    example: {
      question:
        "A shopkeeper buys an article for ₹2,000 and wants a profit of 25%. Find the selling price.",

      solution:
        "SP = 2000 × 125/100 = ₹2,500."
    },

    tips: [
      "Convert profit/loss percentage into multipliers.",
      "Always check whether the percentage is profit or loss.",
      "Selling Price questions are among the most common aptitude questions."
    ]
  },

  questions: [
  {
    id: 1,
    difficulty: "Easy",
    question: "An article costs ₹500 and is sold at a profit of 20%. Find the selling price.",
    options: ["₹550", "₹580", "₹600", "₹620"],
    correctAnswerIndex: 2,
    explanation: "SP = 500 × 120/100 = ₹600."
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "A product costing ₹800 is sold at a profit of 25%. Find the selling price.",
    options: ["₹900", "₹950", "₹1000", "₹1050"],
    correctAnswerIndex: 2,
    explanation: "SP = 800 × 125/100 = ₹1000."
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "An article costing ₹1200 is sold at a loss of 10%. Find the selling price.",
    options: ["₹1000", "₹1050", "₹1080", "₹1100"],
    correctAnswerIndex: 2,
    explanation: "SP = 1200 × 90/100 = ₹1080."
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "A trader buys an item for ₹400 and incurs a loss of 5%. Find the selling price.",
    options: ["₹360", "₹370", "₹380", "₹390"],
    correctAnswerIndex: 2,
    explanation: "SP = 400 × 95/100 = ₹380."
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "A product costing ₹1000 is sold at a profit of 15%. Find the selling price.",
    options: ["₹1100", "₹1150", "₹1200", "₹1250"],
    correctAnswerIndex: 1,
    explanation: "SP = 1000 × 115/100 = ₹1150."
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "A trader gains 25% on a product. If its cost price is ₹1600, find the selling price.",
    options: ["₹1800", "₹1900", "₹2000", "₹2100"],
    correctAnswerIndex: 2,
    explanation: "SP = 1600 × 125/100 = ₹2000."
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "A product is sold at a loss of 12%. If the cost price is ₹2500, find the selling price.",
    options: ["₹2100", "₹2200", "₹2250", "₹2300"],
    correctAnswerIndex: 1,
    explanation: "SP = 2500 × 88/100 = ₹2200."
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "A trader earns a profit of 30% on an article costing ₹900. Find the selling price.",
    options: ["₹1080", "₹1140", "₹1170", "₹1200"],
    correctAnswerIndex: 2,
    explanation: "SP = 900 × 130/100 = ₹1170."
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "An article is sold at 20% profit. If the selling price is ₹2400, find the cost price.",
    options: ["₹1800", "₹1900", "₹2000", "₹2100"],
    correctAnswerIndex: 2,
    explanation: "CP = 2400 × 100/120 = ₹2000."
  },
  {
    id: 10,
    difficulty: "Hard",
    question: "A trader sells an article for ₹2760 after giving a 20% profit. Find its cost price.",
    options: ["₹2200", "₹2300", "₹2400", "₹2500"],
    correctAnswerIndex: 1,
    explanation: "CP = 2760 × 100/120 = ₹2300."
  }
  ]
  },
  {
  id: 5,
  name: "Cost Price Calculation",

  notes: {
    concept:
      "Cost Price (CP) is the price at which an article is purchased. It can be calculated when Selling Price and Profit/Loss percentage are known.",

    formula: {
      profit:
        "CP = SP × 100 / (100 + Profit%)",

      loss:
        "CP = SP × 100 / (100 - Loss%)"
    },

    shortcuts: [
      "SP ₹120, Profit 20% ⇒ CP = ₹100",
      "SP ₹75, Loss 25% ⇒ CP = ₹100",
      "Always divide, don't subtract percentages"
    ],

    example: {
      question:
        "An article is sold for ₹1,200 at a profit of 20%. Find the Cost Price.",

      solution:
        "CP = 1200 × 100 / 120 = ₹1,000."
    },

    tips: [
      "Reverse the profit/loss calculation.",
      "Do not subtract the percentage directly.",
      "These questions are very common in placement exams."
    ]
  },

  questions: [
  {
    id: 1,
    difficulty: "Easy",
    question: "An article is sold for ₹600 at a profit of 20%. Find the cost price.",
    options: ["₹450", "₹500", "₹550", "₹580"],
    correctAnswerIndex: 1,
    explanation: "CP = 600 × 100 / 120 = ₹500."
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "A product is sold for ₹900 at a profit of 25%. Find the cost price.",
    options: ["₹700", "₹720", "₹750", "₹800"],
    correctAnswerIndex: 1,
    explanation: "CP = 900 × 100 / 125 = ₹720."
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "An article is sold for ₹720 at a loss of 10%. Find the cost price.",
    options: ["₹750", "₹800", "₹850", "₹900"],
    correctAnswerIndex: 1,
    explanation: "CP = 720 × 100 / 90 = ₹800."
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "A trader sells a product for ₹950 after a 5% loss. Find the cost price.",
    options: ["₹1000", "₹1050", "₹1100", "₹1150"],
    correctAnswerIndex: 0,
    explanation: "CP = 950 × 100 / 95 = ₹1000."
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "An article is sold for ₹1150 at a profit of 15%. Find the cost price.",
    options: ["₹950", "₹1000", "₹1050", "₹1100"],
    correctAnswerIndex: 1,
    explanation: "CP = 1150 × 100 / 115 = ₹1000."
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "A trader sells an article for ₹1500 making a profit of 25%. Find the cost price.",
    options: ["₹1100", "₹1200", "₹1250", "₹1300"],
    correctAnswerIndex: 1,
    explanation: "CP = 1500 × 100 / 125 = ₹1200."
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "A product is sold for ₹2200 at a loss of 12%. Find the cost price.",
    options: ["₹2400", "₹2500", "₹2600", "₹2700"],
    correctAnswerIndex: 1,
    explanation: "CP = 2200 × 100 / 88 = ₹2500."
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "An article sold for ₹1800 yields a profit of 20%. Find the cost price.",
    options: ["₹1400", "₹1450", "₹1500", "₹1600"],
    correctAnswerIndex: 2,
    explanation: "CP = 1800 × 100 / 120 = ₹1500."
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "A trader gains 25%. If he had sold the article for ₹250 less, he would have gained only 15%. Find the cost price.",
    options: ["₹2000", "₹2200", "₹2500", "₹2800"],
    correctAnswerIndex: 2,
    explanation: "Difference = 10% of CP = ₹250. CP = 250 × 100 / 10 = ₹2500."
  },
  {
    id: 10,
    difficulty: "Hard",
    question: "An article is sold at 20% loss. If the selling price had been ₹300 more, there would have been no loss. Find the cost price.",
    options: ["₹1200", "₹1350", "₹1500", "₹1800"],
    correctAnswerIndex: 2,
    explanation: "20% of CP = ₹300. CP = 300 × 100 / 20 = ₹1500."
  }
  ]
  },
  {
  id: 6,
  name: "Marked Price and Discount",

  notes: {
    concept:
      "Marked Price (MP) is the price printed on an article. Discount is the reduction offered on the Marked Price to arrive at the Selling Price.",

    formula: {
      discount:
        "Discount = Marked Price - Selling Price",

      discountPercentage:
        "Discount% = (Discount / Marked Price) × 100",

      sellingPrice:
        "SP = MP × (100 - Discount%) / 100"
    },

    shortcuts: [
      "10% Discount ⇒ Pay 90% of MP",
      "20% Discount ⇒ Pay 80% of MP",
      "25% Discount ⇒ Pay 75% of MP",
      "50% Discount ⇒ Pay Half of MP"
    ],

    example: {
      question:
        "A shirt marked at ₹2,000 is sold at a 15% discount. Find the selling price.",

      solution:
        "SP = 2000 × 85/100 = ₹1,700."
    },

    tips: [
      "Discount is always calculated on Marked Price.",
      "Do not confuse Cost Price with Marked Price.",
      "Many aptitude questions combine discount with profit."
    ]
  },

  questions: [
  {
    id: 1,
    difficulty: "Easy",
    question: "A shopkeeper marks an article at ₹1200 and offers no discount. Find the marked price.",
    options: ["₹1000", "₹1100", "₹1200", "₹1300"],
    correctAnswerIndex: 2,
    explanation: "Marked Price = ₹1200."
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "A product is marked at ₹800. What is its marked price?",
    options: ["₹700", "₹750", "₹800", "₹850"],
    correctAnswerIndex: 2,
    explanation: "Marked Price is the listed price before discount."
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "An article has a marked price of ₹1500. Find its marked price.",
    options: ["₹1400", "₹1450", "₹1500", "₹1550"],
    correctAnswerIndex: 2,
    explanation: "Marked Price = ₹1500."
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "A shopkeeper marks an item at ₹2000. What is the marked price?",
    options: ["₹1800", "₹1900", "₹2000", "₹2100"],
    correctAnswerIndex: 2,
    explanation: "Marked Price is ₹2000."
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "A product has a listed price of ₹950. Find its marked price.",
    options: ["₹850", "₹900", "₹950", "₹1000"],
    correctAnswerIndex: 2,
    explanation: "Listed Price = Marked Price."
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "An article marked at ₹2500 is sold after a 10% discount. Find the selling price.",
    options: ["₹2200", "₹2250", "₹2300", "₹2350"],
    correctAnswerIndex: 1,
    explanation: "SP = 2500 × 90/100 = ₹2250."
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "A product marked at ₹1800 is sold for ₹1620. Find the discount percentage.",
    options: ["5%", "8%", "10%", "12%"],
    correctAnswerIndex: 2,
    explanation: "Discount = 180. Discount% = (180/1800)×100 = 10%."
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "An article marked at ₹1000 is sold after a 20% discount. Find the selling price.",
    options: ["₹700", "₹750", "₹800", "₹850"],
    correctAnswerIndex: 2,
    explanation: "SP = 1000 × 80/100 = ₹800."
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "A shopkeeper marks goods 25% above cost price and allows a 10% discount. Find the profit percentage.",
    options: ["10%", "12.5%", "15%", "20%"],
    correctAnswerIndex: 1,
    explanation: "SP = 125 × 90/100 = 112.5. Profit = 12.5%."
  },
  {
    id: 10,
    difficulty: "Hard",
    question: "A trader marks an article 40% above CP and gives a discount of 20%. Find the profit percentage.",
    options: ["8%", "10%", "12%", "15%"],
    correctAnswerIndex: 2,
    explanation: "SP = 140 × 80/100 = 112. Profit = 12%."
  }
  ]
  },
  {
  id: 7,
  name: "Successive Profit and Loss",

  notes: {
    concept:
      "When multiple profit or loss percentages are applied one after another, the net effect is called successive profit and loss.",

    formula: {
      profitProfit:
        "Net Change = a + b + (ab/100)",

      lossLoss:
        "Net Change = -(a + b - (ab/100))",

      profitLoss:
        "Net Change = a - b - (ab/100)"
    },

    shortcuts: [
      "+20% then +10% = +32%",
      "+20% then -10% = +8%",
      "+50% then -50% = -25%",
      "Successive percentages are never added directly"
    ],

    example: {
      question:
        "A trader gains 20% on one transaction and then 10% on another. Find the net percentage gain.",

      solution:
        "Net Gain = 20 + 10 + (20×10)/100 = 32%."
    },

    tips: [
      "Use the successive percentage formula.",
      "Profit followed by loss is not zero.",
      "Always include the cross-product term (ab/100)."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "An article is sold at a profit of 20% and then repurchased and sold again at a profit of 10%. Find the net profit percentage.",
  options: ["28%", "30%", "32%", "35%"],
  correctAnswerIndex: 2,
  explanation: "Net Profit% = 20 + 10 + (20×10)/100 = 32%."
},
{
  id: 2,
  difficulty: "Easy",
  question: "An article is sold at successive profits of 10% and 20%. Find the net profit percentage.",
  options: ["28%", "30%", "32%", "35%"],
  correctAnswerIndex: 2,
  explanation: "10 + 20 + (10×20)/100 = 32%."
},
{
  id: 3,
  difficulty: "Easy",
  question: "An article is sold at successive losses of 10% and 20%. Find the net loss percentage.",
  options: ["26%", "28%", "30%", "32%"],
  correctAnswerIndex: 1,
  explanation: "10 + 20 - (10×20)/100 = 28% loss."
},
{
  id: 4,
  difficulty: "Easy",
  question: "An article is sold at 25% profit and then at 20% profit. Find the net profit percentage.",
  options: ["45%", "48%", "50%", "52%"],
  correctAnswerIndex: 2,
  explanation: "25 + 20 + (25×20)/100 = 50%."
},
{
  id: 5,
  difficulty: "Easy",
  question: "An article is sold at successive losses of 5% and 10%. Find the net loss percentage.",
  options: ["14%", "14.5%", "15%", "15.5%"],
  correctAnswerIndex: 1,
  explanation: "5 + 10 - (5×10)/100 = 14.5% loss."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A trader gains 20% and then loses 10% on the same article. Find the net profit/loss percentage.",
  options: ["8% Profit", "10% Profit", "12% Profit", "5% Profit"],
  correctAnswerIndex: 0,
  explanation: "20 - 10 - (20×10)/100 = 8% Profit."
},
{
  id: 7,
  difficulty: "Medium",
  question: "An article is sold at 30% profit and then 20% loss. Find the net profit/loss percentage.",
  options: ["4% Profit", "4% Loss", "6% Profit", "6% Loss"],
  correctAnswerIndex: 0,
  explanation: "30 - 20 - (30×20)/100 = 4% Profit."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A trader incurs losses of 20% and 10% successively. If the initial CP is ₹1000, find the final SP.",
  options: ["₹700", "₹720", "₹750", "₹800"],
  correctAnswerIndex: 1,
  explanation: "SP = 1000 × 80/100 × 90/100 = ₹720."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A trader gains 25% and then gains another 20%. If the original CP is ₹2000, find the final SP.",
  options: ["₹2800", "₹2900", "₹3000", "₹3100"],
  correctAnswerIndex: 2,
  explanation: "SP = 2000 × 125/100 × 120/100 = ₹3000."
},
{
  id: 10,
  difficulty: "Hard",
  question: "An article is sold at 40% profit and then 20% loss. Find the net profit percentage.",
  options: ["8%", "10%", "12%", "14%"],
  correctAnswerIndex: 2,
  explanation: "40 - 20 - (40×20)/100 = 12% Profit."
}
]
  },
  {
  id: 7,
  name: "Successive Profit and Loss",

  notes: {
    concept:
      "When multiple profit or loss percentages are applied one after another, the net effect is called successive profit and loss.",

    formula: {
      profitProfit:
        "Net Change = a + b + (ab/100)",

      lossLoss:
        "Net Change = -(a + b - (ab/100))",

      profitLoss:
        "Net Change = a - b - (ab/100)"
    },

    shortcuts: [
      "+20% then +10% = +32%",
      "+20% then -10% = +8%",
      "+50% then -50% = -25%",
      "Successive percentages are never added directly"
    ],

    example: {
      question:
        "A trader gains 20% on one transaction and then 10% on another. Find the net percentage gain.",

      solution:
        "Net Gain = 20 + 10 + (20×10)/100 = 32%."
    },

    tips: [
      "Use the successive percentage formula.",
      "Profit followed by loss is not zero.",
      "Always include the cross-product term (ab/100)."
    ]
  },

  questions: []
  } ,
  {
  id: 9,
  name: "False Weights Problems",

  notes: {
    concept:
      "False weight problems involve incorrect measuring instruments that allow a trader to gain extra profit even while charging normal prices.",

    formula: {
      profitPercentage:
        "Profit% = ((Claimed Weight - Actual Weight) / Actual Weight) × 100",

      general:
        "Gain = Short Delivery / Actual Delivery × 100"
    },

    shortcuts: [
      "950 g instead of 1 kg ⇒ 5.26% Profit",
      "900 g instead of 1 kg ⇒ 11.11% Profit",
      "800 g instead of 1 kg ⇒ 25% Profit",
      "Always divide by actual quantity delivered"
    ],

    example: {
      question:
        "A trader uses a weight of 950 g instead of 1 kg. Find his profit percentage.",

      solution:
        "Profit% = (50/950) × 100 = 5.26%."
    },

    tips: [
      "False weights and dishonest shopkeeper questions are closely related.",
      "Convert all quantities into grams before calculation.",
      "Pay attention to what is claimed and what is actually delivered."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A shopkeeper uses a 900 g weight instead of 1 kg. Find his gain percentage.",
  options: ["10%", "11.11%", "12.5%", "15%"],
  correctAnswerIndex: 1,
  explanation: "Gain% = [(1000-900)/900] × 100 = 11.11%."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A trader gives only 950 g instead of 1 kg. Find his gain percentage.",
  options: ["5%", "5.26%", "6%", "6.25%"],
  correctAnswerIndex: 1,
  explanation: "Gain% = (50/950) × 100 = 5.26%."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A shopkeeper uses an 800 g weight for 1 kg. Find his gain percentage.",
  options: ["20%", "22%", "25%", "30%"],
  correctAnswerIndex: 2,
  explanation: "Gain% = (200/800) × 100 = 25%."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A trader delivers 900 g while charging for 1 kg. Find the gain percentage.",
  options: ["10%", "11.11%", "12.5%", "15%"],
  correctAnswerIndex: 1,
  explanation: "Gain% = (100/900) × 100 = 11.11%."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A shopkeeper uses a 750 g weight instead of 1 kg. Find his gain percentage.",
  options: ["25%", "30%", "33.33%", "35%"],
  correctAnswerIndex: 2,
  explanation: "Gain% = (250/750) × 100 = 33.33%."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A dishonest trader uses a 960 g weight instead of 1 kg. Find his gain percentage.",
  options: ["4%", "4.17%", "4.5%", "5%"],
  correctAnswerIndex: 1,
  explanation: "Gain% = (40/960) × 100 = 4.17%."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A trader claims to sell at cost price but uses an 800 g weight for 1 kg. Find his actual profit percentage.",
  options: ["20%", "22%", "25%", "30%"],
  correctAnswerIndex: 2,
  explanation: "Profit arises entirely due to false weight. Gain% = 25%."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A shopkeeper uses a 950 g weight and sells at cost price. Find the effective profit percentage.",
  options: ["5%", "5.26%", "6%", "6.5%"],
  correctAnswerIndex: 1,
  explanation: "Gain% = (50/950) × 100 = 5.26%."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A trader uses an 800 g weight and also marks up goods by 20%. Find the overall profit percentage.",
  options: ["40%", "45%", "50%", "55%"],
  correctAnswerIndex: 2,
  explanation: "Effective SP = 1200 for goods costing 800. Profit = 400. Profit% = 50%."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A shopkeeper uses a 900 g weight and sells goods at a profit of 20%. Find the overall profit percentage.",
  options: ["30%", "33.33%", "35%", "40%"],
  correctAnswerIndex: 1,
  explanation: "Overall Profit% = (1200/900 - 1) × 100 = 33.33%."
}
]
  },
  {
  id: 10,
  name: "Profit and Loss with Discount",

  notes: {
    concept:
      "These questions combine Marked Price, Discount, Cost Price, and Selling Price. Even after giving a discount, a trader may still earn a profit.",

    formula: {
      sellingPrice:
        "SP = MP × (100 - Discount%) / 100",

      profitPercentage:
        "Profit% = ((SP - CP) / CP) × 100",

      lossPercentage:
        "Loss% = ((CP - SP) / CP) × 100"
    },

    shortcuts: [
      "Find SP after discount first",
      "Then compare SP with CP",
      "Discount does not always mean loss",
      "Many aptitude questions combine MP, CP and Discount"
    ],

    example: {
      question:
        "An article costing ₹800 is marked at ₹1,000 and sold at a 10% discount. Find the profit percentage.",

      solution:
        "SP = 1000 × 90/100 = ₹900. Profit = 900 - 800 = ₹100. Profit% = (100/800) × 100 = 12.5%."
    },

    tips: [
      "Calculate Selling Price first.",
      "Never compare Marked Price directly with Cost Price.",
      "Work in the order: MP → SP → Profit/Loss."
    ]
  },

  questions: [
  {
    id: 1,
    difficulty: "Easy",
    question: "An article marked at ₹1000 is sold with a 10% discount. Find the selling price.",
    options: ["₹850", "₹900", "₹950", "₹1000"],
    correctAnswerIndex: 1,
    explanation: "SP = 1000 × 90/100 = ₹900."
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "A product marked at ₹800 is sold for ₹720. Find the discount percentage.",
    options: ["5%", "8%", "10%", "12%"],
    correctAnswerIndex: 2,
    explanation: "Discount = 80. Discount% = (80/800) × 100 = 10%."
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "An article marked at ₹1500 is sold after a 20% discount. Find the selling price.",
    options: ["₹1100", "₹1200", "₹1300", "₹1400"],
    correctAnswerIndex: 1,
    explanation: "SP = 1500 × 80/100 = ₹1200."
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "A product marked at ₹2000 is sold for ₹1800. Find the discount percentage.",
    options: ["5%", "8%", "10%", "12%"],
    correctAnswerIndex: 2,
    explanation: "Discount = 200. Discount% = (200/2000) × 100 = 10%."
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "A shopkeeper offers a 25% discount on a ₹1200 article. Find the selling price.",
    options: ["₹850", "₹900", "₹950", "₹1000"],
    correctAnswerIndex: 1,
    explanation: "SP = 1200 × 75/100 = ₹900."
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "An article marked at ₹2500 is sold after a 12% discount. Find the selling price.",
    options: ["₹2100", "₹2200", "₹2250", "₹2300"],
    correctAnswerIndex: 1,
    explanation: "SP = 2500 × 88/100 = ₹2200."
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "A product sold for ₹1700 after a 15% discount. Find the marked price.",
    options: ["₹1800", "₹1900", "₹2000", "₹2100"],
    correctAnswerIndex: 2,
    explanation: "MP = 1700 × 100 / 85 = ₹2000."
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "A trader gives a 20% discount on an article marked at ₹3000. Find the discount amount.",
    options: ["₹500", "₹550", "₹600", "₹650"],
    correctAnswerIndex: 2,
    explanation: "Discount = 20% of 3000 = ₹600."
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "A product marked at ₹4000 is sold after a 15% discount. Find the discount amount and selling price.",
    options: ["₹500, ₹3500", "₹600, ₹3400", "₹700, ₹3300", "₹800, ₹3200"],
    correctAnswerIndex: 1,
    explanation: "Discount = 15% of 4000 = ₹600. SP = ₹3400."
  },
  {
    id: 10,
    difficulty: "Hard",
    question: "An article is sold for ₹2550 after a 15% discount. Find its marked price.",
    options: ["₹2800", "₹2900", "₹3000", "₹3100"],
    correctAnswerIndex: 2,
    explanation: "MP = 2550 × 100 / 85 = ₹3000."
  }
  ]
  },
  {
  id: 11,
  name: "Successive Discounts",

  notes: {
    concept:
      "When two or more discounts are applied one after another, the net discount is called the equivalent discount.",

    formula: {
      equivalentDiscount:
        "Equivalent Discount = a + b - (ab/100)",

      sellingPrice:
        "SP = MP × (100-a)/100 × (100-b)/100"
    },

    shortcuts: [
      "20% and 10% discounts = 28%",
      "30% and 20% discounts = 44%",
      "Successive discounts are never added directly",
      "Always use the equivalent discount formula"
    ],

    example: {
      question:
        "A shop offers successive discounts of 20% and 10%. Find the equivalent discount.",

      solution:
        "Equivalent Discount = 20 + 10 - (20×10)/100 = 28%."
    },

    tips: [
      "Do not simply add discounts.",
      "Equivalent discount is always less than the sum of discounts.",
      "Successive discount questions are very common in aptitude tests."
    ]
  },

  questions: [
  {
    id: 1,
    difficulty: "Easy",
    question: "A shopkeeper offers successive discounts of 10% and 20% on an article marked at ₹1000. Find the selling price.",
    options: ["₹700", "₹720", "₹750", "₹800"],
    correctAnswerIndex: 1,
    explanation: "SP = 1000 × 90/100 × 80/100 = ₹720."
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "An article marked at ₹2000 is sold after successive discounts of 10% and 10%. Find the selling price.",
    options: ["₹1600", "₹1620", "₹1800", "₹1900"],
    correctAnswerIndex: 1,
    explanation: "SP = 2000 × 90/100 × 90/100 = ₹1620."
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "A product marked at ₹1500 receives successive discounts of 20% and 10%. Find the selling price.",
    options: ["₹1000", "₹1080", "₹1100", "₹1200"],
    correctAnswerIndex: 1,
    explanation: "SP = 1500 × 80/100 × 90/100 = ₹1080."
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "Successive discounts of 20% and 30% are equivalent to a single discount of:",
    options: ["44%", "45%", "46%", "50%"],
    correctAnswerIndex: 0,
    explanation: "Net Discount = 20 + 30 - (20×30)/100 = 44%."
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "Successive discounts of 15% and 10% are equivalent to:",
    options: ["23.5%", "24%", "25%", "26%"],
    correctAnswerIndex: 0,
    explanation: "15 + 10 - (15×10)/100 = 23.5%."
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "An article marked at ₹5000 is sold after successive discounts of 20% and 25%. Find the selling price.",
    options: ["₹2800", "₹3000", "₹3200", "₹3500"],
    correctAnswerIndex: 1,
    explanation: "SP = 5000 × 80/100 × 75/100 = ₹3000."
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "Two successive discounts of 10% and 20% are equivalent to a single discount of:",
    options: ["28%", "30%", "32%", "35%"],
    correctAnswerIndex: 0,
    explanation: "10 + 20 - (10×20)/100 = 28%."
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "A product marked at ₹2500 is sold for ₹1800 after two discounts. Find the equivalent discount percentage.",
    options: ["25%", "26%", "27%", "28%"],
    correctAnswerIndex: 3,
    explanation: "Discount = 700. Discount% = (700/2500) × 100 = 28%."
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "Successive discounts of 20% and x% result in a net discount of 36%. Find x.",
    options: ["15%", "18%", "20%", "25%"],
    correctAnswerIndex: 2,
    explanation: "20 + x - (20x)/100 = 36 ⇒ x = 20%."
  },
  {
    id: 10,
    difficulty: "Hard",
    question: "A shopkeeper offers two successive discounts of 25% and 20%. Find the net discount percentage.",
    options: ["35%", "38%", "40%", "45%"],
    correctAnswerIndex: 2,
    explanation: "25 + 20 - (25×20)/100 = 40%."
  }
  ]
  },
  {
  id: 12,
  name: "Gain/Loss on Two Articles",

  notes: {
    concept:
      "In these problems, profit is earned on one article and loss on another. The overall result depends on the total Cost Price and Selling Price.",

    formula: {
      netProfit:
        "Net Profit = Total SP - Total CP",

      netLoss:
        "Net Loss = Total CP - Total SP",

      profitPercentage:
        "Profit% = (Net Profit / Total CP) × 100",

      lossPercentage:
        "Loss% = (Net Loss / Total CP) × 100",

      equalProfitLoss:
    "If Gain = Loss = x%, Net Loss = (x²/100)%"
    },

    shortcuts: [
      "Equal profit% and loss% on equal investments always result in a net loss",
      "Net Loss% = (Loss%^2)/100 when CPs are equal",
      "Calculate total CP and total SP before finding overall gain/loss"
    ],

    example: {
      question:
        "A trader gains 20% on one article and loses 20% on another article. Both articles have the same Cost Price. Find the overall result.",

      solution:
        "Net Loss% = (20²)/100 = 4%. Therefore, the trader incurs a 4% loss."
    },

    tips: [
      "Equal profit and loss percentages do not cancel each other.",
      "Use the special formula when Cost Prices are equal.",
      "Always calculate the overall result, not individual results."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A trader gains 20% on one article and loses 20% on another article of the same cost price. Find the overall result.",
  options: ["No Profit No Loss", "2% Loss", "4% Loss", "4% Profit"],
  correctAnswerIndex: 2,
  explanation: "Net Loss% = (20×20)/100 = 4% Loss."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A trader gains 10% on one article and loses 10% on another article of equal cost price. Find the overall result.",
  options: ["1% Loss", "1% Profit", "No Profit No Loss", "2% Loss"],
  correctAnswerIndex: 0,
  explanation: "Net Loss% = (10×10)/100 = 1% Loss."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A trader gains 15% on one article and loses 15% on another article of equal cost price. Find the overall result.",
  options: ["2.25% Loss", "2.25% Profit", "No Profit No Loss", "1.5% Loss"],
  correctAnswerIndex: 0,
  explanation: "Net Loss% = (15×15)/100 = 2.25% Loss."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A trader gains 25% on one article and loses 25% on another article of equal cost price. Find the overall result.",
  options: ["6.25% Loss", "6.25% Profit", "No Profit No Loss", "5% Loss"],
  correctAnswerIndex: 0,
  explanation: "Net Loss% = (25×25)/100 = 6.25% Loss."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A trader gains 30% on one article and loses 30% on another article of equal cost price. Find the overall result.",
  options: ["9% Loss", "9% Profit", "No Profit No Loss", "6% Loss"],
  correctAnswerIndex: 0,
  explanation: "Net Loss% = (30×30)/100 = 9% Loss."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A trader buys two articles for ₹1000 each. He gains 20% on one and loses 10% on the other. Find the net profit percentage.",
  options: ["4%", "5%", "6%", "8%"],
  correctAnswerIndex: 1,
  explanation: "Profit = 200, Loss = 100. Net Profit = 100. Profit% = 100/2000 × 100 = 5%."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Two articles each cost ₹500. One is sold at 30% profit and the other at 20% loss. Find the net profit percentage.",
  options: ["3%", "4%", "5%", "6%"],
  correctAnswerIndex: 2,
  explanation: "Profit = 150, Loss = 100. Net Profit = 50. Profit% = 50/1000 × 100 = 5%."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A trader gains 25% on one article and loses 15% on another article of the same CP. Find the overall profit percentage.",
  options: ["3%", "4%", "5%", "6%"],
  correctAnswerIndex: 2,
  explanation: "Assume CP = 100 each. Net SP = 125 + 85 = 210. Profit = 10. Profit% = 10/200 × 100 = 5%."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A trader sells two articles at ₹1200 each. On one he gains 20% and on the other he loses 20%. Find the net result.",
  options: ["4% Loss", "2% Loss", "No Profit No Loss", "4% Profit"],
  correctAnswerIndex: 0,
  explanation: "CP₁ = 1200/1.2 = 1000. CP₂ = 1200/0.8 = 1500. Total CP = 2500, Total SP = 2400. Loss = 100 = 4%."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A trader sells two articles for ₹1000 each. He gains 25% on one and loses 20% on the other. Find the net profit or loss percentage.",
  options: ["2.44% Loss", "2.44% Profit", "4% Loss", "4% Profit"],
  correctAnswerIndex: 0,
  explanation: "CP₁ = 1000/1.25 = 800. CP₂ = 1000/0.8 = 1250. Total CP = 2050. Total SP = 2000. Loss = 50. Loss% = 50/2050 × 100 = 2.44%."
}
]
  },
  {
  id: 13,
  name: "Partnership Applications",

  notes: {
    concept:
      "Partnership problems distribute profit according to the ratio of investment and time. The more money invested and the longer it is invested, the greater the profit share.",

    formula: {
      ratio:
        "Profit Ratio = Investment × Time",

      share:
        "Partner's Share = (Individual Ratio / Total Ratio) × Total Profit"
    },

    shortcuts: [
      "Profit is divided in the ratio of Capital × Time",
      "If time is equal, divide profit in the ratio of capitals",
      "If capitals are equal, divide profit in the ratio of time"
    ],

    example: {
      question:
        "A invests ₹40,000 for 12 months and B invests ₹60,000 for 8 months. Find their profit-sharing ratio.",

      solution:
        "A:B = (40,000×12):(60,000×8) = 480,000:480,000 = 1:1."
    },

    tips: [
      "Always multiply capital by time first.",
      "Convert months and years into the same unit.",
      "Partnership questions are common in banking and placement exams."
    ]
  },

  questions: []
  },
  {
  id: 14,
  name: "Mixed Placement Questions",

  notes: {
    concept:
      "Mixed Placement Questions combine multiple Profit & Loss concepts such as Cost Price, Selling Price, Discount, Marked Price, Successive Profit/Loss, and False Weights in a single problem.",

    formula: {
      profit:
        "Profit = SP - CP",

      loss:
        "Loss = CP - SP",

      discount:
        "Discount = MP - SP",

      profitPercentage:
        "Profit% = (Profit / CP) × 100"
    },

    shortcuts: [
      "Break complex problems into smaller steps",
      "Find SP first when discounts are involved",
      "Use multipliers instead of repeated percentage calculations",
      "Draw a CP → MP → SP flow diagram"
    ],

    example: {
      question:
        "An article costing ₹800 is marked at ₹1,200 and sold at a 20% discount. Find the profit percentage.",

      solution:
        "SP = 1200 × 80/100 = ₹960. Profit = 960 - 800 = ₹160. Profit% = (160/800) × 100 = 20%."
    },

    tips: [
      "Identify which concepts are involved before solving.",
      "Avoid jumping directly to formulas.",
      "Placement exams often use mixed-concept questions."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "An article is bought for ₹500 and sold for ₹600. Find the profit percentage.",
  options: ["15%", "20%", "25%", "30%"],
  correctAnswerIndex: 1,
  explanation: "Profit = 100. Profit% = (100/500) × 100 = 20%."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A product marked at ₹1000 is sold after a 10% discount. Find the selling price.",
  options: ["₹850", "₹900", "₹950", "₹1000"],
  correctAnswerIndex: 1,
  explanation: "SP = 1000 × 90/100 = ₹900."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A trader gains 20% on one article and loses 20% on another article of equal cost. Find the net result.",
  options: ["4% Loss", "4% Profit", "No Profit", "2% Loss"],
  correctAnswerIndex: 0,
  explanation: "Net Loss = (20×20)/100 = 4%."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A shopkeeper uses a 900 g weight instead of 1 kg. Find his gain percentage.",
  options: ["10%", "11.11%", "12%", "15%"],
  correctAnswerIndex: 1,
  explanation: "Gain% = (100/900) × 100 = 11.11%."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Successive discounts of 20% and 10% are equivalent to:",
  options: ["26%", "28%", "30%", "32%"],
  correctAnswerIndex: 1,
  explanation: "20 + 10 - (20×10)/100 = 28%."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A trader marks goods 25% above CP and allows a discount of 10%. Find the profit percentage.",
  options: ["10%", "11.5%", "12.5%", "15%"],
  correctAnswerIndex: 2,
  explanation: "SP = 125 × 90/100 = 112.5. Profit = 12.5%."
},
{
  id: 7,
  difficulty: "Medium",
  question: "An article is sold at a profit of 20% and then again at a profit of 10%. Find the net profit percentage.",
  options: ["28%", "30%", "32%", "35%"],
  correctAnswerIndex: 2,
  explanation: "20 + 10 + (20×10)/100 = 32%."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A trader sells two articles for ₹1200 each. On one he gains 20% and on the other he loses 20%. Find the net result.",
  options: ["4% Loss", "2% Loss", "No Profit", "4% Profit"],
  correctAnswerIndex: 0,
  explanation: "Total CP = 2500, Total SP = 2400. Loss = 4%."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A shopkeeper marks an article 50% above CP and gives a discount of 20%. Find the profit percentage.",
  options: ["15%", "18%", "20%", "25%"],
  correctAnswerIndex: 2,
  explanation: "SP = 150 × 80/100 = 120. Profit = 20%."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A trader uses an 800 g weight and also charges 20% above cost price. Find the overall profit percentage.",
  options: ["40%", "45%", "50%", "55%"],
  correctAnswerIndex: 2,
  explanation: "Effective SP = 1200 for goods costing 800. Profit = 400. Profit% = 50%."
}
]
  },
  {
  id: 15,
  name: "Data Interpretation",

  notes: {
    concept:
      "Data Interpretation (DI) Profit & Loss questions are based on tables, charts, graphs, and datasets. They test calculation speed and concept application.",

    formula: {
      profit:
        "Profit = SP - CP",

      loss:
        "Loss = CP - SP",

      profitPercentage:
        "Profit% = (Profit / CP) × 100",

      lossPercentage:
        "Loss% = (Loss / CP) × 100"
    },

    shortcuts: [
      "Read the table carefully before calculating",
      "Write down CP and SP values separately",
      "Check units such as lakhs, crores, thousands",
      "Use approximation when answer choices are far apart"
    ],

    example: {
      question:
        "A company purchased goods worth ₹5 lakh and sold them for ₹6 lakh. Find the profit percentage.",

      solution:
        "Profit = 6 - 5 = ₹1 lakh. Profit% = (1/5) × 100 = 20%."
    },

    tips: [
      "Most DI questions combine percentages with profit and loss.",
      "Avoid calculation errors by organizing data clearly.",
      "Practice speed because DI questions are time-intensive.",
      "Always verify the base value before calculating percentages."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A trader buys an article for ₹500 and sells it for ₹650. Find the profit.",
  options: ["₹100", "₹120", "₹150", "₹180"],
  correctAnswerIndex: 2,
  explanation: "Profit = SP - CP = 650 - 500 = ₹150."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A table shows CP = ₹800 and SP = ₹1000. Find the profit percentage.",
  options: ["20%", "25%", "30%", "35%"],
  correctAnswerIndex: 1,
  explanation: "Profit = 200. Profit% = (200/800) × 100 = 25%."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A trader buys an article for ₹1000 and sells it for ₹900. Find the loss percentage.",
  options: ["5%", "8%", "10%", "12%"],
  correctAnswerIndex: 2,
  explanation: "Loss = 100. Loss% = (100/1000) × 100 = 10%."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A graph shows MP = ₹1500 and SP = ₹1200. Find the discount percentage.",
  options: ["15%", "20%", "25%", "30%"],
  correctAnswerIndex: 1,
  explanation: "Discount = 300. Discount% = (300/1500) × 100 = 20%."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A table shows sales of 5 articles with profits ₹50, ₹60, ₹70, ₹80 and ₹90. Find the average profit.",
  options: ["₹60", "₹65", "₹70", "₹75"],
  correctAnswerIndex: 2,
  explanation: "(50+60+70+80+90)/5 = ₹70."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A chart shows CP = ₹2000 and SP = ₹2500. Find the profit percentage.",
  options: ["20%", "22.5%", "25%", "30%"],
  correctAnswerIndex: 2,
  explanation: "Profit = 500. Profit% = (500/2000) × 100 = 25%."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A trader marks an article at ₹3000 and sells it for ₹2400. Find the discount percentage.",
  options: ["15%", "18%", "20%", "25%"],
  correctAnswerIndex: 2,
  explanation: "Discount = 600. Discount% = (600/3000) × 100 = 20%."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A table shows CP = ₹1500 and profit = ₹300. Find SP.",
  options: ["₹1700", "₹1750", "₹1800", "₹1850"],
  correctAnswerIndex: 2,
  explanation: "SP = CP + Profit = ₹1800."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A chart shows MP = ₹4000, Discount = 10%, CP = ₹3000. Find the profit percentage.",
  options: ["15%", "18%", "20%", "25%"],
  correctAnswerIndex: 2,
  explanation: "SP = 4000 × 90/100 = 3600. Profit = 600. Profit% = 20%."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A trader buys goods worth ₹5000 and sells them after a 20% markup and 10% discount. Find the profit percentage.",
  options: ["6%", "8%", "10%", "12%"],
  correctAnswerIndex: 1,
  explanation: "SP = 5000 × 120/100 × 90/100 = 5400. Profit = 400. Profit% = 8%."
}
]
  }
]

}



  // ... [99 more Profit & Loss questions would go here]
