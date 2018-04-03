<template>
  <div id="ThreeJS" style="position: absolute; left: 100px; top: 200px"></div>
</template>

<script>
import JF from '@/utils/jf';
import server from '@/services/server';
export default{
  data() {
    return {
      msg: 'hello vue'
    }
  },
  mounted() {
//    JF();
    this.svgData();
  },
  methods: {
    svgData() {
      // 获取JSON数据
      server.getSvgJSON().then((res) => {
        console.log(res.data);
        let dt = {
          id: '12',
          name: 'ni'
        }
        JF(dt);
      }).catch((err) => {
        console.log(err);
      })
    }
  },
  components: {}
}
</script>

<style>

</style>
