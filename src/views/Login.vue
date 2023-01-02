<template>
    <div class="login">
        <button @click="loginTo">登录</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup () {
        // 定义一个router实例
        const router = useRouter();
        // 登陆跳转路由的方法
        function loginTo(){
            router.push('/Home');
        }
        return {
            loginTo
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    height: 100%;
    width: 100%;
}
</style>