// 04 / Experience
window.PORTFOLIO = window.PORTFOLIO || {};
window.PORTFOLIO.experience = {
  kicker: "04 / Experience",
  title: ["A career in", "three chapters."],
  intro: "From learning the craft to helping teams deliver: a steady path through frontend engineering.",
  // Latest first. Set `current: true` on the present role. Chapter numbers count up from the oldest role.
  // `responsibilities` appear behind a "Show responsibilities" toggle; `tools` are the role's technologies.
  roles: [
    {
      period: "Dec 2022 \u2014 Present",
      title: "Senior Software Engineer",
      company: "InApp Information Technologies \u00b7 Technopark",
      current: true,
      currentLabel: "Current role",
      description: "Lead frontend delivery across product work while mentoring juniors and freshers. Contribute to task estimation, sprint planning, code reviews, demos, testing, and cross-team coordination.",
      responsibilities: [
        "Develop and maintain frontend features across client and internal applications.",
        "Mentor junior engineers and freshers, supporting their onboarding and technical development.",
        "Estimate tasks and contribute to sprint planning and delivery coordination.",
        "Review code and provide feedback on implementation and maintainability.",
        "Coordinate with backend developers and clients to clarify requirements and integrate changes.",
        "Write unit tests, resolve defects, and present client demos.",
        "Use AI coding tools to support code exploration, implementation, debugging, and test writing.",
      ],
      tools: ["React", "JavaScript", "TypeScript", "Material UI", "Formik", "Yup", "i18next", "REST APIs", "Jest", "React Testing Library", "Git", "Azure DevOps", "Jira", "SonarQube", "Figma", "GitHub Copilot", "Claude"],
    },
    {
      period: "Aug 2021 \u2014 Dec 2022",
      title: "Software Engineer",
      company: "InApp Information Technologies \u00b7 Technopark",
      description: "Expanded into React web and mobile projects: building responsive features, integrating REST APIs, clarifying requirements with client and backend teams, presenting demos, writing tests, and resolving defects.",
      responsibilities: [
        "Developed and maintained frontend features for client and internal applications.",
        "Built React interfaces for workflows across ReadySkill.",
        "Integrated frontend features with REST APIs and coordinated requirements with backend developers and clients.",
        "Wrote unit tests, fixed defects, and presented client demos.",
      ],
      tools: ["React", "JavaScript", "TypeScript", "Material UI", "Formik", "Yup", "REST APIs", "Git", "Azure DevOps", "Jira", "SonarQube"],
    },
    {
      period: "Aug 2019 \u2014 Jul 2021",
      title: "Software Associate",
      company: "Xcubated Business Solutions",
      description: "Started out building Angular frontend features for ATMA, learning delivery through hands-on implementation, unit testing, defect fixes, and close coordination with backend developers.",
      responsibilities: [
        "Developed frontend features for ATMA (Automatic Transition Management Application) using Angular 8, HTML, and CSS.",
        "Wrote unit tests, fixed defects, and coordinated implementation with backend developers.",
        "Worked on a web application using a Java Spring backend and MongoDB.",
      ],
      tools: ["Angular 8", "HTML", "CSS", "Git", "Bitbucket"],
    },
  ],
};
