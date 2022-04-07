<template>
<h2>Watchers Immediate and Deep in Vue js</h2>
<br />
<hr />
<br />
<br />
  <input type="text" v-model="movie" />
  <input type="text" v-model="movieInfo.title" />
  <input type="text" v-model="movieInfo.actor" />
  <button @click="movieList.push('Spiderman')">Add new Movie In list</button>
  <button @click="movieList = movieList.concat('Spiderman')">Add new Movie In list</button>
</template>
<script>
export default{
    name: 'WatcherImmediateDeep',
    data(){
        return {
          movie: 'Batman',
          movieInfo: {
              title: '',
              actor: ''
          },
          movieList: ['Batman', 'Superman']
        }
    },
    methods: {
      
    },
    computed: {       
    },
    watch: {
        movie: {
            handler(newValue){
                console.log(`API call with movie name  ${newValue}`)
            },
            immediate: true
        },
        movieInfo: {
            handler(newValue){
                 console.log(`API call with movie title  ${newValue.title} and API call with movie Actor ${newValue.actor}`)
            },
            deep: true,
        },
        movieList: {
            handler(newValue){
              console.log(`API call with movie List  ${newValue}`)  
            },
            // deep: true
        }
    }

}
</script>