<template>
  <div class="ed-precision">
    <div class="ed-titles">
      <p>精密空调</p>
    </div>
    <div class="ed-title">
      <div class="ed-state">
        <p>当前模式：</p>
        <img src="../assets/img/j1.png" alt="">
      </div>
      <div class="ed-infor">
        <div class="ed-infor-1">
          <p>•送风温度</p>
          <div class="ed-text">
          <a>{{ migivewind }}</a>
          </div>
        </div>
        <div class="ed-infor-2">
          <p>•回风温度</p>
          <div class="ed-text">
          <a>{{ mirewind }}</a>
          </div>
        </div>
        <div class="ed-infor-3">
          <p>•送风湿度</p>
          <div class="ed-text-1">
          <a>{{ migivewind1 }}</a>
          </div>
        </div>
        <div class="ed-infor-3">
          <p>•回风湿度</p>
          <div class="ed-text-1">
          <a>{{ mirewind1 }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import server from '@/services/server';
export default {
  data () {
    return {
      migivewind: '',
      mirewind: '',
      migivewind1: '',
      mirewind1: ''
    }
  },
  mounted() {
    this.minipreJson();
  },
  methods: {
    minipreJson() {
      server.preJSON().then((res) => {
        this.migivewind = res.data.migivewind;
        this.mirewind = res.data.mirewind;
        this.migivewind1 = res.data.migivewind1;
        this.mirewind1 = res.data.mirewind1;
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.ed-precision{
  width: 360px;
  height: 235px;
  margin: 0 auto;
  color: #ffffff;
  box-shadow: 0px 0px 20px 4px rgba(9, 74, 115, 0.4) inset;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
}

a{
  color: #ffffff;
}

.ed-titles{
  padding-left: 10px;
  font-size: 16px;
  display: flex;
  background: linear-gradient(to right, #142657, transparent);
  margin: 0 auto;
  height: 25px;
}

.ed-title{
  font-size: 12px;
}

.ed-state{
  float: left;
  margin-left: 35px;
  margin-top: 32px;
}

.ed-state p{
  padding-right: 210px;
  font-size: 12px;
  padding-top: 6px;
}

.ed-state img{
  margin-right: 224px;
  margin-top: 8px;
}

.ed-infor {
  float: left;
  margin-top: 3px;
  margin-left: 20px;
}

.ed-infor p{
  font-size: 12px;
}

.ed-infor-1{
  margin-top: -105px;
  display: flex;
  margin-left: 125px;
}

.ed-infor-1 p{
  margin-top: 2px;
}

.ed-infor-2{
  display: flex;
  margin-left: 125px;
  margin-top: 18px;
}

.ed-infor-2 p{
  margin-top: 2px;
}

.ed-text{
  width: 100px;
  height: 23px;
  border: 1px solid #2CA6E0;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 15px;
}

.ed-infor-3{
  display: flex;
  margin-left: 125px;
  margin-top: 18px;
}

.ed-infor-3 p{
  margin-top: 2px;
}

.ed-text-1{
  width: 100px;
  height: 23px;
  border: 1px solid #2CA6E0;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 14px;
}
</style>
