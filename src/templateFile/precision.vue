<template>
<div class="tab-vertical">
  <div class="ed-titles">
    <p>精密空调</p>
  </div>
  <div class="tab-content">
    <div class="ed-img">
      <img src="" alt="">
    </div>
    <div class="ed-items">
      <ul>
        <li class="ed-title">
          <a>精密空调</a>
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
  <div id="ed-precision">
    <div class="ed-tab">
    <div class="ed-lab">
        <div id="precision">
          <a href="#precision" title="First">设</br>备</br>详</br>情</a>
            <div class="tab-content">
              <div class="ed-tet">
                <div class="ed-time">
                    <a class="ed-item-1">参数</a>
                  <div class="meth">
                    <table>
                      <tr class="ed-temp">
                        <td>•送风温度</td>
                        <td class="ed-mess">
                          <div class="ed-text">
                          <a>{{ givewind }}</a>
                          </div>
                        </td>
                        <td class="ed-mess-1">•回风温度</td>
                        <td class="ed-mess">
                          <div class="ed-text">
                          <a>{{ rewind }}</a>
                          </div>
                        </td>
                      </tr>
                      <tr class="ed-temp">
                        <td>•送风湿度</td>
                        <td class="ed-mess">
                          <div class="ed-text">
                          <a>{{ givewind1 }}</a>
                          </div>
                        </td>
                        <td class="ed-mess-1">•回风湿度</td>
                        <td class="ed-mess">
                          <div class="ed-text">
                          <a>{{ rewind1 }}</a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                    <div class="ed-circle-1">
                      <i-circle :percent="40" style="width:68px;height:70px;">
                        <span class="demo-Circle-inner"><img src="../assets/img/j1.png" alt=""></span>
                      </i-circle>
                    </div>
                    <div class="ed-circle-2">
                      <i-circle :percent="20" style="width:68px;height:70px;">
                        <span class="demo-Circle-inner"><img src="../assets/img/j2.png" alt=""></span>
                      </i-circle>
                    </div>
                    <div class="ed-circle-3">
                      <i-circle :percent="80" style="width:68px;height:70px;">
                        <span class="demo-Circle-inner"><img src="../assets/img/j3.png" alt=""></span>
                      </i-circle>
                    </div>
                    <div class="ed-circle-4">
                      <i-circle :percent="50" style="width:68px;height:70px;">
                        <span class="demo-Circle-inner" ><img src="../assets/img/j4.png" alt=""></span>
                      </i-circle>
                    </div>
                    <div class="ed-circle-5">
                     <i-circle :percent="70" style="width:68px;height:70px;">
                        <span class="demo-Circle-inner"><img src="../assets/img/j5.png" alt=""></span>
                      </i-circle>
                    </div>

                </div>
                </div>
                <div class="ed-state">
                <div class="ed-time">
                  <a class="ed-state-1">状态监测</a>
                  <a class="ed-state-2">正常</a>
                </div>
                <div class="ed-statue">
                  <div class="ed-status-1">
                    <img src="../assets/img/jmkt6.png" alt="">
                    <img src="../assets/img/jmkt12.png" alt="" style="display:none;">
                  </div>
                  <div class="ed-status-2">
                    <img src="../assets/img/jmkt7.png" alt="" style="display:none;">
                    <img src="../assets/img/jmkt13.png" alt="">
                    <!-- <Alert type="warning" show-icon>
                        电压故障
                      </Alert> -->
                  </div>
                  <div class="ed-status-3">
                    <img src="../assets/img/jmkt8.png" alt="">
                    <img src="../assets/img/jmkt14.png" alt="" style="display:none;">
                  </div>
                  <div class="ed-status-4">
                    <img src="../assets/img/jmkt9.png" alt="">
                    <img src="../assets/img/jmkt15.png" alt="" style="display:none;">
                  </div>
                  <div class="ed-status-5">
                    <img src="../assets/img/jmkt16.png" alt="">
                    <img src="../assets/img/jmkt10.png" alt="" style="display:none;">
                  </div>
                  <div class="ed-status-6">
                    <img src="../assets/img/jmkt17.png" alt="">
                    <img src="../assets/img/jmkt11.png" alt="" style="display:none;">
                  </div>
                </div>
              </div>
              </div>
            </div>
        <div id="precision2">
          <a href="#precision2" title="Second" class="ed-class">设</br>备</br>基</br>础</br>信</br>息</a>
            <div class="tab-content">
              <div class="ed-mod">
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
      givewind: '',
      rewind: '',
      givewind1: '',
      rewind1: '',
      name: '',
      model: '',
      number: '',
      size: '',
      color: '',
      weight: '',
      heating: '',
      humidification: '',
      fla: '',
      bewrite: '',
      percent: 0
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
        this.givewind = res.data.givewind;
        this.rewind = res.data.rewind;
        this.givewind1 = res.data.givewind1;
        this.rewind1 = res.data.rewind1;
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
        this.percent = res.data.percent;
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
  height: 350px;
  padding-left: 10px;
}

.ed-img img{
  width: 100%;
  height: 100%;
}

.ed-title img{
  padding-top: 6px;
  height: 22px;
  margin-left: 42px;
}

 .ed-data{
  margin-left: 30px;
  float: left;
  position: absolute;
  bottom: 141px;
  border-radius: 4px;
  width: 263px;
  height: 36px;
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
  padding: 5px;
  font-size: 12pt;
  color: #ffffff;
  background-color: #0F65AE;
  padding-left: 28px;
}

.ed-tabs{
  background-color: #0B4D95;
}

#ed-precision{
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
	width: 618px;
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

.ed-labs{
  float: left;
  height: 250px;
  width: 350px;
  padding-top: 40px;
}

.meth{
  margin-top: -35px;
}

.ed-item{
  list-style: none;
  display: flex;
  padding-top: 3px;
  padding-left: 50px;
}

.ed-temp{
  list-style: none;
  display: flex;
  padding-top: 10px;
  padding-left: 67px;
}

.ed-mess{
  padding-left: 10px;
  padding-top: 2px;
}

.ed-mess-1{
  margin-left: 90px;
}

.ed-text{
  width: 90px;
  height: 25px;
  border: 1px solid #2CA6E0;
  border-radius: 4px;
  margin-left: 15px;
}

.ed-items{
  font-size: 14pt;
  font-family: 黑体;
  color: #ffffff;
}

/* .ed-circle{
  margin-top: 13px;
  margin-left: -25px;
} */

.ed-circle-1{
  height:80px;
  padding-right:410px;
  margin-top: 10px;
}

.ed-circle-2{
  height:80px;
  padding-right: 200px;
  margin-top: -81px;
}

.ed-circle-3{
  height:80px;
  padding-left: 15px;
  margin-top: -79px;
}

.ed-circle-4{
  height:80px;
  padding-left: 232px;
  margin-top: -81px;
}

.ed-circle-5{
  height:80px;
  padding-left: 450px;
  margin-top: -79px;
}

.ed-title{
  list-style: none;
  display: flex;
  padding-left: 28px;
  font-family: 黑体;
  font-size: 14pt;
}

.ed-red{
  display: none;
  font-family: 黑体;
  font-size: 12pt;
  color: #ffffff;
}

.ed-mod{
  width: 558px;
  height: 279px;
  border: 1px solid #275E84;
  margin-left: 12px;
}

.ed-ment{
  width: 558px;
  height: 111px;
  border: 1px solid #275E84;
  margin-left: 12px;
  margin-top: 15px;
}

.ed-ments{
  float: left;
  padding-top: 20px;
  padding-left: 10px;
}

.ed-ments1{
  padding-top: 20px;
  padding-left: 15px;
}

.ed-tet{
  width: 550px;
  height: 170px;
  margin-left: 12px;
  border: 1px solid #275E84;
  font-size: 12pt;
}

.ed-state{
  width: 550px;
  height: 225px;
  margin-left: 12px;
  border: 1px solid #275E84;
  margin-top: 10px;
}

.ed-state-1{
  width: 100px;
  list-style: none;
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 12pt;
}

.ed-state-2{
  width: 100px;
  list-style: none;
  display: flex;
  padding-top: 10px;
  padding-left: 30px;
  font-size: 16pt;
}

.ed-surface{
  width: 81px;
  height: 81px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  margin-top: 5px;
  margin-left: 30px;
  font-family: 黑体;
  font-size: 12pt;
  float: left;
}

.ed-time{
  float: left;
}

.ed-item-1{
  width: 55px;
  list-style: none;
  display: flex;
  padding-top: 10px;
  padding-left: 15px;
  font-size: 12pt;
}

.ivu-chart-circle{
  position: relative;
  width: 65px;
}

.ed-status-1{
  margin-top: 20px;
  padding-right: 300px;
}

.ed-status-2{
  margin-top: -87px;
}

.ed-status-3{
  padding-left: 395px;
  margin-top: -87px;
}

.ed-status-4{
  padding-right: 197px;
  margin-top: 20px;
}

.ed-status-5{
  margin-left: 100px;
  margin-top: -85px;
}

.ed-status-6{
  margin-left: 397px;
  margin-top: -85px;
}

/* .ivu-alert.ivu-alert-with-icon {
  padding: 7px 24px 12px 27px;
  margin-left: 258px;
  width: 119px;
  margin-top: -46px;
} */
</style>
