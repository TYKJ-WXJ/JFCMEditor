<!--alert弹窗组件，用了iview插件-->
<template>
  <div>
    <Button type="primary" @click="modal1 = true">alert</Button>
    <Modal
      v-model="modal1"
      title="这是一个测试alert"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>TEST......</p>
    </Modal>
    <button @click="postData()">click me</button>
  </div>
</template>
<script>
  import server from '@/services/server'
  export default {
    data () {
      return {
        modal1: false
      }
    },
    methods: {
      ok () {
        this.$Message.info('点击确定');
      },
      cancel () {
        this.$Message.info('点击取消');
      },
      position () {
      },
      postData () {
        server.getTest().then((res) => {
          console.log(res.data);
          let window = document.documentElement.clientHeight;
          console.log(window);
          let cur = document.querySelectorAll("div[class='ivu-modal']");
          console.log(cur);
          let curHeight = cur.clientHeight;
          console.log(curHeight);
        })
      }
    }
  }
</script>
<style>
  .ivu-modal{
    top: 45%;
  }
</style>

<!--具体参考网址：https://www.iviewui.com/components/modal-->
