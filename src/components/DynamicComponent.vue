<template>
    <div>
       <h2>Dynamic Component showing using tabs</h2>
       <button @click="activeTab = 'TabA'">Tab A</button>
       <button @click="activeTab = 'TabB'">Tab B</button>
       <button @click="activeTab = 'TabC'">Tab C</button>

        <keep-alive>
        <component :is="activeTab" />
        </keep-alive>

       
       <!-- <TabA v-if="activeTab === 'TabA'" />
       <TabB v-if="activeTab === 'TabB'" />
       <TabC v-if="activeTab === 'TabC'" /> -->
    </div>
</template>

<script>
import TabA from './TabA.vue'
import TabB from './TabB.vue'
import TabC from './TabC.vue'
    export default {
        name: 'DynamicComponent',
        components: {
            TabA, 
            TabB,
            TabC
        },
        data(){
            return{
                activeTab: 'TabA'
            }
        }
    }
</script>

<style scoped>

</style>