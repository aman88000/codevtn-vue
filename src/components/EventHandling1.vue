<template>
<h2>Event Handing using Click Event in Vue js</h2>
<br />
<hr />
<br />
<br />
<h2>{{name}}</h2>
<button v-on:click="name = 'Happy'">Change Name</button>
<br />
<hr />
<br />
<br />
<h2>{{count}}</h2>
<!-- <button v-on:click="count += 1">Incremnt</button>
<button v-on:click="count -= 1">Decrement</button> -->
<button v-on:click="increment(1)">Incremnt 1</button>
<button v-on:click="increment(5)">Incremnt 5</button>
<button v-on:click="decrement(1)">Decrement 1</button>
<button v-on:click="decrement(5)">Decrement 5</button>

<br />
<hr />
<br />
<br />
<h2 v-on:mouseover="count += 1">{{count}}</h2>
<!-- <button v-on:click="count += 1">Incremnt</button>
<button v-on:click="count -= 1">Decrement</button> -->
</template>
<script>
export default{
    name: 'EventHandling1',
    data(){
        return {
            name: 'aman',
            count: 0
           
        }
    },
    methods: {
        increment(num){
            this.count += num
        },
         decrement(num){
            this.count -= num
        }
        
    }
}
</script>