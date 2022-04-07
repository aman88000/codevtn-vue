<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>

  <Vhtml />
  <VBind /> -->
  <!-- <ClassVue /> -->
  <!-- <ConditionRender /> -->
  <!-- <ListRenderVFor /> -->
  <!-- <ConditionalListRender /> -->
  <!-- <MethodVue /> -->
  <!-- <EventHandling1 /> -->
  <!-- <EventHandling2 /> -->
  <!-- <FormHandling1 /> -->
  <!-- <ModifiersVue /> -->
  <!-- <PreVue /> -->
  <!-- <OnceVue /> -->
  <!-- <ComputedVue /> -->
  <!-- <ComputedVsMethod /> -->
  <!-- <ComputedWithVFor /> -->
  <!-- <ComputedSetterGetter /> -->
  <!-- <WatchersVue /> -->
  <!-- <WatcherImmediateDeep /> -->
  <!-- <Greet name="Aman" />
  <Greet name="Happy" />
  <Greet name="Rahul" /> -->
  <ArticleVue id="my-article" title="Article Title" :likes="50"  :isPublished ="true" />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Vhtml from './components/Vhtml.vue'
// import VBind from './components/VBind.vue'
// import ClassVue from './components/ClassVue.vue'
// import ConditionRender from './components/ConditionRender.vue'
// import ListRenderVFor from './components/ListRenderVFor.vue'
// import ConditionalListRender from './components/ConditionalListRender.vue'
// import MethodVue from './components/MethodVue.vue'
// import EventHandling1 from './components/EventHandling1.vue'
// import EventHandling2 from './components/EventHandling2.vue'
// import FormHandling1 from './components/FormHandling1.vue'
// import ModifiersVue from './components/ModifiersVue.vue'
// import PreVue from './components/PreVue.vue'
// import OnceVue from './components/OnceVue.vue'
// import ComputedVue from './components/ComputedVue.vue'
// import ComputedVsMethod from './components/ComputedVsMethod.vue'
// import ComputedWithVFor from './components/ComputedWithVFor.vue'
// import ComputedSetterGetter from './components/ComputedSetterGetter.vue'
// import WatchersVue from './components/WatchersVue.vue'
// import WatcherImmediateDeep from './components/WatcherImmediateDeep.vue'
// import Greet from './components/Greet.vue'
import ArticleVue from './components/ArticleVue.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Vhtml,
    // VBind,
    // ClassVue,
    // ConditionRender,
    // ListRenderVFor,
    // ConditionalListRender,
    // MethodVue,
    // EventHandling1,
    // EventHandling2,
    // FormHandling1,
    // ModifiersVue,
    // PreVue,
    // OnceVue,
    // ComputedVue,
    // ComputedVsMethod,
    // ComputedWithVFor,
    // ComputedSetterGetter,
    // WatchersVue,
    // WatcherImmediateDeep,
    // Greet,
    ArticleVue,

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
