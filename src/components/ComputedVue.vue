<template>
<h2>ComputedVue property in Vue js</h2>
<br />
<hr />
<br />
<br />
<h2>Data value :{{firstName}} {{lastName}}</h2>
<h2>Computed value: {{fullName}}</h2>
<br />
<hr />
<br />
<h2>Data Total :{{items.reduce(((total, curr)=> total+curr.price), 0)}}</h2>
<h2>Computed Total: {{totalPirce}}</h2>
<button @click="items.push({id: 4,
                     title: 'Ipad',
                     price: 50})">Add Item</button>
</template>
<script>
export default{
    name: 'ComputedVue',
    data(){
        return {
             firstName: 'Aman',
             lastName: 'Deep',
             items: [
                 {
                     id: 1,
                     title: 'TV',
                     price: 100
                 },
                  {
                     id: 2,
                     title: 'Mobile',
                     price: 200
                 },
                  {
                     id: 3,
                     title: 'Laptop',
                     price: 300
                 }
             ]
        }
    },
    methods: {
    
    },
    computed: {
        fullName(){
            return `${this.firstName} ${this.lastName}`
        },
        totalPirce(){
            return  this.items.reduce(((total, curr)=> total+curr.price), 0)
        }
    }

}
</script>