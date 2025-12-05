import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";

export async function searchMovies(query: string): Promise<Movie[]> {
  try {
    const response = await fetch(`${API_URL}?query=${encodeURIComponent(query)}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch movies from TMDB");
    }

    const data = await response.json();

    return data.results || [];
  } catch (error) {
    console.error("Error in searchMovies:", error);
    return [];
  }
}
