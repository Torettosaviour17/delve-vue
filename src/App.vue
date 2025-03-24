<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar />
    <Herosection />
    
    <!-- Router View: This will display the active route component -->
    <router-view />
  </div>
</template>

<script>
// Importing the Navbar component
import Navbar from './components/layout/navbar.vue';
import Herosection from './components/homecomponents/Herosection.vue';	

export default {
  name: 'App',
  components: {
    Navbar,
    Herosection
  },
};
</script>

<style>
/* Add your global styles here */
</style>
