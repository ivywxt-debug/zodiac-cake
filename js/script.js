const cakeCards = document.querySelectorAll(".cake-card");

cakeCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();

    const sign = card.dataset.sign;

    console.log(`You selected: ${sign}`);
  });
});