// 03 / Selected work
window.PORTFOLIO = window.PORTFOLIO || {};
window.PORTFOLIO.projects = {
  kicker: "03 / Selected work",
  title: ["Products with purpose."],
  intro: "Frontend contributions across platforms that help people access services, manage information, and move work forward.",
  // `key` must match the values used in each project's `categories`; `label` is singular, used in "Showing 2 web applications"
  filters: [
    { key: "all", button: "All projects" },
    { key: "web", button: "Web applications", label: "web application" },
    { key: "mobile", button: "Mobile platforms", label: "mobile platform" },
    { key: "internal", button: "Internal tools", label: "internal tool" },
  ],
  items: [
    {
      area: "WELL-BEING",
      client: "InApp · Miracle Foundation",
      name: "ThriveWell",
      categories: ["web"],
      description: "Contributed to ThriveScale and FosterShare, supporting child and family well-being in India and the US. ThriveScale helps case workers and prevention partners manage assessments, follow-ups, and progress reporting; FosterShare supports foster parents with daily logs and well-being tracking. Mentored junior engineers while delivering frontend features, demos, tests, and API integrations.",
      tools: ["React", "Material UI", "Formik", "Yup", "REST", "i18next"],
    },
    {
      area: "WORKFORCE LEARNING",
      client: "InApp · Mid-Ohio Foodbank",
      name: "ReadySkill",
      categories: ["web", "mobile"],
      description: "Built frontend features for a learner mobile app and partner portal connecting students to education providers, courses, employers, and social-service partners. The platform also supports practical services such as childcare and food assistance so learners can pursue training. Contributed to demos, unit tests, defect fixes, and cross-team integration.",
      tools: ["React", "SignalR", "Azure DevOps", "Jira"],
    },
    {
      area: "AWARDS PLATFORM",
      client: "InApp · NASSCOM",
      name: "SME Inspire Awards Portal",
      categories: ["web"],
      description: "Developed frontend workflows for an awards platform serving NASSCOM-member SMEs. The application includes authentication, multi-step questionnaires, award-category selection based on revenue bands, and document uploads. Role-based admin and super-admin tools support awards-cycle configuration and exports.",
      tools: ["React", "Role-based access", "Azure DevOps", "SonarQube"],
    },
    {
      area: "INTERNAL PRODUCT",
      client: "InApp",
      name: "Asset Management Tool",
      categories: ["internal"],
      description: "Implemented frontend features for organizational asset records, allocation and return workflows, and dashboards presenting asset information. Designed to integrate with the internal employee-management application or operate standalone. Shared knowledge of the application workflows and frontend implementation with teammates.",
      tools: ["React", "JavaScript", "Git"],
    },
    {
      area: "TRANSITION MANAGEMENT",
      client: "Xcubated",
      name: "ATMA",
      categories: ["web"],
      description: "Built Angular frontend features for an organizational transition-management application. Worked with Java/Spring backend developers, wrote unit tests, and fixed defects as part of feature delivery.",
      tools: ["Angular 8", "HTML", "CSS", "Java / Spring", "MongoDB"],
    },
  ],
};
