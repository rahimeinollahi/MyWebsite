<template>
    <div class="border" id="cost-post-cp">
        <div class="d-flex flex-row">
                <router-link class="nav-link text-dark" to="/basalam">خانه</router-link>
                <span class="nav-link text-dark ">روش و هزینه های ارسال</span>
        </div>

        <div>
            <h4 class="p-3">محدوده ارسال</h4>
            <div class="row">
                <div class="col-sm  d-flex flex-row text-center justify-content-between p-4">

                    <div class="form-check mt-3 ">
                        <input type="radio" class="form-check-input" id="radio1" name="optradio" value="all" checked> سراسر ایران
                        <label class="form-check-label" for="radio1"></label>
                        </div>

                        <div class="form-check mt-3 ">
                        <input type="radio" class="form-check-input" id="radio2" name="optradio" value="free">رایگان
                        <label class="form-check-label" for="radio2"></label>
                        </div>
                </div>
                <div class="col-sm card p-2 mx-3 mb-3">
                    <router-link id="questions" class="nav-link  text-info text-center p-4" to="/questions">سوال های پر تکرار</router-link>
                </div>
                
            </div>

        </div>
        <hr class="mx-3">

        <div>
            <div class="p-4">
                <h4>تنظیمات ارسال رایگان</h4>
                
                <label class="switch">
                <input type="checkbox" checked @click="showPrice()">
                <span class="slider round"></span>
                </label>
                <span class="mt-1 mx-2">ارسال رایگان به تبریز</span>
            </div>

            <div class="d-flex flex-row" v-if="pricevalue">
                <h3 class="mt-3 mb-3 mx-3   ">برای سفارش های بالای </h3>
                <input type="text" name="txt-price" id="txt-prie1" class="form-control w-50 mt-3 mb-3" >
                <span class="mt-3 mb-3 mx-3">تومان</span>
            </div>
        </div>

        <div class="p-4">
              <label class="switch">
                <input type="checkbox" checked @click="showPriceAll()">
                <span class="slider round"></span>
                </label>
                <span class="mt-1 mx-2">ارسال رایگان به ایران</span> 
            
        </div>

        <div class="d-flex flex-row" v-if="pricevalueAll">
                <h3 class="mt-3 mb-3 mx-3   ">برای سفارش های بالای </h3>
                <input type="text" name="txt-price" id="txt-price" class="form-control w-50 mt-3 mb-3" >
                <span class="mt-3 mb-3 mx-3">تومان</span>
            </div>

            <div class="p-3">
                <p class="text-info"> <i class="bi-alarm" /> برای سفارش‌های 
                    بالای 500000 تومان ارسال به سراسر ایران رایگان شده 
                    و کارمزد باسلام برای این سفارش‌ها به 6 درصد تغییر خواهد کرد.</p>
            </div>
            <hr class="mx-5 mb-3 mt-3">
            
            <div>
                <h5 class="mx-5">روش ارسال</h5>

                <div class="mx-3 mt-3 mb-3">
                    <label class="switch">
                    <input type="checkbox" >
                    <span class="slider round"></span>
                    </label>
                    <span class="mt-1 mx-2">محاسبات هوشمند </span> 
                    </div>
            </div>

            <div>
                <h6>
                     روش و هزینه های ارسال مطابق با محاسبات هوشمند لجستیک باسلام تعیین شود.
                </h6>

                <div class="row p-3">
                    <div class="col-sm">

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="check1" name="option1" value="postpishtaz" checked>
                            <label class="form-check-label">پست پیشتاز</label>
                        </div>

                        <div>
                            <span>هزینه پایه ارسال (تا وزن یک کلیو گرم)</span>
                             <input type="text" id="txt-cost-price" placeholder="25 تومان" class="form-control mx-3 mt-3">
                        </div>

                        <div>
                            <span>هزینه ارسال به ازای هر کیلو اضافه</span>
                             <input type="text" id="txt-cost-price" placeholder="5 تومان" class="form-control mx-3 mt-3">
                        </div>

                        <form action="">
                            <button class="btn btn-info mt-3 mb-3 p-3">ذخیره اطلاعات ارسال</button>
                        </form>
                    </div>


                    <div class="col-sm">
                        
                    </div>
                    <div class="col-sm"></div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name:'CostPost',
        data(){
            return{
                pricevalue:true,
                pricevalueAll:true
            }
        },
         methods:{
             showPrice(){
                 this.pricevalue=!this.pricevalue
             },
             showPriceAll(){
                 this.pricevalueAll=!this.pricevalueAll
             },
         }
    }
</script>

<style lang="scss" scoped>
#cost-post-cp{
    border-radius: 8px;
}
#questions{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 45px;
}


.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>