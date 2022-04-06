<template>
<h2>Methods using in Vue js</h2>
    <h2>{{2+ 3+ 5}}</h2>
    <h2>{{add()}}</h2>
    <h2>{{add1(2,5,8)}}</h2>
    <h2>{{multiply(2)}}</h2>
    <h2>{{multiply(baseValue)}}</h2>
   
</template>
<script>
export default{
    name: 'MethodVue',
    data(){
        return {
        baseMultiply: 10,
        baseValue: 5
           
        }
    },
    methods: {
        add(){
            return 2+3+8;
        },
        add1(a, b, c){
            return a+b+c;
        },
        multiply(num){
            return this.baseMultiply * num
        }
        
    }
}
</script>