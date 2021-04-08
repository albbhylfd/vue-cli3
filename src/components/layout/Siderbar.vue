<template>
  <el-aside class="siderbar-container" :class="isCollapse ? 'el-collapsed' : 'el-expanded'">
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      router>
      <el-menu-item index="homeIndex">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu v-for="item in menuList" :index="item.route" :key="item.route">
        <!-- 一级菜单名称 -->
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.list" :key="subItem.route">
          <!-- 二级菜单 -->
          <el-menu-item :index="subItem.route">{{subItem.title}}</el-menu-item>
          <el-submenu v-for="child in subItem.list" :index="child.route" :key="child.route">
            <!-- 三级菜单 -->
            <span slot="title">{{subItem.title}}</span>
            <el-menu-item :index="child.route">{{child.title}}</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {

  },
  computed: {
    ...mapState(['isCollapse'])
  },
  watch: {},
  data () {
    return {
      menuList: [
        {
          title: '导航一',
          route: '/1',
          list: [
            {
              title: '表格',
              route: 'table'
            }
          ]
        },
        {
          title: '导航二',
          route: '/2',
          list: [
            {
              title: '选项1',
              route: '/2-1',
              list: [
                {
                  title: '选项1-1',
                  route: 'table'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  created () {

  },
  methods: {},
  mounted () {}
}
</script>

<style lang="scss">
  .siderbar-container{
    .el-menu{
      border-right:none;
      .el-menu-item-group__title{
        display:none;
      }
    }
    // 折叠卡顿
    .el-menu--collapse{
      width:100%!important;
      .el-submenu__title{
        span, .el-submenu__icon-arrow{
          display: none;
        }
      }
    }
  }
  // 展开
  .el-collapsed{
    transition: all 0.5s;
    flex: 0 0 65px;
  }
  // 折叠
  .el-expanded{
    transition: all 0.5s;
    flex:0 0 212px;
  }
</style>
