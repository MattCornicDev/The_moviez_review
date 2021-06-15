<template>
  <div class="home">
    <input type="text" placeholder="recherche" >
    <div id="affiche" :key="index" v-for="(film, index) in films">
      <h1> {{ film.title }} </h1>
      <img :src="url + film.poster_path" alt="Poster d'affiche">
    </div>
    
  </div>

  

</template>


<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return{
      films: null,
      url : "https://image.tmdb.org/t/p/original"

    }
  },
  mounted() {
    axios
    .get('https://api.themoviedb.org/3/movie/popular?api_key=74e966943763d204227a4f524cc7700f&language=fr')
    .then((response) => { 
      this.films = response.data.results;
      console.log(this.films);
      });
},
}
</script>
