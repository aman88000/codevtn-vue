<template>
    <div>
        <h3>Ref in Composition API  using in Vue js</h3>
        <h3>optional API- {{o_name}}</h3>
        <h3>composition API- {{c_name}}</h3>
        <h3>composition API- {{greet}}</h3>
    </div>
</template>

<script>
import {ref} from 'vue'
    export default {
        name: 'CompositionAPI01',
        setup(){
            const c_name = ref('deep')
            const greet = `Hello ${c_name.value = 'AMAN DEEP'}`
            return {
                c_name,
                greet
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