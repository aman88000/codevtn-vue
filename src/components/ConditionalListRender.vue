<template>
    <template v-for="name in names" :key="name">
        <h2 v-if="name === 'aman'">{{name}}</h2>
    </template>
</template>
<script>
export default{
    name: 'ConditionalListRender',
    data(){
        return {
            names: ['aman', 'happy', 'vishal'],
           
        }
    }
}
</script>