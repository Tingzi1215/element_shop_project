<template>
    <div id="wrapper">
        <div class="page-address-edit" data-log="地址">

            <div class="edit-box">
                <ul class="ui-list">
                    <li class="ui-list-item">
                        <div class="label">收货人：</div>
                        <div class="ui-input"><input placeholder="真实姓名" name="consignee" maxlength="15" type="text" v-model="name"></div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">手机号码：</div>
                        <div class="ui-input"><input placeholder="手机号" name="tel" maxlength="13" type="tel" v-model="tel"></div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">所在地区：</div>
                        <div class="ui-input">
                            <input  @click="address" placeholder="省 市 区" name="pcd" maxlength="20" type="text" readonly="readonly" value="" v-model="pca">
                        </div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">街道地址：</div>
                        <div class="ui-input"><input placeholder="详细地址" name="address" maxlength="120" type="text" v-model="detail"></div>
                    </li>
                </ul>
                <div class="save-button">
                    <a href="javascript:;" class="ui-button" @click="hold"><span>保存地址</span></a>
                </div>
            </div>


            <div class="ui-mask" :style="isShow"></div>
            <div class="ui-pop" :style="isShow">
                <div class="ui-pop-content">
                    <div class="region-list">
                        <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
                    </div>
                </div>
                <div class="ui-pop-title">选择所在地区</div>
                <div class="ui-pop-close"><a><span class="icon-10chahaokuang"></span></a></div>
            </div>


            <div class="popup-risk-check"></div>
        </div>
    </div>
</template>

<script>
    import VDistpicker from 'v-distpicker'
    export default {
        components: { VDistpicker },
        data(){
            return{
                name:'',
                tel:'',
                pca:'',
                detail:'',
                isShow:'display:none'
            }

        },
        methods: {
            hold(){
                this.axios.post(`api/address`,{
                    name:this.name,
                    tel:this.tel,
                    pca:this.pca,
                    detail:this.detail
                }).then(res => {
                    // console.log(res)
                    this.$router.push({name:'address'})
                })

            },
            address(){
                this.isShow='display:block'
            },
            onSelected(data) {
                this.pca=data.area.value+' '+data.city.value+' '+data.province.value
                this.isShow='display:none'
            },
        }
    }
</script>

<style>
    .page-address-edit .save-button{
        bottom: 50px;
    }
</style>
