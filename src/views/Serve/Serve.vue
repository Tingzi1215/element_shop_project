<template>
    <div id="wrapper">
        <div class="page-personal-center" data-log="个人中心">

            <div class="b1">
                <div class="new_info">
                    <router-link to="/login">
                        <div class="name"></div>
                        <div class="img">
                            <img src="http://s1.mi.com/m/images/m/default.png">
                        </div>
                    </router-link>
                </div>
                <div class="new_nav">
                    <ul>
                        <li>
                            <a href="javascript:;" data-event="40000000100060001">
                                <div class="spr spr1"></div>
                                <p>全部订单</p>
                                <div class="line n"></div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-event="40000000100060002">
                                <div class="spr spr2"></div>
                                <p>待付款</p>
                                <div class="line n"></div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-event="40000000100060003">
                                <div class="spr spr3"></div>
                                <p>待收货</p>
                                <div class="line n"></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <ol class="list">
                <li data-event="40000000100060005"><strong class="sprl ise"></strong><a>意见反馈</a></li>
                <li data-event="40000000100060006"><strong class="sprl is"></strong><a href="address_manage.html">地址管理</a>
                </li>
            </ol>
            <div class="footer">
                <ul>
                    <li>
                        <a href="/1/#/index" class="on">
                            <div class="nav">
                                <div class="ih ispr"></div>
                                <p>商城</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/1/#/product/category">
                            <div class="nav">
                                <div class="ic ispr"></div>
                                <p>分类</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/1/#/cart/index">
                            <div class="nav">
                                <div class="is ispr"></div>
                                <p>购物车</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/1/#/user/index">
                            <div class="nav">
                                <div class="if ispr"></div>
                                <p>服务</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Serve"
    }
</script>

<style scoped>

</style>
