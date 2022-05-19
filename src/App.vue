<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import "animate.css";
</script>

<template>
  <Header></Header>
  <Introduction></Introduction>
  <Work></Work>
  <AboutMe></AboutMe>
</template>


<script>
import Header from "./components/Header.vue";
import Introduction from "./components/Introduction.vue";
import AboutMe from "./components/AboutMe.vue";
import Work from "./components/Works.vue";

export default {
  name: "App",
  components: {
    Header,
    Introduction,
    Work,
    AboutMe,
  },
};

import AOS from "aos";
AOS.init();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
