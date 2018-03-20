/**
 * Created by 吴旭健 on 2018/3/20.
 */
// 将obj文件导入three当中
let THREE = require('../../node_modules/three/build/three.module');
// import * as THREE from 'three';
let OBJLoader = require('../../node_modules/three-obj-loader');
OBJLoader(THREE);
let renderer;
let camera;
let scene;
// let light;
// let texture;
let loader;
// let container;
let mouseX;
let mouseY;
let windowHalfX;
let windowHalfY;
const threeObj = {
  init() {
    // container = document.createElement('div');
    // container = document.getElementById('threeWorld');
    // document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 250;
    // scene
    scene = new THREE.Scene();
    let ambientLight = new THREE.AmbientLight(0xfffffff, 0.4);
    scene.add(ambientLight);
    let pointLight = new THREE.PointLight(0xffffff, 0.8);
    camera.add(pointLight);
    scene.add(camera);
    // texture
    let manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
      console.log(item, loaded, total);
    };
    let textureLoader = new THREE.TextureLoader(manager);
    let texture = textureLoader.load('../../src/assets/xiadele_076.jpg');
    // model
    let onProgress = function (xhr) {
      if (xhr.lengthComputable) {
        let percentComplete = xhr.loaded / xhr.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');
      }
    };
    let onError = function (xhr) {};
    loader = new THREE.OBJLoader(manager);
    loader.load('../../src/assets/file.obj', function (object) {
      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.map = texture;
        }
      });
      object.position.y = -95;
      scene.add(object);
    }, onProgress, onError);
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // container.appendChild(renderer.domElement);
    document.getElementById('info').appendChild(renderer.domElement);
    document.addEventListener('mousemove', this.onDocumentMouseMove, false);
    window.addEventListener('resize', this.onWindowResize, false);
  },
  onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  },
  onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 2;
    mouseY = (event.clientY - windowHalfY) / 2;
  },
  animate() {
    // requestAnimationFrame(this.animate());
    this.render();
  },
  render() {
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  },
  drawObj() {
    this.init();
    this.animate();
  }
}

export default threeObj;
