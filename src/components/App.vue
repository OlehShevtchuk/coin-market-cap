<template>
  <div id="app">
    <app-sidebar></app-sidebar>
    <div class="container">
      <app-header></app-header>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './layouts/app-header/Header.vue'
import Sidebar from './layouts/sidebar/Sidebar.vue'

export default {
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar
  }
}
</script>

<style lang="scss">
  #app {
        display: flex;
        flex-direction: row;
        min-height: 100%;
  }
  .container {
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        flex-grow: 1;
        min-height: 100%;

  }
</style>
