// The animation function that moves the ticker
function ticker() {
  var tickerItemWidth = document.querySelector(".ticker-item").offsetWidth;
  var tickerMove = document.querySelector(".ticker-move");
  var tickerWidth = document.querySelector(".ticker-wrap").offsetWidth;
  var tickerItemCount = document.querySelectorAll(".ticker-item").length;
  var tickerMoveWidth = tickerItemCount * tickerItemWidth;
  var tickerDuration = (tickerMoveWidth / tickerWidth) * 15;

  tickerMove.style.width = tickerMoveWidth + "px";
  tickerMove.style.animationDuration = tickerDuration + "s";
}

// Call the ticker function on window load and resize
window.onload = ticker;
window.onresize = ticker;
