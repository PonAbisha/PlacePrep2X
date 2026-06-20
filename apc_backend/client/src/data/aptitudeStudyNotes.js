export const aptitudeStudyNotes = {
  "Percentages": {
    notes: `Percentages are a fundamental concept in aptitude, representing a fraction out of 100. They are widely used in various calculations like profit/loss, interest, discounts, and data interpretation.

Key Concepts:
1.  **Definition**: 'Per cent' means 'per hundred'. So, x% means x/100.
2.  **Conversion**:
    *   Fraction to Percentage: Multiply by 100. (e.g., 1/4 = 1/4 * 100% = 25%)
    *   Percentage to Fraction: Divide by 100. (e.g., 20% = 20/100 = 1/5)
3.  **Percentage Increase/Decrease**:
    *   Increase: New Value = Original Value * (1 + % Increase/100)
    *   Decrease: New Value = Original Value * (1 - % Decrease/100)
4.  **Percentage Change**: ((New Value - Original Value) / Original Value) * 100%
5.  **Successive Percentage Change**: If a value changes by x% and then by y%, the net change is (x + y + xy/100)%.

Understanding these concepts is crucial for solving problems efficiently.`,
    formulas: `1.  **x% of Y** = (x/100) * Y
2.  **Percentage Change** = [(Final Value - Initial Value) / Initial Value] * 100
3.  **Percentage Increase** = [(Increase in Value) / Original Value] * 100
4.  **Percentage Decrease** = [(Decrease in Value) / Original Value] * 100
5.  **If A is x% more than B**, then B is [x / (100 + x)] * 100% less than A.
6.  **If A is x% less than B**, then B is [x / (100 - x)] * 100% more than A.
7.  **Net Percentage Change (Successive)** = A + B + (AB/100) (where A and B are percentage changes)
8.  **Population Growth**: P_final = P_initial * (1 + R/100)^n (for n years)
9.  **Depreciation**: P_final = P_initial * (1 - R/100)^n (for n years)`,
    interviewPoints: [
      "Be able to quickly convert common fractions to percentages (e.g., 1/3 = 33.33%, 1/8 = 12.5%).",
      "Understand the difference between 'percentage of' and 'percentage point change'.",
      "Practice problems involving successive percentage changes, as they are common in campus placements.",
      "Be careful with base values when calculating percentage increase/decrease (e.g., 'A is 20% of B' vs 'A is 20% more than B')."
    ]
  },
  "Profit & Loss": {
    notes: `Profit and Loss is a critical topic in aptitude, dealing with the financial outcomes of transactions. It's essential for understanding business scenarios and is frequently tested.

Key Concepts:
1.  **Cost Price (CP)**: The price at which an article is purchased.
2.  **Selling Price (SP)**: The price at which an article is sold.
3.  **Profit**: When SP > CP. Profit = SP - CP.
4.  **Loss**: When CP > SP. Loss = CP - SP.
5.  **Marked Price (MP)**: The price listed on the article.
6.  **Discount**: Reduction offered on the Marked Price. Discount = MP - SP.

Problems often involve calculating profit/loss percentages, finding CP/SP given one and a percentage, or dealing with discounts.`,
    formulas: `1.  **Profit %** = (Profit / CP) * 100
2.  **Loss %** = (Loss / CP) * 100
3.  **SP** = CP * (100 + Profit%) / 100
4.  **SP** = CP * (100 - Loss%) / 100
5.  **CP** = (SP * 100) / (100 + Profit%)
6.  **CP** = (SP * 100) / (100 - Loss%)
7.  **Discount %** = (Discount / MP) * 100
8.  **SP** = MP * (100 - Discount%) / 100
9.  **False Weights**: If a shopkeeper uses 'x' grams instead of 'y' grams (y > x), then Profit % = [(y - x) / x] * 100`,
    interviewPoints: [
      "Understand the base for calculating profit/loss percentage (always CP).",
      "Be able to solve problems involving successive discounts or multiple transactions.",
      "Familiarize yourself with concepts like 'false weights' or 'dishonest shopkeepers'.",
      "Practice problems where CP or SP is unknown and needs to be derived from percentages."
    ]
  },
  // Add notes, formulas, and interview points for other topics here
  "Ratio & Proportion": {
    notes: `Ratio and Proportion is fundamental for comparing quantities and understanding their relationships. It forms the basis for many other aptitude topics.`,
    formulas: `1.  **Ratio A:B** = A/B
2.  **Compound Ratio** of (a:b) and (c:d) is (ac:bd)
3.  **Duplicate Ratio** of (a:b) is (a^2:b^2)
4.  **Sub-duplicate Ratio** of (a:b) is (√a:√b)
5.  **Triplicate Ratio** of (a:b) is (a^3:b^3)
6.  **Sub-triplicate Ratio** of (a:b) is (a^(1/3):b^(1/3))
7.  **Proportion**: a:b :: c:d => ad = bc (Product of extremes = Product of means)`,
    interviewPoints: [
      "Be comfortable with combining multiple ratios (e.g., A:B and B:C to find A:B:C).",
      "Understand direct and inverse proportion and their applications.",
      "Practice problems involving distribution of quantities based on ratios.",
      "Familiarize with concepts like mean proportional and third proportional."
    ]
  },
  "Time & Work": {
    notes: `Time and Work problems involve calculating the time taken by individuals or groups to complete a task, or the amount of work done in a given time.`,
    formulas: `1.  **Work = Time × Efficiency**
2.  If A can do a work in 'n' days, A's 1 day work = 1/n.
3.  If A's 1 day work = 1/n, A can finish the work in 'n' days.
4.  If A is 'x' times as good a workman as B, then A will take (1/x) of the time taken by B.
5.  **Men, Days, Hours (MDH) Formula**: M1D1H1/W1 = M2D2H2/W2 (where W is work done)`,
    interviewPoints: [
      "Understand the concept of 'work done per day/hour' (efficiency).",
      "Practice problems involving multiple people working together or leaving/joining mid-way.",
      "Familiarize with pipe and cistern problems, which are similar to time and work.",
      "Be able to handle scenarios where efficiency changes or is relative."
    ]
  },
  "Time Speed Distance": {
    notes: `Time, Speed, and Distance problems are fundamental and frequently appear in placement tests. They involve the relationship between these three quantities.`,
    formulas: `1.  **Distance = Speed × Time**
2.  **Speed = Distance / Time**
3.  **Time = Distance / Speed**
4.  **Conversion**: 1 km/hr = 5/18 m/s; 1 m/s = 18/5 km/hr
5.  **Average Speed**: Total Distance / Total Time
6.  **Relative Speed**:
    *   Same direction: |S1 - S2|
    *   Opposite direction: S1 + S2
7.  **Trains**: Time to cross a pole/man = Length of train / Speed. Time to cross a platform/bridge = (Length of train + Length of platform) / Speed.
8.  **Boats & Streams**:
    *   Speed Downstream = Speed of boat + Speed of stream
    *   Speed Upstream = Speed of boat - Speed of stream`,
    interviewPoints: [
      "Master unit conversions (km/hr to m/s and vice-versa).",
      "Understand relative speed concepts for trains and boats/streams.",
      "Practice problems involving average speed, especially when distances or times are equal.",
      "Be able to solve problems with varying speeds or stoppages."
    ]
  },
  "Probability": {
    notes: `Probability deals with the likelihood of an event occurring. It's a key topic for logical reasoning and decision-making.`,
    formulas: `1.  **P(E)** = (Number of Favorable Outcomes) / (Total Number of Possible Outcomes)
2.  **0 ≤ P(E) ≤ 1**
3.  **P(not E)** = 1 - P(E)
4.  **P(A or B)** = P(A) + P(B) - P(A and B) (for any two events)
5.  **P(A or B)** = P(A) + P(B) (for mutually exclusive events)
6.  **P(A and B)** = P(A) * P(B|A) (for dependent events)
7.  **P(A and B)** = P(A) * P(B) (for independent events)`,
    interviewPoints: [
      "Clearly define the sample space and favorable outcomes.",
      "Understand the difference between 'AND' and 'OR' events.",
      "Practice problems involving coins, dice, cards, and balls from bags.",
      "Familiarize with concepts of mutually exclusive and independent events."
    ]
  },
  "Number System": {
    notes: `The Number System is a foundational topic covering properties and operations of different types of numbers. It's crucial for basic arithmetic and advanced problem-solving.`,
    formulas: `1.  **Divisibility Rules**: (e.g., by 2, 3, 4, 5, 6, 8, 9, 10, 11)
2.  **Sum of first n natural numbers**: n(n+1)/2
3.  **Sum of squares of first n natural numbers**: n(n+1)(2n+1)/6
4.  **Sum of cubes of first n natural numbers**: [n(n+1)/2]^2
5.  **HCF (Highest Common Factor)** and **LCM (Least Common Multiple)**: Product of two numbers = HCF × LCM
6.  **Unit Digit Cyclicity**: (e.g., for powers of 2, 3, 7, 8)`,
    interviewPoints: [
      "Master divisibility rules for quick calculations.",
      "Understand properties of prime, composite, even, odd numbers.",
      "Practice problems involving HCF, LCM, and their applications.",
      "Be able to find unit digits of large powers and remainders."
    ]
  },
  "Data Interpretation": {
    notes: `Data Interpretation involves analyzing and drawing conclusions from data presented in various formats like tables, graphs (bar, pie, line), and charts.`,
    formulas: `1.  **Percentage Calculation**: (Part / Whole) * 100
2.  **Ratio**: Comparison of two quantities.
3.  **Average**: Sum of quantities / Number of quantities
4.  **Percentage Increase/Decrease**: [(Change) / Original] * 100`,
    interviewPoints: [
      "Carefully read the labels, units, and scales of the given data.",
      "Focus on approximation techniques to save time.",
      "Practice comparing different data sets and identifying trends.",
      "Be proficient in calculating percentages, ratios, and averages from raw data."
    ]
  }
};