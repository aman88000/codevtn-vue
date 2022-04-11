<template>
    <div>
        <h3>Template refs using in vue js</h3>
        <input type="text"  ref="inputRef"/>
        <TabA ref="TabArefs" />
    </div>
</template>

<script>
import TabA from './TabA.vue'
    export default {
        name: 'TemplateRefs',
        components:{
            TabA
        },
        mounted(){
            this.$refs.inputRef.focus()
            console.log(this.$refs.TabArefs)
        }
    }
</script>

<style scoped>

</style>