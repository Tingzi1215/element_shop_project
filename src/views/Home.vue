<template>
  <div class="home">
<!--    <md-card-media>-->
      <!-- swiper -->
      <swiper :options="swiperOption" class="carousel">
        <swiper-slide v-for="slide in slides" :key="slide.id">
          <img :src="'http://images.canon4ever.com/' + slide.image" >
        </swiper-slide>
<!--        <swiper-slide>Slide 2</swiper-slide>-->
<!--        <swiper-slide>Slide 3</swiper-slide>-->
<!--        <swiper-slide>Slide 4</swiper-slide>-->
<!--        <swiper-slide>Slide 5</swiper-slide>-->
<!--        <swiper-slide>Slide 6</swiper-slide>-->
<!--        <swiper-slide>Slide 7</swiper-slide>-->
<!--        <swiper-slide>Slide 8</swiper-slide>-->
<!--        <swiper-slide>Slide 9</swiper-slide>-->
<!--        <swiper-slide>Slide 10</swiper-slide>-->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
<!--    </md-card-media>-->
    <div class="content">
      <div class="content_box" v-for="banner in banners" :key="banner.id">
        <img :src="banner.image | check" width="100%">
      </div>
<!--      'http://images.canon4ever.com/'-->
<!--      <div class="content_box"></div>-->
<!--      <div class="content_box"></div>-->
    </div>
    <div class="container_list" v-for="recommend in recommends" :key="recommend.id">
      <div class="container_img">
        <img class="ico" :src="recommend.image | check">
<!--        <div class="container_title" >-->
        <img class="tag" src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png">
<!--        </div>-->
      </div>
      <div class="container_box">
        <h3 class="brands">{{recommend.name}}</h3>
        <p class="detail">{{recommend.description}}</p>
        <span class="price">{{recommend.price}}</span>
      </div>
    </div>
  </div>
<!--    <div id="wrapper">-->
<!--        <div class="page-index" id="home" data-log="首页">-->
<!--            <div class="index-header">-->
<!--                <div class="search_bar">-->
<!--                    <a href="javascript:;">-->
<!--                        <span class="icon icon-search"></span>-->
<!--                        <span class="text">搜索商品名称</span>-->
<!--                    </a>-->
<!--                </div>-->
<!--                <div class="search_bottom"></div>-->
<!--            </div>-->

<!--            &lt;!&ndash;焦点图&ndash;&gt;-->
<!--            <section class="slider">-->
<!--                <div class="flexslider">-->
<!--                    <ul class="slides">-->
<!--                        <li v-for="slide in slides" :key="slide.id">-->
<!--                            <a href="">-->
<!--                                <img :src="'http://images.canon4ever.com/' + slide.image"/>-->
<!--                            </a>-->
<!--                        </li>-->
<!--&lt;!&ndash;                        <li>&ndash;&gt;-->
<!--&lt;!&ndash;                            <img src="http://i8.mifile.cn/v1/a1/T12LdgBXZv1RXrhCrK!720x360.jpg"/>&ndash;&gt;-->
<!--&lt;!&ndash;                        </li>&ndash;&gt;-->
<!--&lt;!&ndash;                        <li>&ndash;&gt;-->
<!--&lt;!&ndash;                            <img src="http://i8.mifile.cn/v1/a1/T1zgZvBgK_1RXrhCrK!720x360.jpg"/>&ndash;&gt;-->
<!--&lt;!&ndash;                        </li>&ndash;&gt;-->
<!--&lt;!&ndash;                        <li>&ndash;&gt;-->
<!--&lt;!&ndash;                            <img src="http://i8.mifile.cn/v1/a1/T1m4bgBsdv1RXrhCrK!720x360.jpg"/>&ndash;&gt;-->
<!--&lt;!&ndash;                        </li>&ndash;&gt;-->
<!--&lt;!&ndash;                        <li>&ndash;&gt;-->
<!--&lt;!&ndash;                            <img src="http://i8.mifile.cn/v1/a1/T17XD_Bjxv1RXrhCrK!720x360.jpg"/>&ndash;&gt;-->
<!--&lt;!&ndash;                        </li>&ndash;&gt;-->
<!--                    </ul>-->
<!--                </div>-->
<!--            </section>-->

<!--            &lt;!&ndash;推荐商品&ndash;&gt;-->
<!--            <div class="list">-->
<!--                <div class="section">-->
<!--                    <div class="mcells_auto_fill">-->
<!--                        <div class="body">-->
<!--                            <div>-->
<!--                                <div class="items" v-for="banner in banners" :key="banner.id" width="100%">-->
<!--                                    <img :src="banner.image | check" width="100%" height="auto" >-->
<!--                                </div>-->
<!--                            </div>-->
<!--&lt;!&ndash;                            <div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="items">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <img src="http://i8.mifile.cn/v1/a1/T1a9hgB7_v1RXrhCrK.jpg">&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            <div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="items">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <img src="http://i8.mifile.cn/v1/a1/T1F6WgBQYv1RXrhCrK.jpg">&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="section">-->
<!--                    <div>-->
<!--                        <div class="item">-->
<!--                            <div class="img">-->
<!--                                <img class="ico" src="http://i8.mifile.cn/v1/a1/T14xJTByZ_1RXrhCrK.jpg">-->
<!--                                <img class="tag " src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png">-->
<!--                            </div>-->
<!--                            <div class="info">-->
<!--                                <div class="name"><p>小米手机5</p></div>-->
<!--                                <div class="brief"><p>骁龙820处理器 / 4GB 内存 / 128GB 闪存 / 4轴防抖相机 / 3D陶瓷机身</p></div>-->
<!--                                <div class="price"><p>1999元 起</p></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="section">-->
<!--                    <div>-->
<!--                        <div class="item">-->
<!--                            <div class="img">-->
<!--                                <img class="ico" src="http://i8.mifile.cn/v1/a1/T14xJTByZ_1RXrhCrK.jpg">-->
<!--                                <img class="tag " src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png">-->
<!--                            </div>-->
<!--                            <div class="info">-->
<!--                                <div class="name"><p>小米手机5</p></div>-->
<!--                                <div class="brief"><p>骁龙820处理器 / 4GB 内存 / 128GB 闪存 / 4轴防抖相机 / 3D陶瓷机身</p></div>-->
<!--                                <div class="price"><p>1999元 起</p></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="section">-->
<!--                    <div>-->
<!--                        <div class="item">-->
<!--                            <div class="img">-->
<!--                                <img class="ico" src="http://i8.mifile.cn/v1/a1/T14xJTByZ_1RXrhCrK.jpg">-->
<!--                                <img class="tag " src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png">-->
<!--                            </div>-->
<!--                            <div class="info">-->
<!--                                <div class="name"><p>小米手机5</p></div>-->
<!--                                <div class="brief"><p>骁龙820处理器 / 4GB 内存 / 128GB 闪存 / 4轴防抖相机 / 3D陶瓷机身</p></div>-->
<!--                                <div class="price"><p>1999元 起</p></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="section">-->
<!--                    <div>-->
<!--                        <div class="item">-->
<!--                            <div class="img">-->
<!--                                <img class="ico" src="http://i8.mifile.cn/v1/a1/T14xJTByZ_1RXrhCrK.jpg">-->
<!--                                <img class="tag " src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png">-->
<!--                            </div>-->
<!--                            <div class="info">-->
<!--                                <div class="name"><p>小米手机5</p></div>-->
<!--                                <div class="brief"><p>骁龙820处理器 / 4GB 内存 / 128GB 闪存 / 4轴防抖相机 / 3D陶瓷机身</p></div>-->
<!--                                <div class="price"><p>1999元 起</p></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="section">-->
<!--                    <div>-->
<!--                        <div class="item">-->
<!--                            <div class="img">-->
<!--                                <img class="ico" src="http://i8.mifile.cn/v1/a1/T14xJTByZ_1RXrhCrK.jpg">-->
<!--                                <img class="tag " src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png">-->
<!--                            </div>-->
<!--                            <div class="info">-->
<!--                                <div class="name"><p>小米手机5</p></div>-->
<!--                                <div class="brief"><p>骁龙820处理器 / 4GB 内存 / 128GB 闪存 / 4轴防抖相机 / 3D陶瓷机身</p></div>-->
<!--                                <div class="price"><p>1999元 起</p></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

<!--        </div>-->
<!--    </div>-->
</template>

<script>
  import axios from 'axios'

  import 'swiper/dist/css/swiper.css'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {

  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      },
      slides:[],
      banners:[],
      recommends:[]
    }
  },
  filters:{
    check(value){
      if(!value){
        return null
      }else{
       return value = value.substr(0,4) == 'http' ? value : 'http://images.canon4ever.com/' + value
      }
    }
  },
  created(){
    this.axios.get(`http://localhost:8000/api`).then(res=>{
      this.slides = res.data.slides
      this.banners = res.data.banners
      this.recommends = res.data.recommends
    })
  },

  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
*{
  padding:0;
  margin:0;
}
.carousel{
  width: 100%;
  /*height: 170px;*/
    img{
        width:100%;
    }
}
.content{
  background-color: #E6E6E6;
  width: 100%;
  /*height: 170px;*/
  display:flex;
  .content_box{
    height: 160px;
    flex:1;
    background-color: #fff;
    /*justify-content: space-between;*/
    margin: 5px 0;
  }
  .content_box:nth-of-type(2){
    margin:5px 5px;
  }
}
.container_list{
  /*background-color: pink;*/
  display:flex;
  height: 180px;
  border-bottom: 1px solid #f1f1f1;
  /*width: 100%;*/
  .container_img{
    display:block;
    /*background-color: skyblue;*/
    flex:2;
    position: relative;
    .ico{
      width: 100%;
      position: relative;
      top: 45px;
    }
    /*.ico:first-child{*/
    /*  position:relative;*/
    /*  top: 20px;*/
    /*  left: 30px;*/
    /*}*/
    .tag{
      display:block;
      border-radius: 50%;
      /*background-color: black;*/
      height: 70px;
      width: 70px;
      position: absolute;
      top: 65px;
      z-index: 100000;
    }
  }
  .container_box{
    /*background-color: yellow;*/
    flex:5;
    position: relative;
    .brands{
      font-size: 20px;
      font-weight:normal;
      text-align: center;
      position: relative;
      top: 25px;
    }
    .detail{
      text-align: center;
      position: relative;
      top: 15px;
      color:#8F8F8F;
      margin:20px 11px;
    }
    .price{
      display:block;
      font-size:16px;
      color:red;
      font-weight:bold;
      text-align: center;
      position: relative;
      top: 10px;
    }
  }
}
</style>
