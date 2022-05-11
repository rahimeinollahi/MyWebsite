<template>
  <div id="nav">
      <navbar-home/>
      
      <pre>

      </pre>
      <navbar-top-2 class="mt-3" />

      <router-view v-slot="{ Component, route }">
      <!-- Use any custom transition and fallback to `fade` -->
      <transition :name="route.meta.transitionName || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>


<script>
import NavbarHome from './components/home_page/NavbarHome.vue'
export default {
  components:{
    NavbarHome
  }
}
</script>
<style>
@import '../src/scss/scss_components/transition.scss';

    /* NavbarHomestyle lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// } */
</style>
