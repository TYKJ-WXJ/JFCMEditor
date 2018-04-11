<template>
  <div class="ed-cabinet">
    <div class="ed-titles">
      <p>机柜设备</p>
    </div>
    <div class="ed-state">
      <div class="ed-state-1">
        <img src="../assets/img/mini-12.png" alt="">
        <img src="../assets/img/mini-16.png" alt="" style="display:none">
        <p>容量：{{ mijcapacity }}</p>
      </div>
      <div class="ed-state-2">
        <img src="../assets/img/mini-13.png" alt="">
        <img src="../assets/img/mini-17.png" alt="" style="display:none">
        <p>表面温度：{{ mijsurface }}</p>
      </div>
      <div class="ed-state-3">
        <img src="../assets/img/mini-14.png" alt="">
        <img src="../assets/img/mini-18.png" alt="" style="display:none">
        <p>承重：{{ mijbearing }}</p>
      </div>
      <div class="ed-state-4">
        <img src="../assets/img/mini-19.png" alt="">
        <img src="../assets/img/mini-15.png" alt="" style="display:none">
        <p>服务器状态：{{ mijstate }}</p>
      </div>
    </div>
    <div class="ed-infor">
      <div class="ed-infor-1">
        <p>机柜信息反馈</p>
      </div>
      <div class="ed-infor-2">
        <p>{{ mijinfor }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import server from '@/services/server';
export default {
  data() {
    return{
      mijcapacity: '',
      mijsurface: '',
      mijbearing: '',
      mijstate: '',
      mijinfor: ''
    }
  },
  mounted() {
    this.cabJson();
  },
  methods: {
    cabJson() {
      server.preJSON().then((res) => {
        this.mijcapacity = res.data.mijcapacity;
        this.mijsurface = res.data.mijsurface;
        this.mijbearing = res.data.mijbearing;
        this.mijstate = res.data.mijstate;
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style>
.ed-cabinet{
  width: 284px;
  height: 297px;
  background-color: #29ABE2;
  opacity: 0.2;
  margin: 0 auto;
  color: #ffffff;
  font-family: 黑体;
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

.ed-state{
  margin-top: 8px;
  font-size: 12pt;
  line-height: 14px;
}

.ed-state-1 {
  float: left;
  padding-left: 26px;
}

.ed-state-3 {
  padding-top: 10px;
  float: left;
  padding-left: 14px;
}

.ed-state-4 {
  padding-top: 10px;
}

.ed-infor{
  margin-top: 3px;
}

.ed-infor-1 p{
  padding-right: 146px;
  font-size: 14pt;
  padding-top: 6px;
}

.ed-infor-2{
  width: 255px;
  height: 39px;
  border: 1px solid #2CA6E0;
  border-radius: 4px;
  margin-left: 13px;
  margin-top: 2px;
}
</style>
