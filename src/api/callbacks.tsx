import axios from "axios";

export const getTrendingRepositories: any = () => {
  return axios.get("https://gh-trending-api.herokuapp.com/repositories");
};

export const getTrendingDevelopers: any = () => {
  return axios.get("https://gh-trending-api.herokuapp.com/developers");
};
