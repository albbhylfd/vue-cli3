import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: resolve => require(['@/views/Login.vue'], resolve)
  },
  {
    path: '/',
    name: 'Home',
    meta: { title: '首页' },
    // component: () => import(/* webpackChunkName: "about" */ '@/views/HomeIndex.vue')
    component: resolve => require(['@/components/layout/Home.vue'], resolve),
    children: [
      {
        path: '/homeIndex',
        name: 'HomeIndex',
        meta: { title: '首页' },
        component: resolve => require(['@/views/HomeIndex.vue'], resolve)
      },
      {
        path: '/table',
        name: 'Table',
        meta: { title: '表格' },
        component: resolve => require(['@/views/Table.vue'], resolve)
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  // 修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 解决部署之后Loading chunk {n} failed 这种报错
router.onError(error => {
  const pattern = /Loading chunk (\w)+ failed/g
  const isError = error.message.match(pattern)
  if (isError) {
    window.location.reload()
  } else {
    console.log(error)
  }
})
