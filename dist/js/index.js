"use strict";

function Lunbo() {
  //轮播区域
  this.lun = document.querySelectorAll(".lun")[0]; //图片列表ul

  this.sliderul = document.querySelectorAll(".tu")[0]; //图片列表

  this.sliderlist = this.sliderul.children; //取列表的长度

  this.length = this.sliderlist.length; //取单位宽

  this.perwidth = this.sliderlist[0].offsetWidth; //设置图片列表的宽度

  this.sliderul.style.width = this.length * this.perwidth + "px";
  this.autoPlay();
  this.clear();
} //自动播放


Lunbo.prototype.autoPlay = function () {
  var _this = this;

  this.count = 0;
  this.timer = setInterval(function () {
    _this.move();
  }, 2000);
}; //


Lunbo.prototype.move = function () {
  this.count++;

  if (this.count == this.sliderlist.length) {
    this.sliderul.style.left = 0;
    this.count = 1;
  }

  if (this.count == -1) {
    this.sliderul.style.left = -this.perwidth * this.length - 1 + "px";
    this.count = this.length - 2;
  }

  for (var i = 0; i < this.dianlist.length; i++) {
    this.dianlist[i].className = "";
  }

  if (this.count == this.length - 1) {
    this.dianlist[0].className = "hover";
  } else {
    this.dianlist[this.count].className = "hover";
  }

  startMove(this.sliderul, {
    "left": -this.perwidth * this.count
  });
}; //清楚定时器


Lunbo.prototype.clear = function () {
  var _this2 = this;

  this.lun.onmouseover = function () {
    clearInterval(_this2.timer);
  };

  this.lun.onmouseout = function () {
    _this2.timer = setInterval(function () {
      _this2.move();
    }, 2000);
  };
}; //按钮


Lunbo.prototype.addBtn = function () {
  var _this3 = this;

  this.btnnode = document.createElement("div");
  this.btnnode.className = "btns";
  this.lun.appendChild(this.btnnode);
  this.btnnode.innerHTML = "<span>&lt;</span><span>&gt;</span>"; //取按钮

  this.btns = this.btnnode.children; //左箭头

  this.btns[0].onclick = function () {
    _this3.count -= 2;

    _this3.move();
  };

  this.btns[1].onclick = function () {
    _this3.move();
  };
}; //焦点


Lunbo.prototype.addFocus = function () {
  var _this4 = this;

  this.dian = document.createElement("ul");
  this.dian.className = "dian";
  this.lun.appendChild(this.dian); //添加li

  var str = "";

  for (var i = 0; i < this.length - 1; i++) {
    str += "<li></li>";
  }

  this.dian.innerHTML = str;
  this.dianlist = this.dian.children;
  this.dianlist[0].className = "hover";

  var _loop = function _loop(_i) {
    _this4.dianlist[_i].onclick = function () {
      _this4.count = _i - 1;

      _this4.move();
    };
  };

  for (var _i = 0; _i < this.dianlist.length; _i++) {
    _loop(_i);
  }
};