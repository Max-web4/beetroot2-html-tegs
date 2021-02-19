<template>
    <div class="v-bottom-nav">
       <v-router-link :to="{name: 'contacts'}"> 
           <i class="material-icons">person_pin</i>
       </v-router-link>
        <v-router-link :to="{name: 'contacts'}"> 
           <i class="material-icons">chat</i>
       </v-router-link> 
        <v-router-link :to="{name: 'contacts'}"> 
           <i class="material-icons">settings</i>
       </v-router-link> 
        <v-router-link :to="{name: 'contacts'}"> 
           <i class="material-icons">call</i>
       </v-router-link> 
        <v-router-link :to="{name: 'contacts'}"> 
           <i class="material-icons">home</i>
       </v-router-link> 
    </div>
</template>


<script>
export default {
    name: "v-bottom-nav",
    props: {},
    data () {
        return {}
    },
    computed: {}
}
</script>

<style scoped>

</style>