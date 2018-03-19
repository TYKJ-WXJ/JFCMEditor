<!--alert弹窗组件，用了iview插件-->
<!--安装less模块 npm install less --save-dev -->
<!--安装less-loader模块 npm install less-loader-->
<style lang="less">
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal{
      top: 0;
    }
  }
</style>
<template>
  <div>
  <Button @click="modal10 = true">Vertical center</Button>
  <Modal
    title="报警"
    v-model="modal10"
    class-name="vertical-center-modal"
    okText="联系报修人员"
    cancelText="Cancel">
    <input type="text">
    <p>Content of dialog</p>
    <p>Content of dialog</p>
  </Modal>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        modal10: false
      }
    }
//    methods: {
//      custom () {
//        this.$Modal.confirm({
//          vModel: 'modal10',
//          className: 'vertical-center-modal',
//          title: '报警',
//          content: '<p>Content of dialog</p><p>Content of dialog</p>',
//          okText: '联系报修人员',
//          cancelText: 'Cancel'
//        });
//      }
//    }
  }
</script>

<!--具体参考网址：https://www.iviewui.com/components/modal-->
