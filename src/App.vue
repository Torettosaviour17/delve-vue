<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar />
    <Herosection />
    <MajorLanguages />
    <OurFeature />
    <OurFeature0 />
    <ExperienceDelve />
    <Subscribe />

    <!-- Router View: This will display the active route component -->
    <router-view />
  </div>
</template>

<script>
// Importing the Navbar component
import Navbar from "./components/layout/navbar.vue";
import Herosection from "./components/homecomponents/Herosection.vue";
import MajorLanguages from "./components/homecomponents/MajorLanguages.vue";
import OurFeature from "./components/homecomponents/OurFeature.vue";
import OurFeature0 from "./components/homecomponents/OurFeature0.vue";
import ExperienceDelve from "./components/homecomponents/ExperienceDelve.vue";
import Subscribe from "./components/homecomponents/Subscribe.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Herosection,
    MajorLanguages,
    OurFeature,
    OurFeature0,
    ExperienceDelve,
    Subscribe,
  },
};
</script>

<style>
/* Add your global styles here */
</style>
