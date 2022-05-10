<template>
    <div class="mx-1 mt-1 ">
        <ul>
            <li>
                <a href="#" class="active-home">خانه</a>
            </li>

            <li>
                <a href="#">درباره من</a>
            </li>

            <li>
                <div class="dropdown-nav" style="float:left;">

                    <button class="dropbtn">مقالات من</button>
                    <div class="dropdown-content" style="left:0;">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>

                </div>                    
                
            </li>

            <li>
                <a href="#">مهارت های من</a>
            </li>
            <li>
                <a href="#">خروج</a>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

@import '../../scss/variables/_home_variables.scss';
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: $navColor;
 
  
}

li {
  float: right;
}

li a {
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: $navColorHover;
}

.active {
  background-color: #04AA6D;
}

@font-face {
    font-family:navbar-font ;
    src: url('../../assets/fonts/B Baran_0.ttf');
}
*{
    font-family: navbar-font;
    font-size: 20px;
}

.active-home{
    background-color: $navColorHome;
}

.dropbtn {
  background-color: $navColor;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-nav {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown-nav:hover .dropdown-content {
  display: block;
}

</style>