<template>
<div class="tab-vertical">
  <div class="ed-titles">
    <p>机房配电柜</p>
  </div>
  <div class="tab-content">
    <div class="ed-img">
      <img src="" alt="">
    </div>
    <div class="ed-items">
      <ul>
        <li class="ed-title">
          <a>市电配电柜</a>
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
  <div id="ed-distribution">
    <div class="ed-tab">
    <div class="ed-lab">
        <div id="distribution">
          <a href="#distribution" title="First">设</br>备</br>详</br>情</a>
            <div class="tab-content">
              <div class="ed-tet">
                <div class="ed-time">
                  <ul>
                    <li class="ed-item-1">
                      •市电进线三项电压
                    </li>
                  </ul>
                  <div class="ed-surface">
                    <div id="myChart">
                    </div>
                    <div class="meth">
                      <p>{{ user }}V</p>
                    </div>
                  </div>
                  <div class="ed-surface">
                    <div id="myChart-1">

                    </div>
                    <div class="meth">
                      <p>{{ user1 }}A</p>
                    </div>
                  </div>
                  <div class="ed-surface">
                    <div id="myChart-2">

                    </div>
                    <div class="meth">
                    <p>{{ user2 }}KW</p>
                    </div>
                  </div>
                  <div class="ed-time">
                    <ul>
                      <li class="ed-item-1">
                        •输出电压
                      </li>
                    </ul>
                    <div class="ed-surface">
                      <div id="myChart-3">

                      </div>
                      <div class="meth">
                        <p>{{ user3 }}V</p>
                      </div>
                    </div>
                    <div class="ed-surface">
                      <div id="myChart-4">

                      </div>
                      <div class="meth">
                        <p>{{ user4 }}A</p>
                      </div>
                    </div>
                    <div class="ed-surface">
                      <div id="myChart-5">

                      </div>
                      <div class="meth">
                        <p>{{ user5 }}KW</p>
                      </div>
                    </div>
                  </div>
                  <div class="ed-time">
                    <ul>
                      <li class="ed-item-1">
                        •输出电流
                      </li>
                    </ul>
                    <div class="ed-surface">
                      <div id="myChart-6">

                      </div>
                      <div class="meth">
                        <p>{{ user6 }}V</p>
                      </div>
                    </div>
                    <div class="ed-surface">
                      <div id="myChart-7">

                      </div>
                      <div class="meth">
                        <p>{{ user7 }}A</p>
                      </div>
                    </div>
                    <div class="ed-surface">
                      <div id="myChart-8">

                      </div>
                      <div class="meth">
                        <p>{{ user8 }}KW</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ed-tet2">
                  <ul>
                    <li class="ed-item-1">
                      •PUE
                    </li>
                  </ul>
                  <div class="ed-out">
                    <div id="myChart-9">

                      </div>
                    <div class="meth">
                        <p>{{ user9 }}</p>
                      </div>
                  </div>
                  <div class="ed-pue">
                      <p>PUE={{ user9 }}</p>
                    </div>
                  </div>
                  <div class="ed-tet3">
                    <ul>
                      <li class="ed-item-1">
                        •重要开关状态
                      </li>
                    </ul>
                    <div class="ed-out1">

                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div id="distribution2">
          <a href="#distribution2" title="Second" class="ed-class">设</br>备</br>基</br>础</br>信</br>息</a>
            <div class="tab-content">
              <div class="ed-mod">
                <ul>
                  <li class="ed-item">
                    <a>设备型号：</a>
                    <a>{{ name }}</a>
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
      name: '',
      number: '',
      size: '',
      color: '',
      weight: '',
      bewrite: '',
      user: '',
      user1: '',
      user2: '',
      user3: '',
      user4: '',
      user5: '',
      user6: '',
      user7: '',
      user8: '',
      user9: ''
    }
  },
  computed: {},
  mounted() {
    this.dataJson();
    this.drawLine();
  },
  methods: {
    dataJson() {
      // 获取数据
      server.userJSON().then((res) => {
        this.user = res.data.user;
        this.user1 = res.data.user1;
        this.user2 = res.data.user2;
        this.user3 = res.data.user3;
        this.user4 = res.data.user4;
        this.user5 = res.data.user5;
        this.user6 = res.data.user6;
        this.user7 = res.data.user7;
        this.user8 = res.data.user8;
        this.user9 = res.data.user9;
        this.name = res.data.name;
        this.number = res.data.number;
        this.size = res.data.size;
        this.color = res.data.color;
        this.weight = res.data.weight;
        this.bewrite = res.data.bewrite;
      }).catch((err) => {
        console.log(err);
      })
    },

    drawLine() {
      let myChart = echarts.init(document.getElementById('myChart'));
      let myChart1 = echarts.init(document.getElementById('myChart-1'));
      let myChart2 = echarts.init(document.getElementById('myChart-2'));
      let myChart3 = echarts.init(document.getElementById('myChart-3'));
      let myChart4 = echarts.init(document.getElementById('myChart-4'));
      let myChart5 = echarts.init(document.getElementById('myChart-5'));
      let myChart6 = echarts.init(document.getElementById('myChart-6'));
      let myChart7 = echarts.init(document.getElementById('myChart-7'));
      let myChart8 = echarts.init(document.getElementById('myChart-8'));
      let myChart9 = echarts.init(document.getElementById('myChart-9'));
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
            series: [{data: data.data1}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      myChart2.setOption({
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
        url: "/static/user.json",
        async: false,
        cache: false,
        success: function(data) {
          myChart2.setOption({
            series: [{data: data.data2}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      myChart3.setOption({
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
          myChart3.setOption({
            series: [{data: data.data3}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      myChart4.setOption({
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
          myChart4.setOption({
            series: [{data: data.data4}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      myChart5.setOption({
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
          myChart5.setOption({
            series: [{data: data.data5}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      myChart6.setOption({
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
          myChart6.setOption({
            series: [{data: data.data6}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      myChart7.setOption({
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
          myChart7.setOption ({
            series: [{data: data.data7}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      myChart8.setOption({
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
          myChart8.setOption ({
            series: [{data: data.data8}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });

      myChart9.setOption({
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
        url: '/static/user.json',
        async: false,
        cache: false,
        success: function(data) {
          myChart9.setOption ({
            series: [{data: data.data9}]
          });
        },
        error: function(error) {
          console.log(error);
        }
      });
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

#ed-distribution{
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
  font-size: 12pt;
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

.ed-item{
  list-style: none;
  display: flex;
  padding-top: 18px;
  padding-left: 50px;
}

.ed-items{
  font-size: 14pt;
  font-family: 黑体;
  color: #ffffff;
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

.ed-title img{
  padding-top: 6px;
  height: 22px;
  margin-left: 24px;
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
  width: 371px;
  height: 390px;
  margin-left: 12px;
  border: 1px solid #275E84;
  margin-top: 5px;
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

.meth{
  width: 81px;
  height: 21px;
  bottom: 0;
  background-color: #036EB7;
  border-bottom-left-radius: 21px;
  border-bottom-right-radius: 23px;
  margin-top: -2px;
}

#myChart{
  width: 81px;
  height: 60px;
}

#myChart-1{
  width: 81px;
  height: 60px;
}

#myChart-2{
  width: 81px;
  height: 60px;
}
#myChart-3{
  width: 81px;
  height: 60px;
}
#myChart-4{
  width: 81px;
  height: 60px;
}
#myChart-5{
  width: 81px;
  height: 60px;
}
#myChart-6{
  width: 81px;
  height: 60px;
}
#myChart-7{
  width: 81px;
  height: 60px;
}
#myChart-8{
  width: 81px;
  height: 60px;
}
#myChart-9{
  width: 81px;
  height: 60px;
}

.ed-time{
  float: left;
}

.ed-item-1{
  list-style: none;
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
  font-family: 黑体;
  font-size: 12pt;
}

.ed-tet2{
  width: 169px;
  height: 210px;
  border: 1px solid #275E84;
  margin-left: 387px;
}

.ed-out{
  width: 81px;
  height: 81px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  margin-top: 15px;
  margin-left: 40px;
  font-family: 黑体;
  font-size: 12pt;
}

.ed-pue{
  margin-top: 30px;
}

.ed-tet3{
  width: 169px;
  height: 170px;
  border: 1px solid #275E84;
  margin-left: 387px;
  margin-top: 10px;
}

.ed-out1{
  width: 133px;
  height: 113px;
  border: 1px solid #2CA6E0;
  border-radius: 20px;
  margin-top: 9px;
  margin-left: 18px;
  font-family: 黑体;
  font-size: 12pt;
}

</style>
