export const dataInterpretationQuestions = {
    patterns:[
      {
      id: 1,
      name: "Table Data Interpretation",

      notes: {
        concept:
          "Information is presented in tabular form. Questions involve percentages, ratios, averages, and comparisons.",

        formula: {
          percentage:
            "Percentage = (Part / Total) × 100",

          average:
            "Average = Sum / Number of Observations"
        },

        shortcuts: [
          "Read row and column headings carefully",
          "Mark required values before calculating",
          "Use approximation when options are far apart"
        ],

        example: {
          question:
            "A table shows sales of 5 products. Find the average sales.",

          solution:
            "Add all sales values and divide by 5."
        },

        tips: [
          "Table DI is the most common placement DI pattern."
        ]
      },

      questions: []
    },
    {
    id: 2,
    name: "Bar Graph Data Interpretation",

    notes: {
      concept:
        "Data is represented using bars. Questions involve comparison and percentage calculations.",

      formula: {
        difference:
          "Difference = Larger Value - Smaller Value",

        percentage:
          "Percentage Change = (Difference / Original) × 100"
      },

      shortcuts: [
        "Read axis values carefully",
        "Estimate before calculating",
        "Compare heights of bars first"
      ],

      example: {
        question:
          "A bar graph shows sales in two years. Find the percentage increase.",

        solution:
          "Percentage Increase = (Increase / Original) × 100."
      },

      tips: [
        "Always check the scale of the graph."
      ]
    },

    questions: []
    },
    {
      id: 3,
      name: "Double Bar Graph Data Interpretation",

      notes: {
        concept:
          "Double Bar Graphs compare two related datasets across different categories.",

        formula: {
          difference:
            "Difference = Value₁ - Value₂",

          percentage:
            "Percentage Difference = (Difference / Base Value) × 100",

          ratio:
            "Ratio = Value₁ : Value₂"
        },

        shortcuts: [
          "Compare bars category-wise",
          "Check legends carefully",
          "Use ratios for quick comparison",
          "Watch for percentage increase/decrease questions"
        ],

        example: {
          question:
            "A double bar graph shows sales of Company A = 400 units and Company B = 500 units. Find the ratio of their sales.",

          solution:
            "Ratio = 400:500 = 4:5."
        },

        tips: [
          "Always identify which bar belongs to which dataset.",
          "Most questions involve comparison between two bars."
        ]
      },

      questions: []
    },
    {
      id: 4,
      name: "Line Graph Data Interpretation",

      notes: {
        concept:
          "Line Graphs show trends and changes over time. They are commonly used to represent growth, decline, and fluctuations.",

        formula: {
          change:
            "Change = Final Value - Initial Value",

          percentageChange:
            "Percentage Change = (Change / Initial Value) × 100",

          average:
            "Average = Sum of Values / Number of Observations"
        },

        shortcuts: [
          "Look for highest and lowest points first",
          "Check trend direction before calculations",
          "Use averages for quick analysis",
          "Read axis labels carefully"
        ],

        example: {
          question:
            "A line graph shows sales increasing from 200 units to 260 units. Find the percentage increase.",

          solution:
            "Increase = 260 - 200 = 60. Percentage Increase = (60/200) × 100 = 30%."
        },

        tips: [
          "Focus on trends over time.",
          "Many placement questions ask for percentage growth or average values."
        ]
      },

      questions: []
    },
    {
      id: 5,
      name: "Pie Chart Data Interpretation",

      notes: {
        concept:
          "A Pie Chart represents data as sectors of a circle. Each sector shows the proportion of a category relative to the whole.",

        formula: {
          sectorAngle:
            "Sector Angle = (Category Value / Total Value) × 360°",

          percentage:
            "Percentage = (Sector Angle / 360) × 100"
        },

        shortcuts: [
          "Entire Circle = 360°",
          "50% = 180°",
          "25% = 90°",
          "10% = 36°",
          "Find percentages before calculations"
        ],

        example: {
          question:
            "A sector measures 72°. What percentage of the total does it represent?",

          solution:
            "Percentage = (72/360) × 100 = 20%."
        },

        tips: [
          "Convert angles into percentages first.",
          "Most pie chart questions involve ratios and percentages.",
          "Very common in placement aptitude."
        ]
      },

      questions: []
    },
    {
      id: 6,
      name: "Mixed Graph Data Interpretation",

      notes: {
        concept:
          "Mixed Graph DI combines two or more graph types such as Bar Graph + Line Graph or Pie Chart + Table.",

        formula: {
          percentage:
            "Percentage = (Part / Total) × 100",

          ratio:
            "Ratio = Value₁ : Value₂",

          average:
            "Average = Sum / Number of Values"
        },

        shortcuts: [
          "Analyze one graph at a time",
          "Extract all required values before solving",
          "Create a rough table if needed",
          "Avoid switching between graphs repeatedly"
        ],

        example: {
          question:
            "A bar graph shows production and a line graph shows profit percentage. Find the profit for a given year.",

          solution:
            "Find production from bar graph and apply profit percentage from line graph."
        },

        tips: [
          "Mixed graphs are usually calculation-intensive.",
          "Organize data before solving.",
          "Common in Accenture, Cognizant and Deloitte aptitude tests."
        ]
      },

      questions: []
    },
    {
      id: 7,
      name: "Percentage-Based DI",

      notes: {
        concept:
          "Percentage-based DI questions require calculating percentage increase, decrease, contribution, or comparison from given data.",

        formula: {
          percentage:
            "Percentage = (Part / Total) × 100",

          increase:
            "Percentage Increase = ((New - Old) / Old) × 100",

          decrease:
            "Percentage Decrease = ((Old - New) / Old) × 100"
        },

        shortcuts: [
          "Find the base value first",
          "Percentage Increase and Decrease use different numerators",
          "Convert fractions to percentages quickly",
          "Use approximation when options are far apart"
        ],

        example: {
          question:
            "Sales increased from 400 units to 500 units. Find the percentage increase.",

          solution:
            "Increase = 500 - 400 = 100. Percentage Increase = (100/400) × 100 = 25%."
        },

        tips: [
          "Always identify the original value.",
          "Most DI questions involve percentage calculations.",
          "Very common in placement aptitude."
        ]
      },

      questions: []
    },
    {
      id: 8,
      name: "Ratio-Based DI",

      notes: {
        concept:
          "Ratio-based DI questions involve comparing two or more quantities using ratios.",

        formula: {
          ratio:
            "Ratio = Quantity₁ : Quantity₂",

          proportion:
            "a:b = c:d"
        },

        shortcuts: [
          "Simplify ratios immediately",
          "Convert percentages into ratios when possible",
          "Use common factors for quick simplification",
          "Compare quantities using ratio rather than actual values"
        ],

        example: {
          question:
            "The production of Company A and Company B is 240 and 360 units respectively. Find the ratio.",

          solution:
            "Ratio = 240:360 = 2:3."
        },

        tips: [
          "Always reduce ratios to the lowest form.",
          "Ratio questions are common in Pie Chart and Table DI.",
          "Check units before comparing values."
        ]
      },

      questions: []
        },
        {
      id: 9,
      name: "Average-Based DI",

      notes: {
        concept:
          "Average-based DI questions require finding the mean value from a set of data and comparing averages across categories.",

        formula: {
          average:
            "Average = Sum of Observations / Number of Observations"
        },

        shortcuts: [
          "Add values carefully before dividing",
          "Use grouping for large datasets",
          "Compare averages instead of individual values",
          "Check units before averaging"
        ],

        example: {
          question:
            "A company's sales for 5 years are 100, 120, 140, 160 and 180 units. Find the average sales.",

          solution:
            "Average = (100+120+140+160+180)/5 = 700/5 = 140 units."
        },

        tips: [
          "Average questions are common in Table and Line Graph DI.",
          "Always count the number of observations correctly.",
          "Avoid calculation mistakes while summing values."
        ]
      },

      questions: []
        },
        {
      id: 10,
      name: "Profit and Loss DI",

      notes: {
        concept:
          "Profit & Loss DI combines graphical data with profit, loss, cost price, and selling price calculations.",

        formula: {
          profit:
            "Profit = SP - CP",

          loss:
            "Loss = CP - SP",

          profitPercent:
            "Profit% = (Profit / CP) × 100",

          lossPercent:
            "Loss% = (Loss / CP) × 100"
        },

        shortcuts: [
          "Identify CP and SP first",
          "Profit ⇒ SP > CP",
          "Loss ⇒ SP < CP",
          "Use percentage formulas directly"
        ],

        example: {
          question:
            "A graph shows CP = ₹500 and SP = ₹650. Find the profit percentage.",

          solution:
            "Profit = 650 - 500 = ₹150. Profit% = (150/500) × 100 = 30%."
        },

        tips: [
          "Many placement DI sets combine graphs with profit calculations.",
          "Always calculate profit/loss before percentage.",
          "Watch units carefully."
        ]
      },

      questions: []
    },
    {
      id: 11,
      name: "Time and Work DI",

      notes: {
        concept:
          "Time & Work DI combines tables, graphs, or datasets with work-rate calculations and efficiency comparisons.",

        formula: {
          oneDayWork:
            "One Day Work = 1 / Number of Days",

          combinedWork:
            "1/T = 1/A + 1/B",

          efficiency:
            "Efficiency ∝ 1 / Time"
        },

        shortcuts: [
          "Convert days into work fractions",
          "Use LCM method for faster calculations",
          "Compare efficiencies using inverse time ratio",
          "Read data carefully before calculating"
        ],

        example: {
          question:
            "A table shows Worker A completes a job in 12 days and Worker B in 18 days. Find the time taken together.",

          solution:
            "1/T = 1/12 + 1/18 = 5/36. Therefore T = 36/5 = 7.2 days."
        },

        tips: [
          "Most DI questions use work-rate comparisons.",
          "Always convert values into work fractions first.",
          "Frequently asked in placement aptitude."
        ]
      },

      questions: []
    },
    {
      id: 12,
      name: "Time Speed Distance DI",

      notes: {
        concept:
          "TSD DI combines graphs, tables, and datasets with speed, distance, and time calculations.",

        formula: {
          speed:
            "Speed = Distance / Time",

          distance:
            "Distance = Speed × Time",

          time:
            "Time = Distance / Speed"
        },

        shortcuts: [
          "Check units first",
          "Convert km/h and m/s when necessary",
          "Use average speed carefully",
          "Extract values from charts before calculating"
        ],

        example: {
          question:
            "A graph shows a car traveled 300 km in 5 hours. Find its speed.",

          solution:
            "Speed = 300/5 = 60 km/h."
        },

        tips: [
          "Most TSD DI questions combine speed and average speed concepts.",
          "Keep units consistent throughout calculations.",
          "Very common in placement tests."
        ]
      },

      questions: []
    },
   {
    id: 13,
    name: "Caselet Data Interpretation",

    notes: {
      concept:
        "Caselet DI presents information in paragraph form instead of charts or tables. The data must be extracted and organized before solving.",

      formula: {
        percentage:
          "Percentage = (Part / Total) × 100",

        average:
          "Average = Sum / Number of Observations",

        ratio:
          "Ratio = Quantity₁ : Quantity₂"
      },

      shortcuts: [
        "Convert paragraph data into a table",
        "Underline important numbers",
        "Solve one question at a time",
        "Avoid rereading the entire caselet"
      ],

      example: {
        question:
          "A company sold 120, 150, 180, and 210 units in four quarters. Find the average sales.",

        solution:
          "Average = (120+150+180+210)/4 = 165 units."
      },

      tips: [
        "Organize data before solving.",
        "Caselets are often easier after creating a small table.",
        "Very common in placement aptitude tests."
      ]
    },

    questions: []
    },
    {
      id: 14,
      name: "Missing Data Interpretation",

      notes: {
        concept:
          "Missing Data DI questions require finding unknown values using ratios, percentages, averages, totals, or graph relationships.",

        formula: {
          average:
            "Average = Sum / Number of Values",

          percentage:
            "Percentage = (Part / Total) × 100",

          ratio:
            "Ratio = Quantity₁ : Quantity₂"
        },

        shortcuts: [
          "Use totals to find missing values",
          "Apply averages to reconstruct data",
          "Work backwards from percentages",
          "Check graph scales carefully"
        ],

        example: {
          question:
            "The average of five numbers is 40. Four numbers are 30, 35, 45 and 50. Find the fifth number.",

          solution:
            "Total = 40 × 5 = 200. Sum of known numbers = 160. Missing number = 200 - 160 = 40."
        },

        tips: [
          "Work backward whenever possible.",
          "Check whether totals or averages are given.",
          "Frequently asked in advanced DI sets."
        ]
      },

      questions: []
    },
    {
      id: 15,
      name: "Advanced Placement DI",

      notes: {
        concept:
          "Advanced DI combines multiple graph types and aptitude concepts such as percentages, profit & loss, ratio, averages, and TSD in one dataset.",

        formula: {
          percentage:
            "Percentage = (Part / Total) × 100",

          average:
            "Average = Sum / Number of Values",

          ratio:
            "Ratio = Quantity₁ : Quantity₂"
        },

        shortcuts: [
          "Identify the required concept first",
          "Create a rough calculation table",
          "Use approximation where possible",
          "Avoid unnecessary calculations"
        ],

        example: {
          question:
            "A mixed graph shows production and profit percentages for five years. Find the year with maximum profit.",

          solution:
            "Calculate profit for each year and compare values."
        },

        tips: [
          "Advanced DI is mostly about data organization.",
          "Read all graphs before solving.",
          "Common in Deloitte, Accenture, and analytics hiring tests."
        ]
      },

      questions: []
    }
    ]
  };