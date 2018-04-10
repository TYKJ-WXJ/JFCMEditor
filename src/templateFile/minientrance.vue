<template>
  <div class="ed-entrance">
    <div class="ed-titles">
      <p>门禁设备</p>
    </div>
    <div class="ed-state">
      <p>当前状态：{{ mimstate }}</p>
    </div>
    <div class="ed-infor">
      <img src="../assets/img/mj1.png" alt="">
    </div>
    <div class="ed-true">
      <div class="ed-true-1">
        <p>机房信息反馈</p>
      </div>
      <div class="ed-true-2">
        <p>{{ miminfor }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import server from '@/services/server';
export default {
  data() {
    return{
      mimstate: '',
      miminfor: ''
    }
  },
  mounted() {
    this.entranJson();
  },
  methods: {
    entranJson() {
      server.preJSON().then((res) => {
        this.mimstate = res.data.mimstate;
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.ed-entrance{
  width: 284px;
  height: 297px;
  background-color: #29ABE2;
  /* opacity: 0.2; */
  margin: 0 auto;
  color: #ffffff;
  font-family: 黑体;
  font-size: 14pt;
}

.ed-titles{
  padding-left: 10px;
  font-size: 14pt;
  display: flex;
  background-color: #187FC3;
  margin: 0 auto;
}

.ed-titles p{
  padding-top: 7px;
}

.ed-state {
  float: left;
  padding-left: 24px;
  padding-top: 10px;
}

.ed-infor {
  height: 100px;
  width: 100px;
  margin-top: 55px;
  margin-left: 94px;
}

.ed-infor img{
  width: 100%;
  height: 100%;
}

.ed-true{
  margin-top: 6px;
}

.ed-true-1 p{
  padding-right: 146px;
  font-size: 14pt;
  padding-top: 10px;
}

.ed-true-2{
  width: 255px;
  height: 47px;
  border: 1px solid #2CA6E0;
  border-radius: 4px;
  margin-left: 13px;
  margin-top: 4px;
}

</style>
