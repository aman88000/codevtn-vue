<template>
    <div>
        <h2>Composition Parent props send to child </h2>
        <input type="text" placeholder="First Name" v-model="firstName" /> <br /><br />
        <input type="text" placeholder="Last Name" v-model="lastName" />
        <CompositionChildProp :firstName="firstName" :lastName="lastName" @callHero="callHero" />

    </div>
</template>

<script>
import CompositionChildProp from './CompositionChildProp.vue'
import {ref } from 'vue'
    export default {
        name: 'CompositionParentProp',
        components:{
            CompositionChildProp
        },
        setup(){
            const firstName = ref('')
            const lastName = ref('')

            function callHero(fullNamedata){
                alert(fullNamedata)
            }
            return {
                firstName,
                lastName,
                callHero
            }
        }
    }
</script>

<style scoped>

</style>