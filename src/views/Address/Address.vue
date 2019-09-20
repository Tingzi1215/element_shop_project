<template>
    <div id="wrapper">
        <div class="page-address-list" data-log="地址列表">
            <div class="address-choose">
                <ul class="ui-list">
                    <li class="ui-list-item" v-for="item in address" @click="choose({id:item.id})">
                        <p class="ui_fz30"><span class="consignee">{{item.name}}</span>
                            <span>{{item.tel}}</span>
                    </p>
                        <p>{{item.area}} {{item.city}} {{item.province}}</p>
                        <p>{{item.detail}}</p></li>
                </ul>
            </div>
            <div class="add">
                <router-link to="/address/addressCreate">
                <a href="new_address.html" class="ui-button ui-button-active"><span>新建地址</span></a>
                </router-link>
            </div>
            <div class="popup-risk-check"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                address:{
                    name:'',
                    tel:'',
                    pca:'',
                    detail:''
                }

            }
        },
        created(){
            this.init()
        },
        methods:{
            init(){
                this.axios.get(`api/address`).then(res=>{

                    this.address=res.data
                })
            },
            choose(id){

                this.axios.patch(`api/address?address_id=${id.id}`).then(res=>{
                    this.$router.push({name:'checkout'})
                })
            }
        }
    }
</script>

<style>
    .page-address-list .add{
        bottom: 50px;
    }
</style>
