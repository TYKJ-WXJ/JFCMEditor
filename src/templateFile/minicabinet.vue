<template>
  <div class="ed-cabinet">
    <div class="ed-titles">
      <p>机柜设备</p>
    </div>
    <div class="ed-state">
      <div class="ed-state-1">
        <img src="../assets/img/mini-12.png" alt="">
        <img src="../assets/img/mini-16.png" alt="" style="display:none">
        <div class="ed-st-1">
          <p>容量：</p>
          <p>{{ mijcapacity }}</p>
        </div>
      </div>
      <div class="ed-state-2">
        <img src="../assets/img/mini-13.png" alt="">
        <img src="../assets/img/mini-17.png" alt="" style="display:none">
        <div class="ed-st-1">
          <p>表面温度：</p>
          <p>{{ mijsurface }}</p>
        </div>
      </div>
      <div class="ed-state-3">
        <img src="../assets/img/mini-14.png" alt="">
        <img src="../assets/img/mini-18.png" alt="" style="display:none">
        <div class="ed-st-1">
          <p>承重：</p>
          <p>{{ mijbearing }}</p>
        </div>
      </div>
      <div class="ed-state-4">
        <img src="../assets/img/mini-19.png" alt="">
        <img src="../assets/img/mini-15.png" alt="" style="display:none">
        <div class="ed-st-1">
          <p>服务器状态：</p>
          <p>{{ mijstate }}</p>
        </div>
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
  width: 340px;
  height: 170px;
  background-color: #29ABE2;
  /* opacity: 0.2; */
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
  height: 25px;
}

.ed-state{
  margin-top: 2px;
  font-size: 12pt;
  line-height: 14px;
  margin-left: 5px;
}

.ed-state img{
  width: 50px;
  height: 42px;
}

.ed-state-1 {
  float: left;
  padding-left: 24px;
}

.ed-st-1 {
  float: right;
  margin-left: 5px;
}

.ed-state-2 {
  float: left;
  margin-left: 45px;
}

.ed-state-3 {
  float: left;
  margin-left: 24px;
}

.ed-state-4 {
  float: left;
  margin-left: 27px;
}

.ed-infor{
  margin-top: 3px;
}

.ed-infor-1 p{
  padding-right: 185px;
  font-size: 13pt;
}

.ed-infor-2{
  width: 285px;
  height: 28px;
  border: 2px solid #2CA6E0;
  border-radius: 4px;
  margin-left: 24px;
}
</style>
