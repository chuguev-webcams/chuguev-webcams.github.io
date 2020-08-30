// Scroll
$(window).scroll(function () {
  var wintop = $(window).scrollTop(),
    docheight = $(document).height(),
    winheight = $(window).height();
  var scrolled = (wintop / (docheight - winheight)) * 100;

  $("#progressbar").css("height", scrolled + "%");
  $("#scrollPath").css("height", scrolled + "%");
});
// End scroll

// Button refresh
$(document).ready(function () {
  $(".button").click(function () {
    location.reload(true);
  });
});
// End button

// Tabs
$(document).ready(function () {
  $('a[data-toggle="tab"]').on("show.bs.tab", function (e) {
    localStorage.setItem("activeTab", $(e.target).attr("href"));
  });
  var activeTab = localStorage.getItem("activeTab");
  if (activeTab) {
    $('#myTab a[href="' + activeTab + '"]').tab("show");
  }
});
// End Tabs
