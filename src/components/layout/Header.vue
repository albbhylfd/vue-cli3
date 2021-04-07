<template>
  <el-header class="header-container">
    <p>欢迎您：{{userName}}
    <i @click="setCollapse" :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </p>
    <el-button @click="signOut" v-preventReClick>退出</el-button>
  </el-header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {

  },
  computed: {
    ...mapState(['userName', 'isCollapse'])
  },
  watch: {},
  data () {
    return {
    }
  },
  created () {

  },
  methods: {
    ...mapMutations(['getUserName', 'setCollapse']),
    // 退出
    signOut () {
      this.getUserName('')
      this.$router.push('/login')
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
