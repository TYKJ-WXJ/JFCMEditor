<template>
  <div class="ed-ups">
    <div class="ed-titles">
      <p>UPS</p>
    </div>
    <div class="ed-infor">
      <div class="ed-infor-1">
        <div id="miniChart-a">

        </div>
        <div class="meth">
          <p>{{ miupue }}</p>
        </div>
      </div>
      <div class="ed-state">
        <img src="../assets/img/jf5.png" alt=""><p>正常接入</p>
        <img src="../assets/img/jf6.png" alt="" style="display:none">
      </div>
      <div class="ed-infor-2">
        <p>PUE={{ miupue }}</p>
      </div>
    </div>
    <div class="charts">
      <div class="ed-charts">
        <div class="ed-chart-1">
          <div id="miniChart-b">

          </div>
          <div class="meth">
            <a>{{ miuvoltage }}V</a>
          </div>
        </div>
      </div>
      <div class="ed-charts-1">
        <div class="ed-chart-2">
          <div id="miniChart-c">

          </div>
          <div class="meth">
            <a>{{ miuoutvoltage }}A</a>
          </div>
        </div>
      </div>
      <div class="ed-charts-2">
        <div class="ed-chart-3">
          <div id="miniChart-d">

          </div>
          <div class="meth">
            <a>{{ miucurrent }}KW</a>
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
  data() {
    return {
      miupue: '',
      miuvoltage: '',
      miuoutvoltage: '',
      miucurrent: ''
    }
  },
  mounted() {
    this.upsLine();
    this.upsJson();
  },
  methods: {
    upsJson() {
      // 获取数据
      server.preJSON().then((res) => {
        this.miupue = res.data.miupue;
        this.miuvoltage = res.data.miuvoltage;
        this.miuoutvoltage = res.data.miuoutvoltage;
        this.miucurrent = res.data.miucurrent;
      }).catch((err) => {
        console.log(err);
      })
    },
    upsLine() {
      let minimyCharta = echarts.init(document.getElementById('miniChart-a'));
      let minimyChartb = echarts.init(document.getElementById('miniChart-b'));
      let minimyChartc = echarts.init(document.getElementById('miniChart-c'));
      let minimyChartd = echarts.init(document.getElementById('miniChart-d'));

      minimyCharta.setOption({
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
          minimyCharta.setOption({
            series: [{data: data.upsdata}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      minimyChartb.setOption({
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
          minimyChartb.setOption({
            series: [{data: data.upsdata1}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      minimyChartc.setOption({
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
          minimyChartc.setOption({
            series: [{data: data.upsdata2}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      minimyChartd.setOption({
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
          minimyChartd.setOption({
            series: [{data: data.upsdata3}]
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
.ed-ups{
  width: 360px;
  height: 235px;
  margin: 0 auto;
  color: #ffffff;
  box-shadow: 0px 0px 20px 4px rgba(9, 74, 115, 0.4) inset;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
}

.ed-titles{
  padding-left: 10px;
  font-size: 16px;
  display: flex;
  background: linear-gradient(to right, #142657, transparent);
  margin: 0 auto;
  height: 25px;
}

a{
  color: #ffffff;
}

.ed-state{
  font-size: 12px;
  float: right;
  margin-right: 105px;
  margin-top: 8px;
}

.ed-state p{
  float: right;
  margin-left: 7px;
}

.ed-state-1{
  padding-top: -22px;
  margin: -26px;
  margin-left: 107px;
}

.ed-infor{
  font-size: 12px;
  margin-top: 20px;
  margin-left: 20px;
}

.ed-infor-1{
  width: 80px;
  height: 70px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  float: left;
  margin-left: 20px;
}

#miniChart-a{
  width: 80px;
  height: 50px;
}

.meth{
  width: 80px;
  height: 20px;
  background-color: #036EB7;
  border-bottom-left-radius: 21px;
  border-bottom-right-radius: 23px;
  margin-top: -2px;
  font-size: 12px;
}

.ed-infor-2 {
  padding-top: 35px;
  padding-right: 50px;
}

.charts {
  margin-top: 6px;
  float: left;
  margin-left: 43px;
}

.ed-charts{
  margin-top: 7px;
  float: left;
}

.ed-chart-1{
  width: 80px;
  height: 70px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  margin-top: 6px;
}

#miniChart-b{
  width: 80px;
  height: 50px;
}

.ed-chart-2{
  width: 81px;
  height: 81px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  margin-left: 32px;
  margin-top: 67px;
}

#miniChart-c{
  width: 80px;
  height: 50px;
}

.ed-charts-1{
  float: left;
  margin-left: -11px;
}

.ed-chart-2{
  width: 80px;
  height: 70px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  margin-left: 32px;
  margin-top: 13px;
}

#miniChart-d{
  width: 80px;
  height: 50px;
}

.ed-charts-2{
  float: left;
  margin-left: 20px;
}

.ed-chart-3{
  width: 80px;
  height: 70px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  margin-top: 13px;
}
</style>
