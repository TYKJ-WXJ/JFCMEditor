import '../font/iconfont.css';
import '../css/joint.css';
import $ from 'jquery';
import joint from 'jointjs';
import Draggabilly from 'draggabilly';
// import Uuid from '../../uuid';
// import 'jquery.fancytree/dist/skin-lion/ui.fancytree.min.css'
// import {createTree} from 'jquery.fancytree'
// import 'jquery.fancytree/dist/modules/jquery.fancytree.edit';
// import 'jquery.fancytree/dist/modules/jquery.fancytree.filter';
/**
 * Created by 吴旭健 on 2017/11/29.
 */
let lineArr = [];// 存放线段和点的数据
const jointD = {
  centerGraph: null,
  centerPaper: null,
  leftGraph: null,
  leftPaper: null,
  view: null,
  idUp: '',
  idDown: '',
  hover: null,
  angle: {},
  initialAngle: {},
  cells: [],
  options: {},
  currentLayer: 0,
  // highlightedCellViews: [],
  groups: [],
  store: null,
  svg: [],
  svgView: [],
  // allCellsId: [],
  initPaper(param) {
    let that = this;
    this.options = param.options;
    this.store = param.store;
    $('.tool_wrap').css({
      'width': this.options.width - 5,
      'height': this.options.height - 10
    });
    // 设备基本属性
    if (this.options.basic_attributes) {
      $('.tool_panel').css({
        'height': this.options.height - $('.basic_attributes').outerHeight() - 10
      });
    } else {
      $('.tool_panel').css({
        'height': this.options.height - 10
      });
    }
    // 图库
    if (this.options.basic_figure) {
      $('.tool_panel').prepend(`
        <div class="basic_figure">
          <h3>图库</h3>
          <div id="component_box">
            <div>
              <div id="component"></div>
              <div id="link"></div>
              <div id="line"></div>
            </div>
          </div>
        </div>
        <div class="tool_canvas"></div>
      `);
      // 设置图库高度
      if (this.options.gallery.length === 0) {
        $('#component_box').css({
          'height': $('.tool_panel').outerHeight() - 55
        });
      } else {
        $('#component_box').css({
          'height': this.options.height - 10
        });
        $('.basic_figure h3').remove();
      }
    } else {
      $('.tool_panel').prepend(`
        <div class="tool_canvas"></div>`);
    }
    // 清除组合等操作
    if (this.options.action_buttons) {
      $('.tool_canvas').append(`<div class="action_buttons">
        <div class="clear_disabled" title="清除画布"></div>
        <div class="group_disabled" title="合并图形"></div>
        <div class="ungroup_disabled" title="解除合并"></div>
        <div class="front_disabled" title="置于顶层"></div>
        <div class="back_disabled" title="置于底层"></div>
      </div>
      <div id="display_box"></div>`);
    } else {
      $('.tool_canvas').append(`
        <div id="display_box"></div>
      `);
    }
    // 样式面板和缩略图
    if (this.options.thumbnail || this.options.style_operation || this.options.layer) {
      $('.tool_wrap').append('<div class="tool_map_right"><i class="drag" title="点我拖动"></i></div>');
      if (this.options.style_operation) {
        $('.tool_map_right').append('<div class="style_operation"></div>');
      }
      if (this.options.thumbnail) {
        $('.tool_map_right').append('<div class="thumbnail"></div>');
      }
      if (this.options.layer) {
        $('.tool_map_right').append(`<div class="layer">
          <h4>图层<i class="iconfont addLayer" style="cursor:pointer;">&#xe60d;</i></h4>
            <ul class="layerTree">
              <li>
                <span class="highlight" data-layer = '0'>第0层</span>
                <ul class="secondaryLayer"></ul>
              </li>
            </ul>
        </div>`);
        // 添加图层
        $('.addLayer').on('click', function () {
          if ($('.secondaryLayer').length >= 5) {
            alert('最多只有5层');
            return false;
          } else {
            $('.layerTree > li > span').removeClass('highlight');
            $('.layerTree').append(`<li>
            <span class="highlight" data-layer = ` + $('.secondaryLayer').length + `>第` + $('.secondaryLayer').length + `层<i class="iconfont deleteLayer" style="float: right;">&#xe61e;</i></span>
            <ul class="secondaryLayer"></ul>
          </li>`);
            that.currentLayer = $('.secondaryLayer').length - 1;
            that.setSvgView();
          }
        });
        // 选中某个图层
        $('.layer').on('click', '.layerTree > li > span', function () {
          $('.layerTree > li > span').removeClass('highlight');
          $(this).addClass('highlight');
          that.currentLayer = parseInt($(this).attr('data-layer'));
          that.setSvgView();
          // if ($(this).next().hasClass('hidden')) {
          //   $(this).next().removeClass('hidden');
          //   that.setSvgView();
          // } else {
          //   $(this).next().addClass('hidden');
          // }
        });
        // 删除图层
        $('.layer').on('click', '.deleteLayer', function () {
          let layer = parseInt($(this).parent().attr('data-layer'));
          if (layer !== 0) {
            $('.layerTree').children().eq(layer).remove();
            for (let i = 0; i < that.svg.length; i++) {
              if (parseInt(that.svg[i].layer) === layer) {
                // console.log(that.centerGraph.getCell(that.svg[i].id));
                that.centerGraph.getCell(that.svg[i].id).remove();
                that.delSvg(that.svg[i].id);
              }
            }
            that.currentLayer = layer - 1;
          }
        });
      }
    }
    this.initLeftPaper().initCenterPaper().loadPropertyPane();
  },
  setSvgView() {
    let that = this;
    console.log(this.svg);
    this.svgView = [];
    this.centerPaper.setInteractivity(true);
    if ($('#functionBtn')[0]) {
      this.hideBtn();
    }
    // 删除画布上不是第0层的图形
    /* let deleteId = [];
    for (let i = 0; i < this.centerGraph.getCells().length; i++) {
      if (parseInt(this.centerGraph.getCells()[i].attributes.layer) !== 0) {
        deleteId.push(this.centerGraph.getCells()[i].id);
        console.log(this.centerGraph.getCells()[i]);
        this.centerGraph.getCells()[i].remove();
      }
    }
    for (let i = 0; i < this.groups.length; i++) {
      if (deleteId.includes(this.groups[i].parent)) {
        this.groups.splice(deleteId.indexOf(this.groups[i].parent), 1);
      }
    } */
    // console.log(this.groups);
    // 如果当前图层上已经有图形的名字就不再生成
    for (let i = 0; i < this.svg.length; i++) {
      if (parseInt(this.svg[i].layer) === 0) {
        let flag = true;
        $('.secondaryLayer').eq(this.currentLayer).find('.cell').each(function () {
          if ($(this).attr('data-id') === that.svg[i].id) {
            flag = false;
          }
        });
        if (flag) {
          $('.secondaryLayer').eq(this.currentLayer).append('<li><span class="cell" data-id="' + this.svg[i].id + '">' + this.svg[i].defaultName + '</span></li>');
        }
      }
      // 将画布上不是第0层的图形添加到画布上
      if (parseInt(this.svg[i].layer) === this.currentLayer && this.currentLayer !== 0) {
        this.svgView.push(this.svg[i]);
      }
    }
    this.centerGraph.addCells(this.svgView);
    // 权限控制，其他层不能对第0层的图形进行操作
    if (this.currentLayer !== 0) {
      this.centerPaper.setInteractivity(function (cellView) {
        if (parseInt(cellView.model.attributes.layer) !== 0) {
          return cellView;
        }
      });
    }
  },
  getSvgData() { // 导出svg数据
    /* let svg = {'link': [], 'figure': []};
    for (let i = 0; i < this.svg.length; i++) {
      if (this.svg[i].hasOwnProperty('link') && this.svg[i].link) {
        svg['link'].push(this.svg[i]);
      } else {
        svg['figure'].push(this.svg[i]);
      }
    } */
    if (this.options.layer) {
      return this.svg;
    } else {
      return this.centerGraph.getCells().length !== 0 && this.centerGraph.getCells();
    }
  },
  setPaperBackground(color) {
    this.centerPaper.drawBackground({
      color: color
    });
  },
  setSvgData(svg, status) { // 导入svg数据
    if ($('#functionBtn')[0]) {
      this.hideBtn();
    }
    if (status === 'TEMP' || status === 'RESET') {
      this.view = null;
      this.hover = null;
      this.idUp = '';
      this.idDown = '';
      this.angle = {};
      this.initialAngle = {};
      this.currentLayer = 0;
      this.cells = [];
      this.groups = [];
      this.store = null;
      this.svg = [];
      this.svgView = [];
      for (let i = 0; i < svg.length; i++) {
        if (svg[i].hasOwnProperty('embeds') && svg[i].embeds.length !== 0) {
          this.groups.push({parent: svg[i].id, childs: []});
        }
        this.angle[svg[i].id] = svg[i].angle;
        // 组合后的初始角度未保存
      }
      for (let i = 0; i < svg.length; i++) {
        for (let j = 0; j < this.groups.length; j++) {
          if (svg[i].parent === this.groups[j].parent) {
            this.groups[j].childs.push(svg[i]);
          }
        }
      }
    }
    this.centerGraph.clear();
    this.centerGraph.addCells(svg);
  },
  setSvgStyle(svg, attr, style) { // 为设备设置属性时同时改变svg图形的一些样式
    this.centerGraph.getCell(svg.id).attr(attr, style);
  },
  delSvgWithAttributes() { // 删除设备属性的同时也要删除
    return this.allCellsId;
    // console.log(id);
    // for (let i = 0; i < this.groups.length; i++) {
    //   let parent = this.centerGraph.getCell(this.groups[i].parent);
    //   for (let j = 0; j < this.groups[i].childs.length; j++) {
    //     parent.unembed(this.centerGraph.getCell(this.groups[i].childs[j].id));
    //   }
    // }
    // this.groups = [];
  },
  // 加载线段端点按钮
  loadLinkBtn(cellView) {
    let that = this;
    $('#display_box').append(`
          <div id="functionBtn">
            <div id="delPoint" class="left_top"><i class="iconfont" style="font-size: 18px;">&#xe6a7;</i></div>
            <div id="straightLine" class="left_bottom"><i class="iconfont">&#xe61d;</i></div>
            <div id="curve" class="right_top"><i class="iconfont">&#xe772;</i></div>
          </div>
        `);
    // 删除
    $('.tool_wrap').on('click', '#delPoint', function () {
      console.log('Point');
      that.delLinkPoint(cellView);
      $('#functionBtn').hide();
      $('#delPoint').hide();
      $('#straightLine').hide();
      $('#curve').hide();
    });
    // 直线
    $('.tool_wrap').on('click', '#straightLine', function () {
      this.setLinkPoint(cellView);
    });
    // 曲线
    $('.tool_wrap').on('click', '#curve', function () {
      this.setLinkPoint(cellView);
    });
    // 改变外加按钮的位置，使之跟随当前元素移动
    this.creatWrapper(cellView, this.centerPaper);
  },
  // 创建新的点和线
  setLinkPoint(cellView) {
    let that = this;
    // 判断是否为线段
    let linkP = cellView.model.clone();
    if (cellView.model.attributes.type === 'fsa.State' || cellView.model.attributes.type === 'fsa.Arrow') {
      console.log(linkP);
      // 修改克隆点的位置
      linkP.attributes.position = {
        x: cellView.model.attributes.position.x + 30,
        y: cellView.model.attributes.position.y + 30
      }
      that.centerGraph.addCells(linkP);
      that.centerGraph.addCells(that.setLink(cellView.model, linkP, '', '', false));
      console.log(that.setLink(cellView.model, linkP, '', ''));
    }
  },
  // 删除线段端点
  delLinkPoint(cellView) {
    this.centerGraph.removeCells(cellView.model);
  },
  // 加载周围按钮，删除，旋转，复制，拉伸
  loadBtn(cellView) {
    let that = this;
    if (this.options.figure_buttons) {
      $('#display_box').append(`
          <div id="functionBtn">
            <div id="delSelf" class="left_top"><i class="iconfont" style="font-size: 18px;">&#xe6a7;</i></div>
            <div id="rotateSelf" class="left_bottom"><i class="iconfont">&#xe61d;</i></div>
            <div id="copySelf" class="right_top"><i class="iconfont">&#xe772;</i></div>
          </div>
        `);
      for (let i = 0; i < 8; i++) {
        $('#functionBtn').append('<div id="stretchSelf' + i + '" class="stretch-icon"></div>');
      }
      $('.tool_wrap').on('click', '#delSelf', function () {
        that.delSelf();
      });
      $('.tool_wrap').on('click', '#copySelf', function () {
        that.copySelf();
      });
      $('.tool_wrap').on('mousedown', '#rotateSelf', function () {
        that.rotateSelf(this);
      });
      $('.tool_wrap').on('mousedown', '.stretch-icon', function () {
        that.stretchSelf(this);
      });
      // 改变外加按钮的位置，使之跟随当前元素移动
      this.creatWrapper(cellView, this.centerPaper);
    }
    if (this.options.label) {
      $('#display_box').append(`
          <div id="labelBox"></div>
          <div id="toolTip"></div>
        `);
      $('#display_box').on('dblclick', '#toolTip', function () {
        $('#toolTip p').addClass('hidden').next().removeClass('hidden').focus();
      });
      $('#display_box').on('blur', '#toolTip input', function () {
        let _that = $(this);
        if ($(this).val().trim()) {
          that.hover.model.attributes.defaultName = $(this).val().trim();
          $(this).addClass('hidden').prev().text($(this).val().trim()).attr('title', $(this).val().trim()).removeClass('hidden');
          that.getCenterGraphCells();
          $('.cell').each(function () {
            if ($(this).attr('data-id') === that.hover.model.attributes.id) {
              $(this).text(_that.val().trim());
            }
          });
        }
      });
      // 改变外加按钮的位置，使之跟随当前元素移动
      this.creatWrapper(cellView, this.centerPaper);
    }
  },
  saveEquip() {
    return [1, 2, 3];
  },
  // 将localStorage中的数据显示出来，以id和对应的cell存储
  // 不用for in遍历的理由：localStorage中还有其他属性如length
  // loadStorage() {
  //   for (let i = 0; i < localStorage.length; i++) {
  //     let key = localStorage.key(i);
  //  // 跳过groups属性
  //     if (key === 'groups' || key === 'loglevel:webpack-dev-server') {
  //       continue;
  //     }
  //     // this.angle[key] = JSON.parse(localStorage.getItem(key)).angle;
  //  // this.size[key] = {'width': JSON.parse(localStorage.getItem(key)).size.width, 'height': JSON.parse(localStorage.getItem(key)).size.height};
  //     this.centerGraph.addCells([JSON.parse(localStorage.getItem(key))]);
  //   }
  //   return this;
  // },
  loadPropertyPane() {
    if (!this.options.figure_buttons) {
      return;
    }
    let styleOperation = this.options.style_operation ? `<div class="inspector-container">
      <div class="presentation">
        <h4>外观</h4>
        <!-- 背景和边框颜色 -->
        <div class="change-color">
          <button class="color-btn fnBtn" data-obj="fill" data-pos="20,70">填充</button>
          <button class="color-btn fnBtn" data-obj="stroke" data-pos="90,70">轮廓</button>
        </div>
        <!-- 边框粗细 -->
        <div class="thickness outline-thickness">
          <input type="button" class="plus-size fnBtn" value="-">
          <input type="number" id="outline-thickness" min="0" max="30" value="" readonly>
          <input type="button" class="add-size fnBtn" value="+">
        </div>
        <div class="styles">
          <!-- 边框样式 -->
          <label>轮廓样式</label>
          <select id="outline-styles">
            <option value="1" data-style="0">solid</option>
            <option value="2" data-style="2,5">dashed</option>
            <option value="3" data-style="10,5">dotted</option>
          </select>
        </div>
      </div>
      <div class="text">
        <h4>文本</h4>
        <!-- 文本内容 -->
        <div class="text-content">
          <label>输入文字</label>
          <input type="text" id="text-content" value="">
        </div>
        <!-- 字体大小 -->
        <div class="thickness font-size">
          <input type="button" class="plus-size fnBtn" value="-">
          <input type="number" id="font-size" value="" min="5" max="80" readonly>
          <input type="button" class="add-size fnBtn" value="+">
        </div>
        <!-- 字体粗细 -->
        <div class="styles">
          <label>字体粗细</label>
          <select id="font-sickness">
            <option value="1" data-style="300">light</option>
            <option value="2" data-style="normal">normal</option>
            <option value="3" data-style="bold">bold</option>
          </select>
        </div>
        <!-- 字体颜色 -->
        <div class="change-color">
          <button class="color-btn fnBtn" data-obj="text/fill" data-pos="20,307">颜色</button>
        </div>
      </div>
      <!-- 取色板 -->
      <div class="color-picker">
        <span class="transparent_color" style="background-image: url(../../../../src/utils/jointjs/img/transparent.png);"></span>
        <span style="background: rgb(255, 255, 255);"></span>
        <span style="background: rgb(220, 215, 215);"></span>
        <span style="background: rgb(143, 143, 143);"></span>
        <span style="background: rgb(198, 199, 226);"></span>
        <span style="background: rgb(254, 182, 99);"></span>
        <span style="background: rgb(254, 133, 79);"></span>
        <span style="background: rgb(183, 93, 50);"></span>
        <span style="background: rgb(49, 208, 198);"></span>
        <span style="background: rgb(124, 104, 252);"></span>
        <span style="background: rgb(97, 84, 156);"></span>
        <span style="background: rgb(106, 108, 138);"></span>
        <span style="background: rgb(75, 74, 103);"></span>
        <span style="background: rgb(60, 66, 96);"></span>
        <span style="background: rgb(51, 51, 78);"></span>
        <span style="background: rgb(34, 33, 56);"></span>
      </div>
    </div>` : ``;
    let that = this;
    $('.style_operation').prepend(styleOperation);
    $('.tool_wrap').on('click', '.clear_paper', function () {
      that.clearPaper();
    });
    $('.tool_wrap').on('click', '.group_figure', function () {
      that.embed();
    });
    $('.tool_wrap').on('click', '.ungroup_figure', function () {
      that.unembed();
    });
    $('.tool_wrap').on('click', '.front_figure', function () {
      that.frontAndBack(this);
    });
    $('.tool_wrap').on('click', '.back_figure', function () {
      that.frontAndBack(this);
    });
    if ($('.tool_wrap .tool_map_right').length !== 0) {
      /* eslint-disable no-new */
      new Draggabilly('.tool_map_right', {
        containment: 'body',
        handle: '.drag'
      });
    }
    return this;
  },
  /* 加off()防止多次绑定
   *obj  操作的input
   * min, max 值区间
   * type 形状类型 rect, circle, ellipse
   * data_obj 改变颜色的类型 fill, outline, fill */
  propertyPane(cellView) {
    if (!this.options.style_operation) {
      return;
    }
    // 如果当前没有选中任何view,则返回
    if (arguments.length === 0) {
      return;
    }
    let obj, min, max;
    let type = cellView.model.get('type').split('.')[1].toLowerCase();
    // 减
    $('.plus-size').off('click').on('click', function() {
      let parent = $(this).parent();
      obj = $(this).next();
      min = parseInt(obj.attr('min'));
      max = parseInt(obj.attr('max'));
      if (obj.val()) {
        if (parseInt(obj.val()) <= min) {
          obj.val(min);
        } else {
          obj.val(parseInt(obj.val()) - 1);
        }
      }
      // 改变字体
      if (parent.hasClass('font-size')) {
        cellView.model.attr('text/font-size', $('#font-size').val());
      } else {
        // 改变边框宽度
        cellView.model.attr('' + type + '/stroke-width', parseInt($('#outline-thickness').val()));
      }
    });
    // 加
    $('.add-size').off('click').on('click', function() {
      console.log('加一');
      let parent = $(this).parent();
      obj = $(this).prev();
      min = parseInt(obj.attr('min'));
      max = parseInt(obj.attr('max'));
      if (obj.val()) {
        if (parseInt(obj.val()) >= max) {
          obj.val(max);
        } else {
          obj.val(parseInt(obj.val()) + 1);
        }
      }
      if (parent.hasClass('font-size')) {
        cellView.model.attr('text/font-size', $('#font-size').val());
      } else {
        cellView.model.attr('' + type + '/stroke-width', parseInt($('#outline-thickness').val()));
      }
    });
    // 边框样式
    $('#outline-styles').off('change').on('change', function () {
      cellView.model.attr('' + type + '/stroke-dasharray', $('#outline-styles').find('option:selected').attr('data-style'));
    });
    // 字体粗细
    $('#font-sickness').off('change').on('change', function () {
      cellView.model.attr('text/font-weight', $('#font-sickness').find('option:selected').attr('data-style'));
    });
    // 内容
    $('#text-content').off('keyup').on('keyup', function () {
      cellView.model.attr('text/text', $('#text-content').val());
    });
    let dataObj;
    // 出现取色板
    $('.color-btn').each(function() {
      $(this).off('click').on('click', function(e) {
        dataObj = $(this).attr('data-obj');
        let pos = $(this).attr('data-pos');
        let left = pos.split(',')[0];
        let top = pos.split(',')[1];
        $('.color-picker').css({
          'left': left + 'px',
          'top': top + 'px',
          'display': 'block'
        });
        e.stopPropagation();
      });
    });
    // 选择颜色
    $('.color-picker span').each(function() {
      $(this).off('click').on('click', function () {
        let color = $(this).css('background-color')
        if ($(this).hasClass('transparent_color')) {
          color = 'transparent';
        }
        if (dataObj === 'fill') {
          cellView.model.attr('' + type + '/fill', color);
        } else if (dataObj === 'stroke') {
          cellView.model.attr('' + type + '/stroke', color);
        } else {
          cellView.model.attr('text/fill', color);
        }
      });
    });
    // 点击其他地方隐藏画板
    $(document).off('click').on('click', function(e) {
      $('.color-picker').hide();
    });
  },
  initLeftPaper() {
    if (!this.options.basic_figure) {
      return this;
    }
    let ElementView = this.getLeftElementView();     // 初始化元素样式
    let LinkView = this.getLeftLinkView();           // 初始化线段样式
    this.leftGraph = new joint.dia.Graph();        // 生成画板
    this.leftPaper = new joint.dia.Paper({       // 生成画布
      el: $('#component'),
      width: 120,
      height: $('.tool_panel').outerHeight() - 55 > 410 ? 410 : $('.tool_panel').outerHeight() - 55,
      model: this.leftGraph,
      gridSize: 1,
      elementView: ElementView
    });
    if (this.options.gallery.length === 0) { // 如果没有设备数据则用默认图形
      this.leftGraph.addCells([this.getShape(1), this.getShape(2), this.getShape(3), this.getShape(4), this.getShape(5)]);
    } else {
      console.log(this.options.gallery);
      for (let i = 0; i < this.options.gallery.length; i++) {
        let svgs = JSON.parse(this.options.gallery[i].svg);
        // 单个图形的情况
        if (svgs.length === 1) {
          svgs[0].equipId = this.options.gallery[i].equipment.id;
          this.leftGraph.addCells(svgs);
          continue;
        }
        // 图形没有组合但是是多个图形（未解决）
        for (let j = 0; j < svgs.length; j++) {
          if (svgs[j].hasOwnProperty('embeds') && svgs[j].hasOwnProperty('embeds').length !== 0 && svgs[j].hasOwnProperty('parent') === false) {
            // 判断是每个设备的终极父级图形
            svgs[j].equipId = this.options.gallery[i].equipment.id;
          }
        }
        this.leftGraph.addCells(svgs);
      }
      this.generateShapes();
    }
    this.addLeftPaperEvent(this.leftPaper);  // 添加paper事件
    // 区域
    let graph = new joint.dia.Graph();        // 生成画板
    let paper = new joint.dia.Paper({       // 生成画布
      el: $('#link'),
      width: 120,
      height: 180,
      model: graph,
      gridSize: 1,
      elementView: ElementView
    });
    graph.addCells([this.getShape(6), this.getShape(7)]);
    let allCells = graph.getCells();
    for (let i = 0; i < allCells.length; i++) {
      allCells[i].attributes.link = true;
    }
    this.addLeftPaperEvent(paper);  // 添加paper事件
    // 线
    let graph1 = new joint.dia.Graph();        // 生成画板
    let paper1 = new joint.dia.Paper({       // 生成画布
      el: $('#line'),
      width: 120,
      height: 60,
      model: graph1,
      gridSize: 1,
      linkView: LinkView
    });
    // this.getLine(paper1);
    // console.log(paper1);
    // console.log(this.getLine(paper1));
    graph1.addCells([this.getShape(8)]);
    // console.log(graph1.getCells());
    this.addLeftPaperEvent(paper1);  // 添加paper事件
    return this;
  },
  initCenterPaper() {
    let width = $('.tool_wrap').width();
    if (this.options.basic_figure) {
      width -= 125;
    }
    if (this.options.add_attributes) {
      width -= 275;
    }
    if (this.options.gallery.length !== 0) {
      width -= 8;
    }
    let that = this;
    // let ElementView = this.getLeftElementView();     // 初始化元素样式
    this.centerGraph = new joint.dia.Graph();        // 生成画板
    this.centerGraph.on('change', function (cell) {
      let id = cell.id;
      that.angle[id] = cell.attributes.angle;
      // if (parseInt(cell.attributes.layer) === 0) {
      //   for (let i = 0; i < that.svg.length; i++) {
      //     if (that.svg[i].id === cell.id) {
      //       that.svg.splice(i, 1, cell.attributes);
      //     }
      //   }
      // }
    });
    this.centerGraph.on('add', function (cell) {
      that.angle[cell.id] = cell.attributes.angle;
      that.getCenterGraphCells();
      if (that.options.layer) {
        cell.attributes.layer = that.currentLayer;
        let svg = [];
        for (let j = 0; j < that.svg.length; j++) {
          svg.push(that.svg[j].id);
        }
        if (!svg.includes(cell.id)) {
          that.svg.push(cell.attributes);
        }
        let flag = true;
        for (let i = 0; i < $('.cell').length; i++) {
          if ($('.cell').eq(i).attr('data-id') === cell.id && parseInt($('.cell').eq(i).parent().parent().prev().attr('data-layer')) === that.currentLayer) {
            flag = false;
          }
        }
        if (flag) {
          $('.secondaryLayer').eq(that.currentLayer).append('<li><span class="cell" data-id="' + cell.id + '">' + cell.attributes.defaultName + '</span></li>');
        }
        // console.log(that.svg);
      }
      if (that.options.action_buttons) {
        that.changeClassName([{new: 'clear_paper', old: 'clear_disabled'}]);
      }
    });
    this.centerGraph.on('remove', function (cell) {
      let id = cell.id;
      delete that.angle[id];
      that.getCenterGraphCells();
    });
    this.centerPaper = new joint.dia.Paper({       // 生成画布
      el: $('#display_box'),
      width: width,
      height: this.options.action_buttons ? $('.tool_panel').outerHeight() - 55 : $('.tool_panel').outerHeight(),
      model: this.centerGraph,
      gridSize: 1,
      restrictTranslate: true, // 不超出paper边框
      padding: 5,
      highlighting: {
        'default': {
          name: 'stroke',
          options: {
            attrs: {
              'stroke-width': 1,
              stroke: '#1ABC9C',
              'stroke-dasharray': '2, 5'
            }
          }
        }
      },
      interactive: !this.options.move_figure ? {elementMove: false} : true // false不可移动
    });
    if (this.options.thumbnail) {
      let paperSmall = new joint.dia.Paper({
        el: $('.thumbnail'),
        width: 320,
        height: 155,
        model: this.centerGraph,
        gridSize: 1
      });
      paperSmall.scale(0.5);
      paperSmall.$el.css('pointer-events', 'none');
    }
    this.addCenterPaperEvent(this.centerPaper);
    // this.centerPaper.drawBackground({
    //   color: 'red'
    // });
    return this;
  },
  getCenterGraphCells() {
    if (!this.options.add_attributes) {
      return false;
    }
    let options = [];
    for (let i = 0; i < this.centerGraph.getCells().length; i++) {
      options.push(this.centerGraph.getCells()[i].attributes.defaultName);
    }
    $('.choose_figure').empty();
    for (let j = 0; j < options.length; j++) {
      $('.choose_figure').append(`<option>` + options[j] + `</option>`);
    }
  },
  /**
   *根据序号获取图形
   *index   序号
   *addnew   true 用于右侧新增样式
   *
   */
  getShape(index) {
    let cell;
    if (index === 1) {
      cell = this.getPolygon(...[25, 30, '', '', 70, 60, 3]);
    } else if (index === 2) {
      cell = this.getPolygon(...[25, 100, '', '', 70, 60, 5]);
    } else if (index === 3) {
      cell = this.getPolygon(...[25, 180, '', '', 70, 60, 6]);
    } else if (index === 4) {
      cell = this.getRect(...[30, 255, '', '', 60, 60, 0]);
    } else if (index === 5) {
      cell = this.getCircle(...[30, 325, '', '', 60, 60, 0]);
    } else if (index === 6) {
      cell = this.getCircle(...[25, 30, '', '', 60, 60, '2,5']);
    } else if (index === 7) {
      cell = this.getRect(...[25, 100, '', '', 60, 60, '2,5']);
    } else if (index === 8) {
      cell = this.getLink(10, 25, 110, 25, '#31d0c6', 'M 10 0 L 0 5 L 10 10 z', '#fe854f', 'M 10 0 L 0 5 L 10 10 z', '#222138', 1, '', '#7c68fc', '');
    }
    return cell;
  },
  addLeftPaperEvent(paper) {
    // 给所有左侧元素添加点击事件
    let that = this;
    paper.on('cell:click', function (cellView, evt, x, y) {
      // console.log(cellView);
      // 判断是否为线段
      // let linkP = cellView.model.clone();
      if (cellView.model.attributes.type === 'link') {
        // console.log(linkP);
        that.centerGraph.addCells(that.setState(10, 10, ''));
      } else {
        // 添加中间画图板内容通过clone()
        let role = that.judgeRole(cellView);
        if (JSON.stringify(role) === '{}') {
          let clone = cellView.model.clone();
          console.log(clone);
          // 复制时z也是一样，要重新修复
          if (clone.attributes.hasOwnProperty('link') && clone.attributes.link) {
            clone.attributes['defaultName'] = '链接' + (that.centerGraph.getCells().length + 1);
          } else {
            clone.attributes['defaultName'] = '图形' + (that.centerGraph.getCells().length + 1);
          }
          clone.set('z', that.centerGraph.getCells().length + 1);
          // 判断是否被线段
          if (clone.attributes.type !== 'link') {
            clone.position(10, 10);
          }
          that.centerGraph.addCells(clone);
          if (clone.attributes.hasOwnProperty('equipId')) {
            // 判断是每个设备的终极父级图形
            let uuid = that.snUuid('device');
            clone.attributes.uuid = uuid;
            that.store.commit('changeEquipments', {
              'id': clone.attributes.equipId,
              'uuid': uuid,
              'add': true
            });
          }
          // if (that.options.layer) {
          //   that.addSvg(clone);
          // }
        } else {
          let clone = role.parent.clone({deep: true});
          that.centerGraph.addCells(clone);
          // let allCells = that.getAllCells(cellView);
          // let size = [];
          let getBorderXY = that.getBorder(that.centerPaper.findViewByModel(clone[0]), that.centerPaper);
          let minX = getBorderXY.min_x;
          let minY = getBorderXY.min_y;
          // for (let i = 0; i < allCells.length; i++) {
          //   size.push(that.size[allCells[i].id]);
          // }
          // clone[0].resize(size[0].width, size[0].height);
          for (let i = 0; i < clone.length; i++) {
            clone[i].set('z', that.centerGraph.getCells().length + i + 1);
            if (clone[i].attributes.hasOwnProperty('link') && clone[i].attributes.link) {
              clone[i].attributes['defaultName'] = '链接' + (that.centerGraph.getCells().length + 1);
            } else {
              clone[i].attributes['defaultName'] = '图形' + (that.centerGraph.getCells().length + 1);
            }
            if (clone[i].attributes.hasOwnProperty('equipId')) {
              console.log(11111111111111);
              // 判断是每个设备的终极父级图形
              let uuid = that.snUuid('device');
              clone[i].attributes.uuid = uuid;
              that.store.commit('changeEquipments', {
                'id': clone[i].attributes.equipId,
                'uuid': uuid,
                'add': true
              });
            }
            // clone[i].resize(size[i].width, size[i].height);
            // clone[i].position(size[i].disX + clone[0].position().x, size[i].disY + clone[0].position().y);
          }
          clone[0].position(clone[0].position().x - minX + 10, clone[0].position().y - minY + 10, {deep: true});
        }
      }
    });
  },
  // 中间画板元素事件
  addCenterPaperEvent(paper) {
    // 组合时选中框的起始点和终点坐标
    let [that, intervalTimer, sx, sy, ex, ey] = [this];
    // 单击画布空白部分时
    paper.on('blank:pointerdown', function(evt, x, y) {
      if (that.options.gallery.length !== 0) {
        that.store.commit('changeEquipmentId', '');
      }
      // Unhighlight all cells.
      that.unHighLight();
      // 隐藏外加按钮
      that.hideBtn();
      // $('#display_box').on('blur', '#toolTip input', function () {
      //   if ($(this).val().trim()) {
      //     that.hover.model.attributes.defaultName = $(this).val().trim();
      //     $(this).addClass('hidden').prev().text($(this).val().trim()).attr('title', $(this).val().trim()).removeClass('hidden');
      //     that.getCenterGraphCells();
      //   }
      // });
      sx = x;
      sy = y;
      // 生成选中框
      $(document).off('mousemove').on('mousemove', function (event) {
        // 控制坐标在画布范围内
        let pageXY = that.paperRange(event.pageX, event.pageY);
        let minX = $('#display_box').offset().left;
        let minY = $('#display_box').offset().top;
        if ($('.moving_box')[0]) {
          $('.moving_box').css({
            'left': Math.min(pageXY.px - minX, sx) + 'px',
            'top': Math.min(pageXY.py - minY, sy) + 'px',
            'width': Math.abs(pageXY.px - minX - sx) + 'px',
            'height': Math.abs(pageXY.py - minY - sy) + 'px',
            'display': 'block'
          });
        } else {
          $('#display_box').append('<div class="moving_box"></div>');
          $('.moving_box').css({
            'left': sx + 'px',
            'top': sy + 'px',
            'display': 'block'
          });
        }
      });
    });
    paper.on('blank:pointerup', function(evt, x, y) {
      $(document).off('mousemove');
      $('.moving_box').hide();
      ex = x;
      ey = y;
      // 排除一开始不是点击在画布的空白地方的情况, sx,sy是undefined
      if (typeof sx === 'undefined' || typeof sy === 'undefined') {
        return;
      }
      // 获得最大最小x,y
      let maxX = ex > sx ? ex : sx;
      let maxY = ey > sy ? ey : sy;
      let minX = ex > sx ? sx : ex;
      let minY = ey > sy ? sy : ey;
      that.cells = [];
      // 将在鼠标范围内的cell push进数组中，必须包含整个cell
      for (let i = 0, len = that.centerGraph.getCells().length; i < len; i++) {
        let width = that.centerGraph.getCells()[i].getBBox().width;
        let height = that.centerGraph.getCells()[i].getBBox().height;
        let x = that.centerGraph.getCells()[i].getBBox().x;
        let y = that.centerGraph.getCells()[i].getBBox().y;
        if ((x >= minX) && (x + width <= maxX) && (y >= minY) && (y + height <= maxY)) {
          // 判断这个cell是否为父cell or 子cell,或者只是单个cell
          let role = that.judgeRole(that.centerPaper.findViewByModel(that.centerGraph.getCells()[i]));
          if (JSON.stringify(role) === '{}') {
            if (!that.cells.includes(that.centerGraph.getCells()[i])) {
              that.cells.push(that.centerGraph.getCells()[i]);
              // that.highlightedCellViews.push(that.centerPaper.findViewByModel(that.centerGraph.getCells()[i]));
              // that.centerPaper.findViewByModel(that.centerGraph.getCells()[i]).highlight();
            }
          } else {
            // 不是单个cell的话找到该cell的终极祖先元素，然后把祖先元素本身和祖先元素的所有子元素全部push
            if (!that.cells.includes(role.parent)) {
              that.cells.push(role.parent);
              // that.highlightedCellViews.push(that.centerPaper.findViewByModel(role.parent));
              // that.centerPaper.findViewByModel(role.parent).highlight();
            }
            let allChilds = role.parent.getEmbeddedCells({deep: true});
            for (let j = 0; j < allChilds.length; j++) {
              if (!that.cells.includes(allChilds[j])) {
                that.cells.push(allChilds[j]);
                // that.highlightedCellViews.push(that.centerPaper.findViewByModel(allChilds[j]));
                // that.centerPaper.findViewByModel(allChilds[j]).highlight();
              }
            }
          }
        }
      }
      // console.log(cells);
      if (that.cells.length !== 0) {
        for (let i = 0; i < that.cells.length; i++) {
          that.centerPaper.findViewByModel(that.cells[i]).highlight();
        }
        that.changeClassName([{new: 'group_figure', old: 'group_disabled'}, {new: 'ungroup_figure', old: 'ungroup_disabled'}]);
      }
      [ex, ey, sy, sx] = [];
    });
    // 双击事件
    paper.on('cell:pointerdblclick', function (cellView) {
      if (cellView.model.attributes.hasOwnProperty('link') && cellView.model.attributes.link) {
        clearTimeout(intervalTimer);
        if (that.options.double_click === true) {
          that.doubleClick();
        }
      }
    });
    paper.on('cell:pointerdown', function(cellView, evt, x, y) {
      console.log(cellView);
      // 判断是否为线段
      // let linkP = cellView.model.clone();
      if (cellView.model.attributes.type === 'fsa.State' || cellView.model.attributes.type === 'fsa.Arrow') {
        // console.log(linkP);
        if (cellView.model.attributes.type === 'fsa.State') {
          that.loadLinkBtn(cellView);
        }
      } else {
        // 权限控制，其他层不能对第0层的图形进行操作
        if (that.options.layer && that.currentLayer !== 0) {
          if (cellView.model.attributes.layer === 0) {
            return false;
          }
        }
        clearTimeout(intervalTimer); // 取消上次延时未执行的方法
        intervalTimer = setTimeout(function () {
          if (that.options.single_click === true) {
            that.singleClick(cellView);
          }
        }, 300);
        // 判断元素是否为同一个
        // that.idDown = cellView.id;
        $('#toolTip').hide();
        // if (that.idUp !== that.idDown) { // 判断点击的是否为当前view
        //   if ($('#functionBtn').length === 0 && that.options.move_figure) {
        //     that.loadBtn(cellView);
        //   } else {
        //     that.creatWrapper(cellView, that.centerPaper);
        //   }
        // }
        if ($('#functionBtn').length === 0 && that.options.move_figure) {
          that.loadBtn(cellView);
        } else {
          that.creatWrapper(cellView, that.centerPaper);
        }
        that.changeClassName([{new: 'front_figure', old: 'front_disabled'}, {new: 'back_figure', old: 'back_disabled'}]);
        // 改变当前点击的设备的id
        if (cellView.model.attributes.hasOwnProperty('equipId')) {
          that.store.commit('changeEquipmentId', cellView.model.attributes.uuid);
        }
        that.unHighLight();
        let parent = cellView.model.getAncestors()[cellView.model.getAncestors().length - 1];
        if (parent) {
          // 取消子元素的移动
          cellView.pointerup(evt);
          // 将当前被拖动的元素替换为父元素
          that.centerPaper.sourceView = that.centerPaper.findViewByModel(parent);
          // 获取父元素的位置
          let localPoint = that.centerPaper.snapToGrid({ x: evt.clientX, y: evt.clientY });
          that.centerPaper.findViewByModel(parent).pointerdown(evt, localPoint.x, localPoint.y);
        }
        // 点击cell右侧属性面板显示对应的数据
        // cell类型
        let type = cellView.model.get('type').split('.')[1].toLowerCase();
        $('#font-size').val(cellView.model.attr('text/font-size'));
        // 边框宽度
        $('#outline-thickness').val(parseInt(cellView.model.attr('' + type + '/stroke-width')));
        $('#text-content').val(cellView.model.attr('text/text'));
        if (cellView.model.attr('text/font-weight') === '300') {
          $('#font-sickness').val(1);
        } else if (cellView.model.attr('text/font-weight') === 'normal') {
          $('#font-sickness').val(2);
        } else {
          $('#font-sickness').val(3);
        }
        // 边框类型
        if (cellView.model.attr('' + type + '/stroke-dasharray') === 0) {
          $('#outline-styles').val(1);
        } else if (cellView.model.attr('' + type + '/stroke-dasharray') === '2,5') {
          $('#outline-styles').val(2);
        } else {
          $('#outline-styles').val(3);
        }

        /* if(cellView.model.attr('text/font-family') == 'Alegreya Sans'){
         $('#font-family').val(1);
         } else if(cellView.model.attr('text/font-family') == 'Averia Libre'){
         $('#font-family').val(2);
         } else {
         $('#font-family').val(3);
         } */
        // 字体粗细
        if (cellView.model.attr('text/font-weight') === '300') {
          $('#font-sickness').val(1);
        } else if (cellView.model.attr('text/font-weight') === 'normal') {
          $('#font-sickness').val(2);
        } else {
          $('#font-sickness').val(3);
        }
        that.view = cellView;
        that.propertyPane(cellView);
      }
    });
    paper.on('cell:pointermove', function(cellView) {
      // 权限控制，其他层不能对第0层的图形进行操作
      if (that.options.layer && that.currentLayer !== 0) {
        if (cellView.model.attributes.layer === 0) {
          return false;
        }
      }
      if (that.options.refer_line) {
        let pos = that.creatWrapper(cellView, that.centerPaper);
        let [minX, maxX, minY, maxY] = [pos.min_x, pos.max_x, pos.min_y, pos.max_y];
        let cells = that.centerGraph.getCells();
        // 排除当前cell和其后代元素
        let result = cells.filter(function (cell) {
          return cell.id !== cellView.model.id && !cell.isEmbeddedIn(cellView.model);
        });
        let repeatParent = [];
        for (let i = 0; i < result.length; i++) {
          repeatParent.push(that.getParent(result[i]).id);
        }
        // 获取非当前点击元素的各个parent
        let parent = Array.from(new Set(repeatParent));
        let otherPos = [];
        // 获取非当前点击元素的最大最小x,y
        for (let i = 0; i < parent.length; i++) {
          let sPos = that.getBorder(that.centerPaper.findViewByModel(that.centerGraph.getCell(parent[i])), that.centerPaper);
          otherPos.push({min_x: sPos.min_x, max_x: sPos.max_x, min_y: sPos.min_y, max_y: sPos.max_y});
        }
        for (let i = 0; i < otherPos.length; i++) {
          // 左边
          if (Math.abs(otherPos[i].min_x - minX) < 2 || Math.abs(otherPos[i].min_x - maxX) < 2) {
            that.generateLine('v', $('#display_box').height(), otherPos[i].min_x);
          }
          // 右边
          if (Math.abs(otherPos[i].max_x - minX) < 2 || Math.abs(otherPos[i].max_x - maxX) < 2) {
            that.generateLine('v', $('#display_box').height(), otherPos[i].max_x);
          }
          // 上边
          if (Math.abs(otherPos[i].min_y - minY) < 2 || Math.abs(otherPos[i].min_y - maxY) < 2) {
            that.generateLine('h', $('#display_box').width(), otherPos[i].min_y);
          }
          // 下边
          if (Math.abs(otherPos[i].max_y - minY) < 2 || Math.abs(otherPos[i].max_y - maxY) < 2) {
            that.generateLine('h', $('#display_box').width(), otherPos[i].max_y);
          }
        }
      } else {
        that.creatWrapper(cellView, that.centerPaper);
      }
    });
    paper.on('cell:pointerup', function(cellView) {
      // that.idUp = cellView.id;
      $('.refer_line_v').hide();
      $('.refer_line_h').hide();
    });
    paper.on('cell:contextmenu', function (cellView, evt, x, y) {
      // 判断是否为线段
      // let linkP = cellView.model.clone();
      if (cellView.model.attributes.type === 'fsa.State' || cellView.model.attributes.type === 'fsa.Arrow') {
        // console.log(linkP);
        // 关闭移动属性
        that.centerPaper.setInteractivity(function (cellView) {
          return false;// true为开启，false
        });
      } else {
        $('#toolTip').css({
          'left': cellView.getBBox().origin().x + 'px',
          'top': (cellView.model.getBBox().origin().y - 50) + 'px'
        });
        that.hover = cellView;
        $('#toolTip').show().empty().append('<p title="' + cellView.model.attributes.defaultName + '">' + cellView.model.attributes.defaultName + '</p><input type="text" class="hidden" placeholder="' + cellView.model.attributes.defaultName + '">');
      }
    });
    // paper.on('cell:mouseenter', function (cellView) {
    //   $('#toolTip').css({
    //     'left': cellView.getBBox().origin().x + 'px',
    //     'top': (cellView.getBBox().origin().y - 50) + 'px'
    //   });
    //   $('#toolTip').show().empty().append('<p title="' + cellView.model.attributes.defaultName + '">' + cellView.model.attributes.defaultName + '</p><input type="text" class="hidden" placeholder="' + cellView.model.attributes.defaultName + '">');
    // });
    // paper.on('cell:mouseleave', function (cellView) {
    //   that.hover = cellView;
    // });
  },
  generateLine(type, param1, param2) {
    // 生成参考线
    if (type === 'v') {
      if ($('.refer_line_v')[0]) {
        $('.refer_line_v').css({
          'display': 'block',
          'height': param1,
          'left': param2
        });
      } else {
        $('#display_box').append('<div class="refer_line_v"></div>');
        $('.refer_line_v').css({
          'display': 'block',
          'height': param1,
          'left': param2
        });
      }
    } else {
      if ($('.refer_line_h')[0]) {
        $('.refer_line_h').css({
          'display': 'block',
          'width': param1,
          'top': param2
        });
      } else {
        $('#display_box').append('<div class="refer_line_h"></div>');
        $('.refer_line_h').css({
          'display': 'block',
          'width': param1,
          'top': param2
        });
      }
    }
  },
  singleClick(cellView) {
    if ($('#iframe').length === 0) {
      $('body').append(`<iframe src="http://www.runoob.com" width="400" height="200" id="iframe">
        <p>您的浏览器不支持iframe标签。</p>
      </iframe><div class="hideBtn"><i class="iconfont">&#xe632;</i></div>`);
    } else {
      $('#iframe').show();
      $('.hideBtn').show();
    }
    $('#iframe').css({
      'left': cellView.model.position().x + cellView.model.size().width + $('#display_box').offset().left,
      'top': cellView.model.position().y + cellView.model.size().height + $('#display_box').offset().top
    });
    $('.hideBtn').css({
      'left': cellView.model.position().x + cellView.model.size().width + $('#display_box').offset().left + 400,
      'top': cellView.model.position().y + cellView.model.size().height + $('#display_box').offset().top - 20
    });
    $('.hideBtn').on('click', function () {
      $('#iframe').hide();
      $(this).hide();
    });
  },
  doubleClick() {
    // 链接图形双击出现链接编辑弹框
    console.log('double');
    if (this.store) {
      this.store.commit('changeLinkAttr', {
        'link': true
      });
    }
  },
  arrEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      // let id1 = [], id2 = [];
      let [id1, id2] = [[], []];
      for (let i = 0; i < arr1.length; i++) {
        id1.push(arr1[i].id);
      }
      for (let j = 0; j < arr2.length; j++) {
        id2.push(arr2[j].id);
      }
      for (let k = 0; k < id2.length; k++) {
        if (!id1.includes(id2[k])) {
          return false;
        }
      }
      for (let m = 0; m < id1.length; m++) {
        if (!id2.includes(id1[m])) {
          return false;
        }
      }
    }
    return true;
  },
  /* getCells获取到的cell顺序是根据z,z越小，越早获取到
   第一次把获取到的第一个cell作为父cell,{parent: cell[0].id, childs: []},
   多次组合的话判断第一个cell是否有parent，如果没有说明该cell是单个cell，或者终极祖先cell，
   把他作为父cell,如果有parent的话，把该cell的终极祖先cell作为父cell,并且embed之前还要把父cell
   的所有子cell全部排除，防止再次embed,并且排除其他不相关cell的子cell，防止embed从属关系错乱，剩下的
   则是此次要embed的cell */
  embed() {
    // var copyCell = cells.slice(0);
    if (this.cells.length === 0) {
      alert('未选中任何元素');
      return;
    }
    if (this.options.layer && this.currentLayer !== 0) {
      // 如果选中的图形有第0层的图形，则报错
      for (let i = 0; i < this.cells.length; i++) {
        if (this.cells[i].attributes.layer === 0) {
          alert('不能操作第0层的图形');
          return;
        }
      }
    }
    // 取消元素高亮
    this.unHighLight();
    if (this.cells.length === 1) {
      alert('只选中了一个元素，无法组合');
      return;
    }
    let parent = this.getParent(this.cells[0]);
    /* let ids = [];
    for (let j = 0; j < this.groups.length; j++) {
      ids.push(this.groups[j].parent);
    }
    if (!ids.includes(parent.id) && parent.getEmbeddedCells({deep: true}).length !== 0) {
      alert('该图形是组合过的模板图形');
      return;
    } */
    let newCells = [];
    for (let j = 0; j < this.cells.length; j++) {
      if (this.cells[j].id === parent.id) {
        continue;
      }
      newCells.push(this.cells[j]);
    }
    // 查找groups中的数据，判断其中所有的cell的id是否相同判断是否已经组合过
    for (let k = this.groups.length - 1; k >= 0; k--) {
      if (this.groups[k].parent === parent.id) {
        if (this.arrEquals(this.groups[k].childs, newCells)) {
          alert('已经组合过');
          return;
        }
      }
    }
    for (let i = 0; i < this.cells.length; i++) {
      this.initialAngle[this.cells[i].id] = this.cells[i].attributes.angle;
    }
    // 删除parent下的所有子cell
    let allChilds = parent.getEmbeddedCells({deep: true});
    if (allChilds) {
      for (let j = 0; j < allChilds.length; j++) {
        if (this.cells.includes(allChilds[j])) {
          delete this.cells[this.cells.indexOf(allChilds[j])];
        }
      }
    }
    if (this.cells.length > 1) {
      this.groups.push({parent: parent.id, childs: []});
      for (let i = 0; i < this.cells.length; i++) {
        // 如果剩下的元素有祖先元素，删除其本身，直接embed该祖先元素
        if (this.cells[i]) {
          if (this.cells[i].getAncestors().length !== 0) {
            delete this.cells[i];
          }
        }
        if (this.cells[i]) {
          if (this.cells[i].id === parent.id) {
            continue;
          }
          parent.embed(this.cells[i]);
          this.groups[this.groups.length - 1].childs.push(this.cells[i]);
        }
      }
      // localStorage.setItem('groups', JSON.stringify(this.groups));
    }
    this.cells = [];
    console.log(this.groups);
  },
  /* 解绑是unembed获取选中的所有cell上的最后一步组合操作 */
  unembed() {
    this.unHighLight();
    if (this.options.layer && this.currentLayer !== 0) {
      // 如果选中的图形有第0层的图形，则报错
      for (let i = 0; i < this.cells.length; i++) {
        if (this.cells[i].attributes.layer === 0) {
          alert('不能操作第0层的图形');
          return;
        }
      }
    }
    // 要判断是否还能解绑，完全解绑后所有元素都没有祖先元素
    let count = 0;
    for (let m = 0; m < this.cells.length; m++) {
      if (this.cells[m].getAncestors().length === 0) {
        count++;
      }
    }
    if (count === this.cells.length) {
      alert('所有元素都已解绑！');
      return;
    }
    let parent = this.getParent(this.cells[0]);
    /* let ids = [];
    for (let j = 0; j < this.groups.length; j++) {
      ids.push(this.groups[j].parent);
    }
    if (!ids.includes(parent.id)) {
      alert('该图形是模板图形，不能解绑');
      return;
    } */
    // var copyCell = cells.slice(0);
    let index;
    let matches;
    // 获取最后一步操作的记录
    for (let i = this.groups.length - 1; i >= 0; i--) {
      if (this.groups[i].parent === parent.id) {
        index = i;
        matches = this.groups[i].childs;
        break;
      }
    }
    if (index !== undefined) {
      for (let l = 0; l < matches.length; l++) {
        parent.unembed(this.centerGraph.getCell(matches[l].id));
      }
      this.groups.splice(index, 1);
      // localStorage.setItem('groups', JSON.stringify(this.groups));
    }
    this.cells = [];
  },
  // 判断该cell的角色，单个cell，既是父cell,也是子cell,只是子cell,只是父cell
  judgeRole(cellView) {
    let parent = cellView.model.getAncestors()[cellView.model.getAncestors().length - 1];
    let child = cellView.model.getEmbeddedCells({deep: true});
    if (parent) {
      return {'parent': parent};
    } else {
      if (child.length !== 0) {
        return {'parent': cellView.model};
      } else {
        return {};
      }
    }
  },
  delSelf() {
    // 除删除cell之外，还要删除与之相关的groups中的数据（根据每个cell的父cell的id），localstorage中的数据，angle的数据
    console.log('delete');
    let parent = this.getParent(this.view.model);
    // let allCells = this.getAllCells(this.view);
    let ids = [];
    // this.allCellsId = [];
    let allChilds = parent.getEmbeddedCells({deep: true});
    for (let j = 0; j < allChilds.length; j++) {
      if (allChilds[j].getAncestors().length !== 0) {
        ids.push(allChilds[j].getAncestors()[0].id);
      }
      this.delSvg(allChilds[j].id);
    }
    for (let k = 0; k < this.groups.length; k++) {
      if (ids.includes(this.groups[k].parent)) {
        this.groups.splice(k--, 1);
      }
    }
    // for (let i = 0; i < allCells.length; i++) {
    //   allCellsId.push(allCells[i].id);
    // }
    // this.allCellsId = allCellsId;
    // console.log(this.allCellsId);
    // localStorage.setItem('groups', JSON.stringify(this.groups));
    if (parent.attributes.hasOwnProperty('equipId')) {
      this.store.commit('changeEquipments', {
        'id': parent.attributes.equipId,
        'uuid': parent.attributes.uuid,
        'add': false
      });
      if (parent.attributes.uuid === this.store.getters.getEquipmentUuid) {
        this.store.commit('changeEquipmentId', '');
      }
    }
    this.delSvg(parent.id);
    parent.remove();
    this.hideBtn();
  },
  delSvg(id) {
    // 删除图层对应数据
    if (this.options.layer) {
      $('.cell').each(function () {
        if ($(this).attr('data-id') === id) {
          $(this.remove());
        }
      });
      for (let i = 0; i < this.svg.length; i++) {
        if (this.svg[i].id === id) {
          this.svg.splice(i, 1);
        }
      }
    }
    if (this.centerGraph.getCells().length === 1) {
      this.changeClassName([{new: 'clear_disabled', old: 'clear_paper'}]);
    }
  },
  copySelf() {
    console.log('copy');
    // 获取所有cell如果组合过，则包含所有父cell和子cell
    let allCells = this.getAllCells(this.view);
    let clone = this.centerPaper.findViewByModel(allCells[0]).model.clone({deep: true});
    // clone[0].position(allCells[0].position().x + 50, allCells[0].position().y + 50, {deep: true});
    for (let i = 0; i < clone.length; i++) {
      clone[i].attributes['defaultName'] = '图形' + (this.centerGraph.getCells().length + i + 1);
    }
    this.centerGraph.addCells(clone);
    let apIds = [];// 所有被clone的有关cell的id
    let childsIndex = [];
    let nGroups = [];// 所有被clone的有关的groups中的数据
    for (let k = 0; k < allCells.length; k++) {
      apIds.push(allCells[k].id);
    }
    for (let n = 0; n < this.groups.length; n++) {
      if (apIds.includes(this.groups[n].parent)) {
        nGroups.push(this.groups[n]);
      }
    }
    // 因为clone和被clone的所有cells在数组中相对应的index相同，所以根据被clone的
    // cell的位置来写clone出来的位置
    for (let l = 0; l < nGroups.length; l++) {
      let parentIndex = apIds.indexOf(nGroups[l].parent);
      this.groups.push({parent: clone[parentIndex].id, childs: []});
      childsIndex.push([]);
      for (let m = 0; m < nGroups[l].childs.length; m++) {
        childsIndex[l].push(apIds.indexOf(nGroups[l].childs[m].id));
      }
    }

    let index = 0;
    for (let j = this.groups.length - childsIndex.length; j < this.groups.length; j++) {
      for (let i = 0; i < childsIndex[index].length; i++) {
        this.groups[j].childs.push(clone[childsIndex[index][i]]);
      }
      index++;
    }
    // localStorage.setItem('groups', JSON.stringify(this.groups));
    /* 因为通过clone()方法获得的元素没有angle属性所以要经过处理 */
    /* 如果被克隆的元素没有angle，可能是曾经克隆出来的元素或者创建的没有经过旋转的元素 */
    if (this.view.model.changed.angle === undefined) {
      /* 是曾经克隆出来的元素,其旋转角度存在angle对象中 */
      if (this.angle[this.view.model.id]) {
        for (let i = 0; i < clone.length; i++) {
          this.angle[clone[i].id] = this.angle[this.view.model.id];
        }
      } else {
        /* 是没有经过旋转的元素 */
        for (let i = 0; i < clone.length; i++) {
          this.angle[clone[i].id] = 0;
        }
      }
    } else {
      /* 如果被克隆的元素有angle */
      for (let i = 0; i < clone.length; i++) {
        this.angle[clone[i].id] = this.view.model.changed.angle;
      }
    }
  },
  rotateSelf(e) {
    let that = this;
    this.unHighLight();
    let allCells = this.getAllCells(this.view);
    // 右下角按钮在中间画布的位置
    let rx = $('#rotateSelf').offset().left - $('#display_box').offset().left;
    let ry = $('#rotateSelf').offset().top - $('#display_box').offset().top;
    // 鼠标在中间画布的位置
    let px;
    let py;
    // 已转角度
    let angled = [];
    for (let j = 0; j < allCells.length; j++) {
      // var angled = angle[view.model.id] ? angle[view.model.id] : 0;
      angled.push(that.angle[allCells[j].id] ? that.angle[allCells[j].id] : 0);
    }
    // 旋转角度等于（鼠标位置与中心点的角度angle2 - 按钮位置与中心点的角度angle1 + 已经转过的角度）
    $(document).off('mousemove').on('mousemove', function(event) {
      let oPos = that.creatWrapper(that.centerPaper.findViewByModel(allCells[0]), that.centerPaper);
      let ox = (oPos.max_x - oPos.min_x) / 2 + oPos.min_x;
      let oy = (oPos.max_y - oPos.min_y) / 2 + oPos.min_y;
      // console.log(view.getBBox());
      // 旋转中心在中间画布的位置
      px = event.pageX - $('#display_box').offset().left;
      py = event.pageY - $('#display_box').offset().top;
      let angle1 = Math.atan(((ry - oy) / (rx - ox))) * 180 / Math.PI;
      let angle2 = Math.atan(((py - oy) / (px - ox))) * 180 / Math.PI;
      /* 一四象限角度需要经过处理 */
      if (px > ox && py > oy) {
        angle2 = angle2 - 180;
      } else if (px > ox && py < oy) {
        angle2 = angle2 + 180;
      }
      for (let i = 0; i < allCells.length; i++) {
        /* 保存该元素的旋转角度 */
        that.angle[allCells[i].id] = angle2 - angle1 + angled[i];
        /* true表示不是对上一个角度的累加而是一个绝对角度 */
        // console.log(ox, oy);
        allCells[i].rotate(angle2 - angle1 + angled[i], true, {x: ox, y: oy});
        allCells[i].attr('text/transform', 'rotate(' + (angle1 - angle2 - angled[i]) + ')');
        // this.size[allCells[i].id] = {'width': allCells[i].size().width, 'height': allCells[i].size().height, 'disX': allCells[i].getBBox().origin().x - allCells[0].getBBox().origin().x, 'disY': allCells[i].getBBox().origin().y - allCells[0].getBBox().origin().y};
      }
    });
    $(document).on('mouseup', function(event) {
      $(document).off('mousemove');
    });
  },
  stretchSelf(e) {
    // console.log(this.cells);
    this.unHighLight();
    let that = this;
    let allCells = this.getAllCells(this.view);
    // 拉伸按钮位置
    let px = $(e).offset().left + 3;
    let py = $(e).offset().top + 3;
    // 根据元素id来判断元素方位，拉伸方式不同
    /* 0: 向左上角拉伸，
     1：向上拉伸，
     2：向右上角拉伸，
     3：向左拉伸，
     4：向右拉伸，
     5：向左下角拉伸，
     6：向下拉伸，
     7：向右下角拉伸 */
    // 元素高宽
    let [width, height, disX, disY] = [[], [], [], []];
    for (let i = 0; i < allCells.length; i++) {
      width.push(allCells[i].size().width);
      height.push(allCells[i].size().height);
      if (i === 0) {
        continue;
      }
      disX.push(allCells[i].getBBox().origin().x - allCells[0].getBBox().origin().x);
      disY.push(allCells[i].getBBox().origin().y - allCells[0].getBBox().origin().y);
    }
    /* 拉伸原理： 鼠标位置与当前拉伸按钮位置的差 + 元素的宽高即为拉伸后的宽高 */
    let id = parseInt($(e).attr('id').substr($(e).attr('id').length - 1));
    $(document).off('mousemove').on('mousemove', function(event) {
      // 放大宽高
      let [scaleX, scaleY] = [];
      /* 拉伸按钮id依次为
       0 1 2
       3   4
       5 6 7 */
      // scaleX
      // 控制鼠标在画布范围内
      let pageXY = that.paperRange(event.pageX, event.pageY);
      if (id === 0 || id === 3 || id === 5) {
        scaleX = px - pageXY.px;
      } else if (id === 2 || id === 4 || id === 7) {
        scaleX = pageXY.px - px;
      } else if (id === 1 || id === 6) {
        scaleX = 0;
      }
      // scaleY
      if (id === 0 || id === 1 || id === 2) {
        scaleY = py - pageXY.py;
      } else if (id === 5 || id === 6 || id === 7) {
        scaleY = pageXY.py - py;
      } else if (id === 3 || id === 4) {
        scaleY = 0;
      }
      // 设置最小变形后的高宽为20*20
      let first = that.minWidthAndHeight(width[0] + scaleX, height[0] + scaleY);
      allCells[0].resize(first.scaleX, first.scaleY, {direction: that.judgeDirection(id)});
      let [ratioX, ratioY] = [first.scaleX / width[0], first.scaleY / height[0]];
      for (let j = 1; j < allCells.length; j++) {
        allCells[j].resize(ratioX * width[j], ratioY * height[j], {direction: that.judgeDirection(id)});
        allCells[j].position(ratioX * disX[j - 1], ratioY * disY[j - 1], {parentRelative: true});
      }
      // 拉伸时只显示当前按钮
      $('.stretch-icon').hide();
      $('#stretchSelf' + id).show();
      that.creatWrapper(that.centerPaper.findViewByModel(allCells[0]), that.centerPaper);
    });
    // 鼠标松开解除mousemove事件
    $(document).on('mouseup', function(event) {
      $(document).off('mousemove');
      $('.stretch-icon').show();
    });
  },
  paperRange(x, y) {
    let [maxX, minX, maxY, minY] = [$('#display_box').offset().left + $('#display_box').width(), $('#display_box').offset().left, $('#display_box').offset().top + $('#display_box').height(), $('#display_box').offset().top];
    if (x <= minX) {
      x = minX;
    } else if (x >= maxX) {
      x = maxX;
    }
    if (y <= minY) {
      y = minY;
    } else if (y >= maxY) {
      y = maxY;
    }
    return {px: x, py: y};
  },
  judgeDirection(index) {
    if (index === 0) {
      return 'top-left';
    } else if (index === 1) {
      return 'top';
    } else if (index === 2) {
      return 'top-right';
    } else if (index === 3) {
      return 'left';
    } else if (index === 4 || index === 6 || index === 7) {
      return '';
    } else {
      return 'bottom-left';
    }
  },
  minWidthAndHeight(scaleX, scaleY) {
    if (scaleX <= 20) {
      scaleX = 20;
    }
    if (scaleY <= 20) {
      scaleY = 20;
    }
    return {scaleX: scaleX, scaleY: scaleY};
  },
  // 获取元素初始化样式,鼠标的事件
  getLeftElementView() {
    let ElementView = joint.dia.ElementView.extend({
      pointerdown: function () {
        this._click = true;
        // joint.dia.ElementView.prototype.pointerdown.apply(this, arguments);
      },
      pointermove: function(evt, x, y) { // 左侧画板元素能否移动
        // this._click = false;
        // joint.dia.ElementView.prototype.pointermove.apply(this, arguments);
      },
      pointerup: function (evt, x, y) {
        if (this._click) {
          // triggers an event on the paper and the element itself
          this.notify('cell:click', evt, x, y);
        } else {
          joint.dia.ElementView.prototype.pointerup.apply(this, arguments);
        }
      }
    });
    return ElementView;
  },
  // getImage(px, py, pwidth, pheight) {
  //   let cell = new joint.shapes.basic.Image({
  //     position: {
  //       x: px,
  //       y: py
  //     },
  //     size: {
  //       width: pwidth,
  //       height: pheight
  //     },
  //     attrs: {
  //       // attr SVG attr      prop- custom data
  //       image: {
  //         'xlink:href': 'url(http://localhost:8888/src/assets/img/logo.png)'
  //       }
  //     }
  //   });
  //   return cell;
  // },
  /**
   * 生成椭圆
   * px  x 坐标
   * py  y 坐标
   * pbackground   背景色
   * ptext  显示文本
   * pwidth 宽带
   * pheight 高度
   * prx    短轴值
   * pry    长轴值
   */
  /* getEllipse(px, py, pbackground, ptext, pwidth, pheight) {
   let cell = new joint.shapes.basic.Ellipse({
   position: {
   x: px,
   y: py
   },
   size: {
   width: pwidth,
   height: pheight
   },
   attrs: {
   // attr SVG attr      prop- custom data
   ellipse: {
   fill: pbackground,
   'stroke': '#8792c3',
   'stroke-width': 1,
   'stroke-dasharray': 0
   },
   text: {
   text: ptext,
   fill: 'black',
   'font-weight': 'normal'
   }
   }
   });
   return cell;
   }, */
  /**
   * 生成矩形
   * px  x 坐标
   * py  y 坐标
   * pbackground   背景色
   * ptext  显示文本
   * pwidth 宽带
   * pheight 高度
   */
  getRect(px, py, pbackground, ptext, pwidth, pheight, dasharray) {
    let cell = new joint.shapes.basic.Rect({
      position: {
        x: px,
        y: py
      },
      size: {
        width: pwidth,
        height: pheight
      },
      attrs: {
        // attr SVG attr      prop- custom data
        rect: {
          fill: pbackground,
          'stroke': '#8792c3',
          'stroke-width': 1,
          'stroke-dasharray': dasharray
        },
        text: {
          text: ptext,
          fill: 'black',
          'font-weight': 'normal'
        }
      }
    });
    return cell;
  },
  /**
   * 生成多边形
   * px  x 坐标
   * py  y 坐标
   * pbackground   背景色
   * ptext  显示文本
   * pwidth 宽带
   * pheight 高度
   */
  getPolygon (px, py, pbackground, ptext, pwidth, pheight, edges) {
    let points = '';
    if (edges === 3) {
      points = '50,0 0,70 100,70';
    } else if (edges === 5) {
      points = '35,0 70,25 55,60 15,60 0,25';
    } else if (edges === 6) {
      points = '15,0 55,0 70,30 55,60 15,60 0,30';
    } else {
      points = '0,35 70,30 60,35 0,30';
    }
    let cell = new joint.shapes.basic.Polygon({
      size: {
        width: pwidth,
        height: pheight
      },
      position: {
        x: px,
        y: py
      },
      attrs: {
        polygon: {
          points: points,
          fill: pbackground,
          'stroke': '#8792c3',
          'stroke-width': 1,
          'stroke-dasharray': 0
        },
        text: {
          text: ptext,
          fill: 'black',
          'font-weight': 'normal'
        }
      }
    });
    return cell;
  },
  // 画直线
  getLine(paper) {
    let line = joint.V('line', { x1: 20, y1: 30, x2: 100, y2: 30, stroke: '#8792c3' });
    joint.V(paper.viewport).append(line);
    console.log(joint.V(paper.viewport).append(line));
    // this.addLeftPaperEvent(paper);  // 添加paper事件
  },
  /**
   *获取圆
   *sx  开始x坐标
   *sy  开始y坐标
   *pwidth 宽带
   *pheight 高度
   *plabel  文字
   */
  getCircle(sx, sy, pbackground, ptext, pwidth, pheight, dasharray) {
    let cell = new joint.shapes.basic.Circle({
      size: { width: pwidth, height: pheight },
      position: { x: sx, y: sy },
      attrs: {
        circle: {stroke: '#8792c3', 'stroke-width': 1, 'stroke-dasharray': dasharray, fill: pbackground},
        text: {text: ptext, fill: 'black', 'font-size': 18, 'font-weight': 'normal'}
      }
    });
    return cell;
  },
  /* getCustom(sx, sy, pbackground, pwidth, pheight, plabel) {
   // 创建自定义矩形
   joint.shapes.basic.Rect = joint.shapes.basic.Generic.extend({
   markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/></g>',
   defaults: joint.util.deepSupplement({
   type: 'basic.Rect',
   attrs: {
   'rect': {fill: pbackground, stroke: '#8792c3', 'stroke-width': 1, 'stroke-dasharray': 0, 'follow-scale': true, width: 80, height: 40, 'font-weight': 'normal'},
   'text': {'font-size': 14, 'ref-x': 0.5, 'ref-y': 0.5, ref: 'rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black'}
   }
   }, joint.shapes.basic.Generic.prototype.defaults)
   });
   let custom = new joint.shapes.basic.Rect({  // 绘制元素
   position: {x: sx, y: sy},
   size: {width: pwidth, height: pheight},
   attrs: {
   text: {text: plabel}
   }
   });

   return custom;
   }, */
  // 清除
  clearPaper() {
    let cells = [];
    if (this.currentLayer === 0) {
      cells = this.centerGraph.getCells();
    } else {
      for (let i = 0; i < this.centerGraph.getCells().length; i++) {
        if (parseInt(this.centerGraph.getCells()[i].attributes.layer) !== 0) {
          cells.push(this.centerGraph.getCells()[i]);
        }
      }
    }
    for (let i = 0; i < cells.length; i++) {
      cells[i].remove();
      this.delSvg(cells[i].id);
    }
    this.unHighLight();
    this.hideBtn();
    this.groups = [];
    this.cells = [];
    // localStorage.setItem('groups', JSON.stringify(this.groups));
  },
// 设置z
  frontAndBack(e) {
    if (this.view) {
      let role = this.judgeRole(this.view);
      if ($(e).hasClass('front_figure')) {
        if (JSON.stringify(role) === '{}') {
          this.view.model.toFront();
        } else {
          role.parent.toFront({'deep': true});
        }
      } else if ($(e).hasClass('back_figure')) {
        if (JSON.stringify(role) === '{}') {
          this.view.model.toBack();
        } else {
          role.parent.toBack({'deep': true});
        }
      }
    }
  },
  // 生成设备库
  generateShapes() {
    // 先获取所有终极父级元素，得到每个设备的宽高,每个设备间距10
    $('#component').css({
      'height': this.options.gallery.length * 120
    });
    let parentId = [];
    for (let i = 0; i < this.options.gallery.length; i++) {
      let svgs = JSON.parse(this.options.gallery[i].svg);
      if (svgs.length === 1) {
        parentId.push(svgs[0].id);
        continue;
      }
      for (let j = 0; j < svgs.length; j++) {
        if (svgs[j].hasOwnProperty('embeds') && svgs[j].hasOwnProperty('embeds').length !== 0 && svgs[j].hasOwnProperty('parent') === false) {
          // 判断是每个设备的终极父级图形
          parentId.push(svgs[j].id);
        }
      }
    }
    // 如果组合图形宽高比大于100/100，以宽为主按比例缩小，否则以高为主缩小
    for (let k = 0; k < this.leftGraph.getCells().length; k++) {
      if (parentId.includes(this.leftGraph.getCells()[k].id)) {
        // 获取一个设备的所有图形
        let allCells = this.getAllCells(this.leftPaper.findViewByModel(this.leftGraph.getCells()[k]));
        // 获取设备的边界
        let border = this.getBorder(this.leftPaper.findViewByModel(this.leftGraph.getCells()[k]), this.leftPaper);
        let [maxX, minX, maxY, minY] = [border.max_x, border.min_x, border.max_y, border.min_y];
        let [disX, disY] = [[], []];
        for (let i = 1; i < allCells.length; i++) {
          disX.push(this.leftPaper.findViewByModel(allCells[i]).getBBox().origin().x - this.leftPaper.findViewByModel(allCells[0]).getBBox().origin().x);
          disY.push(this.leftPaper.findViewByModel(allCells[i]).getBBox().origin().y - this.leftPaper.findViewByModel(allCells[0]).getBBox().origin().y);
        }
        let ratio = 0;
        if ((maxX - minX) / (maxY - minY) >= 1) {
          // 以宽为主
          ratio = 100 / (maxX - minX);
        } else {
          // 以高为主
          ratio = 100 / (maxY - minY);
        }
        allCells[0].resize(ratio * allCells[0].size().width, ratio * allCells[0].size().height);
        for (let i = 1; i < allCells.length; i++) {
          allCells[i].resize(ratio * allCells[i].size().width, ratio * allCells[i].size().height);
        }
        // 缩小后的图形的边界
        let border1 = this.getBorder(this.leftPaper.findViewByModel(this.leftGraph.getCells()[k]), this.leftPaper);
        // (allCells[0].position().y - minY) * ratio + 10 + k * 100
        allCells[0].position(10 + (allCells[0].position().x - border1.min_x) * ratio, (120 - (border1.max_y - border1.min_y)) / 2 + (allCells[0].position().y - border1.min_y) * ratio + k * 120);
        for (let i = 1; i < allCells.length; i++) {
          allCells[i].position(ratio * disX[i - 1] + allCells[0].getBBox().origin().x, ratio * disY[i - 1] + allCells[0].getBBox().origin().y);
        }
      }
    }
  },
  /* generateShapes() {
   if (this.cells.length < 2) {
   alert('不是组合图形');
   return;
   }
   this.unHighLight();
   // 选中的不是一个组合
   let parent = this.getParent(this.cells[0]);
   let allChilds = parent.getEmbeddedCells({deep: true});
   let ids = [];
   for (let i = 0; i < allChilds.length; i++) {
   ids.push(allChilds[i].id);
   }
   for (let j = 0; j < this.cells.length; j++) {
   if (this.cells[j].id === parent.id) {
   continue;
   }
   if (!ids.includes(this.cells[j].id)) {
   alert('无法生成模板图形');
   return;
   }
   }
   // 是模板图形不能再次生成模板图形
   let gIds = [];
   for (let j = 0; j < this.groups.length; j++) {
   gIds.push(this.groups[j].parent);
   }
   if (!gIds.includes(parent.id)) {
   alert('该图形是模板图形，不能再次生成模板图形');
   return;
   }
   let clone = parent.clone({deep: true});
   let allCells = this.getAllCells(this.centerPaper.findViewByModel(parent));
   let [disX, disY] = [[], []];
   this.leftGraph.addCells(clone);
   let oPos = this.getBorder(this.leftPaper.findViewByModel(clone[0]), this.leftPaper);
   let ox = (oPos.max_x - oPos.min_x) / 2 + oPos.min_x;
   let oy = (oPos.max_y - oPos.min_y) / 2 + oPos.min_y;
   for (let i = 0; i < allCells.length; i++) {
   clone[i].rotate(this.initialAngle[allCells[i].id], true, {x: ox, y: oy});
   clone[i].attr('text/transform', 'rotate(' + (0 - this.initialAngle[allCells[i].id]) + ')');
   // this.size[clone[i].id] = {'width': clone[i].size().width, 'height': clone[i].size().height, 'disX': clone[i].getBBox().origin().x - clone[0].getBBox().origin().x, 'disY': clone[i].getBBox().origin().y - clone[0].getBBox().origin().y};
   if (i === 0) {
   continue;
   }
   disX.push(this.leftPaper.findViewByModel(clone[i]).getBBox().origin().x - this.leftPaper.findViewByModel(clone[0]).getBBox().origin().x);
   disY.push(this.leftPaper.findViewByModel(clone[i]).getBBox().origin().y - this.leftPaper.findViewByModel(clone[0]).getBBox().origin().y);
   }
   // 角度还原重新计算
   let oPos1 = this.getBorder(this.leftPaper.findViewByModel(clone[0]), this.leftPaper);
   let ratioX = 100 / (oPos1.max_x - oPos1.min_x);
   clone[0].resize(ratioX * clone[0].size().width, ratioX * clone[0].size().height);
   clone[0].position(20 + (clone[0].position().x - oPos1.min_x) * ratioX, $('#component').height() + (clone[0].position().y - oPos1.min_y) * ratioX);
   for (let i = 1; i < clone.length; i++) {
   clone[i].resize(ratioX * clone[i].size().width, ratioX * clone[i].size().height);
   clone[i].position(ratioX * disX[i - 1] + clone[0].getBBox().origin().x, ratioX * disY[i - 1] + clone[0].getBBox().origin().y);
   }
   for (let j = 0; j < clone.length; j++) {
   clone[j].set('z', this.leftGraph.getCells().length + j + 1);
   }
   let oPos2 = this.getBorder(this.leftPaper.findViewByModel(clone[0]), this.leftPaper);
   $('#component').css('height', ($('#component').height() + oPos2.max_y - oPos2.min_y + 20) + 'px');
   this.cells = [];
   }, */
// 获取元素的最大最小x,y
  getBorder(cellView, paper) {
    let childs = cellView.model.getEmbeddedCells({deep: true});
    let BBox = cellView.getBBox();
    let pointXArr = [BBox.corner().x, BBox.origin().x];
    let pointYArr = [BBox.corner().y, BBox.origin().y];
    for (let i = 0; i < childs.length; i++) {
      let childBBox = paper.findViewByModel(childs[i]).getBBox();
      pointXArr.splice(pointXArr.length, 0, childBBox.corner().x, childBBox.origin().x);
      pointYArr.splice(pointYArr.length, 0, childBBox.corner().y, childBBox.origin().y);
    }
    let extremeX = this.getExtreme(pointXArr);
    let extremeY = this.getExtreme(pointYArr);
    let maxX = extremeX.max;
    let minX = extremeX.min;
    let minY = extremeY.min;
    let maxY = extremeY.max;
    return {max_x: maxX, min_x: minX, max_y: maxY, min_y: minY};
  },
// 获取数组中的最大最小值
  getExtreme(arr) {
    return {max: Math.max(...arr), min: Math.min(...arr)};
  },
// 获取终极祖先cell
  getParent(cell) {
    return cell.getAncestors().length !== 0 ? cell.getAncestors()[cell.getAncestors().length - 1] : cell;
  },
// 根据当前view获取与之组合过的cell
  getAllCells(view) {
    let parent = view.model.getAncestors()[view.model.getAncestors().length - 1];
    let allCells = [];
    if (parent) {
      // 如果是子元素
      allCells = parent.getEmbeddedCells({deep: true});
      allCells.unshift(parent);
    } else {
      // 如果不是子元素
      allCells = view.model.getEmbeddedCells({deep: true});
      allCells.unshift(view.model);
    }
    return allCells;
  },

  unHighLight() {
    for (let i = 0; i < this.cells.length; i++) {
      this.centerPaper.findViewByModel(this.cells[i]).unhighlight();
    }
    this.changeClassName([{new: 'group_disabled', old: 'group_figure'}, {new: 'ungroup_disabled', old: 'ungroup_figure'}]);
  },
  creatWrapper(cellView, centerPaper) {
    let getBorderXY = this.getBorder(cellView, centerPaper);
    let maxX = getBorderXY.max_x;
    let minX = getBorderXY.min_x;
    let maxY = getBorderXY.max_y;
    let minY = getBorderXY.min_y;
    // 三个按钮定位
    let leftTop = {
      left: '-25px',
      top: '-25px'
    };
    let leftBottom = {
      left: '-25px',
      bottom: '-25px'
    };
    let rightTop = {
      right: '-25px',
      top: '-25px'
    };
    // 八个拉伸按钮定位
    let location = [
      {
        'left': '-3px',
        'top': '-3px',
        'cursor': 'nw-resize'
      },
      {
        'left': ((maxX - minX) / 2 - 3) + 'px',
        'top': '-3px',
        'cursor': 'n-resize'
      },
      {
        'right': '-3px',
        'top': '-3px',
        'cursor': 'ne-resize'
      },
      {
        'left': '-3px',
        'top': ((maxY - minY) / 2 - 3) + 'px',
        'cursor': 'w-resize'
      },
      {
        'right': '-3px',
        'top': ((maxY - minY) / 2 - 3) + 'px',
        'cursor': 'e-resize'
      },
      {
        'left': '-3px',
        'bottom': '-3px',
        'cursor': 'sw-resize'
      },
      {
        'left': ((maxX - minX) / 2 - 3) + 'px',
        'bottom': '-3px',
        'cursor': 's-resize'
      },
      {
        'right': '-3px',
        'bottom': '-3px',
        'cursor': 'se-resize'
      }
    ];
    for (let i = 0; i < 8; i++) {
      $('.stretch-icon').eq(i).css(location[i]);
    }
    $('.left_top').css(leftTop);

    $('.left_bottom').css(leftBottom);

    $('.right_top').css(rightTop);

    $('#functionBtn').css({
      'width': (maxX - minX) + 'px',
      'height': (maxY - minY) + 'px',
      'left': minX + 'px',
      'top': minY + 'px',
      'display': 'block'
    });
    $('#dragBtn').css({
      'width': (maxX - minX) + 'px',
      'height': (maxY - minY) + 'px',
      'left': minX + 'px',
      'top': minY + 'px',
      'display': 'block'
    });
    $('#labelBox').css({
      'width': (maxX - minX + 20) + 'px',
      'left': (minX - 15) + 'px',
      'top': (maxY + 25) + 'px',
      'display': 'block'
    });
    // $('#toolTip').css({
    //   'width': (maxX - minX - 10) + 'px',
    //   'left': minX + 'px',
    //   'top': (minY - 50) + 'px'
    // });
    // console.log(this.view);
    let angle = this.initialAngle[cellView.model.id] ? this.angle[cellView.model.id] - this.initialAngle[cellView.model.id] : this.angle[cellView.model.id];
    $('#labelBox').empty().append('宽：' + parseInt(maxX - minX) + '，高：' + parseInt(maxY - minY) + '，x：' + parseInt(minX) + '，y：' + parseInt(minY) + '，angle：' + parseInt(angle));
    // $('#toolTip').show().empty().append('<p title="' + cellView.model.attributes.defaultName + '">' + cellView.model.attributes.defaultName + '</p><input type="text" class="hidden" placeholder="' + cellView.model.attributes.defaultName + '">');
    return {max_x: maxX, min_x: minX, min_y: minY, max_y: maxY};
  },
  hideBtn () {
    // 隐藏图形外加按钮
    $('#functionBtn').hide();
    $('#dragBtn').hide();
    $('#labelBox').hide();
    $('#toolTip').hide();
    this.changeClassName([{new: 'front_disabled', old: 'front_figure'}, {new: 'back_disabled', old: 'back_figure'}]);
  },
  changeClassName(arr) {
    // 改变元素类名
    if (arr instanceof Array === true && arr.length !== 0) {
      for (let i = 0; i < arr.length; i++) {
        $('.' + arr[i].old).removeClass(arr[i].old).addClass(arr[i].new);
      }
    } else {
      console.log('参数不正确');
    }
  },
  snUuid(snName) {
    let s = [];
    // 32位uuid所使用的字符
    let hexDigits = '0123456789abcdef';
    // 用于截取8位uuid的混淆字符 这里使用26位
    let chars = ['a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5',
      '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
      'W', 'X', 'Y', 'Z'
    ];

    // 生成32位uuid
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = '-';
    // 全局替换-并使用26位字符数组截取生成8位uuid (16进制)
    let uuid = s.join('').replace(/-/g, '');
    let shortBuffer = [];

    for (let i = 0; i < 8; ++i) {
      let str = uuid.substr(i * 4, i * 4 + 4);
      let x = parseInt(str, 16);
      shortBuffer.push(chars[x % 0x3E]);
    }

    // 按照SN规则 name+timestamp+sn 构造finalSn
    let sn = shortBuffer.join('');
    let timestamp = new Date().getTime().toString();
    const finalSn = snName + timestamp + sn;

    return finalSn;
  },
  /**
   *定义连线
   *sx 开始x坐标
   *sy 开始y坐标
   *ex 结束x坐标
   *ey 结束y坐标
   *strokecolor 线条颜色
   *scolor 头部分填充颜色
   *sstyle 头部分样式
   *ecolor 尾部分填充颜色
   *estyle 尾部分样式
   *pstrokewidth  连线的粗
   *sstroke    头部边框颜色
   *estroke   尾部分的边框颜色
   */
  getLink(sx, sy, ex, ey, scolor, sstyle, ecolor, estyle, strokecolor, pstrokewidth, sstroke, estroke, plabel) {
    let link = new joint.dia.Link({
      source: { x: sx, y: sy },
      target: { x: ex, y: ey },
      attrs: {
        '.connection': {stroke: strokecolor, 'stroke-width': pstrokewidth, 'stroke-dasharray': 0},
        '.marker-source': {fill: scolor, stroke: sstroke, d: sstyle},
        '.marker-target': {fill: ecolor, stroke: estroke, d: estyle}
      },
      // 10, 25, 110, 25, #31d0c6, M 10 0 L 0 5 L 10 10 z, #fe854f, M 10 0 L 0 5 L 10 10 z, #222138, 1, none, #7c68fc, ''
      // '.connection': { stroke: '#222138' },
      // '.marker-source': { fill: '#31d0c6', stroke: 'none', d: 'M 10 0 L 0 5 L 10 10 z' },
      // '.marker-target': { fill: '#fe854f', stroke: '#7c68fc', d: 'M 10 0 L 0 5 L 10 10 z' }
      labels: [
        {position: 0.5, attrs: {text: {text: plabel}}}
      ]
    });
    return link;
  },
  // 获取线段初始化样式
  getLeftLinkView() {
    let LinkView = joint.dia.LinkView.extend({
      addVertex: function(evt, x, y) {},
      removeVertex: function(endType) {},
      pointerdown: function(evt, x, y) {
        this._click = true;
        joint.dia.ElementView.prototype.pointerdown.apply(this, arguments);
      },
      pointerup: function(evt, x, y) {
        if (this._click) {
          // triggers an event on the paper and the element itself
          this.notify('cell:click', evt, x, y);
        } else {
          joint.dia.ElementView.prototype.pointerup.apply(this, arguments);
        }
      }
    });
    return LinkView;
  },
  // 构筑点
  setState(x, y, label) {
    let cell = new joint.shapes.fsa.State({
      position: { x: x, y: y },
      size: { width: 15, height: 15 },
      attrs: {text: { text: label }}
    });
     // graph.addCell(cell);
    return cell;
  },
  // 构筑线
  setLink(source, target, label, vertices, TF) {
    console.log(source, target);
    let cell = new joint.shapes.fsa.Arrow({
      source: { id: source.id },
      target: { id: target.id },
      labels: [{ position: 0.5, attrs: { text: { text: label || '', 'font-weight': '' } } }],
      smooth: false || TF, // 控制线段能否有弧度的弯曲
      vertices: vertices || [],
      attrs: {
        '.connection': {
          stroke: '#7c68fc', // 线段颜色
          'stroke-width': 10, // 线段宽度
          // 'stroke-dasharray': '5 2' // 虚线
          'stroke-dasharray': '' // 实线
        },
        // '.marker-source': { stroke: '#7c68fc', fill: '#7c68fc', d: 'M24.316,5.318,9.833,13.682,9.833,5.5,5.5,5.5,5.5,25.5,9.833,25.5,9.833,17.318,24.316,25.682z' },
        // '.marker-target': { stroke: '#feb663', fill: '#feb663', d: 'M14.615,4.928c0.487-0.986,1.284-0.986,1.771,0l2.249,4.554c0.486,0.986,1.775,1.923,2.864,2.081l5.024,0.73c1.089,0.158,1.335,0.916,0.547,1.684l-3.636,3.544c-0.788,0.769-1.28,2.283-1.095,3.368l0.859,5.004c0.186,1.085-0.459,1.553-1.433,1.041l-4.495-2.363c-0.974-0.512-2.567-0.512-3.541,0l-4.495,2.363c-0.974,0.512-1.618,0.044-1.432-1.041l0.858-5.004c0.186-1.085-0.307-2.6-1.094-3.368L3.93,13.977c-0.788-0.768-0.542-1.525,0.547-1.684l5.026-0.73c1.088-0.158,2.377-1.095,2.864-2.081L14.615,4.928z' }
        '.marker-source': '', // 控制线段左侧图案
        '.marker-target': '' // 控制线段右侧图案
      }
    });
    // graph.addCell(cell);
    return cell;
  }
};
export default jointD;
/* function connect() {
 var socket = new SockJS('http://192.168.1.149:8080/gs-guide-websocket');
 stompClient = Stomp.over(socket);
 stompClient.connect({}, function (frame) {
 $("#connect").prop("disabled", true);
 console.log('Connected: ' + frame);
 stompClient.subscribe('/topic/greetings', function (greeting) {
 // showGreeting(JSON.parse(greeting.body).content);
 console.log(JSON.parse(greeting.body).content);
 if(view){

 }
 });
 });
 } */
