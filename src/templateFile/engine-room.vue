<template>
<div class="tab-vertical">
  <div class="ed-titles">
    <p>机房模板</p>
  </div>
  <div id="ed-engine">
    <div class="ed-tab">
    <div class="ed-lab">
        <div id="engine">
          <a href="#engine" title="First">设</br>备</br>详</br>情</a>
            <div class="tab-content">
              <div class="ed-tet">
                <div class="ed-switch">
                  <div class="ed-switch-1">
                    <p>配</br>电</br>信</br>息</p>
                  </div>
                  <div class="ed-switch-2">
                    <div id="myChart">
                    </div>
                    <div class="meth">
                      <p>输入电压：{{ user }}V</p>
                    </div>
                  </div>
                  <div class="ed-switch-3">
                    <p>输出电压：{{  }}V</p>
                  </div>
                  <div class="ed-switch-4">
                    <div id="myChart-1">
                    </div>
                    <div class="meth">
                      <p>PUE：{{ pue }}</p>
                    </div>
                  </div>
                 </div>
                </div>
                <div class="ed-fire">
                  <div class="ed-fire-1">
                    <p>消</br>防</br>安</br>防</p>
                  </div>
                  <div class="ed-fire-2">
                    <img src="../assets/img/jf1.png" alt="">
                    <p>七氟丙烷灭火系统</p>
                    <div class="ed-fireimg">
                      <img src="../assets/img/jf5.png" alt="">
                    </div>
                  </div>
                  <div class="ed-fire-3">
                    <img src="../assets/img/jf2.png" alt="">
                    <p>排烟机</p>
                    <div class="ed-fireimg">
                      <img src="../assets/img/jf6.png" alt="">
                    </div>
                  </div>
                  <div class="ed-fire-4">
                    <img src="../assets/img/jf3.png" alt="">
                    <p>机房门禁</p>
                    <div class="ed-fireimg">
                      <img src="../assets/img/jf5.png" alt="">
                    </div>
                  </div>
                  <div class="ed-fire-4">
                    <img src="../assets/img/jf4.png" alt="">
                    <p>入侵探测器</p>
                    <div class="ed-fireimg">
                      <img src="../assets/img/jf6.png" alt="">
                    </div>
                  </div>
                </div>
                <div class="ed-information">
                  <div class="ed-information-1">
                    <p>环</br>境</br>监</br>控</br>信</br>息</p>
                  </div>
                </div>
                <div class="ed-state">
                  <div class="ed-state-1">
                    <p>机房A</p>
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
                    <img src="../assets/img/jf7.png" alt="">
                    <p>配电系统：正常</p>
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
        <div id="engine2">
          <a href="#engine2" title="Second" class="ed-class">设</br>备</br>基</br>础</br>信</br>息</a>
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
     jname: '',
     jtype: '',
     jsize: '',
     jlocation: '',
     jshape: '',
     jcolor: '',
     jweight: '',
     jcapacity: '',
     jbewrite: '',
     user: '',
     pue: ''
    }
  },
  computed: {},
  mounted() {
    this.predataJson();
    this.methLine();
  },
  methods: {
    predataJson() {
      // 获取数据
      server.preJSON().then((res) => {
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
  methLine() {
    let myChart = echarts.init(document.getElementById('myChart'));
    let myChart1 = echarts.init(document.getElementById('myChart-1'));
    myChart.setOption({
      tooltip: {
        formatter: "{a} {b} : {c}V"
      },
      toolbox: {
        show: true
      },
      series: [
        {
          name: '电压',
          type: 'gauge',
          radius: '90%',
          min: 0,
          max: 400,
          splitNumber: 3,       // 分割段数，默认为5
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              color: [[0.2, '#228b22'],[0.8, '#FFD700'],[1, '#ff4500']],
              width: 2
            }
          },
          axisTick: {            // 坐标轴小标记
            splitNumber: 5,   // 每份split细分多少段
            length: 5,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto',
              length: 5
            }
          },
          axisLabel: {           // 坐标轴文本标签
            textStyle: {       // 其余属性默认使用全局文本样式
              color: 'auto',
              fontSize: 3
            }
          },
          splitLine: {           // 分隔线
            show: true,        // 默认显示，属性show控制显示与否
            length: 7,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle 控制线条样式
              color: 'auto'
            }
          },
          pointer: {  // 指针
            width: 1.5,
            length: 25
          },
          title: {
            show: true,
            offsetCenter: [0, '-40%'],       // x, y，单位px
            textStyle: {       // 其余属性默认使用全局文本样式
              fontWeight: 'bolder'
            }
          },
          detail: {
            textStyle: {       // 其余属性默认使用全局文本样式
              color: 'auto',
              fontSize: 12
            }
          },
          data: []
        }
      ]
    });
    $.ajax({
      url: '/static/user.json',
      async: false,
      cache: false,
      success: function(data) {
        myChart.setOption({
          series: [{data: data.data}]
        });
      },
      error: function(error) {
        console.log(error);
      }
    });

    myChart1.setOption({
      tooltip: {
        formatter: "{a} {b} : {c}V"
      },
      toolbox: {
        show: true
      },
      series: [
        {
          name: '电压',
          type: 'gauge',
          radius: '90%',
          min: 0,
          max: 400,
          splitNumber: 3,       // 分割段数，默认为5
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              color: [[0.2, '#228b22'],[0.8, '#FFD700'],[1, '#ff4500']],
              width: 2
            }
          },
          axisTick: {            // 坐标轴小标记
            splitNumber: 5,   // 每份split细分多少段
            length: 5,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto',
              length: 5
            }
          },
          axisLabel: {           // 坐标轴文本标签
            textStyle: {       // 其余属性默认使用全局文本样式
              color: 'auto',
              fontSize: 3
            }
          },
          splitLine: {           // 分隔线
            show: true,        // 默认显示，属性show控制显示与否
            length: 7,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle 控制线条样式
              color: 'auto'
            }
          },
          pointer: {  // 指针
            width: 1.5,
            length: 25
          },
          title: {
            show: true,
            offsetCenter: [0, '-40%'],       // x, y，单位px
            textStyle: {       // 其余属性默认使用全局文本样式
              fontWeight: 'bolder'
            }
          },
          detail: {
            textStyle: {       // 其余属性默认使用全局文本样式
              color: 'auto',
              fontSize: 12
            }
          },
          data: []
        }
      ]
    });
    $.ajax({
      url: '/static/user.json',
      async: false,
      cache: false,
      success: function(data) {
        myChart1.setOption({
          series: [{data: data.data}]
        });
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
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

#ed-engine{
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
  width: 250px;
  height: 143px;
  border: 1px solid #275E84;
}

.ed-switch-1{
  padding-top: 27px;
  padding-right: 200px;
}

.ed-switch-1 p{
  line-height: 24px;
  margin: 0 auto;
}

#myChart{
  width: 81px;
  height: 60px;
}

#myChart-1{
  width: 81px;
  height: 60px;
}

.ed-switch-2{
  margin-top: -120px;
  margin-left: 35px;
}

.ed-switch-2 p{
  margin-top: -45px;
  margin-left: 40px;
}

.ed-switch-3{
  padding-left: 75px;
  padding-top: 15px;
}

.ed-switch-4{
  margin-left: 35px;
  margin-top: 5px;
}

.ed-switch-4 p{
  margin-top: -45px;
  margin-left: 7px;
}

.ed-fire{
  width: 250px;
  height: 140px;
  border: 1px solid #275E84;
  margin-top: 5px;
}

.ed-fire-1{
  padding-top: 27px;
  padding-right: 200px;
}

.ed-fire-2{
  position: absolute;
  margin-top: -115px;
}

.ed-fire-2 img{
 padding-right: 94px;
}

.ed-fire-2 p{
  margin-top: -29px;
  margin-left: 72px;
}

.ed-fireimg{
  margin-left: 220px;
  margin-top: -20px;
  position: absolute;
}

.ed-fire-3{
  margin-top: -82px;
}

.ed-fire-3  img{
  padding-right: 142px;
}

.ed-fire-3 p{
  margin-right: 55px;
  margin-top: -29px;
}

.ed-fire-4{
  margin-top: 10px;
}

.ed-fire-4 img{
  padding-right: 142px;
}

.ed-fire-4 p{
  margin-right: 38px;
  margin-top: -29px;
}

.ed-information{
  width: 250px;
  height: 117px;
  border: 1px solid #275E84;
  margin-top: 5px;
}

.ed-information-1 p{
  padding-top: 3px;
  padding-right: 200px;
  line-height: 18px;
  margin: 0 auto;
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
  padding-top: 20px;
}

.ed-state-2 img{
  padding-right: 190px;
}

.ed-state-2 p{
  padding-right: 187px;
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
