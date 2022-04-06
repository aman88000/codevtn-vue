<template>
<h2>V-once Directive in Vue js</h2>
<br />
<hr />
<br />
<br />
<h2 v-once>{{name}}</h2>
<button @click="name = 'batman'">Change Name</button>
</template>
<script>
export default{
    name: 'OnceVue',
    data(){
        return {
             name: 'Aman',
        }
    },
    methods: {
    
    }

}
</script>