<template>
<div>
  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
    <div v-show="show1" class="whole">
      <img class="img-f" src="../../src/assets/img/lunbo.jpg" style="width: 100%;height: 100%;">
    </div>
  </transition>

  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
    <div v-show="show2" class="whole">
      <img id="img2" class="img-f" @click="SwiTch5(2)" src="../../src/assets/img/lunbo.jpg" style="width: 49%;height: 49%;">
      <img id="img3" class="img-f" @click="SwiTch5(3)" src="../../src/assets/img/lunbo.jpg" style="width: 49%;height: 49%;">
      <img id="img4" class="img-f" @click="SwiTch5(4)" src="../../src/assets/img/lunbo.jpg" style="width: 49%;height: 49%;">
      <img id="img5" class="img-f" @click="SwiTch5(5)" src="../../src/assets/img/lunbo.jpg" style="width: 49%;height: 49%;">
    </div>
  </transition>

  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
    <div v-show="show3" class="whole">
      <img id="img6" class="img-f" @click="SwiTch5(6)" src="../../src/assets/img/lunbo.jpg" style="width: 33%;height: 33%;">
      <img id="img7" class="img-f" @click="SwiTch5(7)" src="../../src/assets/img/lunbo.jpg" style="width: 33%;height: 33%;">
      <img id="img8" class="img-f" @click="SwiTch5(8)" src="../../src/assets/img/lunbo.jpg" style="width: 33%;height: 33%;">
      <img id="img9" class="img-f" @click="SwiTch5(9)" src="../../src/assets/img/lunbo.jpg" style="width: 33%;height: 33%;">
      <img id="img10" class="img-f" @click="SwiTch5(10)" src="../../src/assets/img/lunbo.jpg" style="width: 33%;height: 33%;">
      <img id="img11" class="img-f" @click="SwiTch5(11)" src="../../src/assets/img/lunbo.jpg" style="width: 33%;height: 33%;">
      <img id="img12" class="img-f" @click="SwiTch5(12)" src="../../src/assets/img/lunbo.jpg" style="width: 33%;height: 33%;">
      <img id="img13" class="img-f" @click="SwiTch5(13)" src="../../src/assets/img/lunbo.jpg" style="width: 33%;height: 33%;">
      <img id="img14" class="img-f" @click="SwiTch5(14)" src="../../src/assets/img/lunbo.jpg" style="width: 33%;height: 33%;">
    </div>
  </transition>

  <!--控制按钮-->
  <div class="btn">
    <button id="btn0" @click="SwiTch1" class="btn-interval"> 单页面</button>
    <button id="btn1" @click="SwiTch2" class="btn-interval"> 四宫格</button>
    <button id="btn2" @click="SwiTch3" class="btn-interval"> 九宫格</button>
    <button @click="SwiTch4" class="btn-interval"> 轮播键</button>
  </div>
</div>
</template>

<script>
  import $ from 'jquery'
  var jieshu = null;
  export default{
    data() {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false
      }
    },
    methods: {
      SwiTch1: function () {
        this.show1 = true;
        this.show2 = false;
        this.show3 = false;
      },
      SwiTch2: function () {
        this.show1 = false;
        this.show2 = true;
        this.show3 = false;
      },
      SwiTch3: function () {
        this.show1 = false;
        this.show2 = false;
        this.show3 = true;
      },
      SwiTch4: function () {
        this.show4 = !this.show4;
        console.log(this.show4);
        let index = 0;
        // 3秒轮播一次
        if (this.show4 === true) {
          jieshu = setInterval(function () {
            let oDiv = document.getElementById('btn' + index + '');   // 获取元素div
            index = (index === 2) ? 0 : index + 1;
            oDiv.click();  // 执行点击事件
          }, 3000);
        }
        if (this.show4 === false) {
          console.log(jieshu);
          clearInterval(jieshu);
        }
      },
      SwiTch5: function (id) {
        if (this.show5 === false) {
          document.getElementById('img' + id + '').style.width = '100%';
          document.getElementById('img' + id + '').style.height = '100%';
          $('.img-f').hide();
          $('#img' + id + '').show();
          this.show5 = !this.show5;
        } else if (this.show5 === true) {
          if (id < 6) {
            document.getElementById('img' + id + '').style.width = '49%';
            document.getElementById('img' + id + '').style.height = '49%';
            $('.img-f').show()
            this.show5 = !this.show5;
          } else if (id > 5) {
            document.getElementById('img' + id + '').style.width = '33%';
            document.getElementById('img' + id + '').style.height = '33%';
            $('.img-f').show();
            this.show5 = !this.show5;
          }
        }
      }
    }
  }
</script>

<style>
  .whole{
    width: 1000px;
    height: 700px;
    position: fixed;
    left: 250px;
  }
  .btn{
    width: 60px;
    height: 50px;
    position: fixed;
    right: 40px;
    bottom: 70px;
  }
  .btn-interval{
    margin-top: 5px;
  }
  .img-f{
    float:left;
    cursor: pointer;
  }


</style>
