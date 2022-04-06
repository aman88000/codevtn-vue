<template>
<h2>Event Handing part 2 using Click Event in Vue js</h2>
<br />
<hr />
<br />
<br />
<h2>{{name}}</h2>
<!-- // first 1  -->
<button v-on:click="changeName">Change Name</button>    



<!-- // first 2  -->
<button v-on:click="changeName($event), increment(2, $event)">Change Name 2</button>  
<br />
<hr />
<br />
<br />
<h2>{{count}}</h2>
<!-- <button v-on:click="count += 1">Incremnt</button>
<button v-on:click="count -= 1">Decrement</button> -->
<button @click="increment(1, $event)">Incremnt 1</button>
<br />
<hr />
<br />
<br />
<!-- <h2 v-on:mouseover="count += 1">{{count}}</h2> -->
<!-- <button v-on:click="count += 1">Incremnt</button>
<button v-on:click="count -= 1">Decrement</button> -->
</template>
<script>
export default{
    name: 'EventHandling2',
    data(){
        return {
            name: 'aman',
            count: 0
           
        }
    },
    methods: {
        // changeName(event){     // first 1 
        //     this.name = 'batman'
        //     console.log(event)
        // },

        changeName(event){     // first 2 
            this.name = 'batman'
            console.log('changeName', event)
        },
        increment(num, event){
            this.count += num
            console.log('Event', event)
        },
         decrement(num){
            this.count -= num
        }
        
    }
}
</script>