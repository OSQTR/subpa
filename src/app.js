let element = document.getElementsByClassName("imgBanner")[0];
let elementSec = document.getElementsByClassName("auth")[0];

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  element.style.transform =
    "perspective(500px) rotateY(" + value * 0.01 + "deg)";
  let cnt = value * -0.05;

  element.style.left = 20 - cnt * -1 + "px";
  element.style.top = 0 - cnt * -1 + "px";

  if (value > 200) {
    valueSec = value - 200;
    cnt = valueSec * -0.05;
    elementSec.style.transform =
      "perspective(500px) rotateY(" + valueSec * 0.01 + "deg)";
    elementSec.style.left = 0 - cnt * -1 + "px";
  }
  //스크롤 위치
  // console.log(value);

  if (value > 50) {
    document.getElementsByClassName("navBar")[0].style.display = "block";
  } else {
    document.getElementsByClassName("navBar")[0].style.display = "none";
  }
});

// window.addEventListener('scroll', ()=>{
//     document.getElementsByClassName("navBar")[0].style.display = "block";
// });
