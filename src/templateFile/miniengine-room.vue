<template>
  <div class="ed-engine">
    <div class="ed-titles">
      <p>机房设备</p>
    </div>
    <div class="ed-state">
      <div class="ed-state-1">
        <img src="../assets/img/jf7.png" alt="">
        <img src="../assets/img/jf11.png" alt="" style="display:none">
        <p>配电系统：{{ mijfpower }}</p>
      </div>
      <div class="ed-state-2">
        <img src="../assets/img/jf8.png" alt="">
        <img src="../assets/img/jf12.png" alt="" style="display:none">
        <p>环境监控系统：{{ mijfenviron }}</p>
      </div>
      <div class="ed-state-3">
        <img src="../assets/img/jf9.png" alt="" style="display:none">
        <img src="../assets/img/jf13.png" alt="">
        <p>消防系统：{{ mijffire }}</p>
      </div>
      <div class="ed-state-4">
        <img src="../assets/img/jf10.png" alt="" style="display:none">
        <img src="../assets/img/jf14.png" alt="">
        <p>安防系统：{{ mijfsecurity }}</p>
      </div>
    </div>
    <div class="ed-infor">
      <div class="ed-infor-1">
        <p>机房信息反馈</p>
      </div>
      <div class="ed-infor-2">
        <p>{{ mijfinfor }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import server from '@/services/server';
export default {
  data() {
    return{
      mijfpower: '',
      mijfenviron: '',
      mijffire: '',
      mijfsecurity: '',
      mijfinfor: ''
    }
  },
  mounted() {
    this.engieJson();
  },
  methods: {
    engieJson() {
      server.preJSON().then((res) => {
        this.mijfpower = res.data.mijfpower;
        this.mijfenviron = res.data.mijfenviron;
        this.mijffire = res.data.mijffire;
        this.mijfsecurity = res.data.mijfsecurity;
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.ed-engine{
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
  margin-top: 10px;
  font-size: 12pt;
}

.ed-state img{
  width: 55px;
}

.ed-state-1{
  padding-right: 10px;
  float: left;
  margin-left: 12px;
}

.ed-state-2{
  float: left;
}

.ed-state-3{
  float: left;
  margin-left: 12px;
  padding-top: 8px;
}

.ed-state-4{
  float: left;
  padding-left: 27px;
  padding-top: 8px;
}

.ed-infor{
  margin-top: 3px;
}

.ed-infor-1 p{
  padding-right: 146px;
  font-size: 14pt;
  padding-top: 177px;
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
