<template>
    <div id="app">
      <login-div @transferUser="getUser"></login-div>
      <!-- <iframe ref="iframe" :src="urlr" id="ifm1" name="fei" frameborder="0" scrolling="no">
      </iframe> -->
      <!-- <p id="ms">{{ mbsj }}</p> -->
      <p>模板数据：{{ user }}</p>
      <button id="btn">change iframe</button>
    </div>
</template>

<script>
import LoginDiv from '../templateFile/dialog'
  export default{
    name: 'app',
    data () {
      return {
        // urlr: '../../dist/static/html/dialog.html',
        /* mbsj: '模板数据', */
        /* text: 'lalala', */
        user: ''
      }
    },
    methods: {
      // 声明方法，用transferUser事件调用方法，获得传过来的user参数
      getUser (msg) {
        this.user = msg;
        console.log(this.user)
      }
    },
    components: {
      LoginDiv
    }
  }
</script>
