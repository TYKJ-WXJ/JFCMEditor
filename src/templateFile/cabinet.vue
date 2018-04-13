<template>
<div class="tab-vertical">
  <div class="ed-titles">
    <p>摄像头模板</p>
  </div>
  <div id="ed-cabinet">
    <div class="ed-tab">
    <div class="ed-lab">
        <div id="cabinet">
          <a href="#cabinet" title="First">设</br>备</br>详</br>情</a>
            <div class="tab-content">
              <div class="ed-tet">
                <div class="ed-switch">
                  <div class="ed-switch-1">
                    <p>交换机</p>
                  </div>
                  <div class="ed-error">
                    <img src="../assets/img/jg1.png" alt="">
                    <p>交换机A：接入异常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg2.png" alt="">
                    <p>交换机B：接入正常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg2.png" alt="">
                    <p>交换机C：接入正常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg2.png" alt="">
                    <p>交换机D：接入正常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg2.png" alt="">
                    <p>交换机E：接入正常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg2.png" alt="">
                    <p>交换机F：接入正常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg2.png" alt="">
                    <p>交换机G：接入正常</p>
                  </div>
                </div>
                <div class="ed-state">
                  <div class="ed-state-1">
                    <p>机柜A</p>
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
                  <div class="ed-state-2">
                    <img src="" alt="">
                  </div>
                  <div class="ed-state-3">
                    <div class="ed-capacity">
                      <img src="../assets/img/jg5.png" alt="">
                      <p>机柜已用容量：</p>
                      <p>{{ jhave }}</p>
                    </div>
                    <div class="ed-capacity-1">
                      <img src="../assets/img/jg7.png" alt="">
                      <p>机柜表面温度：</p>
                      <p>{{ jsurface }}</p>
                    </div>
                    <div class="ed-capacity-2">
                      <img src="../assets/img/jg6.png" alt="">
                      <p>机柜已用重量：</p>
                      <p>{{ jhaveweight }}</p>
                    </div>
                  </div>
                  <div class="ed-state-4">

                  </div>
                </div>
                <div class="ed-infor">
                  <div class="ed-infor-1">
                    <p>机柜反馈信息</p>
                  </div>
                  <div class="ed-infor-2">

                  </div>
                </div>
                <div class="ed-disk">
                  <div class="ed-disk-1">
                    <p>服务器</p>
                  </div>
                  <div class="ed-error">
                    <img src="../assets/img/jg3.png" alt="">
                    <p>服务器A：接入异常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg4.png" alt="">
                    <p>服务器B：接入正常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg4.png" alt="">
                    <p>服务器C：接入正常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg4.png" alt="">
                    <p>服务器D：接入正常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg4.png" alt="">
                    <p>服务器E：接入正常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg4.png" alt="">
                    <p>服务器F：接入正常</p>
                  </div>
                  <div class="ed-switch-2">
                    <img src="../assets/img/jg4.png" alt="">
                    <p>服务器G：接入正常</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
        <div id="cabinet2">
          <a href="#cabinet2" title="Second" class="ed-class">设</br>备</br>基</br>础</br>信</br>息</a>
            <div class="tab-content">
              <div class="ed-mod">
                <ul>
                  <li class="ed-item">
                    <a>品  牌：</a>
                    <a>{{ jname }}</a>
                  </li>
                  <li class="ed-item">
                    <a>机柜类型：</a>
                    <a>{{ jtype }}</a>
                  </li>
                  <li class="ed-item">
                    <a>尺  寸：</a>
                    <a>{{ jsize }}</a>
                  </li>
                  <li class="ed-item">
                    <a>位  置：</a>
                    <a>{{ jlocation }}</a>
                  </li><li class="ed-item">
                    <a>形  状：</a>
                    <a>{{ jshape }}</a>
                  </li>
                  <li class="ed-item">
                    <a>颜  色：</a>
                    <a>{{ jcolor }}</a>
                  </li>
                  <li class="ed-item">
                    <a>自身重量：</a>
                    <a>{{ jweight }}</a>
                  </li>
                  <li class="ed-item">
                    <a>标准容量：</a>
                    <a>{{ jcapacity }}</a>
                  </li>
                  <li class="ed-item">
                    <a>设备描述：</a>
                    <a>{{ jbewrite }}</a>
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
      jhave: '',
      jsurface: '',
      jhaveweight: '',
      jname: '',
      jtype: '',
      jsize: '',
      jlocation: '',
      jshape: '',
      jcolor: '',
      jweight: '',
      jcapacity: '',
      jbewrite: ''
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
        this.jhave = res.data.jhave;
        this.jsurface = res.data.jsurface;
        this.jhaveweight = res.data.jhaveweight;
        this.jname = res.data.jname;
        this.jtype = res.data.jtype;
        this.jsize = res.data.jsize;
        this.jlocation = res.data.jlocation;
        this.jshape = res.data.jshape;
        this.jcolor = res.data.jcolor;
        this.jweight = res.data.jweight;
        this.jcapacity = res.data.jcapacity;
        this.jbewrite = res.data.jbewrite;
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
  width: 263px;
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
  height: 100px;
  padding-left: 10px;
  padding-top: 10px;
}

.ed-img img{
  width: 100%;
  height: 100%;
}

 .ed-data{
   margin-top: 10px;
}

.ed-select select{
  border: 1px solid #3D78DE;
  background-color: #275E8D;
  padding-right: 50px;
  color: #ffffff;
  height: 25px;
  border-radius: 4px;
}

.ed-select{
  display: flex;
  padding: 10px;
  padding-left: 30px;
}

.ed-tabs{
  background-color: #0B4D95;
}

#ed-cabinet{
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
	width: 950px;
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

.ed-switch{
  width: 240px;
  height: 400px;
  border: 1px solid #275E84;
}

.ed-switch-1{
  padding-top: 10px;
  padding-right: 145px;
}

.ed-switch-2{
  margin-top: 22px;
}

.ed-switch-2 img{
  margin-right: 162px;
}

.ed-switch-2 p{
  margin-top: -34px;
  padding-left: 45px;
}

.ed-error{
  margin-top: 22px;
}

.ed-error img{
  margin-right: 162px;
}

.ed-error p{
  margin-top: -34px;
  padding-left: 45px;
  color: #FF5F1E;
}

.ed-state{
  width: 398px;
  height: 300px;
  border: 1px solid #275E84;
  margin-left: 255px;
  margin-top: -400px;
}

.ed-state-1{
  padding-top: 10px;
}

.ed-state-1 p{
  padding-right: 305px;
}

.ed-state-2{
  height: 150px;
  width: 200px;
  margin: 10px auto;
}

.ed-state-2 img{
  width: 100%;
  height: 100%;
}

.ed-state-3{
  padding-left: 3px;
}

.ed-capacity{
  width: 110px;
  height: 80px;
  border: 1px solid #2CA6E0;
  margin-top: 10px;
  border-radius: 15px;
  margin-left: 15px;
  font-size: 11pt;
}

.ed-capacity img{
  padding-top: 5px;
}

.ed-capacity p{
  padding-left: 5px;
}

.ed-capacity-1{
  width: 110px;
  height: 80px;
  border: 1px solid #2CA6E0;
  margin-top: -79px;
  border-radius: 15px;
  margin-left: 140px;
  font-size: 11pt;
}

.ed-capacity-2{
  width: 110px;
  height: 80px;
  border: 1px solid #2CA6E0;
  margin-top: -79px;
  border-radius: 15px;
  margin-left: 265px;
  font-size: 11pt;
}

.ed-select select{
  border: 1px solid #3D78DE;
  background-color: #275E8D;
  padding-right: 50px;
  color: #ffffff;
  height: 25px;
  border-radius: 4px;
}

.ed-select{
  display: flex;
  padding: 10px;
  padding-right: 25px;
  margin-top: -34px;
  float: right;
}

.ed-infor{
  width: 398px;
  height: 90px;
  border: 1px solid #275E84;
  margin-left: 255px;
  margin-top: 10px;
}

.ed-disk{
  width: 240px;
  height: 400px;
  border: 1px solid #275E84;
  margin-left: 668px;
  margin-top: -400px;
}

.ed-infor-1{
  padding-top: 2px;
  padding-right: 256px;
}

.ed-infor-2{
  border: 1px solid #2CA6E0;
  border-radius: 4px;
  width: 357px;
  height: 48px;
  margin-left: 20px;
  margin-top: 5px;
}

.ed-disk-1{
  padding-top: 10px;
  padding-right: 145px;
}

.ed-ture-1{
  padding-top: 35px;
}


.ed-title{
  list-style: none;
  display: flex;
  padding-left: 30px;
  font-family: 黑体;
  font-size: 12pt;
}

.ed-title img{
  padding-top: 6px;
  height: 22px;
  margin-left: 88px;
}

.ed-red{
  display: none;
  font-family: 黑体;
  font-size: 12pt;
  color: #ffffff;
}

.ed-mod{
  width: 885px;
  height: 279px;
  border: 1px solid #275E84;
  margin-left: 12px;
}

.ed-item{
  list-style: none;
  display: flex;
  padding-top: 5px;
  padding-left: 115px;
  font-size: 12pt;
}

.ed-ment{
  width: 885px;
  height: 111px;
  border: 1px solid #275E84;
  margin-left: 12px;
  margin-top: 15px;
}

.ed-ments{
  float: left;
  padding-top: 20px;
  padding-left: 75px;
}

.ed-ments1{
  padding-top: 20px;
  padding-left: 15px;
}

table{
  padding-top: 10px;
}

</style>
