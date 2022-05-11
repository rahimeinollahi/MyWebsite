<template>
  <div class="container mt-1" id="navhome">
     <ul class="nav nav-pills">

       <li class="nav-item">
          <router-link class="nav-link text-white " to="/">خانه</router-link>
       </li>

       <li class="nav-item">
          <router-link class="nav-link text-white" to="/aboutme">درباره من</router-link>
       </li>

       <li class="nav-item dropdown">
          <a class="nav-link text-white dropdown-toggle " href="#" data-bs-toggle='dropdown'>مقالات</a>
           <ul class="dropdown-menu  ">
                <li><router-link to="/instagram" class="dropdown-item text-center "> اینستاگرام</router-link></li>
                <li><router-link to="/linkedin" class="dropdown-item text-center ">لینکداین</router-link></li>
              
          </ul>
          
       </li>
       
       <li class="nav-item">
          <router-link class="nav-link text-white" to="/myskills">مهارت ها</router-link>
       </li>

       <li class="nav-item">
          <router-link class="nav-link text-white" to="/exitpage">خر,ج</router-link>
       </li>

     </ul>

  </div>
</template>

<script>
  export default {
    name:'NavbarHome'
  }
</script>

<style lang="scss" scoped>

@font-face {
    font-family:navbar-font ;
    src: url('../../assets/fonts/B Baran_0.ttf');
}
*{
    font-family: navbar-font;
    font-size: 20px;
}
@import '../../scss/variables/_home_variables.scss';
#navhome{
  background-color:$navColor;
}
li a:hover{
  background-color:$navColorHover;
}
.active-home{
  background-color: $navColorHome;
}
</style>