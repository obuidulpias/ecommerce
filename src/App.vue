<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Navbar from './components/includes/Navbar.vue'
import Footer from './components/includes/Footer.vue'
export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'my-footer': Footer,
  }
}
</script>

<style>
</style>
