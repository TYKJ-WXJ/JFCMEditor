<template>
  <div>
    <div id="threeWorld" class="one"></div>
    <div id="Stats-output"></div>
  </div>
</template>

<script>
  import threeX from '@/utils/xuexi/one'
  export default{
    data() {
      return {
        msg: 'hello vue'
      }
    },
    mounted: function () {
      threeX.init();
    }
  }
</script>

<style>
  .one{
    margin: 0;
    overflow: hidden;
  }

</style>
