<template>
<h2>Computed property Setter and getter value in Vue js</h2>
<br />
<hr />
<br />
<br />
<h2>FullName : {{getFullName()}}</h2>
<h2>Computed fullName: {{fullName}}</h2>
<button @click="changeName()">Change fullName</button>
</template>
<script>
export default{
    name: 'ComputedSetterGetter',
    data(){
        return {
           firstName: 'aman',
           lastName: 'deep'
        }
    },
    methods: {
        getFullName(){
            return `${this.firstName}  ${this.lastName}`
        },
        changeName(){
            this.fullName = 'Happy Singh'
        }
    },
    computed: {
        fullName: {
            get(){
                return `${this.firstName}  ${this.lastName}`
            },
            set(value){
                let name = value.split(' ');
                this.firstName = name[0];
                this.lastName = name[1]

            }
        }
       
    }

}
</script>