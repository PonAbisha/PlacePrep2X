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

  questions: []
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

  questions: []
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
        "Relative Speed = Sum of Speeds"
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

  questions: []
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

  questions: []
  },
  {
  id: 5,
  name: "Train Crossing Pole",

  notes: {
    concept:
      "When a train crosses a pole, only the length of the train is considered as the distance covered.",

    formula: {
      time:
        "Time = Length of Train / Speed",

      speed:
        "Speed = Length of Train / Time"
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

  questions: []
  },
  {
  id: 6,
  name: "Train Crossing Platform",

  notes: {
    concept:
      "When a train crosses a platform, the total distance covered is the sum of the train length and platform length.",

    formula: {
      distance:
        "Distance = Length of Train + Length of Platform",

      time:
        "Time = Total Distance / Speed"
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

  questions: []
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
        "Time = (Length₁ + Length₂) / (Speed₁ - Speed₂)"
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
      "Very common placement aptitude pattern."
    ]
  },

  questions: []
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

  questions: []
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

      equalDistances:
        "Average Speed = (2ab)/(a+b)"
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

  questions: []
  },
  {
  id: 10,
  name: "Circular Track Problems",

  notes: {
    concept:
      "Circular track problems involve runners moving around a circular path. Relative speed determines meeting and overtaking times.",

    formula: {
      sameDirection:
        "Time to Overtake = Circumference / Difference of Speeds",

      oppositeDirection:
        "Time to Meet = Circumference / Sum of Speeds"
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

  questions: []
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

      lead:
        "Lead Distance = (Difference in Speed / Faster Speed) × Total Distance"
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

  questions: []
  },
  {
  id: 12,
  name: "Time and Distance Ratios",

  notes: {
    concept:
      "Speed, Time, and Distance are interconnected. If one quantity changes, the others adjust according to proportional relationships.",

    formula: {
      sameDistance:
        "Speed Ratio = Inverse Time Ratio",

      sameTime:
        "Speed Ratio = Distance Ratio",

      sameSpeed:
        "Distance Ratio = Time Ratio"
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
      "Use inverse relationships carefully."
    ]
  },

  questions: []
  },
  {
  id: 12,
  name: "Time and Distance Ratios",

  notes: {
    concept:
      "Speed, Time, and Distance are interconnected. If one quantity changes, the others adjust according to proportional relationships.",

    formula: {
      sameDistance:
        "Speed Ratio = Inverse Time Ratio",

      sameTime:
        "Speed Ratio = Distance Ratio",

      sameSpeed:
        "Distance Ratio = Time Ratio"
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
      "Use inverse relationships carefully."
    ]
  },

  questions: []
  },
  {
  id: 14,
  name: "Data Interpretation",

  notes: {
    concept:
      "Data Interpretation questions use tables, charts, and graphs to test speed, distance, and time concepts.",

    formula: {
      speed:
        "Speed = Distance / Time",

      distance:
        "Distance = Speed × Time",

      average:
        "Average Speed = Total Distance / Total Time"
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

  questions: []
  },
  {
  id: 15,
  name: "Advanced TSD Problems",

  notes: {
    concept:
      "Advanced TSD questions combine multiple concepts such as trains, races, circular tracks, boats & streams, and relative speed.",

    formula: {
      speed:
        "Speed = Distance / Time",

      relative:
        "Relative Speed = Sum or Difference of Speeds",

      train:
        "Time = Total Distance / Relative Speed"
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

  questions: []
  }
  ]
};