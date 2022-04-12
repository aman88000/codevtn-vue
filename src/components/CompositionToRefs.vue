<template>
    <div>
        <!-- <h3>Composition Reactive Reference how to work in vue js </h3>
        <h3>Composition Direct using name value - {{name}}</h3>
        <h3>Composition get c_name value using ref - {{c_name}}</h3>
        <h3>Composition get reactuveObj value using ref - {{reactiveObj.fname}} {{reactiveObj.lname}}</h3> -->
        <h3>Composition get reactuveObj value using ref - {{fname}} {{lname}}</h3>

    </div>
</template>

<script>
// import { ref, reactive, toRefs } from 'vue'
import { reactive, toRefs } from 'vue'
    export default {
        name: 'CompositionToRefs',
        setup(){
            // let name = 'aman'
            // const c_name = ref('aman')
            // const reactiveObj = reactive({
            //     fname: 'aman',
            //     lname: 'deep'
            // })
             const state = reactive({
                fname: 'aman',
                lname: 'deep'
            })




            setTimeout(()=>{
                // name = 'deep';
                // c_name.value = 'Deep'   // reactive reference value 
                // reactiveObj.fname = 'mannu';
                // reactiveObj.lname = 'channi'
                 state.fname = 'mannu';
                state.lname = 'channi'

            }, 2000)

            return toRefs(state)

            // return {
            //     name,
            //     c_name,
            //     reactiveObj,
            //     fname: state.fname,
            //     lname: state.lname
            // }
        }
        
    }
</script>

<style scoped>

</style>