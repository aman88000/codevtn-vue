<template>
<div>
    <h3>Get HTTP request on page load  to show data in vue js</h3>
    <!-- <button v-show="dataFlag" @click.prevent="getData">Get Data</button> -->
    <div v-for="post in posts" :key="post.id">
        <h3>{{post.title}}</h3>
        <p>{{post.body}}</p>
        <hr />
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'GetDataOnPageLoad',
    created() {
        this.getData()
    },
    data() {
        return {
            posts: [],
            // dataFlag: true
        }
    },
    methods: {
        getData() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    console.log(response.data)
                    this.posts = response.data
                    this.dataFlag = false
                })
                .catch((error) => console.log('error', error))
        }
    }

}
</script>

<style scoped>

</style>
