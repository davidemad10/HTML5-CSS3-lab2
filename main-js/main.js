let nav = document.querySelector("nav");
let toUp = document.querySelector(".to-up");
window.onscroll = () => {
  if (
    document.body.scrollTop >= 700 ||
    document.documentElement.scrollTop >= 700
  ) {
    nav.classList.add("changeBackgroundNav");
    toUp.classList.add("to-up2");
  } else {
    nav.classList.remove("changeBackgroundNav");
    toUp.classList.remove("to-up2");
  }
};
