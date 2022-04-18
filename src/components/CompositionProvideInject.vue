<template>
    <div>
    <h2>Provide and Inject using composition API in vue js</h2>
    <h3>Parent Component name {{name}}</h3>
    <h3>Parent Component count {{count}}</h3>
    <h3>Parent Component FullName {{firstName}} {{lastName}}</h3>
    <button @click="incrementCount">Increment count parent</button>
    <ChildA />
    </div>
</template>

<script>
import ChildA from './ChildA.vue'
import {provide, ref, reactive, toRefs} from 'vue'
    export default {
        name: 'CompositionProvideInject',
        components: {
            ChildA
        },
        setup(){

          
           const count = ref(0)

            function incrementCount (){
                count.value++
            }
           const state = reactive({
               firstName: 'Mannu',
               lastName: 'Singh'
           })

            provide('c_name', 'Deep')
            provide('c_count', count)
            provide('c_fullName', state)
            provide('c_incrementCount', incrementCount)

           return{
               count,
               ...toRefs(state),
               incrementCount
           }

        },
        data(){
            return {
                name: 'aman'
            }
        },
        provide(){
            return{
                userName: this.name
            }
        }
    }
</script>

<style scoped>

</style>