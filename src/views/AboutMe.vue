<template>
    <div class="container mt-2">
       <div class="row">
           <div class="col-sm-4">
               <div class="border p-3">

                   <div class=" d-flex justify-content-center border-bottom mx-5 px-2 mt-5">
                       <label for="txt-name" class="text-danger">سن:</label>
                       <span class="mx-5 text-info">32</span>
                   </div>

                   <div class=" d-flex justify-content-center border-bottom mx-5 px-2 mt-5 ">
                       <label for="txt-name" class="text-danger">شهر تولد:</label>
                       <span class="mx-5 text-info">تبریز</span>
                   </div>

                   <div class=" d-flex justify-content-center border-bottom mx-5 px-2 mt-5">
                       <label for="txt-name" class="text-danger">سال تولد:</label>
                       <span class="mx-3  text-info">1369/08/06</span>
                   </div>

               </div>
           </div>
           <div class="col-sm-4 border text-center ">
               <h3 class="mt-3">مقاطع تحصیلی</h3>
               
               <div class="mt-5">
                   <label for="txt-technique" class="text-danger">مقطع دبیرستان: </label>
                   <span class="mx-5 text-info"> دیپلم فنی حرفه ای کامپیوتر</span> 
               </div>

               <div class="mt-4">
                   <label for="txt-technique" class="text-danger">مقطع کاردانی: </label>
                   <span class="mx-4 text-info"> مهندسی نرم افزار</span> 
               </div>

               <div class="mt-5">
                   <label for="txt-technique" class="text-danger">مقطع کارشناسی: </label>
                   <span class="mx4 text-info"> مهندسی نرم افزار</span> 
               </div>

           </div>
           <div class="col-sm-4 border text-center ">             
              <div class=" d-flex justify-content-center border-bottom mx-5 px-2 mt-5">
                       <label for="txt-name" class="text-danger">وضعیت تاهل :</label>
                       <span class="mx-5 text-info">مجرد</span>
                   </div>

                   <div class=" d-flex justify-content-center border-bottom mx-5 px-2 mt-5 ">
                       <label for="txt-name" class="text-danger">سال سابقه:</label>
                       <span class="mx-5 text-info">از سال 1397 به بعد</span>
                   </div>

                   <div class=" d-flex justify-content-center border-bottom mx-5 px-2 mt-5">
                       <label for="txt-name" class="text-danger">تخصص</label>
                       <span class="mx-3  text-info">فرات اند دوولوپر </span>
                   </div>
           </div>

           <hr class="mt-3">

           <div class="border ">
               <form action="/">
                <div class="form-check" >
                <input type="radio" class="form-check-input" id="radio1" name="optradio" value="fulltime" checked>
                <label class="form-check-label" for="radio1">به صورت تمام وقت</label>
                </div>
                <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="parttime">
                <label class="form-check-label" for="radio2">به صورت پاره وقت</label>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary mt-3 w-50 mb-3 btn-send">ارسال</button>
                </div>
            </form>
           </div>

       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../../src/scss/variables/_home_variables.scss';
.btn-send{
    background-color: $btnColor;
}
@font-face {
    font-family: aboutme-font;
    src: url('../../src/assets/fonts/B Baran Outline_0.ttf');
}
*{
    font-family: aboutme-font;
    font-weight: bold;
    font-size: 25px;
}
</style>