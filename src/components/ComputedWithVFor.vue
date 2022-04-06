<template>
<h2>Computed property using for v-for list condition rendering  in Vue js</h2>
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


<br />
<hr />
<br />
<br />
<h2>List conditional rendering using v-if and template tag</h2>
<!-- <template v-for="item in items" :key="item.id"> 

<h2 v-if="item.price > 100">{{item.title}} {{item.price}}</h2>
</template> -->


<br />
<hr />
<br />
<br />
<h2>List conditional rendering using Computed property</h2>


<h2 v-for="item in expensiveItems" :key="item.id">{{item.title}} {{item.price}}</h2>
</template>
<script>
export default{
    name: 'ComputedWithVFor',
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
        },
        expensiveItems(){
            return this.items.filter(item => item.price > 100)
        }
    }

}
</script>