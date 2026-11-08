// 04 / Experience
window.PORTFOLIO = window.PORTFOLIO || {};
window.PORTFOLIO.experience = {
  kicker: "04 / Experience",
  title: ["A career in", "three chapters."],
  intro: "From learning the craft to helping teams deliver: a steady path through frontend engineering.",
  // Oldest first. Set `current: true` on the present role.
  roles: [
    {
      period: "Aug 2019 — Jul 2021",
      title: "Software Associate",
      company: "Xcubated Business Solutions",
      description: "Started out building Angular frontend features for ATMA, learning delivery through hands-on implementation, unit testing, defect fixes, and close coordination with backend developers.",
      tools: ["Angular 8", "HTML", "CSS", "Bitbucket"],
    },
    {
      period: "Aug 2021 — Dec 2022",
      title: "Software Engineer",
      company: "InApp Information Technologies · Technopark",
      description: "Expanded into React web and mobile projects: building responsive features, integrating REST APIs, clarifying requirements with client and backend teams, presenting demos, writing tests, and resolving defects.",
      tools: ["React", "REST APIs", "Unit testing", "Git"],
    },
    {
      period: "Dec 2022 — Present",
      title: "Senior Software Engineer",
      company: "InApp Information Technologies · Technopark",
      current: true,
      currentLabel: "Current role",
      description: "Lead frontend delivery across product work while mentoring juniors and freshers. Contribute to task estimation, sprint planning, code reviews, demos, testing, and cross-team coordination.",
      tools: ["React", "JavaScript", "TypeScript", "Azure DevOps", "Agile"],
    },
  ],
};
