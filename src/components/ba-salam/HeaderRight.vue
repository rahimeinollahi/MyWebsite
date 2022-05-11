<template>
    <div class="container-fluid mb-1 text-white mt-1" id="header-right">

        <div class="row">
            <div class="col-sm-2 mt-5">
                <div>
                    <img src="../../assets/images/rahim-profile.jpg" alt="photo of seller brand" >
                 </div>
            </div>
            <div class="col-sm-10">
                  <div class="p-2 mx-5">
                  <h6>غرفه دنیای جک گازی ایران</h6>
                      <div class="text-center" id="name-saller">رحیم عین الهی</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../../scss/variables/_home_variables.scss';
#header-right{
background-color: $colorHead;
border-radius: 20px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#name-seller{
    font-family:'Times New Roman', Times, serif ;
}
img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
</style>