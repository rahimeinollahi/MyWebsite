<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-sm-2 bg-light"></div>
            <div class="col-sm-8 border p-5 ">
                <div>
                    <img src="../../assets/images/rahim-profile.jpg" alt="photo-of-me" class="rounded-circle " style="width:150px">
                </div>
                <div class="border justify-content-end d-flex flex-column p-3 mt-1">
                    <h4 class="text-end"> رحیم عین الهی</h4>
                    <h6>فرانت اند دوولوپر</h6>
                </div>
                <div class="border mt-3 p-3">
                    <h3>مهارت ها</h3>

                    <div class="progress mt-4">
                        <span class="bg-dark text-white px-3 border-start">HTML5</span>
                        <span class="progress-bar bg-success text-white px-2" style="width:80%"> 80%</span>
                    </div>

                    <div class="progress mt-4">
                        <span class="bg-dark text-white px-3 border-start">CSS3</span>
                        <span class="progress-bar bg-info text-white px-2" style="width:70%"> 70%</span>
                    </div>

                    <div class="progress mt-4">
                        <span class="bg-dark text-white px-3 border-start">SASS</span>
                        <span class="progress-bar bg-info text-white px-2" style="width:50%"> 50%</span>
                    </div>
                    <div class="progress mt-4">
                        <span class="bg-dark text-white px-3 border-start">SASS</span>
                        <span class="progress-bar bg-info text-white px-2" style="width:50%"> 50%</span>
                    </div>

                    <div class="progress mt-4">
                        <span class="bg-dark text-white px-3 border-start">CSS3</span>
                        <span class="progress-bar bg-success text-white px-2" style="width:60%"> 60%</span>
                    </div>
                    <div class="progress mt-4">
                        <span class="bg-dark text-white px-3 border-start">Vuejs</span>
                        <span class="progress-bar bg-success text-white px-2" style="width:60%"> 60%</span>
                    </div>
                    
                    <div class="progress mt-4">
                        <span class="bg-dark text-white px-3 border-start">VueRouter</span>
                        <span class="progress-bar bg-info text-white px-2" style="width:60%"> 60%</span>
                    </div>

                    <div class="progress mt-4">
                        <span class="bg-dark text-white px-3 border-start">RestAPI</span>
                        <span class="progress-bar bg-info text-white px-2" style="width:60%"> 50%</span>
                    </div>

                    <div class="progress mt-4">
                        <span class="bg-dark text-white px-3 border-start">Bootstrap</span>
                        <span class="progress-bar bg-warning text-white px-2" style="width:65%"> 65%</span>
                    </div>

                    <div class="mt-3 border d-flex flex-column">
                        <h2>مهارت های زبان</h2>

                        <div class="d-flex flex-row justify-content-center">
                            <span class="mt-1">زبان انگلیسی</span>
                            <button class="btn mb-2  btn-dark border  text-dark mx-3">0</button>
                            <button class="btn mb-2  btn-dark border  text-dark mx-3">0</button>
                            <button class="btn mb-2  btn-dark border  text-dark mx-3">0</button>
                            <button class="btn mb-2  btn-light border  text-light mx-3">0</button>
                            <button class="btn mb-2  btn-light border  text-light mx-3">0</button>
                        </div>

                        <div class="d-flex flex-row justify-content-center">
                            <span class="mt-1">زبان  ترکی</span>
                            <button class="btn mb-2  btn-dark border  text-dark mx-3">0</button>
                            <button class="btn mb-2  btn-dark border  text-dark mx-3">0</button>
                            <button class="btn mb-2  btn-dark border  text-dark mx-3">0</button>
                            <button class="btn mb-2  btn-light border  text-light mx-3">0</button>
                            <button class="btn mb-2  btn-light border  text-light mx-3">0</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-sm-2 bg-light"></div>
        </div>

        
    </div>
</template>

<script>
    export default {
        name:'HeadofSkill'
    }
</script>

<style lang="scss" scoped>
button{
    border-radius: 50%;
}
@font-face {
    font-family: skill-font;
    src: url('../../assets/fonts/Far_TitrBd/Far_TitrBd.ttf');
}
*{
    font-family: skill-font;
}
</style>