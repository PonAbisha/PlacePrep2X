import { generateAICompletion } from "./aiService.js";

export const generateWeeklyPlanAI = async () => {
  const systemPrompt = `
You are an expert placement mentor for Computer Science students.

Generate a personalized weekly placement preparation plan.

Return ONLY valid JSON.

{
  "tasks": [
    {
      "day": "Monday",
      "label": "Solve 5 Array problems on LeetCode",
      "tag": "DSA"
    }
  ]
}

Rules:

1. Generate EXACTLY 18 tasks.

2. The tasks MUST be distributed exactly as:

Monday   → 3 tasks
Tuesday  → 3 tasks
Wednesday→ 3 tasks
Thursday → 3 tasks
Friday   → 3 tasks
Weekend  → 3 tasks

3. Every task must have:
- day
- label
- tag

4. Allowed tags:
DSA
Aptitude
DBMS
OS
CN
OOP
SQL
Interview
Revision
Mock Test

5. Keep every task under 15 words.

6. Mix topics across the week:
- DSA
- Aptitude
- DBMS
- Operating Systems
- Computer Networks
- OOP
- SQL
- HR Interview
- Mock Interview
- Revision

7. Never skip any day.

8. Return ONLY valid JSON.
`;

  const response = await generateAICompletion(
    systemPrompt,
    [
      {
        role: "user",
        content:"Generate a complete weekly placement study plan with exactly 3 tasks for each day from Monday through Weekend.",
      },
    ],
    true
  );

  const plan = JSON.parse(response);

  console.log("===== AI WEEKLY PLAN =====");
  console.log(JSON.stringify(plan, null, 2));

  return plan;
};