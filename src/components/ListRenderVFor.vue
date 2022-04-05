<template>
    <h1>Listing Rendering using V-for Directive in Vue 3</h1>
    <h2 v-for="name in names" :key="name">{{name}}</h2>
    <h2 v-for="(name, index) in fullName" :key="name.first">{{index}} - {{name.first}} {{name.last}}</h2>
    <div v-for="detail in details" :key="detail.first">
        <h2>{{detail.first}} {{detail.last}}</h2>
        <h3 v-for="(hobby) in detail.hobbies" :key="hobby">
            {{hobby}}
        </h3>
    </div>
    <h2 v-for="(value, key, index) in info" :key="value">{{index}} {{key}} : {{value}}</h2>
<br /><br />
    <template v-for="name in names" :key="name">
        <h2>{{name}}</h2>
        <hr />

    </template>
</template>
<script>
export default{
    name: 'ListRenderVFor',
    data(){
        return {
            names: ['aman', 'happy', 'vishal'],
            fullName: [
                {
                    first: 'aman',
                    last: 'deep'
                },
                {
                    first: 'happy',
                    last: 'singh'
                },
                {
                    first: 'vishal',
                    last: 'sharma'
                }
            ],
            details: [
                {
                    first: 'aman',
                    last: 'deep',
                    hobbies: ['basketball', 'movies']
                },
                {
                    first: 'happy',
                    last: 'singh',
                    hobbies: ['cricket', 'gyming']
                },
                {
                    first: 'vishal',
                    last: 'sharma',
                     hobbies: ['reading', 'swimming']
                }
            ],
            info: {
                name: 'aman',
                roll: 101,
                place: 'GHS'
            }
        }
    }
}
</script>