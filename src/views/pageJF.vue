<template>
  <div id="ThreeJS" style="position: absolute; left: 0px; top: 0px"></div>
</template>

<script>
import JF from '@/utils/jf';
export default{
  data() {
    return {
      msg: 'hello vue'
    }
  },
  mounted() {
    JF();
  },
  components: {}
}
</script>

<style>

</style>
