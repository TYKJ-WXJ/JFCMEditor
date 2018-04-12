<template>
  <div class="ed-supply">
    <div class="ed-titles">
      <p>配电柜</p>
    </div>
    <div class="ed-infor">
      <div class="ed-infor-1">
        <div id="miniChart">

        </div>
        <div class="meth">
          <p>{{ mipue }}</p>
        </div>
      </div>
      <div class="ed-state">
          <img src="../assets/img/jf5.png" alt=""><span>正常接入</span>
          <img src="../assets/img/jf6.png" alt="" style="display:none">
        </div>
      <div class="ed-infor-2">
        <p>PUE={{ mipue }}</p>
      </div>
    </div>
    <div class="charts">
      <div class="ed-charts">
        <div class="ed-chart-1">
          <div id="miniChart-1">

          </div>
          <div class="meth">
            <a>{{ mivoltage }}V</a>
          </div>
        </div>
      </div>
      <div class="ed-charts-1">
        <div class="ed-chart-2">
          <div id="miniChart-2">

          </div>
          <div class="meth">
            <a>{{ mioutvoltage }}A</a>
          </div>
        </div>
      </div>
      <div class="ed-charts-2">
        <div class="ed-chart-3">
          <div id="miniChart-3">

          </div>
          <div class="meth">
            <a>{{ micurrent }}KW</a>
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
  data () {
    return {
      mipue: '',
      mivoltage: '',
      mioutvoltage: '',
      micurrent: ''
    }
  },
  mounted() {
    this.supplyLine();
    this.supplyJson();
  },
  methods: {
    supplyJson() {
      // 获取数据
      server.preJSON().then((res) => {
        this.mipue = res.data.mipue;
        this.mivoltage = res.data.mivoltage;
        this.mioutvoltage = res.data.mioutvoltage;
        this.micurrent = res.data.micurrent;
      }).catch((err) => {
        console.log(err);
      })
    },
    supplyLine() {
      let minimyChart = echarts.init(document.getElementById('miniChart'));
      let minimyChart1 = echarts.init(document.getElementById('miniChart-1'));
      let minimyChart2 = echarts.init(document.getElementById('miniChart-2'));
      let minimyChart3 = echarts.init(document.getElementById('miniChart-3'));

      minimyChart.setOption({
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
            max: 4,
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
          minimyChart.setOption({
            series: [{data: data.supplydata}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      minimyChart1.setOption({
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
          minimyChart1.setOption({
            series: [{data: data.supplydata1}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      minimyChart2.setOption({
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
        url: "/static/preUser.json",
        async: false,
        cache: false,
        success: function(data) {
          minimyChart2.setOption({
            series: [{data: data.supplydata2}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      minimyChart3.setOption({
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
          minimyChart3.setOption({
            series: [{data: data.supplydata3}]
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
.ed-supply{
  width: 340px;
  height: 170px;
  /* background-color: #29ABE2; */
  /* opacity: 0.2; */
  margin: 0 auto;
  color: #ffffff;
  font-family: 黑体;
}

.ed-titles{
  padding-left: 10px;
  font-size: 14pt;
  display: flex;
  background: linear-gradient(to right, #142657, transparent);
  margin: 0 auto;
  height: 25px;
}

a{
  color: #ffffff;
}

.ed-state{
  margin-top: 8px;
  font-size: 12pt;
  float: right;
  margin-right: 105px;
}

.ed-infor{
  font-size: 12pt;
  margin-top: 1px;
}

.ed-infor-1{
  width: 80px;
  height: 70px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  float: left;
  margin-left: 27px;
}

#miniChart{
  width: 80px;
  height: 50px;
}

.meth{
  width: 80px;
  height: 21px;
  background-color: #036EB7;
  border-bottom-left-radius: 21px;
  border-bottom-right-radius: 23px;
  margin-top: -2px;
  font-size: 12pt;
}

.ed-infor-2 {
  padding-top: 35px;
  padding-right: 50px;
}

.ed-charts{
  font-size: 14pt;
  margin-top: 7px;
  float: left;
  margin-left: -79px;
}

.ed-chart-1{
  width: 80px;
  height: 70px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  margin-top: 6px;
}

#miniChart-1{
  width: 80px;
  height: 50px;
}

#miniChart-2{
  width: 80px;
  height: 50px;
}

.ed-charts-1{
  font-size: 14pt;
  float: left;
  margin-left: -11px;
}

.ed-charts-1 P{
  padding-top: 10px;
}

.ed-chart-2{
  width: 80px;
  height: 70px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  margin-top: 13px;
  margin-left: 32px;
}

#miniChart-3{
  width: 80px;
  height: 50px;
}

.ed-charts-2{
  font-size: 14pt;
  float: left;
  margin-left: 20px;
}

.ed-charts-2 P{
  padding-top: 10px;
}

.ed-chart-3{
  width: 80px;
  height: 70px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  margin-top: 13px;
}
</style>
