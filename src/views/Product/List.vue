<template>
    <div class="page-list" data-log="商品列表">
        <!--
        <div class="header">
            <div class="left">
                <a class="home"><img src="http://s1.mi.com/m/images/m/icon_back_n.png" class="ib"></a>
            </div>
            <div class="tit"><h2 data-log="HEAD-标题-商品列表"><span class="title">商品列表</span></h2></div>

            <div class="right">
                <a href="/1/#/search/index">
                    <div class="icon icon-search"></div>
                </a>
            </div>
        </div>
        -->
        <ol class="version">
            <li v-for="item in product" :key="item.id">
                <a class="version-item" href="/1/#/product/view?product_id=3280">
                    <div class="version-item-img">
                        <img :src="item.image | checkImg">
                    </div>
                    <div class="version-item-intro">
                        <div class="version-item-name">
                            <router-link :to="{name:'view',params:{id:item.id}}">
                                <p>{{item.name}}</p>
                            </router-link>
                        </div>
                        <div class="version-item-intro-price"><span>{{item.price}}</span></div>
                    </div>
                </a>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                product:[]
            }
        },
        filters:{
            checkImg(value){
                if(!value){
                    return null
                }else{
                    return value = value.substr(0,4) == 'http' ? value : 'http://images.canon4ever.com/' + value
                }
            }
        },
        created(){
            let id = this.$route.params.id
            this.axios.get(`api/product/list?id=${id}`).then(res=>{
                this.product = res.data
            })
        }
    }
</script>

<style scoped>

</style>
