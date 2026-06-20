export const getLeetCodeStats = async (
  username
) => {
  const response = await fetch(
    "https://leetcode.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
query userProfile($username: String!) {
 matchedUser(username: $username) {
   username

   submitStats {
     acSubmissionNum {
       difficulty
       count
     }
   }

   profile {
     ranking
     reputation
   }
 }
}
`,
        variables: {
          username,
        },
      }),
    }
  );

  const data = await response.json();

  return data.data?.matchedUser;
};