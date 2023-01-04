<template>
    <div class="login">
        <div class="box">
            <div class="title">
                Login
            </div>
          <div class="inp">
              <div class="mdui-card-media  mdui-theme-accent-green"><div class="mdui-textfield mdui-textfield-floating-label" id="md">
                <i class="mdui-icon material-icons">account_circle</i>
                <label class="mdui-textfield-label">User name</label>
                <textarea class="mdui-textfield-input" type="text"></textarea>
            </div></div>
              <div class="mdui-card-media  mdui-theme-accent-green"><div class="mdui-textfield mdui-textfield-floating-label" id="md">
                <i class="mdui-icon material-icons">https</i>
                <label class="mdui-textfield-label">Password</label>
                <input class="mdui-textfield-input" type="text" pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$" required />
            </div></div>
          </div>
            <div class="btn-box">
                <el-button link type="success" class="btn" @click="loginTo">login</el-button>
                <el-button link type="success" class="btn" @click="loginTo">register</el-button>
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
        .title{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 25%;
            font-size: 25px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.7);
        }
        .inp{
            height: 45%;

            #md{
                padding: 4px 50px 8px 50px;              
            }
        }
        .btn-box{
            height: 30%;
            display: flex;
         .btn {
             width: 50%;
          }
        }
    }
}
</style>