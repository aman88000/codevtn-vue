<template>
    <div v-bind:id="heading">Bind id to this Div</div>
    <div 
    :id="heading">Bind id to this Div</div>
    <button v-bind:disabled="disabled">ADD</button>
</template>
<script>
export default{
    name: 'V-Bind',
    data(){
        return{
            heading: 'main',
            disabled: true
        }
    }
}
</script>