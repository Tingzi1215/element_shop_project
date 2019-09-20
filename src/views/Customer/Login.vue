<template>
    <div>
        <form class="login" v-on:submit.prevent="onSubmit" style="text-align: center">
            <div class="logo">
                <img src="">
            </div>
            <div class="land">账号登陆</div>
            <div class="user">
                <input name="username" placeholder="请输入用户名" type="text" v-model="customer.email">
            </div>
            <div class="password">
                <input type="password" placeholder="请输入密码" v-model="customer.password">
            </div>
            <div class="btn">
                <button type="submit" >登陆</button>
            </div>
            <div  ><router-link to="/register"  class="zheCe">注册账号</router-link></div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customer: {
                    email: '',
                    password: '',
                }

            }
        },
        created() {

        },
        methods: {
            onSubmit(){
                //定义常量，登录时必须的要的字段
                const data = {
                    grant_type: 'password', //oauth的模式
                    client_id: 1,   //上面所说的client_id
                    client_secret: 'DI4TzBdeOQw6vRot5zHP3IrvSwEk8nBSgSNHpSzd',//同上
                    username: this.customer.email,
                    password: this.customer.password,
                }

                console.log(data)
                this.axios.post('/oauth/token',data).then(res => {

                    if(res.status == 200) { //如果成功了
                        //本地存储语法：
                        localStorage.token_type = res.data.token_type  //存入localStorage
                        localStorage.access_token = res.data.access_token

                        this.$router.push({name: "home"})
                    }
                })
            },

        }
    }

</script>

<style>
    .land {
        font-weight: bold;
        font-size: 25px;
        line-height: 50px;
    }

    .user, .password {
        line-height: 80px;
    }

    .user input, .password input {
        border: none;
        border-bottom: #FF4D14 1px solid;
        width: 70%;
        padding: 15px;


    }

    .btn button {
        font-size: 15px;
        background-color: #FF6B00;
        padding: 5px;
        border: none;

        width: 70%;

    }
    .zheCe{
        line-height: 40px;
        color: dodgerblue;
        border-bottom: 1px solid dodgerblue;


    }

</style>
