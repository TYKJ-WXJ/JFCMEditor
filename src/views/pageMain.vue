<template>
  <div class="wrapper">
    <editor></editor>
  </div>
</template>

<script>
  // 引入工具函数
//  import webSock from '@/utils/webSock';
//  import JsonD from './../../dist/static/JSON/svgData.json'
//  import SeparateData from '@/utils/modular';
//  import server from '@/services/server'
  // 组件
  import Editor from '@/components/editor';
//  import {mapGetters, mapActions} from 'vuex';
//  import dataFunc from '@/utils/data'
//  let JsonD = require('./../../dist/static/JSON/svgData.json');
  export default{
    data() {
      return {
        msg: 'pageMain'
      }
    },
    created() {
//      this.getTopicsFunc();
    },
    computed: {},
    mounted() {},
    methods: {},
    components: {
      Editor
    }
  }
</script>

<style>
  .wrapper {
    margin: 20px auto 0;
    left: 50px;
    /*width: 1110px;*/
  }
</style>
