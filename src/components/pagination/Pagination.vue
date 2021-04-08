<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :pager-count="count"
      :layout="layout"
      :total="total"
      v-bind="$attrs"
      :page-sizes="pageSizes"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    count: {
      type: Number,
      default: 7
    },
    pageSizes: {
      type: Array,
      default () {
        return [10, 20, 30, 40, 50, 100]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.page
      },
      set (val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get () {
        return this.limit
      },
      set (val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      /**
       * 场景：API返回总数为25条，按照10条每页，一共有3页。选了2的页数之后，然后把size选择成30条，
       * 这个时候，分页就会同时触发size选择函数以及current选择函数。{page: 2, size: 30}，{page: 1, size: 30}请求两次，会导致列表会有暂无数据的情况
       * 解决办法：用setTimeout(函数，0)，用延迟，虽然还是两次请求，但是每次都是{page: 1, size: 30}
       */
      setTimeout(() => {
        this.$emit('pagination', { page: this.currentPage, limit: val })
      }, 0)
      // this.$emit('pagination', { page: this.currentPage, limit: val })
    },
    handleCurrentChange (val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
    }
  }
}
</script>
<style lang="scss">
.pagination-container {
  text-align: right;
  background: #fff;
  padding: 32px 0px;
  /* .el-input__inner{
    &:hover{
      border-color:#ebb100!important;
    }
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active{
    background:$link-color
  } */
  /* .el-pager{
    .number{
      &:hover{
        color:#ebb100!important;
      }
    }
  } */
}
</style>
