<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="Shuju" class="big">发送SVG数据</button>
    <button @click="Close" class="big">关闭</button>
    <button @click="CS" class="big">测试</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import webSock from '@/utils/webSock';
  export default{
    data() {
      return {
        msg: webSock.connectZDY()
      }
    },
    computed: {
      ...mapGetters([
        'getWebs'
      ])
    },
    methods: {
      ...mapActions([
        'changeWebs'
      ]),
      xiugai() {
        let gaib = webSock.connectZDY();
        this.changeWebs(gaib);
      },
      Shuju: function () {
        let sjobj = {'svg': [{'svgId': 1, 'linkStart': true, 'attrId': 1, 'value': 1}, {'svgId': 2, 'linkStart': true, 'attrId': 2, 'value': 2}]};
        webSock.Send(sjobj);
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
