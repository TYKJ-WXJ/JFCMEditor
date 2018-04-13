<template>
<div class="tab-vertical">
  <div class="ed-titles">
    <p>固态设备模板</p>
  </div>
  <div class="tab-content">
    <div class="ed-img">
      <img src="" alt="">
    </div>
    <div class="ed-items">
      <p>办公桌</p>
    </div>
  </div>

  <div class="ed-lab">
    <div class="ed-mod">
      <p class="ed-time">设备详情</p>
      <ul>
        <li class="ed-item">
          <a>品牌名称：</a>
          <a>{{ name }}</a>
        </li>
        <li class="ed-item">
          <a>设备型号：</a>
          <a>{{ model }}</a>
        </li>
        <li class="ed-item">
          <a>出厂编号：</a>
          <a>{{ number }}</a>
        </li>
        <li class="ed-item">
          <a>尺 寸：</a>
          <a>{{ size }}</a>
        </li>
        <li class="ed-item">
          <a>颜  色：</a>
          <a>{{ color }}</a>
        </li>
        <li class="ed-item">
          <a>重  量：</a>
          <a>{{ weight }}</a>
        </li>
        <li class="ed-item">
          <a>加热量：</a>
          <a>{{ heating }}</a>
        </li>
        <li class="ed-item">
          <a>加湿量：</a>
          <a>{{ humidification }}</a>
        </li>
        <li class="ed-item">
          <a>FLA(A)：</a>
          <a>{{ fla }}</a>
        </li>
        <li class="ed-item">
          <a>设备描述：</a>
          <a>{{ bewrite }}</a>
        </li>
      </ul>
    </div>
    <div class="ed-temp">
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
      name: '',
      model: '',
      number: '',
      size: '',
      color: '',
      weight: '',
      heating: '',
      humidification: '',
      fla: '',
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
        this.name = res.data.name;
        this.model = res.data.model;
        this.number = res.data.number;
        this.size = res.data.size;
        this.color = res.data.color;
        this.weight = res.data.weight;
        this.heating = res.data.heating;
        this.humidification = res.data.humidification;
        this.fla = res.data.fla;
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
  height: 440px;
  border-radius: 4px;
  font-size: 12pt;
}

.ed-items{
  font-size: 14pt;
  font-family: 黑体;
  color: #ffffff;
  margin-top: 50px;
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
  width: 400px;
  height: 350px;
  margin: 5px auto;
}

.ed-img img{
  width: 100%;
  height: 100%;
}

.ed-mod{
  width: 325px;
  height: 345px;
  border: 1px solid #275E84;
  margin-left: 20px;
  margin-top: 12px;
  float: left;
}

.ed-item{
  list-style: none;
  display: flex;
  padding-top: 2px;
  padding-left: 22px;
  font-size: 12pt;
}

.ed-time{
  list-style: none;
  padding-top: 10px;
  font-size: 16pt;
  padding-right: 195px;
  padding-bottom: 8px;
}

.ed-temp{
  width: 325px;
  height: 70px;
  border: 1px solid #275E84;
  font-size: 12pt;
  margin-left: 20px;
  margin-top: 7px;
  float: left;
}

 .ed-data{
  margin-left: 30px;
  float: left;
  position: fixed;
  bottom: 155px;
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
  font-size: 14pt;
}

.ed-tet{
  list-style: none;
  padding-right: 140px;
  padding-top: 5px;
}

.ed-tet1{
  list-style: none;
  padding-right: 30px;
  margin-top: 10px;
}

</style>
