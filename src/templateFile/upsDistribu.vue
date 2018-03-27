<template>
  <div class="tab-vertical">
    <div class="ed-titles">
      <p>UPS配电柜</p>
    </div>
    <div class="tab-content">
      <div class="ed-img">
        <img src="" alt="">
      </div>
      <div class="ed-items">
        <ul>
          <li class="ed-title">
            <a>UPS配电柜：</a>
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
    <div class="ed-tab">
      <div class="ed-lab">
        <input type="radio" id="r-1" name="tab" checked class="tab">
        <label for="r-1">设备详情</label>
        <div class="mod">
          <div class="ed-tet">
           <div class="ed-time">
            <ul>
              <li class="ed-item-1">
                ▪输入电压
              </li>
            </ul>
            <div class="ed-surface">
              <div class="mycharts">
                <!-- <img src="/src/assets/img/dial.png" alt=""> -->
              </div>
              <div class="meth">
                <p></p>
              </div>
            </div>
            <div class="ed-surface">
              <div id="mycharts">

              </div>
              <div class="meth">
                <p></p>
              </div>
            </div>
            <div class="ed-surface">
              <div id="mycharts">

              </div>
              <div class="meth">
                <p></p>
              </div>
            </div>
          </div>
          <div class="ed-time">
            <ul>
              <li class="ed-item-1">
                ▪输出电压
              </li>
            </ul>
            <div class="ed-surface">
              <div id="mycharts">

              </div>
              <div class="meth">
                <p></p>
              </div>
            </div>
            <div class="ed-surface">
              <div id="mycharts">

              </div>
              <div class="meth">
                <p></p>
              </div>
            </div>
            <div class="ed-surface">
              <div id="mycharts">

              </div>
              <div class="meth">
                <p></p>
              </div>
            </div>
          </div>
          <div class="ed-time">
            <ul>
              <li class="ed-item-1">
                ▪输入电流
              </li>
            </ul>
            <div class="ed-surface">
              <div id="mycharts">

              </div>
              <div class="meth">
                <p></p>
              </div>
            </div>
            <div class="ed-surface">
              <div id="mycharts">

              </div>
              <div class="meth">
                <p></p>
              </div>
            </div>
            <div class="ed-surface">
              <div id="mycharts">

              </div>
              <div class="meth">
                <p></p>
              </div>
            </div>
        </div>
      </div>
        <div class="ed-tet2">
          <ul>
            <li class="ed-item-1">
              ▪PUE
            </li>
          </ul>
          <div class="ed-out">
            <div id="mycharts">

              </div>
            <div class="meth">
                <p></p>
              </div>
          </div>
          <div class="ed-pue">
            <p>PUE=</p>
          </div>
        </div>
        <div class="ed-tet3">
          <ul>
            <li class="ed-item-1">
              ▪主机状态
            </li>
          </ul>
          <div class="ed-out1">

          </div>
        </div>
      </div>
    </div>
      <div class="ed-labs">
        <input type="radio" id="r-2" name="tab" class="tab">
        <label for="r-2">设备基础信息</label>
         <div class="mod-2">
          <div class="ed-mod">
          <ul>
            <li class="ed-item">
              <a>品牌名称：</a>
              <a>爱默生</a>
            </li>
            <li class="ed-item">
              <a>设备型号：</a>
              <a>1234567</a>
            </li>
            <li class="ed-item">
              <a>出厂编号：</a>
              <a>{{  }}</a>
            </li>
            <li class="ed-item">
              <a>尺  寸：</a>
              <a>{{  }}</a>
            </li>
            <li class="ed-item">
              <a>颜  色：</a>
              <a>{{  }}</a>
            </li>
            <li class="ed-item">
              <a>重  量：</a>
              <a>{{  }}</a>
            </li>
            <li class="ed-item">
              <a>设备描述：</a>
              <a>{{  }}</a>
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
</template>
<script>
export default {
  mounted(){
    this.drawLine()
  },
 methods: {
  drawLine() {
    let mycharts = this.$echarts.init(document.getElementById('mycharts'));
    option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      series: [
        {
          name: '电压',
          type: 'gauge',
          // 仪表盘数据
          detail: {formatter:'{value}%'},
          // 仪表盘轴线样式
          axisLine: {
            lineStyle: {
              width: 20
            }
          },
          // 分割线样式
          splitLine: {
            length:20
          },
          data: [{value: 50}]
        }
      ]
    };
    mycharts.setOption(option);
  }
}
}
</script>
<style scoped>
.tab-vertical {
  margin: 0 auto;
  display: block;
  height: 650px;
  background-color: #036EB8;
  width: 1060px;
}

.tab-vertical a{
  color: #ffffff;
}

.tab-content{
  float: left;
  background-color: #0F65AE;
  margin-left: 30px;
  width: 263px;
  height: 442px;
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
  padding-left: 10px;
}

.ed-img img{
  width: 100%;
  height: 100%;
}

 .ed-data{
  margin-left: 30px;
  float: left;
  position: fixed;
  bottom: 100px;
  border-radius: 4px;
  width: 263px;
  height: 36px;
}

.ed-select select{
  border: 1px solid #2DA7E0;
  background-color: #604C3F;
  padding-right: 50px;
  color: #ffffff;
  height: 25px;
  border-radius: 4px;
}

.ed-select{
  display: flex;
  padding: 5px;
  font-size: 12pt;
  font-family: 黑体;
  color: #ffffff;
  background-color: #0F65AE;
  padding-left: 28px;
}

.ed-tabs{
  background-color: #0B4D95;
}

.ed-tab{
  width: 700px;
  height: 500px;
  position: relative;
  overflow: hidden;
  background-color: #0B4D95;
  margin-top: 5px;
  margin-left: 340px;
  color: #ffffff;
  border-radius: 4px;
}

input[type='radio']{
  display: none;
}

input[type='radio']:checked~div[class^='mod']{
  display: block;
}

input[type='radio']:checked~label{
  background-color:#004075;
}

[class^='mod']{
  position: absolute;
  top: 40px;
  left: 20px;
  display: none;
}

.tab+label{
  top: 0;
  float: left;
  writing-mode: tb-rl;
  text-align: center;
  color: #ffffff;
  flex-grow: 3;
  transition: 0.3s background-color ease, 0.3s box-shadow ease;
  font-family: 黑体;
  font-size: 14pt;
}

.tab:checked + label[data-v-34e1e036] {
    background-color: #036EB8;
    cursor: default;
}

.ed-lab{
  float: left;
  height: 250px;
  width: 351px;
  text-align: center;
  padding-top: 10px;
}

.ed-labs{
  float: left;
  height: 250px;
  width: 350px;
}

.mod{
  width: 618px;
  height: 440px;
  margin-left: 15px;
}

.ed-item{
  list-style: none;
  display: flex;
  padding-top: 10px;
  padding-left: 50px;
}
.ed-title{
  list-style: none;
  display: flex;
  padding-top: 50px;
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

.mod-2{
  width: 558px;
  height: 440px;
  font-size: 12pt;
  font-family: 黑体;
  color: #ffffff;
}

.ed-mod{
  width: 558px;
  height: 279px;
  border: 1px solid #275E84;
  margin-left: 60px;
}

.mod1{
  padding-top: 279px;
}

.ed-ment{
  width: 558px;
  height: 111px;
  border: 1px solid #275E84;
  margin-left: 60px;
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
  margin-left: 25px;
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

#mycharts{
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
  float: right;
  margin-top: -390px;
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
  float: right;
  margin-top: -170px;
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
