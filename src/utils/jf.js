/**
 * Created by 吴旭健 on 2018/3/21.
 */
// 机房模拟
var THREE = require('../../node_modules/three/build/three.module');
var OrbitControls = require('../../node_modules/three-orbitcontrols');
// var stats = require('../../node_modules/three/examples/js/libs/stats.min');
// var TWEEN = require('../../node_modules/three/examples/js/libs/tween.min');
var Detector = require('../../node_modules/three/examples/js/Detector');
// var ThreeBSP = require('../../src/utils/THree/ThreeBSP');
// 设置全局变量
let scene, camera, renderer, controls, door, doorA;
// let keyboard = new THREEx.KeyboardState();// 保持键盘的当前状态，可以随时查询
let clock = new THREE.Clock();
let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let VIEW_ANGLE = 75;
let ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT;
let NEAR = 0.1;
let FAR = 10000;
// let materialArrayA = [];
// let materialArrayB = [];
let matArrayA = [];// 内墙
let matArrayB = [];// 外墙
let dummy = new THREE.Object3D();// 仿制品
let container;
let moveDistance;
let rotateAngle;
let jmktImg = ['jmkt1', 'jmkt1', 'jmkt1', 'jmkt1', 'jmkt1', 'jmkt1'];
let doorImg = ['m2', 'm2', 'm2', 'm2', 'm2', 'm1']; // 最后一个是正面
// 1.场景
function initScene() {
  scene = new THREE.Scene();
}

// 2.相机
function initCamera() {
  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  camera.position.set(0, 1000, 1800);
  camera.lookAt(scene.position);
  camera.lookAt(0, 0, 0);
  scene.add(camera);
}

// 3.渲染器
function initRender() {
  if (Detector.webgl) {
    renderer = new THREE.WebGLRenderer({antialias: true});
  } else {
    renderer = new THREE.CanvasRenderer();
  }
  // 设置渲染器的大小为窗口的内宽度，也就是内容区的宽度。
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  container = document.getElementById('ThreeJS');
  container.appendChild(renderer.domElement);
  renderer.setClearColor(0x4682B4, 1.0);
}

// 4.事件
// function initEvent() {
//   THREEx.WindowResize(renderer, camera);
//   THREEx.FullScreen.bindKey({ charCode: 'm'.charCodeAt(0) });
// }

// hover高亮
let raycaster = new THREE.Raycaster();// 光线投射，用于确定鼠标点击位置
let mouse = new THREE.Vector2();// 创建二维平面
function initHover() {
  mouse.x = (event.clientX / (window.innerWidth - 100)) * 2 - 1;
  mouse.y = -(event.clientY / (window.innerHeight - 200)) * 2 + 1;
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);
  // calculate objects intersecting the picking ray
  let intersects = raycaster.intersectObjects(scene.children);
  for (let i = 0; i < intersects.length; i++) {
    console.log(intersects);
  }
}

// 鼠标点击事件
function initClick() {
  mouse.x = (event.clientX / (window.innerWidth - 100)) * 2 - 1;
  mouse.y = -(event.clientY / (window.innerHeight - 200)) * 2 + 1;
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);
  // calculate objects intersecting the picking ray
  let intersects = raycaster.intersectObjects(scene.children);
  for (let i = 0; i < intersects.length; i++) {
    console.log(intersects[i].object);
    if (intersects[i].object.name === '门1') {
      doorControls(intersects[i].object);
    }
  }
}

// 5.控制
function initControls() {
  controls = new OrbitControls(camera, renderer.domElement);
}

// 6.光源
function initLight() {
  // 位置不同，方向光作用于物体的面也不同，看到的物体各个面的颜色也不同
  // A start, 第二个参数是光源强度
  let directionalLight = new THREE.DirectionalLight(0xffffff, 1);// 模拟远处类似太阳的光源
  directionalLight.position.set(0, 100, 0).normalize();
  scene.add(directionalLight);
  // A end
  let ambient = new THREE.AmbientLight(0xffffff, 1); // AmbientLight,影响整个场景的光源
  ambient.position.set(0, 0, 0);
  scene.add(ambient);
}

// 创建地板
function createFloor() {
  let loader = new THREE.TextureLoader();
  loader.load('../../src/assets/3D/cz.png', function(texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
    let floorGeometry = new THREE.BoxGeometry(1600, 1100, 1);
    let floorMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    let floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -0.5;
    floor.rotation.x = Math.PI / 2;
    floor.name = '地砖';
    scene.add(floor);
  });

  // 茶色：0x58ACFA   透明玻璃色：0XECF1F3
  // let glassMaterial = new THREE.MeshBasicMaterial({color: 0XECF1F3});
  // glassMaterial.opacity = 0.4;
  // glassMaterial.transparent = true;
  // createCubeWall(1, 110, 1100, 0, glassMaterial, -801, 100, 0);
  // createCubeWall(1, 110, 1100, 0, glassMaterial, 801, 100, 0);
}

// 墙上挖门，通过两个几何体生成BSP对象
// function createResultBsp(bsp, lessBsp, mat) {
//   let material;
//   switch (mat) {
//     case 1:
//       material = new THREE.MeshPhongMaterial({color: 0x9cb2d1, specular: 0x9cb2d1, shininess: 30, transparent: true, opacity: 1});
//       break;
//     case 2:
//       material = new THREE.MeshPhongMaterial({color: 0xafc0ca, specular: 0xafc0ca, shininess: 30, transparent: true, opacity: 1});
//       break;
//     default:
//   }
//
//   let sphere1BSP = new ThreeBSP(bsp);
//   let cube2BSP = new ThreeBSP(lessBsp);// 0x9cb2d1 淡紫,0xC3C3C3 白灰 , 0xafc0ca灰
//   let resultBSP = sphere1BSP.subtract(cube2BSP);
//
//   let result = resultBSP.toMesh(material);
//   result.material.flatshading = THREE.FlatShading;
//   result.geometry.computeFaceNormals();  // 重新计算几何体侧面法向量
//   result.geometry.computeVertexNormals();
//   result.material.needsUpdate = true;  // 更新纹理
//   result.geometry.buffersNeedUpdate = true;
//   result.geometry.uvsNeedUpdate = true;
//   scene.add(result);
// }

// 创建墙
function createCubeWall(width, height, depth, angle, material, x, y, z) {
  let cubeGeometry = new THREE.BoxGeometry(width, height, depth);
  let cube = new THREE.Mesh(cubeGeometry, material);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  cube.rotation.y += angle * Math.PI;  // -逆时针旋转,+顺时针
  scene.add(cube);
}

// 创建机柜,思路是：先创建一个矩形，而后正面透明，内部挖空,机柜门是一个宽为1，长和高于机柜相等
/*
 width height depth x y z
num 机柜有几层
* */
function createCabinet(width, height, depth, x, z, y, num) {
  let cubeGeometry = new THREE.BoxGeometry(width, height, depth);
  var materials = [];
  for (let i = 0; i < 6; i++) {
    materials.push(new THREE.MeshBasicMaterial({
      map: THREE.ImageUtils.loadTexture('../../src/assets/3D/kt2.png', {}, function() {
        renderer.render(scene, camera);
      }),
      overdraw: true
    }));
  };
  let cubeMaterial = new THREE.MeshFaceMaterial(materials);
  let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(x, z, y);
  cube.name = '机柜1'; // 使用svgID
  // console.log(1);
  scene.add(cube);
}

// 创建主机
function createHost(x, y, z) {
  let cubeGeometry = new THREE.BoxGeometry(4, 4, 2);
  let cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000
  });
  let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  return cube;
}

// 创建门
function createDoor(width, height, depth, x, z, y, img) {
  let doorGeometry = new THREE.BoxGeometry(width, height, 1);
  let materials = [];
  for (let i = 0; i < 6; i++) {
    materials.push(new THREE.MeshBasicMaterial({
      map: THREE.ImageUtils.loadTexture('../../src/assets/3D/' + img[i] + '.png', {}, function() {
        renderer.render(scene, camera);
      }),
      overdraw: true
    }));
  };
  let doorMaterial = new THREE.MeshFaceMaterial(materials);
  doorMaterial.opacity = 1.0;
  doorMaterial.transparent = true;
  doorA = new THREE.Mesh(doorGeometry, doorMaterial);
  doorA.position.set(x, z, y + (width / 2) - 8.8);
  // console.log(doorA);
  doorA.name = '门1'; // 真实项目当中使用svg的ID
  scene.add(doorA);
}

// 控制门的开关
let doorDefault = true;
function doorControls(doorC) {
  if (doorDefault) {
    doorC.rotation.y += 0.5 * Math.PI;
    doorC.position.x += 50;
    doorC.position.z += 50;
    doorDefault = false;
  } else {
    doorC.rotation.y -= 0.5 * Math.PI;
    doorC.position.x -= 50;
    doorC.position.z -= 50;
    doorDefault = true;
  }
}

let doorState = true;// 默认是门是关闭的
// Enter=13,Space=32;
function onkeyDown(event) {
  switch (event.keyCode) {
    case 13:
      console.log(event.keyCode);
      if (doorState) {
        dummy.rotation.y += 0.5 * Math.PI;
        doorState = false;
      } else {
        dummy.rotation.y -= 0.5 * Math.PI;
        doorState = true;
      }
      break;
    default:
      console.log(event.keyCode);
      break;
  }
}

// 返回墙对象
// function returnWallObject(width, height, depth, angle, material, x, y, z) {
//   let cubeGeometry = new THREE.BoxGeometry(width, height, depth);
//   let cube = new THREE.Mesh(cubeGeometry, material);
//   cube.position.x = x;
//   cube.position.y = y;
//   cube.position.z = z;
//   cube.rotation.y += angle * Math.PI;
//   return cube;
// }

// 创建墙纹理
function createWallMaterail() {
  matArrayA.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  // 前  0xafc0ca :灰色
  matArrayA.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  // 后
  matArrayA.push(new THREE.MeshPhongMaterial({color: 0xd6e4ec}));  // 上  0xd6e4ec： 偏白色
  matArrayA.push(new THREE.MeshPhongMaterial({color: 0xd6e4ec}));  // 下
  matArrayA.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  // 左    0xafc0ca :灰色
  matArrayA.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  // 右

  matArrayB.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  // 前  0xafc0ca :灰色
  matArrayB.push(new THREE.MeshPhongMaterial({color: 0x9cb2d1}));  // 后  0x9cb2d1：淡紫
  matArrayB.push(new THREE.MeshPhongMaterial({color: 0xd6e4ec}));  // 上  0xd6e4ec： 偏白色
  matArrayB.push(new THREE.MeshPhongMaterial({color: 0xd6e4ec}));  // 下
  matArrayB.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  // 左   0xafc0ca :灰色
  matArrayB.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  // 右
}

// 数据转化函数,进行数据分类
function conversionData(dt) {
  // console.log(dt);
  for (let i = 0; i < 1; i++) {
    createCabinet(dt[i].size.width, 180, dt[i].size.height, dt[i].position.x, 90, dt[i].position.y, 5);
    createDoor(dt[i].size.width, 180, dt[i].size.height, dt[i].position.x, 90, dt[i].position.y, jmktImg);
  }
}

// 创建房间布局
function createLayout() {
  // 墙面1 立方体比较长的面  左一
  createCubeWall(10, 200, 900, 0, matArrayB, -651, 100, 0);
  // 墙面2  立方体比较长的面   右一
  createCubeWall(10, 200, 900, 1, matArrayB, 651, 100, 0);
  // 墙面3 门对面的墙 立方体比较短的面
  createCubeWall(10, 200, 1310, 1.5, matArrayB, 0, 100, -451);

  // 墙面4   带门的面
  // let wall = returnWallObject(1310, 200, 10, 0, matArrayB, 0, 100, 455);
  // 门框
  // let doorCube = returnWallObject(100, 180, 10, 0, matArrayB, 0, 90, 455);
  // createResultBsp(wall, doorCube, 1);

  // 为墙面安装门,右门
  createDoor(100, 180, 2, 50, 90, 451, doorImg);

  // 房间A:隔墙1
  createCubeWall(10, 200, 250, 0, matArrayA, -151, 100, 325);
  // 房间A:隔墙2  无门
  createCubeWall(10, 200, 220, 0.5, matArrayA, -256, 100, 201);
  // 厨房：隔墙3
  createCubeWall(350, 200, 10, 0, matArrayA, 481, 100, 131);
  // 厨房：隔墙4 无门
  createCubeWall(10, 200, 200, 0, matArrayA, 301, 100, 225);
  // 房间B
  createCubeWall(350, 200, 10, 0, matArrayA, -471, 100, -50);
  // 房间B  无门
  createCubeWall(200, 200, 10, 0.5, matArrayA, 0, 100, -350);
  // 房间C
  createCubeWall(220, 200, 10, 0, matArrayA, 540, 100, -50);
  // 房间C 无门
  createCubeWall(200, 200, 10, 0.5, matArrayA, 250, 100, -350);
  // 厕所
  // let cube = returnWallObject(10, 200, 260, 0.5, matArrayA, 125, 100, -250);
  // 厕所门框
  // let doorCube1 = returnWallObject(10, 160, 80, 0.5, matArrayA, 155, 90, -250);
  // createResultBsp(cube, doorCube1, 2);
//
//   // 茶色：0x58ACFA   透明玻璃色：0XECF1F3
//   let glassMaterial = new THREE.MeshBasicMaterial({ color: 0x58ACFA });
//   glassMaterial.opacity = 0.6;
//   glassMaterial.transparent = true;
//   createCubeWall(1, 180, 80, 0.5, glassMaterial, 155, 90, -250);
}

// 7.初始化OBJ对象
function initObject() {
  // 墙纹理
  createWallMaterail();
  createFloor();
  createLayout();
}

// 初始化函数
function init(dt) {
  initScene();
  initCamera();
  initRender();
  // initEvent();
  conversionData(dt);
  initControls();
  initLight();
  initObject();
  // 监听键盘按键
  document.addEventListener('keydown', onkeyDown, false);
  window.addEventListener('mousemove', initHover);// 页面绑定鼠标移动事件
  window.addEventListener('mousedown', initClick);// 页面绑定鼠标点击事件
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // TWEEN.update();
  update();
}

function update() {
  let delta = clock.getDelta();
  moveDistance = 200 * delta;
  rotateAngle = Math.PI / 2 * delta;
  controls.update();
}
export default function JF(dt) {
  init(dt);
  animate();
}
