/**
 * Created by 吴旭健 on 2018/1/24.
 */
/*
功能描述:用户创建web版组态
  使用方式
let msjstation=new msj3D();
msjstation.initmsj3D('divid',{...},[datajson]);
msjstation.start();
 */
import $ from 'jquery';
import * as THREE from 'three.js';
import TWEEN from '@tweenjs/tween.js';
// function msj3D() { }
let msj3DObj = null;
let dbclick = 0;
const mjsD = {
  start () {
    // 此处用于判断<a href='/lanqi' target='_blank' class='infotextkey'>浏览器</a>
    // 开始
    let _this = this;
    msj3DObj = _this;
    _this.initThree(_this.fId);
    _this.initCamera();
    _this.initScene();
    _this.initHelpGrid();
    _this.initLight();
    _this.addTestObj();
    // 添加3D对象
    $.each(_this.objList, function (index, _obj) {
      _this.InitAddObject(_obj);
    });
    _this.initMouseCtrl();
    // 创建按钮
    _this.addBtns(_this.btns);
    _this.animation();
  },
/*
 38 方法：初始化
 39 fid 画布所属div的Id
 40 option:参数 {
 41             antialias:true,//抗锯齿效果为设置有效
 42             clearCoolr:0xFFFFFF,
 43             showHelpGrid:false,//是否显示网格线
 44                 }
 45 */
  initmsj3D (_fId, _option, _datajson) {
    // 参数处理
    this.option = {};
    this.option.antialias = _option.antialias || true;// 刷新色
    this.option.clearCoolr = _option.clearCoolr || 0x1b7ace;// 刷新色
    this.option.showHelpGrid = _option.showHelpGrid || false;// 刷新色
    // 对象
    this.fId = _fId;
    this.width = $('#' + _fId).width();
    this.height = $('#' + _fId).height();
    this.renderer = null;// 渲染器
    this.camera = null;// 摄像机
    this.scene = null;// 场景
    this.SELECTED = null;
    this.objects = [];
    this.mouseClick = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.controls = null;// 鼠标控制器
    this.objList = _datajson.objects;// 对象列表
    this.eventList = _datajson.events;// 事件对象列表
    this.btns = _datajson.btns;// 按钮列表
    // let _this = this;
  },
// 初始化渲染器
  initThree () {
    let _this = this;
    _this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: _this.option.antialias });
    _this.renderer.setSize(_this.width, _this.height);
    $('#' + _this.fId).append(_this.renderer.domElement);
    _this.renderer.setClearColor(_this.option.clearCoolr, 1.0);
    _this.renderer.shadowMap.enabled = true;//
    _this.renderer.shadowMapSoft = true;
    // 事件
    _this.renderer.domElement.addEventListener('mousedown', _this.onDocumentMouseDown, false);
    _this.renderer.domElement.addEventListener('mousemove', _this.onDocumentMouseMove, false);
  },
// 初始化摄像机
  initCamera () {
    let _this = this;
    _this.camera = new THREE.PerspectiveCamera(45, _this.width / _this.height, 1, 100000);
    _this.camera.name = 'mainCamera';
    _this.camera.position.x = 0;
    _this.camera.position.y = 1000;
    _this.camera.position.z = -1800;
    _this.camera.up.x = 0;
    _this.camera.up.y = 1;
    _this.camera.up.z = 0;
    _this.camera.lookAt({ x: 0, y: 0, z: 0 });
    _this.objects.push(_this.camera);
  },
// 创建场景
  initScene () {
    let _this = this;
    _this.scene = new THREE.Scene();
  },
// 添加对象
  addObject (_obj) {
    let _this = msj3DObj;
    _this.objects.push(_obj);
    _this.scene.add(_obj);
  },
// 创建网格线
  initHelpGrid () {
    let _this = this;
    if (_this.option.showHelpGrid) {
      let helpGrid = new THREE.GridHelper(1000, 50);
      _this.scene.add(helpGrid);
    }
  },
// 灯光布置
  initLight () {
    /*
     118     AmbientLight: 环境光，基础光源，它的颜色会被加载到整个场景和所有对象的当前颜色上。
     119 PointLight：点光源，朝着所有方向都发射光线
     120 SpotLight ：聚光灯光源：类型台灯，天花板上的吊灯，手电筒等
     121 DirectionalLight：方向光，又称无限光，从这个发出的光源可以看做是平行光.
     122     */
    let _this = this;
    let light = new THREE.AmbientLight(0xcccccc);
    light.position.set(0, 0, 0);
    _this.scene.add(light);
    let light2 = new THREE.PointLight(0x555555);
    light2.shadow.camera.near = 1;
    light2.shadow.camera.far = 5000;
    light2.position.set(0, 350, 0);
    light2.castShadow = true;// 表示这个光是可以产生阴影的
    _this.scene.add(light2);
  },
// 创建鼠标控制器
  initMouseCtrl () {
    let _this = this;
    _this.controls = new THREE.OrbitControls(_this.camera);
    _this.controls.addEventListener('change', _this.updateControls);
  },
// 控制器回调
  updateControls () {
    // controls.update();
  },
// 循环渲染界面
  animation () {
    let _this = msj3DObj;
    if (TWEEN !== null && typeof (TWEEN) !== 'undefined') {
      TWEEN.update();
    }
    requestAnimationFrame(_this.animation);
    _this.renderer.render(_this.scene, _this.camera);
  },

/*
 添加对象
 */
  InitAddObject (_obj) {
    let _this = this;
    if (_obj.show === null || typeof (_obj.show) === 'undefined' || _obj.show) {
      let _tempObj = null;
      switch (_obj.objType) {
        case 'cube':
          _tempObj = _this.createCube(_this, _obj);
          _this.addObject(_tempObj);
          break;
        case 'floor':
          _tempObj = _this.CreateFloor(_obj)
          _this.addObject(_tempObj);
          break;
        case 'wall':
          _this.CreateWall(_this, _obj);
          break;
        case 'plane':
          _tempObj = _this.createPlaneGeometry(_this, _obj);
          _this.addObject(_tempObj);
          break;
        case 'glasses':
          _this.createGlasses(_this, _obj);
          break;
        case 'emptyCabinet':
          _tempObj = _this.createEmptyCabinet(_this, _obj);
          _this.addObject(_tempObj);
          break;
        case 'cloneObj':
          _tempObj = _this.commonFunc.cloneObj(_obj.copyfrom, _obj);
          _this.addObject(_tempObj);
          break;
      }
    }
  },

// 创建地板
  CreateFloor (_obj) {
    let _this = this;
    let _cube = _this.createCube(_this, _obj);
    return _cube;
  },
// 创建墙体
  CreateWall (_this, _obj) {
    if (_this === null) {
      _this = this;
    }
    let _commonThick = _obj.thick || 40;// 墙体厚度
    let _commonLength = _obj.length || 100;// 墙体厚度
    let _commonHeight = _obj.height || 300;// 强体高度
    let _commonSkin = _obj.style.skinColor || 0x98750f;
    // 建立墙面
    $.each(_obj.wallData, function (index, wallobj) {
      let wallLength = _commonLength;
      let wallWidth = wallobj.thick || _commonThick;
      let positionX = ((wallobj.startDot.x || 0) + (wallobj.endDot.x || 0)) / 2;
      let positionY = ((wallobj.startDot.y || 0) + (wallobj.endDot.y || 0)) / 2;
      let positionZ = ((wallobj.startDot.z || 0) + (wallobj.endDot.z || 0)) / 2;
      // z相同 表示x方向为长度
      if (wallobj.startDot.z === wallobj.endDot.z) {
        wallLength = Math.abs(wallobj.startDot.x - wallobj.endDot.x);
        wallWidth = wallobj.thick || _commonThick;
      } else if (wallobj.startDot.x === wallobj.endDot.x) {
        wallLength = wallobj.thick || _commonThick;
        wallWidth = Math.abs(wallobj.startDot.z - wallobj.endDot.z);
      }
      let cubeobj = {
        length: wallLength,
        width: wallWidth,
        height: wallobj.height || _commonHeight,
        rotation: wallobj.rotation,
        x: positionX,
        y: positionY,
        z: positionZ,
        uuid: wallobj.uuid,
        name: wallobj.name,
        style: {
          skinColor: _commonSkin,
          skin: wallobj.skin
        }
      }
      let _cube = _this.createCube(_this, cubeobj);
      if (_this.commonFunc.hasObj(wallobj.childrens) && wallobj.childrens.length > 0) {
        $.each(wallobj.childrens, function (index, walchildobj) {
          let _newobj = null;
          _newobj = _this.CreateHole(_this, walchildobj);
          _cube = _this.mergeModel(_this, walchildobj.op, _cube, _newobj);
        });
      }
      _this.addObject(_cube);
    });
  },
// 挖洞
  CreateHole (_this, _obj) {
    if (_this === null) {
      _this = this;
    }
    let _commonThick = 40;// 墙体厚度
    let _commonLength = 100;// 墙体厚度
    let _commonHeight = 300;// 强体高度
    let _commonSkin = 0x98750f;
    // 建立墙面
    let wallLength = _commonLength;
    let wallWidth = _obj.thick || _commonThick;
    let positionX = ((_obj.startDot.x || 0) + (_obj.endDot.x || 0)) / 2;
    let positionY = ((_obj.startDot.y || 0) + (_obj.endDot.y || 0)) / 2;
    let positionZ = ((_obj.startDot.z || 0) + (_obj.endDot.z || 0)) / 2;
    // z相同 表示x方向为长度
    if (_obj.startDot.z === _obj.endDot.z) {
      wallLength = Math.abs(_obj.startDot.x - _obj.endDot.x);
      wallWidth = _obj.thick || _commonThick;
    } else if (_obj.startDot.x === _obj.endDot.x) {
      wallLength = _obj.thick || _commonThick;
      wallWidth = Math.abs(_obj.startDot.z - _obj.endDot.z);
    }
    let cubeobj = {
      length: wallLength,
      width: wallWidth,
      height: _obj.height || _commonHeight,
      rotation: _obj.rotation,
      x: positionX,
      uuid: _obj.uuid,
      name: _obj.name,
      y: positionY,
      z: positionZ,
      style: {
        skinColor: _commonSkin,
        skin: _obj.skin
      }
    }
    let _cube = _this.createCube(_this, cubeobj);
    return _cube;
  },
// 模型合并 使用ThreeBSP插件mergeOP计算方式 -表示减去 +表示加上
// msj3D.prototype.mergeModel = function (_this, mergeOP, _fobj, _sobj) {
//   if (_this === null) {
//     _this = this;
//   }
//   let fobjBSP = new ThreeBSP(_fobj);
//   let sobjBSP = new ThreeBSP(_sobj);
//   // let sobjBSP = new ThreeBSP(_sobj);
//   let resultBSP = null;
//   if (mergeOP === '-') {
//     resultBSP = fobjBSP.subtract(sobjBSP);
//   } else if (mergeOP === '+') {
//     // let subMesh = new THREE.Mesh(_sobj);
//     _sobj.updateMatrix();
//     _fobj.geometry.merge(_sobj.geometry, _sobj.matrix);
//     return _fobj;
//     // resultBSP = fobjBSP.union(sobjBSP);
//   } else if (mergeOP === '&') { // 交集
//     resultBSP = fobjBSP.intersect(sobjBSP);
//   } else {
//     _this.addObject(_sobj);
//     return _fobj;
//   }
//   let cubeMaterialArray = [];
//   for (let i = 0; i < 1; i++) {
//     cubeMaterialArray.push(new THREE.MeshLambertMaterial({
//       // map: _this.createSkin(128, 128, { imgurl: '../datacenterdemo/res2/'+(i%11)+'.jpg' }),
//       vertexColors: THREE.FaceColors
//     }));
//   }
//   let cubeMaterials = new THREE.MeshFaceMaterial(cubeMaterialArray);
//   let result = resultBSP.toMesh(cubeMaterials);
//   result.material.shading = THREE.FlatShading;
//   result.geometry.computeFaceNormals();
//   result.geometry.computeVertexNormals();
//   result.uuid = _fobj.uuid + mergeOP + _sobj.uuid;
//   result.name = _fobj.name + mergeOP + _sobj.name;
//   result.material.needsUpdate = true;
//   result.geometry.buffersNeedUpdate = true;
//   result.geometry.uvsNeedUpdate = true;
//   let _foreFaceSkin = null;
//   for (let i = 0; i < result.geometry.faces.length; i++) {
//     let _faceset = false;
//     for (let j = 0; j < _fobj.geometry.faces.length; j++) {
//       if (result.geometry.faces[i].vertexNormals[0].x === _fobj.geometry.faces[j].vertexNormals[0].x && result.geometry.faces[i].vertexNormals[0].y === _fobj.geometry.faces[j].vertexNormals[0].y && result.geometry.faces[i].vertexNormals[0].z === _fobj.geometry.faces[j].vertexNormals[0].z && result.geometry.faces[i].vertexNormals[1].x === _fobj.geometry.faces[j].vertexNormals[1].x && result.geometry.faces[i].vertexNormals[1].y === _fobj.geometry.faces[j].vertexNormals[1].y && result.geometry.faces[i].vertexNormals[1].z === _fobj.geometry.faces[j].vertexNormals[1].z && result.geometry.faces[i].vertexNormals[2].x === _fobj.geometry.faces[j].vertexNormals[2].x && result.geometry.faces[i].vertexNormals[2].y === _fobj.geometry.faces[j].vertexNormals[2].y && result.geometry.faces[i].vertexNormals[2].z === _fobj.geometry.faces[j].vertexNormals[2].z) {
//         result.geometry.faces[i].color.setHex(_fobj.geometry.faces[j].color.r * 0xff0000 + _fobj.geometry.faces[j].color.g * 0x00ff00 + _fobj.geometry.faces[j].color.b * 0x0000ff);
//         _foreFaceSkin = _fobj.geometry.faces[j].color.r * 0xff0000 + _fobj.geometry.faces[j].color.g * 0x00ff00 + _fobj.geometry.faces[j].color.b * 0x0000ff;
//         _faceset = true;
//       }
//     }
//     if (_faceset === false) {
//       for (let j = 0; j < _sobj.geometry.faces.length; j++) {
//         if (result.geometry.faces[i].vertexNormals[0].x === _sobj.geometry.faces[j].vertexNormals[0].x && result.geometry.faces[i].vertexNormals[0].y === _sobj.geometry.faces[j].vertexNormals[0].y && result.geometry.faces[i].vertexNormals[0].z === _sobj.geometry.faces[j].vertexNormals[0].z && result.geometry.faces[i].vertexNormals[1].x === _sobj.geometry.faces[j].vertexNormals[1].x && result.geometry.faces[i].vertexNormals[1].y === _sobj.geometry.faces[j].vertexNormals[1].y && result.geometry.faces[i].vertexNormals[1].z === _sobj.geometry.faces[j].vertexNormals[1].z && result.geometry.faces[i].vertexNormals[2].x === _sobj.geometry.faces[j].vertexNormals[2].x && result.geometry.faces[i].vertexNormals[2].y === _sobj.geometry.faces[j].vertexNormals[2].y && result.geometry.faces[i].vertexNormals[2].z === _sobj.geometry.faces[j].vertexNormals[2].z && result.geometry.faces[i].vertexNormals[2].z === _sobj.geometry.faces[j].vertexNormals[2].z) {
//           result.geometry.faces[i].color.setHex(_sobj.geometry.faces[j].color.r * 0xff0000 + _sobj.geometry.faces[j].color.g * 0x00ff00 + _sobj.geometry.faces[j].color.b * 0x0000ff);
//           _foreFaceSkin = _sobj.geometry.faces[j].color.r * 0xff0000 + _sobj.geometry.faces[j].color.g * 0x00ff00 + _sobj.geometry.faces[j].color.b * 0x0000ff;
//           _faceset = true;
//         }
//       }
//     }
//     if (_faceset === false) {
//       result.geometry.faces[i].color.setHex(_foreFaceSkin);
//     }
//     // result.geometry.faces[i].materialIndex = i
//   }
//   result.castShadow = true;
//   result.receiveShadow = true;
//   return result;
// }
// 创建盒子体
  createCube (_this, _obj) {
    if (_this === null) {
      _this = this;
    }
    let _length = _obj.length || 1000;// 默认1000
    let _width = _obj.width || _length;
    let _height = _obj.height || 10;
    let _x = _obj.x || 0;
    let _y = _obj.y || 0;
    let _z = _obj.z || 0;
    let skinColor = _obj.style.skinColor || 0x98750f;
    let cubeGeometry = new THREE.CubeGeometry(_length, _height, _width, 0, 0, 1);
    // 六面颜色
    for (let i = 0; i < cubeGeometry.faces.length; i += 2) {
      let hex = skinColor || Math.random() * 0x531844;
      cubeGeometry.faces[i].color.setHex(hex);
      cubeGeometry.faces[i + 1].color.setHex(hex);
    }
    // 六面纹理
    let skinUpObj = {
      vertexColors: THREE.FaceColors
    }
    let skinDownObj = skinUpObj;
    let skinForeObj = skinUpObj;
    let skinBehindObj = skinUpObj;
    let skinLeftObj = skinUpObj;
    let skinRightObj = skinUpObj;
    let skinOpacity = 1;
    if (_obj.style !== null && typeof (_obj.style) !== 'undefined' && _obj.style.skin !== null && typeof (_obj.style.skin) !== 'undefined') {
      // 透明度
      if (_obj.style.skin.opacity !== null && typeof (_obj.style.skin.opacity) !== 'undefined') {
        skinOpacity = _obj.style.skin.opacity;
        console.log(skinOpacity)
      }
      // 上
      skinUpObj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_up, cubeGeometry, 4);
      // 下
      skinDownObj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_down, cubeGeometry, 6);
      // 前
      skinForeObj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_fore, cubeGeometry, 0);
      // 后
      skinBehindObj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_behind, cubeGeometry, 2);
      // 左
      skinLeftObj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_left, cubeGeometry, 8);
      // 右
      skinRightObj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_right, cubeGeometry, 10);
    }
    let cubeMaterialArray = [];
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skinForeObj));
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skinBehindObj));
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skinUpObj));
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skinDownObj));
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skinRightObj));
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skinLeftObj));
    let cubeMaterials = new THREE.MeshFaceMaterial(cubeMaterialArray);
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterials); // 这里要注意，自己修改了
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.uuid = _obj.uuid;
    cube.name = _obj.name;
    cube.position.set(_x, _y, _z);
    if (_obj.rotation !== null && typeof (_obj.rotation) !== 'undefined' && _obj.rotation.length > 0) {
      $.each(_obj.rotation, function (index, rotationObj) {
        switch (rotationObj.direction) {
          case 'x':
            cube.rotateX(rotationObj.degree);
            break;
          case 'y':
            cube.rotateY(rotationObj.degree);
            break;
          case 'z':
            cube.rotateZ(rotationObj.degree);
            break;
          case 'arb':
            cube.rotateOnAxis(new THREE.Vector3(rotationObj.degree[0], rotationObj.degree[1], rotationObj.degree[2]), rotationObj.degree[3]);
            break;
        }
      });
    }
    return cube;
  },
// 创建二维平面-长方形
  createPlaneGeometry (_this, _obj) {
  // options={
  //    width:0,
  //    height:0,
  //    pic:'',
  //    transparent:true,
  //    opacity:1
  //    blending:false,
  //    position: { x:,y:,z:},
  //    rotation: { x:,y:,z:},
  // }
    let options = _obj;
    if (typeof options.pic === 'string') { // 传入的材质是图片路径，使用 textureloader加载图片作为材质
      let loader = new THREE.TextureLoader();
      loader.setCrossOrigin(this.crossOrigin);
      let texture = loader.load(options.pic, function () { }, undefined, function () { });
    } else {
      let texture = new THREE.CanvasTexture(options.pic)
    }
    let MaterParam = {// 材质的参数
      map: texture,
      overdraw: true,
      side: THREE.FrontSide,
      //     blending: THREE.AdditiveBlending,
      transparent: options.transparent,
      // needsUpdate:true,
      // premultipliedAlpha: true,
      opacity: options.opacity
    }
    if (options.blending) {
      MaterParam.blending = THREE.AdditiveBlending// 使用饱和度叠加渲染
    }
    let plane = new THREE.Mesh(
      new THREE.PlaneGeometry(options.width, options.height, 1, 1),
      new THREE.MeshBasicMaterial(MaterParam)
    );
    plane.position.x = options.position.x;
    plane.position.y = options.position.y;
    plane.position.z = options.position.z;
    plane.rotation.x = options.rotation.x;
    plane.rotation.y = options.rotation.y;
    plane.rotation.z = options.rotation.z;
    return plane;
  },
// 创建空柜子
  createEmptyCabinet (_this, _obj) {
  /* 参数demo
   {
   show:true,
   name: 'test',
   uuid: 'test',
   rotation: [{ direction: 'y', degree: 0.25*Math.PI}],//旋转     uuid:'',
   objType: 'emptyCabinet',
   transparent:true,
   size:{length:50,width:60,height:200, thick:2},
   position: { x: -220, y: 105, z: -150 },
   doors: {
   doorType:'lr',// ud门 lr左右门
   doorSize:[1],
   skins:[ {
   skinColor: 0x333333,
   skin_fore: {
   imgurl: '../datacenterdemo/res/rack_door_back.jpg',
   },
   skin_behind: {
   imgurl: '../datacenterdemo/res/rack_front_door.jpg',
   }
   }]
   },
   skin:{
   skinColor: 0xdddddd,

   skin:{
   skinColor: 0xdddddd,
   skin_up: { imgurl: '../datacenterdemo/res/rack_door_back.jpg' },
   skin_down: { imgurl: '../datacenterdemo/res/rack_door_back.jpg' },
   skin_fore: { imgurl: '../datacenterdemo/res/rack_door_back.jpg' },
   skin_behind: { imgurl: '../datacenterdemo/res/rack_door_back.jpg' },
   skin_left: { imgurl: '../datacenterdemo/res/rack_door_back.jpg' },
   skin_right: { imgurl: '../datacenterdemo/res/rack_door_back.jpg' },
   }

   }
   }
   */
    _this = msj3DObj;
    // 创建五个面
    // 上
    let upobj = {
      show: true,
      uuid: '',
      name: '',
      objType: 'cube',
      length: _obj.size.length + 1,
      width: _obj.size.width,
      height: _obj.size.thick + 1,
      x: _obj.position.x + 1,
      y: _obj.position.y + (_obj.size.height / 2 - _obj.size.thick / 2),
      z: _obj.position.z,
      style: {
        skinColor: _obj.skin.skinColor,
        skin: _obj.skin.skin_up.skin
      }
    }
    let upcube = _this.createCube(_this, upobj);
    // 左
    let leftobj = {
      show: true,
      uuid: '',
      name: '',
      objType: 'cube',
      length: _obj.size.length,
      width: _obj.size.thick,
      height: _obj.size.height,
      x: 0,
      y: -(_obj.size.height / 2 - _obj.size.thick / 2),
      z: 0 - (_obj.size.width / 2 - _obj.size.thick / 2) - 1,
      style: {
        skinColor: _obj.skin.skinColor,
        skin: _obj.skin.skin_left.skin
      }
    }
    let leftcube = _this.createCube(_this, leftobj);
    let Cabinet = _this.mergeModel(_this, '+', upcube, leftcube);
    // 右
    let Rightobj = {
      show: true,
      uuid: '',
      name: '',
      objType: 'cube',
      length: _obj.size.length,
      width: _obj.size.thick,
      height: _obj.size.height,
      x: 0,
      y: -(_obj.size.height / 2 - _obj.size.thick / 2),
      z: (_obj.size.width / 2 - _obj.size.thick / 2) + 1,
      style: {
        skinColor: _obj.skin.skinColor,
        skin: _obj.skin.skin_right.skin
      }
    }
    let Rightcube = _this.createCube(_this, Rightobj);
    Cabinet = _this.mergeModel(_this, '+', Cabinet, Rightcube);
    // 后
    let Behidobj = {
      show: true,
      uuid: '',
      name: '',
      objType: 'cube',
      length: _obj.size.thick,
      width: _obj.size.width,
      height: _obj.size.height,
      x: (_obj.size.length / 2 - _obj.size.thick / 2) + 1,
      y: -(_obj.size.height / 2 - _obj.size.thick / 2),
      z: 0,
      style: {
        skinColor: _obj.skin.skinColor,
        skin: _obj.skin.skin_behind.skin
      }
    }
    let Behindcube = _this.createCube(_this, Behidobj);
    Cabinet = _this.mergeModel(_this, '+', Cabinet, Behindcube);
    // 下
    let Downobj = {
      show: true,
      uuid: '',
      name: '',
      objType: 'cube',
      length: _obj.size.length + 1,
      width: _obj.size.width,
      height: _obj.size.thick,
      x: -1,
      y: -(_obj.size.height - _obj.size.thick) - 1,
      z: 0,
      style: {
        skinColor: _obj.skin.skinColor,
        skin: _obj.skin.skin_down.skin
      }
    }
    let Downcube = _this.createCube(_this, Downobj);
    Cabinet = _this.mergeModel(_this, '+', Cabinet, Downcube);
    let tempobj = new THREE.Object3D();
    tempobj.add(Cabinet);
    tempobj.name = _obj.name;
    tempobj.uuid = _obj.uuid;
    Cabinet.name = _obj.shellname;
    _this.objects.push(Cabinet);
    tempobj.position = Cabinet.position;
    // 门
    if (_obj.doors !== null && typeof (_obj.doors) !== 'undefined') {
      let doors = _obj.doors;
      if (doors.skins.length === 1) { // 单门
        let singledoorobj = {
          show: true,
          uuid: '',
          name: _obj.doors.doorname[0],
          objType: 'cube',
          length: _obj.size.thick,
          width: _obj.size.width,
          height: _obj.size.height,
          x: _obj.position.x - _obj.size.length / 2 - _obj.size.thick / 2,
          y: _obj.position.y,
          z: _obj.position.z,
          style: {
            skinColor: _obj.doors.skins[0].skinColor,
            skin: _obj.doors.skins[0]
          }
        }
        let singledoorcube = _this.createCube(_this, singledoorobj);
        _this.objects.push(singledoorcube);
        tempobj.add(singledoorcube);
      } else if (doors.skins.length > 1) { // 多门
      }
    }
    if (_obj.rotation !== null && typeof (_obj.rotation) !== 'undefined' && _obj.rotation.length > 0) {
      $.each(_obj.rotation, function (index, rotationObj) {
        switch (rotationObj.direction) {
          case 'x':
            tempobj.rotateX(rotationObj.degree);
            break;
          case 'y':
            tempobj.rotateY(rotationObj.degree);
            break;
          case 'z':
            tempobj.rotateZ(rotationObj.degree);
            break;
          case 'arb':
            tempobj.rotateOnAxis(new THREE.Vector3(rotationObj.degree[0], rotationObj.degree[1], rotationObj.degree[2]), rotationObj.degree[3]);
            break;
        }
      });
    }
    return tempobj;
  },
// 创建玻璃
  createGlasses (_this, _obj) {
    // let _this = msj3DObj;
    let tmpobj = _this.createPlaneGeometry(_this, _obj);
    _this.addObject(tmpobj);
    _obj.rotation.y = Math.PI + _obj.rotation.y;
    let tmpobj2 = _this.createPlaneGeometry(_this, _obj);
    _this.addObject(tmpobj2);
  },
// 创建皮肤
  createSkin (flength, fwidth, _obj) {
    let imgwidth = 128;
    let imgheight = 128;
    if (_obj.width !== null && typeof (_obj.width) !== 'undefined') {
      imgwidth = _obj.width;
    }
    if (_obj.height !== null && typeof (_obj.height) !== 'undefined') {
      imgheight = _obj.height;
    }
    let texture = new THREE.TextureLoader().load(_obj.imgurl);
    let _repeat = false;
    if (_obj.repeatx !== null && typeof (_obj.repeatx) !== 'undefined' && _obj.repeatx===true) {
      texture.wrapS = THREE.RepeatWrapping;
      _repeat = true;
    }
    if (_obj.repeaty !== null && typeof (_obj.repeaty) !== 'undefined' && _obj.repeaty === true) {
      texture.wrapT = THREE.RepeatWrapping;
      _repeat = true;
    }
    if (_repeat) {
      texture.repeat.set(flength / imgheight, fwidth / imgheight);
    }
    return texture;
  },
// 创建皮肤参数对象
  createSkinOptionOnj (_this, flength, fwidth, _obj, _cube, _cubefacenub) {
    if (_this.commonFunc.hasObj(_obj)) {
      if (_this.commonFunc.hasObj(_obj.imgurl)) {
        return {
          map: _this.createSkin(flength, fwidth, _obj), transparent: true
        }
      } else {
        if (_this.commonFunc.hasObj(_obj.skinColor)) {
          _cube.faces[_cubefacenub].color.setHex(_obj.skinColor);
          _cube.faces[_cubefacenub + 1].color.setHex(_obj.skinColor);
        }
        return {
          vertexColors: THREE.FaceColors
        }
      }
    } else {
      return {
        vertexColors: THREE.FaceColors
      }
    }
  },
// 通用方法
  // 判断对象
  hasObj: function (_obj) {
    if (_obj !== null && typeof (_obj) !== 'undefined') {
      return true;
    } else {
      return false;
    }
  },
  // 查找对象
  findObject: function (_objname) {
    let _this = msj3DObj;
    console.log('findObject');
    let findedobj = null;
    $.each(_this.objects, function (index, _obj) {
      if (_obj.name !== null && _obj.name !== '') {
        if (_obj.name === _objname) {
          findedobj = _obj;
          return true;
        }
      }
    });
    return findedobj;
  },
  // 复制对象
  cloneObj: function (_objname, newparam) {
    /* newparam
     {
     show: true,
     uuid:
     copyfrom: 'cabinet1_1',
     name:
     childrenname:[]
     objType: 'cloneObj',
     position:{x:y:z:}//相对复制品的
     scale:{x:1,y:1,z:1}
     rotation: [{ direction: 'y', degree: 0.25*Math.PI}],//旋转     uuid:'',
     }
     */
    let _this = msj3DObj;
    let fobj = _this.commonFunc.findObject(_objname);
    let newobj = fobj.clone();
    if (newobj.children !== null && newobj.children.length > 1) {
      $.each(newobj.children, function (index, obj) {
        obj.name = newparam.childrenname[index];
        _this.objects.push(obj);
      });
    }
    // 位置
    if (_this.commonFunc.hasObj(newparam.position)) {
      newobj.position.x = newparam.position.x;
      newobj.position.y = newparam.position.y;
      newobj.position.z = newparam.position.z;
    }
    // 大小
    if (_this.commonFunc.hasObj(newparam.scale)) {
      newobj.scale.x = newparam.scale.x;
      newobj.scale.y = newparam.scale.y;
      newobj.scale.z = newparam.scale.z;
    }
    // 角度
    if (_this.commonFunc.hasObj(newparam.rotation)) {
      $.each(newparam.rotation, function (index, rotationObj) {
        switch (rotationObj.direction) {
          case 'x':
            newobj.rotateX(rotationObj.degree);
            break;
          case 'y':
            newobj.rotateY(rotationObj.degree);
            break;
          case 'z':
            newobj.rotateZ(rotationObj.degree);
            break;
          case 'arb':
            newobj.rotateOnAxis(new THREE.Vector3(rotationObj.degree[0], rotationObj.degree[1], rotationObj.degree[2]), rotationObj.degree[3]);
            break;
        }
      });
    }
    newobj.name = newparam.name;
    newobj.uuid = newparam.uuid;
    return newobj;
  },
  // 设置表皮颜色
  setSkinColor: function (_objname, _color) {
    let _this = msj3DObj;
    let _obj = _this.commonFunc.findObject(_objname);
    if (_this.commonFunc.hasObj(_obj.material.emissive)) {
      _obj.material.emissive.setHex(_color);
    } else if (_this.commonFunc.hasObj(_obj.material.materials)) {
      if (_obj.material.materials.length > 0) {
        $.each(_obj.material.materials, function (index, obj) {
          obj.emissive.setHex(_color);
        });
      }
    }
  },
  // 添加图片标识
  addIdentification: function (_objname, _obj) {
    /*
     {
     name:'test',
     size:{x:20,y:20},
     position:{x:0,y:100,z:0},
     imgurl: '../datacenterdemo/res/connection.png'
     }
     */
    let _this = msj3DObj;
    let _fobj = _this.commonFunc.findObject(_objname);
    let loader = new THREE.TextureLoader();
    let texture = loader.load(_obj.imgurl, function () { }, undefined, function () { });
    let spriteMaterial = new THREE.SpriteMaterial({ map: texture, useScreenCoordinates: false });
    let sprite = new THREE.Sprite(spriteMaterial);
    sprite.name = _obj.name;
    sprite.position.x = _fobj.position.x + _obj.position.x;
    sprite.position.y = _fobj.position.y + _obj.position.y;
    sprite.position.z = _fobj.position.z + _obj.position.z;
    if (_this.commonFunc.hasObj(_obj.size)) {
      sprite.scale.set(_obj.size.x, _obj.size.y);
    } else {
      sprite.scale.set(1, 1);
    }
    _this.addObject(sprite);
  },
  // 添加文字
  makeTextSprite: function (_objname, parameters) {
    let _this = msj3DObj;
    let _fobj = _this.commonFunc.findObject(_objname);
    if (parameters === undefined) {
      parameters = {};
    }
    let fontface = parameters.hasOwnProperty('fontface') ? parameters['fontface'] : 'Arial';
    let fontsize = parameters.hasOwnProperty('fontsize') ? parameters['fontsize'] : 18;
    let borderThickness = parameters.hasOwnProperty('borderThickness') ? parameters['borderThickness'] : 4;
    let textColor = parameters.hasOwnProperty('textColor') ? parameters['textColor'] : { r: 0, g: 0, b: 0, a: 1.0 };
    let message = parameters.hasOwnProperty('message') ? parameters['message'] : 'helloMsj3D';
    let x = parameters.hasOwnProperty('position') ? parameters['position'].x : 0;
    let y = parameters.hasOwnProperty('position') ? parameters['position'].y : 0;
    let z = parameters.hasOwnProperty('position') ? parameters['position'].z : 0;
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context.font = 'Bold ' + fontsize + 'px ' + fontface;
    let metrics = context.measureText(message);
    let textWidth = metrics.width;
    context.lineWidth = borderThickness;
    context.fillStyle = 'rgba(' + textColor.r + ', ' + textColor.g + ', ' + textColor.b + ', 1.0)';
    context.fillText(message, borderThickness, fontsize + borderThickness);
    let texture = new THREE.Texture(canvas)
    texture.needsUpdate = true;
    let spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false } );
    let sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.x = _fobj.position.x + x;
    sprite.position.y = _fobj.position.y + y;
    sprite.position.z = _fobj.position.z + z;
    sprite.name = parameters.name;
    sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);
    _this.addObject(sprite);
  },
  loadObj (_obj) {
    let jsloader = new THREE.JSONLoader();
    jsloader.load('test.json',
      function (geometry, materials) {
        let model = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
        model.name = 'test';
        model.scale.x = 10;
        model.scale.y = 7;
        model.scale.z = 10;
        model.position.x = -300;
        model.position.y = 50;
        model.position.z = 300;
        this.addObject(model);
      });
  },
// 添加按钮
  addBtns (_btnobjs) {
    let _this = msj3DObj;
    if (_btnobjs !== null && _btnobjs.length > 0) {
      $('#' + _this.fId).after('<div id="toolbar" class="toolbar" ></div>');
      $.each(_btnobjs, function (index, _obj) {
        $('#toolbar').append(' <img src="' + _obj.btnimg + '" title="' + _obj.btnTitle + '" id="' + _obj.btnid + '" />');
        $('#' + _obj.btnid).on('click', _obj.event);
      });
    }
  },

/*
 *事件部分
 */
// 鼠标按下事件
  onDocumentMouseDown (event) {
    dbclick++;
    let _this = msj3DObj;
    setTimeout(function () { dbclick = 0 }, 500);
    event.preventDefault();
    if (dbclick >= 2) {
      _this.raycaster.setFromCamera(_this.mouseClick, _this.camera);
      let intersects = _this.raycaster.intersectObjects(_this.objects);
      if (intersects.length > 0) {
        _this.controls.enabled = false;
        _this.SELECTED = intersects[0].object;
        if (_this.eventList !== null && _this.eventList.dbclick !== null && _this.eventList.dbclick.length > 0) {
          $.each(_this.eventList.dbclick, function (index, _obj) {
            if (typeof (_obj.obj_name) === 'string') {
              if (_obj.obj_name === _this.SELECTED.name) {
                _obj.obj_event(_this.SELECTED);
              }
            } else if (_obj.findObject !== null || typeof (_obj.findObject) === 'function') {
              if (_obj.findObject(_this.SELECTED.name)) {
                _obj.obj_event(_this.SELECTED);
              }
            }
          });
        }
        _this.controls.enabled = true;
      }
    }
  },

  onDocumentMouseMove (event) {
    event.preventDefault();
    let _this = msj3DObj;
    _this.mouseClick.x = (event.clientX / _this.width) * 2 - 1;
    _this.mouseClick.y = -(event.clientY / _this.height) * 2 + 1;
    _this.raycaster.setFromCamera(_this.mouseClick, _this.camera);
  },

  addTestObj () {
    let _this = msj3DObj;
  // let jsloader = new THREE.JSONLoader();
  // jsloader.load('test.json',
  //    function (geometry, materials) {
  //        let model = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
  //        model.name = 'test';
  //        model.scale.x = 10;
  //        model.scale.y = 7;
  //        model.scale.z = 10;
  //        model.position.x = -300;
  //        model.position.y = 50;
  //        model.position.z = 300;
  //        _this.addObject(model);
  //    });
  // let plane =
  // _this.createPlaneGeometry(_this, {
  //    width: 100,
  //    height: 200,
  //    pic: '../datacenterdemo/res/glass.png',
  //    transparent: true,
  //    opacity: 1,
  //    position: { x: 0, y: 100, z: -200 },
  //    rotation: { x: 0, y: 0*Math.PI, z: 0 },
  //    blending: false
  // });
  }
}

export default mjsD;
