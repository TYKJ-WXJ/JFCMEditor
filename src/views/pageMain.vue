<template>
  <div class="wrapper">
    <Editor :options="options"></Editor>
    <!--<p>{{ wb }}</p>-->
  </div>
</template>

<script>
  // 引入工具函数
  //  import websock from '@/utils/webSock';
//  import svgThree from '@/utils/svg-three';
  // 组件
  import Editor from '@/components/editor';
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
    mounted() {
//      svgThree.drawSvg();
    },
    computed: {
    },
    methods: {
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
