<template>
  <div class="ed-host">
    <div class="ed-titles">
      <p>主机设备</p>
    </div>
    <div class="ed-state">
      <div class="ed-state-1">
        <img src="../assets/img/zj5.png" alt="">
        <img src="../assets/img/zj9.png" alt="" style="display:none">
        <p>硬盘容量：{{ micapacity }}</p>
      </div>
      <div class="ed-state-2">
        <img src="../assets/img/zj6.png" alt="">
        <img src="../assets/img/zj10.png" alt="" style="display:none">
        <p>主板状态：{{ miboard }}</p>
      </div>
      <div class="ed-state-3">
        <img src="../assets/img/zj7.png" alt="" style="display:none">
        <img src="../assets/img/zj11.png" alt="">
        <p>CPU状态：{{ miCPUstate }}</p>
      </div>
      <div class="ed-state-4">
        <img src="../assets/img/zj8.png" alt="" style="display:none">
        <img src="../assets/img/zj12.png" alt="">
        <p>风扇状态：{{ mifanstate }}</p>
      </div>
    </div>
    <div class="ed-infor">
      <div class="ed-infor-1">
        <p>主机反馈信息</p>
      </div>
      <div class="ed-infor-2">
        <p>{{ miinfor }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import server from '@/services/server';
export default {
  data () {
    return{
      micapacity: '',
      miboard: '',
      miCPUstate: '',
      mifanstate: '',
      miinfor: ''
    }
  },
  mounted() {
    this.minihostJson();
  },
  methods: {
    minihostJson() {
      server.preJSON().then((res) => {
        this.micapacity = res.data.micapacity;
        this.miboard = res.data.miboard;
        this.miCPUstate = res.data.miCPUstate;
        this.mifanstate = res.data.mifanstate;
      }).catch((err) => {
        console.log(err);
      })
    },
  }
}
</script>

<style scoped>
.ed-host{
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
  padding-right: 25px;
  float: left;
  margin-left: 24px;
}

.ed-state-2{
  float: left;
}

.ed-state-3{
  float: left;
  margin-left: 24px;
  padding-top: 8px;
}

.ed-state-4{
  float: left;
  padding-left: 27px;
  padding-top: 8px;
}

.ed-infor-1 p{
  padding-right: 146px;
  font-size: 14pt;
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
