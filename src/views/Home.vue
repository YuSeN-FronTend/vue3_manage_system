<template>
  <div class="home">
    <el-container style="height: 100%; width:100%">
      <el-header style="background-color: #4b6584;">
        <Header/>
      </el-header>
      <el-container>
        <el-aside style="background-color: #778ca3; width:auto;">
          <Aside/>
        </el-aside>
        <el-main style="background-color:#ecf0f1"><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Aside from '@/components/Aside.vue'
export default {
  name: "Home",
  components:{
    Header,
    Aside
  }
};
</script>

<style lang="less" scoped>
.home{
  height: 100%;
  width: 100%;
}
</style>
