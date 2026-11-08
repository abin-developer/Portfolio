// 02 / Expertise ("Tools I work with.")
window.PORTFOLIO = window.PORTFOLIO || {};
window.PORTFOLIO.skills = {
  kicker: "02 / Expertise",
  title: ["Tools I work with."],
  intro: "A focused toolkit for building, integrating, testing, and shipping modern applications.",
  backgroundText: "BUILD · INTEGRATE · TEST · SHIP · ",
  note: "Tip: tags marked with ↗ on hover open the tool’s official site in a new tab.",
  // Tool names that also appear in js/data/tool-links.js become links automatically
  groups: [
    { icon: "✳", title: "Frontend development", text: "Responsive interfaces and reusable components for web and mobile.", tools: ["React.js", "TypeScript", "JavaScript", "React Native", "Angular 8"] },
    { icon: "◫", title: "UI & architecture", text: "Component-based design, responsive layouts, and role-based interfaces.", tools: ["Material UI", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "RBAC"] },
    { icon: "⤴", title: "APIs & integration", text: "Connecting application interfaces with service and identity platforms.", tools: ["REST APIs", "JSON", "Axios", "Swagger", "Postman", "Auth0"] },
    { icon: "⌁", title: "Testing & quality", text: "Practical quality checks throughout feature development.", tools: ["Jest", "React Testing Library", "Unit testing", "SonarQube", "Debugging"] },
    { icon: "◉", title: "Delivery & collaboration", text: "Working in Agile teams from estimation and planning through review.", tools: ["Azure DevOps", "Git", "GitHub", "GitLab", "Bitbucket", "Jira"] },
    { icon: "✧", title: "AI-assisted development", text: "Using AI tools as part of a reviewed, engineering-led workflow.", tools: ["GitHub Copilot", "Claude", "Claude Code", "Prompt engineering", "Spec-driven development"] },
  ],
};
