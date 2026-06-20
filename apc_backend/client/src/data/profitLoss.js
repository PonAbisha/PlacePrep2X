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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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

  questions: []
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
        "Loss% = (Net Loss / Total CP) × 100"
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

  questions: []
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

  questions: []
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

  questions: []
  }
]

}



  // ... [99 more Profit & Loss questions would go here]
