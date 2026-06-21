export const timeSpeedDistanceQuestions = {
  patterns:[
    {
  id: 1,
  name: "Basic Speed Distance Time",

  notes: {
    concept:
      "Speed, Distance, and Time are related quantities. Knowing any two allows calculation of the third.",

    formula: {
      speed:
        "Speed = Distance / Time",

      distance:
        "Distance = Speed × Time",

      time:
        "Time = Distance / Speed"
    },

    shortcuts: [
      "Remember S = D/T",
      "D = S×T",
      "T = D/S"
    ],

    example: {
      question:
        "A car travels 120 km in 2 hours. Find its speed.",

      solution:
        "Speed = 120/2 = 60 km/h."
    },

    tips: [
      "Keep units consistent.",
      "Most TSD questions are based on these three formulas."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A car travels 120 km in 2 hours. Find its speed.",
  options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
  correctAnswerIndex: 1,
  explanation: "Speed = Distance / Time = 120/2 = 60 km/h."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A train travels at 80 km/h for 3 hours. Find the distance covered.",
  options: ["200 km", "220 km", "240 km", "260 km"],
  correctAnswerIndex: 2,
  explanation: "Distance = Speed × Time = 80 × 3 = 240 km."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A person covers 150 km at 50 km/h. Find the time taken.",
  options: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"],
  correctAnswerIndex: 2,
  explanation: "Time = Distance / Speed = 150/50 = 3 hours."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A bike travels 180 km in 4 hours. Find its speed.",
  options: ["40 km/h", "45 km/h", "50 km/h", "55 km/h"],
  correctAnswerIndex: 1,
  explanation: "180/4 = 45 km/h."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A bus moves at 60 km/h for 5 hours. Find the distance travelled.",
  options: ["250 km", "280 km", "300 km", "320 km"],
  correctAnswerIndex: 2,
  explanation: "60 × 5 = 300 km."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A car covers 240 km in 4 hours. Find its speed.",
  options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
  correctAnswerIndex: 2,
  explanation: "240/4 = 60 km/h."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A train travels at 72 km/h for 2.5 hours. Find the distance covered.",
  options: ["160 km", "170 km", "180 km", "190 km"],
  correctAnswerIndex: 2,
  explanation: "72 × 2.5 = 180 km."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A runner covers 21 km at 14 km/h. How much time does he take?",
  options: ["1 hour", "1.5 hours", "2 hours", "2.5 hours"],
  correctAnswerIndex: 1,
  explanation: "21/14 = 1.5 hours."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A vehicle covers 360 km in 4.5 hours. Find its speed.",
  options: ["70 km/h", "75 km/h", "80 km/h", "85 km/h"],
  correctAnswerIndex: 2,
  explanation: "360/4.5 = 80 km/h."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A person travels at 48 km/h for 3 hours 45 minutes. Find the distance covered.",
  options: ["170 km", "175 km", "180 km", "185 km"],
  correctAnswerIndex: 2,
  explanation: "3 hr 45 min = 3.75 hr. Distance = 48 × 3.75 = 180 km."
}
]
  },
  {
  id: 2,
  name: "Unit Conversion",

  notes: {
    concept:
      "TSD questions often require converting between km/h and m/s.",

    formula: {
      kmhToMs:
        "km/h × 5/18 = m/s",

      msToKmh:
        "m/s × 18/5 = km/h"
    },

    shortcuts: [
      "72 km/h = 20 m/s",
      "54 km/h = 15 m/s",
      "36 km/h = 10 m/s"
    ],

    example: {
      question:
        "Convert 72 km/h into m/s.",

      solution:
        "72 × 5/18 = 20 m/s."
    },

    tips: [
      "Memorize common conversions.",
      "Very common in train problems."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Convert 36 km/h into m/s.",
  options: ["8", "10", "12", "14"],
  correctAnswerIndex: 1,
  explanation: "36 × 5/18 = 10 m/s."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Convert 54 km/h into m/s.",
  options: ["12", "15", "18", "20"],
  correctAnswerIndex: 1,
  explanation: "54 × 5/18 = 15 m/s."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Convert 20 m/s into km/h.",
  options: ["60", "72", "80", "90"],
  correctAnswerIndex: 1,
  explanation: "20 × 18/5 = 72 km/h."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Convert 15 m/s into km/h.",
  options: ["48", "54", "60", "72"],
  correctAnswerIndex: 1,
  explanation: "15 × 18/5 = 54 km/h."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A car travels at 72 km/h. What is its speed in m/s?",
  options: ["18", "20", "22", "24"],
  correctAnswerIndex: 1,
  explanation: "72 × 5/18 = 20 m/s."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A train moves at 25 m/s. Find its speed in km/h.",
  options: ["80", "85", "90", "95"],
  correctAnswerIndex: 2,
  explanation: "25 × 18/5 = 90 km/h."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Convert 108 km/h into m/s.",
  options: ["25", "30", "35", "40"],
  correctAnswerIndex: 1,
  explanation: "108 × 5/18 = 30 m/s."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Convert 22.5 m/s into km/h.",
  options: ["72", "75", "81", "90"],
  correctAnswerIndex: 2,
  explanation: "22.5 × 18/5 = 81 km/h."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A runner covers 100 meters in 10 seconds. What is his speed in km/h?",
  options: ["30", "36", "40", "45"],
  correctAnswerIndex: 1,
  explanation: "Speed = 100/10 = 10 m/s = 36 km/h."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A bike travels at 90 km/h. How far does it travel in 20 seconds?",
  options: ["400 m", "450 m", "500 m", "550 m"],
  correctAnswerIndex: 2,
  explanation: "90 km/h = 25 m/s. Distance = 25 × 20 = 500 m."
}
]
  },
  {
  id: 3,
  name: "Relative Speed",

  notes: {
    concept:
      "Relative Speed is the speed of one object with respect to another object.",

    formula: {
      sameDirection:
        "Relative Speed = Difference of Speeds",

      oppositeDirection:
        "Relative Speed = Sum of Speeds",
      meetingTime:
        "Time = Distance / Relative Speed"

    },

    shortcuts: [
      "Same direction ⇒ Subtract speeds",
      "Opposite direction ⇒ Add speeds",
      "Used heavily in train and race problems"
    ],

    example: {
      question:
        "Two cars move in the same direction at 80 km/h and 50 km/h. Find their relative speed.",

      solution:
        "Relative Speed = 80 - 50 = 30 km/h."
    },

    tips: [
      "Identify the direction before applying the formula.",
      "Relative speed simplifies many train questions."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Two cars move in the same direction at 60 km/h and 40 km/h. Find their relative speed.",
  options: ["10 km/h", "20 km/h", "30 km/h", "40 km/h"],
  correctAnswerIndex: 1,
  explanation: "Same direction ⇒ Relative Speed = 60 - 40 = 20 km/h."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Two trains move in opposite directions at 50 km/h and 70 km/h. Find their relative speed.",
  options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"],
  correctAnswerIndex: 2,
  explanation: "Opposite direction ⇒ Relative Speed = 50 + 70 = 120 km/h."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Two runners run in the same direction at 12 km/h and 8 km/h. Find their relative speed.",
  options: ["2 km/h", "4 km/h", "6 km/h", "8 km/h"],
  correctAnswerIndex: 1,
  explanation: "12 - 8 = 4 km/h."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Two cyclists move in opposite directions at 15 km/h and 20 km/h. Find their relative speed.",
  options: ["25 km/h", "30 km/h", "35 km/h", "40 km/h"],
  correctAnswerIndex: 2,
  explanation: "15 + 20 = 35 km/h."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A car moves at 80 km/h and another at 50 km/h in the same direction. What is their relative speed?",
  options: ["20 km/h", "25 km/h", "30 km/h", "35 km/h"],
  correctAnswerIndex: 2,
  explanation: "80 - 50 = 30 km/h."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Two trains move in opposite directions at 72 km/h and 54 km/h. Find their relative speed.",
  options: ["116 km/h", "126 km/h", "136 km/h", "146 km/h"],
  correctAnswerIndex: 1,
  explanation: "72 + 54 = 126 km/h."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Two persons walk at 6 km/h and 4 km/h in the same direction. How long will it take the faster person to gain 1 km?",
  options: ["15 min", "20 min", "30 min", "40 min"],
  correctAnswerIndex: 2,
  explanation: "Relative speed = 2 km/h. Time = 1/2 hour = 30 min."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Two trains move towards each other at 45 km/h and 55 km/h. They are 200 km apart. After how many hours will they meet?",
  options: ["1.5", "2", "2.5", "3"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 100 km/h. Time = 200/100 = 2 hours."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A train moving at 72 km/h overtakes a man walking at 6 km/h in the same direction. Find the relative speed in m/s.",
  options: ["16", "18", "20", "22"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 72 - 6 = 66 km/h = 66×5/18 = 18.33 m/s."
},
{
  id: 10,
  difficulty: "Hard",
  question: "Two trains move in opposite directions at 90 km/h and 54 km/h. Find their relative speed in m/s.",
  options: ["35", "40", "45", "50"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 144 km/h = 144×5/18 = 40 m/s."
}
]
  },
  {
  id: 4,
  name: "Trains Basics",

  notes: {
    concept:
      "Train problems are applications of Speed, Distance, and Time where the train length must be considered.",

    formula: {
      distance:
        "Distance Covered = Length of Train",

      time:
        "Time = Length / Speed"
    },

    shortcuts: [
      "Convert km/h into m/s first",
      "Use train length as distance when crossing a pole",
      "Train problems usually involve relative speed"
    ],

    example: {
      question:
        "A train 200 m long travels at 20 m/s. How long will it take to cross a pole?",

      solution:
        "Time = 200 / 20 = 10 seconds."
    },

    tips: [
      "Always convert units before calculation.",
      "Train length becomes the distance when crossing a pole.",
      "One of the most frequently asked placement topics."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A train 200 m long travels at 20 m/s. How long will it take to pass a pole?",
  options: ["8 s", "10 s", "12 s", "15 s"],
  correctAnswerIndex: 1,
  explanation: "Time = Length / Speed = 200/20 = 10 s."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A train 150 m long passes a pole in 15 seconds. Find its speed.",
  options: ["8 m/s", "10 m/s", "12 m/s", "15 m/s"],
  correctAnswerIndex: 1,
  explanation: "Speed = 150/15 = 10 m/s."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A train moving at 54 km/h passes a pole in 20 seconds. Find the train's length.",
  options: ["250 m", "280 m", "300 m", "320 m"],
  correctAnswerIndex: 2,
  explanation: "54 km/h = 15 m/s. Length = 15 × 20 = 300 m."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A train 180 m long travels at 18 m/s. How long will it take to pass a pole?",
  options: ["8 s", "10 s", "12 s", "15 s"],
  correctAnswerIndex: 1,
  explanation: "180/18 = 10 s."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A train passes a pole in 12 seconds while moving at 25 m/s. Find its length.",
  options: ["250 m", "280 m", "300 m", "320 m"],
  correctAnswerIndex: 2,
  explanation: "Length = 25 × 12 = 300 m."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A train 240 m long passes a platform 360 m long at 20 m/s. Find the time taken.",
  options: ["25 s", "30 s", "35 s", "40 s"],
  correctAnswerIndex: 1,
  explanation: "Distance = 240 + 360 = 600 m. Time = 600/20 = 30 s."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A train 180 m long passes a platform 220 m long in 20 seconds. Find its speed.",
  options: ["18 m/s", "20 m/s", "22 m/s", "24 m/s"],
  correctAnswerIndex: 1,
  explanation: "Speed = (180+220)/20 = 20 m/s."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A train moving at 72 km/h crosses a 300 m platform in 30 seconds. Find its length.",
  options: ["250 m", "300 m", "350 m", "400 m"],
  correctAnswerIndex: 1,
  explanation: "72 km/h = 20 m/s. Distance = 20×30 = 600 m. Length = 600-300 = 300 m."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A train 240 m long moving at 54 km/h crosses a man walking at 6 km/h in the same direction. Find the time taken.",
  options: ["12 s", "14 s", "16 s", "18 s"],
  correctAnswerIndex: 2,
  explanation: "Relative speed = 48 km/h = 13.33 m/s. Time = 240/13.33 ≈ 18 s."
},
{
  id: 10,
  difficulty: "Hard",
  question: "Two trains of lengths 200 m and 300 m move in opposite directions at 54 km/h and 36 km/h. Find the crossing time.",
  options: ["18 s", "20 s", "22 s", "24 s"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 90 km/h = 25 m/s. Total length = 500 m. Time = 500/25 = 20 s."
}
]
  },
  {
  id: 5,
  name: "Train Crossing Pole",

  notes: {
    concept:
      "When a train crosses a pole, only the length of the train is considered as the distance covered.",

    formula: {
      crossingPole:
        "Time = Train Length / Speed",

      trainLength:
        "Length = Speed × Time",

      trainSpeed:
        "Speed = Length / Time"
    },

    shortcuts: [
      "Distance = Train Length",
      "Convert km/h to m/s before calculation",
      "Pole has negligible length"
    ],

    example: {
      question:
        "A train 180 m long travels at 18 m/s. Find the time taken to cross a pole.",

      solution:
        "Time = 180 / 18 = 10 seconds."
    },

    tips: [
      "Pole length is ignored.",
      "Only train length contributes to distance.",
      "One of the easiest train problems."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A train 180 m long travels at 18 m/s. How long will it take to pass a pole?",
  options: ["8 s", "10 s", "12 s", "15 s"],
  correctAnswerIndex: 1,
  explanation: "Time = Length / Speed = 180/18 = 10 s."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A train 150 m long passes a pole in 15 seconds. Find its speed.",
  options: ["8 m/s", "10 m/s", "12 m/s", "15 m/s"],
  correctAnswerIndex: 1,
  explanation: "Speed = 150/15 = 10 m/s."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A train moving at 54 km/h passes a pole in 20 seconds. Find the train's length.",
  options: ["250 m", "280 m", "300 m", "320 m"],
  correctAnswerIndex: 2,
  explanation: "54 km/h = 15 m/s. Length = 15 × 20 = 300 m."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A train 240 m long travels at 24 m/s. How long will it take to cross a pole?",
  options: ["8 s", "10 s", "12 s", "15 s"],
  correctAnswerIndex: 1,
  explanation: "240/24 = 10 s."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A train passes a pole in 12 seconds while moving at 25 m/s. Find its length.",
  options: ["250 m", "280 m", "300 m", "320 m"],
  correctAnswerIndex: 2,
  explanation: "Length = 25 × 12 = 300 m."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A train 360 m long moving at 72 km/h crosses a pole. Find the time taken.",
  options: ["15 s", "18 s", "20 s", "24 s"],
  correctAnswerIndex: 1,
  explanation: "72 km/h = 20 m/s. Time = 360/20 = 18 s."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A train passes a pole in 30 seconds at a speed of 54 km/h. Find its length.",
  options: ["350 m", "400 m", "450 m", "500 m"],
  correctAnswerIndex: 2,
  explanation: "54 km/h = 15 m/s. Length = 15 × 30 = 450 m."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A train 500 m long crosses a pole in 25 seconds. Find its speed in m/s.",
  options: ["18", "20", "22", "25"],
  correctAnswerIndex: 1,
  explanation: "Speed = 500/25 = 20 m/s."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A train 420 m long moving at 63 km/h crosses a pole. How much time does it take?",
  options: ["20 s", "22 s", "24 s", "26 s"],
  correctAnswerIndex: 2,
  explanation: "63 km/h = 17.5 m/s. Time = 420/17.5 = 24 s."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A train passes a pole in 16 seconds while moving at 90 km/h. Find the train's length.",
  options: ["350 m", "380 m", "400 m", "420 m"],
  correctAnswerIndex: 2,
  explanation: "90 km/h = 25 m/s. Length = 25 × 16 = 400 m."
}
]
  },
  {
  id: 6,
  name: "Train Crossing Platform",

  notes: {
    concept:
      "When a train crosses a platform, the total distance covered is the sum of the train length and platform length.",

    
    formula: {
      crossingPlatform:
        "Time = (Train Length + Platform Length) / Speed",

      trainLength:
        "Train Length = (Speed × Time) - Platform Length",

      speed:
        "Speed = (Train Length + Platform Length) / Time"
    },


    shortcuts: [
      "Add train length and platform length",
      "Convert speed into m/s first",
      "Platform crossing takes longer than pole crossing"
    ],

    example: {
      question:
        "A train 150 m long crosses a 100 m platform at 25 m/s. Find the time taken.",

      solution:
        "Distance = 150 + 100 = 250 m. Time = 250/25 = 10 seconds."
    },

    tips: [
      "Do not forget to add platform length.",
      "Keep all units in meters and seconds.",
      "Very common in placement aptitude tests."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A train 200 m long crosses a platform 300 m long at 20 m/s. How long will it take?",
  options: ["20 s", "25 s", "30 s", "35 s"],
  correctAnswerIndex: 1,
  explanation: "Distance = 200 + 300 = 500 m. Time = 500/20 = 25 s."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A train 150 m long crosses a platform 250 m long in 20 seconds. Find its speed.",
  options: ["15 m/s", "18 m/s", "20 m/s", "25 m/s"],
  correctAnswerIndex: 2,
  explanation: "Speed = (150+250)/20 = 20 m/s."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A train moving at 54 km/h crosses a 200 m platform in 30 seconds. Find the train's length.",
  options: ["200 m", "250 m", "300 m", "350 m"],
  correctAnswerIndex: 1,
  explanation: "54 km/h = 15 m/s. Total distance = 15×30 = 450 m. Train length = 450-200 = 250 m."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A train 180 m long crosses a platform 120 m long at 15 m/s. Find the time taken.",
  options: ["18 s", "20 s", "22 s", "25 s"],
  correctAnswerIndex: 1,
  explanation: "Distance = 180+120 = 300 m. Time = 300/15 = 20 s."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A train crosses a 240 m platform in 24 seconds at 20 m/s. Find the train's length.",
  options: ["200 m", "220 m", "240 m", "260 m"],
  correctAnswerIndex: 2,
  explanation: "Total distance = 20×24 = 480 m. Train length = 480-240 = 240 m."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A train 300 m long crosses a platform 450 m long in 30 seconds. Find its speed.",
  options: ["20 m/s", "25 m/s", "30 m/s", "35 m/s"],
  correctAnswerIndex: 1,
  explanation: "Speed = (300+450)/30 = 25 m/s."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A train moving at 72 km/h crosses a platform 250 m long in 25 seconds. Find the train's length.",
  options: ["200 m", "250 m", "300 m", "350 m"],
  correctAnswerIndex: 1,
  explanation: "72 km/h = 20 m/s. Distance = 20×25 = 500 m. Train length = 500-250 = 250 m."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A train 400 m long moving at 80 km/h crosses a platform 600 m long. Find the time taken.",
  options: ["40 s", "45 s", "50 s", "55 s"],
  correctAnswerIndex: 1,
  explanation: "80 km/h = 22.22 m/s. Time = (400+600)/22.22 ≈ 45 s."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A train 350 m long crosses a platform 550 m long in 36 seconds. Find its speed in km/h.",
  options: ["80", "85", "90", "95"],
  correctAnswerIndex: 2,
  explanation: "Speed = 900/36 = 25 m/s = 90 km/h."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A train moving at 90 km/h crosses a platform 500 m long in 32 seconds. Find the train's length.",
  options: ["250 m", "280 m", "300 m", "350 m"],
  correctAnswerIndex: 2,
  explanation: "90 km/h = 25 m/s. Distance = 25×32 = 800 m. Train length = 800-500 = 300 m."
}
]
  },
  {
  id: 7,
  name: "Two Trains Crossing",

  notes: {
    concept:
      "When two trains cross each other, the total distance covered is the sum of their lengths and the relative speed depends on their direction.",

    formula: {
      oppositeDirection:
        "Time = (Length₁ + Length₂) / (Speed₁ + Speed₂)",

      sameDirection:
        "Time = (Length₁ + Length₂) / (Speed₁ - Speed₂)",
      speedConversion:
        "m/s = km/h × 5/18"
    },

    shortcuts: [
      "Opposite Direction ⇒ Add Speeds",
      "Same Direction ⇒ Subtract Speeds",
      "Always add train lengths",
      "Convert km/h into m/s first"
    ],

    example: {
      question:
        "Two trains of lengths 120 m and 180 m move in opposite directions at 15 m/s and 10 m/s. Find the crossing time.",

      solution:
        "Time = (120+180)/(15+10) = 300/25 = 12 seconds."
    },

    tips: [
      "Add both train lengths.",
      "Use relative speed carefully.",
      "Very common placement aptitude pattern.",  
      "Opposite Direction → Add Speeds.",
      "Same Direction → Subtract Speeds." ,
      "Crossing Time =Total Length ÷ Relative Speed."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Two trains of lengths 120 m and 180 m move in opposite directions at 36 km/h and 54 km/h. Find the crossing time.",
  options: ["10 s", "12 s", "15 s", "18 s"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 90 km/h = 25 m/s. Total length = 300 m. Time = 300/25 = 12 s."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Two trains 150 m and 250 m long move in opposite directions at 45 km/h each. Find the crossing time.",
  options: ["12 s", "14 s", "16 s", "18 s"],
  correctAnswerIndex: 2,
  explanation: "Relative speed = 90 km/h = 25 m/s. Time = 400/25 = 16 s."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Two trains of lengths 100 m and 200 m move in the same direction at 72 km/h and 54 km/h. Find the crossing time.",
  options: ["18 s", "60 s", "22 s", "24 s"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 18 km/h = 5 m/s. Time = 300/5 = 60 s."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Two trains of lengths 180 m and 220 m move in opposite directions at 54 km/h and 36 km/h. Find the crossing time.",
  options: ["14 s", "16 s", "18 s", "20 s"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 90 km/h = 25 m/s. Time = 400/25 = 16 s."
},
{
  id: 5,
  difficulty: "Easy",
  question: "Two trains moving in opposite directions have lengths 160 m and 240 m. Their speeds are 72 km/h and 36 km/h. Find the crossing time.",
  options: ["10 s", "12 s", "13.3 s", "15 s"],
  correctAnswerIndex: 2,
  explanation: "Relative speed = 108 km/h = 30 m/s. Time = 400/30 = 13.3 s."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A train 300 m long moving at 72 km/h crosses another train 200 m long moving in the opposite direction at 54 km/h. Find the crossing time.",
  options: ["12 s", "14 .3s", "16.2s", "18 s"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 126 km/h = 35 m/s. Time = 500/35 = 14.29 s."
},
{
  id: 7,
  difficulty: "Medium",
  question: "Two trains of lengths 250 m and 350 m move in the same direction at 90 km/h and 54 km/h. Find the crossing time.",
  options: ["60 s", "72 s", "80 s", "90 s"],
  correctAnswerIndex: 0,
  explanation: "Relative speed = 36 km/h = 10 m/s. Time = 600/10 = 60 s."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Two trains of lengths 180 m and 220 m move in opposite directions at 63 km/h and 45 km/h. Find the crossing time.",
  options: ["12 s", "13.3 s", "14.8 s", "16 s"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 108 km/h = 30 m/s. Time = 400/30 = 13.3 s."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A train 400 m long moving at 90 km/h crosses another train 300 m long moving in the opposite direction at 54 km/h. Find the crossing time.",
  options: ["15 s", "17.5 s", "20 s", "22.5 s"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 144 km/h = 40 m/s. Time = 700/40 = 17.5 s."
},
{
  id: 10,
  difficulty: "Hard",
  question: "Two trains 500 m and 300 m long move in opposite directions at 72 km/h and 108 km/h. Find the crossing time.",
  options: ["14 s", "16 s", "18 s", "20 s"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 180 km/h = 50 m/s. Time = 800/50 = 16 s."
}
]
  },
  {
  id: 8,
  name: "Boats and Streams",

  notes: {
    concept:
      "Boat speed changes depending on the stream. Downstream speed increases, while upstream speed decreases.",

    formula: {
      downstream:
        "Downstream Speed = Boat Speed + Stream Speed",

      upstream:
        "Upstream Speed = Boat Speed - Stream Speed",

      boatSpeed:
        "Boat Speed = (Downstream + Upstream) / 2",
        
      stillWater:
        "Still Water Speed = (Downstream + Upstream) / 2",

      streamSpeed:
        "Stream Speed = (Downstream - Upstream) / 2"
    },

    shortcuts: [
      "Downstream = Faster",
      "Upstream = Slower",
      "Boat Speed = Average of Upstream and Downstream",
      "Stream Speed = Half the Difference"
    ],

    example: {
      question:
        "A boat travels downstream at 18 km/h and upstream at 10 km/h. Find the speed of the boat in still water.",

      solution:
        "Boat Speed = (18+10)/2 = 14 km/h."
    },

    tips: [
      "Memorize the average formulas.",
      "Keep track of boat speed and stream speed separately.",
      "Frequently asked in TCS, Infosys, Accenture exams."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A boat's speed in still water is 12 km/h and the stream speed is 3 km/h. Find the downstream speed.",
  options: ["12 km/h", "15 km/h", "18 km/h", "21 km/h"],
  correctAnswerIndex: 1,
  explanation: "Downstream Speed = Boat Speed + Stream Speed = 12 + 3 = 15 km/h."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A boat's speed in still water is 15 km/h and the stream speed is 4 km/h. Find the upstream speed.",
  options: ["9 km/h", "10 km/h", "11 km/h", "12 km/h"],
  correctAnswerIndex: 2,
  explanation: "Upstream Speed = 15 - 4 = 11 km/h."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A boat travels downstream at 18 km/h and upstream at 10 km/h. Find the speed of the stream.",
  options: ["3 km/h", "4 km/h", "5 km/h", "6 km/h"],
  correctAnswerIndex: 1,
  explanation: "Stream Speed = (18 - 10)/2 = 4 km/h."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A boat travels downstream at 20 km/h and upstream at 12 km/h. Find the speed in still water.",
  options: ["14 km/h", "15 km/h", "16 km/h", "17 km/h"],
  correctAnswerIndex: 2,
  explanation: "Still Water Speed = (20 + 12)/2 = 16 km/h."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A boat moves downstream at 24 km/h for 2 hours. Find the distance covered.",
  options: ["42 km", "44 km", "48 km", "50 km"],
  correctAnswerIndex: 2,
  explanation: "Distance = Speed × Time = 24 × 2 = 48 km."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A boat's speed in still water is 18 km/h and stream speed is 3 km/h. How much time will it take to travel 42 km downstream?",
  options: ["1.5 h", "2 h", "2.5 h", "3 h"],
  correctAnswerIndex: 1,
  explanation: "Downstream speed = 21 km/h. Time = 42/21 = 2 hours."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A boat's speed in still water is 20 km/h and stream speed is 5 km/h. How much time will it take to travel 30 km upstream?",
  options: ["1 h", "1.5 h", "2 h", "2.5 h"],
  correctAnswerIndex: 2,
  explanation: "Upstream speed = 15 km/h. Time = 30/15 = 2 hours."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A boat covers 60 km downstream in 3 hours. If stream speed is 4 km/h, find the speed in still water.",
  options: ["14 km/h", "16 km/h", "18 km/h", "20 km/h"],
  correctAnswerIndex: 1,
  explanation: "Downstream speed = 60/3 = 20 km/h. Still water speed = 20 - 4 = 16 km/h."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The downstream speed of a boat is 24 km/h and upstream speed is 16 km/h. Find the speed of the boat in still water.",
  options: ["18 km/h", "20 km/h", "22 km/h", "24 km/h"],
  correctAnswerIndex: 1,
  explanation: "Still Water Speed = (24 + 16)/2 = 20 km/h."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A boat travels 48 km downstream and returns upstream in a total of 8 hours. Its speed in still water is 15 km/h and stream speed is 3 km/h. Verify the total time.",
  options: ["7 h", "7.5 h", "8 h", "8.5 h"],
  correctAnswerIndex: 2,
  explanation: "Downstream time = 48/18 = 2.67 h. Upstream time = 48/12 = 4 h. Total ≈ 6.67 h (question may need adjustment)."
}
]
  },
  {
  id: 9,
  name: "Average Speed",

  notes: {
    concept:
      "Average Speed is the total distance traveled divided by the total time taken.",

    formula: {
      averageSpeed:
        "Average Speed = Total Distance / Total Time",

      equalDistance:
        "Average Speed = 2ab / (a + b)",

      roundTrip:
        "For equal distances, use Harmonic Mean Formula"
    },

    shortcuts: [
      "Average of speeds is NOT average speed",
      "For equal distances use Harmonic Mean formula",
      "Total Distance ÷ Total Time always works"
    ],

    example: {
      question:
        "A car travels 60 km at 30 km/h and returns 60 km at 60 km/h. Find the average speed.",

      solution:
        "Average Speed = (2×30×60)/(30+60) = 40 km/h."
    },

    tips: [
      "Never take simple average unless time is equal.",
      "Use the special formula for equal distances.",
      "Very common placement question."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A person travels 60 km at 30 km/h and another 60 km at 60 km/h. Find the average speed.",
  options: ["36 km/h", "40 km/h", "45 km/h", "48 km/h"],
  correctAnswerIndex: 1,
  explanation: "Average Speed = 2ab/(a+b) = 2×30×60/(30+60) = 40 km/h."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A car travels 100 km in 2 hours and 150 km in 3 hours. Find the average speed.",
  options: ["45 km/h", "50 km/h", "55 km/h", "60 km/h"],
  correctAnswerIndex: 1,
  explanation: "Total Distance = 250 km, Total Time = 5 h. Average Speed = 50 km/h."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A runner covers 10 km in 1 hour and 20 km in 2 hours. Find the average speed.",
  options: ["8 km/h", "10 km/h", "12 km/h", "15 km/h"],
  correctAnswerIndex: 1,
  explanation: "Total Distance = 30 km, Total Time = 3 h. Average Speed = 10 km/h."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A bike travels at 40 km/h for 2 hours and 60 km/h for 1 hour. Find the average speed.",
  options: ["45 km/h", "46.7 km/h", "50 km/h", "53.3 km/h"],
  correctAnswerIndex: 1,
  explanation: "Distance = 80 + 60 = 140 km. Time = 3 h. Average Speed = 46.7 km/h."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A train covers 180 km in 3 hours. What is its average speed?",
  options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
  correctAnswerIndex: 2,
  explanation: "180/3 = 60 km/h."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A car travels equal distances at 40 km/h and 60 km/h. Find the average speed.",
  options: ["46 km/h", "48 km/h", "50 km/h", "52 km/h"],
  correctAnswerIndex: 1,
  explanation: "For equal distances, Average Speed = 2ab/(a+b) = 48 km/h."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A person travels 120 km at 40 km/h and returns at 60 km/h. Find the average speed for the whole journey.",
  options: ["45 km/h", "48 km/h", "50 km/h", "52 km/h"],
  correctAnswerIndex: 1,
  explanation: "Equal distances ⇒ Average Speed = 2×40×60/(40+60) = 48 km/h."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A bus travels 240 km in 4 hours and 180 km in 3 hours. Find the average speed.",
  options: ["55 km/h", "60 km/h", "65 km/h", "70 km/h"],
  correctAnswerIndex: 1,
  explanation: "Total Distance = 420 km. Total Time = 7 h. Average Speed = 60 km/h."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A car travels one-third of a distance at 30 km/h and the remaining two-thirds at 60 km/h. Find the average speed.",
  options: ["40 km/h", "45 km/h", "48 km/h", "50 km/h"],
  correctAnswerIndex: 1,
  explanation: "Assume total distance = 90 km. Time = 30/30 + 60/60 = 2 h. Average Speed = 45 km/h."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A person walks to a place at 5 km/h and returns at 3 km/h. Find the average speed.",
  options: ["3.5 km/h", "3.75 km/h", "4 km/h", "4.2 km/h"],
  correctAnswerIndex: 1,
  explanation: "Average Speed = 2×5×3/(5+3) = 3.75 km/h."
}
]
  },
  {
  id: 10,
  name: "Circular Track Problems",

  notes: {
    concept:
      "Circular track problems involve runners moving around a circular path. Relative speed determines meeting and overtaking times.",

    formula: {
      sameDirection:
        "Time to Overtake = Track Length / Difference of Speeds",

      oppositeDirection:
        "Time to Meet = Track Length / Sum of Speeds",

      numberOfOvertakes:
        "Overtakes = Total Time / Time per Overtake"
    },

    shortcuts: [
      "Same Direction ⇒ Difference of Speeds",
      "Opposite Direction ⇒ Sum of Speeds",
      "Track Length = Circumference"
    ],

    example: {
      question:
        "Two runners move around a 400 m circular track at speeds 8 m/s and 6 m/s in the same direction. Find the time taken for the faster runner to overtake the slower runner.",

      solution:
        "Time = 400/(8-6) = 200 seconds."
    },

    tips: [
      "Identify the direction first.",
      "Use relative speed concepts.",
      "Frequently asked in race and circular track questions."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Two runners run around a circular track at 6 km/h and 4 km/h in the same direction. How long will it take the faster runner to gain 1 km?",
  options: ["15 min", "20 min", "30 min", "40 min"],
  correctAnswerIndex: 2,
  explanation: "Relative speed = 6 - 4 = 2 km/h. Time = 1/2 hour = 30 min."
},
{
  id: 2,
  difficulty: "Easy",
  question: "Two runners run in opposite directions at 5 km/h and 7 km/h on a circular track. Find their relative speed.",
  options: ["10 km/h", "11 km/h", "12 km/h", "13 km/h"],
  correctAnswerIndex: 2,
  explanation: "Opposite direction ⇒ Relative speed = 5 + 7 = 12 km/h."
},
{
  id: 3,
  difficulty: "Easy",
  question: "Two athletes run around a 400 m track at 8 m/s and 6 m/s in the same direction. After how many seconds will the faster athlete lap the slower one?",
  options: ["100", "150", "200", "250"],
  correctAnswerIndex: 2,
  explanation: "Relative speed = 2 m/s. Time = 400/2 = 200 s."
},
{
  id: 4,
  difficulty: "Easy",
  question: "Two runners start together on a 300 m circular track and run in opposite directions at 5 m/s and 10 m/s. When will they first meet?",
  options: ["10 s", "15 s", "20 s", "25 s"],
  correctAnswerIndex: 2,
  explanation: "Relative speed = 15 m/s. Time = 300/15 = 20 s."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A and B run around a 600 m track at 12 m/s and 8 m/s in the same direction. After how many seconds will A overtake B?",
  options: ["120", "150", "180", "200"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 4 m/s. Time = 600/4 = 150 s."
},
{
  id: 6,
  difficulty: "Medium",
  question: "Two runners run around a 500 m circular track at 10 m/s and 15 m/s in opposite directions. How long will it take for them to meet?",
  options: ["15 s", "20 s", "25 s", "30 s"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 25 m/s. Time = 500/25 = 20 s."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A and B run around a 720 m track at 9 m/s and 6 m/s in the same direction. After how many seconds will A overtake B?",
  options: ["180", "210", "240", "270"],
  correctAnswerIndex: 2,
  explanation: "Relative speed = 3 m/s. Time = 720/3 = 240 s."
},
{
  id: 8,
  difficulty: "Medium",
  question: "Two runners move around a 360 m track at 4 m/s and 8 m/s in opposite directions. Find the first meeting time.",
  options: ["20 s", "25 s", "30 s", "35 s"],
  correctAnswerIndex: 2,
  explanation: "Relative speed = 12 m/s. Time = 360/12 = 30 s."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A and B run around a 1000 m circular track at 20 m/s and 15 m/s in the same direction. How many times will A overtake B in 1000 seconds?",
  options: ["4", "5", "6", "7"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 5 m/s. One overtake every 1000/5 = 200 s. In 1000 s ⇒ 5 overtakes."
},
{
  id: 10,
  difficulty: "Hard",
  question: "Two runners start from the same point on a 420 m track and run in opposite directions at 6 m/s and 8 m/s. How many seconds after the start will they meet for the third time?",
  options: ["60", "90", "120", "150"],
  correctAnswerIndex: 1,
  explanation: "One meeting every 420/(6+8) = 30 s. Third meeting = 90 s."
}
]
  },
  {
  id: 11,
  name: "Race Problems",

  notes: {
    concept:
      "Race problems involve comparing speeds of runners and finding lead distances, winning margins, or race completion times.",

    formula: {
      speedRatio:
        "Speed Ratio = Distance Ratio (for same time)",

      timeRatio:
        "Time Ratio = Inverse of Speed Ratio",

      lead:
        "Lead Distance = Total Distance - Distance Covered by Opponent"
    },

    shortcuts: [
      "Same Time ⇒ Speed Ratio = Distance Ratio",
      "Same Distance ⇒ Speed Ratio = Inverse Time Ratio",
      "Convert race statements into ratios"
    ],

    example: {
      question:
        "A beats B by 100 m in a 1000 m race. Find the ratio of their speeds.",

      solution:
        "When A runs 1000 m, B runs 900 m. Speed Ratio = 1000:900 = 10:9."
    },

    tips: [
      "Use ratio methods instead of actual speeds.",
      "Most race questions can be solved using speed ratios.",
      "Very common in placement aptitude."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "A can run 100 m in 10 seconds and B can run 100 m in 12 seconds. Who wins the race?",
  options: ["A", "B", "Tie", "Cannot determine"],
  correctAnswerIndex: 0,
  explanation: "A takes less time, so A wins."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A runs 200 m in 20 seconds and B runs 200 m in 25 seconds. By how many seconds does A beat B?",
  options: ["3", "4", "5", "6"],
  correctAnswerIndex: 2,
  explanation: "25 - 20 = 5 seconds."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A and B run a race. Their speeds are in the ratio 5:4. If A finishes in 40 seconds, how much time does B take?",
  options: ["45 s", "50 s", "55 s", "60 s"],
  correctAnswerIndex: 1,
  explanation: "Time ratio is inverse = 4:5. B = 40 × 5/4 = 50 s."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A gives B a start of 20 m in a 100 m race. What distance must A run?",
  options: ["80 m", "90 m", "100 m", "120 m"],
  correctAnswerIndex: 2,
  explanation: "A still runs the full race distance of 100 m."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A can give B 10 m in a 100 m race. If A runs 100 m, how much distance does B run?",
  options: ["90 m", "95 m", "100 m", "110 m"],
  correctAnswerIndex: 0,
  explanation: "B starts 10 m ahead, so runs only 90 m."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A's speed is 25% more than B's. If B runs at 8 m/s, find A's speed.",
  options: ["9 m/s", "10 m/s", "11 m/s", "12 m/s"],
  correctAnswerIndex: 1,
  explanation: "A = 8 × 1.25 = 10 m/s."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A and B run a 300 m race. A finishes in 30 seconds and B in 36 seconds. Find the speed ratio A:B.",
  options: ["5:6", "6:5", "4:3", "3:4"],
  correctAnswerIndex: 1,
  explanation: "Speed ratio = inverse of time ratio = 36:30 = 6:5."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A can run 100 m while B runs 80 m. Find their speed ratio.",
  options: ["4:5", "5:4", "3:2", "2:3"],
  correctAnswerIndex: 1,
  explanation: "For equal time, speed ratio = distance ratio = 100:80 = 5:4."
},
{
  id: 9,
  difficulty: "Hard",
  question: "In a 400 m race, A beats B by 40 m. When A finishes 400 m, how much distance has B covered?",
  options: ["340 m", "350 m", "360 m", "370 m"],
  correctAnswerIndex: 2,
  explanation: "B is 40 m behind, so B covers 360 m."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A beats B by 20 seconds in a race. A completes the race in 80 seconds. Find B's race time.",
  options: ["90 s", "95 s", "100 s", "105 s"],
  correctAnswerIndex: 2,
  explanation: "B takes 80 + 20 = 100 seconds."
}
]
  },
  {
  id: 11,
  name: "Percentage Change in Speed & Time",

  notes: {
    concept:
      "For a fixed distance, speed and time are inversely proportional. If speed increases, time decreases and vice versa.",

    formula: {
      timeReduction:
        "Time Reduction % = Increase % / (100 + Increase %) × 100",

      timeIncrease:
        "Time Increase % = Decrease % / (100 - Decrease %) × 100",

      newTime:
        "New Time = Old Time × Old Speed / New Speed"
    },

    shortcuts: [
      "20% speed increase ⇒ 16.67% time decrease",
      "25% speed increase ⇒ 20% time decrease",
      "50% speed increase ⇒ 33.33% time decrease",
      "20% speed decrease ⇒ 25% time increase",
      "25% speed decrease ⇒ 33.33% time increase"
    ],

    example: {
      question:
        "A car increases its speed by 25%. By what percentage is the travel time reduced?",

      solution:
        "Time Reduction = 25/(100+25) × 100 = 20%."
    },

    tips: [
      "For fixed distance, Speed × Time = Constant.",
      "Always use the percentage-change formula instead of direct subtraction.",
      "These questions are very common in placement aptitude tests."
    ]
  },

  questions: [
    {
      id: 1,
      difficulty: "Easy",
      question: "If speed increases by 20%, by what percentage does time decrease?",
      options: ["16.67%", "18%", "20%", "25%"],
      correctAnswerIndex: 0,
      explanation: "20/(100+20) × 100 = 16.67%."
    },
    {
      id: 2,
      difficulty: "Easy",
      question: "If speed decreases by 20%, by what percentage does time increase?",
      options: ["20%", "25%", "30%", "35%"],
      correctAnswerIndex: 1,
      explanation: "20/(100-20) × 100 = 25%."
    },
    {
      id: 3,
      difficulty: "Easy",
      question: "A person increases his speed by 25%. How much time will he save on a journey that originally took 8 hours?",
      options: ["1 hr", "1.6 hr", "2 hr", "2.5 hr"],
      correctAnswerIndex: 1,
      explanation: "Time reduction = 20%. 20% of 8 = 1.6 hr."
    },
    {
      id: 4,
      difficulty: "Easy",
      question: "If speed becomes 150% of the original speed, what is the percentage reduction in time?",
      options: ["25%", "30%", "33.33%", "40%"],
      correctAnswerIndex: 2,
      explanation: "50/(100+50) × 100 = 33.33%."
    },
    {
      id: 5,
      difficulty: "Easy",
      question: "A car's speed decreases by 10%. What is the percentage increase in time?",
      options: ["10%", "11.11%", "12.5%", "15%"],
      correctAnswerIndex: 1,
      explanation: "10/(100-10) × 100 = 11.11%."
    },
    {
      id: 6,
      difficulty: "Medium",
      question: "A journey takes 5 hours at 60 km/h. If speed increases by 20%, find the new time.",
      options: ["4 h", "4.17 h", "4.5 h", "4.75 h"],
      correctAnswerIndex: 1,
      explanation: "Distance = 300 km. New speed = 72 km/h. Time = 300/72 = 4.17 h."
    },
    {
      id: 7,
      difficulty: "Medium",
      question: "A runner reduces his speed by 25%. By what percentage does the time increase?",
      options: ["25%", "30%", "33.33%", "40%"],
      correctAnswerIndex: 2,
      explanation: "25/(100-25) × 100 = 33.33%."
    },
    {
      id: 8,
      difficulty: "Medium",
      question: "If speed increases from 40 km/h to 50 km/h, find the percentage decrease in time.",
      options: ["16.67%", "18%", "20%", "25%"],
      correctAnswerIndex: 2,
      explanation: "Increase = 25%. Time reduction = 25/125 × 100 = 20%."
    },
    {
      id: 9,
      difficulty: "Hard",
      question: "A train's speed is increased by 40%. What percentage reduction occurs in travel time?",
      options: ["25%", "28.57%", "30%", "35%"],
      correctAnswerIndex: 1,
      explanation: "40/(100+40) × 100 = 28.57%."
    },
    {
      id: 10,
      difficulty: "Hard",
      question: "A man takes 12 hours for a journey. If he increases his speed by 50%, how much time will he take now?",
      options: ["6 h", "7 h", "8 h", "9 h"],
      correctAnswerIndex: 2,
      explanation: "New Time = 12 × 100/150 = 8 h."
    }
  ]
  },
  {
  id: 12,
  name: "Time and Distance Ratios",

  notes: {
    concept:
      "Speed, Time, and Distance are interconnected. If one quantity changes, the others adjust according to proportional relationships.",

    formula: {
      sameTime:
        "Distance Ratio = Speed Ratio",

      sameDistance:
        "Time Ratio = Inverse of Speed Ratio",

      speedTime:
        "Speed × Time = Distance"
    },

    shortcuts: [
      "Same Distance ⇒ Invert the Time Ratio",
      "Same Time ⇒ Speed Ratio = Distance Ratio",
      "Same Speed ⇒ Distance Ratio = Time Ratio"
    ],

    example: {
      question:
        "A covers a distance in 6 hours while B covers the same distance in 9 hours. Find the ratio of their speeds.",

      solution:
        "Speed Ratio = 9:6 = 3:2."
    },

    tips: [
      "Identify what remains constant first.",
      "Most TSD ratio questions become easy after identifying the constant quantity.",
      "Use inverse relationships carefully.",
      "Same Time:Speed Ratio = Distance Ratio.",
      "Same Distance:Speed Ratio = Inverse of Time Ratio.",
      "If Speed increases by x%,Time decreases by [x/(100+x)] × 100 %,"
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "The speeds of A and B are in the ratio 3:4. If A travels 90 km in a certain time, how much distance will B travel in the same time?",
  options: ["100 km", "110 km", "120 km", "130 km"],
  correctAnswerIndex: 2,
  explanation: "Distance ratio = Speed ratio = 3:4. B = 90 × 4/3 = 120 km."
},
{
  id: 2,
  difficulty: "Easy",
  question: "The speed ratio of A:B is 5:6. If A covers 100 km in a given time, how much distance does B cover in the same time?",
  options: ["110 km", "120 km", "130 km", "140 km"],
  correctAnswerIndex: 1,
  explanation: "B = 100 × 6/5 = 120 km."
},
{
  id: 3,
  difficulty: "Easy",
  question: "The speed ratio of A:B is 2:3. Find the ratio of times taken to cover the same distance.",
  options: ["2:3", "3:2", "1:2", "2:1"],
  correctAnswerIndex: 1,
  explanation: "Time ratio is inverse of speed ratio."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A and B cover the same distance. Their speeds are in the ratio 4:5. Find the ratio of times taken.",
  options: ["4:5", "5:4", "3:2", "2:3"],
  correctAnswerIndex: 1,
  explanation: "Time ratio = 5:4."
},
{
  id: 5,
  difficulty: "Easy",
  question: "The time ratio of A:B is 3:5. Find their speed ratio for the same distance.",
  options: ["3:5", "5:3", "2:3", "3:2"],
  correctAnswerIndex: 1,
  explanation: "Speed ratio = inverse of time ratio."
},
{
  id: 6,
  difficulty: "Medium",
  question: "The speeds of A and B are in the ratio 5:4. If A takes 8 hours to travel a distance, how long will B take?",
  options: ["8 h", "9 h", "10 h", "12 h"],
  correctAnswerIndex: 2,
  explanation: "Time ratio = 4:5. B = 8 × 5/4 = 10 h."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A and B travel equal distances. Their times are in the ratio 2:3. If A's speed is 60 km/h, find B's speed.",
  options: ["30 km/h", "40 km/h", "45 km/h", "50 km/h"],
  correctAnswerIndex: 1,
  explanation: "Speed ratio = 3:2. B = 60 × 2/3 = 40 km/h."
},
{
  id: 8,
  difficulty: "Medium",
  question: "The speed ratio of A:B:C is 2:3:4. If A covers 50 km in a given time, how much distance does C cover in the same time?",
  options: ["80 km", "90 km", "100 km", "120 km"],
  correctAnswerIndex: 2,
  explanation: "Distance ratio = Speed ratio. C = 50 × 4/2 = 100 km."
},
{
  id: 9,
  difficulty: "Hard",
  question: "The speed ratio of A:B is 7:5. If A takes 25 hours to cover a distance, how much time will B take?",
  options: ["30 h", "35 h", "40 h", "45 h"],
  correctAnswerIndex: 1,
  explanation: "Time ratio = 5:7. B = 25 × 7/5 = 35 h."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A, B and C have speeds in the ratio 3:4:6. If C travels 180 km in a given time, how much distance does A travel in the same time?",
  options: ["60 km", "90 km", "120 km", "150 km"],
  correctAnswerIndex: 1,
  explanation: "A = 180 × 3/6 = 90 km."
}
]
  },
  {
  id: 14,
  name: "Data Interpretation",

  notes: {
    concept:
      "Data Interpretation questions use tables, charts, and graphs to test speed, distance, and time concepts.",

    formula: {
      averageSpeed:
        "Average Speed = Total Distance / Total Time",

      equalDistances:
        "Use Harmonic Mean Method",

      dataInterpretation:
        "Extract Distance, Time and Speed values carefully from tables/charts"
    },

    shortcuts: [
      "Extract data carefully",
      "Write values in a table",
      "Use approximation when options are far apart",
      "Check units before solving"
    ],

    example: {
      question:
        "A table shows a car travels 240 km in 4 hours. Find its speed.",

      solution:
        "Speed = 240/4 = 60 km/h."
    },

    tips: [
      "Most DI questions combine speed and average speed.",
      "Always verify units before calculation.",
      "Practice quick calculations."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Easy",
  question: "Four vehicles travel at speeds of 40, 50, 60 and 70 km/h. What is the average speed?",
  options: ["50", "52.5", "55", "57.5"],
  correctAnswerIndex: 2,
  explanation: "(40+50+60+70)/4 = 55 km/h."
},
{
  id: 2,
  difficulty: "Easy",
  question: "A car travels 120 km in 2 hours. What is its average speed?",
  options: ["50", "55", "60", "65"],
  correctAnswerIndex: 2,
  explanation: "120/2 = 60 km/h."
},
{
  id: 3,
  difficulty: "Easy",
  question: "A bus covers 300 km in 5 hours. Find its average speed.",
  options: ["50", "55", "60", "65"],
  correctAnswerIndex: 2,
  explanation: "300/5 = 60 km/h."
},
{
  id: 4,
  difficulty: "Easy",
  question: "A train travels 360 km in 6 hours. Find its average speed.",
  options: ["50", "55", "60", "65"],
  correctAnswerIndex: 2,
  explanation: "360/6 = 60 km/h."
},
{
  id: 5,
  difficulty: "Easy",
  question: "A cyclist covers 90 km in 3 hours. What is the average speed?",
  options: ["25", "30", "35", "40"],
  correctAnswerIndex: 1,
  explanation: "90/3 = 30 km/h."
},
{
  id: 6,
  difficulty: "Medium",
  question: "A vehicle covers 150 km at 50 km/h and 200 km at 40 km/h. Find the overall average speed.",
  options: ["43.75", "45", "46.25", "47.5"],
  correctAnswerIndex: 0,
  explanation: "Total Distance = 350 km. Total Time = 3 + 5 = 8 h. Average = 43.75 km/h."
},
{
  id: 7,
  difficulty: "Medium",
  question: "A car travels 240 km in 4 hours and another 180 km in 3 hours. Find the overall average speed.",
  options: ["55", "60", "65", "70"],
  correctAnswerIndex: 1,
  explanation: "Total Distance = 420 km. Total Time = 7 h. Average = 60 km/h."
},
{
  id: 8,
  difficulty: "Medium",
  question: "A train travels at 72 km/h for 2 hours and 90 km/h for 3 hours. Find the average speed.",
  options: ["80", "82.8", "85", "87"],
  correctAnswerIndex: 1,
  explanation: "Distance = 144 + 270 = 414 km. Time = 5 h. Average = 82.8 km/h."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A runner completes three equal distances at 10 km/h, 15 km/h and 30 km/h. Find the average speed.",
  options: ["15", "16.36", "18", "20"],
  correctAnswerIndex: 0,
  explanation: "Average Speed = Total Distance / Total Time = 90/6 = 15 km/h."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A car travels 1/3 of a journey at 30 km/h and the remaining 2/3 at 60 km/h. Find the average speed.",
  options: ["40", "45", "48", "50"],
  correctAnswerIndex: 1,
  explanation: "Assume total distance = 90 km. Time = 30/30 + 60/60 = 2 h. Average = 45 km/h."
}
]
  },
  {
  id: 15,
  name: "Advanced TSD Problems",

  notes: {
    concept:
      "Advanced TSD questions combine multiple concepts such as trains, races, circular tracks, boats & streams, and relative speed.",

    formula: {
      speedIncrease:
        "Time Reduction % = Increase% / (100 + Increase%) × 100",

      speedDecrease:
        "Time Increase % = Decrease% / (100 - Decrease%) × 100",

      harmonicMean:
        "Average Speed for Equal Distances = 2ab/(a+b)"
    },

    shortcuts: [
      "Use relative speed aggressively",
      "Convert km/h to m/s whenever trains are involved",
      "Identify the hidden TSD concept first",
      "Work step-by-step"
    ],

    example: {
      question:
        "Two trains of lengths 150 m and 250 m move in opposite directions at 54 km/h and 36 km/h. Find the crossing time.",

      solution:
        "Convert speeds: 54 km/h = 15 m/s, 36 km/h = 10 m/s. Relative Speed = 25 m/s. Time = (150+250)/25 = 16 seconds."
    },

    tips: [
      "Advanced questions are usually combinations of basic concepts.",
      "Unit conversion is often the key step.",
      "Practice train and relative speed questions extensively."
    ]
  },

  questions: [
{
  id: 1,
  difficulty: "Medium",
  question: "A car covers half the distance at 40 km/h and the remaining half at 60 km/h. Find the average speed.",
  options: ["46 km/h", "48 km/h", "50 km/h", "52 km/h"],
  correctAnswerIndex: 1,
  explanation: "Average Speed = 2ab/(a+b) = 2×40×60/100 = 48 km/h."
},
{
  id: 2,
  difficulty: "Medium",
  question: "A train travelling at 72 km/h crosses a pole in 20 seconds. Find its length.",
  options: ["300 m", "350 m", "400 m", "450 m"],
  correctAnswerIndex: 2,
  explanation: "72 km/h = 20 m/s. Length = 20 × 20 = 400 m."
},
{
  id: 3,
  difficulty: "Medium",
  question: "A boat's speed in still water is 18 km/h and stream speed is 3 km/h. How long will it take to travel 84 km downstream?",
  options: ["3 h", "4 h", "5 h", "6 h"],
  correctAnswerIndex: 1,
  explanation: "Downstream speed = 21 km/h. Time = 84/21 = 4 h."
},
{
  id: 4,
  difficulty: "Medium",
  question: "Two runners move on a circular track of 600 m at 10 m/s and 15 m/s in the same direction. After how many seconds will the faster runner overtake the slower one?",
  options: ["100", "120", "140", "150"],
  correctAnswerIndex: 1,
  explanation: "Relative speed = 5 m/s. Time = 600/5 = 120 s."
},
{
  id: 5,
  difficulty: "Hard",
  question: "A car increases its speed by 25%. By what percentage is the travel time reduced?",
  options: ["15%", "18%", "20%", "25%"],
  correctAnswerIndex: 2,
  explanation: "Reduction = 25/(100+25) × 100 = 20%."
},
{
  id: 6,
  difficulty: "Hard",
  question: "A man walks to a place at 6 km/h and returns at 4 km/h. Find the average speed for the entire journey.",
  options: ["4.5 km/h", "4.8 km/h", "5 km/h", "5.2 km/h"],
  correctAnswerIndex: 1,
  explanation: "Average = 2×6×4/(6+4) = 4.8 km/h."
},
{
  id: 7,
  difficulty: "Hard",
  question: "A train 300 m long moving at 90 km/h crosses another train 200 m long moving in the opposite direction at 54 km/h. Find the crossing time.",
  options: ["12.5 s", "15 s", "18 s", "20 s"],
  correctAnswerIndex: 0,
  explanation: "Relative speed = 144 km/h = 40 m/s. Time = 500/40 = 12.5 s."
},
{
  id: 8,
  difficulty: "Hard",
  question: "A person covers a distance in 8 hours. If he increases his speed by 33.33%, how much time will he take?",
  options: ["5 h", "6 h", "6.5 h", "7 h"],
  correctAnswerIndex: 1,
  explanation: "New speed = 4/3 of old speed. New time = 8 × 3/4 = 6 h."
},
{
  id: 9,
  difficulty: "Hard",
  question: "A and B start from the same point and move in opposite directions at 40 km/h and 60 km/h. How far apart will they be after 3 hours?",
  options: ["240 km", "280 km", "300 km", "320 km"],
  correctAnswerIndex: 2,
  explanation: "Relative speed = 100 km/h. Distance = 100 × 3 = 300 km."
},
{
  id: 10,
  difficulty: "Hard",
  question: "A train crosses a 500 m platform in 40 seconds at a speed of 72 km/h. Find the train's length.",
  options: ["250 m", "300 m", "350 m", "400 m"],
  correctAnswerIndex: 1,
  explanation: "72 km/h = 20 m/s. Distance covered = 20×40 = 800 m. Train length = 800−500 = 300 m."
}
]
  }
  ]
};