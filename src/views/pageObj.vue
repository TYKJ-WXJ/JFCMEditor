<template>
  <div id="info">
    <a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - OBJLoader test
  </div>
</template>

<script>
  import threeObj from '@/utils/three-model';
  export default{
    data() {
      return {
        msg: 'hello vue'
      }
    },
    mounted() {
      threeObj.drawObj();
    },
    components: {}
  }
</script>

<style>

</style>
