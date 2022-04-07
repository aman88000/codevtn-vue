<template>
    <div>
        <h1>Popup Model component</h1>
        <button @click="passFun('Testing Child Data')">Close Popup</button>
    </div>
</template>

<script>
    export default {
        name: 'PopupVue',
        props:{
            passFun: Function
        }
    }
</script>

<style scoped>

</style>