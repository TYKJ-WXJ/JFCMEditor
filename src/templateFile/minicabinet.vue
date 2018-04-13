<template>
  <div class="ed-cabinet">
    <div class="ed-titles">
      <p>机柜设备</p>
    </div>
    <div class="ed-state">
      <div class="ed-state-1">
        <img src="../assets/img/mini-12.png" alt="">
        <img src="../assets/img/mini-16.png" alt="" style="display:none">
        <p>{{ mijcapacity }}</p>
      </div>
      <div class="ed-state-2">
        <img src="../assets/img/mini-13.png" alt="">
        <img src="../assets/img/mini-17.png" alt="" style="display:none">
        <p>{{ mijsurface }}</p>
      </div>
      <div class="ed-state-3">
        <img src="../assets/img/mini-14.png" alt="">
        <img src="../assets/img/mini-18.png" alt="" style="display:none">
        <p>{{ mijbearing }}</p>
      </div>
      <div class="ed-state-4">
        <img src="../assets/img/mini-19.png" alt="">
        <img src="../assets/img/mini-15.png" alt="" style="display:none">
        <p>服务器{{ mijstate }}</p>
      </div>
    </div>
    <div class="ed-infor">
      <p>反馈:{{ mijinfor }}</p>
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

<style scoped>
.ed-cabinet{
  width: 360px;
  height: 235px;
  margin: 0 auto;
  color: #ffffff;
  box-shadow: 0px 0px 20px 4px rgba(9, 74, 115, 0.4) inset;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
}

.ed-titles{
  padding-left: 10px;
  font-size: 16px;
  display: flex;
  background: linear-gradient(to right, #142657, transparent);
  margin: 0 auto;
  height: 25px;
}

.ed-state{
  margin-top: 5px;
  font-size: 12px;
  line-height: 14px;
  margin-left: 68px;
}

.ed-state-1 {
  float: left;
  padding-left: 6px;
}

.ed-state-2 {
  float: left;
  padding-left: 96px;
}

.ed-state-3 {
  float: left;
  padding-left: 6px;
  padding-top: 3px;
}

.ed-state-4 {
  float: left;
  padding-left: 97px;
  padding-top: 3px;
}

.ed-infor{
  padding-top: 166px;
  font-size: 16px;
  padding-right: 282px;
}

</style>
