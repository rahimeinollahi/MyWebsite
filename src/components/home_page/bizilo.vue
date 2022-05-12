<template>
    <div>
        <div>
            <ul class="nav">
                <li class="nav-item mx-2 mt-4"><span>فروشگاه اینترنتی بیزلو</span></li>
                <li class="nav-item mx-2 mt-4"><span>تلفن تماس</span></li>
                <li class="nav-item mx-2 mt-4"><span>پنل خرید نقدی</span></li>
                 <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">پنل خرید</a>
                        <ul class="dropdown-menu ">
                        <li><router-link class="dropdown-item text-center" to="/">ورود به پنل خرید نقدی</router-link></li>
                        <li><router-link class="dropdown-item text-center" to="/">پنل خرید نقدی</router-link></li>
                        <li><router-link class="dropdown-item text-center" to="/">واریز خرید نقدی</router-link></li>
                        <li><router-link class="dropdown-item text-center" to="/">سبد خرید نقدی</router-link></li>
                      
                        </ul>
                    </li>
            </ul>
        </div>
        <div class="row">
            <div class="col-sm-1"></div>

            <div class="col-sm-6">
                <div class="flex-row d-flex">
                    <router-link class="nav-link" to="/">سبد خرید</router-link>
                    <router-link class="nav-link" to="/">سبد مقایسه</router-link>
                    <form action="">

                         <div class="input-group">
                             <input type="text" class="form-control" placeholder="Username">
                            <span class="input-group-text bg-danger"><i class="fa fa-search" /></span>
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-sm-4"></div>

            <div class="col-sm-1 border p-2 text-center">
                <span class="display-6 ">فرا تجارت رایمند قرن</span>
            </div>

        </div>
            <hr class="mt-5 mx-5 mb-3">
            <hr class="mt-5 mx-5 mb-3">

        <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-2 ">

                <div class="border p-3 text-center bg-info">
                    <span><i class="fa fa-user"></i></span>
                    <router-link to="/">پنل کاربری اقساطی</router-link>
                </div>

                <div class="d-flex flex-row mt-3">
                    <router-link to="/"><img src="../../assets/images/enamad.jpg" alt=""></router-link>
                    <router-link to="/"><img src="../../assets/images/samandehi.jpg" alt=""></router-link>
                </div>

                <div class="mt-3">
                    <router-link to="/"><img src="../../assets/images/nomayandegan.jpg" alt=""></router-link>
                </div>

                <div class="mt-3">
                    <router-link to="/"><img src="../../assets/images/اقساطی.jpg" alt=""></router-link>
                </div>
                
            </div>
            <div class="col-sm-8">
                <div class="text-center">
                    <img class="" src="../../assets/images/samandehi.jpg" alt="image">
                    <hr class="mt-3 mb-3">
                    
                </div>

                <div>
                    <ul class="nav d-flex flex-row">
                        <li class="nav-item flex-grow-1 text-center">
                            <router-link class="nav-link mx-3 border " to="/">آیسوس</router-link>
                        </li>

                        <li class="nav-item flex-grow-1 text-center">
                            <router-link class="nav-link mx-3 border " to="/">ایسر</router-link>
                        </li>

                        <li class="nav-item flex-grow-1 text-center">
                            <router-link class="nav-link mx-3 border " to="/">لنوو</router-link>
                        </li>
                    </ul>
                </div>

                <div class="d-flex mt-1">
                      <div class="card mt-2 mb-2 mx-3 p-3" style="width:400px">
                            <img class="card-img-top" src="../../assets/images/rahim-profile.jpg" alt="Card image" style="width:100%">
                            <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" class="btn btn-primary">See Profile</a>
                            </div>
                        </div>

                      <div class="card mt-2 mb-2 mx-3 p-3" style="width:400px">
                            <img class="card-img-top" src="../../assets/images/rahim-profile.jpg" alt="Card image" style="width:100%">
                            <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" class="btn btn-primary">See Profile</a>
                            </div>
                        </div>

                      <div class="card mt-2 mb-2 mx-3 p-3" style="width:400px">
                            <img class="card-img-top" src="../../assets/images/rahim-profile.jpg" alt="Card image" style="width:100%">
                            <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" class="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                        
                      <div class="card mt-2 mb-2 mx-3 p-3" style="width:400px">
                            <img class="card-img-top" src="../../assets/images/rahim-profile.jpg" alt="Card image" style="width:100%">
                            <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" class="btn btn-primary">See Profile</a>
                            </div>
                        </div>

                      <div class="card mt-2 mb-2 mx-3 p-3" style="width:400px">
                            <img class="card-img-top" src="../../assets/images/rahim-profile.jpg" alt="Card image" style="width:100%">
                            <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" class="btn btn-primary">See Profile</a>
                            </div>
                        </div>

                      <div class="card mt-2 mb-2 mx-3 p-3" style="width:400px">
                            <img class="card-img-top" src="../../assets/images/rahim-profile.jpg" alt="Card image" style="width:100%">
                            <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" class="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                </div>

            </div>
            <div class="col-sm-1"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    font-size: 16px;
}
li a{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
}
</style>