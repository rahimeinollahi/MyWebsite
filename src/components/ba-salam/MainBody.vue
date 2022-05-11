<template>
    <div >
          <div class="border p-2" id="body-home">
                <div class="d-flex  flex-row  justify-content-between ">
                    <span class="mx-2 p-2 ">وضیعیت مالی</span>
                    <router-link class="mx-2 nav-link text-dark" to="/more">بیشتر</router-link>
                </div>

                <div class="row">
        
                    <div class="col-sm-6">
                            <div class="d-flex flex-column justify-content-center text-center mt-2">
                            <span id="span-data">1401/02/15</span>
                            <span class="text-secondary">آخرین تسویه</span>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="d-flex flex-column justify-content-center text-center mt-2">
                            <span id="span-data">119 تومان</span>
                            <span class="text-secondary">مبلغ قابل تسویه شما</span>
                        </div>
                    </div>
                    </div>
          </div>
          <div class="border mt-3 text-center p-3">
              <img src="../../assets/images/basalm-image.webp" alt="post basalam" style="width:400px" class="w-100">
          </div>

          <div class="mt-3 border p-3">
              <h5 id="everyday-event">اتفاقات امروز در غرفه شما</h5>
              <div class="row">
                  <div class="col-sm border mt-2 mb-2 text-center mx-1 p-3">
                      <span class="p-5 m-3 ">ُسفارش ثبت مشکل شدند</span>
                  </div>
                  <div class="col-sm border mt-2 mb-2 text-center mx-1 p-3">
                        <span class="">آیتم تسویه شده دارید.</span>
                  </div>
              </div>
          </div>

          <div class="border p-3 mt-3" style="border-radius:10px">
          
              <p><i class="bi-alarm"></i> بر اساس رسالت باسلام بر رعایت حقوق معنوی ناشران و برای جلوگیری 
                  از نقض قوانین کپی رایت، محصولاتی که فاقد مجوز انتشار کتب صوتی و
                  PDF هستند ، تا بارگذاری 
                  و ارائه مستندات به شرکت باسلام، از دسترس خارج می شوند. در صورتی
                   که مجوز لازم را
                    برای فروش محصولات فوق دارید اطلاعات لازم را در لینک زیر ثبت نمائید:</p>
                    <router-link to="/see-more" class="nav-link">مشاهده</router-link>
          </div>
    </div>
</template>

<script>
    export default {
        name:'MainBody'
    }
</script>

<style lang="scss" scoped>
#body-home{
    border-radius: 3%;
}
span, a{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
#span-data{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#everyday-event{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
p{
    line-height: 35px;
}
</style>