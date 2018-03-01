<template>
  <div class="tool_wrap fl">
    <!--设备基本属性-->
    <div class="basic_attributes" v-if="typeof this.deal_options !== 'undefined' && deal_options.basic_attributes">
      设备属性
    </div>
    <div class="tool_panel">
      <!--添加设备属性-->
      <div class="add_attributes" v-if="typeof this.deal_options !== 'undefined' && deal_options.add_attributes">
        添加设备属性
      </div>
    </div>
  </div>
</template>

<script>
  // 工具
  import jointD from '@/utils/jointjs/js/index';

  export default{
    data() {
      return {
        deal_options: this.dealWidthOptions() // 处理父组件传过来的参数
      }
    },
    props: {
      options: {
        required: false
      }
    },
    created() {
    },
    watch: {
    },
    mounted() {
      // 初始化画布，如果父组件没有传equips这个值
      if (typeof this.equips === 'undefined') {
        if (typeof this.deal_options !== 'undefined') {
          jointD.initPaper({
            'options': this.deal_options
          });
        } else {
          alert('参数值错误');
        }
      }
    },
    computed: {
    },
    methods: {
      dealWidthOptions() { // 处理父组件传过来的参数
        let newOptions = {
          'width': 1100,
          'height': 660, // 整个模块高度
          'basic_attributes': true, // 设备基本属性
          'basic_figure': true, // 图库
          'action_buttons': true, // 清除，组合等按钮
          'add_attributes': true, // 增加设备属性
          'style_operation': true, // 样式面板
          'thumbnail': true, // 缩略图
          'figure_buttons': true, // 图形操作按钮
          'single_click': false, // 单击图形
          'double_click': true, // 双击图形
          'label': true, // 图形名称和基本属性
          'move_figure': true, // 是否可移动图形
          'gallery': [] // 所有设备数据
        };
        for (let key in this.options) {
          if (this.options.hasOwnProperty(key)) { // 参数值错误检查
            if (key === 'height' && typeof this.options['height'] !== 'number') {
              return;
            }
            if (key === 'width' && typeof this.options['width'] !== 'number') {
              return;
            }
//            if (key === 'gallery' && this.options['gallery'] instanceof Array !== true) {
//              return;
//            }
            if (key !== 'height' && key !== 'width' && typeof this.options[key] !== 'boolean') {
              return;
            }
            newOptions[key] = this.options[key];
          }
        }
        return newOptions;
      }
    },
    components: {
    },
    directives: {
    }
  }
</script>

<style>
  .tool_wrap {
    border: 5px solid transparent;
    border-image: linear-gradient(to bottom right, #f3b241, #ef7c50) 30 30;
    color: #1c3076;
    font-size: 16px;
  }

  .basic_attributes {
    padding: 20px 25px;
    border-bottom: 5px solid transparent;
    border-image: linear-gradient(to right, #f3b241, #ef7c50) 30 30;
  }

  .basic_figure {
    border-right: 5px solid transparent;
    border-image: linear-gradient(#f3b241, #ef7c50) 30 30;
  }

  .basic_figure h3 {
    margin: 0;
    text-align: center;
    line-height: 50px;
    font-weight: normal;
    border-bottom: 5px solid #f3b241;
  }

  .action_buttons {
    display: flex;
    justify-content: space-between;
    padding: 5px 75px;
    border-bottom: 5px solid transparent;
    border-image: linear-gradient(to right, #f4bc3c, #ef7c50) 30 30;
  }

  .action_buttons > div {
    cursor: pointer;
    background-size: cover;
  }

  .clear_paper {
    width: 34px;
    height: 40px;
    background: url(../../src/utils/jointjs/img/clear.png) no-repeat;
  }

  .clear_paper:hover {
    background: url(../../src/utils/jointjs/img/clear-1.png) no-repeat;
    background-size: cover;
  }

  .group_figure {
    width: 38px;
    height: 38px;
    background: url(../../src/utils/jointjs/img/group.png) no-repeat;
  }

  .group_figure:hover {
    background: url(../../src/utils/jointjs/img/group-1.png) no-repeat;
    background-size: cover;
  }

  .ungroup_figure {
    width: 38px;
    height: 38px;
    background: url(../../src/utils/jointjs/img/ungroup.png) no-repeat;
  }

  .ungroup_figure:hover {
    background: url(../../src/utils/jointjs/img/ungroup-1.png) no-repeat;
    background-size: cover;
  }

  .front_figure {
    width: 32px;
    height: 40px;
    background: url(../../src/utils/jointjs/img/front.png) no-repeat;
  }

  .front_figure:hover {
    background: url(../../src/utils/jointjs/img/front-1.png) no-repeat;
    background-size: cover;
  }

  .back_figure {
    width: 32px;
    height: 40px;
    background: url(../../src/utils/jointjs/img/back.png) no-repeat;
  }

  .back_figure:hover {
    background: url(../../src/utils/jointjs/img/back-1.png) no-repeat;
    background-size: cover;
  }

  .add_attributes {
    width: 270px;
    text-align: center;
    border-left: 5px solid transparent;
    border-image: linear-gradient(#f3b241, #ef7c50) 30 30;
    overflow-y: auto;
  }

  .tool_panel {
    display: flex;
    justify-content: space-between;
  }

  .tool_map_right{
    position: absolute;
    left: 0;
    top: 0;
    width: 320px;
    z-index: 9998;
    cursor: move;
    background: #fff;
  }

  #display_box {
    position: relative;
    background: #fff;
  }

  #component_box {
    overflow: auto;
  }

  #component_box h5 {
    text-align: center;
  }

  /*元素周围按钮*/
  #functionBtn, #dragBtn, #labelBox {
    display: none;
    position: absolute;
    /*禁用鼠标*/
    pointer-events: none;
  }

  #functionBtn {
    border: 1px solid #C390D4;
  }

  #functionBtn > div, #dragBtn > div {
    position: absolute;/*决定是否跟随元素一起动*/
    cursor: pointer;
    z-index: 100;
    pointer-events: auto;
    /*禁止选中文字*/
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }

  .stretch-icon {
    width: 6px;
    height: 6px;
    background: #000;
  }

  #labelBox {
    background: #9093b1;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    font-size: 12px;
  }

  #toolTip {
    width: 60px;
    height: 26px;
    position: absolute;
    display: none;
    min-width: 48px;
    height: 16px;
    background: #9093b1;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    z-index: 11;
  }

  #toolTip p {
    margin: 0;
    text-align: center;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  #toolTip input {
    border: 0;
    background: transparent;
    width: 100%;
    color: #fff;
    text-align: center;
  }

  #toolTip:after {
    content: '';
    position: absolute;
    top: 26px;
    left: 50%;
    margin-left: -8px;
    border-right: 8px solid transparent;
    border-top: 8px solid #9093b1;
    border-left: 8px solid transparent;
  }

  .tool_map_right .fnBtn {
    width: 60px;
    height: 26px;
    color: #fff;
    background: #8792c3;
    border: 1px solid #394d91;
    border-radius: 4px;
  }

  .tool_map_right .fnBtn + .fnBtn {
    margin-left: 5px;
  }

  .inspector-container {
    position: relative;
    padding: 8px;
    background: #e1e7f2;
  }
  .inspector-container > div > h4 {
    color: #5755a1;
    margin-top: 0;
    margin-bottom: 5px;
  }
  .inspector-container > div > div + div {
    margin-top: 5px;
  }
  .thickness {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .thickness > input {
    text-align: center;
  }
  .thickness > input + input {
    margin-left: 6px;
  }
  .thickness > input[type="number"] {
    width: 164px;
    height: 30px;
    border: 1px solid #8792c3;
    border-radius: 4px;
    font-size: 16px;
  }
  #text-content {
    width: 154px;
    height: 20px;
    padding: 5px;
    border: 1px solid #8792c3;
    border-radius: 4px;
    font-size: 16px;
  }

  .styles select {
    width: 166px;
    height: 32px;
    padding: 5px;
    border: 1px solid #8792c3;
    border-radius: 4px;
    font-size: 16px;
  }

  .color-picker {
    position: absolute;
    width: 150px;
    height: 150px;
    background: #f6f6f6;
    display: none;
    z-index: 9999;
  }

  .color-picker:before {
    content: '';
    position: absolute;
    top: -8px;
    left: 10px;
    width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #f6f6f6;
    border-left: 10px solid transparent;
  }

  .color_picker:before {
    content: '';
    position: absolute;
    top: 20px;
    left: -10px;
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #ccc;
    border-top: 10px solid transparent;
  }

  .color-picker span, .color_picker span {
    float: left;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    border: 1px solid #e6e6e6;
  }

  .color-picker .transparent_color {
    background-size: 100% 100%;
  }

  .thumbnail {
    margin-top: 10px;
  }

  .moving_box {
    display: none;
    position: absolute;
    border: 1px solid #1ABC9C;
    background: transparent;
    z-index: 1;
  }

  .hidden {
    display: none;
  }

  #iframe {
    position: absolute;
    z-index: 10000;
  }

  .hideBtn {
    position: absolute;
    z-index: 10001;
    cursor: pointer;
  }

  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #fff;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #fff;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #fff;
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #fff;
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  textarea::-webkit-scrollbar
  {
    width: 8px;
    height: 25px;
    background-color: #b2bcdf;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  textarea::-webkit-scrollbar-track
  {
    background-color: #e1e7f3;
  }

  /*定义滑块 内阴影+圆角*/
  textarea::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: #b2bcdf;
  }

  .add_attributes::-webkit-scrollbar
  {
    width: 8px;
    height: 25px;
    background-color: #f3b241;
  }

  .add_attributes::-webkit-scrollbar-track
  {
    background-color: #fff;
  }

  .add_attributes::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: #f3b241;
  }

  /*高宽分别对应横竖滚动条的尺寸*/
  #component_box::-webkit-scrollbar
  {
    width: 8px;
    background-color: #f3b241;
  }
  /*滚动条轨道*/
  #component_box::-webkit-scrollbar-track
  {
    background-color: #fff;
  }
  /*滑块*/
  #component_box::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: #f3b241;
  }
  #link {
    border-top: 5px solid #f3b241;
  }
</style>
