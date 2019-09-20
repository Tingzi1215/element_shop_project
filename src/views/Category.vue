<template>
<!--  <div class="about">-->
<!--    <div class="category" v-for="item in categories" :key="item.id">-->
<!--      <h3>{{item.name}}</h3>-->
<!--      <div class="category_box" >-->
<!--        <div class="category_box_flex" v-for="child in item.children" :key="child.id">-->
<!--          <img :src="'http://images.canon4ever.com/' + child.image" class="ico">-->
<!--          <span class="ino">{{child.name}}</span>-->
<!--        </div>-->
<!--&lt;!&ndash;        <div class="category_box_flex"><span>小米</span></div>  + &ndash;&gt;-->
<!--&lt;!&ndash;        <div class="category_box_flex"><span>小米</span></div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="category_box_flex"><span>小米</span></div>&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div id="wrapper">
    <div class="page-category" data-log="商品分类">
      <div class="page-category-wrap">
        <div class="list-wrap" id="m0" v-for="item in categories" :key="item.id">
            <h3 class="list_title">{{item.name}}</h3>
          <ol class="list_category">
            <li v-for="child in item.children" :key="child.id">
              <div class="img"><img :src="child.image | checkImg"></div>
              <div class="name">
                <router-link :to="{name:'list',params:{id:child.id}}">
                  <span>{{child.name}}</span>
                </router-link>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        categories:[],
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
      this.axios.get(`http://localhost:8000/api/category`).then(res=>{
        this.categories = res.data
      })
    }
  }
</script>

<style lang="scss">
/**{*/
/*  padding:0;*/
/*  margin:0;*/
/*}*/
/*!*body{*!*/
/*!*  background-color: #F4F3F3;*!*/
/*!*}*!*/
/*.about{*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  !*padding:10px;*!*/
/*  background-color: #F4F3F3;*/
/*  .category{*/
/*    background-color: #fff;*/
/*    !*width: 100%;*!*/
/*    margin:10px;*/
/*    height: 100%;*/
/*    .category_box{*/
/*      width: 100%;*/
/*      height: 100%;*/
/*      !*background-color: skyblue;*!*/
/*      display:flex;*/
/*      .category_box_flex{*/
/*        width: 100%;*/
/*        display:flex;*/
/*        flex-direction:column;*/
/*        position: relative;*/
/*        height: 100%;*/
/*        .ico{*/
/*          flex:1;*/
/*        }*/
/*        .ino{*/
/*          display:block;*/
/*          width: 100%;*/
/*          text-align: center;*/
/*          height: 100%;*/
/*          !*position: absolute;*!*/
/*          !*bottom:0;*!*/
/*        }*/
/*      }*/
/*    }*/
/*  }*/
/*  h3{*/
/*    !*background-color: yellow;*!*/
/*    text-align: center;*/
/*    font-size: 20px;*/
/*    font-weight:normal;*/
/*    line-height: 80px;*/
/*  }*/
/*}*/

</style>
