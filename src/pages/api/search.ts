import axios from "axios";

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "beb6adab";

export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${query}&type=movie`
    );
    return response?.data?.Search;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};
