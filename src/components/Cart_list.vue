<template>

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
                                    <div :class= "cart.num == 1?'input-sub' : 'input-sub active'"   @click="changeNum(cart,'dec')"></div>
                                    <div class="input-num"><span>{{cart.num}}</span></div>
                                    <div class="input-add active" @click="changeNum(cart,'inc') "></div>
                                </div>
                                <div class="delete">
                                    <a href="javascript:;">
                                        <span class="icon-iconfontshanchu" @click="remove(cart,index)"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="append"></div>
                </li>
            </ul>
        </div>
    </div>



</template>

<script>
    export default {
        name: "Cart_list",
        computed: {
            carts(){
                return this.$store.state.carts
            },

        },

        methods:{
            changeNum(cart,type){
                this.$store.dispatch('changeNum',{cart:cart,type:type})

            },
            remove(cart,index){
                this.$store.dispatch('remove',{cart:cart.id,index:index})
            }
        }

    }
</script>

<style scoped>

</style>