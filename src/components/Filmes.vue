<script setup lang="ts">
import useFilmes from '../composables/useFilmes';


const { filmes, loading } = useFilmes();
</script>

<template>
  <div class="filmes-container">
    <h1>Filmes Populares</h1>
    <p v-if="loading">Carregando...</p>
    <ul v-else class="filmes-list">
      <li v-for="filme in filmes" :key="filme.id" class="filme-item">
        <img
          :src="`https://image.tmdb.org/t/p/w200${filme.poster_path}`"
          :alt="filme.title"
        />
        <p>{{ filme.title }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped src="../styles/filmes.css"></style>
