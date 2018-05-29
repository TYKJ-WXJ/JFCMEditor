import '../font/iconfont.css';
import '../css/joint.css';
import $ from 'jquery';
import joint from 'jointjs';
import Draggabilly from 'draggabilly';
/**
 * Created by 吴旭健 on 2017/11/29.
 */
let thatW;
const jointD = {
  init: function () {
    let obj = {
      svgZoom: '', // 缩放画布
      maxZoom: 1,
      paperZoom: '', // 实例区域画布比例
      centerGraph: null, // 中间画布
      centerPaper: null,
      leftGraph: null,
      leftPaper: null, // 左边图库
      view: null, // 当前点击的图形
      contextMenu: null, // 右击图形
      cells: [], // 矩形选中框的图形
      embedCells: [], // 要解除组合的图形
      options: { // 配置参数
        'width': 1100,
        'height': 660, // 整个模块高度
        'basic_attributes': true, // 设备基本属性
        'basic_figure': true, // 图库
        'action_buttons': true, // 清除，组合等按钮
        'add_attributes': true, // 增加设备属性
        'style_operation': true, // 样式面板
        'layer': false, // 图层
        'thumbnail': true, // 缩略图
        'figure_buttons': true, // 图形操作按钮
        'single_click': true, // 单击图形
        'double_click': true, // 双击图形
        'label': true, // 图形名称和基本属性
        'move_figure': true, // 是否可移动图形
        'gallery': [], // 所有设备数据
        'refer_line': false, // 参考线
        'isArea': false, // 是否是区域管理页面
        'scale': false
      },
      currentLayer: 0, // 当前图层
      svg: [], // 有图层的svg数据
      store: null, // 数据池
      z: 0, // 0表示toBack, 1表示toFront
      path: {value: false, count: 0, type: 'L'}, // 划线用
      drag: {value: false, index: 0}, // 曲线控制点
      currentEquip: null, // 当前点击的设备
      editorLink: {}, // 是否显示链接编辑
      equipList: {}, // 实例化设备列表
      initPaper(param) {
        // 参数错误判断
        for (let key in param.options) {
          if (this.options.hasOwnProperty(key)) { // 参数值错误检查
            if (key === 'height' && typeof this.options['height'] !== 'number') {
              alert('参数值错误');
              return;
            }
            if (key === 'width' && typeof this.options['width'] !== 'number') {
              alert('参数值错误');
              return;
            }
            if (key === 'gallery' && !(this.options['gallery'] instanceof Array)) {
              alert('参数值错误');
              return;
            }
            if (key !== 'height' && key !== 'width' && key !== 'gallery' && typeof this.options[key] !== 'boolean') {
              alert('参数值错误');
              return;
            }
            this.options[key] = param.options[key];
          }
        }
        let height = {h1: 0, h2: 0};
        $('.tool_wrap').css({
          'width': this.options.width - 5,
          'height': this.options.height - 10
        });
        // 设备基本属性
        if (this.options.basic_attributes) {
          height.h1 = this.options.height - $('.basic_attributes').outerHeight() - 10;
        } else {
          height.h1 = this.options.height - 10;
        }
        $('.tool_panel').css({
          'height': height.h1
        });
        // 判断是否有图库
        if (this.options.basic_figure) {
          $('.tool_panel').prepend(`
            <div class="basic_figure">
              <h3>图库</h3>
              <div id="component_box">
                <div>
                  <div id="component"></div>
                  <div id="link"></div>
                </div>
              </div>
            </div>
            <div class="tool_canvas"></div>
          `);
          if (!this.options.isArea) {
            $('.tool_canvas').css('overflow', 'hidden');
          }
          // 是区域不画线
          // if (!this.options.isArea) {
          $('#component_box > div').append('<div id="line"></div>');
          // }
          // 设置图库高度
          if (this.options.gallery.length === 0) { // 画设备
            height.h2 = $('.tool_panel').outerHeight() - 55;
          } else { // 画区
            height.h2 = this.options.height - 10;
            $('.basic_figure h3').remove();
          }
          $('#component_box').css({
            'height': height.h2
          });
        } else {
          $('.tool_panel').prepend(`
        <div class="tool_canvas"></div>`);
        }
        // 清除组合等操作
        if (this.options.action_buttons) {
          if (this.options.isArea) {
            $('.tool_canvas').append(`<div class="action_buttons">
        <div class="change_drawType" title="切换为鼠标"></div>
        <div class="change_drawSize" title="放大">放大</div>
        <div class="front_disabled" title="置于顶层"></div>
        <div class="back_disabled" title="置于底层"></div>
      </div>
      <div id="display_box"></div>`);
          } else {
            $('.tool_canvas').append(`<div class="action_buttons">
        <div class="change_drawType" title="切换为鼠标"></div>
        <div class="clear_disabled" title="清除画布"></div>
        <div class="group_disabled" title="合并图形"></div>
        <div class="ungroup_disabled" title="解除合并"></div>
        <div class="front_disabled" title="置于顶层"></div>
        <div class="back_disabled" title="置于底层"></div>
      </div>
      <div id="display_box"></div>`);
          }
      //     $('.tool_canvas').append(`<div class="action_buttons">
      //   <div class="change_drawType" title="切换为鼠标"></div>
      //   <div class="clear_disabled" title="清除画布"></div>
      //   <div class="group_disabled" title="合并图形"></div>
      //   <div class="ungroup_disabled" title="解除合并"></div>
      //   <div class="front_disabled" title="置于顶层"></div>
      //   <div class="back_disabled" title="置于底层"></div>
      // </div>
      // <div id="display_box"></div>`);
        } else {
          $('.tool_canvas').append(`
        <div id="display_box"></div>
      `);
        }
        // 设备比例尺
        if (this.options.scale) {
          $('.tool_canvas').append(`<div id="plottingScale">
        <!--<input type="range" id="scaleBtn" value="0.1" step="9.9" min="0.1" max="100">-->
        <input type="number" value="0.1" id="scaleBtn">
        <output id="scaleValue" name="x" for="scaleBtn">100px:0.1m</output>
        </div>`);
          $('#scaleBtn').on('input propertychange', {param: this}, this.changeScale);
        }
        // 画线时候的鼠标位置
        let dom = `<div id="position"style="position:absolute;left:0;bottom:92px;display:none">x: <span id="position_x"></span><br/>y: <span id="position_y"></span></div>`
        $('.tool_canvas').append(dom);
        // 样式面板和缩略图
        if (this.options.thumbnail || this.options.style_operation || this.options.layer) {
          $('.tool_wrap').append('<div class="tool_map_right"><i class="up_tool">收起</i><i class="drag" title="点我拖动"></i></div>');
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
                <!--<ul class="secondaryLayer"></ul>-->
              </li>
            </ul>
        </div>`);
            this.dealWithLayer();
          }
          // 收起样式面板
          $('.up_tool').on('click', function() {
            console.log(222)
            if ($('.inspector-container').css('display') === 'none') {
              $('.inspector-container').css('display', 'block')
            } else {
              $('.inspector-container').css('display', 'none')
            }
          })
        }
        this.initLeftPaper().initCenterPaper().loadPropertyPane();
      },
      changeScale(event) {
        let that = event.data.param;
        let scale = $('#scaleBtn').val();
        $('#scaleValue').val('100px:' + scale + 'm');
        that.svgZoom = '100px:' + scale + 'm';
      },
      dealWithLayer() {
        let that = this;
        // 添加图层
        $('.addLayer').on('click', function () {
          if ($('.layerTree li').length >= 5) {
            alert('最多只有5层');
            return false;
          } else {
            if (that.centerGraph.getCells().length > 0) {
              console.log($('.layerTree li').length)
              that.currentLayer = $('.layerTree li').length;
              if (that.getZeroLayerCell()) {
                $('.layerTree > li > span').removeClass('highlight');
                $('.layerTree').append(`<li>
            <span class="highlight" data-layer = ` + $('.layerTree li').length + `>第` + that.currentLayer + `层<i class="iconfont deleteLayer" style="float: right;">&#xe61e;</i></span>
            <!--<ul class="secondaryLayer"></ul>-->
          </li>`);
                that.setSvgView();
              } else {
                alert('第0层必须是单个图形或者组合图形');
                that.currentLayer -= 1;
              }
            } else {
              alert('请先绘制第0层的图形');
            }
          }
        });
        // 选中某个图层
        $('.layer').on('click', '.layerTree > li > span', function () {
          // console.log(that.currentLayer) // 上一层
          // console.log($(this).attr('data-layer'));// 当前层
          if (that.currentLayer !== parseInt($(this).attr('data-layer'))) {
            that.hideBtn(); // 隐藏选中按钮
            $('.layerTree > li > span').removeClass('highlight');
            that.currentLayer = parseInt($(this).attr('data-layer'));
            if (that.currentLayer !== 0) {
              if (that.getZeroLayerCell()) { // 是否为组合图形，是
                $(this).addClass('highlight');
                that.setSvgView();
              } else {
                alert('第0层必须是单个图形或者组合图形');
                $('span[data-layer="0"]').addClass('highlight');
                that.currentLayer = 0;
              }
            } else {
              $(this).addClass('highlight');
              that.setSvgView();
            }
          }
        });
        // 删除图层
        $('.layer').on('click', '.deleteLayer', function (event) {
          console.log('jinlaile')
          let layer = parseInt($(this).parent().attr('data-layer'));
          if (layer !== 0) {
            let nowLayer = joint.V(that.centerPaper.viewport).find('.layerNum' + that.currentLayer)[0];
            let [zeroLayer, otherLayer] = [[], []];
            if (nowLayer.children()) {
              for (let i = 0; i < nowLayer.children().length; i++) {
                let cell = that.centerGraph.getCell(nowLayer.children()[i].attr('model-id'));
                if (cell.attributes.layer === 0) {
                  zeroLayer.push(cell);
                } else {
                  otherLayer.push(cell);
                }
              }
            }
            if (zeroLayer.length !== 0) {
              let zeroParent = that.getParent(zeroLayer[0]);
              if (zeroParent) {
                zeroParent.remove();
              }
            }
            if (otherLayer.length !== 0) {
              let otherParent = that.getParent(otherLayer[0]);
              if (otherParent) {
                otherParent.remove();
              }
            }
            nowLayer.remove();
            that.currentLayer = layer - 1;
            $('span[data-layer="' + that.currentLayer + '"]').addClass('highlight');
            $(this).parent().parent().remove();
            that.setSvgView();
            event.stopPropagation();
          }
        });
      },
      // 判断第0层的图形是否组合在一起了
      getZeroLayerCell() {
        if (this.currentLayer !== 0) {
          let layerNum0 = joint.V(this.centerPaper.viewport).find('.layerNum0')[0];
          let cells = [];
          for (let i = 0; i < layerNum0.children().length; i++) {
            cells.push(this.centerGraph.getCell(layerNum0.children()[i].attr('model-id')));
          }
          if (cells.length === 1) {
            return true;
          } else {
            let count = 0;
            for (let i = 0; i < cells.length; i++) {
              if (cells[i].attributes.hasOwnProperty('parent') || cells[i].attributes.hasOwnProperty('embeds')) {
                count++;
              }
            }
            if (count === cells.length) {
              return true;
            }
          }
        }
      },
      // 切换图层， 添加，选中，删除中有用
      setSvgView() {
        // 添加图层
        if (this.currentLayer !== 0 && joint.V(this.centerPaper.viewport).find('.layerNum' + this.currentLayer).length === 0) {
          let vel = joint.V('<g class="layerNum layerNum' + this.currentLayer + '"></g>');
          joint.V(this.centerPaper.viewport).append(vel);
        }
        let layers = joint.V(this.centerPaper.viewport).find('.layerNum');
        for (let i = 0; i < layers.length; i++) {
          layers[i].addClass('hidden');
        }
        // 显示当前图层
        let nowLayer = joint.V(this.centerPaper.viewport).find('.layerNum' + this.currentLayer)[0];
        let layerNum0 = joint.V(this.centerPaper.viewport).find('.layerNum0')[0];
        nowLayer.removeClass('hidden');
        if (this.currentLayer !== 0) {
          let parent;
          // 删除第0层的数据
          for (let j = 0; j < nowLayer.children().length; j++) {
            let id = nowLayer.children()[j].attr('model-id');
            let cell = this.centerGraph.getCell(id);
            if (cell.attributes.layer === 0) {
              if (this.getParent(cell).attributes.embeds) {
                let embeds = this.getParent(cell).attributes.embeds;
                for (let k = 0; k < embeds.length; k++) {
                  if (this.centerGraph.getCell(embeds[k]).attributes.layer !== 0) {
                    this.getParent(cell).unembed(this.centerGraph.getCell(embeds[k]));
                  }
                }
              }
              this.getParent(cell).remove();
              break;
            }
          }
          // 加上第0层的数据
          for (let i = 0; i < layerNum0.children().length; i++) {
            let id = layerNum0.children()[0].attr('model-id');
            parent = this.getParent(this.centerGraph.getCell(id));
          }
          let clone = parent.clone({deep: true});
          this.centerGraph.addCells(clone); // 这是给谁jia?
          // let children = nowLayer.children();
          // 因为<g model-id>不是直接在总标签下了，顺序没法改变
          for (let j = clone.length - 1; j >= 0; j--) {
            nowLayer.prepend(this.centerPaper.findViewByModel(clone[j]).vel);
          }
        }
        // let nowLayer = joint.V(this.centerPaper.viewport).find('.layerNum' + this.currentLayer)[0];
        // console.log(nowLayer);
        // let layerNum0 = joint.V(this.centerPaper.viewport).find('.layerNum0')[0];
        // nowLayer.removeClass('hidden');
        // if (this.currentLayer !== 0) {
        //   let parent;
        //   // 删除第0层的数据
        //   for (let j = 0; j < nowLayer.children().length; j++) {
        //     let id = nowLayer.children()[j].attr('model-id');
        //     let cell = this.centerGraph.getCell(id);
        //     if (cell.attributes.layer === 0) {
        //       console.log('删除其他图层中0层数据');
        //       console.log(this.getParent(cell))
        //       this.getParent(cell).remove();
        //       break;
        //     }
        //   }
        //   // 加上第0层的数据
        //   for (let i = 0; i < layerNum0.children().length; i++) {
        //     let id = layerNum0.children()[0].attr('model-id');
        //     parent = this.getParent(this.centerGraph.getCell(id));
        //   }
        //   let clone = parent.clone({deep: true});
        //   this.centerGraph.addCells(clone); // 这是给谁jia?
        //   let children = nowLayer.children();
        //   // 因为<g model-id>不是直接在总标签下了，顺序没法改变
        //   for (let j = 0; j < children.length; j++) {
        //     let id = children[j].attr('model-id');
        //     let cell = this.centerGraph.getCell(id);
        //     if (cell.attributes.layer !== 0) {
        //       console.log('这不是0层，在加东西');
        //       nowLayer.append(this.centerPaper.findViewByModel(cell).vel);
        //     }
        //   }
        // }
        // 权限控制，其他层不能对第0层的图形进行操作
        for (let i = 1; i < layers.length; i++) {
          for (let j = 0; j < layers[i].children().length; j++) {
            let cell = this.centerGraph.getCell(layers[i].children()[j].attr('model-id'));
            if (cell.attributes.layer === 0) {
              this.centerPaper.findViewByModel(cell).vel.addClass('forbidden');
            }
          }
        }
      },
      getSvgData() {
        // 导出有图层的设备数据
        if (this.options.layer) {
          $('.layerTree > li > span').trigger('click');
          let svgs = [];
          // 将其他层的图形和第0层的图形组合在一起
          let layers = joint.V(this.centerPaper.viewport).find('.layerNum');
          for (let i = 0; i < layers.length; i++) {
            let layer = parseInt(layers[i].attr('class').match(/\d/g).join(''));
            let node = layers[i].children();
            svgs.push({layer: layer, svg: []});
            for (let j = 0; j < node.length; j++) {
              svgs[svgs.length - 1].svg.push(this.centerGraph.getCell(node[j].attr('model-id')));
            }
            console.log(svgs[svgs.length - 1].svg)
            // 找到当前图层的第0层的图形，然后embed另外层的数据
            if (svgs[svgs.length - 1].layer !== 0) { // 不是第0层，把0层和别的层分开
              let [zeroLayer, otherLayer] = [[], []];
              for (let k = 0; k < svgs[svgs.length - 1].svg.length; k++) {
                let cell = svgs[svgs.length - 1].svg[k];
                if (cell.attributes.layer === 0) {
                 // 其他图层中第0层数据
                  zeroLayer.push(cell);
                } else {
                  otherLayer.push(cell);
                }
              }
              let parent = this.getParent(zeroLayer[0]); // 父
              if (otherLayer.length !== 0) {
                console.log(otherLayer)
                console.log(otherLayer[0].getAncestors());
                if (otherLayer[0].getAncestors().length !== 0) { // 其他层组合过
                  let ancestors = otherLayer[0].getAncestors()[otherLayer[0].getAncestors().length - 1];
                  if (ancestors.attributes.layer !== 0) {
                    parent.embed(ancestors);
                  }
                } else { // 其他层没有组合
                  for (let i = 0; i < otherLayer.length; i++) {
                    parent.embed(otherLayer[i]); // 应该是给他加了一个属性吧,是组合！!!!SHENJIUER!
                  }
                }
              }
            }
          }
          console.log(svgs);
          return svgs;
        }
        // 导出区域数据
        if (this.options.isArea) {
          // console.log(this.centerGraph.getCells())
          let links = [];
          let walls = [];
          for (let i = 0; i < this.centerGraph.getCells().length; i++) {
            let attributes = this.centerGraph.getCells()[i].attributes;
            if (attributes.hasOwnProperty('link') && !attributes.hasOwnProperty('parent') && !attributes.hasOwnProperty('embeds') && !attributes.hasOwnProperty('uuid')) {
              // 是区域链接图形
              links.push(this.centerGraph.getCells()[i]);
            }
            if (!attributes.hasOwnProperty('link') && !attributes.hasOwnProperty('parent') && !attributes.hasOwnProperty('embeds') && !attributes.hasOwnProperty('uuid')) {
              // 是区域链接图形
              walls.push(this.centerGraph.getCells()[i]);
            }
          }
          let device = joint.V(this.centerPaper.viewport).find('.dg');
          // console.log(device)
          for (let i = 0; i < device.length; i++) {
            let layer1 = device[i].find('.deviceLayer1')[0];
            let now = [];
            for (let j = 0; j < layer1.children().length; j++) {
              let cell = this.centerGraph.getCell(layer1.children()[j].attr('model-id'));
              if (cell.attributes.layer === 0) {
                now.push({width: cell.getBBox().width, height: cell.getBBox().height, x: cell.getBBox().origin().x, y: cell.getBBox().origin().y});
              }
            }
            // 对不是第一层的数据进行处理
            for (let k = 0; k < device[i].children().length; k++) {
              if (parseInt(device[i].children()[k].attr('class').match(/\d/g).join('')) !== 1) {
                let cells = device[i].children()[k].children();
                let first = this.centerGraph.getCell(cells[0].attr('model-id'));
                let rW = now[0].width / first.getBBox().width; // 宽高比
                let rH = now[0].height / first.getBBox().height;
                let px = first.getBBox().x; // 第一个原始位置
                let py = first.getBBox().y;
                let rX = now[0].x - first.getBBox().x; // 第一个要移动的距离
                let rY = now[0].y - first.getBBox().y;
                first.resize(now[0].width, now[0].height);
                first.position(rX + first.getBBox().x, rY + first.getBBox().y);
                for (let m = 1; m < cells.length; m++) {
                  let cell = this.centerGraph.getCell(cells[m].attr('model-id'));
                  cell.resize(cell.getBBox().width * rW, cell.getBBox().height * rH);
                  cell.position((cell.getBBox().x - px) * rW + now[0].x, (cell.getBBox().y - py) * rH + now[0].y);
                }
              }
            }
          }
          let equips = [];
          for (let i = 0; i < device.length; i++) {
            equips.push({equipId: device[i].attr('id'), svgs: []});
            for (let j = 0; j < device[i].children().length; j++) {
              let layer = parseInt(device[i].children()[j].attr('class').match(/\d/g).join(''));
              let node = device[i].children()[j].children();
              equips[equips.length - 1].svgs.push({layer: layer, svg: []});
              for (let k = 0; k < node.length; k++) {
                equips[equips.length - 1].svgs[equips[equips.length - 1].svgs.length - 1].svg.push(this.centerGraph.getCell(node[k].attr('model-id')));
              }
            }
          }
          equips.push({'link': true, svg: links});
          equips.push({'wall': true, svg: walls});
          // console.log('isgetArea:')
          // console.log(equips);
          return equips;
        }
        return this.centerGraph.getCells().length !== 0 && this.centerGraph.getCells();
      },
      setHighlightCell(uuid) {
        // 高亮某个图形
        for (let i = 0; i < this.centerGraph.getCells().length; i++) {
          if (this.centerGraph.getCells()[i].attributes.uuid === uuid) {
            this.creatWrapper(this.centerPaper.findViewByModel(this.centerGraph.getCells()[i]), this.centerPaper);
          }
        }
        this.currentEquip = uuid;
      },
      setScale(scale) {
        // 设置比例尺
        if (scale) {
          let s = scale.split(':')[1].replace(/m/, '');
          $('#scaleBtn').val(s);
          $('#scaleValue').val('100px:' + s + 'm');
        }
      },
      setPaperBackground(color) {
        // 设置画布背景
        this.centerPaper.drawBackground({
          color: color
        });
      },
      setPaperScale(scale1, oldVal) {
        console.log(`scale1:${scale1}`);
        if (scale1 > 1) {
          $('.tool_wrap').css({
            'width': 'auto',
            'height': 'auto'
          });
        }
        // 画布比例尺
        if (scale1 < 1) {
          this.centerPaper.scale(parseFloat(scale1), parseFloat(scale1));
        }
        // 放大 0.1(g) -200（px）
        if (scale1 > 1) { // 这里是oldval
          // console.log(oldVal)
          // let num = (scale1 - oldVal) * 10;
          // let bigger = 200 * num;
          // let width = $('#display_box').width() + bigger
          // let height = width / 1.61 // 宽高比例设为1.61
          // $('#display_box').css({'width': width + 'px', 'height': height + 'px'})
          $('#display_box').css({'width': '1450px', 'height': '900px'})
        } else {
          $('#display_box').css({'width': '702px', 'height': '435px'})
        }
        // if (scale1 < oldVal) {
        //   let num = (oldVal - scale1) * 10;
        //   let bigger = 200 * num;
        //   let width = $('#display_box').width() - bigger
        //   let height = $('#display_box').height() - bigger
        //   if (width > 600) {
        //     $('#display_box').css({'width': width + 'px', 'height': height + 'px'})
        //   }
        // }
        // 画布变大
        // console.log($('#display_box').width())
        this.hideBtn();
      },
      // 外部删除链接图形（未解决）
      deleteLink(id) {
        if (id.length !== 0) {
          this.centerGraph.getCell(id).remove();
          if ($('#functionBtn').length) {
            this.hideBtn();
          }
        }
      },
      setSvgData(svg, status) { // 导入svg数据
        if ($('#functionBtn')[0]) {
          this.hideBtn();
        }
        if (status === 'TEMP' || status === 'RESET') {
          // console.log(this.svg);
          this.view = null;
          this.contextMenu = null;
          this.currentLayer = 0;
          this.cells = [];
          this.svg = [];
          this.z = 0;
          this.embedCells = [];
          this.path = {value: false, count: 0, type: 'L'};
          this.drag = {value: false, index: 0};
          this.currentEquip = null;
          this.editorLink = {};
          this.equipList = {};
          this.svgZoom = '';
        }
        this.centerGraph.clear();
        if (typeof svg === 'string') {
          if (svg.length === 0) {
            svg = [];
          } else {
            svg = JSON.parse(svg);
          }
        }
        if (this.options.layer) {
          $('span[data-layer="0"]').addClass('highlight');
          $('.layerTree li').each(function () {
            if (parseInt($(this).find('span').attr('data-layer')) !== 0) {
              $(this).remove();
            }
          });
          let layerNum = joint.V(this.centerPaper.viewport).find('.layerNum');
          if (layerNum.length !== 0) {
            layerNum[0].removeClass('hidden');
          }
          for (let i = 1; i < layerNum.length; i++) {
            layerNum[i].remove();
          }
          this.svg = svg;
          // console.log(svg);
          let _svg = [];
          for (let i = 0; i < svg.length; i++) {
            if (joint.V(this.centerPaper.viewport).find('.layerNum' + svg[i].layer).length === 0) {
              let vel = joint.V('<g class="layerNum layerNum' + svg[i].layer + '"></g>');
              joint.V(this.centerPaper.viewport).append(vel);
            }
            _svg.push(svg[i].svg);
          }
          // 显示最后一层
          let layers = joint.V(this.centerPaper.viewport).find('.layerNum');
          for (let i = 0; i < layers.length; i++) {
            layers[i].addClass('hidden');
          }
          if (layers.length !== 0) {
            layers[layers.length - 1].removeClass('hidden');
          }
          this.centerGraph.addCells(_svg);
          // 其他层不能移动第0层的图形
          for (let i = 1; i < layers.length; i++) {
            for (let j = 0; j < layers[i].children().length; j++) {
              let cell = this.centerGraph.getCell(layers[i].children()[j].attr('model-id'));
              if (cell.attributes.layer === 0) {
                this.centerPaper.findViewByModel(cell).vel.addClass('forbidden');
              }
            }
          }
          for (let i = 1; i < layers.length; i++) {
            // 解除除了第0层之外的层的跨层的组合关系
            let childs = layers[i].children();
            let parent;
            for (let j = 0; j < childs.length; j++) {
              let singleCell = this.centerGraph.getCell(childs[j].attr('model-id'));
              if (singleCell.attributes.layer !== 0) {
                parent = this.getParent(singleCell);
                break;
              }
            }
            if (parent) {
              let children = parent.attributes.embeds;
              for (let k = 0; k < children.length; k++) {
                if (this.centerGraph.getCell(children[k]).attributes.layer !== 0) {
                  parent.unembed(this.centerGraph.getCell(children[k]));
                  break;
                }
              }
            }
          }
        } else if (this.options.isArea) {
          // console.log(svg);
          let [equips, links, walls] = [[], [], []];
          for (let i = 0; i < svg.length; i++) {
            if (svg[i].hasOwnProperty('equipId')) {
              equips.push(svg[i]);
            } else if (svg[i].link) {
              links.push(svg[i]);
            } else if (svg[i].wall) {
              walls.push(svg[i]);
            }
          }
          let dg = joint.V(this.centerPaper.viewport).find('.dg');// 在干嘛
          for (let i = 0; i < dg.length; i++) {
            dg[i].remove();
          }
          for (let i = 0; i < equips.length; i++) {
            let g, g1;
            if (joint.V(this.centerPaper.viewport).find('#' + equips[i].equipId).length === 0) {
              g = joint.V('<g class="dg" id="' + equips[i].equipId + '"></g>');
              joint.V(this.centerPaper.viewport).append(g);
            }
            for (let j = 0; j < equips[i].svgs.length; j++) {
              if (equips[i].svgs[j].layer !== 1) {
                g1 = joint.V('<g class="hidden deviceLayer' + equips[i].svgs[j].layer + '"></g>');
              } else {
                g1 = joint.V('<g class="deviceLayer' + equips[i].svgs[j].layer + '"></g>');
              }
              g.append(g1);
              for (let k = 0; k < equips[i].svgs[j].svg.length; k++) {
                this.centerGraph.addCell(equips[i].svgs[j].svg[k]);
                g1.append(this.centerPaper.findViewByModel(this.centerGraph.getCell(equips[i].svgs[j].svg[k].id)).vel);
              }
            }
          }
          for (let i = 0; i < links.length; i++) {
            this.centerGraph.addCells(links[i].svg);
          }
          for (let i = 0; i < walls.length; i++) {
            this.centerGraph.addCells(walls[i].svg);
          }
        } else {
          console.log('setSvgData.非区非模型设备')
          this.centerGraph.addCells(svg);
        }
        for (let item of this.centerGraph.getCells(svg)) {
          if (item.attributes.link === true) { // 查看svg图像是否为虚线
            let type = item.attributes.type.split('.')[1].toLowerCase();
            item.attr('' + type + '/stroke', 'transparent');  // 带有虚线的svg图形显示透明边框
          }
        }
      },
      // setSvgStyle(svg, attr, style) { // 为设备设置属性时同时改变svg图形的一些样式
      //   this.centerGraph.getCell(svg.id).attr(attr, style);
      // },
      // 加载周围按钮，删除，旋转，复制，拉伸
      loadBtn(cellView) {
        let that = this;
        if (this.options.figure_buttons) {
          $('#display_box').append(`
          <div id="functionBtn">
            <div id="delSelf" class="left_top"><i class="iconfont" style="font-size: 18px;">&#xe6a7;</i></div>
            <!--<div id="rotateSelf" class="left_bottom"><i class="iconfont">&#xe61d;</i></div>-->
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
          // $('.tool_wrap').on('mousedown', '#rotateSelf', function () {
          //   that.rotateSelf(this);
          // });
          $('.tool_wrap').on('mousedown', '.stretch-icon', function () {
            that.stretchSelf(this);
          });
          that.creatWrapper(cellView, that.centerPaper);
        }
      },
      loadToolTip(cellView) {
        let that = this;
        if (this.options.label) {
          $('#display_box').append(`
          <div id="labelBox"></div>
          <div id="toolTip"></div>
        `);
          $('#toolTip').css({
            'left': cellView.getBBox().origin().x + 'px',
            'top': (cellView.model.getBBox().origin().y - 50) + 'px'
          });
          $('#display_box').on('dblclick', '#toolTip', function () {
            $('#toolTip p').addClass('hidden').next().removeClass('hidden').focus();
          });
          $('#display_box').on('blur', '#toolTip input', function () {
            let _this = this;
            if ($(this).val().trim()) {
              that.contextMenu.model.attributes.defaultName = $(this).val().trim();
              $(this).addClass('hidden').prev().text($(this).val().trim()).attr('title', $(this).val().trim()).removeClass('hidden');
              // that.getCenterGraphCells();
              $('.cell').each(function () {
                if ($(this).attr('data-id') === that.contextMenu.model.attributes.id) {
                  $(this).text(_this.val().trim());
                }
              });
            }
          });
        }
      },
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
          <input type="number" id="outline-thickness" min="0" max="30" value="">
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
          <input type="number" id="font-size" value="" min="5" max="80">
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
        <span style="background: rgb(255, 255, 0);"></span>
        <span style="background: rgb(255, 0, 0);"></span>
        <span style="background: rgb(49, 208, 198);"></span>
        <span style="background: rgb(124, 104, 252);"></span>
        <span style="background: rgb(97, 84, 156);"></span>
        <span style="background: rgb(106, 108, 138);"></span>
        <span style="background: rgb(75, 74, 103);"></span>
        <span style="background: rgb(60, 66, 96);"></span>
        <span style="background: rgb(51, 51, 78);"></span>
        <span style="background: rgb(0, 0, 0);"></span>
      </div>
    </div>` : ``;
        let that = this;
        $('.style_operation').prepend(styleOperation);
        $('.tool_wrap').on('click', function (e) {
          let target = e.target;
          let className = $(target).attr('class');
          if (className === 'clear_paper') {
            that.clearPaper();
          } else if (className === 'change_drawType') {
            $('#display_box').removeClass('crosshair');
            that.path = {'value': false, 'count': 0, 'type': 'L'};
            that.drag = {'value': false, 'index': 0};
          } else if (className === 'change_drawSize') {
            console.log(111)
          } else if (className === 'group_figure') {
            that.embed();
          } else if (className === 'ungroup_figure') {
            that.unembed();
          } else if (className === 'front_figure') {
            that.frontAndBack($(target));
          } else if (className === 'back_figure') {
            that.frontAndBack($(target));
          }
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
        $('#outline-thickness').on('change', function() {
          cellView.model.attr('' + type + '/stroke-width', parseInt($(this).val()));
        });
        $('#font-size').on('change', function() {
          cellView.model.attr('text/font-size', $('#font-size').val());
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
        $('.color-picker').off('click').on('click', function (e) {
          let target = e.target;
          if (target.nodeName.toLowerCase() === 'span') {
            let color = $(target).css('background-color');
            if ($(target).hasClass('transparent_color')) {
              color = 'transparent';
            }
            if (dataObj === 'fill') {
              cellView.model.attr('' + type + '/fill', color);
            } else if (dataObj === 'stroke') {
              cellView.model.attr('' + type + '/stroke', color);
            } else {
              cellView.model.attr('text/fill', color);
            }
          }
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
        let that = this;
        let ElementView = this.getLeftElementView();     // 初始化元素样式
        this.leftGraph = new joint.dia.Graph();        // 生成画板
        this.leftPaper = new joint.dia.Paper({       // 生成画布
          el: $('#component'),
          width: 120,
          height: $('.tool_panel').outerHeight() - 55 > 410 ? 410 : $('.tool_panel').outerHeight() - 55,
          model: this.leftGraph,
          gridSize: 1,
          elementView: ElementView
        });
        if (!this.options.isArea) { // 如果没有设备数据则用默认图形
          this.leftGraph.addCells([this.getShape(1), this.getShape(2), this.getShape(3), this.getShape(4), this.getShape(5)]);
        } else {
          let cells = [];
          // 基础设备列表
          for (let k = 0; k < this.options.gallery.length; k++) {
            if (this.options.gallery[k].scale.split(':')[1].replace(/m/, '') > this.maxZoom) {
              this.maxZoom = this.options.gallery[k].scale.split(':')[1].replace(/m/, '');
            }
            let svgs = JSON.parse(this.options.gallery[k].svg); // 单个设备svg
            // console.log(svgs)
            // 设备mei有图层
            if (!svgs[0].hasOwnProperty('svg')) {
              continue;
            }
            for (let i = 0; i < svgs.length; i++) {
              if (svgs[i].layer === 1) {
                // 单个图形的情况
                if (svgs[i].svg.length === 1) {
                  svgs[i].svg[0].equipId = this.options.gallery[k].id;
                  cells.push(svgs[i].svg[0]);
                } else {
                  for (let j = 0; j < svgs[i].svg.length; j++) {
                    if (svgs[i].svg[j].hasOwnProperty('embeds') && svgs[i].svg[j].hasOwnProperty('embeds').length !== 0 && svgs[i].svg[j].hasOwnProperty('parent') === false) {
                      // 判断是每个设备的终极父级图形
                      // console.log('进来一次，找到终极父元素')
                      svgs[i].svg[j].equipId = this.options.gallery[k].id;
                    }
                    cells.push(svgs[i].svg[j]);
                  }
                }
              }
            }
          }
          this.leftGraph.addCells(cells);
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
        // if (!this.options.isArea) {
        let graph1 = new joint.dia.Graph();        // 生成画板
        let paper1 = new joint.dia.Paper({       // 生成画布
          el: $('#line'),
          width: 120,
          height: 120,
          model: graph1,
          gridSize: 1
        });
        this.getLine(paper1);
        this.getCurve(paper1);
        $('#line').on('click', function (e) {
          let target = e.target;
          if ($(target).attr('class') === 'drawLine') {
            that.path.type = 'L';
          } else {
            that.path.type = 'Q';
          }
          $('#display_box').addClass('crosshair');
          that.path.value = true;
        });
        // }
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
        this.centerGraph = new joint.dia.Graph();        // 生成画板
        this.centerPaper = new joint.dia.Paper({       // 生成画布
          el: $('#display_box'),
          width: width,
          height: this.options.action_buttons ? $('.tool_panel').outerHeight() - 55 : $('.tool_panel').outerHeight(),
          model: this.centerGraph,
          restrictTranslate: false, // 不超出paper边框,还原就没有了
          padding: 5,
          gridSize: 10,
          drawGrid: false,
          highlighting: {
            'default': {
              name: 'stroke',
              options: {
                attrs: {
                  'stroke-width': 1,
                  stroke: '#1ABC9C',
                  'stroke-dasharray': '5, 5'
                }
              }
            }
          },
          interactive: !this.options.move_figure ? {elementMove: false} : true // false不可移动
        });
        this.centerGraph.on('change:z', function (cell) {
          if (that.options.layer) {
            console.log('change:z')
            // 因为<g model-id>不是直接在总标签下了，顺序没法改变
            let nowLayer = joint.V(that.centerPaper.viewport).find('.layerNum' + that.currentLayer)[0];
            let vel = that.centerPaper.findViewByModel(cell).vel;
            if (that.z) {
              nowLayer.append(vel);
            } else {
              nowLayer.prepend(vel);
            }
          } else if (that.options.isArea) {
            if (cell.attributes.hasOwnProperty('equipId')) {
              // let uuid = cell.attributes.uuid;
              // console.log(joint.V(that.centerPaper.viewport).find('.joint-viewport'));
              // let dg = joint.V(that.centerPaper.viewport).find('#' + uuid)[0];
              // if (that.z) {
              //   joint.V(that.centerPaper.viewport).find('.joint-viewport')[0].append(dg);
              // } else {
              //   joint.V(that.centerPaper.viewport).find('.joint-viewport')[0].prepend(dg);
              // }
              // joint-viewport
            }
          }
        });
        this.centerGraph.on('add', function (cell) {
          if (that.options.layer) {
            if (!cell.attributes.hasOwnProperty('layer')) {
              cell.attributes.layer = that.currentLayer;
            } else {
              for (let i = 0; i < that.svg.length; i++) {
                for (let j = 0; j < that.svg[i].svg.length; j++) {
                  if (that.svg[i].svg[j].id === cell.id) {
                    that.currentLayer = that.svg[i].layer;
                  }
                }
              }
            }
            let vel; // 外层容器
            if (joint.V(that.centerPaper.viewport).find('.layerNum' + that.currentLayer).length === 0) {
              vel = joint.V('<g class="layerNum layerNum' + that.currentLayer + '"></g>');
              joint.V(that.centerPaper.viewport).append(vel);
            } else {
              vel = joint.V(that.centerPaper.viewport).find('.layerNum' + that.currentLayer)[0];
            }
            vel.append(that.centerPaper.findViewByModel(cell).vel);
            if ($('.layerTree li').length - 1 < that.currentLayer) {
              $('.layerTree').append(`<li>
            <span data-layer = ` + $('.layerTree li').length + `>第` + that.currentLayer + `层<i class="iconfont deleteLayer" style="float: right;">&#xe61e;</i></span>
            <!--<ul class="secondaryLayer"></ul>-->
          </li>`);
            }
            // if (that.currentLayer === 0) {
            //   $('.secondaryLayer').each(function () {
            //     if ($('span[data-id="' + cell.id + '"]').length === 0) {
            //       $(this).append('<li><span class="cell" data-id="' + cell.id + '">' + cell.attributes.defaultName + '</span></li>');
            //     }
            //   });
            // } else {
            //   $('.secondaryLayer').eq(that.currentLayer).append('<li><span class="cell" data-id="' + cell.id + '">' + cell.attributes.defaultName + '</span></li>');
            // }
            $('.layerTree > li > span').removeClass('highlight');
            $('span[data-layer="' + that.currentLayer + '"]').addClass('highlight');
          }
          if (that.options.action_buttons) {
            that.changeClassName([{new: 'clear_paper', old: 'clear_disabled'}]);
          }
        });
        this.centerGraph.on('remove', function (cell) {
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
          cell = this.getPolygon(...[25, 30, 'transparent', '', 70, 60, 3]);
        } else if (index === 2) {
          cell = this.getPolygon(...[25, 100, 'transparent', '', 70, 60, 5]);
        } else if (index === 3) {
          cell = this.getPolygon(...[25, 180, 'transparent', '', 70, 60, 6]);
        } else if (index === 4) {
          cell = this.getRect(...[30, 255, 'transparent', '', 60, 60, 0]);
        } else if (index === 5) {
          cell = this.getCircle(...[30, 325, 'transparent', '', 60, 60, 0]);
        } else if (index === 6) {
          cell = this.getCircle(...[25, 30, 'transparent', '', 60, 60, '2,5']);
        } else if (index === 7) {
          cell = this.getRect(...[25, 100, 'transparent', '', 60, 60, '2,5']);
        }
        return cell;
      },
      // 给所有左侧元素添加点击事件
      addLeftPaperEvent(paper) {
        let that = this;
        paper.on('cell:click', function (cellView) {
          $('#display_box').removeClass('crosshair');
          that.path = {'value': false, 'count': 0, 'type': 'L'};
          that.drag = {'value': false, 'index': 0};
          // 添加中间画图板内容通过clone()
          let cell = that.generateCell(cellView);
          // 区域管理设备分层次
          if (that.options.isArea && cell) {
            let parent = that.getParent(cell);
            if (parent.attributes.hasOwnProperty('equipId')) {
              let allCells = that.getAllCells(that.centerPaper.findViewByModel(parent));
              that.sortDevice(parent, allCells);
            }
          }
        });
      },
      // 点击左边画布的图形在中间画布生成相应的图形
      generateCell(cellView) {
        let parent = this.getParent(cellView.model);
        let returnCell;
        if (parent.attributes.hasOwnProperty('equipId')) {
          // 是设备图形
          if (this.options.isArea) {
            if (this.paperZoom === '') {
              alert('请确认区域实际大小');
              return;
            }
            let equipId = parent.attributes.equipId;
            for (let i = 0; i < this.options.gallery.length; i++) {
              if (this.options.gallery[i].id === equipId) {
                let svgs = JSON.parse(this.options.gallery[i].svg);
                let parentId = '';
                if (svgs[1].svg.length === 1) {
                  parentId = svgs[1].svg[0].id;
                } else {
                  for (let j = 0; j < svgs[1].svg.length; j++) {
                    if (svgs[1].svg[j].hasOwnProperty('embeds') && !svgs[1].svg[j].hasOwnProperty('parent')) {
                      // 终极父元素
                      parentId = svgs[1].svg[j].id;
                      break;
                    }
                  }
                }
                this.centerGraph.addCells(svgs[1].svg);
                let cloneCells = this.centerGraph.getCell(parentId).clone({deep: true});
                cloneCells[0].attributes.equipId = equipId;
                this.centerGraph.addCells(cloneCells);
                for (let i = 0; i < cloneCells.length; i++) {
                  cloneCells[i].set('z', this.centerGraph.getCells().length + i + 1);
                  this.changeDefaultName(cloneCells[i]);
                }
                this.centerGraph.getCell(parentId).remove();
                // 根据最大的比例尺缩放图形
                let scale = this.options.gallery[i].scale.split(':')[1].replace(/m/, '');
                // console.log(scale)
                // console.log(this.maxZoom) // 最大的scale
                // console.log(cloneCells) // 图形，以图层分开[child,child]
                this.resizeDevice(scale / this.paperZoom, cloneCells);
                returnCell = cloneCells[0];
                break;
              }
            }
          }
          return returnCell;
        } else {
          // 是链接图形或者是基础图库
          let clone = parent.clone();
          this.changeDefaultName(clone);
          clone.set('z', this.centerGraph.getCells().length + 1);
          clone.position(10, 10);
          this.centerGraph.addCells(clone);
        }
      },
      // 根据模板设备最大的比例尺缩放图形
      resizeDevice(scale, cells) {
        let [disX, disY] = [[], []];
        for (let i = 0; i < cells.length; i++) {
          cells[i].resize(cells[i].getBBox().width * scale, cells[i].getBBox().height * scale);
          if (i === 0) {
            continue;
          }
          disX.push(cells[i].getBBox().origin().x - cells[0].getBBox().origin().x);
          disY.push(cells[i].getBBox().origin().y - cells[0].getBBox().origin().y);
        }
        for (let i = 1; i < cells.length; i++) {
          cells[i].position(disX[i - 1] * scale + cells[0].getBBox().origin().x, disY[i - 1] * scale + cells[0].getBBox().origin().y);
        }
      },
      // 区域设备图形分开
      sortDevice(parent, allCells) {
        if (parent.attributes.hasOwnProperty('equipId')) {
          // 实例化设备生成uuid，唯一标识
          let uuid = this.snUuid('device');
          parent.attributes.uuid = uuid;
          this.equipList = {id: parent.attributes.equipId, uuid: uuid, add: true};
          let svg;
          for (let i = 0; i < this.options.gallery.length; i++) {
            if (this.options.gallery[i].id === parent.attributes.equipId) {
              svg = JSON.parse(this.options.gallery[i].svg);
            }
          }
          if (joint.V(this.centerPaper.viewport).find('#' + uuid).length === 0) {
            let g = joint.V('<g class="dg" id="' + uuid + '" equip-id="' + parent.attributes.equipId + '"></g>');
            joint.V(this.centerPaper.viewport).append(g);
            for (let j = 0; j < svg.length; j++) {
              let g1;
              if (j === 1) {
                g1 = joint.V('<g class="deviceLayer' + svg[j].layer + '"></g>');
              } else {
                g1 = joint.V('<g class="hidden deviceLayer' + svg[j].layer + '"></g>');
              }
              joint.V(this.centerPaper.viewport).find('#' + uuid)[0].append(g1);
            }
            // 第1层
            for (let k = 0; k < allCells.length; k++) {
              g.find('.deviceLayer1')[0].append(this.centerPaper.findViewByModel(allCells[k]).vel);
            }
            // 其他层
            for (let i = 0; i < svg.length; i++) {
              if (svg[i].layer !== 1) {
                let parentId;
                if (svg[i].svg.length === 1) {
                  svg[i].svg[0].equipId = parent.attributes.equipId;
                  svg[i].svg[0].uuid = uuid;
                  parentId = svg[i].svg[0].id;
                } else {
                  for (let j = 0; j < svg[i].svg.length; j++) {
                    if (svg[i].svg[j].hasOwnProperty('embeds') && svg[i].svg[j].hasOwnProperty('embeds').length !== 0 && svg[i].svg[j].hasOwnProperty('parent') === false) {
                      svg[i].svg[j].equipId = parent.attributes.equipId;
                      svg[i].svg[j].uuid = uuid;
                      parentId = svg[i].svg[j].id;
                    }
                  }
                }
                this.centerGraph.addCells(svg[i].svg);
                let cloneCells = this.centerGraph.getCell(parentId).clone({deep: true});
                this.centerGraph.addCells(cloneCells);
                for (let k = 0; k < cloneCells.length; k++) {
                  g.find('.deviceLayer' + svg[i].layer)[0].append(this.centerPaper.findViewByModel(cloneCells[k]).vel);
                }
                this.centerGraph.getCell(parentId).remove();
              }
            }
          }
        }
      },
      changeDefaultName(cell) { // 改变图形默认名字
        if (cell.attributes.hasOwnProperty('link') && cell.attributes.link) {
          cell.attributes['defaultName'] = '链接' + (this.centerGraph.getCells().length + 1);
        } else {
          cell.attributes['defaultName'] = '图形' + (this.centerGraph.getCells().length + 1);
        }
      },
      // 中间画板元素事件
      addCenterPaperEvent(paper) {
        // 组合时选中框的起始点和终点坐标
        let [that, startPoint, path, sx, sy, ex, ey] = [this];
        // paper.on('blank:pointerdblclick', function (evt, x, y) {
        //   if (that.path.value) {
        //     // 双击空白处停止画线
        //     that.endPath(startPoint, path);
        //   }
        // });
        paper.on('blank:contextmenu', function (evt, x, y) {
          if (that.path.value) {
            // 双击空白处停止画线
            that.endPath(startPoint, path);
          }
        });
        // 单击画布空白部分时
        paper.on('blank:pointerdown', function(evt, x, y) {
          if (that.options.gallery.length !== 0) {
            // 取消单个图形高亮
            // that.store.commit('changeEquipmentId', '');
            that.currentEquip = '';
          }
          that.unHighLight();
          if (!that.path.value) { // 在不画线的时候才可以生成矩形选中框
            sx = x;
            sy = y;
            that.generateBox(sx, sy);
          }
          // 值为true并且没有曲线的控制点的时候开始划线
          if (that.path.value && joint.V(paper.viewport).find('.control-point').length === 0) {
            if (that.path.count === 0) { // 第一次点击生成开始的圆点
              startPoint = joint.V('circle', { r: 8, fill: '#dc143c', cx: x, cy: y, class: 'startPoint' });
              // 先生成path路径，在结束画线的时候将路径转化为真正的图形
              path = joint.V('path', { d: 'M ' + x + ' ' + y, stroke: '#dc143c', fill: 'transparent', 'stroke-width': 2 });
              joint.V(paper.viewport).append(startPoint);
              joint.V(paper.viewport).append(path);
              that.path.count = 1;
              // 点击开始的圆点生成闭合路径
              $('.startPoint').on('mousedown', function (event) {
                path.attr('d', path.attr('d') + ' Z');
                that.endPath(startPoint, path);
                // $('#display_box').off('mousemove');
                event.stopPropagation();
              });
            } else {
              if (that.path.type === 'L') { // 直线
                path.attr('d', path.attr('d') + ' L ' + x + ' ' + y);
              } else {
                let last = path.attr('d').substring(path.attr('d').lastIndexOf('Q')).split(' ');
                let [lastX, lastY] = [];
                if (last.length === 3) {
                  lastX = parseInt(last[1]);
                  lastY = parseInt(last[2]);
                } else {
                  lastX = parseInt(last[3]);
                  lastY = parseInt(last[4]);
                }
                let point = x + ' ' + y;
                let centerPoint = ((x - lastX) / 2 + lastX) + ' ' + ((y - lastY) / 2 + lastY);
                path.attr('d', path.attr('d') + ' Q ' + centerPoint + ' ' + point);
              }
            }
            $('#display_box').off('mousemove').on('mousemove', function (event) {
              let minX = $('#display_box').offset().left;
              let minY = $('#display_box').offset().top;
              // 获得其他图形的边界
              let otherPos = that.getOtherCellsPos();
              $('.refer_line_h').hide();
              $('.refer_line_v').hide();
              let px = event.pageX - minX;
              let py = event.pageY - minY;
              if (px || py) {
                $('#position_x').html(parseInt(px));
                $('#position_y').html(parseInt(py));
                $('#position').css('display', 'block');
              } else {
                $('#position').css('display', 'block'); // 坐标点显示，block关闭，none显示
              }
              for (let i = 0; i < otherPos.length; i++) {
                // 竖线
                if (Math.abs(parseInt(otherPos[i].min_x - px)) < 2 || Math.abs(parseInt(otherPos[i].max_x - px)) < 2 || Math.abs(parseInt(otherPos[i].center_x - px)) < 2) {
                  that.generateLine('v', $('#display_box').height(), px);
                }
                // 横线
                if (Math.abs(parseInt(otherPos[i].min_y - py)) < 2 || Math.abs(parseInt(otherPos[i].max_y - py)) < 2 || Math.abs(parseInt(otherPos[i].center_y - py)) < 2) {
                  that.generateLine('h', $('#display_box').width(), py);
                }
              }
            });
          }
          // 删除所有控制点
          if (!that.drag.value) {
            that.deleteController();
          }
          // 隐藏外加按钮
          that.hideBtn();
        });
        paper.on('blank:pointerup', function(evt, x, y) {
          if (!that.path.value) {
            [ex, ey] = [x, y];
            that.getCellsFromGraph(sx, sy, ex, ey); // 获取在矩形选中框范围内的cell
            [ex, ey, sy, sx] = [];
          }
        });
        paper.on('cell:pointerdblclick', function (cellView, evt) {
          // 链接图形双击出现弹框
          if (cellView.model.attributes.hasOwnProperty('link') && cellView.model.attributes.link) {
            that.doubleClick(cellView.model);
          }
          that.deleteController();
          if ($('#functionBtn').length === 0 && that.options.move_figure) {
            // that.loadBtn(cellView);
          } else {
            that.creatWrapper(cellView, that.centerPaper);
          }
          that.changeClassName([{new: 'front_figure', old: 'front_disabled'}, {new: 'back_figure', old: 'back_disabled'}]);
          // 改变当前点击的设备的id
          let parent = that.getParent(cellView.model);
          if (parent.attributes.hasOwnProperty('equipId')) {
            // that.store.commit('changeEquipmentId', parent.attributes.uuid);
            that.currentEquip = parent.attributes.uuid;
          }
          that.unHighLight();
          // 改变图形样式
          that.changeCellAttr(cellView);
        });
        paper.on('cell:pointerdown', function(cellView, evt, x, y) {
          if (that.options.single_click === true) {
            setTimeout(function () {
              that.singleClick(cellView)
            }, 1000);
          }
          if (cellView.model.attributes.type === 'basic.Path' && cellView.model.attr('path/d').includes('Q')) {
            if (joint.V(paper.viewport).find('.control-point').length !== 0 && joint.V(paper.viewport).find('.control-point')[0].attr('svgId') !== cellView.model.id) {
              let circle = joint.V(paper.viewport).find('.control-point');
              let line = joint.V(paper.viewport).find('.control-line');
              for (let i = 0; i < circle.length; i++) {
                if (circle[i].attr('svgId') !== cellView.model.id) {
                  circle[i].remove();
                  line[i].remove();
                }
              }
              if (joint.V(paper.viewport).find('.control-point').length === 0) {
                // that.drawController(cellView.model.attr('path/d'), cellView.model, true);
              }
            } else {
              // that.drawController(cellView.model.attr('path/d'), cellView.model, true);
            }
          }
          that.hideBtn();
          that.moveTogether(cellView, evt);
        });
        paper.on('cell:pointermove', function(cellView) {
          // 参考线
          if (that.options.refer_line) {
            that.referLine(cellView);
          }
          // 曲线控制点跟随图形一起移动
          that.moveController(cellView);
        });
        paper.on('cell:pointerup', function(cellView) {
          $('.refer_line_v').hide();
          $('.refer_line_h').hide();
        });
        paper.on('cell:contextmenu', function (cellView, evt, x, y) {
          if ($('#toolTip')[0]) {
            $('#toolTip').css({
              'left': cellView.getBBox().origin().x + 'px',
              'top': (cellView.model.getBBox().origin().y - 50) + 'px'
            });
          } else {
            that.loadToolTip(cellView);
          }
          that.contextMenu = cellView;
          $('#toolTip').show().empty().append('<p title="' + cellView.model.attributes.defaultName + '">' + cellView.model.attributes.defaultName + '</p><input type="text" class="hidden" placeholder="' + cellView.model.attributes.defaultName + '">');
        });
        paper.on('cell:mouseover', function (cellView, evt, x, y) {
          // console.log('移入元素');
          // 显示设备名称
          that.eqNameHover(cellView);
        });
        paper.on('cell:mouseout', function (cellView, evt, x, y) {
          // console.log('移入元素');
          // 清楚hover效果
          that.delHover(cellView);
        })
      },
      // 组合图形一起移动
      moveTogether(cellView, evt) {
        let parent = cellView.model.getAncestors()[cellView.model.getAncestors().length - 1];
        if (parent) {
          // 取消子元素的移动
          cellView.pointerup(evt);
          // 将当前被拖动的元素替换为父元素
          this.centerPaper.sourceView = this.centerPaper.findViewByModel(parent);
          // 获取父元素的位置
          let localPoint = this.centerPaper.snapToGrid({ x: evt.clientX, y: evt.clientY });
          this.centerPaper.findViewByModel(parent).pointerdown(evt, localPoint.x, localPoint.y);
        }
      },
      getOtherCellsPos(cellView) {
        let cells = [];
        if (this.options.layer) {
          let nowLayer = joint.V(this.centerPaper.viewport).find('.layerNum' + this.currentLayer)[0];
          if (nowLayer) {
            for (let i = 0; i < nowLayer.children().length; i++) {
              cells.push(this.centerGraph.getCell(nowLayer.children()[i].attr('model-id')));
            }
          }
        } else if (this.options.isArea) {
          let device = joint.V(this.centerPaper.viewport).find('.dg');
          for (let i = 0; i < device.length; i++) {
            let layer1 = device[i].find('.deviceLayer1')[0];
            for (let j = 0; j < layer1.children().length; j++) {
              cells.push(this.centerGraph.getCell(layer1.children()[j].attr('model-id')));
            }
          }
        } else {
          cells = this.centerGraph.getCells();
        }
        // 排除当前cell和其后代元素
        let result = cells.filter(function (cell) {
          if (cellView) {
            return cell.id !== cellView.model.id && !cell.isEmbeddedIn(cellView.model);
          } else {
            return cell;
          }
        });
        let repeatParent = [];
        for (let i = 0; i < result.length; i++) {
          repeatParent.push(this.getParent(result[i]).id);
        }
        // 获取非当前点击元素的各个parent
        let parent = Array.from(new Set(repeatParent));
        let otherPos = [];
        // 获取非当前点击元素的最大最小x,y
        for (let i = 0; i < parent.length; i++) {
          let sPos = this.getBorder(this.centerPaper.findViewByModel(this.centerGraph.getCell(parent[i])), this.centerPaper);
          otherPos.push({min_x: sPos.min_x, max_x: sPos.max_x, min_y: sPos.min_y, max_y: sPos.max_y, center_x: (sPos.max_x - sPos.min_x) / 2 + sPos.min_x, center_y: (sPos.max_y - sPos.min_y) / 2 + sPos.min_y});
        }
        $('.refer_line_h').hide();
        $('.refer_line_v').hide();
        return otherPos;
      },
      // 参考线位置
      referLine(cellView) {
        let pos = this.getBorder(cellView, this.centerPaper);
        let [minX, maxX, minY, maxY] = [pos.min_x, pos.max_x, pos.min_y, pos.max_y];
        let otherPos = this.getOtherCellsPos(cellView);
        for (let i = 0; i < otherPos.length; i++) {
          // 竖线
          if (Math.abs(parseInt(otherPos[i].min_x - minX)) < 2 || Math.abs(parseInt(otherPos[i].min_x - maxX)) < 2) { // 左边对齐
            this.generateLine('v', $('#display_box').height(), otherPos[i].min_x);
          } else if (Math.abs(parseInt(otherPos[i].max_x - minX)) < 2 || Math.abs(parseInt(otherPos[i].max_x - maxX)) < 2) { // 右边对齐
            this.generateLine('v', $('#display_box').height(), otherPos[i].max_x);
          } else if (Math.abs(parseInt(otherPos[i].center_x - (maxX - minX) / 2 - minX)) < 2) { // 中间对齐
            this.generateLine('v', $('#display_box').height(), otherPos[i].center_x);
          }
          // 横线
          if (Math.abs(parseInt(otherPos[i].min_y - minY)) < 2 || Math.abs(parseInt(otherPos[i].min_y - maxY)) < 2) {
            this.generateLine('h', $('#display_box').width(), otherPos[i].min_y);
          } else if (Math.abs(parseInt(otherPos[i].max_y - minY)) < 2 || Math.abs(parseInt(otherPos[i].max_y - maxY)) < 2) {
            this.generateLine('h', $('#display_box').width(), otherPos[i].max_y);
          } else if (Math.abs(parseInt(otherPos[i].center_y - (maxY - minY) / 2 - minY)) < 2) {
            this.generateLine('h', $('#display_box').width(), otherPos[i].center_y);
          }
        }
      },
      // 改变图形样式
      changeCellAttr(cellView) {
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
        // 字体粗细
        if (cellView.model.attr('text/font-weight') === '300') {
          $('#font-sickness').val(1);
        } else if (cellView.model.attr('text/font-weight') === 'normal') {
          $('#font-sickness').val(2);
        } else {
          $('#font-sickness').val(3);
        }
        this.view = cellView;
        this.propertyPane(cellView);
      },
      // 获取在矩形选中框之内的图形
      getCellsFromGraph(sx, sy, ex, ey) {
        $('#display_box').off('mousemove');
        $('.moving_box').hide();
        // 排除一开始不是点击在画布的空白地方的情况, sx,sy是undefined
        if (typeof sx === 'undefined' || typeof sy === 'undefined') {
          return;
        }
        // 获得最大最小x,y
        let maxX = ex > sx ? ex : sx;
        let maxY = ey > sy ? ey : sy;
        let minX = ex > sx ? sx : ex;
        let minY = ey > sy ? sy : ey;
        this.cells = [];
        this.embedCells = [];
        // 将在鼠标范围内的cell push进数组中，必须包含整个cell
        let allCells = [];
        if (this.options.layer) {
          let nowLayer = joint.V(this.centerPaper.viewport).find('.layerNum' + this.currentLayer)[0];
          if (nowLayer === undefined) {
            console.log(`没有图形，nowLayer = ${nowLayer}`)
            return;
          }
          for (let i = 0; i < nowLayer.children().length; i++) {
            allCells.push(this.centerGraph.getCell(nowLayer.children()[i].attr('model-id')));
          }
        } else {
          allCells = this.centerGraph.getCells();
        }
        for (let i = 0, len = allCells.length; i < len; i++) {
          let width = allCells[i].getBBox().width;
          let height = allCells[i].getBBox().height;
          let x = allCells[i].getBBox().x;
          let y = allCells[i].getBBox().y;
          if ((x >= minX) && (x + width <= maxX) && (y >= minY) && (y + height <= maxY)) {
            this.embedCells.push(allCells[i]);
            // 判断这个cell是否为父cell or 子cell,或者只是单个cell
            let role = this.judgeRole(this.centerPaper.findViewByModel(allCells[i]));
            if (JSON.stringify(role) === '{}') {
              if (!this.cells.includes(allCells[i])) {
                this.cells.push(allCells[i]);
              }
            } else {
              // 不是单个cell的话找到该cell的终极祖先元素，然后把祖先元素本身和祖先元素的所有子元素全部push
              if (!this.cells.includes(role.parent)) {
                this.cells.push(role.parent);
              }
              let allChilds = role.parent.getEmbeddedCells({deep: true});
              for (let j = 0; j < allChilds.length; j++) {
                if (!this.cells.includes(allChilds[j])) {
                  this.cells.push(allChilds[j]);
                }
              }
            }
          }
        }
        if (this.cells.length !== 0) {
          for (let i = 0; i < this.cells.length; i++) {
            this.centerPaper.findViewByModel(this.cells[i]).highlight();
          }
          this.changeClassName([{new: 'group_figure', old: 'group_disabled'}, {new: 'ungroup_figure', old: 'ungroup_disabled'}]);
        }
      },
      generateBox(sx, sy) { // 生成矩形选中框
        $('#display_box').off('mousemove').on('mousemove', function (event) {
          // 控制坐标在画布范围内
          let minX = $('#display_box').offset().left;
          // console.log(minX);
          // console.log(event.pageX);
          // let minY = $('#display_box').offset().top;
          // if ($('.moving_box')[0]) {
          //   // 我改的
          //   // $('.moving_box').css({
          //   //   'left': Math.min(event.pageX - minX, sx) + 'px',
          //   //   'top': Math.min(event.pageY - minY, sy) + 'px',
          //   //   'width': Math.abs(event.pageX - minX - sx) + 'px',
          //   //   'height': Math.abs(event.pageY - minY - sy) + 'px',
          //   //   'display': 'block'
          //   // });
          //   $('.moving_box').css({
          //     'left': sx + 'px',
          //     'top': sy + 'px',
          //     // 'width': sx) + 'px',
          //     // 'height': Math.abs(event.pageY - minY - sy) + 'px',
          //     'display': 'block'
          //   });
          // } else {
          //   $('#display_box').append('<div class="moving_box"></div>');
          //   $('.moving_box').css({
          //     'left': sx + 'px',
          //     'top': sy + 'px',
          //     'display': 'block'
          //   });
          // }
        });
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
            $('#display_box').append('<div class="refer_line_v forbidden"></div>');
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
            $('#display_box').append('<div class="refer_line_h forbidden"></div>');
            $('.refer_line_h').css({
              'display': 'block',
              'width': param1,
              'top': param2
            });
          }
        }
      },
      getThat(th) {
        thatW = th;
      },
      lawyer(area) {
        let html = thatW.getters.getDictionary.dictionary.areaObj.get(area).equipmentList;
        for (let item of html) {
          for (let pro of item.propertyList) {
            if (pro.inputType === 'BOX' && pro.dataType !== 'LINK' && pro.value !== '') {
              let value = pro.value;
              let preV = pro.preValueList;
              for (let lay of preV) {
                if(lay.value == value) {
                  let layN = lay.layerNumber;
                  let id = '#' + thatW.getters.getDictionary.dictionary.pObj.get(pro.id).serialNumber;
                  let item1 = $(id).children()
//              console.log(item);
                  for (let i = 0; i < item1.length; i++) {
                    // 找个每个层级的id名称
                    let idname = '#' + item1[i].id;
                    // 通过id名称更改class名称 全部显示隐藏
                    $(idname)[0].className.baseVal = 'hidden' + ' ' + 'deviceLayer' + i;
                  }
                  // 取出需要显示的层级
                  let aa = '#' + item1[layN].id;
                  // 通过id查找更改class显示
                  $(aa)[0].className.baseVal = 'deviceLayer' + layN;
                }
              }
            }
          }
        }
      },
      // 移入图形，显示设备名称
      eqNameHover(cellView) {
        // console.log(cellView);
        // console.log(thatW);
        if (cellView.model.attributes.uuid !== undefined) {
          let uuid = cellView.model.attributes.uuid;
          // 通过uuid从map当中找到设备ID
          let subscript = thatW.getters.getIndexDatas.indexData.snObj.get(uuid); // 获取map当中的下标
          // console.log(subscript);
          // 拿着下标去李迪凡数据当中获取设备数据
          let eqData = thatW.getters.getDatas.data[subscript.area].equipmentList[subscript.equipment];
          // console.log(eqData);
          // 获取设备名称
          let eqName = eqData.name;
          // 加入div
          let title = '<div id="eqTitle" style="color: red;z-index: 10000;position: absolute;">' + eqName + '</div>';
          $('#display_box').append(title); // 加入的标签必须与svg的标签平级
          // 改变位置
          $('#eqTitle').css({
            width: (cellView.model.attributes.size.width) + 'px',
            height: (20) + 'px',
            left: (cellView.model.attributes.position.x + (cellView.model.attributes.size.width)) + 'px',
            top: (cellView.model.attributes.position.y) + 'px',
            display: 'block'
          });
          // 给设备加入填充的hover效果
          $('#' + uuid + '').children('g.deviceLayer1').children().find('text').find('tspan').css({
            // stroke: '#00ff00'
            fill: '#00E4FF'
          });
          // 添加鼠标样式 之后需要加入判断逻辑，有link的加上这个样式
          $('#' + uuid + '').find('*').css({
            cursor: 'url(../../src/assets/mouse/Hand.cur), auto'
          });
          // $('#' + uuid + '').children('g.deviceLayer1').children().find('text').find('tspan').addClass('masked');
          // $('#' + uuid + '').children('g.deviceLayer1').children().find('text').find('tspan').attr('transform', 'rotate(30 20,40)');
          // console.log($('#' + uuid + '').children('g.deviceLayer1').children().find('text').find('tspan'));
        }
      },
      delHover(cellView) {
        $('#eqTitle').remove();
        $('tspan').css({
          // stroke: '#ffffff'
          fill: '#ffffff'
        });
      },
      // 单击图形
      singleClick(cellView) {
        if (cellView !== undefined) {
          let id = cellView.model.attributes;
          if (id.uuid !== undefined) {
            let uuid = id.uuid;
            for (let id of thatW.getters.getDatas.data) {
              for (let list of id.equipmentList) {
                if (uuid === list.serialNumber) { // 获取点击图形的uuid 与后台数据中的id进行对比
                  console.log(list.id)
                  console.log(list.template.name); // 输入模版ID
                  console.log(thatW);
                  switch (list.template.name) { // 取出模版名称进行对比
                    case '精密空调':
                      thatW.commit('changeEqIds', {
                        'eqId': list.id
                      })
                      thatW.commit('changeModal', {
                      modalv: true
                    })
                      $('.pre').siblings().css('display', 'none');
                      $('.pre').css('display', 'block');
                      thatW.commit('changeTemp', {
                        'tempname': 'minipre'
                      })
                      break;
                    case 'UPS配电柜':
                      thatW.commit('changeModal', {
                        'modalv': true
                      })
                      $('.ups').siblings().css('display', 'none');
                      $('.ups').css('display', 'block');
                      thatW.commit('changeTemp', {
                        'tempname': 'miniups'
                      })
                      thatW.commit('changeEqIds', {
                        'eqId': list.id
                      })
                      break;
                    case '市电配电柜':
                      thatW.commit('changeModal', {
                        'modalv': true
                      })
                      $('.dis').siblings().css('display', 'none');
                      $('.dis').css('display', 'block');
                      thatW.commit('changeTemp', {
                        'tempname': 'minisup'
                      })
                      thatW.commit('changeEqIds', {
                        'eqId': list.id
                      })
                      break;
                    case '温湿度探测器':
                      thatW.commit('changeModal', {
                        'modalv': true
                      })
                      $('.mon').siblings().css('display', 'none');
                      $('.mon').css('display', 'block');
                      thatW.commit('changeTemp', {
                        'tempname': 'miniser'
                      })
                      thatW.commit('changeEqIds', {
                        'eqId': list.id
                      })
                      break;
                    case '固态设备':
                      thatW.commit('changeModal', {
                        'modalv': true
                      })
                      $('.sol').siblings().css('display', 'none');
                      $('.sol').css('display', 'block');
                      thatW.commit('changeEqIds', {
                        'eqId': list.id
                      })
                      break;
                    case '门禁A':
                      thatW.commit('changeModal', {
                        'modalv': true
                      })
                      $('.ent').siblings().css('display', 'none');
                      $('.ent').css('display', 'block');
                      thatW.commit('changeTemp', {
                        'tempname': 'minient'
                      })
                      thatW.commit('changeEqIds', {
                        'eqId': list.id
                      })
                      break;
                    case '摄像头':
                      thatW.commit('changeModal', {
                        'modalv': true
                      })
                      $('.cam').siblings().css('display', 'none');
                      $('.cam').css('display', 'block');
                      thatW.commit('changeTemp', {
                        'tempname': 'minicam'
                      })
                      thatW.commit('changeEqIds', {
                        'eqId': list.id
                      })
                      break;
                    case '机柜':
                      thatW.commit('changeModal', {
                        'modalv': true
                      })
                      $('.cab').siblings().css('display', 'none');
                      $('.cab').css('display', 'block');
                      thatW.commit('changeTemp', {
                        'tempname': 'minicab'
                      })
                      thatW.commit('changeEqIds', {
                        'eqId': list.id
                      })
                      break;
                    case '漏水探测器':
                      thatW.commit('changeModal', {
                        'modalv': true
                      })
                      $('.lea').siblings().css('display', 'none');
                      $('.lea').css('display', 'block');
                      thatW.commit('changeTemp', {
                        'tempname': 'minilea'
                      })
                      thatW.commit('changeEqIds', {
                        'eqId': list.id
                      })
                      break;
                    case '感烟探测器':
                      thatW.commit('changeModal', {
                        'modalv': true
                      })
                      $('.det').siblings().css('display', 'none');
                      $('.det').css('display', 'block');
                      thatW.commit('changeTemp', {
                        'tempname': 'minidet'
                      })
                      thatW.commit('changeEqIds', {
                        'eqId': list.id
                      })
                      break;
                    default:
                      break;
                  }
                  // console.log(thatW.getters.getEqIds)
                }
              }
            }
          }
        }
      },
      // 双击链接图形
      doubleClick(cell) {
        // 获取当前双击图形的uuid
        let uuid = this.getParent(cell).attributes.uuid;
        // console.log(uuid);
        // 遍历svg数据
        for (let id of thatW.getters.getDatas.data) {
          for (let list of id.equipmentList) {
            // 当找到uuid时
            if (uuid === list.serialNumber) {
              let area = id.id;
              let array = thatW.getters.getArea.areas;
              //  将该区域加入到后台数据中
              array.push(area);
              thatW.commit('changeArea', {
                'areas': array
              })
              // 取出uuid对应的属性列表
              let arr = thatW.getters.getDictionary.dictionary.eqObj.get(list.id).equipmentIds.propertyList;
              for (let item of arr) {
                // 找到属性为link的列表
                if (item.dataType === 'LINK') {
                  for(let svg of thatW.getters.getDatas.data){
                    // 取出对应的value值和区域的id做对比
                    if (parseInt(svg.id) === parseInt(item.value)) {
                      // 加载该区域的svg图像
                      this.setSvgData(svg.svg, 'RESET');
                      this.lawyer(svg.id);
                    }
                  }
                }
              }
            }
          }
        }
        // 链接图形双击出现链接编辑弹框
        // let parent = this.getParent(cell);
        // if (parent && parent.attributes.hasOwnProperty('equipId')) {
        //   // 设备链接
        //   // this.store.commit('changeLinkAttr', {
        //   //   'show': true,
        //   //   'equipmentId': parent.attributes.uuid,
        //   //   'svgId': cell.id
        //   // });
        //   this.editorLink = {
        //     'show': true,
        //     'equipmentId': parent.attributes.uuid,
        //     'svgId': cell.id
        //   };
        // } else {
        //   // 区域链接
        //   // this.store.commit('changeLinkAttr', {
        //   //   'show': true,
        //   //   'svgId': cell.id
        //   // });
        //   this.editorLink = {
        //     'show': true,
        //     'svgId': cell.id
        //   };
        //   this.currentEquip = '';
        // }
      },
      /* 组合图形，getCells获取到的cell顺序是根据z,z越小，越早获取到
       第一次把获取到的第一个cell作为父cell,并且embed之前还要把父cell
       的所有子cell全部排除，防止再次embed,并且排除其他不相关cell的子cell，防止embed从属关系错乱，剩下的
       则是此次要embed的cell */
      embed() {
        if (this.cells.length === 0) {
          alert('未选中任何元素');
          return;
        }
        // 取消元素高亮
        this.unHighLight();
        // 如果选中的图形有第0层的图形，则报错
        if (this.options.layer && this.currentLayer !== 0) {
          for (let i = 0; i < this.cells.length; i++) {
            if (this.cells[i].attributes.layer === 0) {
              alert('不能操作第0层的图形');
              return;
            }
          }
        }
        if (this.cells.length === 1) {
          alert('只选中了一个元素，无法组合');
          return;
        }
        let parent = this.cells[0];
        let embedChilds = this.cells.slice(1);
        // //  判断是否已经组合过
        // for (let i = 0; i < embedChilds.length; i++) {
        //   if (embedChilds[i].attributes.parent === parent.id) {
        //     alert('已经组合过');
        //     return;
        //   }
        // }
        // 组合时要把父级元素的子cell全部删除
        let allChilds = parent.getEmbeddedCells({deep: true}).map(function (cell) {
          return cell.id;
        });
        if (allChilds.length !== 0) {
          embedChilds = embedChilds.filter(function (cell) {
            return !allChilds.includes(cell.id);
          });
        }
        // 还要把其他元素的子元素全部删除
        let reallyCell = embedChilds.filter(function (cell) {
          return !cell.attributes.hasOwnProperty('parent');
        });
        for (let i = 0; i < reallyCell.length; i++) {
          parent.embed(reallyCell[i]);
        }
        this.cells = [];
      },
      /* 解除组合图形，根据embeds和parent属性找 */
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
        let embedCellsId = this.embedCells.map(function (cell) {
          return cell.id;
        });
        // 如果选中的图形之间有组合关系，那么删除子cell
        if (this.embedCells.length > 0) {
          this.embedCells = this.embedCells.filter(function (cell) {
            let parent = cell.attributes.hasOwnProperty('parent');
            return !(parent && embedCellsId.includes(cell.attributes.parent));
          });
        }
        for (let i = 0; i < this.embedCells.length; i++) {
          let parent = this.embedCells[i].attributes.parent ? this.centerGraph.getCell(this.embedCells[i].attributes.parent) : undefined;
          if (parent) {
            // 如果选中的是子cell
            parent.unembed(this.embedCells[i]);
          } else {
            // 如果选中的是parent cell
            let childs = this.embedCells[i].attributes.embeds;
            if (childs) {
              for (let j = 0; j < childs.length; j++) {
                this.embedCells[i].unembed(this.centerGraph.getCell(childs[j]));
              }
            }
          }
        }
        // 要判断是否还能解绑，完全解绑后所有元素都没有祖先元素
        // let count = 0;
        // for (let m = 0; m < this.cells.length; m++) {
        //   if (this.cells[m].getAncestors().length === 0) {
        //     count++;
        //   }
        // }
        // if (count === this.cells.length) {
        //   alert('所有元素都已解绑！');
        //   return;
        // }
        this.cells = [];
        this.embedCells = [];
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
      // 删除图形
      delSelf() {
        let parent = this.getParent(this.view.model);
        let allChilds = parent.getEmbeddedCells({deep: true});
        for (let j = 0; j < allChilds.length; j++) {
          if (this.options.isArea && allChilds[j].attributes.hasOwnProperty('link') && allChilds[j].attributes.link) {
            // 设备中的链接图形
            this.delLinkAttr(allChilds[j]);
          }
        }
        if (this.options.isArea && parent.attributes.hasOwnProperty('equipId')) { // 是设备
          this.equipList = {id: parent.attributes.equipId, uuid: parent.attributes.uuid, add: false};
          this.currentEquip = '';
          if (parent.attributes.hasOwnProperty('link') && parent.attributes.link) {
            this.delLinkAttr(parent);
          }
          let uuid = parent.attributes.uuid;
          let dg = joint.V(this.centerPaper.viewport).find('#' + uuid)[0];
          let layers = dg.children();
          for (let i = 0; i < layers.length; i++) {
            let cell = this.centerGraph.getCell(layers[i].children()[0].attr('model-id'));
            let parent = this.getParent(cell);
            parent.remove();
            layers[i].remove();
          }
          dg.remove();
        } else {
          // 是链接图形
          if (parent.attributes.hasOwnProperty('link') && parent.attributes.link) {
            this.delLinkAttr(parent);
          }
        }
        parent.remove();
        this.hideBtn();
      },
      // 删除对应数据池中对应的链接属性数据
      delLinkAttr(cell) {
        this.editorLink = {
          'delete': true,
          'svgId': cell.id
        };
      },
      // 复制图形
      copySelf() {
        // 获取所有cell如果组合过，则包含所有父cell和子cell
        let allCells = this.getAllCells(this.view);
        let clone = this.centerPaper.findViewByModel(allCells[0]).model.clone({deep: true});
        for (let i = 0; i < clone.length; i++) {
          clone[i].translate(20, 20);
          clone[i].attributes['defaultName'] = '图形' + (this.centerGraph.getCells().length + i + 1);
        }
        this.centerGraph.addCells(clone);
        this.view = this.centerPaper.findViewByModel(clone[0]);
        this.creatWrapper(this.view, this.centerPaper);
        if (this.options.isArea) {
          this.sortDevice(clone[0], clone);
          if (clone[0].attributes.hasOwnProperty('equipId')) {
            this.currentEquip = clone[0].attributes.uuid;
            // this.equipList = {id: clone[0].attributes.equipId, uuid: clone[0].attributes.uuid, add: true};
          }
        } else {
          this.propertyPane(this.view);
        }
      },
      // 旋转图形（功能取消）
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
          angled.push(allCells[j].attributes.angle ? allCells[j].attributes.angle : 0);
        }
        // 旋转角度等于（鼠标位置与中心点的角度angle2 - 按钮位置与中心点的角度angle1 + 已经转过的角度）
        $(document).off('mousemove').on('mousemove', function(event) {
          let oPos = that.creatWrapper(that.centerPaper.findViewByModel(allCells[0]), that.centerPaper);
          let ox = (oPos.max_x - oPos.min_x) / 2 + oPos.min_x;
          let oy = (oPos.max_y - oPos.min_y) / 2 + oPos.min_y;
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
            /* true表示不是对上一个角度的累加而是一个绝对角度 */
            allCells[i].rotate(angle2 - angle1 + angled[i], true, {x: ox, y: oy});
            allCells[i].attr('text/transform', 'rotate(' + (angle1 - angle2 - angled[i]) + ')');
          }
        });
        $(document).on('mouseup', function(event) {
          $(document).off('mousemove');
        });
      },
      // 缩放图形
      stretchSelf(e) {
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
        $('#display_box').off('mousemove').on('mousemove', function(event) {
          // 放大宽高
          let [scaleX, scaleY] = [];
          let border = that.getBorder(that.view, that.centerPaper);
          /* 拉伸按钮id依次为
           0 1 2
           3   4
           5 6 7 */
          // scaleX
          // 控制鼠标在画布范围内
          if (id === 0 || id === 3 || id === 5) {
            scaleX = px - event.pageX;
          } else if (id === 2 || id === 4 || id === 7) {
            scaleX = event.pageX - px;
          } else if (id === 1 || id === 6) {
            scaleX = 0;
          }
          // scaleY
          if (id === 0 || id === 1 || id === 2) {
            scaleY = py - event.pageY;
          } else if (id === 5 || id === 6 || id === 7) {
            scaleY = event.pageY - py;
          } else if (id === 3 || id === 4) {
            scaleY = 0;
          }
          // 设置最小变形后的高宽为20*20
          let scx = allCells[0].size().width / (border.max_x - border.min_x);
          let scy = allCells[0].size().height / (border.max_y - border.min_y);
          let first = that.minWidthAndHeight(width[0] + scaleX * scx, height[0] + scaleY * scy);
          allCells[0].resize(first.scaleX, first.scaleY, {direction: that.judgeDirection(id)});
          let [ratioX, ratioY] = [first.scaleX / width[0], first.scaleY / height[0]];
          for (let j = 1; j < allCells.length; j++) {
            // 这个图形所占整个图形的比例
            allCells[j].resize(ratioX * width[j], ratioY * height[j], {direction: that.judgeDirection(id)});
            allCells[j].position(ratioX * disX[j - 1], ratioY * disY[j - 1], {parentRelative: true});
          }
          // 拉伸时只显示当前按钮
          $('.stretch-icon').hide();
          $('#stretchSelf' + id).show();
          that.creatWrapper(that.centerPaper.findViewByModel(allCells[0]), that.centerPaper);
        });
        // 鼠标松开解除mousemove事件
        $('#display_box').on('mouseup', function(event) {
          $('#display_box').off('mousemove');
          $('.stretch-icon').show();
        });
      },
      // 根据缩放按钮的坐标判断缩放的方向
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
      // 设置图形最小缩小大小
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
      getPath(width, height, px, py, d) {
        let cell = new joint.shapes.basic.Path({
          position: { x: px, y: py },
          size: { width: width, height: height },
          attrs: {
            text: { text: '', 'ref-y': 0.5, 'y-alignment': 'middle', 'ref-dy': null },
            path: {
              'd': d,
              'stroke': '#dc143c',
              'stroke-width': 3,
              'fill': 'transparent'
            }
          }
        });
        return cell;
      },
      // 结束一个path图形的绘制
      endPath(startPoint, path) {
        if (path.attr('d').includes('L') || path.attr('d').includes('Q')) {
          let ph;
          if (path.attr('d').includes('L')) {
            ph = path.attr('d').split('L');
            if (ph[ph.length - 1].trim() === ph[ph.length - 2].trim()) {
              path.attr('d', path.attr('d').substring(0, path.attr('d').lastIndexOf('L') - 1))
            }
          } else {
            ph = path.attr('d').split('Q');
            let last = ph[ph.length - 1].trim().split(' ');
            if (last[0] === last[2] && last[1] === last[3]) {
              path.attr('d', path.attr('d').substring(0, path.attr('d').lastIndexOf('Q') - 1))
            }
          }
          let realPath;
          let d = path.attr('d').match(/\s\d+/g);
          d = d.map(function (d) {
            return parseInt(d);
          });
          let [px, py] = [d[0], d[1]];
          // 算出最小的px ,py
          for (let i = 0; i < d.length; i++) {
            if (i % 2 === 0) {
              if (d[i] < px) {
                px = d[i];
              }
            } else {
              if (d[i] < py) {
                py = d[i];
              }
            }
          }
          for (let i = 0; i < d.length; i++) {
            if (i % 2 === 0) {
              d[i] -= px;
              if (path.attr('d').includes('L')) {
                if (i !== 0) {
                  d[i] = 'L ' + d[i];
                }
              } else {
                if (i === 2 || (i - 2) % 4 === 0) {
                  d[i] = 'Q ' + d[i];
                }
              }
            } else {
              d[i] -= py;
            }
          }
          if (path.attr('d').includes('Z')) {
            realPath = 'M ' + d.join(' ') + ' Z'
          } else {
            realPath = 'M ' + d.join(' ');
          }
          let [width, height] = [path.getBBox().width, path.getBBox().height];
          let num = realPath.match(/[LQ]/g);
          if (num.length === 1) { // 如果是一条直线，宽和高为0，那么图形就显示不出来，因此要做处理
            if (!width) {
              width = 1;
            }
            if (!height) {
              height = 1;
            }
          }
          let cell = this.getPath(width, height, px, py, realPath);
          cell.attr('path/stroke', '#8792c3');
          cell.attributes.defaultName = '图形' + (this.centerGraph.getCells().length + 1);
          this.centerGraph.addCell(cell);
        }
        if (this.path.type === 'Q' && path.attr('d').includes('Q')) {
          this.drawController(path.attr('d'), this.centerGraph.getLastCell());
        }
        this.path.count = 0;
        this.path.d = '';
        startPoint.remove();
        path.remove();
      },
      // 曲线控制点跟随图形一起移动
      moveController(cellView) {
        if (cellView.model.attributes.type === 'basic.Path' && cellView.model.attr('path/d').includes('Q')) {
          let id = cellView.model.id;
          let [sx, sy] = [cellView.model.getBBox().origin().x, cellView.model.getBBox().origin().y];
          let path = cellView.model.attr('path/d').split('Q');
          let circles = joint.V(this.centerPaper.viewport).find('.control-point');
          let lines = joint.V(this.centerPaper.viewport).find('.control-line');
          for (let i = 0; i < circles.length; i++) {
            if (circles[i].attr('svgId') === id) {
              // 控制点坐标加上图形坐标
              let index = parseInt(circles[i].attr('class').substring(circles[i].attr('class').length - 1));
              let control = path[index].trim().split(' ');
              circles[i].attr('cx', parseInt(control[0]) + sx).attr('cy', parseInt(control[1]) + sy);
            }
          }
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].attr('svgId') === id) {
              let index = parseInt(circles[i].attr('class').substring(circles[i].attr('class').length - 1));
              let control = path[index].trim().split(' ');
              let former = path[index - 1].trim().split(' ');
              if (former.length === 3) {
                lines[i].attr('x1', sx + parseInt(former[1])).attr('y1', sy + parseInt(former[2]));
              } else {
                lines[i].attr('x1', sx + parseInt(former[2])).attr('y1', sy + parseInt(former[3]));
              }
              lines[i].attr('x2', parseInt(control[0]) + sx).attr('y2', parseInt(control[1]) + sy);
            }
          }
        }
      },
      // 删除曲线控制点
      deleteController() {
        if (joint.V(this.centerPaper.viewport).find('.control-point').length !== 0) {
          let circle = joint.V(this.centerPaper.viewport).find('.control-point');
          let line = joint.V(this.centerPaper.viewport).find('.control-line');
          for (let i = 0; i < circle.length; i++) {
            circle[i].remove();
            line[i].remove();
          }
        }
      },
      // 绘制曲线控制点
      drawController() {
        console.log('绘制控制点')
        let control = arguments[0].split('Q');
        let [circles, lines] = [[], []];
        for (let i = 1; i < control.length; i++) {
          let current = control[i].trim().split(' ');
          let former = control[i - 1].trim().split(' ');
          let [x, y] = [];
          if (former.length === 3) {
            x = former[1];
            y = former[2];
          } else {
            x = former[2];
            y = former[3];
          }
          let addX = arguments.length === 3 ? arguments[1].getBBox().origin().x : 0;
          let addY = arguments.length === 3 ? arguments[1].getBBox().origin().y : 0;
          let line = joint.V('line', { svgId: arguments[1].id, class: 'control-line control-line' + i, stroke: '#999', 'stroke-dasharray:': '5,3', 'stroke-width': 1, x1: parseInt(x) + addX, y1: parseInt(y) + addY, x2: parseInt(current[0]) + addX, y2: parseInt(current[1]) + addY });
          joint.V(this.centerPaper.viewport).append(line);
          let circle = joint.V('circle', { svgId: arguments[1].id, r: 3, fill: '#4169e1', class: 'control-point control-point' + i, cx: parseInt(current[0]) + addX, cy: parseInt(current[1]) + addY });
          joint.V(this.centerPaper.viewport).append(circle);
          circles.push(circle);
          lines.push(line);
        }
        $('.control-point').on('mousedown', {param: [this, arguments[1]]}, this.dragPoints);
      },
      // 拖动曲线的控制点，改变曲线线条
      dragPoints(event) {
        console.log('拖动控制点');
        let that = event.data.param[0];
        let cell = event.data.param[1];
        let minX = $('#display_box').offset().left;
        let minY = $('#display_box').offset().top;
        let index = parseInt($(event.target).attr('class').substr($(event.target).attr('class').length - 1));
        that.drag.value = true;
        $('#display_box').off('mousemove').on('mousemove', function (event) {
          let circle = joint.V(that.centerPaper.viewport).find('.control-point' + index);
          let line = joint.V(that.centerPaper.viewport).find('.control-line' + index);
          circle[0].attr('cx', event.pageX - minX).attr('cy', event.pageY - minY);
          line[0].attr('x2', event.pageX - minX).attr('y2', event.pageY - minY);
          let path = cell.attr('path/d').split('Q');
          let control = path[index].trim().split(' ');
          control[0] = circle[0].attr('cx') - cell.getBBox().origin().x;
          control[1] = circle[0].attr('cy') - cell.getBBox().origin().y;
          path[index] = ' ' + control.join(' ') + ' ';
          cell.attr('path/d', path.join('Q'));
          let cellView = that.centerPaper.findViewByModel(cell);
          cell.size({width: cellView.getBBox().width, height: cellView.getBBox().height});
        });
        $('#display_box').on('mouseup', function () {
          $('#display_box').off('mousemove').on('mousemove', function (event) {
            let minX = $('#display_box').offset().left;
            let minY = $('#display_box').offset().top;
            // 获得其他图形的边界
            let px = event.pageX - minX;
            let py = event.pageY - minY;
            if (px || py) {
              $('#position_x').html(parseInt(px))
              $('#position_y').html(parseInt(py));
              $('#position').css('display', 'block')
            } else {
              $('#position').css('display', 'none')
            }
          });
          that.drag.value = false;
        })
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
              'font-weight': 'normal',
              'ref-dy': null,
              'ref-y': 0.5
            }
          }
        });
        return cell;
      },
      // 画直线
      getLine(paper) {
        let line = joint.V('line', { x1: 20, y1: 30, x2: 100, y2: 30, stroke: '#8792c3', 'stroke-width': 3, class: 'drawLine' });
        joint.V(paper.viewport).append(line);
      },
      // 画曲线
      getCurve(paper) {
        let path = joint.V('path', { d: 'M 20 100 Q 60 60 100 100', stroke: '#8792c3', 'stroke-width': 3, class: 'drawCurve', fill: 'transparent' });
        joint.V(paper.viewport).append(path);
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
      // 清除画布
      clearPaper() {
        let cells = this.centerGraph.getCells();
        cells = cells.filter(function(cell) {
          return !(cell.attributes.hasOwnProperty('parent') && cell.attributes.hasOwnProperty('embeds'));
        });
        cells.map(function(cell) {
          cell.remove();
        });
        if (this.options.layer) {
          let layers = joint.V(this.centerPaper.viewport).find('.layerNum');
          for (let i = 0; i < layers.length; i++) {
            layers[i].remove();
          }
          $('.layerTree li').each(function () {
            $('span[data-layer="0"]').addClass('highlight');
            if (parseInt($(this).find('span').attr('data-layer')) !== 0) {
              $(this).remove();
            }
          });
        } else if (this.options.isArea) {
          // 删除g标签
          let dg = joint.V(this.centerPaper.viewport).find('.dg');
          for (let i = 0; i < dg.length; i++) {
            let layer = dg[i].children();
            for (let j = 0; j < layer.length; j++) {
              let cell = this.centerGraph.getCell(layer[j].children()[0].attr('model-id'));
              let parent = this.getParent(cell);
              parent.remove();
              layer[j].remove();
            }
            dg[i].remove();
          }
        }
        this.unHighLight();
        this.hideBtn();
        this.view = null;
        this.contextMenu = null;
        this.currentLayer = 0;
        this.cells = [];
        this.svg = [];
        this.embedCells = [];
        this.path = {value: false, count: 0, type: 'L'};
        this.drag = {value: false, index: 0};
        this.z = 0;
        this.currentEquip = null;
        this.editorLink = {};
        this.equipList = {};
        this.svgZoom = '';
      },
      // 将图形置于底层或顶层
      frontAndBack(e) {
        if (this.view) {
          let role = this.judgeRole(this.view);
          if ($(e).hasClass('front_figure') || $(e.target).hasClass('front_f')) {
            this.z = 1;
            if (JSON.stringify(role) === '{}') {
              // this.view.model.toFront();
              console.log(this.view.model.toFront);
            } else {
              role.parent.toFront({'deep': true});
            }
          } else if ($(e).hasClass('back_figure') || $(e.target).hasClass('front_f')) {
            console.log(2222)
            this.z = 0;
            if (JSON.stringify(role) === '{}') {
              this.view.model.toBack();
            } else {
              role.parent.toBack({'deep': true});
            }
          }
        }
      },
      // 生成模板设备类库
      generateShapes() {
        // 先获取所有终极父级元素，得到每个设备的宽高,每个设备间距10
        $('#component').css({
          'height': this.options.gallery.length * 120
        });
        let parentId = [];
        for (let i = 0; i < this.options.gallery.length; i++) {
          let svgs = JSON.parse(this.options.gallery[i].svg);
          for (let j = 0; j < svgs.length; j++) {
            if (svgs[j].layer === 1) {
              if (svgs[j].svg.length === 1) {
                parentId.push(svgs[j].svg[0].id);
              } else {
                for (let k = 0; k < svgs[j].svg.length; k++) {
                  if (svgs[j].svg[k].hasOwnProperty('embeds') && svgs[j].svg[k].hasOwnProperty('embeds').length !== 0 && svgs[j].svg[k].hasOwnProperty('parent') === false) {
                    // 判断是每个设备的终极父级图形
                    parentId.push(svgs[j].svg[k].id);
                  }
                }
              }
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
            allCells[0].position(10 + (allCells[0].getBBox().origin().x - border.min_x) * ratio, (allCells[0].getBBox().origin().y - border.min_y) * ratio + k * 120);
            for (let i = 1; i < allCells.length; i++) {
              allCells[i].position(ratio * disX[i - 1] + allCells[0].getBBox().origin().x, ratio * disY[i - 1] + allCells[0].getBBox().origin().y);
            }
          }
        }
      },
      // 获取图形在画布的最大最小x,y坐标
      getBorder(cellView, paper) {
        let parent = this.getParent(cellView.model);
        let childs = parent.getEmbeddedCells({deep: true});
        let BBox = paper.findViewByModel(parent).getBBox();
        let pointXArr = [BBox.corner().x, BBox.origin().x];
        let pointYArr = [BBox.corner().y, BBox.origin().y];
        for (let i = 0; i < childs.length; i++) {
          let childBBox = paper.findViewByModel(childs[i]).getBBox();
          pointXArr.splice(pointXArr.length, 0, childBBox.corner().x, childBBox.origin().x);
          pointYArr.splice(pointYArr.length, 0, childBBox.corner().y, childBBox.origin().y);
        }
        let extremeX = this.getExtreme(pointXArr);
        let extremeY = this.getExtreme(pointYArr);
        return {max_x: extremeX.max, min_x: extremeX.min, max_y: extremeY.max, min_y: extremeY.min};
      },
      // 获取数组中的最大最小值
      getExtreme(arr) {
        return {max: Math.max(...arr), min: Math.min(...arr)};
      },
      // 获取终极祖先cell
      getParent(cell) {
        return cell.getAncestors().length !== 0 ? cell.getAncestors()[cell.getAncestors().length - 1] : cell;
      },
      getAllCells(view) { // 根据当前点击图形获取与之组合在一起的图形
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

      unHighLight() {  // 取消图形的高亮
        for (let i = 0; i < this.cells.length; i++) {
          this.centerPaper.findViewByModel(this.cells[i]).unhighlight();
        }
        this.changeClassName([{new: 'group_disabled', old: 'group_figure'}, {new: 'ungroup_disabled', old: 'ungroup_figure'}]);
      },
      creatWrapper(cellView, centerPaper) { // 图形外加按钮跟随图形一起移动
        if ($('#functionBtn').length === 0) {
          this.loadBtn(cellView);
        }
        if ($('#labelBox').length === 0) {
          this.loadToolTip(cellView);
        }
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
        // if (this.options.scale) { // 为啥区域不让显示？我把判断去掉了
        $('#labelBox').empty().append('宽：' + parseInt(maxX - minX) + 'px，高：' + parseInt(maxY - minY) + 'px，左上角x：' + parseInt(minX) + 'px，左上角y：' + parseInt(minY) + 'px');
        // }
      },
      hideBtn () {
        // 隐藏图形外加按钮
        $('#functionBtn').hide();
        $('#dragBtn').hide();
        $('#labelBox').hide();
        $('#toolTip').hide();
        this.changeClassName([{new: 'front_disabled', old: 'front_figure'}, {new: 'back_disabled', old: 'back_figure'}]);
      },
      changeClassName(arr) { // 改变元素类名
        if (arr instanceof Array === true && arr.length !== 0) {
          for (let i = 0; i < arr.length; i++) {
            $('.' + arr[i].old).removeClass(arr[i].old).addClass(arr[i].new);
          }
        } else {
          console.log('参数不正确');
        }
      },
      snUuid(snName) { // 生成uuid
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
      cloneobj(obj) { // 深度复制
        return JSON.parse(JSON.stringify(obj));
      },
      changeDrawType() {
        $('#display_box').removeClass('crosshair');
        this.path = {'value': false, 'count': 0, 'type': 'L'};
        this.drag = {'value': false, 'index': 0};
      },
      restoreSize() {
        // 还原
        this.centerPaper.scale(1, 1);
        $('#display_box').css({'width': '702px', 'height': '435px'});
      },
      getPaperZoom(scale) {
        this.paperZoom = scale;
      }
    };
    return obj;
  }
};
export {jointD};
