window.siteLang = (navigator.language || navigator.userLanguage).startsWith('pt') ? 'pt' : 'en';

window.translations = {
  pt: {
    welcome: "Seja bem vindo 👋",
    iAm: "Eu sou Lucas,",
    dev: "Backend Java Developer.",
    contact: "Fale comigo",
    about: "Sobre mim",
    projects: "Projetos",
    knowledge: "Stack Técnica",
    downloadCV: "DOWNLOAD CV",
    aboutDesc: "Meu nome é Lucas Morais Souza, tenho 16 anos e sou especializado em desenvolvimento backend com Java. Comecei desenvolvendo plugins complexos para Minecraft com Bukkit/Spigot — sistemas de clãs, warps, NPCs e economia — o que me deu uma base sólida em POO, eventos e persistência de dados. Hoje foco em APIs REST com Spring Boot, PostgreSQL e Docker, construindo sistemas escaláveis e seguros. Se preferir, podemos conversar por e-mail ou WhatsApp.",
    softSkills: "Soft Skills",
    tools: "DevOps & Ferramentas",
    contactTitle: "Fale comigo!",
    whatsapp: "WhatsApp",
    emailCopied: "Email copiado!",
    numberCopied: "Número copiado!"
  },
  en: {
    welcome: "Welcome 👋",
    iAm: "I'm Lucas,",
    dev: "Backend Java Developer.",
    contact: "Contact me",
    about: "About me",
    projects: "Projects",
    knowledge: "Tech Stack",
    downloadCV: "DOWNLOAD CV",
    aboutDesc: "My name is Lucas Morais Souza, I'm 16 years old and I specialize in backend development with Java. I started by building complex Minecraft plugins with Bukkit/Spigot — clan systems, warps, NPCs and economy — which gave me a solid foundation in OOP, event handling and data persistence. Today I focus on REST APIs with Spring Boot, PostgreSQL and Docker, building scalable and secure systems. Feel free to reach out by email or WhatsApp.",
    softSkills: "Soft Skills",
    tools: "DevOps & Tools",
    contactTitle: "Contact me!",
    whatsapp: "WhatsApp",
    emailCopied: "Email copied!",
    numberCopied: "Number copied!"
  }
};

// Função para traduzir
window.t = function(key) {
  return window.translations[window.siteLang][key] || key;
};