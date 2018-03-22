<template>
  <div class="whole">
    <video :src="videoOptions" controls='controls'>
      您的浏览器不支持 video 标签。
    </video>
  </div>

</template>

<script>
  export default {
    name: 'Play',
    data () {
      return {
        videoOptions: 'src/assets/img/bgs.mp4'
      }
    }
  }
</script>

<style>
  /* 整体显示的定位 */
  .whole{
    width: 1000px;
    height: 700px;
    position: fixed;
    left: 250px;
  }
</style>
