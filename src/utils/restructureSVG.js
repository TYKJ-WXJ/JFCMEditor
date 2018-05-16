/**
 * Created by 吴旭健 on 2018/3/16.
 */
// 重构SVG转3D函数
var THREE = require('../../node_modules/three/build/three.module');
var OrbitControls = require('../../node_modules/three-orbitcontrols');
var Stats = require('../../node_modules/three/examples/js/libs/stats.min');
// var dat = require('../../node_modules/three/examples/js/libs/dat.gui.min');
var d3T = require('../../src/utils/d3-threeD');
let renderer;
let camera;
let scene;
let light;
let stats;
let shape;
let controls;
function initRender() {
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setClearColor(new THREE.Color(0xff00ff, 1.0)); // 设置背景颜色
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}
function initCamera() {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 0, 1500);
}
function initScene() {
  scene = new THREE.Scene();
}
function initLight() {
  scene.add(new THREE.AmbientLight(0x404040));
  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);
}
// function initModel() {
//   let shape2 = new THREE.ShapeGeometry(drawShape());
//   let material = new THREE.MeshPhongMaterial({color: 0xff00ff});
//   material.side = THREE.DoubleSide;// 设置成两面都可见
//   let mesh = new THREE.Mesh(shape2, material);
//   scene.add(mesh);
//   /* 此方法是创建两种纹理的方法
//    * var shape = new THREE.ShapeGeometry(drawShape());
//    var mesh = createMesh(shape);
//    scene.add(mesh);
//    * */
// }
// 生成模型
function createMesh(geom) {
  // 设置当前的模型矩阵沿xy轴偏移，让图片处于显示中心
  geom.applyMatrix(new THREE.Matrix4().makeTranslation(-450, -300, 0));
  // 创建法向量纹理
  let meshMaterial = new THREE.MeshNormalMaterial({
    flatShading: THREE.FlatShading,
    transparent: true,
    opacity: 0.7
  });
  //  创建一个线框纹理
  let wireFrameMat = new THREE.MeshBasicMaterial();
  wireFrameMat.wireframe = true;
  // 创建模型
  let mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);
  // 由于图形时反的，让图形翻个个
  mesh.rotation.z = Math.PI;
  return mesh;
}
// 初始化性能插件
function initStats() {
  stats = new Stats();
  // console.log(stats);
  document.body.appendChild(stats.dom);
}
// 导入场景
function setScene() {
  // let that = this;
  let options = {
    amount: 10,
    bevelThickness: 2,
    bevelSize: 1,
    bevelSegments: 3,
    bevelEnabled: true,
    curveSegments: 12,
    steps: 1
  };
  shape = createMesh(new THREE.ExtrudeGeometry(drawShape(), options));
  // 将模型添加到场景当中
  scene.add(shape);
}
// 生成2d图形
function drawShape() {
  // console.log(3);
  let svgString = document.querySelector('#batman-path').getAttribute('d');
  let shape1 = d3T.transformSVGPathExposed(svgString);
  // 返回shape
  return shape1;
}
function render() {
  renderer.render(scene, camera);
}
// 窗口变动触发的函数
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  this.render();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
// 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
function initControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  // 如果使用animate方法时，将此函数删除
  // controls.addEventListener( 'change', render );
  // 使动画循环使用时阻尼或自转 意思是否有惯性
  controls.enableDamping = true;
  // 动态阻尼系数 就是鼠标拖拽旋转灵敏度
  // controls.dampingFactor = 0.25;
  // 是否可以缩放
  controls.enableZoom = true;
  // 是否自动旋转
  controls.autoRotate = false;
  // 设置相机距离原点的最远距离
  controls.minDistance = 20;
  // 设置相机距离原点的最远距离
  controls.maxDistance = 10000;
  // 是否开启右键拖拽
  controls.enablePan = true;
}
function animate() {
  // 更新控制器
  controls.update();
  // this.render();
  render();
  // 更新性能插件
  Stats().update();
  console.log('si');
  requestAnimationFrame(animate);
}
export default function() {
  initRender();
  initScene();
  initCamera();
  initLight();
  setScene();
  initControls();
  initStats();
  animate();
  window.onresize = onWindowResize();
}
