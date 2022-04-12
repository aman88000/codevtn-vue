<template>
    <div>
    <h3>Use of V model in both options and Composition API in vue js</h3>
    <h3>Options API</h3>
    <input type="text" placeholder="First Name" v-model="o_fname" />
    <input type="text" placeholder="Last Name" v-model="o_lname" />


    <h3>Composition API ref</h3>
    <input type="text" placeholder="Enter Name" v-model="c_name" />
    <h3>Composition  API state</h3>
    <input type="text" placeholder="Enter Name" v-model="c_fname" />
    <input type="text" placeholder="Last Name" v-model="c_lname" />
    </div>
</template>

<script>
    import {ref, reactive, toRefs} from 'vue'
    export default {
        name: 'CompositionVModel',
        setup(){
            const c_name = ref('')
            const state = reactive({
                c_fname: '',
                c_lname: ''
            })

            return {
                c_name,
                ...toRefs(state)
            }
        },
        data(){
            return{
                o_fname: '',
                o_lname: ''
            }
        }
    }
</script>

<style scoped>

</style>