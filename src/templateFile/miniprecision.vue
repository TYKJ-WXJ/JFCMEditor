<template>
  <div class="ed-precision">
    <div class="ed-titles">
      <p>精密空调</p>
    </div>
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
      <div class="ed-infor-4">
        <p>•回风湿度</p>
        <div class="ed-text-1">
        <a>{{ mirewind1 }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import server from '@/services/server';
export default {
  data () {
    return{
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
    },
  }
}
</script>

<style scoped>
.ed-precision{
  width: 284px;
  height: 297px;
  background-color: #29ABE2;
  opacity: 0.2;
  margin: 0 auto;
  color: #ffffff;
  font-family: 黑体;
}

a{
  color: #ffffff;
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

.ed-state p{
  padding-right: 126px;
  font-size: 14pt;
  padding-top: 47px;
}

.ed-state img{
  margin-left: 127px;
  margin-top: -27px;
}

.ed-infor {
  margin-top: 16px;
}

.ed-infor p{
  font-size: 14pt;
}

.ed-infor-1{
  float: left;
  margin-left: 5px;
}

.ed-infor-1 p{
  padding-left: 20px;
}

.ed-infor-2{
  float: left;
  margin-left: 15px;
}

.ed-infor-2 p{
  padding-left: 20px;
}

.ed-text{
  width: 100px;
  height: 23px;
  border: 1px solid #2CA6E0;
  border-radius: 4px;
  font-size: 12pt;
  margin-left: 20px;
}

.ed-infor-3{
  float: left;
  margin-left: 15px;
  margin-top: 10px;
}

.ed-infor-3 p{
  padding-left: 14px;
}

.ed-text-1{
  width: 100px;
  height: 23px;
  border: 1px solid #2CA6E0;
  border-radius: 4px;
  font-size: 12pt;
  margin-left: 10px;
}

.ed-infor-4{
  float: left;
  margin-left: 25px;
  margin-top: 10px;
}

.ed-infor-4 p{
  padding-left: 9px;
}
</style>
