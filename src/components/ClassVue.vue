<template>
   <h1 class="h1">Heading 1</h1>
   <h1 class="h2" v-bind:class="status">Heading 2</h1>
   <h1 v-bind:class="isPromoted && 'h3'">Heading 3</h1>
   <h1 v-bind:class="isSoldOut ? 'sold-out' : 'new'">Heading 4</h1>
   <h1 v-bind:class="['h2', 'xyz']">Heading 5</h1>
   <h1 v-bind:class="[isPromoted && 'promoted', !isSoldOut ? 'sold-out': 'new']">Heading 6</h1>
   <h1 v-bind:class="{
       'promoted': isPromoted,
       'sold-out': isSoldOut,
       'new': !isSoldOut

   }">Heading 7</h1>
   <h1 class="h1">Heading 8</h1>
</template>
<script>
export default{
    name: 'ClassVue',
    data(){
        return{
            status: 'Hello',
            isPromoted: true,
            isSoldOut: true,
        }
    }
}
</script>
<style>
    .h1{
        color: rgb(0, 255, 166)
    }
     .h2{
        color: rgb(47, 0, 255)
    }
     .h3{
        color: rgb(255, 85, 0)
    }
    .sold-out{
        color: red
    }
    .new{
        color: green
    }
    .xyz{
        font-weight: bold;
    }
</style>