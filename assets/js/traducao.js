window.siteLang = (navigator.language || navigator.userLanguage).startsWith('pt') ? 'pt' : 'en';

window.translations = {
  pt: {
    welcome: "Seja bem vindo 👋",
    iAm: "Eu sou Lucas,",
    dev: "Desenvolvedor Web Full Stack.",
    contact: "Fale comigo",
    about: "Sobre mim",
    projects: "Projetos",
    knowledge: "Conhecimentos",
    downloadCV: "DOWNLOAD CV",
    aboutDesc: "Meu nome é Lucas Morais Souza, tenho 16 anos e atuo na área de desenvolvimento web há mais de 1 ano. Possuo experiência como Desenvolvedor Full Stack, criando soluções modernas, escaláveis e de alta performance. Logo abaixo você encontra meu currículo com informações detalhadas sobre mim. Se preferir, podemos marcar uma reunião ou conversar por e-mail ou WhatsApp.",
    softSkills: "Soft Skills",
    tools: "Ferramentas",
    contactTitle: "Fale comigo!",
    whatsapp: "WhatsApp",
    emailCopied: "Email copiado!",
    numberCopied: "Número copiado!"
  },
  en: {
    welcome: "Welcome 👋",
    iAm: "I'm Lucas,",
    dev: "Full Stack Web Developer.",
    contact: "Contact me",
    about: "About me",
    projects: "Projects",
    knowledge: "Skills",
    downloadCV: "DOWNLOAD CV",
    aboutDesc: "My name is Lucas Morais Souza, I'm 16 years old and I've been working in web development for over a year. I have experience as a Full Stack Developer, creating modern, scalable and high-performance solutions. Below you can find my resume with detailed information about me. If you prefer, we can schedule a meeting or talk by email or WhatsApp.",
    softSkills: "Soft Skills",
    tools: "Tools",
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