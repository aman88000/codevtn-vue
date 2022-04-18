<template>
    <div>
        <h2>Composition Parent props send to child {{firstName}} {{lastName}} </h2>
        <h2>Composition Parent props send to child {{fullName}} </h2> 
        <button type="button"  @click="callHero">Click me</button>
    </div>
</template>

<script>
import {computed} from 'vue'
    export default {
        name: 'CompositionChildProp',
        setup(props, context){
          const fullName =  computed(()=>{
                return `${props.firstName}  ${props.lastName}`
            })

            function callHero(){
                context.emit('callHero', fullName.value)
            }

            return {
                fullName, 
                callHero
            }
        },
        props: ['firstName', 'lastName']
    }
</script>

<style scoped>

</style>