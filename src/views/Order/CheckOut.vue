<template>
    <div class="wrap">

        <div class="page-order-checkout">
            <div class="page-order-checkout-wrap">
                <div class="b1 icon_arrow">
                    <router-link to="/address">
                    <a href="address_list.html">
                        <div class="b11"><p><span>{{address.name}}</span><span>{{address.tel}}</span></p></div>
                        <div class="b13"><p>{{address.area}} {{address.city}} {{address.province}} {{address.detail}}</p></div>
                    </a>
                    </router-link>
                </div>
                <div class="ui_line"></div>
                <div class="b2">
                    <ul>
                        <li class="on"><a href="javascript:;" class="alipaywap">微信支付</a></li>
                        <li class=""><a href="javascript:;" class="">货到付款</a></li>
                    </ul>
                </div>
                <div class="ui_line"></div>

                <!--
                <div class="b3 icon_arrow">
                    <dl>
                        <dt><span>电子发票</span><strong>发票类型</strong></dt>
                    </dl>
                </div>
                <div class="b3 icon_arrow">
                    <dl>
                        <dt><span>不限送货时间</span><strong>送货时间</strong></dt>
                    </dl>
                </div>
                <div class="ui_line"></div>
                -->

                <div class="b8" v-for="item in products">
                    <div class="b8w">
                        <div class="b81" >
                            <div class="img"><img :src="'http://images.canon4ever.com/'+item.product.image">
                            </div>
                        </div>
                        <div class="b82">
                            <div class="name"><p>
                                <span>{{item.product.name}}</span></p></div>
                        </div>
                        <div class="b83">
                            <div class="price"><strong>{{item.product.price}}</strong></div>
                        </div>
                    </div>
                    <!--v-repeat-cart.list-->
                </div>

                <div class="ui_line"></div>

                <div class="b5">
                    <div class="b51"><p><strong>商品价格：</strong><span>928元</span></p></div>
                    <div class="b53"><p><strong>配送费用：</strong><span>0元</span></p></div>
                </div>
                <div class="b7">
                    <div class="b71"><span>共2件 合计: </span><strong>928元</strong></div>
                    <div class="b72"><a href="javascript:;" class="ui-button"><span>去付款</span></a></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                products:[],
                address:{
                    name:'',
                    tel:'',
                    pca:'',
                    detail:''
                }

            }
        },
        created(){
            this.axios.get(`api/order/checkout`).then(res=>{
                 console.log(res)
                this.products=res.data.carts
                this.address=res.data.address

            })
        }

    }
</script>

<style scoped>
    .page-order-checkout-wrap .b7{
        bottom: 50px;
    }

</style>
