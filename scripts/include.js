// scripts/include.js

async function includeComponent(id, path) {
  try {
    const response = await fetch(path);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error(`Erro ao carregar ${path}:`, error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  includeComponent("navbar-placeholder", "components/navbar.html");
  includeComponent("footer-placeholder", "components/footer.html");
});
