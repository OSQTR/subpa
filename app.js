let element = document.getElementsByClassName("profileAllow")[0];

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  element.style.transform =
    "perspective(500px) rotateY(" + value * 0.01 + "deg)";
  let cnt = value * -0.05;
  element.style.left = 30 - cnt * -1 + "px";
  element.style.top = 30 - cnt * -1 + "px";

  console.log(value);

  if (value > 200) {
    document.getElementsByClassName("navBar")[0].style.display = "block";
  } else {
    document.getElementsByClassName("navBar")[0].style.display = "none";
  }
});

// window.addEventListener('scroll', ()=>{
//     document.getElementsByClassName("navBar")[0].style.display = "block";
// });
