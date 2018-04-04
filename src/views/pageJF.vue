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
      server.getAreas().then((res) => {
        console.log(res.data.data);
        // 将字符串转成对象
        let svgData = JSON.parse(res.data.data[0].svg);
        console.log(svgData);
        JF(svgData);
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
