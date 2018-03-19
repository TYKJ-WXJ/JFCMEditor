<style lang="less">
  .main{
    width: 300px;
    height: 300px;
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
  <div class="main" @click="modal10 = true">pagetest</div>
  <Modal
    title="模块排序"
    v-model="modal10"
    class-name="vertical-center-modal"
    okText="确定"
    cancelText="Cancel">
    <router-view :name=aa></router-view>
    <router-view :name=bb></router-view>
    <router-view :name=cc></router-view>
    <button class="button" @click="show">控制</button>
    <div class="dialog" v-show="isShow">
      <div class="dialog-one">
        <span>顶部div</span>
        <select name="selected-one" v-model="aa">
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>
      </div>
      <div class="dialog-two">
        <span>中部div</span>
        <select name="selected-two" v-model="bb">
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>
      </div>
      <div class="dialog-three">
        <span>底部div</span>
        <select name="selected-three" v-model="cc">
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>
      </div>
    </div>
  </Modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        modal10: false,
        isShow: false,
        aa: 'a',
        bb: 'b',
        cc: 'c'
      }
    },
    methods: {
      show: function () {
        this.isShow = !this.isShow;
      }
    }
  }
</script>
