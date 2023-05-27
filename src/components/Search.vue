<template>
    <form action="" @submit.prevent="searchStore.getMovies(searchMovie)">
        <input type="text" class="search-input" placeholder="Input movie" v-model="searchMovie" name="" id="">
    </form>

    <Loader v-if="searchStore.loader"/>
    <div v-else>
        <Movie v-for="movie of searchStore.movies" :key="movie.id" :movie="movie" :isSearch="true"/>
    </div>
</template>

<script setup>
    import Loader from './Loader.vue'
    import Movie from './Movie.vue'
    import {ref} from 'vue'
    import { useSearchStore } from '../stories/SearchStore';

    const searchStore = useSearchStore()
    const searchMovie = ref('')
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>