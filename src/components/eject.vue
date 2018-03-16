<!--在浏览器支持窗口最小化通知的情况下-->
<template v-if="window.Notification">
  <div>
    <button v-on:click="handleClick()">有人想加你为好友</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    computed: {},
    mounted() {
    },
    methods: {
      popNotice: function () {
// 这是一个静态属性。表示是否允许通知
        if (Notification.permission === 'granted') {
// 通过new构造，显示通知
          this.notification = new Notification('Hi，帅哥：', {
            body: '可以加你为好友吗？',
            icon: 'http://image.zhangxinxu.com/image/study/s/s128/mm1.jpg'
          });
        }
      },
      handleClick: function () {
        let that = this;
// 设置一个定时器，3秒以后弹出窗口
        setTimeout(function () {
          if (Notification.permission === 'granted') {
            that.popNotice();
          } else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
              that.popNotice();
            });
          }
        }, 3000)
      }
    },
    components: {}
  }
</script>

<style>
</style>
