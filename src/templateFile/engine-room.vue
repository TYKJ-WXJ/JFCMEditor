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
                    <p>配</br>电</br>信</br>息</p>
                  </div>
                  <div class="ed-switch-2">
                    <div id="myChart-p1">
                    </div>
                    <div class="meth">
                      <p>输入电压：{{ user }}V</p>
                    </div>
                  </div>
                  <div class="ed-switch-3">
                    <p>输出电压：{{ user }}V</p>
                  </div>
                  <div class="ed-switch-4">
                    <div id="myChart-p2">
                    </div>
                    <div class="meth">
                      <p>PUE：{{ pue }}</p>
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
                  <div class="ed-information-2">
                    <div class="ed-intet">
                      <p>温湿度探测器1</p>
                    </div>
                    <div class="ed-intet-1">
                      <p>温度：23.1</p>
                      <a>湿度：20%</a>
                    </div>
                  </div>
                  <div class="ed-information-3">
                    <div class="ed-intet-2">
                      <p>精密空调A</p>
                    </div>
                    <div class="ed-intet-1">
                      <p>温度：23.1</p>
                      <a>湿度：20%</a>
                    </div>
                  </div>
                  <div class="ed-information-4">
                    <div class="ed-intet-3">
                      <p>新风机A</p>
                    </div>
                    <div class="ed-intet-4">
                      <p>co2浓度：5%</p>
                      <p class="ed-p">H2浓度：2%</p>
                      <a>PM2.5：50ug/㎡</a>
                    </div>
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
                      <img src="../assets/img/jf11.png" alt="" style="display:none">
                      <p>配电系统：正常</p>
                    </div>
                    <div class="ed-state-3">
                      <img src="../assets/img/jf8.png" alt="">
                      <img src="../assets/img/jf12.png" alt="" style="display:none">
                      <p>环境监控系统：正常</p>
                    </div>
                    <div class="ed-state-2">
                      <img src="../assets/img/jf13.png" alt="">
                      <img src="../assets/img/jf9.png" alt="" style="display:none">
                      <p>消防系统：异常</p>
                    </div>
                    <div class="ed-state-3">
                      <img src="../assets/img/jf14.png" alt="">
                      <img src="../assets/img/jf10.png" alt="" style="display:none">
                      <p>环境监控系统：异常</p>
                    </div>
                </div>
                <div class="ed-infor">
                  <div class="ed-infor-1">
                    <p>机房反馈信息</p>
                  </div>
                  <div class="ed-infor-2">

                  </div>
                </div>
                <div class="ed-disk">
                  <div class="ed-disk-1">
                    <p>服务器</p>
                  </div>
                  <div class="ed-disk-2">
                    <div class="subs">
                      <p>机柜A</p>
                    </div>
                    <div class="subs1">
                      <img src="../assets/img/jg5.png" alt="">
                      <p>3㎡/8㎡</p>
                    </div>
                    <div class="subs2">
                      <img src="../assets/img/jg6.png" alt="">
                      <p>25℃</p>
                    </div>
                    <div class="subs3">
                      <img src="../assets/img/jg7.png" alt="">
                      <p>60kg/100kg</p>
                    </div>
                  </div>
                  <div class="ed-disk-2">
                    <div class="subs">
                      <p>机柜B</p>
                    </div>
                    <div class="subs1">
                      <img src="../assets/img/jg5.png" alt="">
                      <p>3㎡/8㎡</p>
                    </div>
                    <div class="subs2">
                      <img src="../assets/img/jg6.png" alt="">
                      <p>25℃</p>
                    </div>
                    <div class="subs3">
                      <img src="../assets/img/jg7.png" alt="">
                      <p>60kg/100kg</p>
                    </div>
                  </div>
                  <div class="ed-disk-2">
                    <div class="subs">
                      <p>机柜C</p>
                    </div>
                    <div class="subs1">
                      <img src="../assets/img/jg5.png" alt="">
                      <p>3㎡/8㎡</p>
                    </div>
                    <div class="subs2">
                      <img src="../assets/img/jg6.png" alt="">
                      <p>25℃</p>
                    </div>
                    <div class="subs3">
                      <img src="../assets/img/jg7.png" alt="">
                      <p>60kg/100kg</p>
                    </div>
                  </div>
                  <div class="ed-disk-2">
                    <div class="subs">
                      <p>机柜D</p>
                    </div>
                    <div class="subs1">
                      <img src="../assets/img/jg5.png" alt="">
                      <p>3㎡/8㎡</p>
                    </div>
                    <div class="subs2">
                      <img src="../assets/img/jg6.png" alt="">
                      <p>25℃</p>
                    </div>
                    <div class="subs3">
                      <img src="../assets/img/jg7.png" alt="">
                      <p>60kg/100kg</p>
                    </div>
                  </div>
                  <div class="ed-disk-2">
                    <div class="subs">
                      <p>机柜E</p>
                    </div>
                    <div class="subs1">
                      <img src="../assets/img/jg5.png" alt="">
                      <p>3㎡/8㎡</p>
                    </div>
                    <div class="subs2">
                      <img src="../assets/img/jg6.png" alt="">
                      <p>25℃</p>
                    </div>
                    <div class="subs3">
                      <img src="../assets/img/jg7.png" alt="">
                      <p>60kg/100kg</p>
                    </div>
                  </div>
                  <div class="ed-disk-2">
                    <div class="subs">
                      <p>机柜F</p>
                    </div>
                    <div class="subs1">
                      <img src="../assets/img/jg5.png" alt="">
                      <p>3㎡/8㎡</p>
                    </div>
                    <div class="subs2">
                      <img src="../assets/img/jg6.png" alt="">
                      <p>25℃</p>
                    </div>
                    <div class="subs3">
                      <img src="../assets/img/jg7.png" alt="">
                      <p>60kg/100kg</p>
                    </div>
                  </div>
                  <div class="ed-disk-2">
                    <div class="subs">
                      <p>机柜G</p>
                    </div>
                    <div class="subs1">
                      <img src="../assets/img/jg5.png" alt="">
                      <p>3㎡/8㎡</p>
                    </div>
                    <div class="subs2">
                      <img src="../assets/img/jg6.png" alt="">
                      <p>25℃</p>
                    </div>
                    <div class="subs3">
                      <img src="../assets/img/jg7.png" alt="">
                      <p>60kg/100kg</p>
                    </div>
                  </div>
                  <div class="ed-disk-2">
                    <div class="subs">
                      <p>机柜H</p>
                    </div>
                    <div class="subs1">
                      <img src="../assets/img/jg5.png" alt="">
                      <p>3㎡/8㎡</p>
                    </div>
                    <div class="subs2">
                      <img src="../assets/img/jg6.png" alt="">
                      <p>25℃</p>
                    </div>
                    <div class="subs3">
                      <img src="../assets/img/jg7.png" alt="">
                      <p>60kg/100kg</p>
                    </div>
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
                    <a>机房类型：</a>
                    <a>{{ jftype }}</a>
                  </li>
                  <li class="ed-item">
                    <a>施工单位：</a>
                    <a>{{ jfunit }}</a>
                  </li>
                  <li class="ed-item">
                    <a>位  置：</a>
                    <a>{{ jflocation }}</a>
                  </li>
                  <li class="ed-item">
                    <a>竣工时间：</a>
                    <a>{{ jftime }}</a>
                  </li><li class="ed-item">
                    <a>面  积：</a>
                    <a>{{ jfarea }}</a>
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
     jftype: '',
     jfunit: '',
     jflocation: '',
     jftime: '',
     jfarea: '',
     user: '',
     pue: ''
    }
  },
  computed: {},
  mounted() {
    this.comdataJson();
    this.puterLine();
  },
  methods: {
    comdataJson() {
      // 获取数据
      server.preJSON().then((res) => {
        this.jftype = res.data.jftype;
        this.jfunit = res.data.jfunit;
        this.jflocation = res.data.jflocation;
        this.jftime = res.data.jftime;
        this.jfarea = res.data.jfarea;
        this.user = res.data.user;
        this.pue = res.data.pue;
      }).catch((err) => {
        console.log(err);
      })
    },
    puterLine() {
    let myChartp1 = echarts.init(document.getElementById('myChart-p1'));
    let myChartp2 = echarts.init(document.getElementById('myChart-p2'));
    myChartp1.setOption({
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
      url: '/static/preUser.json',
      async: false,
      cache: false,
      success: function(data) {
        myChartp1.setOption({
          series: [{data: data.data}]
        });
      },
      error: function(error) {
        console.log(error);
      }
    });

    myChartp2.setOption({
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
      url: '/static/preUser.json',
      async: false,
      cache: false,
      success: function(data) {
        myChartp2.setOption({
          series: [{data: data.data1}]
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
	padding: 54px 15px;
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
	padding: 54px 15px;
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
  height: 490px;
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
  width: 260px;
  height: 143px;
  border: 1px solid #275E84;
}

#myChart-p1{
  width: 81px;
  height: 60px;
}

#myChart-p2{
  width: 81px;
  height: 60px;
}

.ed-switch-1{
  padding-top: 27px;
  padding-right: 210px;
}

.ed-switch-1 p{
  line-height: 24px;
  margin: 0 auto;
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
  width: 260px;
  height: 140px;
  border: 1px solid #275E84;
  margin-top: 5px;
}

.ed-fire-1{
  padding-top: 27px;
  padding-right: 210px;
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
  width: 260px;
  height: 158px;
  border: 1px solid #275E84;
  margin-top: 5px;
}

.ed-information-1 p{
  padding-top: 3px;
  padding-right: 210px;
  line-height: 18px;
  margin: 23px auto;
}

.ed-information-2{
  border: 1px solid #2CA6E0;
  width: 210px;
  height: 40px;
  margin-top: -150px;
  margin-left: 40px;
  position: absolute;
  font-size: 10pt;
}

.ed-intet {
  padding-right: 90px;
}

.ed-intet-1 {
  margin-left: 77px;
  margin-top: -12px;
  line-height: 14px;
}

.ed-intet-1 a{
  padding-right: 7px;
}

.ed-information-3{
  border: 1px solid #2CA6E0;
  width: 210px;
  height: 40px;
  margin-top: -105px;
  margin-left: 40px;
  position: relative;
  font-size: 10pt;
}

.ed-intet-2{
  padding-right: 115px;
}

.ed-information-4{
  border: 1px solid #2CA6E0;
  width: 210px;
  height: 53px;
  margin-top: 5px;
  margin-left: 40px;
  font-size: 10pt;
  position: relative;
}

.ed-intet-3{
  padding-right: 126px;
}

.ed-intet-4{
  margin-left: 85px;
  margin-top: -12px;
  line-height: 14px;
}

.ed-p {
  padding-right: 6px;
}

.ed-intet-4 a{
  padding-left: 19px;
}

.ed-error p{
  margin-top: -34px;
  padding-left: 45px;
  color: #FF5F1E;
}

.ed-state{
  width: 382px;
  height: 310px;
  border: 1px solid #275E84;
  margin-left: 272px;
  margin-top: -451px;
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

.ed-state-3 {
  margin-top: -107px;
  margin-left: 160px;
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
  width: 382px;
  height: 131px;
  border: 1px solid #275E84;
  margin-left: 272px;
  margin-top: 10px;
}

.ed-disk{
  width: 245px;
  height: 451px;
  border: 1px solid #275E84;
  margin-left: 668px;
  margin-top: -451px;
}

.ed-infor-1{
  padding-top: 2px;
  padding-right: 256px;
}

.ed-infor-2{
  border: 1px solid #2CA6E0;
  border-radius: 4px;
  width: 341px;
  height: 83px;
  margin-left: 20px;
  margin-top: 5px;
}

.ed-disk-1{
  padding-top: 10px;
  padding-right: 173px;
}

.ed-disk-2{
  border: 1px solid #2CA6E0;
  width: 225px;
  height: 48px;
  font-size: 10pt;
  position: relative;
  margin-left: 10px;
  margin-top: 3px;
}

.subs {
  padding-right: 155px;
  padding-top: 12px;
}

.subs1 {
  margin-top: -26px;
  padding-right: 70px;
}

.subs1 p{
  margin-top: -6px;
}

.subs2 {
  margin-top: -39px;
  padding-left: 35px;
}

.subs2 p{
  margin-top: -6px;
}

.subs3 {
  margin-top: -41px;
  padding-left: 143px;
}

.subs3 p{
  margin-top: -6px;
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
  padding-top: 25px;
  padding-left: 115px;
  font-size: 12pt;
}

.ed-ment{
  width: 885px;
  height: 151px;
  border: 1px solid #275E84;
  margin-left: 12px;
  margin-top: 15px;
}

.ed-ments{
  float: left;
  padding-top: 45px;
  padding-left: 75px;
}

.ed-ments1{
  padding-top: 48px;
  padding-left: 15px;
}

table{
  padding-top: 10px;
}

</style>
