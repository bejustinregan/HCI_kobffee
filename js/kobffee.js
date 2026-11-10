feather.replace();

// navbar & shopping cart toggles
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
const shoppingCart = document.querySelector(".shopping-cart");
const cartButton = document.querySelector("#shopping-cart-button");

hamburger?.addEventListener("click", (e) => {
  e.preventDefault();
  const isOpen = navbarNav.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", isOpen);
});

cartButton?.addEventListener("click", (e) => {
  e.preventDefault();
  const isOpen = shoppingCart.classList.toggle("active");
  cartButton.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu once a destination is chosen
navbarNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navbarNav.classList.remove("active"));
});

// klik diluar elemen
document.addEventListener("click", (e) => {
  if (hamburger && !hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (cartButton && !cartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// contact form
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  // Field rules live in the HTML attributes; this only runs once they pass
  formStatus.textContent = "Thank you, your message has been received.";
  contactForm.reset();
});

// product detail modal
const closeModal = (modal) => modal.classList.remove("open");

document.querySelectorAll("[data-modal-target]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById(btn.dataset.modalTarget)?.classList.add("open");
  });
});

document.querySelectorAll(".desc").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".close")) {
      e.preventDefault();
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".desc.open").forEach(closeModal);
  }
});
