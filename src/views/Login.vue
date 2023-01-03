<template>
    <div class="login">
        <div class="box">
            <div class="title">
                Login
            </div>
          <div class="inp">
              <div>username <el-input style="width: 250px;" v-model="username" placeholder="Please input" /></div>
              <div>password <el-input v-model="password" style="width: 250px;" placeholder="Please input" type="password" show-password /></div>
          </div>
            <div class="btn-box">
                <el-button round class="btn" @click="loginTo">login</el-button>
                <el-button round class="btn" @click="loginTo">register</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup () {
        // 定义一个router实例
        const router = useRouter();
        const username = ref('');
        const password = ref('');
        // 登陆跳转路由的方法
        function loginTo(){
            router.push('/Home');
        }
        return {
            loginTo,
            username,
            password
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(45deg, #3498db, #fffa65, #2ecc71);
    .box{
        height: 300px;
        width: 400px;
        background-color: rgba(235, 235, 235, 0.1);
        backdrop-filter: blur(3px);
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-radius: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .title{
            display: flex;
            align-items: center;
            font-size: 25px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.7);
        }
        .inp{
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        .btn-box{
            height: 50px;
         .btn {
             width: 100px;
             margin: 0 20px
          }
        }
        
    }
}
</style>