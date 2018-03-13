<template>
  <div>
    <p>{{ getWebs.web }}</p>
    <button @click="Shuju" class="big">发送SVG数据</button>
    <button @click="Close" class="big">关闭</button>
    <button @click="CS" class="big">测试</button>
    <button @click="xiugai" class="big">修改</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import webSock from '@/utils/webSock';
  export default{
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapGetters([
        'getWebs'
      ])
    },
    mounted() {
      this.xiugai();
    },
    methods: {
      ...mapActions([
        'changeWebs'
      ]),
      xiugai() {
        console.log(this.$store);
        let fa = {
          'socks': this.$store
        };
        webSock.connectZDY(fa);
//        console.log(gaib);
      },
      Shuju: function () {
        let sjobj = {'svg': [{'svgId': 1, 'linkStart': true, 'attrId': 1, 'value': 1}, {'svgId': 2, 'linkStart': true, 'attrId': 2, 'value': 2}]};
        webSock.Send(sjobj);
        console.log(1);
      },
      Close: function () {
        webSock.Close();
      },
      CS: function () {
        webSock.SendCS();
      }
    },
    watch: {
      msg(val, oldval) {
        console.log(val, oldval);
      }
    },
    components: {}
  }
</script>

<style>
  .big{
    width: 140px;
    height: 40px;
  }

</style>
