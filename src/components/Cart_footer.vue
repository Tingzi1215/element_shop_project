<template>
    <!-- Navbar -->
    <div id="wrapper">
        <!--        v-if显示两种页面-->
        <div class="cart-index" >
            <div class="cart-index-wrap" >

                <!-- Navbar -->
                <div class="bottom-submit ui-box">
                    <div class="price"><span>共{{total.num}}件 金额：</span><br><strong>1</strong><span>{{total.price}}元</span></div>
                    <div class="btn"><a class="ui-button ui-button-disable"
                                        href="/1/#/product/category"><span>继续购物</span></a></div>
                    <div class="btn">
                        <router-link to="/checkout">
                        <a class="ui-button"
                                        href="/1/#/order/checkout?address_type=common"><span>去结算</span></a>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart_footer"

    }
</script>

<style>
    .cart-index-wrap .bottom-submit{
        bottom: 53px;
    }

</style>