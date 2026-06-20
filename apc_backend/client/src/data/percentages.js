export const percentagesQuestions = {
  patterns: [
    {
      id: 1,
      name: "Basic Percentage Calculation",
      notes: {
      concept:
        "Percentage means per hundred. It is used to represent a quantity as a fraction of 100.",

      formula: {
        percentage: "Percentage = (Part / Whole) × 100",
        part: "Part = (Percentage × Whole) / 100",
        whole: "Whole = (Part × 100) / Percentage"
      },

      shortcuts: [
        "50% = 1/2",
        "25% = 1/4",
        "75% = 3/4",
        "20% = 1/5",
        "10% = 1/10"
      ],

      example: {
        question: "What is 25% of 200?",
        solution:
          "25% of 200 = (25/100) × 200 = 50"
      },

      tips: [
        "Always identify the base value before calculating percentages.",
        "Convert percentages to fractions whenever possible for faster calculations.",
        "Use percentage-fraction equivalents for aptitude shortcuts."
      ]
    },
      questions: [
        {
          id: 1,
          difficulty: "Easy",
          question: "If 15% of a number is 45, what is 40% of that number?",
          options: ["80", "100", "120", "150"],
          correctAnswerIndex: 2,
          explanation: "Let the number be x. Given, 15% of x = 45 => 0.15 * x = 45 => x = 45 / 0.15 = 300. Now, we need to find 40% of this number: 40% of 300 = 0.40 * 300 = 120."
        },
        {
          id: 2,
          difficulty: "Easy",
          question: "In an examination, a student must get 36% marks to pass. A student who gets 190 marks fails by 26 marks. What are the maximum marks of the examination?",
          options: ["500", "550", "600", "650"],
          correctAnswerIndex: 2,
          explanation: "The student got 190 marks and failed by 26 marks, which means the passing mark is 190 + 26 = 216 marks. Since the passing percentage is 36%, 36% of Maximum Marks = 216. Therefore, Maximum Marks = 216 / 0.36 = 600."
        },
        {
          id: 3,
          difficulty: "Medium",
          question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, how many apples did he have?",
          options: ["588", "600", "672", "700"],
          correctAnswerIndex: 3,
          explanation: "If the fruit seller sells 40% of his apples, he is left with 100% - 40% = 60% of his apples. We are given that the remaining apples count is 420. Let x be the original number of apples. So, 60% of x = 420 => 0.60 * x = 420 => x = 420 / 0.60 = 700 apples."
        },
        {
          id: 4,
          difficulty: "Medium",
          question: "The population of a town increases by 10% annually. If the current population is 20,000, what will be the population of the town after 2 years?",
          options: ["22,000", "24,000", "24,200", "24,400"],
          correctAnswerIndex: 2,
          explanation: "The population increases by 10% compounding annually. Population after 2 years = Current Population * (1 + R/100)^2 = 20,000 * (1 + 10/100)^2 = 20,000 * (1.1)^2 = 20,000 * 1.21 = 24,200."
        },
        {
          id: 5,
          difficulty: "Hard",
          question: "In an election between two candidates, 10% of the voters did not cast their votes and 10% of the votes cast were declared invalid. A candidate got 60% of the valid votes and won by a majority of 3240 votes. Find the total number of voters enrolled in the voters list.",
          options: ["18,000", "20,000", "22,500", "25,000"],
          correctAnswerIndex: 1,
          explanation: "Let the total number of enrolled voters be x. Votes cast = 90% of x = 0.9x. Valid votes = 90% of votes cast = 90% of 0.9x = 0.81x. The winning candidate got 60% of the valid votes, which means the other candidate got 40% of the valid votes. The majority of winning candidate = 60% - 40% = 20% of valid votes. Therefore, 20% of 0.81x = 3240 => 0.20 * 0.81x = 3240 => 0.162x = 3240 => x = 3240 / 0.162 = 20,000 voters."
        }
      ]
    },
    {
      id: 2,
      name: "Percentage Increase",
      notes: {
        concept:
          "Percentage increase measures how much a value has grown compared to its original value. It is one of the most common concepts in aptitude exams.",

        formula: {
          increase:
            "Percentage Increase = ((New Value - Original Value) / Original Value) × 100",

          newValue:
            "New Value = Original Value × (1 + Increase%/100)",

          increaseAmount:
            "Increase Amount = New Value - Original Value"
        },

        shortcuts: [
          "Increase by 10% ⇒ Multiply by 1.10",
          "Increase by 20% ⇒ Multiply by 1.20",
          "Increase by 25% ⇒ Multiply by 1.25",
          "Increase by 50% ⇒ Multiply by 1.50",
          "Increase by 100% ⇒ Multiply by 2"
        ],

        example: {
          question:
            "A salary increases from ₹40,000 to ₹50,000. Find the percentage increase.",

          solution:
            "Increase = 50,000 - 40,000 = 10,000. Percentage Increase = (10,000/40,000) × 100 = 25%."
        },

        tips: [
          "Always divide by the original value, not the new value.",
          "Convert percentage increases into multipliers for faster calculations.",
          "Successive increases are not added directly."
        ]
      },

      questions: [
        {
          id: 6,
          difficulty: "Easy",
          question: "A software engineer's monthly salary was $8,000. After an annual performance appraisal, his salary was increased by 15%. What is his new monthly salary?",
          options: ["$8,900", "$9,200", "$9,500", "$9,800"],
          correctAnswerIndex: 1,
          explanation: "Old Salary = $8,000. Increase percentage = 15%. Increase amount = 15% of $8,000 = (15/100) * 8000 = $1,200. New Salary = Old Salary + Increase amount = $8,000 + $1,200 = $9,200. Alternatively, New Salary = 115% of $8,000 = 1.15 * 8000 = $9,200."
        },
        {
          id: 7,
          difficulty: "Easy",
          question: "In the first semester, Rohit scored 60 marks in Mathematics. In the second semester, he improved his performance and scored 75 marks. Find the percentage increase in his marks.",
          options: ["20%", "25%", "30%", "35%"],
          correctAnswerIndex: 1,
          explanation: "Original Marks = 60. New Marks = 75. Increase in Marks = 75 - 60 = 15. Percentage Increase = (Increase / Original Marks) * 100 = (15 / 60) * 100 = 1/4 * 100 = 25%."
        },
        {
          id: 8,
          difficulty: "Medium",
          question: "Due to the implementation of automated assembly lines, a manufacturing plant's car production increased from 1,200 units per day to 1,560 units per day. By what percentage did the production increase?",
          options: ["25%", "30%", "33.33%", "36%"],
          correctAnswerIndex: 1,
          explanation: "Original Production = 1,200 units. New Production = 1,560 units. Increase in production = 1,560 - 1,200 = 360 units. Percentage Increase = (Increase / Original Production) * 100 = (360 / 1,200) * 100 = 0.3 * 100 = 30%."
        },
        {
          id: 9,
          difficulty: "Medium",
          question: "A tech company's quarterly revenue increased by 20% compared to the previous quarter. In the subsequent quarter, the company launched a new product line, causing the revenue to increase by another 15%. What is the net percentage increase in the revenue over the two quarters?",
          options: ["35%", "36%", "38%", "40%"],
          correctAnswerIndex: 2,
          explanation: "Let the initial revenue be 100. After the first quarter increase of 20%, revenue = 100 * 1.20 = 120. After the second quarter increase of 15%, revenue = 120 * 1.15 = 138. Net increase = 138 - 100 = 38. Net percentage increase = (38 / 100) * 100 = 38%. Alternatively, using the successive increase formula: Net % = a + b + (ab/100) = 20 + 15 + (20 * 15 / 100) = 35 + 3 = 38%."
        },
        {
          id: 10,
          difficulty: "Hard",
          question: "The population of a city increases at a rate of 8% in the first year, 12% in the second year, and 15% in the third year. If the population at the end of the third year is 55,890, what was the population of the city at the beginning of the first year?",
          options: ["40,000", "42,000", "45,000", "48,000"],
          correctAnswerIndex: 0,
          explanation: "Let the population at the beginning of the first year be P. Population after 3 years = P * (1 + 8/100) * (1 + 12/100) * (1 + 15/100) = 55,890. P * 1.08 * 1.12 * 1.15 = 55,890. P * 1.39728 = 55,890. P = 55,890 / 1.39728 = 40,000. Therefore, the population of the city at the beginning of the first year was 40,000."
        }
      ]
    },
    {
        id: 3,
        name: "Percentage Decrease",
        notes: {
          concept:
            "Percentage decrease measures how much a value has reduced compared to its original value.",

          formula: {
            decrease:
              "Percentage Decrease = ((Original Value - New Value) / Original Value) × 100",

            newValue:
              "New Value = Original Value × (1 - Decrease%/100)",

            decreaseAmount:
              "Decrease Amount = Original Value - New Value"
          },

          shortcuts: [
            "Decrease by 10% ⇒ Multiply by 0.90",
            "Decrease by 20% ⇒ Multiply by 0.80",
            "Decrease by 25% ⇒ Multiply by 0.75",
            "Decrease by 50% ⇒ Multiply by 0.50",
            "Decrease by 100% ⇒ Multiply by 0"
          ],

          example: {
            question:
              "The price of a laptop decreases from ₹50,000 to ₹40,000. Find the percentage decrease.",

            solution:
              "Decrease = 50,000 - 40,000 = 10,000. Percentage Decrease = (10,000/50,000) × 100 = 20%."
          },

          tips: [
            "Always divide by the original value.",
            "Percentage decrease and percentage increase are not inverse operations.",
            "Use multipliers for faster aptitude calculations."
          ]
        },
        questions: [
        {
          id: 11,
          difficulty: "Foundation",
          question: "The price of a television decreases from ₹25,000 to ₹22,500. What is the percentage decrease?",
          options: ["8%", "10%", "12%", "15%"],
          correctAnswerIndex: 1,
          explanation: "Decrease = 25000 - 22500 = 2500. Percentage decrease = (2500/25000) × 100 = 10%."
        },
        {
          id: 12,
          difficulty: "Medium",
          question: "A company's profit fell from ₹8 lakh to ₹6.8 lakh in a year. Find the percentage decrease.",
          options: ["12%", "15%", "18%", "20%"],
          correctAnswerIndex: 1,
          explanation: "Decrease = 1.2 lakh. Percentage decrease = (1.2/8) × 100 = 15%."
        },
        {
          id: 13,
          difficulty: "Medium",
          question: "The population of a town decreased from 48,000 to 42,000. What is the percentage decrease?",
          options: ["10%", "12.5%", "15%", "18%"],
          correctAnswerIndex: 1,
          explanation: "Decrease = 6000. Percentage decrease = (6000/48000) × 100 = 12.5%."
        },
        {
          id: 14,
          difficulty: "Hard",
          question: "A machine depreciates by 20% every year. If its current value is ₹64,000 after one year, what was its original value?",
          options: ["₹75,000", "₹78,000", "₹80,000", "₹82,000"],
          correctAnswerIndex: 2,
          explanation: "After 20% decrease, value remains 80%. Original value = 64000 / 0.8 = ₹80,000."
        },
        {
          id: 15,
          difficulty: "Hard",
          question: "The attendance in a seminar decreased from 1,250 participants to 1,000 participants. What is the percentage decrease?",
          options: ["18%", "20%", "22%", "25%"],
          correctAnswerIndex: 1,
          explanation: "Decrease = 250. Percentage decrease = (250/1250) × 100 = 20%."
        }
      ]
    },
    {
      id: 4,
      name: "Successive Percentage Change",
      notes: {
        concept:
          "When two or more percentage changes occur one after another, they are called successive percentage changes. They cannot be added directly.",

        formula: {
          netIncrease:
            "Net Change = a + b + (ab/100)  (for two increases)",

          netDecrease:
            "Net Change = -(a + b - (ab/100))  (for two decreases)",

          increaseDecrease:
            "Net Change = a - b - (ab/100)  (increase followed by decrease)"
        },

        shortcuts: [
          "+20% then +10% = +32%",
          "+20% then -10% = +8%",
          "+50% then -50% = -25%",
          "Successive changes are never added directly"
        ],

        example: {
          question:
            "A product price increases by 20% and then by 10%. Find the net percentage increase.",

          solution:
            "Net Change = 20 + 10 + (20×10)/100 = 32%."
        },

        tips: [
          "Use the successive percentage formula instead of calculating step-by-step.",
          "Increase followed by decrease is not zero.",
          "Always account for the cross-product term (ab/100)."
        ]
      },
      questions: [
        {
          id: 16,
          difficulty: "Medium",
          question: "The price of a product is increased by 20% and then increased again by 10%. What is the net percentage increase?",
          options: ["30%", "31%", "32%", "33%"],
          correctAnswerIndex: 2,
          explanation: "Net increase = 20 + 10 + (20×10)/100 = 32%."
        },
        {
          id: 17,
          difficulty: "Medium",
          question: "A salary is increased by 25% and then reduced by 20%. What is the net percentage change?",
          options: ["No Change", "5% Increase", "5% Decrease", "10% Increase"],
          correctAnswerIndex: 0,
          explanation: "1.25 × 0.80 = 1.00. Final salary equals original salary."
        },
        {
          id: 18,
          difficulty: "Hard",
          question: "A number is increased by 40% and then decreased by 20%. Find the net percentage change.",
          options: ["10% Increase", "12% Increase", "12% Decrease", "8% Increase"],
          correctAnswerIndex: 1,
          explanation: "1.40 × 0.80 = 1.12. Net increase = 12%."
        },
        {
          id: 19,
          difficulty: "Hard",
          question: "The population of a city increases by 10% in the first year and 20% in the second year. What is the overall percentage increase?",
          options: ["28%", "30%", "32%", "34%"],
          correctAnswerIndex: 2,
          explanation: "1.10 × 1.20 = 1.32. Overall increase = 32%."
        },
        {
          id: 20,
          difficulty: "Hard",
          question: "The price of a commodity is increased by 50% and later decreased by 40%. What is the net percentage change?",
          options: ["10% Increase", "10% Decrease", "5% Increase", "5% Decrease"],
          correctAnswerIndex: 1,
          explanation: "1.50 × 0.60 = 0.90. Net decrease = 10%."
        }
      ]
    },
    {
      id: 5,
      name: "Reverse Percentage",
      notes: {
        concept:
          "Reverse percentage is used when the final value after an increase or decrease is known, and we need to find the original value.",

        formula: {
          increase:
            "Original Value = Final Value × 100 / (100 + Percentage Increase)",

          decrease:
            "Original Value = Final Value × 100 / (100 - Percentage Decrease)",

          multiplier:
            "Original Value = Final Value / Multiplier"
        },

        shortcuts: [
          "After 25% increase ⇒ Divide by 1.25",
          "After 20% decrease ⇒ Divide by 0.80",
          "After 50% increase ⇒ Divide by 1.50",
          "Always work backwards from the final value"
        ],

        example: {
          question:
            "A salary becomes ₹50,000 after a 25% increase. Find the original salary.",

          solution:
            "Original Salary = 50,000 × 100 / 125 = ₹40,000."
        },

        tips: [
          "Never subtract the percentage directly.",
          "Identify whether the percentage change is an increase or decrease.",
          "Reverse percentage questions are common in salary, population and price-based aptitude problems."
        ]
      },
      questions: [
        {
          id: 21,
          difficulty: "Medium",
          question: "After a 20% increase, the price of a product becomes ₹600. What was its original price?",
          options: ["₹450", "₹480", "₹500", "₹520"],
          correctAnswerIndex: 2,
          explanation: "Original Price = 600 × 100 / 120 = ₹500."
        },
        {
          id: 22,
          difficulty: "Medium",
          question: "A student's marks increased by 25% and became 75. What were the original marks?",
          options: ["55", "60", "65", "70"],
          correctAnswerIndex: 1,
          explanation: "Original Marks = 75 × 100 / 125 = 60."
        },
        {
          id: 23,
          difficulty: "Hard",
          question: "After a 15% decrease, the value of a machine becomes ₹68,000. Find its original value.",
          options: ["₹75,000", "₹78,000", "₹80,000", "₹82,000"],
          correctAnswerIndex: 2,
          explanation: "Original Value = 68000 × 100 / 85 = ₹80,000."
        },
        {
          id: 24,
          difficulty: "Hard",
          question: "The population of a town increased by 10% and became 55,000. What was the population before the increase?",
          options: ["48,000", "50,000", "52,000", "54,000"],
          correctAnswerIndex: 1,
          explanation: "Original Population = 55000 × 100 / 110 = 50,000."
        },
        {
          id: 25,
          difficulty: "Hard",
          question: "A company's profit decreased by 20% and became ₹4.8 lakh. What was the original profit?",
          options: ["₹5 lakh", "₹5.5 lakh", "₹6 lakh", "₹6.5 lakh"],
          correctAnswerIndex: 2,
          explanation: "Original Profit = 4.8 × 100 / 80 = ₹6 lakh."
        }
      ]
    },
    {
      id: 6,
      name: "Percentage Comparison",
      notes: {
        concept:
          "Percentage comparison is used to compare two quantities and determine by what percentage one quantity is greater or smaller than another.",

        formula: {
          greater:
            "Percentage Greater = ((A - B) / B) × 100",

          smaller:
            "Percentage Smaller = ((A - B) / A) × 100",

          comparison:
            "Percentage Difference = (Difference / Base Value) × 100"
        },

        shortcuts: [
          "If A = 120 and B = 100, A is 20% greater than B",
          "If A = 120 and B = 100, B is 16.67% less than A",
          "Greater % and Smaller % are not equal",
          "Always divide by the comparison base value"
        ],

        example: {
          question:
            "Ravi earns ₹60,000 and Arun earns ₹50,000. By what percentage is Ravi's salary greater than Arun's?",

          solution:
            "Difference = 60,000 - 50,000 = 10,000. Percentage Greater = (10,000/50,000) × 100 = 20%."
        },

        tips: [
          "Read the question carefully to identify the base value.",
          "Greater than and less than percentages are different.",
          "Use the salary, population, and production comparison approach for aptitude questions."
        ]
      },
      questions: [
        {
          id: 26,
          difficulty: "Medium",
          question: "Rahul earns ₹48,000 per month while Arjun earns ₹40,000 per month. By what percentage is Rahul's salary greater than Arjun's?",
          options: ["15%", "18%", "20%", "25%"],
          correctAnswerIndex: 2,
          explanation: "Difference = 48,000 - 40,000 = 8,000. Percentage = (8000/40000) × 100 = 20%."
        },
        {
          id: 27,
          difficulty: "Medium",
          question: "A laptop costs ₹45,000 while another costs ₹36,000. By what percentage is the cheaper laptop less expensive than the costlier one?",
          options: ["18%", "20%", "22%", "25%"],
          correctAnswerIndex: 1,
          explanation: "Difference = 9,000. Percentage = (9000/45000) × 100 = 20%."
        },
        {
          id: 28,
          difficulty: "Hard",
          question: "The population of City A is 72,000 and City B is 60,000. By what percentage is City A's population greater than City B's?",
          options: ["18%", "20%", "22%", "25%"],
          correctAnswerIndex: 1,
          explanation: "Difference = 12,000. Percentage = (12000/60000) × 100 = 20%."
        },
        {
          id: 29,
          difficulty: "Hard",
          question: "A machine produces 1,500 units per day while another machine produces 1,200 units per day. By what percentage is the first machine's production greater than the second?",
          options: ["20%", "22%", "25%", "30%"],
          correctAnswerIndex: 2,
          explanation: "Difference = 300. Percentage = (300/1200) × 100 = 25%."
        },
        {
          id: 30,
          difficulty: "Hard",
          question: "The revenue of Company X is ₹96 lakh while Company Y earns ₹80 lakh. By what percentage is Company Y's revenue less than Company X's revenue?",
          options: ["15%", "16.67%", "18%", "20%"],
          correctAnswerIndex: 1,
          explanation: "Difference = 16 lakh. Percentage = (16/96) × 100 = 16.67%."
        }
      ]
    },
    {
      id: 7,
      name: "Fraction to Percentage Conversion",
      notes: {
        concept:
          "Fraction to percentage conversion is performed by multiplying the fraction by 100. These conversions are frequently used as shortcuts in aptitude problems.",

        formula: {
          conversion:
            "Percentage = (Fraction × 100)",

          decimalMethod:
            "Percentage = Decimal × 100"
        },

        shortcuts: [
          "1/2 = 50%",
          "1/4 = 25%",
          "3/4 = 75%",
          "1/5 = 20%",
          "2/5 = 40%",
          "3/5 = 60%",
          "4/5 = 80%",
          "1/8 = 12.5%",
          "3/8 = 37.5%",
          "5/8 = 62.5%",
          "7/8 = 87.5%"
        ],

        example: {
          question:
            "Convert 3/8 into a percentage.",

          solution:
            "(3/8) × 100 = 37.5%"
        },

        tips: [
          "Memorize common fraction-percentage conversions.",
          "Many aptitude shortcuts depend on these values.",
          "Convert fractions directly instead of using long division whenever possible."
        ]
      },
      questions: [
        {
          id: 31,
          difficulty: "Medium",
          question: "Convert 3/8 into a percentage.",
          options: ["35.5%", "37.5%", "40%", "42.5%"],
          correctAnswerIndex: 1,
          explanation: "(3/8) × 100 = 37.5%."
        },
        {
          id: 32,
          difficulty: "Medium",
          question: "Convert 7/20 into a percentage.",
          options: ["30%", "32.5%", "35%", "37.5%"],
          correctAnswerIndex: 2,
          explanation: "(7/20) × 100 = 35%."
        },
        {
          id: 33,
          difficulty: "Hard",
          question: "Convert 11/16 into a percentage.",
          options: ["66.75%", "68.75%", "70.25%", "72.5%"],
          correctAnswerIndex: 1,
          explanation: "(11/16) × 100 = 68.75%."
        },
        {
          id: 34,
          difficulty: "Hard",
          question: "Convert 13/25 into a percentage.",
          options: ["48%", "50%", "52%", "54%"],
          correctAnswerIndex: 2,
          explanation: "(13/25) × 100 = 52%."
        },
        {
          id: 35,
          difficulty: "Hard",
          question: "A student answered 18 out of 24 questions correctly. What percentage of questions were answered correctly?",
          options: ["70%", "72%", "75%", "80%"],
          correctAnswerIndex: 2,
          explanation: "18/24 = 3/4. (3/4) × 100 = 75%."
        }
      ]
    },
    {
      id: 8,
      name: "Percentage to Fraction Conversion",
      notes: {
        concept:
          "Percentage to fraction conversion is the reverse of fraction-to-percentage conversion. Convert the percentage into a fraction over 100 and simplify.",

        formula: {
          conversion:
            "Fraction = Percentage / 100",

          simplification:
            "Reduce the fraction to its lowest terms"
        },

        shortcuts: [
          "50% = 1/2",
          "25% = 1/4",
          "75% = 3/4",
          "20% = 1/5",
          "40% = 2/5",
          "12.5% = 1/8",
          "62.5% = 5/8",
          "87.5% = 7/8"
        ],

        example: {
          question:
            "Convert 62.5% into a fraction.",

          solution:
            "62.5/100 = 625/1000 = 5/8"
        },

        tips: [
          "Memorize common percentage-fraction equivalents.",
          "These shortcuts save time in aptitude exams.",
          "Always simplify the fraction completely."
        ]
      },
      questions: [
        {
          id: 36,
          difficulty: "Medium",
          question: "Convert 62.5% into its simplest fractional form.",
          options: ["3/8", "5/8", "7/8", "9/16"],
          correctAnswerIndex: 1,
          explanation: "62.5% = 62.5/100 = 625/1000 = 5/8."
        },
        {
          id: 37,
          difficulty: "Medium",
          question: "Convert 87.5% into its simplest fractional form.",
          options: ["5/8", "3/4", "7/8", "15/16"],
          correctAnswerIndex: 2,
          explanation: "87.5% = 87.5/100 = 875/1000 = 7/8."
        },
        {
          id: 38,
          difficulty: "Hard",
          question: "Convert 16⅔% into its simplest fractional form.",
          options: ["1/5", "1/6", "1/7", "1/8"],
          correctAnswerIndex: 1,
          explanation: "16⅔% = 16.666.../100 = 1/6."
        },
        {
          id: 39,
          difficulty: "Hard",
          question: "Convert 83⅓% into its simplest fractional form.",
          options: ["4/5", "5/6", "7/8", "9/10"],
          correctAnswerIndex: 1,
          explanation: "83⅓% = 83.333.../100 = 5/6."
        },
        {
          id: 40,
          difficulty: "Hard",
          question: "A company's success rate is 12.5%. Express this as a fraction in simplest form.",
          options: ["1/4", "1/6", "1/8", "1/10"],
          correctAnswerIndex: 2,
          explanation: "12.5% = 12.5/100 = 125/1000 = 1/8."
        }
      ]
    },
    {
      id: 9,
      name: "Marks Percentage Problems",
      notes: {
        concept:
          "Marks percentage problems involve calculating pass marks, fail marks, percentage scored, maximum marks, and differences between candidates' performances.",

        formula: {
          percentage:
            "Percentage = (Marks Obtained / Maximum Marks) × 100",

          obtainedMarks:
            "Marks Obtained = (Percentage × Maximum Marks) / 100",

          maximumMarks:
            "Maximum Marks = (Marks Obtained × 100) / Percentage"
        },

        shortcuts: [
          "Passing Marks = Obtained Marks + Marks Failed By",
          "Difference in Marks = Difference in Percentage × Maximum Marks / 100",
          "Always convert percentages into actual marks before comparing",
          "Use percentage differences to find maximum marks quickly"
        ],

        example: {
          question:
            "A student scores 180 marks and fails by 20 marks. If passing marks are 40%, find the maximum marks.",

          solution:
            "Passing Marks = 180 + 20 = 200. Since 200 = 40% of Maximum Marks, Maximum Marks = (200 × 100)/40 = 500."
        },

        tips: [
          "Pass and fail questions are very common in placement exams.",
          "Always determine the passing mark first.",
          "Difference-in-percentage questions can often be solved without finding the passing percentage.",
          "Keep track of whether the percentage refers to obtained marks or passing marks."
        ]
      },
      questions: [
        {
          id: 41,
          difficulty: "Medium",
          question: "A student secures 360 marks out of 450. Find his percentage.",
          options: ["75%", "80%", "85%", "90%"],
          correctAnswerIndex: 1,
          explanation: "Percentage = (360/450) × 100 = 80%."
        },
        {
          id: 42,
          difficulty: "Medium",
          question: "In an examination, a student must score 40% marks to pass. A student gets 180 marks and fails by 20 marks. Find the maximum marks.",
          options: ["450", "500", "550", "600"],
          correctAnswerIndex: 1,
          explanation: "Passing marks = 180 + 20 = 200. Since 200 = 40% of maximum marks, Maximum marks = 200 × 100 / 40 = 500."
        },
        {
          id: 43,
          difficulty: "Hard",
          question: "A candidate scores 35% marks and fails by 24 marks. Another candidate scores 43% marks and gets 40 marks more than the passing marks. Find the maximum marks.",
          options: ["700", "750", "800", "850"],
          correctAnswerIndex: 2,
          explanation: "Difference in percentage = 43% - 35% = 8%. Difference in marks = 24 + 40 = 64. Therefore 8% = 64 marks. 100% = 64 × 100 / 8 = 800."
        },
        {
          id: 44,
          difficulty: "Hard",
          question: "A student scores 420 marks out of 600. By how many percentage points must he improve to reach 80%?",
          options: ["5", "8", "10", "12"],
          correctAnswerIndex: 2,
          explanation: "Current percentage = 420/600 × 100 = 70%. Required = 80%. Improvement needed = 10 percentage points."
        },
        {
          id: 45,
          difficulty: "Hard",
          question: "The passing percentage is 36%. A student obtains 170 marks and fails by 10 marks. Find the maximum marks.",
          options: ["450", "500", "550", "600"],
          correctAnswerIndex: 1,
          explanation: "Passing marks = 170 + 10 = 180. Maximum marks = 180 × 100 / 36 = 500."
        }
      ]
    },
    {
      id: 10,
      name: "Population Growth and Decay",
      notes: {
        concept:
          "Population Growth and Decay problems use percentage increase and decrease over time. Growth compounds year after year, similar to compound interest.",

        formula: {
          growth:
            "Population After n Years = Present Population × (1 + r/100)^n",

          decay:
            "Population After n Years = Present Population × (1 - r/100)^n",

          reverse:
            "Present Population = Future Population / (1 ± r/100)^n"
        },

        shortcuts: [
          "10% growth ⇒ Multiply by 1.10",
          "5% growth ⇒ Multiply by 1.05",
          "10% decay ⇒ Multiply by 0.90",
          "Successive yearly changes compound automatically"
        ],

        example: {
          question:
            "The population of a town is 20,000 and grows by 10% annually. Find the population after 2 years.",

          solution:
            "Population = 20,000 × (1.10)^2 = 20,000 × 1.21 = 24,200."
        },

        tips: [
          "Treat population growth exactly like compound interest.",
          "Never add percentages across years directly.",
          "For decay questions use (1 - r/100).",
          "Reverse population questions require working backwards."
        ]
      },
      questions: [
        {
          id: 46,
          difficulty: "Medium",
          question: "The population of a town is 50,000. It increases by 10% annually. What will be the population after 2 years?",
          options: ["60,000", "60,500", "60,250", "60,750"],
          correctAnswerIndex: 2,
          explanation: "Population after 2 years = 50000 × (1.10)^2 = 50000 × 1.21 = 60,500."
        },
        {
          id: 47,
          difficulty: "Medium",
          question: "A village has a population of 20,000. If it grows by 5% per year, what will be its population after 3 years?",
          options: ["23,152", "23,000", "22,500", "24,000"],
          correctAnswerIndex: 0,
          explanation: "Population = 20000 × (1.05)^3 = 20,000 × 1.157625 ≈ 23,152."
        },
        {
          id: 48,
          difficulty: "Hard",
          question: "The population of a city decreases by 10% every year. If its current population is 72,900, what will be its population after 2 years?",
          options: ["59,049", "60,000", "58,320", "61,500"],
          correctAnswerIndex: 0,
          explanation: "Population after 2 years = 72,900 × (0.9)^2 = 72,900 × 0.81 = 59,049."
        },
        {
          id: 49,
          difficulty: "Hard",
          question: "A town's population grows by 20% in the first year and 10% in the second year. If the initial population was 25,000, what is the population after 2 years?",
          options: ["32,000", "33,000", "34,000", "35,000"],
          correctAnswerIndex: 1,
          explanation: "Population = 25000 × 1.20 × 1.10 = 25,000 × 1.32 = 33,000."
        },
        {
          id: 50,
          difficulty: "Hard",
          question: "The population of a town is 44,000 after increasing by 10%. What was the population before the increase?",
          options: ["38,000", "39,000", "40,000", "42,000"],
          correctAnswerIndex: 2,
          explanation: "Original population = 44000 × 100 / 110 = 40,000."
        }
      ]
    },
    {
      id: 11,
      name: "Expenditure Problems",
      notes: {
        concept:
          "Expenditure problems involve maintaining the same spending amount when the price of a commodity changes. These questions are very common in aptitude exams.",

        formula: {
          decreaseConsumption:
            "Required Decrease% = (Increase% / (100 + Increase%)) × 100",

          increaseConsumption:
            "Required Increase% = (Decrease% / (100 - Decrease%)) × 100",

          expenditure:
            "Expenditure = Price × Quantity"
        },

        shortcuts: [
          "Price ↑ 25% ⇒ Consumption ↓ 20%",
          "Price ↑ 20% ⇒ Consumption ↓ 16.67%",
          "Price ↑ 40% ⇒ Consumption ↓ 28.57%",
          "Price ↓ 20% ⇒ Consumption ↑ 25%"
        ],

        example: {
          question:
            "The price of sugar increases by 25%. By what percentage should consumption be reduced so that expenditure remains unchanged?",

          solution:
            "Required Decrease = (25/125) × 100 = 20%."
        },

        tips: [
          "Expenditure remains constant unless stated otherwise.",
          "Focus on the relationship: Expenditure = Price × Quantity.",
          "Price increase implies consumption decrease.",
          "Price decrease implies consumption increase."
        ]
      },
      questions: [
        {
          id: 51,
          difficulty: "Medium",
          question: "The price of sugar increases by 25%. By what percentage should a family reduce consumption so that expenditure remains unchanged?",
          options: ["18%", "20%", "22%", "25%"],
          correctAnswerIndex: 1,
          explanation: "Required decrease = (25/125) × 100 = 20%."
        },
        {
          id: 52,
          difficulty: "Medium",
          question: "The price of petrol rises by 20%. By what percentage must consumption be reduced to keep expenditure constant?",
          options: ["15%", "16.67%", "18%", "20%"],
          correctAnswerIndex: 1,
          explanation: "Required decrease = (20/120) × 100 = 16.67%."
        },
        {
          id: 53,
          difficulty: "Hard",
          question: "The price of rice decreases by 20%. By what percentage can consumption be increased without changing expenditure?",
          options: ["20%", "22%", "25%", "30%"],
          correctAnswerIndex: 2,
          explanation: "Increase = (20/80) × 100 = 25%."
        },
        {
          id: 54,
          difficulty: "Hard",
          question: "A household spends ₹6,000 per month on milk. The price of milk rises by 25%. If consumption is reduced by 8%, what is the new expenditure?",
          options: ["₹6,600", "₹6,900", "₹6,750", "₹7,000"],
          correctAnswerIndex: 1,
          explanation: "New expenditure = 6000 × 1.25 × 0.92 = ₹6,900."
        },
        {
          id: 55,
          difficulty: "Hard",
          question: "The price of a commodity increases by 40%. By what percentage must consumption be reduced to keep expenditure unchanged?",
          options: ["25%", "28.57%", "30%", "33.33%"],
          correctAnswerIndex: 1,
          explanation: "Required decrease = (40/140) × 100 = 28.57%."
        }
      ]
    },
    {
      id: 12,
      name: "Election and Vote Percentage Problems",
      notes: {
        concept:
          "Election and vote percentage problems involve registered voters, votes cast, valid votes, invalid votes, vote shares, and winning margins.",

        formula: {
          voted:
            "Votes Cast = Total Voters × Voting Percentage / 100",

          validVotes:
            "Valid Votes = Votes Cast × (100 - Invalid%) / 100",

          winningMargin:
            "Winning Margin = Difference in Vote Percentage × Valid Votes / 100"
        },

        shortcuts: [
          "Non-voters + Voters = Total Voters",
          "Invalid votes are removed before candidate vote calculations",
          "Winning Margin = Difference between candidates' vote percentages",
          "Always find valid votes first"
        ],

        example: {
          question:
            "In an election, 10% voters did not vote and 5% of votes cast were invalid. If 17,100 valid votes were recorded, find the total number of voters.",

          solution:
            "Valid Votes = 95% of 90% = 85.5% of total voters. Total Voters = 17,100 / 0.855 = 20,000."
        },

        tips: [
          "Read carefully whether percentages are based on total voters, votes cast, or valid votes.",
          "Invalid votes are not counted for candidates.",
          "Winning margin questions usually require finding valid votes first.",
          "Draw a small flow chart: Total → Cast → Valid → Candidate Votes."
        ]
      },
      questions: [
        {
          id: 56,
          difficulty: "Medium",
          question: "In an election, Candidate A secured 60% of the valid votes and Candidate B secured the remaining votes. If the total valid votes were 20,000, by how many votes did A win?",
          options: ["2,000", "3,000", "4,000", "4,800"],
          correctAnswerIndex: 2,
          explanation: "A = 60% of 20,000 = 12,000. B = 8,000. Winning margin = 12,000 - 8,000 = 4,000."
        },
        {
          id: 57,
          difficulty: "Medium",
          question: "In an election, 15% of voters did not vote. If 34,000 votes were cast, find the total number of registered voters.",
          options: ["38,000", "40,000", "42,000", "44,000"],
          correctAnswerIndex: 1,
          explanation: "85% voted = 34,000. Total voters = 34,000 × 100 / 85 = 40,000."
        },
        {
          id: 58,
          difficulty: "Hard",
          question: "In an election, 10% of voters did not vote and 5% of the votes cast were invalid. If Candidate A secured 54% of the valid votes and won by 3,240 votes, find the total number of voters.",
          options: ["45,000", "50,000", "60,000", "75,000"],
          correctAnswerIndex: 1,
          explanation: "Votes cast = 90% of total. Valid votes = 95% of 90% = 85.5% of total. Margin = (54%-46%) = 8% of valid votes. 8% of valid votes = 3240 ⇒ valid votes = 40,500. Total voters = 40,500 / 0.855 = 50,000."
        },
        {
          id: 59,
          difficulty: "Hard",
          question: "In an election between two candidates, one candidate got 55% of the votes and won by 2,500 votes. Find the total number of votes cast.",
          options: ["20,000", "22,500", "25,000", "30,000"],
          correctAnswerIndex: 2,
          explanation: "Winning margin = 55% - 45% = 10%. 10% of total votes = 2,500. Total votes = 2,500 × 100 / 10 = 25,000."
        },
        {
          id: 60,
          difficulty: "Hard",
          question: "In an election, 20% of voters did not vote. Candidate A got 50% of the votes cast, Candidate B got 40%, and the remaining votes went to Candidate C. If Candidate C received 4,000 votes, find the total number of registered voters.",
          options: ["40,000", "50,000", "60,000", "80,000"],
          correctAnswerIndex: 1,
          explanation: "Candidate C got 10% of votes cast = 4,000. Votes cast = 40,000. Since 80% voted, total registered voters = 40,000 / 0.8 = 50,000."
        }
      ]
    },
    {
      id: 13,
      name: "Profit and Loss Percentage Applications",
      notes: {
        concept:
          "Profit and Loss percentage problems involve Cost Price (CP), Selling Price (SP), Profit, Loss, Marked Price, and Discount. This is one of the most important aptitude topics.",

        formula: {
          profit:
            "Profit = Selling Price - Cost Price",

          loss:
            "Loss = Cost Price - Selling Price",

          profitPercentage:
            "Profit% = (Profit / Cost Price) × 100",

          lossPercentage:
            "Loss% = (Loss / Cost Price) × 100",

          sellingPrice:
            "Selling Price = Cost Price × (100 ± Profit/Loss%) / 100"
        },

        shortcuts: [
          "20% Profit ⇒ SP = 1.20 × CP",
          "25% Profit ⇒ SP = 1.25 × CP",
          "20% Loss ⇒ SP = 0.80 × CP",
          "25% Loss ⇒ SP = 0.75 × CP",
          "Profit/Loss percentage is always calculated on Cost Price"
        ],

        example: {
          question:
            "A shopkeeper buys an article for ₹800 and sells it for ₹960. Find the profit percentage.",

          solution:
            "Profit = 960 - 800 = ₹160. Profit% = (160/800) × 100 = 20%."
        },

        tips: [
          "Always identify Cost Price and Selling Price first.",
          "Profit and Loss percentages are calculated using Cost Price as the base.",
          "Discount questions often combine with Profit and Loss.",
          "Multipliers save a lot of time in aptitude exams."
        ]
      },
      questions: [
        {
          id: 61,
          difficulty: "Medium",
          question: "A shopkeeper buys an item for ₹800 and sells it for ₹960. Find the profit percentage.",
          options: ["18%", "20%", "22%", "25%"],
          correctAnswerIndex: 1,
          explanation: "Profit = 960 - 800 = ₹160. Profit % = (160/800) × 100 = 20%."
        },
        {
          id: 62,
          difficulty: "Medium",
          question: "A trader sells a product for ₹1,350 at a profit of 25%. Find the cost price.",
          options: ["₹1,000", "₹1,050", "₹1,080", "₹1,100"],
          correctAnswerIndex: 2,
          explanation: "CP = SP × 100 / 125 = 1350 × 100 / 125 = ₹1,080."
        },
        {
          id: 63,
          difficulty: "Hard",
          question: "A shopkeeper marks an article 40% above cost price and gives a discount of 10%. What is the profit percentage?",
          options: ["24%", "26%", "28%", "30%"],
          correctAnswerIndex: 1,
          explanation: "SP = 140 × 0.9 = 126. Profit = 26 on CP 100. Profit % = 26%."
        },
        {
          id: 64,
          difficulty: "Hard",
          question: "An article is sold at a loss of 20%. If the selling price is ₹2,400, find the cost price.",
          options: ["₹2,800", "₹3,000", "₹3,200", "₹3,400"],
          correctAnswerIndex: 1,
          explanation: "CP = 2400 × 100 / 80 = ₹3,000."
        },
        {
          id: 65,
          difficulty: "Hard",
          question: "A trader gains 20% by selling a product for ₹1,800. Had he sold it for ₹1,650, what would have been the profit percentage?",
          options: ["8%", "10%", "12%", "15%"],
          correctAnswerIndex: 1,
          explanation: "CP = 1800 × 100 / 120 = ₹1,500. New profit = 1650 - 1500 = ₹150. Profit % = (150/1500) × 100 = 10%."
        }
      ]
    },
    {
      id: 14,
      name: "Discount Percentage Problems",
      notes: {
        concept:
          "Discount is the reduction given on the Marked Price (MP) of an article. Discount problems often combine with Profit & Loss questions in aptitude exams.",

        formula: {
          discount:
            "Discount = Marked Price - Selling Price",

          discountPercentage:
            "Discount% = (Discount / Marked Price) × 100",

          sellingPrice:
            "Selling Price = Marked Price × (100 - Discount%) / 100",

          successiveDiscount:
            "Equivalent Discount = a + b - (ab/100)"
        },

        shortcuts: [
          "10% discount ⇒ Pay 90% of MP",
          "20% discount ⇒ Pay 80% of MP",
          "25% discount ⇒ Pay 75% of MP",
          "Successive discounts are not added directly",
          "20% and 10% discounts = 28% equivalent discount"
        ],

        example: {
          question:
            "A shirt with a marked price of ₹2,000 is sold at a 15% discount. Find the selling price.",

          solution:
            "Selling Price = 2000 × (85/100) = ₹1,700."
        },

        tips: [
          "Always distinguish between Marked Price and Cost Price.",
          "Successive discounts require the equivalent discount formula.",
          "Discount is calculated on Marked Price.",
          "Many placement questions combine Discount with Profit & Loss."
        ]
      },
      questions: [
        {
          id: 66,
          difficulty: "Medium",
          question: "A shirt marked at ₹2,000 is sold at a discount of 15%. Find the selling price.",
          options: ["₹1,600", "₹1,650", "₹1,700", "₹1,750"],
          correctAnswerIndex: 2,
          explanation: "Selling Price = 2000 × 85/100 = ₹1,700."
        },
        {
          id: 67,
          difficulty: "Medium",
          question: "A shopkeeper gives a discount of 20% on a product whose marked price is ₹5,000. Find the discount amount.",
          options: ["₹800", "₹900", "₹1,000", "₹1,200"],
          correctAnswerIndex: 2,
          explanation: "Discount = 20% of ₹5,000 = ₹1,000."
        },
        {
          id: 68,
          difficulty: "Hard",
          question: "A product is offered with successive discounts of 20% and 10%. What is the equivalent discount percentage?",
          options: ["28%", "30%", "32%", "35%"],
          correctAnswerIndex: 0,
          explanation: "Equivalent discount = 20 + 10 - (20×10/100) = 28%."
        },
        {
          id: 69,
          difficulty: "Hard",
          question: "A retailer marks an article 25% above cost price and offers a discount of 10% on the marked price. What is the profit percentage?",
          options: ["10%", "12.5%", "15%", "18%"],
          correctAnswerIndex: 1,
          explanation: "SP = 125 × 90/100 = 112.5. Profit = 12.5 on CP 100. Profit % = 12.5%."
        },
        {
          id: 70,
          difficulty: "Hard",
          question: "A shopkeeper allows two successive discounts of 15% and 20% on a product. If the marked price is ₹4,000, find the selling price.",
          options: ["₹2,720", "₹2,800", "₹2,900", "₹3,000"],
          correctAnswerIndex: 0,
          explanation: "SP = 4000 × 0.85 × 0.80 = ₹2,720."
        }
      ]
    },
    {
      id: 15,
      name: "Data Interpretation Percentage Problems",
      notes: {
        concept:
          "Data Interpretation (DI) percentage problems involve analyzing tables, charts, graphs, and datasets to calculate percentages, percentage increase/decrease, ratios, and comparisons.",

        formula: {
          percentage:
            "Percentage = (Part / Total) × 100",

          increase:
            "Percentage Increase = ((New - Old) / Old) × 100",

          decrease:
            "Percentage Decrease = ((Old - New) / Old) × 100",

          comparison:
            "Percentage Comparison = (Difference / Base Value) × 100"
        },

        shortcuts: [
          "Always identify the total before calculating percentages.",
          "Convert chart values into actual numbers first.",
          "Check units carefully (lakhs, crores, thousands).",
          "Use approximation when answer choices are far apart.",
          "Compare percentages using the same base value."
        ],

        example: {
          question:
            "A company sold 2,000 units in January and 2,500 units in February. Find the percentage increase in sales.",

          solution:
            "Increase = 2500 - 2000 = 500. Percentage Increase = (500/2000) × 100 = 25%."
        },

        tips: [
          "Read the table or chart carefully before calculating.",
          "Most DI questions are a combination of percentage, ratio, and average concepts.",
          "Avoid calculation mistakes by writing intermediate values.",
          "Use elimination when options are widely separated.",
          "Practice speed because DI questions are time-consuming."
        ]
      },
      questions: [
        {
          id: 71,
          difficulty: "Medium",
          question: "A company sold 2,000 units in January and 2,500 units in February. What was the percentage increase in sales?",
          options: ["20%", "25%", "30%", "35%"],
          correctAnswerIndex: 1,
          explanation: "Increase = 2500 - 2000 = 500. Percentage increase = (500/2000) × 100 = 25%."
        },
        {
          id: 72,
          difficulty: "Medium",
          question: "The revenue of a company was ₹80 lakh in 2024 and ₹100 lakh in 2025. By what percentage did revenue increase?",
          options: ["20%", "22.5%", "25%", "30%"],
          correctAnswerIndex: 2,
          explanation: "Increase = 20 lakh. Percentage increase = (20/80) × 100 = 25%."
        },
        {
          id: 73,
          difficulty: "Hard",
          question: "A survey shows that out of 1,200 students, 720 use Android phones. What percentage of students use Android phones?",
          options: ["55%", "60%", "65%", "70%"],
          correctAnswerIndex: 1,
          explanation: "Percentage = (720/1200) × 100 = 60%."
        },
        {
          id: 74,
          difficulty: "Hard",
          question: "In a company, the number of employees increased from 400 to 520 over 3 years. Find the percentage increase.",
          options: ["25%", "28%", "30%", "32%"],
          correctAnswerIndex: 2,
          explanation: "Increase = 120. Percentage increase = (120/400) × 100 = 30%."
        },
        {
          id: 75,
          difficulty: "Hard",
          question: "A pie chart shows that 18% of a company's budget is allocated to Marketing. If the total budget is ₹50 lakh, how much is allocated to Marketing?",
          options: ["₹7 lakh", "₹8 lakh", "₹9 lakh", "₹10 lakh"],
          correctAnswerIndex: 2,
          explanation: "Marketing Budget = 18% of ₹50 lakh = (18/100) × 50 = ₹9 lakh."
        }
      ]
    }
  ]
};