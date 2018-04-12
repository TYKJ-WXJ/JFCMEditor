<template>
  <div class="ed-host">
    <div class="ed-titles">
      <p>主机设备</p>
    </div>
    <div class="ed-state">
      <div class="ed-state-1">
        <img src="../assets/img/zj5.png" alt="">
        <img src="../assets/img/zj9.png" alt="" style="display:none">
        <div class="ed-st-1">
          <p>硬盘容量：</p>
          <p>{{ micapacity }}</p>
        </div>
      </div>
      <div class="ed-state-2">
        <img src="../assets/img/zj6.png" alt="">
        <img src="../assets/img/zj10.png" alt="" style="display:none">
        <div class="ed-st-1">
          <p>主板状态：</p>
          <p>{{ miboard }}</p>
        </div>
      </div>
      <div class="ed-state-3">
        <img src="../assets/img/zj7.png" alt="" style="display:none">
        <img src="../assets/img/zj11.png" alt="">
        <div class="ed-st-1">
          <p>CPU状态：</p>
          <p>{{ miCPUstate }}</p>
        </div>
      </div>
      <div class="ed-state-4">
        <img src="../assets/img/zj8.png" alt="" style="display:none">
        <img src="../assets/img/zj12.png" alt="">
        <div class="ed-st-1">
          <p>风扇状态：</p>
          <p>{{ mifanstate }}</p>
        </div>
      </div>
    </div>
    <div class="ed-infor">
      <div class="ed-infor-1">
        <p>主机信息反馈</p>
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
    return {
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
  width: 340px;
  height: 170px;
 /*  background-color: #041734; */
  /* opacity: 0.2; */
  margin: 0 auto;
  color: #ffffff;
  font-family: 黑体;
}

.ed-titles{
  padding-left: 10px;
  font-size: 14pt;
  display: flex;
  /* background-color: #167BBF; */
  background: linear-gradient(to right, #142657, transparent);
  margin: 0 auto;
  height: 25px;
}

.ed-state{
  margin-top: 2px;
  font-size: 12pt;
  line-height: 17px;
  margin-left: 5px;
}

.ed-state img{
  width: 50px;
  height: 42px;
}

.ed-state-1{
  float: left;
  margin-left: 24px;
}

.ed-st-1 {
  float: right;
  margin-left: 5px;
}

.ed-state-2{
  float: left;
  margin-left: 26px;
}

.ed-state-3{
  float: left;
  margin-left: 24px;
}

.ed-state-4{
  float: left;
  margin-left: 35px;
}

.ed-infor-1 p{
  padding-right: 185px;
  font-size: 13pt;
}

.ed-infor-2{
  width: 285px;
  height: 25px;
  border: 2px solid #2CA6E0;
  border-radius: 4px;
  margin-left: 24px;
}
</style>
