"use strict";

function Cart() {
  //购物车数据
  $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
    uid: 32911
  }).then(function (data) {
    console.log(data);
  }); //更新购物车商品数量接口

  $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php").then(function (data) {
    console.log(data);
  });
}