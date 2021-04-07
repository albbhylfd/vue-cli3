<template>
  <div class="layout-box">
    <!-- 头部 -->
    <Header></Header>
    <el-container>
      <!-- 侧边栏 -->
      <Siderbar></Siderbar>
      <!-- 内容 -->
      <el-main>
        <el-breadcrumb class="breadcrumb-container">
          <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="right-view">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './Header.vue'
import Siderbar from './Siderbar.vue'
export default {
  components: {
    Header,
    Siderbar
  },
  data () {
    return {
      breadcrumbList: []
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[1]
      // 首页处理
      if (first && first.name.trim() === 'HomeIndex') {
        matched = matched.splice(1, 1)
      }
      this.breadcrumbList = matched
    }
  },
  mounted () {
    this.getBreadcrumb()
  }
}
</script>

<style lang="scss">

</style>
