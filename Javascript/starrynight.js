function shootStar() {
  const star = document.querySelector(".shooting-star");
  star.style.opacity = 1;
  star.style.transition = "all 1s ease-out";
  star.style.top = "80%";
  star.style.left = "80%";

  setTimeout(() => {
    star.style.opacity = 0;
    star.style.top = "0";
    star.style.left = "50%";
  }, 1000);
}

setInterval(shootStar, 3000);