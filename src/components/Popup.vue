<template>
    <div>
        <h1>Popup Model component</h1>
        <!-- <button @click="passFun('Testing Child Data')">Close Popup</button> -->
        <input type="text" v-model="name" />
        <button @click="$emit('close', name)">Close Popup</button>
    </div>
</template>

<script>
    export default {
        name: 'PopupVue',
        data(){
            return{
                name: ''
            }
        },

        // props:{
        //     passFun: Function
        // },
        emits: {
            close(value){
                if(!value){
                    return false
                }else{
                    return true
                }
            }
        }
    }
</script>

<style scoped>

</style>