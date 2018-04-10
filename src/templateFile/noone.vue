<template>
<div class="tab-vertical">
  <div class="ed-titles">
    <p>监控点详情</p>
  </div>
  <div class="tab-content">
    <div class="ed-img">
      <img src="" alt="">
    </div>
  </div>
  <div class="ed-data">
      <div class="ed-title">
        <a>监控区域B</a>
        <img src="/src/assets/img/m4 (2).png" alt="">布防中
        <a class="ed-red"><img src="/src/assets/img/m4 (1).png" alt="">未接入</a>
      </div>
      <div class="ed-select">
        <a>添加到实时数据：</a>
          <select>
            <option value="1"><input type="checkbox">1</option>
            <option value="2"><input type="checkbox">2</option>
            <option value="3"><input type="checkbox">3</option>
            <option value="4"><input type="checkbox">4</option>
            <option value="5"><input type="checkbox">5</option>
            <option value="6"><input type="checkbox">6</option>
          </select>
      </div>
  </div>
  <div class="ed-lab">
    <div class="ed-time">
      <a>监控点实时信息</a>
    </div>
    <div class="ed-temp">
      <p>• 开启</p>
    </div>
    <div class="ed-item">
      <ul>
        <li class="ed-tet">
          <p>设备管理员：叶一凡</p>
        </li>
        <li class="ed-tet1">
          <p>设备管理员联系方式：123 123 1234</p>
        </li>
      </ul>
    </div>
  </div>
 </div>
</template>
<script>
import server from '@/services/server';
import echarts from 'echarts/dist/echarts.min';
import $ from 'jquery';
export default {
  name: 'tab-vertical',
  data () {
    return {
      model: '',
      number: '',
      size: '',
      color: '',
      weight: '',
      bewrite: ''
    }
  },
  computed: {},
  mounted() {
    this.predataJson();
  },
  methods: {
    predataJson() {
      // 获取数据
      server.preJSON().then((res) => {
        this.model = res.data.model;
        this.number = res.data.number;
        this.size = res.data.size;
        this.color = res.data.color;
        this.weight = res.data.weight;
        this.bewrite = res.data.bewrite;
      }).catch((err) => {
        console.log(err);
      })
    },
  }
}
</script>

<style scoped>
.tab-vertical {
  margin: 0 auto;
  display: block;
  height: 594px;
  background-color: #036EB8;
  width: 1060px;
  color: #ffffff;
  font-family: 黑体;
}

.tab-vertical a{
  color: #ffffff;
}

.tab-content{
  float: left;
  background-color: #0F65AE;
  margin-left: 30px;
  width: 610px;
  height: 399px;
  border-radius: 4px;
  font-size: 12pt;
}

.ed-titles{
  color: #ffffff;
  padding-left: 10px;
  font-size: 24pt;
  font-family: 黑体;
  display: flex;
  background-color: #2090D0;
  margin: 30px 0;
}

.ed-titles p{
  padding-top: 7px;
}

.ed-img{
  width: 180px;
  height: 350px;
  padding-left: 10px;
}

.ed-img img{
  width: 100%;
  height: 100%;
}

 .ed-data{
  margin-left: 30px;
  float: left;
  position: absolute;
  bottom: 137px;
  border-radius: 4px;
  width: 610px;
  height: 36px;
}

.ed-select select{
  border: 1px solid #3D78DE;
  background-color: #275E8D;
  padding-right: 50px;
  color: #ffffff;
  height: 25px;
  border-radius: 4px;
  margin-left: 30px;
}

.ed-select{
  display: flex;
  padding: 5px;
  font-size: 12pt;
  color: #ffffff;
  background-color: #0F65AE;
  padding-left: 300px;
}

.ed-lab{
  width: 365px;
  height: 440px;
  background: #0B4D95;
  margin-left: 670px;
  color: #ffffff;
  font-size: 12pt;
}
.ed-time{
  padding-top: 15px;
  padding-right: 77px;
}

.ed-time a{
  padding-right: 100px;
}

.ed-time img{
  height: 77px;
  margin-top: -52px;
  padding-left: 100px;
}

.ed-times{
  padding-top: 35px;
  padding-right: 165px;
}

.ed-times a{
  padding-right: 100px;
}

.ed-times img{
  height: 77px;
  margin-top: -52px;
  padding-left: 100px;
}

.ed-temp{
  height: 280px;
  width: 320px;
  border: 1px solid #2CA6E0;
  margin-top: 10px;
  margin-left: 22px;
  border-radius: 4px;
}

.ed-temp p{
  margin-right: 247px;
  margin-top: 10px;
}

.ed-item{
  margin-top:20px;
}

.ed-tet{
  list-style: none;
  padding-right: 150px;
}

.ed-tet1{
  list-style: none;
  padding-right: 38px;
  margin-top: 10px;
}

.ed-title{
  list-style: none;
  display: flex;
  font-family: 黑体;
  font-size: 12pt;
  width: 170px;
  margin-bottom: -28px;
  margin-left: 77px;
}

.ed-title img{
  padding-top: 6px;
  height: 22px;
  margin-left: 30px;
}

.ed-red{
  display: none;
  font-family: 黑体;
  font-size: 12pt;
  color: #ffffff;
}

</style>
