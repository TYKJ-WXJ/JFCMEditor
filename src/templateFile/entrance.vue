<template>
<div class="tab-vertical">
  <div class="ed-titles">
    <p>门禁A</p>
  </div>
  <div class="tab-content">
    <div class="ed-img">
      <img src="" alt="">
    </div>
    <div class="ed-items">
      <ul>
        <li class="ed-title">
          <a>门禁A</a>
          <img src="/src/assets/img/m4 (2).png" alt="">正常接入
          <a class="ed-red"><img src="/src/assets/img/m4 (1).png" alt="">未接入</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="ed-data">
    <ul>
      <li class="ed-select">
      <a>添加到实时数据：</a>
          <select>
            <option value="1"><input type="checkbox">1</option>
            <option value="2"><input type="checkbox">2</option>
            <option value="3"><input type="checkbox">3</option>
            <option value="4"><input type="checkbox">4</option>
            <option value="5"><input type="checkbox">5</option>
            <option value="6"><input type="checkbox">6</option>
          </select>
      </li>
    </ul>
  </div>
  <div id="ed-entrance">
    <div class="ed-tab">
    <div class="ed-lab">
        <div id="entrance">
          <a href="#entrance" title="First">设</br>备</br>详</br>情</a>
            <div class="tab-content">
              <div class="ed-tet">
                <div class="ed-time">
                 <p>当前状态：正常</p>
                 <div class="ed-temp">
                   <img src="../assets/img/mj1.png" alt="">
                   <img src="../assets/img/mj2.png" alt="" style="display:none">
                 </div>
                </div>
                <div class="ed-time-1">
                  <p>• 开启</p>
                </div>
                </div>
              </div>
            </div>
        <div id="entrance2">
          <a href="#entrance2" title="Second" class="ed-class">设</br>备</br>基</br>础</br>信</br>息</a>
            <div class="tab-content">
              <div class="ed-mod">
                <ul>
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
                    <a>设备描述：</a>
                    <a>{{ bewrite }}</a>
                  </li>
                </ul>
              </div>
              <div class="ed-ment">
                <div class="ed-ments">
                  <img src="../assets/img/m1.png" alt="">
                  <a>设备管理员：</a>
                  <a>叶一凡</a>
                </div>
                <div class="ed-ments1">
                  <img src="../assets/img/m2.png" alt="">
                  <a>设备管理员联系方式：</a><a>123 1234 1234</a>
                </div>
              </div>
            </div>
        </div>
    </div>
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
  width: 530px;
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
  width: 400px;
  height: 350px;
  margin: 5px auto;
}

.ed-img img{
  width: 100%;
  height: 100%;
}

 .ed-data{
  margin-left: 30px;
  float: left;
  position: absolute;
  bottom: 141px;
  border-radius: 4px;
  width: 530px;
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
  padding-left: 155px;
}

.ed-tabs{
  background-color: #0B4D95;
}

#ed-entrance{
  height: 500px;
  position: relative;
  overflow: hidden;
}

.ed-lab > div > a {
	color: #ffffff;
  font-family: 黑体;
  font-size: 14pt;
	display: inline-block;
	margin: 1px;
  background-color: #004075;
	padding: 42px 15px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 0px;
	border-radius: 3px;
  margin-left: -238px;
}

.ed-class{
  color: #ffffff;
  font-family: 黑体;
  font-size: 14pt;
	display: inline-block;
	margin: 1px;
  background-color: #004075;
	padding: 42px 15px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 0px;
	border-radius: 3px;
  margin-left: -100px;
}

.ed-lab > div:target > a {
    background: #0B4D95;
}


.ed-lab > div > div {
	background: #0B4D95;
	z-index: 1;
	top: 0;
	padding: 20px;
	outline-offset: -8px;
	min-height: 250px;
	position: absolute;
	left: 51px;
	width: 400px;
  height: 440px;
}

.ed-lab > div:not(:target) > div {
	display: block;
}


.ed-lab > div:target > div {
	position: absolute;
	z-index: 2 !important;
}

.ed-lab{
  float: left;
  height: 250px;
  width: 351px;
  text-align: center;
}

.ed-item{
  list-style: none;
  display: flex;
  padding-top: 13px;
  padding-left: 22px;
}

.ed-temp{
  list-style: none;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 24pt;
}

.ed-temp-1{
  list-style: none;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 24pt;
}

.ed-items{
  font-size: 14pt;
  font-family: 黑体;
  color: #ffffff;
}

.ed-title{
  list-style: none;
  display: flex;
  padding-left: 155px;
  font-family: 黑体;
  font-size: 12pt;
}

.ed-title img{
  padding-top: 6px;
  height: 22px;
  margin-left: 118px;
}

.ed-red{
  display: none;
  font-family: 黑体;
  font-size: 12pt;
  color: #ffffff;
}

.ed-mod{
  width: 350px;
  height: 240px;
  border: 1px solid #275E84;
  margin-left: 6px;
}

.ed-ment{
  width: 350px;
  height: 161px;
  border: 1px solid #275E84;
  margin-left: 6px;
  margin-top: 10px;
}

.ed-ments{
  float: left;
  padding-top: 20px;
  padding-left: 10px;
}

.ed-ments a{
  padding-left: 8px;
}

.ed-ments1{
  padding-top: 12px;
  float: left;
  padding-left: 5px;
}

.ed-state{
  display: flex;
  padding-top: 100px;
  padding-left: 140px;
  font-size: 28pt;
}

.ed-time p{
  font-size: 14pt;
  padding-right: 155px;
}

.ed-time-1{
  height: 165px;
  width: 290px;
  border: 1px solid #2CA6E0;
  margin-top: 10px;
  margin-left: 37px;
  border-radius: 4px;
}

.ed-time-1 p{
  padding-right: 190px;
  margin-top: 10px;
}
</style>
