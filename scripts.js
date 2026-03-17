const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLeistungenBtn = document.getElementById("mobileLeistungenBtn");
const mobileLeistungenMenu = document.getElementById("mobileLeistungenMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

if (mobileLeistungenBtn && mobileLeistungenMenu) {
  mobileLeistungenBtn.addEventListener("click", () => {
    const isOpen = mobileLeistungenMenu.classList.toggle("is-open");
    mobileLeistungenBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".faq-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (item) item.classList.toggle("active");
  });
});
