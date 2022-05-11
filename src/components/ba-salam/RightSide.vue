<template>
    <div>
        <header-right />
            <nav class="navbar border" id="right-1">
                <div class="container-fluid">
                    <ul class="navbar-nav w-100">
                        <li class="nav-item ">
                            <a class="nav-link " href="#">پیشخوان</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> گفتگو</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> محصولات</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> سفارشات</a>
                        </li>
                    </ul>
                        <hr class="w-100">

                        <ul class="navbar-nav w-100">
                            <li class="nav-item" v-for="item in part2Items" :key="item.id">
                                <router-link :to="item.itemRoute" class="nav-link">{{item.itmName}}</router-link>
                            </li>
                        </ul>
                                <hr class="w-100">
                        <ul class="navbar-nav w-100">
                            <li class="nav-item" v-for="item in part3Items" :key="item.id">
                                <router-link :to="item.itemRoute" class="nav-link">{{item.itmName}}</router-link>
                            </li>
                        </ul>

                        <hr class="w-100">

                        <ul class="navbar-nav w-100">
                            <li class="nav-item" v-for="item in part4Items" :key="item.id">
                                <router-link :to="item.itemRoute" class="nav-link">{{item.itmName}}</router-link>
                            </li>
                        </ul>

                </div>
            </nav>
    </div>
</template>

<script>
import HeaderRight from './HeaderRight.vue'
    export default {
  components: { HeaderRight },
        name:'RightSide',
        data(){
            return{
                part2Items:[
                    {id:1, itmName:'تنظیمات غرفه', itemRoute:'/setting-shop'},
                    {id:1, itmName:'روش و هزینه های ارسال', itemRoute:'/cost-trasport'},
                    {id:1, itmName:'تسویه حساب و امور مالی', itemRoute:'/finance'},
                    {id:1, itmName:'غرفه برتر', itemRoute:'/prime-shop'},
                ],
                part3Items:[
                    {id:1, itmName:'سامانه تبلیغات توی چشم ', itemRoute:'/advertising'},
                    {id:1, itmName:'تخفیف ساز', itemRoute:'/despite'},
                    {id:1, itmName:'مدیریت کد های تخفیف', itemRoute:'/manager'},
                    {id:1, itmName:'قفسه بندی', itemRoute:'/classification'},
                    {id:1, itmName:'بازار خدمات باسلام', itemRoute:'/service-market'},
                    {id:1, itmName:'تخفیف به هزینه باسلام', itemRoute:'/despite-basalam'},
                ],
                part4Items:[
                    {id:1, itmName:'لیست مشتریان من ', itemRoute:'/customer-list'},
                    {id:1, itmName:'تجربه های خرید مشتریان', itemRoute:'/customer-experience'},
                    {id:1, itmName:'راهنمایی و پشتیبانی', itemRoute:'/support'},
                  
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../scss/variables/_home_variables.scss';
a{
    color: $txtColor;
    direction: rtl;
}
#right-1{
    border-radius: 20px;
}
ul li a:hover{
    background-color: $hoverColor;
}
li a{
    line-height: 25px;
}
</style>