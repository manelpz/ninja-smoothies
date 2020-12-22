<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  
//adding navbar
  export default {
    name: 'App',
    components:{
      Navbar
    }
  }
</script>

<style>

</style>
