<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-1"></div>

            <div class="col-sm-3">
                <right-side />
            </div>
            <div class="col-sm-6">
                <router-view />
                <main-body />
            
            </div>
            
            <div class="col-sm-1"></div>

            <div class="col-sm-1"></div>
        </div>
    </div>
</template>

<script>
import RightSide from '@/components/ba-salam/RightSide.vue'
import MainBody from '@/components/ba-salam/MainBody.vue'
    export default {
  components: { RightSide, MainBody },
        
    }
</script>

<style lang="scss" scoped>

</style>