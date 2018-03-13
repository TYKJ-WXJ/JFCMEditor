<template>
    <div>
      <p>{{getJsonD.JsonD.dynamic[0].value}}</p>
      <p>{{js}}</p>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';//  import $ from 'jquery';
  import SeparateData from '@/utils/modular';
  export default{
    data() {
      return {
        msg: 'hello vue',
        js: SeparateData.module
      }
    },
    computed: {
      ...mapGetters([
        'getJsonD',
        'getWebs'
      ])
    },
    mounted() {
//      this.loadJs();
    },
    methods: {
      ...mapActions([
        'changeJsonD'
      ])
//      loadJs() {
//        console.log(this.getJsonD.JsonD);
//        console.log(this.getWebs);
//        console.log(JSON.parse(this.getWebs.web));
//        let wt = JSON.parse(this.getWebs.web);
// //        console.log(dt.dynamic[0].id);
//        console.log(wt.attrId);
// //        console.log(dt.dynamic[0].value);
//        console.log(wt.attrValue);
//        this.getJsonD.JsonD.dynamic[0].value = wt.attrValue;
//        let dt = this.getJsonD.JsonD;
//        this.changeJsonD(dt);
//        this.js = wt.attrValue;
//        if (dt.dynamic[0].id === wt.attrId) {
//          dt.dynamic[0].value = wt.attrValue;
//          this.js = wt.attrValue;
//        }
//      }
    },
//    props: {
//      message: Object  // 定义传值的类型<br>
//    },
    components: {}
  }
</script>

<style>

</style>
