import $ from 'jquery'
import joint from 'jointjs'
/**
 * Created by 吴旭健 on 2017/11/29.
 */
// 创建画板
var centergraph; // 中间布局画板
var centerPaper;// 中间画布
var leftgraph;
var leftPaper;
var view;// 中间参数
var [idUp, idDown] = [];
var angle = {};// 记录每个元素的旋转角度
var cells = [];// 记录要组合的cell
// 记录要组合的cell和对应的父级的id
var groups = localStorage.hasOwnProperty('groups') ? JSON.parse(localStorage.getItem('groups')) : [];
var highlightedCellViews = [];
const jointD = {
  // 加载周围按钮，删除，旋转，复制，拉伸
  loadBtn(cellView) {
    let delSelf = '<div id="delSelf" class="left_top" onclick="delSelf();"><i class="iconfont">&#xe634;</i></div>';
    let rotateSelf = '<div id="rotateSelf" class="left_bottom" onmousedown="rotateSelf(centerPaper, this);"><i class="iconfont">&#xe76f;</i></div>';
    let copySelf = '<div id="copySelf" class="right_top" onclick="copySelf();"><i class="iconfont">&#xe6e9;</i></div>';
  // let stretchSelf = '<div id="stretchSelf" class="stretch-icon" onmousedown="stretchSelf(centerPaper, this)"><i class="iconfont">&#xe505;</i></div>';
    let functionBtn = '<div id="functionBtn"></div>';
    let dragBtn = '<div id="dragBtn">' + delSelf + rotateSelf + copySelf + '</div>';
    $('#display_box').append(functionBtn);
    $('#display_box').append(dragBtn);
    for (let i = 0; i < 8; i++) {
      $('#functionBtn').append('<div id="stretchSelf' + i + '" class="stretch-icon" onmousedown="stretchSelf(centerPaper, this)"><i class="iconfont" style="font-size: 25px;">&#xe505;</i></div>');
    }
  // 改变外加按钮的位置，使之跟随当前元素移动
    this.creatWrapper(cellView, centerPaper);
  },
  // 将localStorage中的数据显示出来，以id和对应的cell存储
  // 不用for in遍历的理由：localStorage中还有其他属性如length
  loadStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      // 跳过groups属性
      if (key === 'groups' || key === 'loglevel:webpack-dev-server') {
        continue;
      }
      angle[key] = JSON.parse(localStorage.getItem(key)).angle;
      centergraph.addCells([JSON.parse(localStorage.getItem(key))]);
    }
  },
  /* 加off()防止多次绑定
   *obj  操作的input
   * min, max 值区间
   * type 形状类型 rect, circle, ellipse
   * data_obj 改变颜色的类型 fill, outline, fill */
  propertyPane(cellView) {
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
        cellView.model.attr('' + type + '/stroke-width', $('#outline-thickness').val());
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
        cellView.model.attr('' + type + '/stroke-width', $('#outline-thickness').val());
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
        if (dataObj === 'fill') {
          cellView.model.attr('' + type + '/fill', $(this).css('background-color'));
        } else if (dataObj === 'stroke') {
          cellView.model.attr('' + type + '/stroke', $(this).css('background-color'));
        } else {
          cellView.model.attr('text/fill', $(this).css('background-color'));
        }
      });
    });
    // 点击其他地方隐藏画板
    $(document).off('click').on('click', function(e) {
      $('.color-picker').hide();
    });
  },
  initPropertyPane() {  // 这里为什么是空的？

  },
  initLeftPaper() {
    let ElementView = this.getLeftElementView();     // 初始化元素样式
    // var LinkView = getLeftLinkView();           ///初始化线段样式
    leftgraph = new joint.dia.Graph();        // 生成画板
    leftPaper = new joint.dia.Paper({       // 生成画布
      el: $('#component_box'),
      width: 250,
      height: 500,
      model: leftgraph,
      gridSize: 1,
      elementView: ElementView
    });
    // var cell5=getShape(5);
    // var cell6=getShape(6);
    // var cell7=getShape(7);
    let [cell1, cell2, cell3, cell4, cell8] = [this.getShape(1), this.getShape(2), this.getShape(3), this.getShape(4), this.getShape(8)];
    leftgraph.addCells([cell1, cell2, cell3, cell4, cell8]);
    this.addLeftPaperEvent(leftPaper);  // 添加paper事件
  },
  initCenterPaper() {
    // var ElementView = getLeftElementView();     //初始化元素样式
    centergraph = new joint.dia.Graph();        // 生成画板
    centergraph.on('change', function (cell) {
      localStorage.setItem(cell.id, JSON.stringify(cell));
    });
    centergraph.on('add', function (cell) {
      localStorage.setItem(cell.id, JSON.stringify(cell));
    });
    centergraph.on('remove', function (cell) {
      delete angle[cell.id];
      delete localStorage[cell.id];
    });
    centerPaper = new joint.dia.Paper({       // 生成画布
      el: $('#display_box'),
      width: 800,
      height: 500,
      model: centergraph,
      gridSize: 1,
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
      interactive: true
      // elementView: ElementView
    });
    // 缩略图
    let paperSmall = new joint.dia.Paper({
      el: $('.thumbnail'),
      width: 230,
      height: 230,
      model: centergraph,
      gridSize: 1
    });
    paperSmall.scale(0.5);
    paperSmall.$el.css('pointer-events', 'none');
    this.addCenterPaperEvent(centerPaper);
  },
  /**
   *根据序号获取图形
   *index   序号
   *addnew   true 用于右侧新增样式
   *
   */
  getShape(index, addnew) {
    let cell;
    if (index === 1) {
      cell = this.getRect(0, 0, 'rgb(238,244,247)', '矩形', 100, 50);
    } else if (index === 2) {
      cell = this.getEllipse(addnew ? 10 : 150, 0, 'rgb(238,244,247)', '椭圆', 100, 50, '10px', '30px');
    } else if (index === 3) {
      cell = this.getCircle(0, addnew ? 10 : 75, 80, 80, '圆');
    } else if (index === 4) {
      cell = this.getCircle(addnew ? 10 : 150, addnew ? 10 : 90, 80, 60, '椭圆');
    } else if (index === 5) {
      cell = this.getLink(0, addnew ? 10 : 180, 200, addnew ? 10 : 180, '#222138', '#31d0c6', 'M 10 0 L 0 5 L 10 10 z', '#fe854f', 'M 10 0 L 0 5 L 10 10 z', 1, 'none', '#7c68fc', '粗线');
    } else if (index === 6) {
      cell = this.getLink(0, addnew ? 10 : 200, 200, addnew ? 10 : 200, '#fe854f', '#fe854f', 'M 10 0 L 0 5 L 10 10 z', '#fe854f', 'M 10 0 L 0 5 L 10 10 z', 4, '#fe854f', '#fe854f', '细线');
    } else if (index === 7) {
      cell = this.getLink(0, addnew ? 10 : 220, 200, addnew ? 10 : 220, 'black', '#4b4a67', 'M 10 0 L 0 5 L 10 10 ', '#4b4a67', 'M 10 0 L 0 5 L 10 10 z', 1, '#4b4a67', '#4b4a67', '连线');
    } else if (index === 8) {
      cell = this.getCustom(0, addnew ? 10 : 185, 80, 80, '自定义');
    }
    return cell;
  },
  addLeftPaperEvent(paper) {
    // 给所有左侧元素添加点击事件
    let that = this;
    paper.on('cell:click', function (cellView, evt, x, y) {
      // 添加中间画图板内容通过clone()
      let role = that.judgeRole(cellView);
      if (JSON.stringify(role) === '{}') {
        let clone = cellView.model.clone();
        // 复制时z也是一样，要重新修复
        clone.set('z', centergraph.getCells().length + 1);
        clone.position(0, 0);
        centergraph.addCells(clone);
      } else {
        let clone = role.parent.clone({deep: true});
        centergraph.addCells(clone);
        clone[0].position(0, 0, {deep: true});
        for (let j = 0; j < clone.length; j++) {
          clone[j].set('z', centergraph.getCells().length + j + 1);
        }
      }
    });
  },
  // 中间画板元素事件
  addCenterPaperEvent(paper) {
    // 组合时选中框的起始点和终点坐标
    let [that, sx, sy, ex, ey] = [this];
    // 单击画布空白部分时
    paper.on('blank:pointerdown', function(evt, x, y) {
      // Unhighlight all cells.
      that.unhighlight();
      // 隐藏外加按钮
      $('#functionBtn').hide();
      $('#dragBtn').hide();
      sx = x;
      sy = y;
      // 生成选中框
      $(document).on('mousemove', function (event) {
        let px = event.pageX - $('#display_box').offset().left;
        let py = event.pageY - $('#display_box').offset().top;
        if ($('.moving_box')[0]) {
          $('.moving_box').css({
            'left': sx + 'px',
            'top': sy + 'px',
            'width': (px - sx) + 'px',
            'height': (py - sy) + 'px',
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
      // 获得最大最小x,y
      let maxX = ex > sx ? ex : sx;
      let maxY = ey > sy ? ey : sy;
      let minX = ex > sx ? sx : ex;
      let minY = ey > sy ? sy : ey;
      cells = [];
      // 将在鼠标范围内的cell push进数组中，必须包含整个cell
      for (let i = 0, len = centergraph.getCells().length; i < len; i++) {
        let width = centergraph.getCells()[i].get('size').width;
        let height = centergraph.getCells()[i].get('size').height;
        let x = centergraph.getCells()[i].get('position').x;
        let y = centergraph.getCells()[i].get('position').y;
        if ((x >= minX) && (x + width <= maxX) && (y >= minY) && (y + height <= maxY)) {
          // 判断这个cell是否为父cell or 子cell,或者只是单个cell
          let role = that.judgeRole(centerPaper.findViewByModel(centergraph.getCells()[i]));
          if (JSON.stringify(role) === '{}') {
            if (cells.indexOf(centergraph.getCells()[i]) === -1) {
              cells.push(centergraph.getCells()[i]);
              highlightedCellViews.push(centerPaper.findViewByModel(centergraph.getCells()[i]));
              centerPaper.findViewByModel(centergraph.getCells()[i]).highlight();
            }
          } else {
            // 不是单个cell的话找到该cell的终极祖先元素，然后把祖先元素本身和祖先元素的所有子元素全部push
            if (cells.indexOf(role.parent) === -1) {
              cells.push(role.parent);
              highlightedCellViews.push(centerPaper.findViewByModel(role.parent));
              centerPaper.findViewByModel(role.parent).highlight();
            }
            let allChilds = role.parent.getEmbeddedCells({deep: true});
            for (let j = 0; j < allChilds.length; j++) {
              if (cells.indexOf(allChilds[j]) === -1) {
                cells.push(allChilds[j]);
                highlightedCellViews.push(centerPaper.findViewByModel(allChilds[j]));
                centerPaper.findViewByModel(allChilds[j]).highlight();
              }
            }
          }
        }
      }
      // console.log(cells);
    });

    paper.on('cell:pointerdown', function(cellView, evt, x, y) {
      // 定义全局变量，用来判断当前点击元素是否为同一个
      idDown = cellView.id;
      if (idUp !== idDown) { // 判断点击的是否为当前view
        if ($('#functionBtn').length === 0) {
          that.loadBtn(cellView);
        }
      }
      that.creatWrapper(cellView, centerPaper);
      // 如果有父级将事件传到父级上，点击子元素时父元素也能跟着一起动，保持相对位置不变
      let parent = cellView.model.getAncestors()[cellView.model.getAncestors().length - 1];
      if (parent) {
        cellView.pointerup(evt);
        centerPaper.sourceView = centerPaper.findViewByModel(parent);
        let localPoint = centerPaper.snapToGrid({ x: evt.clientX, y: evt.clientY });
        centerPaper.findViewByModel(parent).pointerdown(evt, localPoint.x, localPoint.y);
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

      view = cellView;
      that.propertyPane(cellView);
    });
    paper.on('cell:pointermove', function(cellView) {
      that.creatWrapper(cellView, centerPaper);
    });
    paper.on('cell:pointerup', function(cellView) {
      idUp = cellView.id;
      console.log(cellView);
    });
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
        if (id1.indexOf(id2[k]) === -1) {
          return false;
        }
      }
      for (let m = 0; m < id1.length; m++) {
        if (id2.indexOf(id1[m]) === -1) {
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
    // 取消元素高亮
    this.unhighlight();
    if (cells.length === 0) {
      alert('未选中任何元素');
      return;
    }
    if (cells.length === 1) {
      alert('只选中了一个元素，无法组合');
      return;
    }
    let parent = this.getParent(cells[0]);
    let newCells = [];
    for (let j = 0; j < cells.length; j++) {
      if (cells[j].id === parent.id) {
        continue;
      }
      newCells.push(cells[j]);
    }
    // 查找groups中的数据，判断其中所有的cell的id是否相同判断是否已经组合过
    for (let k = groups.length - 1; k >= 0; k--) {
      if (groups[k].parent === parent.id) {
        if (this.arrEquals(groups[k].childs, newCells)) {
          alert('已经组合过');
          return;
        }
      }
    }
    // 删除parent下的所有子cell
    let allChilds = parent.getEmbeddedCells({deep: true});
    if (allChilds) {
      for (let j = 0; j < allChilds.length; j++) {
        if (cells.indexOf(allChilds[j])) {
          delete cells[cells.indexOf(allChilds[j])];
        }
      }
    }
    if (cells.length > 1) {
      groups.push({parent: parent.id, childs: []});
      for (let i = 0; i < cells.length; i++) {
        // 如果剩下的元素有祖先元素，删除其本身，直接embed该祖先元素
        if (cells[i]) {
          if (cells[i].getAncestors().length !== 0) {
            delete cells[i];
          }
        }
        if (cells[i]) {
          if (cells[i].id === parent.id) {
            continue;
          }
          parent.embed(cells[i]);
          groups[groups.length - 1].childs.push(cells[i]);
        }
      }
      localStorage.setItem('groups', JSON.stringify(groups));
    }
    console.log(groups);
  },
  /* 解绑是unembed获取选中的所有cell上的最后一步组合操作 */
  unembed() {
    this.unhighlight();
    // 要判断是否还能解绑，完全解绑后所有元素都没有祖先元素
    let count = 0;
    for (let m = 0; m < cells.length; m++) {
      if (cells[m].getAncestors().length === 0) {
        count++;
      }
    }
    if (count === cells.length) {
      alert('所有元素都已解绑！');
      return;
    }
    let parent = this.getParent(cells[0]);
    let ids = [];
    for (let j = 0; j < groups.length; j++) {
      ids.push(groups[j].parent);
    }
    if (ids.indexOf(parent.id) === -1) {
      alert('该图形是模板图形，不能解绑');
      return;
    }
    // var copyCell = cells.slice(0);
    let index;
    let matches;
    // 获取最后一步操作的记录
    for (let i = groups.length - 1; i >= 0; i--) {
      if (groups[i].parent === parent.id) {
        index = i;
        matches = groups[i].childs;
        break;
      }
    }
    if (index !== undefined) {
      for (let l = 0; l < matches.length; l++) {
        parent.unembed(centergraph.getCell(matches[l].id));
      }
      groups.splice(index, 1);
      localStorage.setItem('groups', JSON.stringify(groups));
    }
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
    let parent = this.getParent(view.model);
    let ids = [];
    let allChilds = parent.getEmbeddedCells({deep: true});
    for (let j = 0; j < allChilds.length; j++) {
      if (allChilds[j].getAncestors().length !== 0) {
        ids.push(allChilds[j].getAncestors()[0].id);
      }
    }
    for (let k = 0; k < groups.length; k++) {
      if (ids.indexOf(groups[k].parent) !== -1) {
        groups.splice(k--, 1);
      }
    }
    localStorage.setItem('groups', JSON.stringify(groups));
    parent.remove();
    $('#functionBtn').hide();
    $('#dragBtn').hide();
  },
  copySelf() {
    console.log('copy');
    // 获取所有cell如果组合过，则包含所有父cell和子cell
    let allCells = this.getAllCells(view);
    let clone = centerPaper.findViewByModel(allCells[0]).model.clone({deep: true});
    centergraph.addCells(clone);
    let apIds = [];// 所有被clone的有关cell的id
    let childsIndex = [];
    let nGroups = [];// 所有被clone的有关的groups中的数据
    for (let k = 0; k < allCells.length; k++) {
      apIds.push(allCells[k].id);
    }
    for (let n = 0; n < groups.length; n++) {
      if (apIds.indexOf(groups[n].parent) !== -1) {
        nGroups.push(groups[n]);
      }
    }
    // 因为clone和被clone的所有cells在数组中相对应的index相同，所以根据被clone的
    // cell的位置来写clone出来的位置
    for (let l = 0; l < nGroups.length; l++) {
      let parentIndex = apIds.indexOf(nGroups[l].parent);
      groups.push({parent: clone[parentIndex].id, childs: []});
      childsIndex.push([]);
      for (let m = 0; m < nGroups[l].childs.length; m++) {
        childsIndex[l].push(apIds.indexOf(nGroups[l].childs[m].id));
      }
    }

    let index = 0;
    for (let j = groups.length - childsIndex.length; j < groups.length; j++) {
      for (let i = 0; i < childsIndex[index].length; i++) {
        groups[j].childs.push(clone[childsIndex[index][i]]);
      }
      index++;
    }
    localStorage.setItem('groups', JSON.stringify(groups));
    /* 因为通过clone()方法获得的元素没有angle属性所以要经过处理 */
    /* 如果被克隆的元素没有angle，可能是曾经克隆出来的元素或者创建的没有经过旋转的元素 */
    if (view.model.changed.angle === undefined) {
      /* 是曾经克隆出来的元素,其旋转角度存在angle对象中 */
      if (angle[view.model.id]) {
        for (let i = 0; i < clone.length; i++) {
          angle[clone[i].id] = angle[view.model.id];
        }
      } else {
        /* 是没有经过旋转的元素 */
        for (let i = 0; i < clone.length; i++) {
          angle[clone[i].id] = 0;
        }
      }
    } else {
      /* 如果被克隆的元素有angle */
      for (let i = 0; i < clone.length; i++) {
        angle[clone[i].id] = view.model.changed.angle;
      }
    }
  },
  rotateSelf(centerPaper, e) {
    this.unhighlight();
    let allCells = this.getAllCells(view);
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
      angled.push(angle[allCells[j].id] ? angle[allCells[j].id] : 0);
    }
    // 旋转角度等于（鼠标位置与中心点的角度angle2 - 按钮位置与中心点的角度angle1 + 已经转过的角度）
    $(document).on('mousemove', function(event) {
      let oPos = this.creatWrapper(centerPaper.findViewByModel(allCells[0]), centerPaper);
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
        angle[allCells[i].id] = angle2 - angle1 + angled[i];
        /* true表示不是对上一个角度的累加而是一个绝对角度 */
        // console.log(ox, oy);
        allCells[i].rotate(angle2 - angle1 + angled[i], true, {x: ox, y: oy});
        allCells[i].attr('text/transform', 'rotate(' + (angle1 - angle2 - angled[i]) + ')');
      }
    });
    $(document).on('mouseup', function(event) {
      $(document).off('mousemove');
    });
  },
  stretchSelf(centerPaper, e) {
    // unhighlight
    let allCells = this.getAllCells(view);
    // 拉伸按钮位置
    let px = $(e).offset().left + 10;
    let py = $(e).offset().top;
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
    let width = [];
    let height = [];
    for (let i = 0; i < allCells.length; i++) {
      width.push(allCells[i].get('size').width);
      height.push(allCells[i].get('size').height);
    }
    /* 拉伸原理： 鼠标位置与当前拉伸按钮位置的差 + 元素的宽高即为拉伸后的宽高 */
    let id = $(e).attr('id').substr($(e).attr('id').length - 1);
    $(document).on('mousemove', function(event) {
      // 放大宽高
      let [scaleX, scaleY, minXY] = [];
      /* 拉伸按钮id依次为
       0 1 2
       3   4
       5 6 7 */
      // scaleX
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
      for (let j = 0; j < allCells.length; j++) {
        // 设置最小变形后的高宽为20*20
        minXY = this.minWidthAndHeight(width[j] + scaleX, height[j] + scaleY);
        // resize
        if (id === 0) {
          allCells[j].resize(minXY.scaleX, minXY.scaleY, {direction: 'top-left'});
        } else if (id === 1) {
          allCells[j].resize(minXY.scaleX, minXY.scaleY, {direction: 'top'});
        } else if (id === 2) {
          allCells[j].resize(minXY.scaleX, minXY.scaleY, {direction: 'top-right'});
        } else if (id === 3) {
          allCells[j].resize(minXY.scaleX, minXY.scaleY, {direction: 'left'});
        } else if (id === 4 || id === 6 || id === 7) {
          allCells[j].resize(minXY.scaleX, minXY.scaleY);
        } else {
          allCells[j].resize(minXY.scaleX, minXY.scaleY, {direction: 'bottom-left'});
        }
        // 拉伸时只显示当前按钮
        $('.stretch-icon').hide();
        $('#stretchSelf' + id).show();
      }
      this.creatWrapper(centerPaper.findViewByModel(allCells[0]), centerPaper);
    });
    // 鼠标松开解除mousemove事件
    $(document).on('mouseup', function(event) {
      $(document).off('mousemove');
      $('.stretch-icon').show();
    });
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
  getEllipse(px, py, pbackground, ptext, pwidth, pheight, prx, pry) {
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
          'stroke': 'black',
          'stroke-width': 1,
          'stroke-dasharray': 0,
          'rx': prx,
          'ry': pry

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
   * 生成矩形
   * px  x 坐标
   * py  y 坐标
   * pbackground   背景色
   * ptext  显示文本
   * pwidth 宽带
   * pheight 高度
   */
  getRect(px, py, pbackground, ptext, pwidth, pheight) {
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
          'stroke': 'black',
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
  /**
   *获取圆
   *sx  开始x坐标
   *sy  开始y坐标
   *pwidth 宽带
   *pheight 高度
   *plabel  文字
   */
  getCircle(sx, sy, pwidth, pheight, plabel) {
    let cell = new joint.shapes.basic.Circle({
      size: { width: pwidth, height: pheight },
      position: { x: sx, y: sy },
      attrs: {
        circle: {stroke: 'black', 'stroke-width': 1, 'stroke-dasharray': 0},
        text: {text: plabel, fill: 'black', 'font-size': 18, 'font-weight': 'normal'}
      }
    });
    return cell;
  },
  getCustom(sx, sy, pwidth, pheight, plabel) {
    // 创建自定义矩形
    joint.shapes.basic.Rect = joint.shapes.basic.Generic.extend({
      markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/></g>',
      defaults: joint.util.deepSupplement({
        type: 'basic.Rect',
        attrs: {
          'rect': {fill: 'white', stroke: 'black', 'stroke-width': 1, 'stroke-dasharray': 0, 'follow-scale': true, width: 80, height: 40, 'font-weight': 'normal'},
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
  },
  // 清除
  clearPaper() {
    // console.log(3);
    centergraph.clear();
    $('#functionBtn').hide();
    $('#dragBtn').hide();
    groups = [];
  },
// 设置z
  frontAndBack(e) {
    if (view) {
      let role = this.judgeRole(view);
      let operate = $(e).attr('class');
      if (operate === 'frontZ') {
        if (JSON.stringify(role) === '{}') {
          view.model.toFront();
        } else {
          role.parent.toFront({'deep': true});
        }
      } else {
        if (JSON.stringify(role) === '{}') {
          view.model.toBack();
        } else {
          role.parent.toBack({'deep': true});
        }
      }
    }
  },
// 生成图形模板
  generateShapes() {
    this.unhighlight();
    if (cells.length < 2) {
      alert('不是组合图形');
      return;
    }
    // 选中的不是一个组合
    let parent = this.getParent(cells[0]);
    let allChilds = parent.getEmbeddedCells({deep: true});
    let ids = [];
    for (let i = 0; i < allChilds.length; i++) {
      ids.push(allChilds[i].id);
    }
    for (let j = 0; j < cells.length; j++) {
      if (cells[j].id === parent.id) {
        continue;
      }
      if (ids.indexOf(cells[j].id) === -1) {
        alert('无法生成模板图形');
        return;
      }
    }
    // 是模板图形不能再次生成模板图形
    let gIds = [];
    for (let j = 0; j < groups.length; j++) {
      gIds.push(groups[j].parent);
    }
    if (gIds.indexOf(parent.id) === -1) {
      alert('该图形是模板图形，不能再次生成模板图形');
      return;
    }
    // 同一个组合的图形重复生成模板 --未解决
    let clone = parent.clone({deep: true});
    leftgraph.addCells(clone);
    let paperOptions = leftPaper.options;
    let paperWidth = paperOptions.width;
    // var paper_height = paper_options.height;
    let lastCell = leftgraph.getLastCell().getAncestors().length !== 0 ? leftgraph.getLastCell().getAncestors()[leftgraph.getLastCell().getAncestors().length - 1] : leftgraph.getLastCell();
    let getBorderXY1 = this.getBorder(leftPaper.findViewByModel(lastCell), leftPaper);
    let lastCellMaxX = getBorderXY1.max_x;
    let lastCellMinX = getBorderXY1.min_x;
    let lastCellMaxY = getBorderXY1.max_y;
    let lastCellMinY = getBorderXY1.min_y;
    let getBorderXY2 = this.getBorder(leftPaper.findViewByModel(clone[0]), leftPaper);
    let cloneCellMaxX = getBorderXY2.max_x;
    let cloneCellMinX = getBorderXY2.min_x;
    // var cloneCell_max_y = getBorderXY2.max_y;
    // var cloneCell_min_y = getBorderXY2.min_y;
    if (paperWidth - (lastCellMaxX - lastCellMinX + 10) > (cloneCellMaxX - cloneCellMinX)) {
      clone[0].position(lastCellMaxX + 10, lastCellMinY, { deep: true });
    } else {
      clone[0].position(0, lastCellMaxY + 10, { deep: true });
    }
    for (let j = 0; j < clone.length; j++) {
      clone[j].set('z', leftgraph.getCells().length + j + 1);
    }
    cells = [];
  },
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
    return {max_x: maxX, min_x: minX, max_y: minY, min_y: maxY};
  },
// 获取数组中的最大最小值
  getExtreme(arr) {
    return {max: Math.max.apply(null, arr), min: Math.min.apply(null, arr)};
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

  unhighlight() {
    for (let i = 0; i < highlightedCellViews.length; i++) {
      highlightedCellViews[i].unhighlight();
    }
  },
/**
 * Created by 吴旭健 on 2017/11/28.
 */
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
    $('.stretch-icon').eq(0).css({
      'left': '-13px',
      'top': '-13px',
      'cursor': 'nw-resize'
    });
    $('.stretch-icon').eq(1).css({
      'left': ((maxX - minX) / 2 - 13) + 'px',
      'top': '-13px',
      'cursor': 'n-resize'
    });
    $('.stretch-icon').eq(2).css({
      'right': '-12px',
      'top': '-13px',
      'cursor': 'ne-resize'
    });
    $('.stretch-icon').eq(3).css({
      'left': '-13px',
      'top': ((maxY - minY) / 2 - 13) + 'px',
      'cursor': 'w-resize'
    });
    $('.stretch-icon').eq(4).css({
      'right': '-12px',
      'top': ((maxY - minY) / 2 - 13) + 'px',
      'cursor': 'e-resize'
    });
    $('.stretch-icon').eq(5).css({
      'left': '-13px',
      'bottom': '-13px',
      'cursor': 'sw-resize'
    });
    $('.stretch-icon').eq(6).css({
      'left': ((maxX - minX) / 2 - 13) + 'px',
      'bottom': '-13px',
      'cursor': 's-resize'
    });
    $('.stretch-icon').eq(7).css({
      'right': '-12px',
      'bottom': '-13px',
      'cursor': 'se-resize'
    });
    $('.left_top').css(leftTop);

    $('.left_bottom').css(leftBottom);

    $('.right_top').css(rightTop);

    $('#functionBtn, #dragBtn').css({
      'width': (maxX - minX) + 'px',
      'height': (maxY - minY) + 'px',
      'left': minX + 'px',
      'top': minY + 'px',
      'display': 'block'
    });

    return {max_x: maxX, min_x: minX, min_y: minY, max_y: maxY};
  }
};
export default jointD;

/* $(function() {
  // initLeftPaper();
  // initCenterPaper();
  // 加载刷新后的数据
  // loadStorage();
  // 属性面板事件
  // propertyPane();
}); */

// 获取线段初始化样式
/* function getLeftLinkView(){
 var LinkView = joint.dia.LinkView.extend({
 addVertex: function(evt, x, y) {},
 removeVertex: function(endType) {},
 pointerdown:function(evt, x, y) {
 this._click = true;
 joint.dia.ElementView.prototype.pointerdown.apply(this, arguments);
 },
 pointerup:function(evt, x, y) {
 if (this._click) {
 // triggers an event on the paper and the element itself
 this.notify('cell:click', evt, x, y);
 } else {
 joint.dia.ElementView.prototype.pointerup.apply(this, arguments);
 }
 }
 });
 return LinkView;
 } */
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
/* function getLink(sx, sy, ex, ey, strokecolor, scolor, sstyle, ecolor, estyle, pstrokewidth, sstroke, estroke, plabel) {
  let link = new joint.dia.Link({
    source: { x: sx, y: sy },
    target: { x: ex, y: ey },
    attrs: {
      '.connection': {stroke: strokecolor, 'stroke-width': pstrokewidth, 'stroke-dasharray': 0},
      '.marker-source': {fill: scolor, stroke: sstroke, d: sstyle},
      '.marker-target': {fill: ecolor, stroke: estroke, d: estyle}
    },
    labels: [
      {position: 0.5, attrs: {text: {text: plabel}}}
    ]
  });
  return link;
} */

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
