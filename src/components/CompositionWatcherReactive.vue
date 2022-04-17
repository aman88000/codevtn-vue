<template>
<div>
    <h2>Watcher using Reactive in Composition </h2>
    <input type="text" placeholder="Name" v-model="name" /> <br /><br />
    <h6> Reactive in Composition </h6>
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />

</div>
</template>

<script>
import {
    reactive, toRefs,
    watch
} from 'vue'
export default {
    name: 'CompositionWatcherReactive',
    setup() {
        const state = reactive({
            firstName: '',
            lastName: ''
        })

        // watch(()=>{
        //     return {...state}
        // }, (newValues, oldValues) => {
        //     console.log('React newValue firstname', newValues.firstName);
        //     console.log('Reactive newValue lastname', newValues.lastName)

        //     console.log('Reactive oldValue firstName', oldValues.firstName);
        //     console.log('Reactive oldValue lastName', oldValues.lastName)
        // },
        // )


         watch(()=>state.firstName, (newValue, oldValue) => {
            console.log('React newValue firstname', newValue);
            console.log('Reactive oldValue firstName', oldValue);
        },
        )

        return {
            ...toRefs(state)
        }

    },
    data() {
        return {
            name: ''
        }
    },
    watch: {
        name(newValue, oldValue) {
            console.log('newValue', newValue);
            console.log('oldValue', oldValue)

        }
    }
}
</script>

<style scoped>

</style>
