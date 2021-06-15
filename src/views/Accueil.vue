<template>
  <div class="home">
    <div :key="index" v-for="(film, index) in films">
      <h1> {{ film.title }} </h1>
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
