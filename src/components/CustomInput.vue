<template>
   <h2>Custom input component and use v-model to get value in vue js</h2>
   <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
    export default {
        name: 'CustomInput',
        props: {
            modelValue: String
        }
    }
</script>

<style scoped>

</style>