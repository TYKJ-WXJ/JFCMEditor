<template>
    <div>
      <iframe ref="iframe" :src="urlr" id="ifm1" name="fei" frameborder="0" scrolling="no">
      </iframe>
      <p id="ms">{{ mbsj }}</p>
      <input id="shuru" type="text" v-model="inputVal">
      <button id="btn">change iframe</button>
    </div>
</template>

<script>
  import $ from 'jquery';
  export default{
    data() {
      return {
        urlr: '../../dist/static/html/dialog.html',
        mbsj: '模板数据',
        text: 'lalala',
        inputVal: ''
      }
    },
    mounted: function() {
      let that = this;
      $('button').click(function() {
        userChildFunc(that.inputVal);
      });
    },
    components: {},
    methods: {}
  }
  window.funcInParent = function (str) {
    // 把子页面传过来的值绑定到父页面的input中
    document.getElementById('shuru').value = str;
  };
  // 点击父页面的按钮时调用此方法，去调子页面中的方法
  function userChildFunc(value) {
    window.frames[0].window.FuncInChild(value);
  }
</script>

<style>

</style>
