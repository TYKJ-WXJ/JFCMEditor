<template>
    <div>
      <video id=example-video width=600 height=300 class="video-js vjs-default-skin" controls>
        <source
          src= 'http://192.168.1.108:7086/live/cameraid/1000000%240/substream/1.m3u8'
          type="application/x-mpegURL">
      </video>
    </div>
</template>

<script>
  import videoJs from 'videojs-flash';
  require('../../node_modules/videojs-font/css/videojs-icons.css');
  export default{
    data() {
      return {
        url: ''
      }
    },
//     methods: {
//
//      },
    mounted() {
      let player = videoJs('example-video');
      player.play();
    },
    components: {}
  }
</script>

<style>

</style>
