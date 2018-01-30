/**
 * Created by 吴旭健 on 2018/1/29.
 */
import $ from 'jquery'
// import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
var THREE = require('../../../node_modules/three/build/three');
// import OrbitControls from '@utils/controls/OrbitControls'
// 参数处理
let option = {};
let id;
this.option = {};
this.option.antialias = option.antialias || true;
this.option.clearCoolr = option.clearCoolr || 0x1b7ace;
this.option.showHelpGrid = option.showHelpGrid || false;
// 对象
this.id = id;
// this.width = width();
// this.height = height();
this.renderer = null;// 渲染器
this.scene = null;// 场景
this.camera = null;// 摄像机
this.selected = null;
this.objects = [];
this.mouseClick = new THREE.Vector2();
this.raycaster = new THREE.Raycaster();
this.controls = null;// 鼠标控制器
this.trsnaformControls = null;// 鼠标控制器
this.dragcontrols = null;
this.objList = {};// 对象列表
this.eventList = {};// 事件对象列表
this.dragList = [];
this.objectStatusList = {};
this.clickList = [];
let room3dObj;
const threeMB = {
  init() {
    let that = this;
    room3dObj = that;
    that.initThree(that.id); // 初始化渲染器
    that.initCamera(); // 初始化摄像机
    that.initScene();// 创建场景
    that.initHelpGrid();// 创建网格
    that.initLight();// 灯光布置
    // 添加3D对象
    $.each(that.objList, function (index, obj) {
      that.InitAddObject(obj);// 添加对象到场景中
    });
    that.initMouseCtrl();// 创建鼠标控制器
    that.animation();// 循环渲染界面
  },
  initThree() { // 初始化渲染器
    let that = this;
    that.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: that.option.antialias });
    that.renderer.setSize(that.width, that.height);
    $('#' + that.id).append(that.renderer.domElement);
    that.renderer.setClearColor(that.option.clearCoolr, 1.0);
    that.renderer.shadowMap.enabled = true;
    that.renderer.shadowMapSoft = true;
    //  事件
    that.renderer.domElement.addEventListener('mousedown', that.onDocumentMouseDown, false);
    that.renderer.domElement.addEventListener('mousemove', that.onDocumentMouseMove, false);
  },
  initCamera() { // 初始化摄像机
    let that = this;
    that.camera = new THREE.PerspectiveCamera(45, that.width / that.height, 1, 100000);
    that.camera.name = 'mainCamera';
    that.camera.position.x = 0;
    that.camera.position.y = 2000;
    that.camera.position.z = 1800;
    that.camera.up.x = 0;
    that.camera.up.y = 1;
    that.camera.up.z = 0;
    that.camera.lookAt({ x: 100, y: 0, z: 100 });
    that.objects.push(that.camera);
    that.dragList.push(that.camera);
    that.clickList.push(that.camera);
  },
  initScene() { // 创建场景
    let that = this;
    that.scene = new THREE.Scene();
  },
  initHelpGrid() { // 创建网格
    let that = this;
    if (that.option.showHelpGrid) {
      let helpGrid = new THREE.GridHelper(1000, 50);
      that.scene.add(helpGrid);
    }
  },
  initLight() { // 灯光布置
    /*
    AmbientLight: 环境光，基础光源，它的颜色会被加载到整个场景和所有对象的当前颜色上。
     PointLight：点光源，朝着所有方向都发射光线
     SpotLight ：聚光灯光源：类型台灯，天花板上的吊灯，手电筒等
     DirectionalLight：方向光，又称无限光，从这个发出的光源可以看做是平行光. */
    let that = this;
    let light = new THREE.AmbientLight(0xcccccc);
    light.position.set(0, 0, 0);
    that.scene.add(light);
    let light2 = new THREE.PointLight(0x555555);
    light2.shadow.camera.near = 1;
    light2.shadow.camera.far = 5000;
    light2.position.set(0, 350, 0);
    light2.castShadow = true;// 表示这个光是可以产生阴影的
    that.scene.add(light2);
  },
  animation() { // 循环渲染界面
    let that = room3dObj;
    if (TWEEN !== null && typeof (TWEEN) !== 'undefined') {
      TWEEN.update();
    }
    requestAnimationFrame(that.animation);
    that.renderer.render(that.scene, that.camera);
  },
  initMouseCtrl() { // 创建鼠标控制器
    let that = this;
    that.controls = new THREE.OrbitControls(that.camera, that.renderer.domElement);
    that.controls.addEventListener('change', that.updateControls);
  },
  InitAddObject(obj) { // 添加对象到场景中
    let that = room3dObj;
    that.scene.add(obj);
    that.objects.push(obj);
  }
};
export default threeMB;
