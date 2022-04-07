<template>
    <div>
        <h2>Componet C in vue js </h2>
        <h2>Componet C username : {{userName}} </h2>
    </div>
</template>

<script>
    export default {
        name: 'ComponentC',
        inject: ['userName']
    }
</script>

<style scoped>

</style>