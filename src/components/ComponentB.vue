<template>
    <div>
        <h2>Componet B in vue js</h2>
        <ComponentC />
    </div>
</template>

<script>
import ComponentC from './ComponentC.vue'
    export default {
        name: 'ComponentB',
        components: {
            ComponentC
        }
    }
</script>

<style scoped>

</style>