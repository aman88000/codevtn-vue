<template>
    <div>
        <h2>Componet A in vue js</h2>
        <ComponentB />
    </div>
</template>

<script>
import ComponentB from './ComponentB.vue'
    export default {
        name: 'ComponentA',
        components: {
            ComponentB,
        }
    }
</script>

<style scoped>

</style>