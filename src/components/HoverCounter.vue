<template>
    <div>
<h3 @mouseover="incrementCounter">Hover Counter value {{count}}</h3>

    </div>
</template>

<script>
import CounterMixin from '../mixins/Counter'
    export default {
        name: 'HoverCounter',
        mixins: [CounterMixin]
       
    }
</script>

<style scoped>

</style>