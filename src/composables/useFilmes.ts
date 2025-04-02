import { ref, onMounted } from "vue";

export default function useFilmes() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;

  const filmes = ref<any[]>([]);
  const loading = ref(true);

  onMounted(async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      filmes.value = data.results || [];
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      loading.value = false;
    }
  });

  return { filmes, loading };
}
