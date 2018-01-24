<template>
  <div class="pageDetail">
    <!--<play></play>-->
    <!--<lunbo></lunbo>-->
    <!--<ditu></ditu>-->
    <!--<dthree></dthree>-->
    <iframe-d></iframe-d>
    <p id="ms">{{ mbsj }}</p>
    <button @click="loaded"></button>
  </div>
</template>

<script>
//  import $ from 'jquery';
//  import Play from '@/components/play.vue';
//  import Lunbo from '@/components/lunbo.vue';
//  import Ditu from '@/components/ditu.vue';
//  import Dthree from '@/components/vue-model-3D.vue'; // 无用的插件
  import IframeD from '@/components/iframe.vue';
  export default{
    data() {
      return {
        mbsj: '模板数据'
      }
    },
    components: {
//      Ditu
//      Lunbo
//      Dthree
      IframeD
    },
    methods: {
      loaded() { // iframe跨域请求还没有解决，同域使用一下内容没有问题
//        this.mbsj = $('#ifm1').contents().find('#mb1').val(); // 子页面数据传递到父页面
//        $('#ifm1').contents().find('#mb1').val(111); // 父页面数据传递到子页面
        document.getElementById('ifm1').src = 'http://www.baidu.com'; // 刷新模板
      }
    }
  }
</script>

<style>
  .pageDetail {
    background-color: #fff;
    height: 300px;
    width: 500px;
  }
</style>
