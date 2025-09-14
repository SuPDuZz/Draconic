Promise.all([
  fetch('/shared/header.html').then(res => res.text()),
  fetch('/shared/footer.html').then(res => res.text())
]).then(([header, footer]) => {
  document.getElementById('header-placeholder').innerHTML = header;
  document.getElementById('footer-placeholder').innerHTML = footer;
  
  let lastScrollTop = 0;
  const tolerance = 5;
  const navbar = document.querySelector(".navbar");
  const main = document.querySelector(".main");

  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (Math.abs(scrollTop - lastScrollTop)> tolerance) {
      if (40 > scrollTop && scrollTop > lastScrollTop) {
        navbar.style.top = "0";
        main.style.marginTop = "8vh";
      }
      else if (scrollTop > lastScrollTop) {
        // scrolling down
        navbar.style.top = "-8vh"; // hide (adjust depending on navbar height)
        main.style.marginTop = "0";
      } else {
        // scrolling up
        navbar.style.top = "0";
        main.style.marginTop = "8vh";
      }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative values
      }
});
});
