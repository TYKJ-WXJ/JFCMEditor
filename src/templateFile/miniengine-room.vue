<template>
  <div class="ed-engine">
    <div class="ed-titles">
      <p>机房设备</p>
    </div>
    <div class="ed-state">
      <div class="ed-state-1">
        <img src="../assets/img/jf7.png" alt="">
        <img src="../assets/img/jf11.png" alt="" style="display:none">
        <div class="ed-sts">
          <p>配电系统：</p>
          <p>{{ mijfpower }}</p>
        </div>
      </div>
      <div class="ed-state-2">
        <img src="../assets/img/jf8.png" alt="">
        <img src="../assets/img/jf12.png" alt="" style="display:none">
        <div class="ed-sts">
          <p>环境监控系统：</p>
          <p>{{ mijfenviron }}</p>
        </div>
      </div>
      <div class="ed-state-3">
        <img src="../assets/img/jf9.png" alt="" style="display:none">
        <img src="../assets/img/jf13.png" alt="">
        <div class="ed-sts">
          <p>消防系统：</p>
          <p>{{ mijffire }}</p>
        </div>
      </div>
      <div class="ed-state-4">
        <img src="../assets/img/jf10.png" alt="" style="display:none">
        <img src="../assets/img/jf14.png" alt="">
        <div class="ed-sts-1">
          <p>安防系统：</p>
          <p>{{ mijfsecurity }}</p>
        </div>
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
  data () {
    return {
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
  width: 340px;
  height: 170px;
  /* background-color: #29ABE2; */
  /* opacity: 0.2; */
  margin: 0 auto;
  color: #ffffff;
  font-family: 黑体;
}

.ed-titles{
  padding-left: 10px;
  font-size: 14pt;
  display: flex;
  background: linear-gradient(to right, #142657, transparent);
  margin: 0 auto;
  height: 25px;
}

.ed-state{
  margin-top: 2px;
  font-size: 12pt;
  line-height: 17px;
  margin-left: 12px;
}

.ed-state img{
  width: 50px;
  height: 42px;
}

.ed-sts{
  float: right;
  margin-left: 5px;
}

.ed-sts-1{
  float: right;
  margin-left: 22px;
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
}

.ed-state-4{
  float: left;
  margin-left: 11px;
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
