<template>
    <div>
        <h2>Composition Parent props send to child {{firstName}} {{lastName}} </h2>
        <h2>Composition Parent props send to child {{fullName}} </h2> 
    </div>
</template>

<script>
import {computed} from 'vue'
    export default {
        name: 'CompositionChildProp',
        setup(props){
          const fullName =  computed(()=>{
                return `${props.firstName}  ${props.lastName}`
            })

            return {
                fullName
            }
        },
        props: ['firstName', 'lastName']
    }
</script>

<style scoped>

</style>