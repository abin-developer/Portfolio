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
      tools: ["React", "Material UI", "Formik", "Yup", "REST", "i18next", "Jest"],
      // Shown in the project details panel (View details).
      details: {
        role: "Frontend engineer · Mentor",
        platform: "Web application",
        overview: "A platform supporting child and family well-being in India and the US, made up of two products: ThriveScale and FosterShare.",
        modules: [
          { name: "ThriveScale", text: "Helps case workers and prevention partners manage assessments, follow-ups, and progress reporting." },
          { name: "FosterShare", text: "Supports foster parents with daily logs and well-being tracking." },
        ],
        contributions: [
          "Developed and maintained React frontend features for ThriveScale workflows, including assessments, follow-ups, and progress reporting for case workers and prevention partners.",
          "Contributed to FosterShare features that let foster parents record daily logs and track children’s well-being.",
          "Built and maintained reusable UI components using React, Material UI, Formik, and Yup, and integrated frontend features with REST APIs.",
          "Wrote unit tests, fixed defects, and coordinated with client and backend teams to clarify requirements and deliver changes.",
          "Presented client demos to show completed features and gather feedback.",
        ],
        // Standout achievements, shown as their own section
        highlights: [
          "Generated unit tests for legacy files and verified them using Jest.",
          "Integrated project-wide translations using i18next, supporting nine local languages.",
          "Refactored the assessment page to reduce load time and improve the user experience.",
          "Built a reusable modal component with dynamic data handling for multiple use cases and contributed it to the organization-wide shared code repository.",
          "Transitioned into mobile development to support growing mobile requirements and deliver cross-platform features.",
        ],
      },
    },
    {
      area: "WORKFORCE LEARNING",
      client: "InApp · Mid-Ohio Foodbank",
      name: "ReadySkill",
      categories: ["web", "mobile"],
      description: "Built frontend features for a learner mobile app and partner portal connecting students to education providers, courses, employers, and social-service partners. The platform also supports practical services such as childcare and food assistance so learners can pursue training. Contributed to demos, unit tests, defect fixes, and cross-team integration.",
      tools: ["React", "SignalR", "Azure DevOps", "Jira"],
      details: {
        role: "Frontend engineer",
        platform: "Learner mobile app + partner web portal",
        overview: "A workforce-learning platform connecting students to education providers, courses, employers, and social-service partners. It also supports practical services such as childcare and food assistance so learners can pursue training.",
        modules: [
          { name: "Learner mobile app", text: "Used by students to find and follow education and training opportunities." },
          { name: "Partner portal", text: "Used by education providers, employers, and social-service partners." },
        ],
        contributions: [
          "Developed and maintained frontend features for a workforce-learning platform with a mobile app and partner portal.",
          "Supported learner and partner workflows connecting students with educational institutions, employers, and social-service providers.",
          "Worked with React and SignalR to support the platform’s frontend functionality.",
          "Wrote unit tests, fixed defects, presented client demos, and coordinated requirements and integrations with backend and client teams.",
        ],
      },
    },
    {
      area: "AWARDS PLATFORM",
      client: "InApp · NASSCOM",
      name: "SME Inspire Awards Portal",
      categories: ["web"],
      description: "Developed frontend workflows for an awards platform serving NASSCOM-member SMEs. The application includes authentication, multi-step questionnaires, award-category selection based on revenue bands, and document uploads. Role-based admin and super-admin tools support awards-cycle configuration and exports.",
      tools: ["React", "Role-based access", "Azure DevOps", "SonarQube"],
      details: {
        role: "Frontend engineer",
        platform: "Web application",
        overview: "An awards platform serving NASSCOM-member SMEs, covering the full awards cycle from application to administration.",
        modules: [
          { name: "Applicant flow", text: "Authentication, multi-step questionnaires, award-category selection based on revenue bands, and document uploads." },
          { name: "Admin & super-admin tools", text: "Role-based tools for configuring the awards cycle and exporting data." },
        ],
        contributions: [
          "Contributed frontend features to an awards application platform for NASSCOM-member SMEs.",
          "Implemented and maintained interfaces for secure authentication, multi-step questionnaires, award-category selection by revenue band, and file uploads.",
          "Supported role-based admin and super-admin configuration and award-cycle data exports.",
          "Wrote unit tests, fixed defects, presented demos, and coordinated implementation requirements with backend and client teams.",
        ],
      },
    },
    {
      area: "INTERNAL PRODUCT",
      client: "InApp",
      name: "Asset Management Tool",
      categories: ["internal"],
      description: "Implemented frontend features for organizational asset records, allocation and return workflows, and dashboards presenting asset information. Designed to integrate with the internal employee-management application or operate standalone. Shared knowledge of the application workflows and frontend implementation with teammates.",
      tools: ["React", "JavaScript", "Git"],
      details: {
        role: "Frontend engineer",
        platform: "Internal web application",
        overview: "An internal tool for managing organizational assets, designed to integrate with the internal employee-management application or operate standalone.",
        modules: [
          { name: "Asset records", text: "Keeping track of the organization's assets." },
          { name: "Allocation & return", text: "Workflows for assigning assets to people and taking them back." },
          { name: "Dashboards", text: "Views presenting asset information." },
        ],
        contributions: [
          "Developed frontend features for managing organizational assets, including allocation and return workflows.",
          "Built dashboard views to help users review information associated with company assets.",
          "Contributed to an application designed to integrate with the internal employee system or run as a standalone tool.",
          "Fixed defects and coordinated frontend changes with the team.",
        ],
      },
    },
    {
      area: "TRANSITION MANAGEMENT",
      client: "Xcubated",
      name: "ATMA",
      categories: ["web"],
      description: "Built Angular frontend features for an organizational transition-management application. Worked with Java/Spring backend developers, wrote unit tests, and fixed defects as part of feature delivery.",
      tools: ["Angular 8", "HTML", "CSS", "Java / Spring", "MongoDB"],
      details: {
        role: "Angular frontend developer",
        platform: "Web application",
        overview: "ATMA (Automatic Transition Management Application) is an organizational transition-management application, built with an Angular frontend and a Java Spring backend with MongoDB.",
        contributions: [
          "Developed Angular 8 frontend features for an application used to manage organizational transitions.",
          "Implemented new features, wrote unit tests, and fixed defects.",
          "Coordinated with backend developers working with Java Spring and MongoDB.",
        ],
      },
    },
  ],
};
