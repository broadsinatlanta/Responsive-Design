// Listen for clicks on each project header, highlighting relevant projects
jQuery(function($) {
  $("#html-css").click(function() {

    // Change borders of html/css on, rest off
    $(".project-grid").find(".html-css").css("border", "3px solid #89023E");
    $(".project-grid").find(".project-tile").not(".html-css").css("border", "none");

    $(".skill-grid").find(".html-css").css("border", "3px solid #89023E");
    $(".skill-grid").find(".skill").not(".html-css").css("border", "3px solid #F6E8EA");
  });

  $("#python").click(function() {

    // Change borders of python on, rest off
    $(".project-grid").find(".python").css("border", "3px solid #89023E");
    $(".project-grid").find(".project-tile").not(".python").css("border", "none");

    $(".skill-grid").find(".python").css("border", "3px solid #89023E");
    $(".skill-grid").find(".skill").not(".python").css("border", "3px solid #F6E8EA");
  });

  $("#js").click(function() {

    // Change borders of javascript on, rest off
    $(".project-grid").find(".js").css("border", "3px solid #89023E");
    $(".project-grid").find(".project-tile").not(".js").css("border", "none");

    $(".skill-grid").find(".js").css("border", "3px solid #89023E");
    $(".skill-grid").find(".skill").not(".js").css("border", "3px solid #F6E8EA");
  });

  $("#web-apps").click(function() {

    // Change borders of web apps on, rest off
    $(".project-grid").find(".web-app").css("border", "3px solid #89023E");
    $(".project-grid").find(".project-tile").not(".web-app").css("border", "none");

    $(".skill-grid").find(".web-app").css("border", "3px solid #89023E");
    $(".skill-grid").find(".skill").not(".web-app").css("border", "3px solid #F6E8EA");
  });

  $("#data-analysis").click(function() {

    // Change borders of data analysis on, rest off
    $(".project-grid").find(".data-analysis").css("border", "3px solid #89023E");
    $(".project-grid").find(".project-tile").not(".data-analysis").css("border", "none");

    $(".skill-grid").find(".data-analysis").css("border", "3px solid #89023E");
    $(".skill-grid").find(".skill").not(".data-analysis").css("border", "3px solid #F6E8EA");
  });

  $("#r").click(function() {

    // Change borders of r on, rest off
    $(".project-grid").find(".r").css("border", "3px solid #89023E");
    $(".project-grid").find(".project-tile").not(".r").css("border", "none");

    $(".skill-grid").find(".r").css("border", "3px solid #89023E");
    $(".skill-grid").find(".skill").not(".r").css("border", "3px solid #F6E8EA");
  });

  $("#visualisation").click(function() {

    // Change borders of data visualisation on, rest off
    $(".project-grid").find(".data-vis").css("border", "3px solid #89023E");
    $(".project-grid").find(".project-tile").not(".data-vis").css("border", "none");

    $(".skill-grid").find(".data-vis").css("border", "3px solid #89023E");
    $(".skill-grid").find(".skill").not(".data-vis").css("border", "3px solid #F6E8EA");
  });
});
