document.addEventListener("DOMContentLoaded", function() {
  // ===== MODAL HANDLER SAFE =====
  const modalMenu1 = document.getElementById("modalMenu1");
  const modalMenu1Content = document.getElementById("modalMenu1Content");
  if (modalMenu1 && modalMenu1Content) {
    modalMenu1.addEventListener("click", function() {
      modalMenu1Content.style.display = "block";
    });
    const close1 = modalMenu1Content.querySelector(".close");
    if (close1) close1.addEventListener("click", () => modalMenu1Content.style.display = "none");
  }

  const modalShop1 = document.getElementById("modalShop1");
  const modalShop1Content = document.getElementById("modalShop1Content");
  if (modalShop1 && modalShop1Content) {
    modalShop1.addEventListener("click", function() {
      modalShop1Content.style.display = "block";
    });
    const close2 = modalShop1Content.querySelector(".close");
    if (close2) close2.addEventListener("click", () => modalShop1Content.style.display = "none");
  }

  // ===== MOBILE NAV MENU =====
  const menu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  if (menu && navLinks) {
    menu.setAttribute("aria-expanded", "false");

    const toggleMenu = () => {
      const isActive = menu.classList.toggle("active");
      navLinks.classList.toggle("active");
      menu.setAttribute("aria-expanded", isActive ? "true" : "false");
    };

    menu.addEventListener("click", toggleMenu);

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menu.classList.remove("active");
        menu.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !menu.contains(e.target)) {
        navLinks.classList.remove("active");
        menu.classList.remove("active");
        menu.setAttribute("aria-expanded", "false");
      }
    });
  }
});
