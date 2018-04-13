<template>
  <div class="ed-engine">
    <div class="ed-titles">
      <p>机房设备</p>
    </div>
    <div class="ed-state">
      <div class="ed-state-1">
        <img src="../assets/img/jf7.png" alt="">
        <img src="../assets/img/jf11.png" alt="" style="display:none">
        <p>配电{{ mijfpower }}</p>
      </div>
      <div class="ed-state-2">
        <img src="../assets/img/jf8.png" alt="">
        <img src="../assets/img/jf12.png" alt="" style="display:none">
        <p>环境监控{{ mijfenviron }}</p>
      </div>
      <div class="ed-state-3">
        <img src="../assets/img/jf9.png" alt="" style="display:none">
        <img src="../assets/img/jf13.png" alt="">
        <p>消防{{ mijffire }}</p>
      </div>
      <div class="ed-state-4">
        <img src="../assets/img/jf10.png" alt="" style="display:none">
        <img src="../assets/img/jf14.png" alt="">
        <p>安防{{ mijfsecurity }}</p>
      </div>
    </div>
    <div class="ed-infor">
      <p>反馈：{{ mijfinfor }}</p>
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

.ed-state img{
  width: 70px;
  height: 65px;
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
