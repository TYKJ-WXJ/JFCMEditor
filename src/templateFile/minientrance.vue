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
  data () {
    return {
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
  float: left;
  padding-left: 30px;
  padding-top: 10px;
}

.ed-infor {
  height: 92px;
  width: 95px;
  margin: 17px auto;
}

.ed-infor img{
  width: 100%;
  height: 100%;
}

.ed-true{
  margin-top: 6px;
}

.ed-true-1 p{
  padding-right: 217px;
  font-size: 12px;
  padding-top: 7px;
}

.ed-true-2{
  width: 300px;
  height: 47px;
  border: 1px solid #2CA6E0;
  border-radius: 4px;
  margin-left: 30px;
  margin-top: 4px;
}

</style>
