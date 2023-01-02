<template>
    <div class="header">
        <el-icon :size="40" color="#fff" style="cursor: pointer;"  @click="changeMenu">
            <Reading />
        </el-icon>
        <span class="title">
            book-manage-system
        </span>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from "vuex";
export default {
    setup () {
        const store = useStore();
        const isCollapse = ref(false);
        // 修改vuex state中的值用于修改侧边栏状态
        function changeMenu() {
            isCollapse.value = !isCollapse.value
            store.commit('change', isCollapse.value)
        }
        return {
            changeMenu
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
    .title{
        font-weight: 600;
        padding-left: 10px;
        font-size: 20px;
        color: white;
    }
}
</style>