<template>
<div>
    <h2>Watcher using Ref in Composition </h2>
    <input type="text" placeholder="Name" v-model="name" /> <br /><br />
    <h6> Ref in Composition </h6>
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />

</div>
</template>

<script>
import {
    ref,
    watch
} from 'vue'
export default {
    name: 'CompositionWatcherRef',
    setup() {
        const firstName = ref('')
        const lastName = ref('')

        //   watch(firstName, (newValue, oldValue)=>{
        //      console.log('Ref newValue', newValue);
        //     console.log('Ref oldValue', oldValue)
        // })

        watch([firstName, lastName], (newValues, oldValues) => {
            console.log('Ref newValue', newValues[0]);
            console.log('Ref oldValue', oldValues[0])

            console.log('Ref newValue', newValues[1]);
            console.log('Ref oldValue', oldValues[1])
        },
        {
            immediate: true
        }
        )

        return {
            firstName,
            lastName
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
