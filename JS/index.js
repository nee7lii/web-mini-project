(function () {
  const track = document.querySelector(".three-card-grid");
  const cards = document.querySelectorAll(".three-card");
  const prevBtn = document.querySelector(".three-card-prev");
  const nextBtn = document.querySelector(".three-card-next");

  if (!track || cards.length === 0 || !prevBtn || !nextBtn) return;

  let index = 0;
  const visibleCards = 3;

  function update() {
    const cardWidth = cards[0].offsetWidth + 4;
    track.style.transform = `translateX(${-index * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < cards.length - visibleCards) {
      index++;
      update();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      update();
    }
  });

  update();
})();
