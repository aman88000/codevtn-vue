<template>
    <div>
        <h3>Post HTTP request component to ADD data in vue js</h3>
        <form @submit.prevent="submitData">
              <div>
                <label for="userID">User ID</label>
                <input type="text" id="userID" v-model="postData.userID" />
            </div>
            <div>
                <label for="title">Post Title</label>
                <input type="text" id="title" v-model="postData.title" />
            </div>
             <div>
                <label for="body">Post Body</label>
                <input type="text" id="body" v-model="postData.body" />
            </div>
                    <button type="submit">Submit Data</button>
            </form>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'PostHTTP',
        data(){
            return {
                postData: {
                    userID: '',
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            submitData(){
            axios.post('https://jsonplaceholder.typicode.com/posts', this.postData)
            .then((response)=> console.log(response.data) )
            .catch((err)=>console.log('error', err))
                console.log('testing submitted Data')

            }
        }
    }
</script>

<style scoped>

</style>