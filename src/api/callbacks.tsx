import githubTrends from "github-trends-api";

export const getTrendingRepositories = () => {
  return githubTrends({ section: "repositories", since: "weekly" });
};
