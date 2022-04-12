<template>
    <div>
        <h3>use of computed property in both options and composition API</h3>
        <h3>Options API </h3>
        <input type="text" placeholder="First Name" v-model="o_fname" />
        <input type="text" placeholder="Last Name" v-model="o_lname" />
        <h4>Option API Computed {{OptionfullName}}</h4>
        <hr />
        <h3>Composition API Using Ref </h3>
        <input type="text" placeholder="First Name" v-model="c_fname" />
        <input type="text" placeholder="Last Name" v-model="c_lname" />
        <h4>Composition API Computed ref {{CompositionfullName}}</h4>

                <h3>Composition API Using Reative </h3>
        <input type="text" placeholder="First Name" v-model="reactiveFname" />
        <input type="text" placeholder="Last Name" v-model="reactiveLname" />
        <h4>Composition API Computed using reactive {{reactiveFullName}}</h4>


    </div>
</template>

<script>
import {ref, computed, reactive, toRefs} from 'vue'
    export default {
        name: 'CompositionComputed',
        setup(){
            const c_fname = ref('')
            const c_lname = ref('')

            const state = reactive({
                reactiveFname: '',
                reactiveLname: ''
            })

          const CompositionfullName =  computed(function(){
                return `${c_fname.value} ${c_lname.value}`
            })

              const reactiveFullName =  computed(function(){
                    return `${state.reactiveFname} ${state.reactiveLname}`
                })
            return {
                c_fname,
                c_lname,
                CompositionfullName,
                ...toRefs(state),
                reactiveFullName
            }
        },
        data(){
            return {
                o_fname: '',
                o_lname: ''
            }
        },
        computed:{
         OptionfullName(){
                return `${this.o_fname} ${this.o_lname}`
            }
        }
    }
</script>

<style scoped>

</style>