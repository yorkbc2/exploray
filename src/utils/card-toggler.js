export const mobileCardToggler = selector => {
  if (window.innerWidth <= 767) {
    const cards = document.querySelectorAll(selector);
    if (jQuery && cards.length) {
      cards.forEach(card => {
        card = jQuery(card);
        const h5 = card.find(".profile-card-toggler"),
          content = card.find(".profile-card-content");

        if (h5.length && content.length) {
          content.slideUp(400);
          h5.on("click", () => {
            h5.toggleClass("toggled");
            content.slideToggle(400);
          });
        }
      });
    }
  }
};
