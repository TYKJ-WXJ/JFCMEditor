/**
 * Created by 吴旭健 on 2018/2/28.
 */

var THREE = require('../../node_modules/three/build/three.module');
var Stats = require('../../node_modules/three/examples/js/libs/stats.min');
var dat = require('../../node_modules/three/examples/js/libs/dat.gui.min');
var d3T = require('../../src/utils/d3-threeD');
let renderer;
let camera;
let scene;
let light;
let controls;
let gui, shape;
var statsl;
let that = this;
const svgThree = {
  initRender() {
    renderer = new THREE.WebGLRenderer({antialias: true});
    // renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0)); //设置背景颜色
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
    statsl = new Stats();
    console.log(statsl);
    document.body.appendChild(statsl.dom);
  },
  // 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
  initControls() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
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
  },
  // 生成gui设置配置项
  initGui() {
    // 声明一个保存需求修改的相关数据的对象
    gui = {
      amount: 2, // 图形的高度
      bevelThickness: 2,
      bevelSize: 0.5,
      bevelEnabled: true,
      bevelSegments: 3,
      curveSegments: 12,
      steps: 1,
      asGeom: function () {
      // 删除旧的模型
        scene.remove(shape);
      // 创建一个新的
        let options = {
          amount: gui.amount,
          bevelThickness: gui.bevelThickness,
          bevelSize: gui.bevelSize,
          bevelSegments: gui.bevelSegments,
          bevelEnabled: gui.bevelEnabled,
          curveSegments: gui.curveSegments,
          steps: gui.steps
        };
        console.log(that);
        shape = this.createMesh(new THREE.ExtrudeGeometry(that.drawShape(), options));
      // 将模型添加到场景当中
        scene.add(shape);
      }
    };
    let datGui = new dat.GUI();
    // 将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）
    datGui.add(gui, 'amount', 0, 200).onChange(gui.asGeom);
    datGui.add(gui, 'bevelThickness', 0, 10).onChange(gui.asGeom);
    datGui.add(gui, 'bevelSize', 0, 10).onChange(gui.asGeom);
    datGui.add(gui, 'bevelSegments', 0, 30).step(1).onChange(gui.asGeom);
    datGui.add(gui, 'bevelEnabled').onChange(gui.asGeom);
    datGui.add(gui, 'curveSegments', 1, 30).step(1).onChange(gui.asGeom);
    datGui.add(gui, 'steps', 1, 5).step(1).onChange(gui.asGeom);
    // 调用生成一次图形
    gui.asGeom();
  },
  // 生成2d图形
  drawShape() {
    console.log(3);
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
    this.render();
    renderer.setSize(window.innerWidth, window.innerHeight);
  },
  animate() {
   // 更新控制器
    controls.update();
    this.render();
   // 更新性能插件
    Stats.update();
    requestAnimationFrame(this.animate());
  },
  drawSvg() {
    console.log(1);
    this.initRender();
    this.initScene();
    this.initCamera();
    this.initLight();
    // initModel();
    // this.initControls();
    this.initStats();
    this.initGui();
    this.animate();
    window.onresize = this.onWindowResize();
  }
}
export default svgThree;
