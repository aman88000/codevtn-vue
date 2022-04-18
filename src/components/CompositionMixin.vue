<template>
    <div>
        <h2>Mixin use in composition API</h2>
        <button @click="incrementCounter">Count value {{count}}</button>

    </div>
</template>

<script>
// import CounterMixin from '../mixins/Counter'
import useCounter from '../composables/useCounter'
    export default {
        name: 'CompositionMixin',
        // mixins: [CounterMixin]

        setup(){
            const {count, incrementCounter} = useCounter(1, 5)

            return {
                count, 
                incrementCounter
            }
        }
    }
</script>

<style scoped>

</style>