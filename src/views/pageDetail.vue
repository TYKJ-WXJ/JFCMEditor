<template>
  <div class="pageDetail">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        msg: 'pageDetail'
      }
    },
    components: {}
  }
</script>

<style scoped>
  .pageDetail {
    background-color: #fff;
  }
</style>
