<template>
    <div id="wrapper">
<!--        v-if显示两种页面-->
     <div class="cart-index" v-if="carts.length>0">
        <div class="cart-index-wrap" >
        <div class="cart-list">
            <ul v-for="(cart,index) in carts" :key="cart.id">
                <li class="item">
                    <div class="ui-box">
                        <div class="imgProduct">
                            <a href="#">
                                <img :src="'http://images.canon4ever.com/'+ cart.product.image">
                            </a>
                        </div>
                        <div class="info ui-box-flex">
                            <div class="name">
                                <span>{{cart.product.name}}</span>
                            </div>
                            <div class="price">
                                <p>
                                    <span>售价：</span><span>{{cart.product.price}}</span>
                                    <span>合计：</span><span>{{cart.product.price*cart.num}}元</span>
                                </p>
                                <div class="tip">
                                    <span style="display: none;">请于2016/05/10 22:59前下单，逾期将失效。</span>
                                </div>
                            </div>
                            <div class="num">
                                <div class="xm-input-number">
                                    <div :class= "cart.num == 1?'input-sub' : 'input-sub active'"   @click="add(cart,'dec')"></div>
                                    <div class="input-num"><span>{{cart.num}}</span></div>
                                    <div class="input-add active" @click="add(cart,'inc') "></div>
                                </div>
                                <div class="delete">
                                    <a href="javascript:;">
                                        <span class="icon-iconfontshanchu" @click="del(cart,index)"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="append"></div>
                </li>
            </ul>
        </div>
        <div class="pointBox">
            <div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
            <div class="point">
                <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
            </div>
        </div>

        <!-- Navbar -->
        <div class="bottom-submit ui-box">
            <div class="price"><span>共{{total.num}}件 金额：</span><br><strong>{{total.price}}</strong><span>元</span></div>
            <div class="btn"><a class="ui-button ui-button-disable"
                                href="/1/#/product/category"><span>继续购物</span></a></div>
            <div class="btn"><a class="ui-button"
                                href="/1/#/order/checkout?address_type=common"><span>去结算</span></a></div>
        </div>
    </div>
     </div>
        <div class="cart-index" v-if="show">
            <div style="height:1rem;"></div>

            <div class="cart-index-wrap">
                <div class="empt">
                    <div class="b3">
                        <a href="/1/#/product/category" class="ui-button ui-button-disable">
                            <span>全部商品</span>
                        </a>
                        <a href="/1/#/index/recommend" class="ui-button">
                            <span>精选商品</span>
                        </a>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                carts: [],
                show: false,
                count: '',

            }
        },


        watch: {
            carts(val) {
                //判读购物车的长度
                this.show = this.carts.length == 0 ? true : false

            }
        },
        created() {
            this.init()
        },

        methods: {
            //读取数据
            init() {
                this.axios.get(`api/cart`).then(res => {
                    console.log(res)
                    this.carts = res.data.carts;
                    this.count = res.data.count;

                })
            },
            //删除数据
            del(cart, index) {
                    this.axios.delete(`api/cart?cart_id=${cart.id}`).then(res => {
                        this.carts.splice(index, 1)
                    })
            },
            //加减
            add(cart, type) {
                if (type == 'dec' && cart.num <= 1) {

                    return false
                }

                this.axios.patch(`api/cart`, {cart_id: cart.id, type: type}).then(res => {
                    type == 'inc' ? cart.num++ : cart.num--
                })


            }
        },
        computed: {
            total() {
                let num = 0
                let price =0
                    this.carts.map(item => {
                      num+=item.num
                        price+=item.product.price*item.num
                    })
                return{num:num,price:price}
            }


        }
    }
</script>

<style>
    .cart-index-wrap .bottom-submit{
        bottom: 53px;
    }

</style>
