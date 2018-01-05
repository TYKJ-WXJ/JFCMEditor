<template>
  <div>
    <p>当前日期：{{date}}</p>
  </div>
</template>

<style scoped>
</style>

<script>
  // 工具
  import utils from '@/utils/index';

  export default{
    data () {
      return {
        date: utils.formatDate(new Date(), 'yyyy年MM月dd日')
      };
    },
    created() {

    },
    components: {}
  }
</script>
