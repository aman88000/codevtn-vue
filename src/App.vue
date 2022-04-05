<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Vhtml />
  <VBind /> -->
  <!-- <ClassVue /> -->
  <!-- <ConditionRender /> -->
  <!-- <ListRenderVFor /> -->
  <ConditionalListRender />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Vhtml from './components/Vhtml.vue'
// import VBind from './components/VBind.vue'
// import ClassVue from './components/ClassVue.vue'
// import ConditionRender from './components/ConditionRender.vue'
// import ListRenderVFor from './components/ListRenderVFor.vue'
import ConditionalListRender from './components/ConditionalListRender.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Vhtml,
    // VBind,
    // ClassVue,
    // ConditionRender,
    // ListRenderVFor,
    ConditionalListRender,

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
