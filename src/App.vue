<template>
  <div id="nav">
      <navbar-home/>
      
      <pre>

      </pre>
      <navbar-top-2 class="mt-3" />
  </div>
  <router-view/>
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
