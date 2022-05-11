<template>
    <div>
        <button class="btn btn-info" @click="closeWindew()">close page</button>
    </div>
</template>

<script>
    export default {
        methods:{
            closeWindew(){
                    if (confirm("آیا می خواهید از برنامه خارج شوید؟")) {
                        window.close(); 
                        this.$router.push("/");
                    }
            } 
            }
 
    }
</script>

<style lang="scss" scoped>

</style>