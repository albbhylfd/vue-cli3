<template>
  <div class="table-box">
    <Pagination v-if="total>0" :total="total" :page.sync="pageParam.index" :limit.sync="pageParam.size" @pagination="pagination" :page-sizes="[10, 20, 30, 40, 50, 100, 500]"/>
  </div>
</template>

<script>
export default {
  components: {

  },
  computed: {},
  watch: {},
  data () {
    return {
      total: 100,
      pageParam: {
        index: 1,
        size: 10
      }
    }
  },
  created () {

  },
  methods: {
    pagination () {

    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
