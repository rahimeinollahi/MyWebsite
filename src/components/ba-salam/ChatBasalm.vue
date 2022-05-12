<template>
    <div class="container mt-2">
        <div class="row">
            <div class="col-sm-2"></div>

            <div class="col-sm-8">
                <div class="d-flex flex-column">
                    <div class="row">
                        <div class="col-sm-4 d-flex flex-row mt-3">
                            <h1>باسلام</h1>
                            <div class="input-group mb-3 text-center">
                                <button class="btn " type="submit"><i class="fas fa-search" ></i>   </button> 
                                <input type="text" class="form-control mt-3" placeholder="Search">
                                </div>
                        </div>
                        <div class="col-sm-4 text-start jusity-content-end">
                            <div class="d-flex flex-row mx-4">
                                <div class="d-flex flex-column text-center">
                                    <span><i class="fa fa-exclamation-circle mx-2 mt-2 "></i></span>
                                    <span class="mx-2 mt-3 text-center p-3">پیام ها</span>
                                </div>

                                <div class="d-flex flex-column text-center">
                                    <span><i class="fa fa-exclamation-circle mx-2 mt-2 "></i></span>
                                    <span class="mx-2 mt-3 text-center p-3">پروفایل</span>
                                </div>

                                <div class="d-flex flex-column text-center">
                                    <span><i class="fa fa-exclamation-circle mx-2 mt-2 "></i></span>
                                    <span class="mx-2 mt-3 text-center p-3">سبد خرید</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div class="col-sm-2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'chatBasalm'
    }
</script>

<style lang="scss" scoped>
i{
    font-size: 30px;
    
}
span{
    font-size: 15px;
}
</style>