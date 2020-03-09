"use strict";

$(function () {
  // $("#username").change(function(){
  //     $.get("http://jx.xuzhixiang.top/ap/api/checkname.php",
  //      {username: $("#username").val()}, data =>{
  //          if(data.code == 1){
  //              $()
  //          }
  //      });
  // });
  $("#regbtn").click(function () {
    $.get("http://jx.xuzhixiang.top/ap/api/checkname.php", {
      username: $("#username").val()
    }, function (data) {
      if (data.code == 1) {
        //注册接口
        $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
          username: $("#username").val(),
          password: $("#psw").val()
        }, function (data) {
          if (data.code == 1) {
            //注册成功跳转到登陆页面
            location.href = "login.html";
          }
        });
      } else {
        alert("用户名重名重新输入");
      }
    });
  });
});