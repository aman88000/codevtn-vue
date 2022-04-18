<template>
    <div>
        <h3>Child Component C </h3>
        <h3>Child Component username {{userName}} </h3>
        <h3>Child Component composition name {{c_name}} </h3>
        <h3>Child Component composition name {{c_count}} </h3>
        <h3>Child Component composition name {{firstName}} {{lastName}} </h3>
            <button @click="c_incrementCount">Increment count child A</button>
    </div>
</template>

<script>
import {inject, toRefs} from 'vue'
    export default {
        name: 'ChildC',
        setup(){

         const c_name =   inject('c_name', 'default value')
         const c_count=   inject('c_count', 1)
         const c_fullName =   inject('c_fullName', {})
         const c_incrementCount =   inject('c_incrementCount')
            return {
                c_name,
                c_count,
                ...toRefs(c_fullName),
                c_incrementCount
                 
            }
        },

        inject: ['userName']
    }
</script>

<style scoped>

</style>