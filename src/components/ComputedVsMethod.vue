<template>
<h2>Computed property VS Methods in Vue js</h2>
<br />
<hr />
<br />
<br />
<h2>Method Total :{{methodTotal()}}</h2>
<h2>Computed Total: {{totalPirce}}</h2>
<button @click="items.push({id: 4,
                     title: 'Ipad',
                     price: 50})">Add Item</button>
<br />
<br />
    <input type="text" v-model="contury" />
</template>
<script>
export default{
    name: 'ComputedVsMethod',
    data(){
        return {
             contury: '',
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
    methodTotal(){
          console.log('method methodTotal called')
         return  this.items.reduce(((total, curr)=> total+curr.price), 0)
    }
    },
    computed: {
        totalPirce(){
            console.log('Computed totalPrice called')
            return  this.items.reduce(((total, curr)=> total+curr.price), 0)
        }
    }

}
</script>