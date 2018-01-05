<template>
  <div class="tool_wrap">
    <div class="tool_map_left">

      <div style="margin-left:5px; margin-top:20px;" id="component_box">

      </div>

    </div>
    <!--中央画板-->
    <div class="tool_map_right" id="display_box" style="background: #fafafa">
      <!--del的class属性变换-->

    </div>
    <!--属性面板-->
    <div class="tool_map_properties">
      <div class="property-pane">
        <!--<button @click="connect()">连接</button>-->
        <button onclick="clearPaper()">清除</button>
        <button onclick="embed()">组合</button>
        <button onclick="unembed()">解绑</button>
        <button class="frontZ" onclick="frontAndBack(this)">front</button>
        <button class="backZ" onclick="frontAndBack(this)">back</button>
        <button onclick="generateShapes()">生成图形模板</button>
        <div class="inspector-container">
          <div class="presentation">
            <h4>presentation</h4>
            <!-- 背景和边框颜色 -->
            <div class="change-color">
              <button class="color-btn" data-obj="fill" data-pos="20,50">Fill</button>
              <button class="color-btn" data-obj="stroke" data-pos="70,50">outline</button>
            </div>
            <!-- 边框粗细 -->
            <div class="thickness outline-thickness">
              <input type="button" class="plus-size" value="-">
              <input type="number" id="outline-thickness" min="0" max="30" value="" readonly>
              <input type="button" class="add-size" value="+">
            </div>
            <div class="styles">
              <!-- 边框样式 -->
              <label>outline styles:</label>
              <select id="outline-styles">
                <option value="1" data-style="0">solid</option>
                <option value="2" data-style="2,5">dashed</option>
                <option value="3" data-style="10,5">dotted</option>
              </select>
            </div>
          </div>
          <div class="text">
            <h4>text</h4>
            <!-- 文本内容 -->
            <div class="text-content">
              <label>text:</label>
              <input type="text" id="text-content" value="">
            </div>
            <!-- 字体大小 -->
            <div class="thickness font-size">
              <input type="button" class="plus-size" value="-">
              <input type="number" id="font-size" value="" min="5" max="80" readonly>
              <input type="button" class="add-size" value="+">
            </div>
            <!-- 字体粗细 -->
            <div class="styles">
              <label>font sickness:</label>
              <select id="font-sickness">
                <option value="1" data-style="300">light</option>
                <option value="2" data-style="normal">normal</option>
                <option value="3" data-style="bold">bold</option>
              </select>
            </div>
            <!-- 字体颜色 -->
            <div class="change-color">
              <button class="color-btn" data-obj="text/fill" data-pos="20,310">Fill</button>
            </div>
          </div>
          <!-- 取色板 -->
          <div class="color-picker">
            <span style="background: transparent;"></span>
            <span style="background: rgb(255, 255, 255);"></span>
            <span style="background: rgb(220, 215, 215);"></span>
            <span style="background: rgb(143, 143, 143);"></span>
            <span style="background: rgb(198, 199, 226);"></span>
            <span style="background: rgb(254, 182, 99);"></span>
            <span style="background: rgb(254, 133, 79);"></span>
            <span style="background: rgb(183, 93, 50);"></span>
            <span style="background: rgb(49, 208, 198);"></span>
            <span style="background: rgb(124, 104, 252);"></span>
            <span style="background: rgb(97, 84, 156);"></span>
            <span style="background: rgb(106, 108, 138);"></span>
            <span style="background: rgb(75, 74, 103);"></span>
            <span style="background: rgb(60, 66, 96);"></span>
            <span style="background: rgb(51, 51, 78);"></span>
            <span style="background: rgb(34, 33, 56);"></span>
          </div>
        </div>
      </div>
      <!--缩略图-->
      <div class="thumbnail">

      </div>
    </div>
  </div>
</template>

<script>
  // 工具
  import {mapGetters, mapActions} from 'vuex';
  import server from '@/services/server';
  import jointD from '@/utils/jointjs/test';
  // 组件
  import date from '@/components/date.vue';

  export default{
    data() {
      return {
        msg: 'pageMain',
        name: '',
        id: ''
      }
    },
    created() {
//      this.getTopicsFunc();
    },
    mounted() {
      jointD.initLeftPaper();
      jointD.initCenterPaper();
//       加载刷新后的数据
      jointD.loadStorage();
//       属性面板事件
      jointD.propertyPane();
    },
    computed: {
      ...mapGetters([
        'getUserInfo'
      ])
    },
    methods: {
      ...mapActions([
        'changeUserInfo'
      ]),
      // vuex中state状态修改
      commitUserInfoFunc() {
        let userInfo = {
          name: this.name,
          id: this.id
        };
        this.changeUserInfo(userInfo);
      },
      // 接口调用
      getTopicsFunc() {
        server.getTopics().then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
      }
    },
    components: {
      date
    }
  }
</script>

<style scoped>
  @import "joint.css";

  .tool_wrap {
    width:1169px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
  }

  .tool_map_left{
    width:260px;
    margin:20px 15px 30px 0;
    border: 1px solid #fafafa;
  }

  .tool_map_right{
    width:894px;
    margin:20px 15px 30px 0;
  }

  /*元素周围按钮*/
  #functionBtn, #dragBtn {
    display: none;
    position: absolute;
    /*禁用鼠标*/
    pointer-events: none;
  }
  #associate {
    position: absolute;
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
  #functionBtn > div .iconfont {
    font-size: 20px;
  }
  .tool_map_properties {
    width: 230px;
    height: 350px;
    margin-top: 20px;
  }
  .inspector-container {
    position: relative;
    margin-top: 5px;
    padding: 5px;
    height: 90%;
    overflow: auto;
    background: #f4f3ff;
  }
  .inspector-container > div > h4 {
    margin: 0;
    color: #5755a1;
  }
  .inspector-container > div > * {
    margin-bottom: 10px;
  }
  .outline-thickness {
    overflow: hidden;
  }
  .thickness > input {
    width: 30%;
    float: left;
    text-align: center;
    margin-right: 1%;
  }
  .color-picker {
    position: absolute;
    width: 150px;
    height: 150px;
    background: #f6f6f6;
    border: 1px solid #e6e6e6;
    display: none;
  }
  .color-picker span {
    float: left;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    border: 1px solid #e6e6e6;
  }
  .thumbnail {
    margin-top: 20px;
    border: 1px solid #8F8FF3;
  }
  .moving_box {
    display: none;
    position: absolute;
    border: 1px solid #1ABC9C;
    background: transparent;
    z-index: 1;
  }
</style>
