import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';

// movieStore - уникальный id

// export const useMovieStore = defineStore('movieStore', {
//   state: () => ({
//     activeTab: 2,
//     movies: [
//       // {
//       //   id: 1,
//       //   original_title: 'Spider-Man',
//       //   overview:
//       //     'After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.',
//       //   poster_path: '320/240/movie',
//       //   release_date: '2002-05-01',
//       //   isWatched: true,
//       // },
//       // {
//       //   id: 2,
//       //   original_title: 'The Batman',
//       //   overview:
//       //     'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
//       //   poster_path: '320/241/movie',
//       //   release_date: '2022-03-01',
//       //   isWatched: false,
//       // },
//     ],
//   }),
//   getters: {
//     watchedMovies() {
//       return this.movies.filter((el) => el.isWatched);
//     },
//     totalCountMovies() {
//       return this.movies.length;
//     },
//   },
//   actions: {
//     setActiveTab(id) {
//       this.activeTab = id;
//     },
//     toggleWatched(id) {
//       const idx = this.movies.findIndex((el) => el.id === id);
//       this.movies[idx].isWatched = !this.movies[idx].isWatched;
//     },
//     deleteMovie(id) {
//       this.movies = this.movies.filter((el) => el.id !== id);
//     },
//   },
// });

export const useMovieStore = defineStore('movieStore', () => {
  const movies = ref([]);
  const activeTab = ref(2);

  const moviesInLocalStorage = localStorage.getItem('movies');
  if (moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)._value;
  }

  // геттеры оборачиваются в computed
  const watchedMovies = computed(() =>
    movies.value.filter((el) => el.isWatched)
  );

  const totalCountMovies = computed(() => movies.value.length);

  const setActiveTab = (id) => {
    activeTab.value = id;
  };

  const toggleWatched = (id) => {
    const idx = movies.findIndex((el) => el.id === id);
    movies.value[idx].isWatched = !movies.value[idx].isWatched;
  };

  const deleteMovie = (id) => {
    movies.value = movies.value.filter((el) => el.id !== id);
  };

  // отслеживание изменений movies
  watch(
    () => movies,
    (state) => {
      localStorage.setItem('movies', JSON.stringify(state));
    },
    // глубокое отслеживание изменения вложенных свойств объекта или элементов массива.
    { deep: true }
  );

  return {
    movies,
    activeTab,
    watchedMovies,
    totalCountMovies,
    toggleWatched,
    deleteMovie,
    setActiveTab,
  };
});
