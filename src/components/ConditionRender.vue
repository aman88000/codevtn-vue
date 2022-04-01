<template>
    <h2>Conditional Rendering in Vue js</h2>
    <h2 v-if="num === 0">Number is zero</h2>
    <h2 v-else-if="num > 0">Number is positive</h2>
    <h2 v-else-if="num < 0">Number is Negative</h2>
    <h2 v-else>Number is not zero</h2>

    <template v-if="display">
        <h2>Aman</h2>
        <h2>Deep</h2>
        <h2>Singh</h2>
    </template>
</template>
<script>

export default {
   name: 'ConditionRender',
   data(){
       return {
           num : 5,
           display: true
       }
   }
}
</script>
