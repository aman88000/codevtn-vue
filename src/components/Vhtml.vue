<template>
    <div v-html="tag"></div>
</template>
<script>
export default{
    name: 'V-Html',
    data(){
        return{
            tag: '<b>Aamn Deep Singh</b>'
        }
    }
}
</script>