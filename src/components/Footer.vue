<template>
    <!--    <div>-->
    <div class="footer">
        <ul>
            <li>
                <a href="javascript:;" :class="{on:'/'===$route.path}" @click="goTo('/')">
                    <div class="nav">
                        <div class="ih ispr"></div>
                        <p>商城</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;" :class="{on:'/category'===$route.path}" @click="goTo('/category')">
                    <div class="nav">
                        <div class="ic ispr"></div>
                        <p>分类</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;" :class="{on:'/cart_shop'===$route.path}" @click="goTo('/cart_shop')">
                    <div class="nav">
                        <div class="is ispr"></div>
                        <p>购物车</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;" :class="{on:'/serve'===$route.path}" @click="goTo('/serve')">
                    <div class="nav">
                        <div class="if ispr"></div>
                        <p>服务</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <!--    </div>-->
</template>

<script>
    export default {
        computed:{
            total(){
                return this.$store.state.getter.total
            }
        },
        methods:{
            goTo(path){
                this.$router.replace(path)
            }
        }
    }
</script>
<style>
    .footer{
        z-index: 999;
    }
</style>