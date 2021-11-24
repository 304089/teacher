// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
/*global $*/

// マイページのコンテンツ選択をタブ化
$(function() {
  var tabs = $(".tab");
  $(".tab").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
    const index = tabs.index(this);
    $(".content").removeClass("show").eq(index).addClass("show");
  });
});

// メニューバーをスライドイン・アウト
$(function() {
  $("#nav-open").click(function(){
    $("body").css("background-color", "rgba(0,0,0,0.4)");
    $(".form-area").fadeOut(1000);
    $(".nav-container").removeClass("nav-close").addClass("nav-active").css("background-color", "#17682a");

  });
  $("#nav-close").click(function(){
    $(".nav-container").removeClass("nav-active").addClass("nav-close");
    $("body").css("background-color", "white");
  });
});

// カテゴリーをさらに細分化したもののスライド
$(function() {
  var list = (".detail-list");
    $(".detail-btn").click(function() {
      $(this).find(list).slideToggle();
      if ($(this).find(list).hasClass("open")){
        $(this).find(list).removeClass("open");
        $(this).find(".fa-chevron-down").show();
        $(this).find(".fa-chevron-up").hide();
      } else {
        $(this).find(list).addClass("open");
        $(this).find(".fa-chevron-up").show();
        $(this).find(".fa-chevron-down").hide();
      }
    });
});

// プロフィール編集画面（開く）
$(function() {
    $("#edit-btn").click(function() {
        $("#edit-form").show(1000);
        $("body").css("background-color", "rgba(0,0,0,0.4)");
    })
});

// プロフィール編集画面（閉じる）
$(function() {
    $(".close-btn").click(function() {
        $("#edit-form").hide(1000);
        $("body").css("background-color", "white");
    })
});

// プロフィール編集成功後、ウィンドウ閉じる
$(function() {
    $("#edit-form form").submit(function(){
      $(".form-area").hide(1000);
    });
})

// 投稿画面（開く）
$(function() {
    $("#post-btn").click(function() {
        $("#post-form").show(1000);
        $("body").css("background-color", "rgba(0,0,0,0.4)");
    });
});


// 投稿画面（閉じる）
$(function() {
    $(".close-btn").click(function() {
        $("#post-form").hide(1000);
        $("body").css("background-color", "white");
    });
});

// 新規登録画面（開く）
$(function() {
    $("#signUp-btn").click(function() {
        $("#signUp-form").fadeIn(1000);
        $(".nav-container").removeClass("nav-active").addClass("nav-close");
        $("body").css("background-color", "rgba(0,0,0,0.4)");
    });
});

// 新規登録画面（閉じる）
$(function() {
    $(".close-btn").click(function() {
        $("#signUp-form").fadeOut(1000);
        $("body").css("background-color", "white");
    });
});

// ログイン画面（開く）
$(function() {
    $("#signIn-btn").click(function() {
        $("#signIn-form").fadeIn(1000);
        $(".nav-container").removeClass("nav-active").addClass("nav-close");
        $("body").css("background-color", "rgba(0,0,0,0.4)");
    });
});

// ログイン画面（閉じる）
$(function() {
    $(".close-btn").click(function() {
        $("#signIn-form").fadeOut(1000);
        $("body").css("background-color", "white");
    });
});
