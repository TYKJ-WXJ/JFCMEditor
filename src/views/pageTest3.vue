<style lang="less">
  .main{
    width: 300px;
    height: 500px;
    border: 1px solid #55a532;
    margin: 0 auto;
    cursor: pointer;
  }
  .button{
    display: block;
    width: 100px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background: #333333;
    color: white;
    margin: 0 auto;
  }
  .dialog{
    z-index:10;
    display: flex;
    justify-content:center;
    margin-top: 15px;
  }
  .dialog>div{
    margin:0 15px;
  }
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal{
      top: 0;
    }
  }
  .ivu-modal-body{
    margin: 0 auto;
  }
  .div-one{
    width: 200px;
    height: 100px;
    border: 1px solid #00AAEA;
  }
  .div-two{
    width: 200px;
    height: 100px;
    border: 1px solid greenyellow;
  }
  .div-three{
    width: 200px;
    height: 100px;
    border: 1px solid firebrick;
  }
  .o{
    position: absolute;
  }
  .one, .two, .three{
    position: absolute;
  }
  .one{
    top: 30px;
  }
  .two{
    top:160px;
  }
  .three{
    top:290px;
  }
</style>
<template>
  <div>
    <div class="main" @click="modal10 = true">
      <draggable :move="getdata" @update="datadragEnd">
        <transition-group class="o">
          <div class="one" :key="1">
            <div class="div-one">
              这是模块一
              </div>
          </div>
          <div class="two" :key="2">
            <div class="div-two">
              这是模块二
            </div>
          </div>
          <div class="three" :key="3">
            <div class="div-three">
              这是模块三
            </div>
          </div>
        </transition-group>
      </draggable>
    </div>
    <Modal
      title="模块排序"
      v-model="modal10"
      class-name="vertical-center-modal"
      okText="确定"
      @on-ok="onOk"
      cancelText="Cancel">
      <button class="button" @click="show">控制</button>
      <div class="dialog" v-show="isShow">
        <div>
          <select v-model="aa" class="a">
            <option v-for="option in options" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
          <p>选择: {{ aa }}</p>
        </div>
        <div>
          <select v-model="bb" class="b">
            <option v-for="option in options" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
          <p>选择: {{ bb }}</p>
        </div>
        <div>
          <select v-model="cc" class="c">
            <option v-for="option in options" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
          <p>选择: {{ cc }}</p>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
  //  引入可拖拽的插件
  import draggable from 'vuedraggable';
  import $ from 'jquery';
  export default {
    data() {
      return {
        modal10: false,
        isShow: false,
        aa : '',
        bb : '',
        cc : '',
        options: [
          { text: 'A', value: '模块一' },
          { text: 'B', value: '模块二' },
          { text: 'C', value: '模块三' }
        ]
      }
    },
    components: {
      draggable
    },
    methods: {
      show: function () {
        this.isShow = !this.isShow;
      },
      getdata (evt) {
        console.log(evt.draggedContext.element.id);
      },
      datadragEnd (evt) {
        console.log(2)
      },
      onOk() {
        let a = $('.one');
        let b = $('.two');
        let c = $('.three');
        let select1 = $('.a').val();
        let select2 = $('.b').val();
        let select3 = $('.c').val();
        switch (select1) {
          case '模块一':
            a.css('top', '30px');
            break;
          case '模块二':
            b.css('top', '30px');
            break;
          case '模块三':
            c.css('top', '30px');
            break;
        }
        switch (select2) {
          case '模块一':
            a.css('top', '160px');
            break;
          case '模块二':
            b.css('top', '160px');
            break;
          case '模块三':
            c.css('top', '160px');
            break;
        }
        switch (select3) {
          case '模块一':
            a.css('top', '290px');
            break;
          case '模块二':
            b.css('top', '290px');
            break;
          case '模块三':
            c.css('top', '290px');
            break;
        }
      }
    }
  }
</script>
