/**
 * Created by 吴旭健 on 2018/1/31.
 */
// import $ from 'jquery'
// import * as THREE from 'three'
// import * as TWEEN from '@tweenjs/tween.js'
var THREE = require('../../../node_modules/three/build/three.module');
// var TWEEN = require('../../../node_modules/three/examples/js/libs/tween.min');
var Stats = require('../../../node_modules/three/examples/js/libs/stats.min');
let scene;
let camera;
let renderer;
const threeX = {
  init() {
    // 定义场景、摄像机、渲染器
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    // renderer.setClearColorHex()
    renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));  // 背景为白色
    renderer.setSize(window.innerWidth, window.innerHeight); // 渲染器长宽
    renderer.shadowMap.enabled = true;// 增加阴影效果
    // 添加轴和平面
    let axes = new THREE.AxesHelper(20);// 轴
    scene.add(axes);// 添加进场景
    // 创建平面
    let planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);// 定义平面大小
    let planeMaterial = new THREE.MeshLambertMaterial({color: 0xfffffff});// 定义材质
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);// 将planeGeometry和planeMaterial合并到plane的网格对象当中
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    plane.receiveShadow = true;// 指定开启平面的阴影
    scene.add(plane);
    // 添加光源
    let spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);// 定位，如果添加光源之后，没有变化，可能是因为物体材质对光源的反应不同
    spotLight.castShadow = true;// 开启阴影
    scene.add(spotLight);
    // 创建立方体
    let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    let cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;
    cube.castShadow = true;// 开启阴影
    scene.add(cube);
    // 创建球体
    let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    let sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});// wireframe为线框属性，设置为true，物体就不会被渲染为实体物体
    let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;
    sphere.castShadow = true;// 开启阴影
    scene.add(sphere);
    // 设置摄像机的位置，默认指向（0,0,0）
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);
    document.getElementById('threeWorld').appendChild(renderer.domElement);// 将渲染结果添加到div元素当中
    // renderer.render(scene, camera);
    this.renderScene();// 处理渲染，
  },
  renderScene() {
    requestAnimationFrame(this.renderScene);// 浏览器提供的在特定时间间隔重新渲染场景的方法
    renderer.render(scene, camera);
  },
  initStats() {
    let stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.getElementById('')
  }
}

export default threeX;
