<template>
<div class="tab-vertical">
  <div class="ed-titles">
    <p>摄像头模板</p>
  </div>
  <div id="ed-host">
    <div class="ed-tab">
    <div class="ed-lab">
        <div id="host">
          <a href="#host" title="First">设</br>备</br>详</br>情</a>
            <div class="tab-content">
              <div class="ed-tet">
                <div class="ed-temp">
                  <div class="ed-img">
                    <img src="" alt="">
                  </div>
                  <div class="ed-data">
                    <div class="ed-title">
                      <a>主机A</a>
                      <img src="/src/assets/img/m4 (2).png" alt="">正常接入
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
                </div>
                <div class="ed-fan">
                  <div class="ed-fan-1">
                    <p>风扇转速</p>
                  </div>
                  <div class="ed-fan-2">
                    <img src="../assets/img/zj1.png" alt="">
                    <p>风扇A：{{ fanA }}转/秒</p>
                  </div>
                  <div class="ed-fan-3">
                    <img src="../assets/img/zj2.png" alt="">
                    <p>风扇B：{{ fanB }}转/秒</p>
                  </div>
                  <div class="ed-fan-4">
                    <img src="../assets/img/zj2.png" alt="">
                    <p>风扇C：{{ fanC }}转/秒</p>
                  </div>
                </div>
                <div class="ed-state">
                  <div class="ed-state-1">
                    <img src="../assets/img/zj5.png" alt="">
                    <img src="../assets/img/zj9.png" alt="" style="display:none">
                    <p>硬盘容量：{{ capacity }}</p>
                  </div>
                  <div class="ed-state-2">
                    <img src="../assets/img/zj6.png" alt="">
                    <img src="../assets/img/zj10.png" alt="" style="display:none">
                    <p>主板状态：{{ board }}</p>
                  </div>
                  <div class="ed-state-3">
                    <img src="../assets/img/zj7.png" alt="" style="display:none">
                    <img src="../assets/img/zj11.png" alt="">
                    <p>CPU状态：{{ CPUstate }}</p>
                  </div>
                  <div class="ed-state-4">
                    <img src="../assets/img/zj8.png" alt="" style="display:none">
                    <img src="../assets/img/zj12.png" alt="">
                    <p>风扇状态：{{ fanstate }}</p>
                  </div>
                </div>
                <div class="ed-infor">
                  <div class="ed-infor-1">
                    <p>主机反馈信息</p>
                  </div>
                  <div class="ed-infor-2">

                  </div>
                </div>
                <div class="ed-disk">
                  <div class="ed-disk-1">
                    <p>硬盘温度</p>
                  </div>
                  <div class="ed-disk-2">
                    <img src="../assets/img/zj3.png" alt="">
                    <p>硬盘A：{{ diskA }}</p>
                  </div>
                  <div class="ed-disk-3">
                    <img src="../assets/img/zj4.png" alt="">
                    <p>硬盘B：{{ diskB }}</p>
                  </div>
                  <div class="ed-disk-3">
                    <img src="../assets/img/zj4.png" alt="">
                    <p>硬盘C：{{ diskC }}</p>
                  </div>
                </div>
                <div class="ed-ture">
                  <div class="ed-ture-1">
                    <img src="../assets/img/zj13.png" alt="">
                    <p>主板温度：{{ boardTure }}</p>
                  </div>
                  <div class="ed-ture-1">
                    <img src="../assets/img/zj15.png" alt="">
                    <p>CPU温度：{{ cpuTure }}</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
        <div id="host2">
          <a href="#host2" title="Second" class="ed-class">设</br>备</br>基</br>础</br>信</br>息</a>
            <div class="tab-content">
              <div class="ed-mod">
                <table>
                  <tr>
                    <td class="ed-item">品  牌：</td>
                    <td>
                      <a>{{ sname }}</a>
                    </td>
                    <td class="ed-item">设备型号：</td>
                    <td>
                      <a>{{ smodel }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="ed-item">尺 寸：</td>
                    <td>
                      <a>{{ ssize }}</a>
                    </td>
                    <td class="ed-item">服务器类型：</td>
                    <td>
                      <a>{{ stype }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="ed-item">形  状：</td>
                    <td>
                      <a>{{ sshape }}</a>
                    </td>
                    <td class="ed-item">颜  色：</td>
                    <td>
                      <a>{{ scolor }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="ed-item">重  量：</td>
                    <td>
                      <a>{{ sweight }}</a>
                    </td>
                    <td class="ed-item">物理位置：</td>
                    <td>
                      <a>{{ slocation }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="ed-item">IP地址：</td>
                    <td>
                      <a>{{ sip }}</a>
                    </td>
                    <td class="ed-item">上架日期：</td>
                    <td>
                      <a>{{ sdate }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="ed-item">计划使用年限：</td>
                    <td>
                      <a>{{ syears }}</a>
                    </td>
                    <td class="ed-item">处理器：</td>
                    <td>
                      <a>{{ sprocessor }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="ed-item">VPN支持：</td>
                    <td>
                      <a>{{ svpn }}</a>
                    </td>
                    <td class="ed-item">设备描述：</td>
                    <td>
                      <a>{{ sbewrite }}</a>
                    </td>
                  </tr>
                </table>
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
      fanA: '',
      fanB: '',
      fanC: '',
      capacity: '',
      board: '',
      CPUstate: '',
      fanstate: '',
      diskA: '',
      diskB: '',
      diskC: '',
      boardTure: '',
      cpuTure: '',
      sname: '',
      smodel: '',
      ssize: '',
      stype: '',
      sshape: '',
      scolor: '',
      sweight: '',
      slocation: '',
      sip: '',
      sdate: '',
      syears: '',
      sprocessor: '',
      svpn: '',
      sbewrite: ''
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
        this.fanA = res.data.fanA;
        this.fanB = res.data.fanB;
        this.fanC = res.data.fanC;
        this.capacity = res.data.capacity;
        this.board = res.data.board;
        this.CPUstate = res.data.CPUstate;
        this.fanstate = res.data.fanstate;
        this.diskA = res.data.diskA;
        this.diskB = res.data.diskB;
        this.diskC = res.data.diskC;
        this.boardTure = res.data.boardTure;
        this.cpuTure = res.data.cpuTure;
        this.sname = res.data.sname;
        this.smodel = res.data.smodel;
        this.ssize = res.data.ssize;
        this.stype = res.data.stype;
        this.sshape = res.data.sshape;
        this.scolor = res.data.scolor;
        this.sweight = res.data.sweight;
        this.slocation = res.data.slocation;
        this.sip = res.data.sip;
        this.sdate = res.data.sdate;
        this.syears = res.data.syears;
        this.sprocessor = res.data.sprocessor;
        this.svpn = res.data.svpn;
        this.sbewrite = res.data.sbewrite;
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
  margin: 5px auto;
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

#ed-host{
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

.ed-item{
  display: flex;
  padding: 5px;
  padding-left: 66px;
}

.ed-temp{
  width: 280px;
  height: 180px;
  border: 1px solid #275E84;
}

.ed-fan{
  width: 280px;
  height: 215px;
  border: 1px solid #275E84;
  margin-top: 10px;
}

.ed-state{
  width: 340px;
  height: 250px;
  border: 1px solid #275E84;
  margin-left: 295px;
  margin-top: -405px;
}

.ed-infor{
  width: 340px;
  height: 145px;
  border: 1px solid #275E84;
  margin-left: 295px;
  margin-top: 10px;
}

.ed-disk{
  width: 260px;
  height: 180px;
  border: 1px solid #275E84;
  margin-left: 650px;
  margin-top: -405px;
}

.ed-ture{
  width: 260px;
  height: 215px;
  border: 1px solid #275E84;
  margin-left: 650px;
  margin-top: 10px;
}

.ed-fan-1{
  padding-top: 10px;
  padding-right: 170px;
}

.ed-fan-2,.ed-fan-3,.ed-fan-4{
  padding-top: 18px;
  width: 280px;
}

.ed-fan-2,.ed-fan-3,.ed-fan-4 img{
  padding-right: 147px;
}

.ed-fan-2 p{
  margin-top: -33px;
  color: #FF5F1E;
  margin-right: -185px;
}

.ed-fan-3 p{
  margin-top: -33px;
  margin-right: -185px;
}

.ed-fan-4 p{
  margin-top: -30px;
  margin-left: 38px;
}

.ed-state-1{
  margin-top: 10px;
  margin-right: 175px;
}

.ed-state-2{
  margin-left: 145px;
  margin-top: -113px;
}

.ed-state-3{
  margin-right: 172px;
  margin-top: 10px;
}

.ed-state-4{
  margin-top: -112px;
  margin-left: 148px;
}

.ed-infor-1{
  padding-top: 8px;
  padding-right: 211px;
}

.ed-infor-2{
  border: 1px solid #2CA6E0;
  border-radius: 4px;
  width: 290px;
  height: 90px;
  margin-left: 15px;
  margin-top: 8px;
}

.ed-disk-1{
  padding-top: 8px;
  padding-right: 160px;
}

.ed-disk-2{
  padding-top: 12px;
  width: 258px;
}

.ed-disk-2 img{
  margin-right: 125px;
}

.ed-disk-2 p{
  margin-top: -29px;
  margin-left: 70px;
  color: #FF5F1E;
}

.ed-disk-3{
  padding-top: 15px;
  width: 258px;
}

.ed-disk-3 img{
  margin-right: 125px;
}

.ed-disk-3 p{
  margin-top: -29px;
  margin-left: 70px;
}

.ed-ture-1{
  padding-top: 35px;
}

.ed-ture-1 img{
  margin-right: 140px;
}

.ed-ture-1 p{
  margin-top: -42px;
  margin-left: 95px;
  color: #FF5F1E;
  font-size: 14pt;
}

.ed-items{
  font-size: 14pt;
  font-family: 黑体;
  color: #ffffff;
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
