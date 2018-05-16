<template>
  <div>
    <a v-if="areaW.length>0" class="button" @click="button()">返回上一级</a>
    <a v-if="areaW.length>0" class="index" @click="index()">返回首页</a>
    <div class="tool_wrap">
      <div class="tool_panel"></div>
    </div>
  </div>
</template>

<script>
  // 工具
  import {jointD} from '@/utils/jointjs/js/index';
  import server from '@/services/server';
//  import {mapGetters} from 'vuex';
//  import $ from 'jquery';
  export default{
    data() {
      return {
        init: false,
        jointD: jointD.init(),
        areaW: []
      }
    },
    created() {
      this.initDome();
    },
    mounted() {
      this.dealWidthOptions();
    },
    computed: {},
    methods: {
      dealWidthOptions() { // 处理父组件传过来的参数
        this.init = true;
        this.jointD.initPaper({
          options: {
            'width': 1450,
            'height': 900,  // 整个模块高度
            'style_operation': false, // 样式面板
            'thumbnail': false, // 缩略图
            'basic_attributes': false, // 设备基本属性
            'basic_figure': false, // 图库
            'add_attributes': false, // 增加设备属性
            'action_buttons': false, // 清除，组合等按钮
            'label': false, // 图形名称和基本属性
            'single_click': true, // 单击图形
            'double_click': true, // 双击图形
            'move_figure': false, // 是否可移动
            'isArea': true, // 是否是区域管理页面
            'layer': false,
            'gallery': false // 所有设备数据
          }
        })
      },
      initDome() {
        server.getMockAreas().then((res) => {
          let areaJson = JSON.parse(res.data.data[0].svg);
          console.log(areaJson);
          this.jointD.setSvgData(areaJson, 'RESET'); // 导入svg图像
          this.jointD.setPaperBackground('#031C26'); // 更改画布颜色
        }).catch((err) => {
          console.log(err);
        })
      },
      components: {},
      directives: {}
    }
  }
</script>

<style>
  @import "../utils/jointjs/css/joint.css";
  .button{
    position: absolute;
    top: 4px;
    right: 35px;
    z-index: 10;
    display: inline-block;
    width: 107px;
    height: 45px;
    border-radius: 10px;
    background: #fff;
    font-size: 13px;
    color: #1b9dd4;
    text-align: center;
    padding-top: 13px;
  }
  .index{
    position: absolute;
    top: 4px;
    right: 149px;
    z-index: 10;
    display: inline-block;
    width: 75px;
    height: 45px;
    border-radius: 10px;
    background: #fff;
    font-size: 13px;
    color: #1b9dd4;
    text-align: center;
    padding-top: 13px;
  }
</style>
