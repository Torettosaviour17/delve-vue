<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar />
    <Herosection />
    <MajorLanguages />
    
    <!-- Router View: This will display the active route component -->
    <router-view />
  </div>
</template>

<script>
// Importing the Navbar component
import Navbar from './components/layout/navbar.vue';
import Herosection from './components/homecomponents/Herosection.vue';	
import MajorLanguages from './components/homecomponents/MajorLanguages.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Herosection,
    MajorLanguages,

  },
};
</script>

<style>
/* Add your global styles here */
</style>
