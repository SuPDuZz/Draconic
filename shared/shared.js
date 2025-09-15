Promise.all([
  fetch('./shared/header.html').then(res => res.text()),
  fetch('./shared/footer.html').then(res => res.text())
]).then(([header, footer]) => {
  document.getElementById('header-placeholder').innerHTML = header;
  document.getElementById('footer-placeholder').innerHTML = footer;
  
  let lastScroll = 0;
  const tolerance = 5;
  const navbar = document.querySelector(".navbar");
  const main = document.querySelector(".main");

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY || document.documentElement.scrollTop;
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (Math.abs(scroll - lastScroll)> tolerance) {
      
      if (40 > scroll || scroll < lastScroll) {
        navbar.style.top = "0";
        main.style.marginTop = "8vh";
      }
      else if (scroll > lastScroll && scroll < maxScroll) {
        // scrolling down
        navbar.style.top = "-8vh"; // hide (adjust depending on navbar height)
        main.style.marginTop = "0";
      }
      
      lastScroll = scroll <= 0 ? 0 : scroll; // avoid negative values
    }

    if (scroll >= maxScroll) {
      navbar.style.top = "0";
      main.style.marginTop = "8vh";
    }
  });
});
