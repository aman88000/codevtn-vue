<template>
<h2>Watchers in Vue js</h2>
<br />
<hr />
<br />
<br />
<h2>Volume between 0 - 20</h2>
<h2>Volume: {{volume}}</h2>
<button id="increase" @click="volume += 2">Increase</button>
  <button id="decrease" @click="volume -= 2">Decrease</button>
</template>
<script>
export default{
    name: 'WatchersVue',
    data(){
        return {
          volume: 0
        }
    },
    methods: {
      
    },
    computed: {       
    },
    watch: {
        volume(newValue, oldValue){
            if(newValue > oldValue  &&  newValue >=16){
                alert('This much volume can damage your hearing')
            }
            if(newValue >= 20){
                document.getElementById('increase').style.display = 'none'
            }else if(newValue <=0 ){
                document.getElementById('decrease').style.display = 'none'
            }else{
                 document.getElementById('increase').style.display = 'block'
                  document.getElementById('decrease').style.display = 'block'
            }
        }
    }

}
</script>