<template>
  <div class="ed-sersor">
    <div class="ed-titles">
      <p>温湿度传感器</p>
    </div>
    <div class="ed-state">
      <div class="ed-state-1">
        <img src="../assets/img/mini-20.png" alt="">
        <img src="../assets/img/mini-22.png" alt="" style="display:none">
        <p>当前湿度：{{ miwhum }}</p>
      </div>
      <div class="ed-state-2">
        <img src="../assets/img/mini-21.png" alt="">
        <img src="../assets/img/mini-23.png" alt="" style="display:none">
        <p>当前温度：{{ miwtem }}</p>
      </div>
    </div>
    <div class="ed-infor">
      <p>当前状态：</p>
      <a>{{ miwstate }}</a>
    </div>
  </div>
</template>
<script>
import server from '@/services/server';
export default {
  data () {
    return {
      miwhum: '',
      miwstate: '',
      miwtem: ''
    }
  },
  mounted() {
    this.serJson();
  },
  methods: {
    serJson() {
      server.preJSON().then((res) => {
        this.miwhum = res.data.miwhum;
        this.miwstate = res.data.miwstate;
        this.miwtem = res.data.miwtem;
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.ed-sersor{
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

.ed-state {
  padding-top: 30px;
}

.ed-state-1 {
  float: left;
  margin-left: 48px;
}

.ed-infor {
  padding-top: 25px;
}

.ed-infor p{
  float: left;
  padding-left: 65px;
}

.ed-infor a{
  font-size: 16px;
  color: #ffffff;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
  padding-right: 2px;
}
</style>
