import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY,
} from './config';

const defaultConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const apiSettings = {
    // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    fetchAsyncMovies: async (query, page) => {
      const api = query
        ? `${SEARCH_BASE_URL}${query}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}`;
        return (await fetch(api)).json(); 
    },

    fetchAsyncMovie: async movieId => {
      const api = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      return (await fetch(api)).json();
    },

    fetchAsyncCredits: async movieId => {
      const api = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      return (await fetch(api)).json();
    }
};

// console.log(apiSettings)

export default apiSettings;