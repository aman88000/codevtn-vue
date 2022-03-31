<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Vhtml />
  <VBind /> -->
  <ClassVue />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Vhtml from './components/Vhtml.vue'
// import VBind from './components/VBind.vue'
import ClassVue from './components/ClassVue.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Vhtml,
    // VBind,
    ClassVue

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
