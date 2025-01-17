/*! @health.gov.au/health-design-system v3.0.3 */
/*! @health.gov.au/health-design-system v2.0.0-beta.3 */
var health = health || {};

(function ($) {

  // Clear DOM and exit
  function exitPage() {
    $("html").remove();
    window.location.replace("https://www.google.com/");
    return false;
  }

  // Move <body> down by quickexit height
  function offsetHeight(quickexit) {
    if (quickexit !== null) {
      $("body").css("margin-top", quickexit.offsetHeight - 1).addClass("au-body--offset");
    }
  };

  $(document).ready(function () {
    var quickexit = document.getElementById("quickexit");
    offsetHeight(quickexit);

    // Recalculate height on resize
    $(window).on("resize", function () {
      offsetHeight(quickexit);
    });

    // Bind escape key
    if (quickexit !== null) {
      $(document).on("keyup", function (e) {
        if (e.key === "Escape") {
          exitPage();
        }
      });
    }

  });

  $(document).on('click', '.quick-exit__action', function (event) {
    if (event.target.className === "quick-exit__link") {
      location.href = $(event.target).attr('href');
    }
    else {
      exitPage();
    }
  });

})(jQuery);
