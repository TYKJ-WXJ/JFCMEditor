<template>
  <div class="wrapper">
    <Editor :options="options"></Editor>
    <!--<p>{{ wb }}</p>-->
    <div>{{getWebs.web}}</div>
  </div>
</template>

<script>
  // 引入工具函数
  import webSock from '@/utils/webSock';
//  import JsonD from './../../dist/static/JSON/svgData.json'
  import SeparateData from '@/utils/modular';
  import server from '@/services/server'
  // 组件
  import Editor from '@/components/editor';
  import {mapGetters, mapActions} from 'vuex';
//  import dataFunc from '@/utils/data'
//  let JsonD = require('./../../dist/static/JSON/svgData.json');
  export default{
    data() {
      return {
        msg: 'pageMain',
        options: {
          'style_operation': false,
          'thumbnail': false
        }
      }
    },
    created() {
//      this.getTopicsFunc();
    },
    computed: {
      ...mapGetters([
        'getJsonD',
        'getWebs'
      ])
    },
    mounted() {
//      svgThree.drawSvg();
      this.xiugai();
      this.loadJson();
    },
    methods: {
      ...mapActions([
        'changeJsonD'
      ]),
      xiugai() {
//        console.log(this.$store);
        webSock.connectZDY({
          'socks': this.$store
        });
//        console.log(gaib);
      },
      loadJson() {
        // 获取JSON数据
        server.getJSON().then((res) => {
          console.log(res.data);
          // 分离数据
          SeparateData.separate(res.data, this.$store);
          // 修改JSON数据
//          this.getWebs.web;
          this.changeJsonD(res.data);
//          console.log(dataFunc(2));
//          dataFunc = res.data;
          console.log(this.getJsonD);
//          console.log(this.getWebs);
        }).catch((err) => {
          console.log(err);
        })
      }
    },
    components: {
      Editor
    }
  }
</script>

<style>
  .wrapper {
    margin: 20px auto 0;
    width: 1110px;
  }
</style>
