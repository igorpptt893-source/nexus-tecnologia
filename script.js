const projectGrid = document.getElementById("projectGrid");
const filters = document.getElementById("projectFilters");

function renderProjects(filter = "todos") {
  const visibleProjects = projects.filter(project => filter === "todos" || project.category === filter);
  projectGrid.innerHTML = visibleProjects.map(project => {
    const hasLink = project.link && !project.link.includes("SEU-LINK-DO-PROJETO");
    const href = hasLink ? project.link : "#contato";
    const label = hasLink ? "Visualizar projeto" : "Solicitar demonstração";
    return `
      <article class="project-card">
        <div class="project-cover ${project.cover || "cover-custom"}">
          <div class="cover-symbol">${project.symbol || "✦"}</div>
        </div>
        <div class="project-info">
          <div class="project-meta"><span>${project.categoryLabel || project.category.toUpperCase()}</span><span>NEXUS</span></div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a class="project-link" href="${href}" ${hasLink ? 'target="_blank" rel="noopener noreferrer"' : ""}>${label} <span>↗</span></a>
        </div>
      </article>`;
  }).join("");
}

filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  filters.querySelectorAll(".filter-btn").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderProjects(button.dataset.filter);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

// Altere para seu WhatsApp com DDI + DDD + número, somente números.
// Exemplo: 5591991234567
const whatsappNumber = "5591999999999";
document.getElementById("whatsappLink").href =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, Nexus Tecnologia! Quero solicitar um orçamento.")}`;

renderProjects();
