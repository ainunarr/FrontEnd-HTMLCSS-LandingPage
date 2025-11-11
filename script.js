const modalMenu1 = document.getElementById("modalMenu1");
const modalMenu1Content = document.getElementById("modalMenu1Content");

modalMenu1.onclick = function() {
    modalMenu1Content.style.display = "block";
}

modalMenu1Content.getElementsByClassName("close")[0].onclick = function() {
    modalMenu1Content.style.display = "none";
}

const modalShop1 = document.getElementById("modalShop1");
const modalShop1Content = document.getElementById("modalShop1Content");

modalShop1.onclick = function() {
    modalShop1Content.style.display = "block";
}

modalShop1Content.getElementsByClassName("close")[0].onclick = function() {
    modalShop1Content.style.display = "none";
}

const menu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navLinks.classList.toggle("active");
  });