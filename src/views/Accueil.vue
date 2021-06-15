<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return{
      film: null,
    }
  },
  mounted() {
    axios
    .get('https://api.themoviedb.org/3/movie/popular?api_key=74e966943763d204227a4f524cc7700f&language=fr')
    .then((response) => { 
      this.film = response;
      console.log(this.film);
      });
},
}
</script>
