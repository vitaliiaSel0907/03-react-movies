// src/services/movieService.ts
import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

//  API
interface SearchMoviesResponse {
  results: Movie[];
}

export async function searchMovies(query: string): Promise<Movie[]> {
  try {
    const response = await axios.get<SearchMoviesResponse>(API_URL, {
      params: { query },
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error in searchMovies:", error);
    return [];
  }
}
