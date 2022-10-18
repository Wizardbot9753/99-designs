var Nav = document.querySelector("header nav"),
  menuButton = document.querySelector("header nav .navigation .nav-menu-button"),
  firstLine = document.querySelector("header nav .navigation .nav-menu-button span:first-of-type"),
  lastLine = document.querySelector("header nav .navigation .nav-menu-button span:last-of-type"),
  navMenuContainer = document.querySelector("header nav .navigation .nav-menu-container"),
  menuLinks = document.querySelector("header nav .navigation .nav-menu li a"),
  portfolioItems = document.querySelector(".portfolio .portfolio-items .item"),
  portfolioContent = document.querySelector(".portfolio .portfolio-content .portfolio-items"),
  testimonialsSlider = document.querySelector(".testimonials .testimonials-content .slider"),
  ScrollToTop = document.querySelector("#Scroll-To-Top"),
  Html = document.documentElement,
  Body = document.body,
  htmlBody = document.querySelector("html, body"),
  $document = document.querySelector(document),
  $window = document.querySelector(window),
  ScrollTopPlusVal = 0,
  sliderDirection;

// Sliders Direction Based on Page Direction
if (Html.attr("dir") === "ltr") {
  sliderDirection = false;
} else if (Html.attr("dir") === "rtl") {
  sliderDirection = true;
}

document.querySelector(function () {
  "use strict";

  // Nav Fixed on Scroll
  if ($window.scrollTop > 0) {
    Nav.classList.add("fixed");
  } else {
    Nav.classList.remove("fixed");
  }

  $window.addEventListener("scroll", function () {
    if ($window.scrollTop > 0) {
      Nav.classList.add("fixed");
    } else {
      Nav.classList.remove("fixed");
    }
  });

  // Scroll to Top Button
  function scrolltopbtn() {
    if (Html.attr("dir") === "ltr") {
      if ($window.scrollTop >= 600) {
        ScrollToTop.css("right", 20 + ScrollTopPlusVal);
      } else {
        ScrollToTop.css("right", "-40px");
      }
    } else if (Html.attr("dir") === "rtl") {
      if ($window.scrollTop >= 600) {
        ScrollToTop.css("left", 20 + ScrollTopPlusVal);
      } else {
        ScrollToTop.css("left", "-40px");
      }
    }
  }

  scrolltopbtn();

  $window.addEventListener("scroll", function () {
    scrolltopbtn();
  });

  ScrollToTop.addEventListener("click", function () {
    Body.animate(
      {
        marginRight: "",
        marginLeft: ""
      },
      0
    );
    htmlBody.animate(
      {
        scrollTop: 0
      },
      600
    );
  });

  // Show and Hide Menu
  $document.addEventListener("click", function (e) {
    if (
      document.querySelector(e.target).closest(
        document.querySelector(
          "header nav .navigation .nav-menu-button:not(.button-when-menu-is-open)"
        )
      ).length
    ) {
      menuButton.classList.add("button-when-menu-is-open");

      firstLine.classList.add("first-line-when-menu-is-open");
      lastLine.classList.add("last-line-when-menu-is-open");

      ScrollTopPlusVal = navMenuContainer.outerWidth();
      scrolltopbtn();

      if (Html.attr("dir") === "ltr") {
        navMenuContainer
          .animate(
            {
              right: 0
            },
            0
          )
          .css("boxShadow", "-2px 0px 10px 0px rgba(0, 0, 0, 0.2)");
        Body.animate(
          {
            marginRight: navMenuContainer.outerWidth(),
            marginLeft: "-" + navMenuContainer.outerWidth()
          },
          0
        );
        Nav.animate(
          {
            right: navMenuContainer.outerWidth(),
            left: "-" + navMenuContainer.outerWidth()
          },
          0
        );
      } else if (Html.attr("dir") === "rtl") {
        navMenuContainer
          .animate(
            {
              left: 0
            },
            0
          )
          .css("boxShadow", "2px 0px 10px 0px rgba(0, 0, 0, 0.2)");
        Body.animate(
          {
            marginLeft: navMenuContainer.outerWidth(),
            marginRight: "-" + navMenuContainer.outerWidth()
          },
          0
        );
        Nav.animate(
          {
            left: navMenuContainer.outerWidth(),
            right: "-" + navMenuContainer.outerWidth()
          },
          0
        );
      }
    } else if (
      document.querySelector(e.target).closest(document.querySelector("header nav .navigation .button-when-menu-is-open"))
        .length
    ) {
      menuButton.classList.remove("button-when-menu-is-open");

      firstLine.classList.remove("first-line-when-menu-is-open");
      lastLine.classList.remove("last-line-when-menu-is-open");

      ScrollTopPlusVal = 0;
      scrolltopbtn();

      if (Html.attr("dir") === "ltr") {
        navMenuContainer
          .animate(
            {
              right: "-" + navMenuContainer.outerWidth()
            },
            0
          )
          .css("boxShadow", "");
      } else if (Html.attr("dir") === "rtl") {
        navMenuContainer
          .animate(
            {
              left: "-" + navMenuContainer.outerWidth()
            },
            0
          )
          .css("boxShadow", "");
      }

      Body.animate(
        {
          marginRight: "",
          marginLeft: ""
        },
        0
      );
      Nav.animate(
        {
          right: "",
          left: ""
        },
        0
      );
    } else if (!document.querySelector(e.target).closest(navMenuContainer).length) {
      document.querySelector("header nav .navigation .button-when-menu-is-open").click();
    }
  });

  // Smooth Scroll
  if (menuLinks.attr("data-value")) {
    menuLinks.addEventListener("click", function (e) {
      e.preventDefault();

      htmlBody.animate(
        {
          scrollTop: document.querySelector(document.querySelector(this).data("value")).offset().top
        },
        600
      );
    });
  }

  // Add Class Active to Menu Links on Scrolling
  $window.addEventListener("scroll", function () {
    var cur_pos = document.querySelector(this).scrollTop;

    document.querySelector("body > .section").each(function () {
      var top = document.querySelector(this).offset().top - 100,
        bottom = top + document.querySelector(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        document.querySelector(
          'header .nav-menu-container .nav-menu li a[data-value="#' +
            document.querySelector(this).attr("id") +
            '"]'
        )
          .classList.add("active")
          .parent("li")
          .siblings("li")
          .children("a")
          .classList.remove("active");
      }
    });
  });

  // Fire Magnific Popup Plugin in About us Section
  
  if (document.querySelector(".about").length) {
    document.querySelector(document).ready(function ($){
    document.querySelector(".about .section-content .about-video").magnificPopup({
      delegate: "a",
      type: "iframe"
    });
  });

    document.querySelector(".about .section-content .section-text .video-play-button a").addEventListener(
      "click",
      function () {
        document.querySelector(".about .section-content .about-video a").click();
      }
    );
  }

  // Image Pan Effect on Hover in Portfolio Section
  portfolioItems.addEventListener("mousemove", function (e) {
    document.querySelector(this)
      .querySelector("img")
      .css({
        transformOrigin:
          ((e.pageX - document.querySelector(this).offset().left) / document.querySelector(this).width()) * 100 +
          "% " +
          ((e.pageY - document.querySelector(this).offset().top) / document.querySelector(this).height()) * 100 +
          "%"
      });
  });

  // Fire Magnific Popup Plugin in Portfolio Section
  if (document.querySelector(".portfolio").length) {
    portfolioItems.each(function () {
      if (!document.querySelector(this).attr("href") || document.querySelector(this).attr("href") === "#") {
        document.querySelector(this).attr("href", document.querySelector(this).children("img").attr("src"));
      }
    });

    portfolioContent.magnificPopup({
      delegate: ".item:not(.hidden)",
      type: "image",
      gallery: {
        enabled: true
      },
      titleSrc: function (item) {
        return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
      }
    });
  }

  // Tilt Plugin in Team Section
  if (document.querySelector(".team").length) {
    document.querySelector(".team .team-content .team-member").tilt({
      maxTilt: 10,
      speed: 500
    });

    // Fire Direction Aware Hover Plugin in Team Section
    document.querySelector(".team .team-content .team-member").hoverdir();
  }

  if (document.querySelector(".testimonials").length || document.querySelector(".clients").length) {
    // Fire Owl Carousel Slider Plugin in Testimonials Section
    testimonialsSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 6000,
      autoplaySpeed: 600,
      dragEndSpeed: 600,
      dotsSpeed: 600,
      rtl: sliderDirection,
      responsive: {
        0: {
          center: false,
          autoWidth: false,
          items: 1
        },
        768: {
          center: true,
          autoWidth: true,
          items: 3
        }
      }
    });

    // Fire Owl Carousel Slider Plugin in Clients Section
    document.querySelector(".clients .clients-content").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 6000,
      autoplaySpeed: 600,
      dragEndSpeed: 600,
      dots: false,
      rtl: sliderDirection,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    });
  }

  // Nice Scroll Plugin
  Html.niceScroll({
    cursorcolor: document.querySelector("footer").css("backgroundColor"),
    background: "#ffffff",
    cursorborder: "none",
    cursorwidth: "4px",
    cursorborderradius: "3px",
    cursorminheight: 130,
    hidecursordelay: 1000,
    boxzoom: true,
    horizrailenabled: false,
    zindex: "5000"
  });

  // Fix NiceScroll Plugin After Loading
  $window.addEventListener("scroll", function () {
    Html.getNiceScroll().resize();
  });
});

$window.addEventListener("load", function () {
  "use strict";

  // Preloader
  document.querySelector(".preloader")
    .delay(400)
    .fadeOut(600, function () {
      document.querySelector(this).remove();
    });

  // Filtering Portfolio
  document.querySelector(".portfolio .portfolio-content ul.work-cat li").addEventListener("click", function () {
    document.querySelector(this).classList.add("active").siblings("li").classList.remove("active");
  });

  document.querySelector(".portfolio .portfolio-content ul.work-cat li:first-of-type").addEventListener(
    "click",
    function () {
      portfolioItems.classList.remove("hidden").hide(0).show(0);
    }
  );

  document.querySelector(".portfolio .portfolio-content ul.work-cat li:not(:first-of-type)").addEventListener(
    "click",
    function () {
      portfolioItems.hide(0).classList.add("hidden");
      document.querySelector("." + document.querySelector(this).data("value"))
        .classList.remove("hidden")
        .show(0);
    }
  );

  // Height of Testimonials Slider Paragraph
  var testimonialsP = document.querySelector(".testimonials .testimonials-content .slider .item p"),
    maxHeight = -1,
    paragraphHeight = function () {
      maxHeight = maxHeight > document.querySelector(this).height() ? maxHeight : document.querySelector(this).height();
      document.querySelector(this).height(maxHeight);
    };

  setTimeout(function () {
    testimonialsP.each(paragraphHeight);
  }, 300);

  testimonialsSlider.addEventListener("afterChange", function () {
    testimonialsP.each(paragraphHeight);
  });
});

// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }