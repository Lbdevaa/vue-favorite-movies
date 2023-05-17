<template>
    <main>
        <div class="movie">
            <img :src="`${prefixUrl}/${movie.poster_path}`" :alt="movie.original_title" class="movie-img">
            <div class="">
                <div class="movie-name">
                    {{ movie.original_title }}({{ movie.release_date }})
                </div>
                <span class="movie-overview">{{ movie.overview }}</span>
            </div>
        </div>
    </main>
</template>

<script setup>
    const prefixUrl = 'https://loremflickr.com'
    const props = defineProps({
        movie:{
            type: Object,
            required: true,
            default: ()=>{}
        }
    })
</script>

<style lang="css" scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-buttons-watched {
  color: #fff;
  background: #1eb4c3;
}

.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}

.movie-buttons-delete {
  color: #fff;
  background: #ff2a2a;
}
</style>