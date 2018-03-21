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
    margin-top: 30px;
  }
  .dialog{
    height: 50px;
    z-index:10;
    display: flex;
    justify-content:center;
    margin-top: 15px;
  }
  .dialog>div{
    margin-right: 10px;
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
</style>
<template>
  <div>
  <div class="main" @click="modal10 = true">
    <draggable :move="getdata" @update="datadragEnd">
      <transition-group class="one">
        <div :key="1">
          <router-view :name=aa></router-view>
        </div>
        <div :key="2">
          <router-view :name=bb></router-view>
        </div>
        <div :key="3">
          <router-view :name=cc></router-view>
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
    <router-view :name=aa></router-view>
    <router-view :name=bb></router-view>
    <router-view :name=cc></router-view>
    <button class="button" @click="show">控制</button>
    <div class="dialog" v-show="isShow">
      <div class="dialog-one">
        <span>顶部div</span>
        <select v-model="aa">
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="dialog-two">
        <span>中部div</span>
        <select v-model="bb">
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="dialog-three">
        <span>底部div</span>
        <select v-model="cc">
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
  </Modal>
  </div>
</template>
<script>
//  引入可拖拽的插件   npm install vuedraggable   下载draggable
  import draggable from 'vuedraggable';
  export default {
    data() {
      return {
        modal10: false,
        isShow: false,
        aa: 'a',
        bb: 'b',
        cc: 'c',
        options: [
          {text: 'A', value: 'a'},
          {text: 'B', value: 'b'},
          {text: 'C', value: 'c'}
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
      },
      datadragEnd (evt) {
      },
      onOk() {
        console.log(1);
      }
    }
  }
</script>
