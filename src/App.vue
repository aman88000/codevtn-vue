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
  <!-- <ArticleVue id="my-article" title="Article Title" :likes="50"  :isPublished ="true" /> -->
  <!-- <h2>App Component also need to take value of username: {{name}}</h2>
  <ComponentA /> -->


  <!-- <button @click="showPopup = true">Open Popup</button> -->
  <!-- <Popup v-show="showPopup" :passFun="closePopup" /> -->
  <!-- <Popup v-show="showPopup" @close="getValuefromCloseEmit" /> -->
  
  <!-- <CustomInput v-model="inputValue" /> -->


  <!-- <SlotCard> </SlotCard>
  <SlotCard>Card Content</SlotCard>
  <SlotCard><h2>Card Content in H2 tags</h2> </SlotCard>
  <SlotCard> <img src="https://picsum.photos/200" /> </SlotCard>

  <SlotCard>
    <template v-slot:header>
      <h3>Header Content</h3>
    </template>
      <template v-slot:default>
     <p> Body content  </p>
    </template>
     <template v-slot:footer>
      <h3>Footer content</h3>
    </template>
  </SlotCard> -->


  <!-- <SlotProp>
    <template v-slot:default = SlotProps >
      {{SlotProps.firstName}} {{SlotProps.lastName}}
    </template>
  </SlotProp>
<hr />
  <SlotProp>
    <template v-slot:default = SlotProps >
      {{SlotProps.lastName}}, {{SlotProps.firstName}} 
    </template>
  </SlotProp>
<hr />
    <SlotProp>
    <template v-slot:default = SlotProps >
      {{SlotProps.firstName}} 
    </template>
  </SlotProp> -->


  <!-- <DynamicComponent /> -->

  <!-- <teleport to="#portal-root">
  <TeleportVue />
  </teleport> -->
  <!-- <GetHTTP /> -->

  <!-- <PostHTTP /> -->
  <!-- <GetDataOnPageLoad /> -->

  <!-- <TemplateRefs/> -->

  <!-- <CounterClick />
  <HoverCounter /> -->
  <!-- <CompositionAPI01 /> -->
  <!-- <CompositionReactive /> -->
  <CompositionToRefs />
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
// import ArticleVue from './components/ArticleVue.vue'
// import ComponentA from './components/ComponentA.vue'
// import Popup from './components/Popup.vue'
// import CustomInput from './components/CustomInput.vue'
// import SlotCard from './components/SlotCard.vue'
// import SlotProp from './components/SlotProps.vue'
// import DynamicComponent from './components/DynamicComponent.vue'
// import TeleportVue from './components/TeleportVue.vue'
// import GetHTTP from './components/GetHTTP.vue'
// import PostHTTP from './components/PostHTTP.vue'
// import GetDataOnPageLoad from './components/GetDataOnPageLoad.vue'
// import TemplateRefs from './components/TemplateRefs.vue'
// import CounterClick from './components/CounterClick.vue'
// import HoverCounter from './components/HoverCounter.vue'
// import CompositionAPI01 from './components/CompositionAPI01.vue'
// import CompositionReactive from './components/CompositionReactive.vue'
import CompositionToRefs from './components/CompositionToRefs.vue'

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
    // ArticleVue,
    // ComponentA,
    // Popup,
    // CustomInput,
    // SlotCard,
    // SlotProp,
    // DynamicComponent,
    // TeleportVue,
    // GetHTTP,
    // PostHTTP,
    // GetDataOnPageLoad,
    // TemplateRefs,
    // CounterClick,
    // HoverCounter,
    // CompositionAPI01,
    // CompositionReactive,
    CompositionToRefs,

  },
    data(){
    return{
      name: 'Aman Deep',
      showPopup: false,
      inputValue : ''
    }
  },
  methods: {
    closePopup(value){
      console.log('Child value ', value)
      this.showPopup = !this.showPopup
    },
    getValuefromCloseEmit(value){
      console.log('name:',  value)
       this.showPopup = false
    }
  },
  // if you want to use value in App component also than you can do like that 
  provide(){    
    return{
      userName: this.name
     
    }
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
