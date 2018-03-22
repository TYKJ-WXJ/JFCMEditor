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
const svgThreeR = {
  initRender() {
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(new THREE.Color(0xff00ff, 1.0)); // 设置背景颜色
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  },
  initCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 1500);
  },
  initScene() {
    scene = new THREE.Scene();
  },
  initLight() {
    scene.add(new THREE.AmbientLight(0x404040));
    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);
  },
  initModel() {
    let shape2 = new THREE.ShapeGeometry(this.drawShape());
    let material = new THREE.MeshPhongMaterial({color: 0xff00ff});
    material.side = THREE.DoubleSide;// 设置成两面都可见
    let mesh = new THREE.Mesh(shape2, material);
    scene.add(mesh);
    /* 此方法是创建两种纹理的方法
     * var shape = new THREE.ShapeGeometry(drawShape());
     var mesh = createMesh(shape);
     scene.add(mesh);
     * */
  },
  // 生成模型
  createMesh(geom) {
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
  },
  // 初始化性能插件
  initStats() {
    stats = new Stats();
    // console.log(stats);
    document.body.appendChild(stats.dom);
  },
  // 导入场景
  setScene() {
    let that = this;
    let options = {
      amount: 10,
      bevelThickness: 2,
      bevelSize: 1,
      bevelSegments: 3,
      bevelEnabled: true,
      curveSegments: 12,
      steps: 1
    };
    shape = this.createMesh(new THREE.ExtrudeGeometry(that.drawShape(), options));
    // 将模型添加到场景当中
    scene.add(shape);
  },
  // 生成2d图形
  drawShape() {
    // console.log(3);
    let svgString = document.querySelector('#batman-path').getAttribute('d');
    let shape1 = d3T.transformSVGPathExposed(svgString);
    // 返回shape
    return shape1;
  },
  render() {
    renderer.render(scene, camera);
  },
  // 窗口变动触发的函数
  onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // this.render();
    renderer.setSize(window.innerWidth, window.innerHeight);
  },
  // 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
  initControls() {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;
  },
  animate() {
    // 更新控制器
    controls.update();
    this.render();
    // 更新性能插件
    stats.update();
    console.log('si');
    // requestAnimationFrame(this.render());
  },
  drawSvgL() {
    this.initRender();
    this.initScene();
    this.initCamera();
    this.initLight();
    this.setScene();
    this.initControls();
    this.initStats();
    this.animate();
    window.onresize = this.onWindowResize();
  }
}

export default svgThreeR;
