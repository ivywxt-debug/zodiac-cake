const candleCursor = document.querySelector(".cursor");
const candleImage = document.getElementById("cursorImage");
const cakeCards = document.querySelectorAll(".cake-card");

if (candleCursor && candleImage) {
  window.addEventListener("mousemove", (event) => {
    candleCursor.style.left = `${event.clientX}px`;
    candleCursor.style.top = `${event.clientY}px`;
  });

  cakeCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      candleImage.src = "images/ui/candle-on.png";
    });

    card.addEventListener("mouseleave", () => {
      candleImage.src = "images/ui/candle-off.png";
    });
  });
}