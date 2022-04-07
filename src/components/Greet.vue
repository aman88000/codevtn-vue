<template>
  <h2>Component call in Vue js  {{name}}</h2>
</template>

<script>
    export default {
        name: 'GreetVue',
        props: ['name']
    }
</script>

<style scoped>

</style>