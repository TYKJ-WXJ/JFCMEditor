<template>
  <div>
    <!--<play></play>-->
    <!--<lunbo></lunbo>-->
    <!--<ditu></ditu>-->
    <!--<dthree></dthree>-->
    <!--<iframe-d></iframe-d>-->
    <!--<p id="ms">{{ mbsj }}</p>-->
    <!--<input id="shuru" type="text">-->
    <!--<button @click="loaded"></button>-->
    <!--<three-mb></three-mb>-->
    <three-x></three-x>
  </div>
</template>

<script>
//  import $ from 'jquery';
//  import Play from '@/components/play.vue';
//  import Lunbo from '@/components/lunbo.vue';
//  import Ditu from '@/components/ditu.vue';
//  import Dthree from '@/components/vue-model-3D.vue'; // 无用的插件
//  import IframeD from '@/components/iframe.vue';
  import threeX from '@/components/threeX.vue';
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
      threeX
    },
    methods: {
//      loaded() { // iframe跨域请求还没有解决，同域使用一下内容没有问题
//        this.mbsj = $('#ifm1').contents().find('#mb1').val(); // 子页面数据传递到父页面
//        $('#ifm1').contents().find('#mb1').val(111); // 父页面数据传递到子页面
//        document.getElementById('ifm1').src = 'http://www.baidu.com'; // 刷新模板
//        console.log(document.getElementById('ifm1').contentWindow.shuxingliang);// 获取模板当中参数的值，这个的作用是为了，获取模板当中有几个属性，即属性的数量
//      }
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
