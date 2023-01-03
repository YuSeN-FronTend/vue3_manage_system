<template>
    <div class="aside">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        </el-radio-group>
        <el-menu 
        :default-active="changePath" 
        class="el-menu-vertical-demo" 
        active-text-color="#ffd04b"
        background-color="#778ca3" 
        text-color="#fff"
        :collapse="isCollapse" 
        @select="handleSelect"
        router>
            <el-menu-item index="/Dashboard">
                <el-icon>
                    <location />
                </el-icon>
                <template #title>Navigator One</template>
            </el-menu-item>
            <el-menu-item index="/Operation">
                <el-icon>
                    <Menu />
                </el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon>
                    <document />
                </el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
// import {
//     Document,
//     Menu as IconMenu,
//     Location,
//     Setting,
// } from '@element-plus/icons-vue'
export default {
    setup () {
        const store = useStore();
        const route = useRoute();
        const isCollapse = ref(false);
        const changePath = ref('/Dashboard');
        // 载入后钩子函数 为了保证侧边栏刷新时保持当前路由选择
        onMounted(() => {
            changePath.value = route.fullPath
        })
        // 监听vuex中state属性的变化并给isCollapse赋值来切换侧边栏状态
        watch(store.state, (newValue) => {
            isCollapse.value = newValue.toggle
        })
        // 切换路由函数
        const handleSelect = (key, keyPath) => {
            changePath.value = keyPath[0];
            console.log(changePath.value);
        }
        return {
            isCollapse,
            handleSelect,
            changePath,
            route
        }
    },
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 240px;
        }
    .el-menu{
        border-right: 0;
    }
</style>