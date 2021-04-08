import Pagination from '../components/pagination'
export default {
  install (Vue) {
    // 插件类组件
    Vue.use(Pagination) // 分页组件
    // 防重复点击(指令实现)
    Vue.directive('preventReClick', {
      inserted (el, binding) {
        el.addEventListener('click', () => {
          if (!el.disabled) {
            el.disabled = true
            setTimeout(() => {
              el.disabled = false
            }, binding.value || 3000)
          }
        })
      }
    })
  }
}
