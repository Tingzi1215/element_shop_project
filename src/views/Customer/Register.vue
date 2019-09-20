<template>
    <div>
        <form class="register" style="text-align: center" v-on:submit.prevent="submit" >
            <div class="logo">
                <img src="">
            </div>
            <div class="land">账号注册</div>
            <div class="user">
                <input name="username" placeholder="请输入用户名" type="text" v-model="customer.email">
                <div>{{errors.email}}</div>
            </div>
            <div class="password">
                <input type="password" placeholder="请输入密码" v-model="customer.password">
                <div>{{errors.password}}</div>
            </div>
            <div class="btn">
                <button type="submit">注册成功</button>
            </div>
            <div ><router-link to="/login"  class="zheCe">如有账号请直接登录</router-link></div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                customer: {
                    email:'',
                    password:''
                },
                errors:{
                    email:'',
                    password:''
                }
            }
        },
        methods: {
            submit() {

                this.axios.post(`api/register`, this.customer).then(res => {
                    console.log(res)
                    alert('注册成功')
                    this.$router.push({name: 'register_log'})
                }).catch(error=>{
                    console.log(error)
                    this.errors.email = error.errors.email ? '填邮箱' : ''
                    this.errors.password = error.errors.password ? '填密码' : ''
                })
            }
        },
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


    }

    .btn button {
        font-size: 15px;
        background-color: #FF6B00;
        padding: 5px;
        border: none;
        border-radius: 3%;
        width: 70%;

    }
    .zheCe{
        line-height: 40px;
        color: dodgerblue;
        border-bottom: 1px solid dodgerblue;

    }

</style>

