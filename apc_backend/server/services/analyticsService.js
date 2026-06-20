// MongoDB imports will be added as needed

export const calculateReadiness =
  async (userId) => {
    const { rows: dsa } = await query(
      `
      SELECT
      ROUND(
      AVG(
      solved::numeric/
      NULLIF(total,0)
      )*100,1
      ) avg
      FROM dsa_progress
      WHERE user_id=$1
    `,
      [userId]
    );

    const { rows: quiz } = await query(
      `
      SELECT
      ROUND(
      AVG(
      score::numeric/
      max_score
      )*100,1
      ) avg
      FROM quiz_attempts
      WHERE user_id=$1
    `,
      [userId]
    );

    const { rows: interview } =
      await query(
        `
      SELECT
      ROUND(
      AVG(avg_score)*10,
      1
      ) avg
      FROM interview_sessions
      WHERE user_id=$1
    `,
        [userId]
      );

    const coding =
      parseFloat(dsa[0]?.avg || 0);

    const quizzes =
      parseFloat(quiz[0]?.avg || 0);

    const interviews =
      parseFloat(
        interview[0]?.avg || 0
      );

    const overall = Math.round(
      coding * 0.4 +
        quizzes * 0.4 +
        interviews * 0.2
    );

    return {
      coding,
      quizzes,
      interviews,
      overall,
    };
  };