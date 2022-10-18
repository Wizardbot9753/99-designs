// Header Change on Window Scroll
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 8) {
    document.getElementById("headerNavigation").classList.add("fixed");
  } else {
    document.getElementById("headerNavigation").classList.remove("fixed");
  }
}
