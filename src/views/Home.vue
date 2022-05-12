<template>
  <div id="header">
      <div >
          <div class="d-flex ">
            <a id="tag-a" href="https://www.instagram.com/" class="nav-link border mt-3 mx-3 ">R.E</a>
         </div>
      </div>

        <div class="d-dlex flex-row justify-content-center text-center">
            <img src="../../src/assets/images/profile.jpeg" class="mt-3" alt="profile" style="width:125px">   
        </div>
      <div class="d-flex flex-column justify-content-center text-center">
        <h3>من <strong class="display-1">رحیم عین الهی </strong>هستم</h3>
        <span> یک فرانت اند دوولوپر</span>
      </div>
      <hr>
      <br>
      <bizilo />
      
      
  </div>
</template>

<script>
import bizilo from '@/components/home_page/bizilo.vue'
  export default {
  components: { bizilo },
    
  }
</script>

<style lang="scss" scoped>

#header{
  background-color: #FFEEEE;
  width: 100%;
  height: 200px;
  
}
#tag-a{
  border-radius: 50%;
  font-weight: bold;
  font-size: 50px;
}
img{
  border-radius: 50%;
}
@font-face {
  font-family: name-font;
  src: url('../assets/fonts/B Baran Italic_0.ttf');
}

strong{
  font-family: name-font;
}
</style>