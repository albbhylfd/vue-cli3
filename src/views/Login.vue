<template>
  <div class="login-container">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model.trim="form.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" v-preventReClick>登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
      <p>初始用户名：admin  密码：123</p>
    </el-form>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {
        userName: '',
        password: ''
      },
      rules: {
        // 用户名
        userName: [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (!value) {
                return callback(new Error('用户名不能为空'))
              } else if (value !== 'admin') {
                return callback(new Error('用户名或密码不正确'))
              }
              return callback()
            },
            trigger: 'blur'
          }
        ],
        // 密码
        password: [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (!value) {
                return callback(new Error('密码不能为空'))
              } else if (value !== '123') {
                return callback(new Error('用户名或密码不正确'))
              }
              return callback()
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['getUserName']),
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$router.push('/homeIndex')
          this.getUserName(this.form.userName)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm () {
      this.$refs.form.resetFields()
    }
  }
}
</script>
<style lang="scss">
  .login-container{
    width:30%;
    margin: 100px auto;
  }
</style>
