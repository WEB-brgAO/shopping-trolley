$(function() {
  // 增加效果
  $(".product-add").click(function() {
      var n = $(this).prev().val();
      var num = parseInt(n) + 1;
      if (num == 99) { return; }
      $(this).prev().val(num);
      he();
    })
    //减得效果
  $('.product-jian').click(function() {
      var n = $(this).next().val();
      // console.log(n);
      var num = parseInt(n) - 1;
      if (num == 0) { return; }
      $(this).next().val(num);
      he();


    })
    // 点击按钮变成选择
  $('.product-ckb').click(function() {
    $(this).find('em').toggleClass('product-xz');
    productxz()
    he();
  })

  //点击全选
  //   点击事件
  //   获取上面的em
  //   获取当前的em
  //   给em添加类


  $('.product-al').click(function() {

    //   获取上面要选择的em
    var fxk = $('.product-em');
    //   选择子元素的em
    var qx = $('.product-all em');
    qx.toggleClass('product-all-on');
    if ($(this).find('em').is('.product-all-on')) {
      fxk.addClass('product-xz');
    } else {
      fxk.removeClass('product-xz');
    }
    he();
    shuliang();
  });
  //   删除
  //   点击它 获取当前的父元素 把他给删除
  $('.product-del').click(function() {
    if (confirm('你确定要删除嘛')) {
      $(this).parents('.product-box').remove();
    }
    he();
    shuliang();
    koncat()
  })
  he();
  shuliang();

  // 计算产品价格


});

// 选中的产品
function productxz() {
  // 所有的em
  var xz = $('.product-em');
  // 点击过得em
  var xz1 = $('.product-xz');
  if (xz1.length == xz.length) {
    $(".product-all em").addClass("product-all-on");
  } else {
    $(".product-all em").removeClass("product-all-on");
  }
  shuliang();
  he();

}
// 计算产品价格
function he() {
  // 总价
  var sum = 0;
  $('.product-em').each(function() {
    if ($(this).is('.product-xz')) {
      // 单价
      var price = parseInt($(this).parents('.product-ckb').siblings().find('.price').text());
      //   console.log(price);
      // 数量
      var slproice = parseInt($(this).parents('.product-ckb').siblings().find('.product-num').val())
        //   console.log(slproice);
        // 价格
      var dgtotal = price * slproice;
      sum += dgtotal;



    }
    $('.all-price').text(sum.toFixed(2));
  })
}
// 获取选中产品的数量
function shuliang() {
  $('.product-all-sl').text('');
  var cd = $('.product-xz').length;
  $('.product-all-sl').text(cd);
  if (cd > 0) {
    $('.product-all-qx').text('已选');
    $('.all-sl').css('display', 'inline-block');
    $('.product-sett').removeClass('product-sett-a');
  } else {
    $('.product-all-qx').text('全选');
    $('.all-sl').css('display', 'none');
    $('.product-sett').addClass('product-sett-a');
  }
}

// 购物车空

function koncat() {
  var pic = $('.product-box').length;
  if (pic <= 0) {
    $(".all-price").text("0.00");
    // $(".product-all-qx").text("全选");
    $(".all-sl").css("display", "none");
    // $(".product-sett").addClass("product-sett-a");
    // $(".product-all em").removeClass("product-all-on");
    $(".kon-cat").css("display", "block");
  } else {
    $(".kon-cat").css("display", "none");
  }
}