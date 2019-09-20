import Vue from 'vue'
import Vuex from 'vuex'
import axios from './http'


Vue.use(Vuex)
Vue.prototype.axios = axios

export default new Vuex.Store({
  state: {
    carts:[],
    changing:false,


  },
  mutations: {
    setCarts(state,carts){
      state.carts=carts
    },
    changeNum(state,payload){
      payload.type == 'inc' ?payload.cart.num++ : payload.cart.num--
    },
    remove(state,index){
      state.carts.splice(index.index,1)
    },
    changeStatus(state,type){
      state.changing=type
    }


  },
  actions: {
    //读取数据
    getAllCarts({commit}) {
      axios.get(`api/cart`).then(res => {

      commit('setCarts',res.data.carts)
      })
    },
    //加减数字
      changeNum({commit},payload){
      //防止数字乱跳，小于1
        if (this.state.changing){
          return
        }
      //判断减法不能小于1
        if (payload.type == 'dec' && payload.cart.num <= 1) {

          return
        }
              commit('changeStatus',true)
        axios.patch(`api/cart`, {cart_id: payload.cart.id, type: payload.type}).then(res => {
              commit('changeStatus',false)
              commit( 'changeNum', payload)
        })


      },
    //删除
    remove({commit},payload){
      axios.delete(`api/cart?cart_id:${payload.cart.id}`).then(res => {
        console.log(res)
        commit('remove',payload)
      })
    }

  },
  getter:{
    total() {
      let num = 0
      let price =0
      this.carts.map(item => {
        num+=item.num
        price+=item.product.price*item.num
      })
      return{num:num,price:price}
    }
    //计算总数
  }
})
