import { defineStore } from 'pinia';
// 682dfd9f382230a835552671c94449fb
const url =
  'https://api.themoviedb.org/3/search/movie?api_key=682dfd9f382230a835552671c94449fb&query=';

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(search) {
      this.loader = true;
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      this.movies = data.results;
      this.loader = false;
    },
  },
});
