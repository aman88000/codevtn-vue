<template>
    <div>
        <h2>template ref in composition API</h2>
        <input type="text" ref="inputRef" />

    </div>
</template>

<script>
import {ref, onMounted} from 'vue'
    export default {
        name: 'CompositionTemplateRef',
        setup(){
            const inputRef = ref(null)

            onMounted(()=>{
                inputRef.value.focus()
            })

            return {
                inputRef
            }
        },
        // mounted(){
        //     this.$refs.inputRef.focus()
        // }
    }
</script>

<style scoped>

</style>