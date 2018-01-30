<template>
    <div></div>
</template>

<script>
  import threeMB from '@/utils/threeSYJS/threeMB';
//  import OrbitControls from '@utils/controls/OrbitControls';
  export default{
    data() {
      return {
        msg: 'hello vue'
      }
    },
    created() {
      threeMB.init();
    }
  }
</script>

<style>

</style>
