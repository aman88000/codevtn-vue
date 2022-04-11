<template>
    <div>
<h3>Counter value {{count}}</h3>
<button @click="incrementCounter">Incremnet Counter</button>
    </div>
</template>

<script>
import CounterMixin from '../mixins/Counter'
    export default {
        name: 'CounterClick',
       mixins: [CounterMixin]
    }
</script>

<style scoped>

</style>