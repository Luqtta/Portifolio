import { projetos } from "./projetos.js";

const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const toggle = document.querySelector("#sw-checkbox");
const projectsSection = document.querySelector("#projects .wrapper");

const notebook_1 = document.querySelector("#notebook-1");
const notebook_2 = document.querySelector("#notebook-2");
const notebook_2_white = document.querySelector("#notebook-2-white");
const vidro = document.querySelector("#vidro");

window.addEventListener("load", function begin() {
  projetos(projectsSection);
  const desafioBtn = document.querySelector("#desafio");
  if (desafioBtn) {
    desafioBtn.addEventListener("click", () => {
      desafios(projectsSection);
      document
        .querySelector("#backToProjectsBtn")
        .addEventListener("click", begin);
    });
  }
});

window.addEventListener("scroll", onScroll);
onScroll();

window.onload = setTimeout(() => {
  notebook_1.style.opacity = 0;

  notebook_1.style.animation = "none";
  notebook_2.style.animation = "none";
  notebook_2_white.style.animation = "none";
  vidro.style.animation = "none";
}, 4000);

function onScroll() {
  showBackToTopButtonOnScroll();

  document.querySelectorAll('.menu a').forEach(link => {
    link.classList.remove("active");
  });

  activateNavigationAndMenuAtCurrentSection(about);
  activateNavigationAndMenuAtCurrentSection(projects);
  activateNavigationAndMenuAtCurrentSection(knowledge);
  activateNavigationAndMenuAtCurrentSection(contact);


  if (scrollY > 100) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function activateNavigationAndMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  if (sectionBoundaries) {
    navigation.classList.add("active");
    if (menuElement) menuElement.classList.add("active");
  }
}



backToTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, null, window.location.pathname);
});

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

openMenu();
function openMenu() {
  const openBtns = document.querySelectorAll(".open");
  openBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.add("menu-expanded");
    });
  });
}

closeMenu();
function closeMenu() {
  const closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.remove("menu-expanded");
    });
  });
}

ScrollReveal().reveal(
  `#home, 
  #home img, 
  #about, 
  #about header, 
  #about p,
  #about img,
  #projects,
  #projects header,
  #projects .card,
  #knowledge,
  #knowledg header,
  #knowledg .card,
  #contact,
  #contact header`,
  { 
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  }
);

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});



function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  // Tradução dos textos principais
  if (window.t) {
    // Menu
    const aboutNav = document.getElementById('aboutNav');
    const projectsNav = document.getElementById('projectsNav');
    const knowledgeNav = document.getElementById('knowledgeNav');
    const contactNav = document.getElementById('contactNav');
    if (aboutNav) aboutNav.textContent = t('about');
    if (projectsNav) projectsNav.textContent = t('projects');
    if (knowledgeNav) knowledgeNav.textContent = t('knowledge');
    if (contactNav) contactNav.textContent = t('contact');

    // Home
    const welcome = document.getElementById('welcome-text');
    const iam = document.getElementById('iam-text');
    const dev = document.getElementById('dev-text');
    const contactBtn = document.getElementById('contact-btn');
    if (welcome) welcome.textContent = t('welcome');
    if (iam) iam.textContent = t('iAm');
    if (dev) dev.textContent = t('dev');
    if (contactBtn) contactBtn.textContent = t('contact');

    // Sobre mim
    const aboutTitle = document.getElementById('about-title');
    const aboutDesc = document.getElementById('about-desc');
    const downloadCVBtn = document.getElementById('download-cv-btn');
    if (aboutTitle) aboutTitle.textContent = t('about');
    if (aboutDesc) aboutDesc.textContent = t('aboutDesc');
    if (downloadCVBtn) downloadCVBtn.textContent = t('downloadCV');

    // Conhecimentos
    const knowledgeTitle = document.getElementById('knowledge-title');
    const softSkillsTitle = document.getElementById('softskills-title');
    const toolsTitle = document.getElementById('tools-title');
    if (knowledgeTitle) knowledgeTitle.textContent = t('knowledge');
    if (softSkillsTitle) softSkillsTitle.textContent = t('softSkills');
    if (toolsTitle) toolsTitle.textContent = t('tools');

    // Contato
    const contactTitle = document.getElementById('contact-title');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (contactTitle) contactTitle.textContent = t('contactTitle');
    if (whatsappBtn) whatsappBtn.childNodes[whatsappBtn.childNodes.length-1].nodeValue = " " + t('whatsapp');
  }

  // Tradução dos toasts de copiar
  document.querySelectorAll('.copy-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const value = this.getAttribute('data-copy');
      navigator.clipboard.writeText(value);
      if (window.t) {
        if (value.includes('@')) {
          showToast(t('emailCopied'));
        } else {
          showToast(t('numberCopied'));
        }
      }
    });
  });

  const typingLine = document.querySelector('.line.typing');
  if (typingLine) {
    setTimeout(() => {
      typingLine.classList.add('no-cursor');
    }, 3400);
  }
});


const themeCheckbox = document.getElementById('sw-checkbox');


document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeCheckbox.checked = true;
  } else {
    document.body.classList.remove('light-mode');
    themeCheckbox.checked = false;
  }
});


themeCheckbox.addEventListener('change', () => {
  if (themeCheckbox.checked) {
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Tradução dos textos principais
  if (window.t) {
    // Menu
    const aboutNav = document.getElementById('aboutNav');
    const projectsNav = document.getElementById('projectsNav');
    const knowledgeNav = document.getElementById('knowledgeNav');
    const contactNav = document.getElementById('contactNav');
    if (aboutNav) aboutNav.textContent = t('about');
    if (projectsNav) projectsNav.textContent = t('projects');
    if (knowledgeNav) knowledgeNav.textContent = t('knowledge');
    if (contactNav) contactNav.textContent = t('contact');

    // Home
    const welcome = document.getElementById('welcome-text');
    const iam = document.getElementById('iam-text');
    const dev = document.getElementById('dev-text');
    const contactBtn = document.getElementById('contact-btn');
    if (welcome) welcome.textContent = t('welcome');
    if (iam) iam.textContent = t('iAm');
    if (dev) dev.textContent = t('dev');
    if (contactBtn) contactBtn.textContent = t('contact');

    // Sobre mim
    const aboutTitle = document.getElementById('about-title');
    const aboutDesc = document.getElementById('about-desc');
    const downloadCVBtn = document.getElementById('download-cv-btn');
    if (aboutTitle) aboutTitle.textContent = t('about');
    if (aboutDesc) aboutDesc.textContent = t('aboutDesc');
    if (downloadCVBtn) downloadCVBtn.textContent = t('downloadCV');

    // Conhecimentos
    const knowledgeTitle = document.getElementById('knowledge-title');
    const softSkillsTitle = document.getElementById('softskills-title');
    const toolsTitle = document.getElementById('tools-title');
    if (knowledgeTitle) knowledgeTitle.textContent = t('knowledge');
    if (softSkillsTitle) softSkillsTitle.textContent = t('softSkills');
    if (toolsTitle) toolsTitle.textContent = t('tools');

    // Contato
    const contactTitle = document.getElementById('contact-title');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (contactTitle) contactTitle.textContent = t('contactTitle');
    if (whatsappBtn) whatsappBtn.childNodes[whatsappBtn.childNodes.length-1].nodeValue = " " + t('whatsapp');
  }

  // Tradução dos toasts de copiar
  document.querySelectorAll('.copy-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const value = this.getAttribute('data-copy');
      navigator.clipboard.writeText(value);
      if (window.t) {
        if (value.includes('@')) {
          showToast(t('emailCopied'));
        } else {
          showToast(t('numberCopied'));
        }
      }
    });
  });

  const typingLine = document.querySelector('.line.typing');
  if (typingLine) {
    setTimeout(() => {
      typingLine.classList.add('no-cursor');
    }, 3400);
  }
});
