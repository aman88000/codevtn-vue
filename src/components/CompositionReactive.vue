<template>
    <div>
        <h3>Reactive in Composition API  using in Vue js</h3>
        <h3>optional API- {{o_name}}</h3>
        <h3>composition API- {{c_name}}</h3>
        <h3>composition API- {{greet}}</h3>
        <h3>composition API Reactive Data- {{reactiveObj.fristName}} {{reactiveObj.lastName}} {{reactiveObj.srName}}</h3>
    </div>
</template>

<script>
import {ref, reactive} from 'vue'
    export default {
        name: 'CompositionReactive',
        setup(){
            const c_name = ref('deep')
            const greet = `Hello ${c_name.value = 'AMAN DEEP'}`
        const reactiveObj =    reactive({
                fristName: 'aman',
                lastName: 'deep',
                srName: 'channi'
            })
            return {
                c_name,
                greet, 
                reactiveObj
            }
        },

        data(){
            return{
                o_name: 'aman'
            }
        }
    }
</script>

<style scoped>

</style>