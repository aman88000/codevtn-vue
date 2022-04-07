<template>
    <h3 v-for="name in names" :key="name.first">
       <slot :firstName="name.first"  :lastName="name.last"></slot>
    </h3>
</template>

<script>
    export default {
        name: 'SlotProp',
        data(){
            return {
                names: [
                {
                    first: 'aman',
                    last: 'deep'
                },
                {
                    first: 'happy',
                    last: 'singh'
                },
                {
                    first: 'vishal',
                    last: 'sharma'
                }
            ],
            }
        }
    }
</script>

<style scoped>

</style>