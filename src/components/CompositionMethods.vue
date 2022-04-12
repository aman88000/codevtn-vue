<template>
    <div>
        <h3>Compare both optional and Composition API menthods usage in vue js</h3>
        <h3>Optional API name - {{name}}</h3>
        <button @click="optionalNameChange">Change Name</button>

         <h3>Composition API name - {{c_name}}</h3>
        <button @click="compositionNameChange">Change Name</button>

         <h3>Composition API Reactive - {{fname}} {{lname}}</h3>
        <button @click="reactiveNameChange">Change Name</button>

    </div>
</template>

<script>
import { ref, reactive, toRefs} from 'vue'
    export default {
        name: 'CompositionMethods',
        setup(){
            const c_name = ref('c_aman')

              function compositionNameChange(){
                c_name.value = 'c_deep'
            }

            const state = reactive({
                fname: 'aman',
                lname: 'deep'
            })

            function reactiveNameChange(){
                state.fname = 'Mannu',
                state.lname = 'Singh'
            }
          

            return {
                c_name,
                compositionNameChange,
                ...toRefs(state),
                reactiveNameChange
            }
        },

        data(){
            return {
                name : 'aman'
            }
        },
        methods: {
            optionalNameChange(){
                this.name = 'Deep'
            }
        }
    }
</script>

<style scoped>

</style>