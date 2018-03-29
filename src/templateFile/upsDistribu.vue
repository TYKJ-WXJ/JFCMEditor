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
  <div id="ed-tab">
    <div class="ed-tab">
    <div class="ed-lab">
        <div id="c1">
          <a href="#c1" title="First" class="ed-class">设</br>备</br>详</br>情</a>
            <div class="tab-content">
              <div class="ed-tet">
                <div class="ed-time">
                  <ul>
                    <li class="ed-item-1">
                      ▪市电进线三项电压
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
                        ▪输出电压
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
                        ▪输出电流
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
                      ▪PUE
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
                        ▪重要开关状态
                      </li>
                    </ul>
                    <div class="ed-out1">

                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div id="c2">
          <a href="#c2" title="Second">设</br>备</br>基</br>础</br>信</br>息</a>
            <div class="tab-content">
              <div class="ed-upsimg">
                <img src="../assets/img/UPS.png" alt="">
              </div>
              <div class="ed-mod">
                <ul>
                  <li class="ed-item">
                    <a>品牌名称：</a>
                    <a>爱默生</a>
                  </li>
                  <li class="ed-item">
                    <a>设备型号：</a>
                    <a>UPS NXR</a>
                  </li>
                  <li class="ed-item">
                    <a>出厂编号：</a>
                    <a>1234567</a>
                  </li>
                  <li class="ed-item">
                    <a>尺 寸：</a>
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
                    <a>设备描述:</a>
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
  </div>
</div>
</template>
<script>
import echarts from 'echarts/dist/echarts.min';
export default {
data () {
  return {
    user: '',
    user1: '',
    user2: '',
    user3: '',
    user4: '',
    user5: '',
    user6: '',
    user7: '',
    user8: '',
    user9: '',
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
  bottom: 139px;
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
  color: #ffffff;
  background-color: #0F65AE;
  padding-left: 28px;
}

.ed-tabs{
  background-color: #0B4D95;
}

#ed-tab{
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

.ed-lab > div:target > a {
    background: #0B4D95;
}


.ed-lab > div > div {
	background: #0B4D95;
	z-index: -2;
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
	display: none;
}

.ed-lab > div:target > div {
  display: block;
	z-index: 1 !important;
}

.ed-lab{
  float: left;
  height: 250px;
  width: 351px;
  text-align: center;
  position: relative;
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
  padding-left: 60px;
  margin-top: -3px;
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

.ed-mod{
  width: 558px;
  height: 155px;
  border: 1px solid #275E84;
  margin-left: 12px;
  overflow: auto;
}

::-webkit-scrollbar{
  border-radius: 10px;
  width: 12px;
}

::-webkit-scrollbar-thumb{
  background-color: #275E84;
  border-radius: 20px;
}

.ed-ment{
  width: 558px;
  height: 30px;
  margin-left: 12px;
  margin-top: 6px;
}

.ed-ment img{
  width:21px;
}

.ed-ments{
  float: left;
  padding-left: 10px;
  margin-top: -6px;
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
