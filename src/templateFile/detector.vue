<template>
  <div class="container">
    <div class="ed-title">
      <input type="radio" id="tab1" name="tabGroup1" class="tab">
      <label for="tab1">设备信息</label>
      <input type="radio" id="tab2" name="tabGroup1" class="tab">
      <label for="tab2">设备基础信息</label>
      <div class="tab-content">
        <div class="ed-img">
          <img src="/src/assets/img/sbxx.jpg" alt="">
        </div>
        <div class="ed-apply">
        <div class="ed-time">
          <p>设备实时信息</p>
        </div>
        <div class="ed-items">
          <ul>
            <li class="ed-item">
              <a>设备名称：</a>
              <a>{{ name }}</a>
            </li>
            <li class="ed-item">
              <a>报警状态指示灯：</a>
              <img src="/src/assets/img/xdp.png" alt="">
              <img src="/src/assets/img/xdp.png" alt="" class="ed-yellow">
            </li>
            <li class="ed-item">
              <a>撤防布防：</a>
              <input type="radio" value="1" name="remove" checked>撤防
              <input type="radio" value="2" name="remove">布防
            </li>
          </ul>
        </div>
       </div>
       <div>
         <li class="ed-select">
              <a>添加到实时数据：</a>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </li>
       </div>
      </div>
      <div class="tab-content">
        <div class="ed-applys">
          <div class="ed-titles">
            <p>设备基础信息</p>
          </div>
          <div class="ed-items">
            <table>
              <tr>
                <td class="ed-mess">设备品牌：</td>
                <td><a>{{ brand }}</a></td>
                <td class="ed-mess">设备型号：</td>
                <td><a>{{ modell }}</a></td>
              </tr>
              <tr>
                <td class="ed-mess">类型：</td>
                <td><a>微波入侵探测器</a></td>
                <td class="ed-mess">通讯方式：</td>
                <td><a>DS-1T228N</a></td>
              </tr>
              <tr>
                <td class="ed-mess">工作电压：</td>
                <td><a>DC9-16VV</a></td>
                <td class="ed-mess">探头输入方式：</td>
                <td><a>多普勒效应</a></td>
              </tr>
              <tr>
                <td class="ed-mess">环境温度：</td>
                <td><a>-10℃</a></td>
                <td class="ed-mess">环境湿度：</td>
                <td><a>＜95%%</a></td>
              </tr>
              <tr>
                <td class="ed-mess">外形尺寸：</td>
                <td><a>90mm*50mm*33mmmm</a></td>
                <td class="ed-mess">重量：</td>
                <td><a>1KG</a></td>
              </tr>
              <tr>
                <td class="ed-mess">检测范围：</td>
                <td><a>直径6米(高度3.6米)</a></td>
                <td class="ed-mess">探测角度：</td>
                <td><a>360°</a></td>
              </tr>
              <tr>
                <td class="ed-mess">设备负责人：</td>
                <td><a>XXXX</a></td>
                <td class="ed-mess">设备负责人联系人：</td>
                <td><a>XXXXXX</a></td>
              </tr>
            </table>
         </div>
      </div>
     </div>
    </div>
  </div>
</template>
<script>
// 引入工具函数
import server from '@/services/server'

export default {
  name: 'ed-title',
  data () {
    return {
      name: '',
      brand: '',
      modell: ''
    }
  },
  computed: {},
  mounted() {
    this.nameJson();
    /* this.getItem(); */
  },
  methods: {
    nameJson() {
      // 获取数据
      server.dataJSON().then((res) => {
        this.name = res.data.name;
        this.brand = res.data.brand;
        /* var start1 = this.lists[0].mpdel; */
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.container {
    margin: 0 auto;
    display: block;
    max-width: 800px;
}

.container a{
  font-family: 黑体;
  color: #ffffff
}

.ed-title{
    text-align: center;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #036EB8;
    margin: 40px 0;
}

.tab-content {
    padding: 10px 25px 30px;
    background-color: transparent;
    position: absolute;
    width: 100%;
    z-index: -1;
    opacity: 0;
    left: 0;
    transform: translateY(-3px);
    border-radius: 6px;
}

.ed-apply{
    background-color: #3573B4;
    padding-bottom: 15px;
    margin: 0 0 20px;
    opacity: 10%;
}

.ed-applys{
    background-color: #3573B4;
    padding-bottom: 15px;
    margin: 0 0 20px;
    opacity: 10%;
}

.ed-titles{
    color: #ffffff;
    padding-left: 50px;
    font-size: 12pt;
    font-family: 黑体;
    display: flex;
    background-color: #2090D0;
    margin: 30px 0;
    height: 40px;
}

.ed-titles p{
  padding-top: 7px;
}

.ed-time{
    color: #ffffff;
    padding-left: 50px;
    font-size: 12pt;
    font-family: 黑体;
    display: flex;
    background-color: #2090D0;
}

/* 首先让内容部分都不可见，不占据文档流。 */
.tab:checked:nth-of-type(1) ~ .tab-content:nth-of-type(1) {
    opacity: 1;
    /* transition: 0.5s opacity ease-in, 0.8s transform ease; */
    position: relative;
    top: 20px;
    z-index: 100;
    transform: translateY(0px);
    text-shadow: 0 0 0;
    height: 200%;
}

.tab:checked:nth-of-type(2) ~ .tab-content:nth-of-type(2) {
    opacity: 1;
    position: relative;
    top: 0;
    z-index: 100;
    transform: translateY(0px);
    text-shadow: 0 0 0;
}

.tab{
    display: none;
}

.tab + label {
    cursor: pointer;
    padding: 13px;
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 15pt;
    font-family: 黑体;
    flex-grow: 3;
    background-color: #1A5DAB;
    user-select: none;
    transition: 0.3s background-color ease, 0.3s box-shadow ease;
    height: 50px;
    box-sizing: border-box;
}

.tab:checked + label {
    background-color: #036EB8;
    cursor: default;
}

.ed-item{
    display: flex;
    padding: 10px;
    font-size: 11pt;
    font-family: 黑体;
    color: #ffffff;
}

.ed-item img{
  width: 20px;
  height: 20px;
  background-color: green;
}

.ed-item .ed-yellow{
  background-color: yellow;
  display: none;
}

.ed-items table{
    font-size: 11pt;
    font-family: 黑体;
    color: #ffffff;
}

.ed-mess{
    display: flex;
    padding: 10px;
    font-size: 11pt;
    font-family: 黑体;
    color: #ffffff;
    padding-left: 50px;
}

.ed-img{
  float: left;
  width: 461px;
  height: 429px;
}

.ed-img img{
  width: 100%;
  height: 100%;
}

.ed-apply{
  margin-left: 470px;
  height: 430px;
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
    padding: 10px;
    font-size: 11pt;
    font-family: 黑体;
    color: #ffffff;
    float: right;
}

</style>


