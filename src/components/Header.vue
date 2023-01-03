<template>
    <div class="header">
        <div class="left-box">
            <el-icon :size="40" color="#fff" style="cursor: pointer;" @click="changeMenu">
                <Reading />
            </el-icon>
            <span class="title">
                book-manage-system
            </span>
        </div>
        <el-dropdown>
            <span class="el-dropdown-link">
                <div class="quit">
                
                </div>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item @click="quit" divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
export default {
    setup () {
        const store = useStore();
        const isCollapse = ref(false);
        const router = useRouter();
        const value = ref('')

        const options = [
            {
                value: 'Option1',
                label: 'Option1',
            },
            {
                value: 'Option2',
                label: 'Option2',
            },
            {
                value: 'Option3',
                label: 'Option3',
            },
            {
                value: 'Option4',
                label: 'Option4',
            },
            {
                value: 'Option5',
                label: 'Option5',
            },
        ]
        // 修改vuex state中的值用于修改侧边栏状态
        function changeMenu() {
            isCollapse.value = !isCollapse.value
            store.commit('change', isCollapse.value)
        }
        // 退出登录
        function quit() {
            router.push('/')
        }
        return {
            changeMenu,
            value,
            options,
            quit
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-box{
        display: flex;
        align-items: center;
        .title {
                font-weight: 600;
                padding-left: 10px;
                font-size: 20px;
                color: white;
            }
    }
    .quit{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-image: url('../assets/image.png');
        background-size: 100% 100%;
    }
}
</style>