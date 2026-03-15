const projetosData = {
  pt: [
    {
      title: "Helpdesk API",
      subtitle: "Spring Boot · PostgreSQL · Docker",
      desc: "API REST para gerenciamento de tickets de suporte. Simula um sistema de helpdesk onde usuários criam tickets, acompanham status e atualizam solicitações.",
      color: "#0d6e3a",
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "Docker", "Maven"],
      features: [
        "Criação e gerenciamento de tickets",
        "Acompanhamento de status",
        "Arquitetura em camadas (Controller → Service → Repository)",
        "Containerização com Docker",
        "Spring Data JPA"
      ],
      github: "https://github.com/Luqtta/helpdesk-api",
      live: ""
    },
    {
      title: "DayFlow",
      subtitle: "Spring Boot · React · PostgreSQL · JWT",
      desc: "Aplicação full-stack de gerenciamento de rotinas com gamificação. Organize tarefas diárias, acompanhe seu progresso e compita no ranking global.",
      color: "#6b2fa0",
      tags: ["Java 21", "Spring Boot", "React", "TypeScript", "PostgreSQL", "JWT"],
      features: [
        "Autenticação JWT com Spring Security",
        "Rotinas customizadas com categorias",
        "Checklist diário com progresso em tempo real",
        "Sistema de pontuação D–S e ranking global",
        "Histórico com gráficos animados",
        "Upload de avatar via Cloudinary"
      ],
      github: "https://github.com/Luqtta/DayFlow",
      live: "https://day-flow-eta.vercel.app"
    },
    {
      title: "Medical Remember",
      subtitle: "Node.js · TypeScript · MongoDB · Twilio",
      desc: "App de lembretes de medicamentos criado enquanto o dev estava internado com pneumonia. Agenda automática e notificações via WhatsApp.",
      color: "#185adb",
      tags: ["Node.js", "TypeScript", "Express", "MongoDB", "Twilio API"],
      features: [
        "Cadastro de medicamentos com dosagem e horários",
        "Geração automática de agenda de doses",
        "Notificações WhatsApp via Twilio API",
        "Confirmação de dose tomada",
        "Interface responsiva"
      ],
      github: "https://github.com/Luqtta/Medical-Remember",
      live: ""
    },
    {
      title: "LS Optimizer",
      subtitle: "C# · WPF · .NET · Windows API",
      desc: "Aplicativo desktop para otimização de performance no Windows. Detecta jogos em execução, aplica presets de desempenho e gerencia memória do sistema.",
      color: "#512bd4",
      tags: ["C#", "WPF", ".NET", "Windows API", "XAML"],
      features: [
        "Game Mode com detecção automática de jogos",
        "Otimização de processos e prioridades",
        "Limpeza de memória em standby e cache",
        "UI dark temática com WPF/XAML",
        "Timer resolution e tweaks de performance"
      ],
      github: "https://github.com/Luqtta/Ls-Optimizer-1.0",
      live: ""
    }
  ],
  en: [
    {
      title: "Helpdesk API",
      subtitle: "Spring Boot · PostgreSQL · Docker",
      desc: "REST API for support ticket management. Simulates a helpdesk system where users create tickets, track status and update requests.",
      color: "#0d6e3a",
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "Docker", "Maven"],
      features: [
        "Ticket creation and management",
        "Status tracking",
        "Layered architecture (Controller → Service → Repository)",
        "Docker containerization",
        "Spring Data JPA"
      ],
      github: "https://github.com/Luqtta/helpdesk-api",
      live: ""
    },
    {
      title: "DayFlow",
      subtitle: "Spring Boot · React · PostgreSQL · JWT",
      desc: "Full-stack routine management app with gamification. Organize daily tasks, track your progress and compete on the global leaderboard.",
      color: "#6b2fa0",
      tags: ["Java 21", "Spring Boot", "React", "TypeScript", "PostgreSQL", "JWT"],
      features: [
        "JWT authentication with Spring Security",
        "Custom routines with categories",
        "Daily checklist with real-time progress",
        "D–S score system and global leaderboard",
        "History with animated charts",
        "Avatar upload via Cloudinary"
      ],
      github: "https://github.com/Luqtta/DayFlow",
      live: "https://day-flow-eta.vercel.app"
    },
    {
      title: "Medical Remember",
      subtitle: "Node.js · TypeScript · MongoDB · Twilio",
      desc: "Medication reminder app built while the dev was hospitalized with pneumonia. Automatic schedule and WhatsApp notifications.",
      color: "#185adb",
      tags: ["Node.js", "TypeScript", "Express", "MongoDB", "Twilio API"],
      features: [
        "Medication registration with dosage and schedule",
        "Automatic dose schedule generation",
        "WhatsApp notifications via Twilio API",
        "Dose confirmation tracking",
        "Responsive interface"
      ],
      github: "https://github.com/Luqtta/Medical-Remember",
      live: ""
    },
    {
      title: "LS Optimizer",
      subtitle: "C# · WPF · .NET · Windows API",
      desc: "Desktop app for Windows performance optimization. Detects running games, applies performance presets and manages system memory.",
      color: "#512bd4",
      tags: ["C#", "WPF", ".NET", "Windows API", "XAML"],
      features: [
        "Game Mode with automatic game detection",
        "Process and priority optimization",
        "Standby memory and cache cleanup",
        "Dark-themed UI with WPF/XAML",
        "Timer resolution and performance tweaks"
      ],
      github: "https://github.com/Luqtta/Ls-Optimizer-1.0",
      live: ""
    }
  ]
};

function projetos(section) {
  const lang = window.siteLang || 'pt';
  const data = projetosData[lang];
  const title = window.t ? window.t('projects') : (lang === 'pt' ? 'Projetos' : 'Projects');
  section.innerHTML = `<header>
      <h2 id="projects-title">${title}</h2>
    </header>
    <div class="content">
      <div class="backend-cards-grid">
        ${data.map(projeto => `
          <div class="backend-card">
            <div class="backend-card-header" style="background:${projeto.color}18;border-bottom:2px solid ${projeto.color}55;">
              <div class="backend-card-title-row">
                <h3 class="backend-card-title">${projeto.title}</h3>
                <span class="backend-card-subtitle">${projeto.subtitle}</span>
              </div>
              <div class="backend-card-tags">
                ${projeto.tags.map(tag => `<span class="backend-tag">${tag}</span>`).join('')}
              </div>
            </div>
            <div class="backend-card-body">
              <p class="backend-card-desc">${projeto.desc}</p>
              <ul class="backend-features">
                ${projeto.features.map(f => `<li><span class="feature-dot" style="background:${projeto.color};"></span>${f}</li>`).join('')}
              </ul>
            </div>
            <div class="backend-card-footer">
              <a class="backend-link backend-link-primary" href="${projeto.github}" target="_blank" title="Ver código no GitHub">
                <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                Código
              </a>
              ${projeto.live ? `
              <a class="backend-link backend-link-secondary" href="${projeto.live}" target="_blank" title="Ver projeto ao vivo">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                Demo
              </a>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

export { projetos };
