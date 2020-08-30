$(window).scroll(function () {
  var wintop = $(window).scrollTop(),
    docheight = $(document).height(),
    winheight = $(window).height();
  var scrolled = (wintop / (docheight - winheight)) * 100;

  $(".scroll-line").css("width", scrolled + "%");
});

$(document).ready(function () {
  $(".button").click(function () {
    location.reload(true);
  });
});

$(document).ready(function () {
  $('a[data-toggle="tab"]').on("show.bs.tab", function (e) {
    localStorage.setItem("activeTab", $(e.target).attr("href"));
  });
  var activeTab = localStorage.getItem("activeTab");
  if (activeTab) {
    $('#myTab a[href="' + activeTab + '"]').tab("show");
  }
});
