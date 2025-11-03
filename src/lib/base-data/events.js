const baseEvents = [
    {
        id: 0,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Stand-Up Meeting",
        from: new Date(2025, 10, 3, 9, 25),
        to: new Date(2025, 10, 3, 11, 10)
    },
    {
        id: 1,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Regional meeting",
        from: new Date(2025, 10, 3, 13, 45),
        to: new Date(2025, 10, 3, 15, 50)
    },
    {
        id: 2,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Make-It-All awards initial planning meeting",
        from: new Date(2025, 10, 4, 9, 10),
        to: new Date(2025, 10, 4, 10, 55)
    },
    {
        id: 3,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Working practices review meeting",
        from: new Date(2025, 10, 5, 10, 5),
        to: new Date(2025, 10, 5, 12, 0)
    },
    {
        id: 4,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Catchup session",
        from: new Date(2025, 10, 4, 13, 15),
        to: new Date(2025, 10, 4, 16, 5)
    },
    {
        id: 5,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Manager meeting",
        from: new Date(2025, 10, 4, 9, 55),
        to: new Date(2025, 10, 4, 11, 25)
    },
    {
        id: 6,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Discussion on features",
        from: new Date(2025, 10, 5, 14, 40),
        to: new Date(2025, 10, 5, 16, 15)
    },
    {
        id: 7,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Client Meeting",
        from: new Date(2025, 10, 6, 9, 10),
        to: new Date(2025, 10, 6, 10, 35)
    },
    {
        id: 8,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Algorithm Audit",
        from: new Date(2025, 10, 6, 14, 25),
        to: new Date(2025, 10, 6, 16, 0)
    },
    {
        id: 9,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Morning Check-In",
        from: new Date(2025, 10, 3, 8, 55),
        to: new Date(2025, 10, 3, 9, 40)
    },
    {
        id: 10,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Design Review Session",
        from: new Date(2025, 10, 3, 11, 15),
        to: new Date(2025, 10, 3, 12, 10)
    },
    {
        id: 11,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "HR Policy Update",
        from: new Date(2025, 10, 3, 12, 25),
        to: new Date(2025, 10, 3, 13, 5)
    },
    {
        id: 12,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Cross-Team Planning Call",
        from: new Date(2025, 10, 3, 14, 40),
        to: new Date(2025, 10, 3, 15, 25)
    },
    {
        id: 13,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Regional Ops Briefing",
        from: new Date(2025, 10, 4, 8, 45),
        to: new Date(2025, 10, 4, 9, 35)
    },
    {
        id: 14,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Prototype Feedback",
        from: new Date(2025, 10, 4, 11, 25),
        to: new Date(2025, 10, 4, 12, 10)
    },
    {
        id: 15,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Afternoon Development Huddle",
        from: new Date(2025, 10, 4, 16, 10),
        to: new Date(2025, 10, 4, 17, 0)
    },
    {
        id: 16,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Team Progress Checkpoint",
        from: new Date(2025, 10, 5, 9, 20),
        to: new Date(2025, 10, 5, 10, 10)
    },
    {
        id: 17,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Executive Sync",
        from: new Date(2025, 10, 5, 13, 30),
        to: new Date(2025, 10, 5, 14, 10)
    },
    {
        id: 18,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Post-Mortem: Previous Sprint",
        from: new Date(2025, 10, 5, 14, 15),
        to: new Date(2025, 10, 5, 15, 30)
    },
    {
        id: 19,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Morning Data Sync",
        from: new Date(2025, 10, 6, 9, 5),
        to: new Date(2025, 10, 6, 9, 55)
    },
    {
        id: 20,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "UI Review Board",
        from: new Date(2025, 10, 6, 11, 40),
        to: new Date(2025, 10, 6, 12, 55)
    },
    {
        id: 21,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Product Integration Call",
        from: new Date(2025, 10, 6, 15, 20),
        to: new Date(2025, 10, 6, 16, 15)
    },
    {
        id: 22,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Weekly Wrap-Up",
        from: new Date(2025, 10, 7, 9, 45),
        to: new Date(2025, 10, 7, 10, 30)
    },
    {
        id: 23,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "KPI Review",
        from: new Date(2025, 10, 7, 10, 15),
        to: new Date(2025, 10, 7, 11, 5)
    },
    {
        id: 24,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Quarterly Finance Check",
        from: new Date(2025, 10, 7, 13, 25),
        to: new Date(2025, 10, 7, 14, 15)
    },
    {
        id: 25,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Sprint Retrospective",
        from: new Date(2025, 10, 7, 14, 5),
        to: new Date(2025, 10, 7, 15, 55)
    },
    {
        id: 26,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Budget Review",
        from: new Date(2025, 10, 10, 9, 45),
        to: new Date(2025, 10, 10, 11, 25)
    },
    {
        id: 27,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Design Sync",
        from: new Date(2025, 10, 10, 13, 5),
        to: new Date(2025, 10, 10, 13, 50)
    },
    {
        id: 28,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Marketing Strategy Review",
        from: new Date(2025, 10, 11, 9, 10),
        to: new Date(2025, 10, 11, 10, 55)
    },
    {
        id: 29,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Quarterly Results Discussion",
        from: new Date(2025, 10, 11, 14, 15),
        to: new Date(2025, 10, 11, 15, 45)
    },
    {
        id: 30,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Team Stand-Up",
        from: new Date(2025, 10, 12, 9, 20),
        to: new Date(2025, 10, 12, 9, 55)
    },
    {
        id: 31,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Sales Pipeline Meeting",
        from: new Date(2025, 10, 12, 11, 5),
        to: new Date(2025, 10, 12, 12, 35)
    },
    {
        id: 32,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Leadership Check-In",
        from: new Date(2025, 10, 13, 15, 0),
        to: new Date(2025, 10, 13, 15, 45)
    },
    {
        id: 33,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Product Review",
        from: new Date(2025, 10, 14, 10, 25),
        to: new Date(2025, 10, 14, 11, 50)
    },
    {
        id: 34,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "UX Workshop",
        from: new Date(2025, 10, 17, 9, 40),
        to: new Date(2025, 10, 17, 11, 15)
    },
    {
        id: 35,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Feature Brainstorm",
        from: new Date(2025, 10, 17, 13, 10),
        to: new Date(2025, 10, 17, 14, 55)
    },
    {
        id: 36,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Compliance Review",
        from: new Date(2025, 10, 18, 9, 35),
        to: new Date(2025, 10, 18, 11, 0)
    },
    {
        id: 37,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Regional Outreach Planning",
        from: new Date(2025, 10, 19, 14, 25),
        to: new Date(2025, 10, 19, 15, 30)
    },
    {
        id: 38,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Client Feedback Debrief",
        from: new Date(2025, 10, 20, 9, 15),
        to: new Date(2025, 10, 20, 9, 50)
    },
    {
        id: 39,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Project Status Update",
        from: new Date(2025, 10, 20, 11, 10),
        to: new Date(2025, 10, 20, 12, 0)
    },
    {
        id: 40,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Finance Alignment Call",
        from: new Date(2025, 10, 21, 15, 25),
        to: new Date(2025, 10, 21, 16, 10)
    },
    {
        id: 41,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Sprint Kickoff",
        from: new Date(2025, 11, 1, 9, 5),
        to: new Date(2025, 11, 1, 9, 55)
    },
    {
        id: 42,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Performance Review Session",
        from: new Date(2025, 11, 1, 14, 15),
        to: new Date(2025, 11, 1, 15, 25)
    },
    {
        id: 43,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "UI Refinement Meeting",
        from: new Date(2025, 11, 2, 11, 10),
        to: new Date(2025, 11, 2, 12, 0)
    },
    {
        id: 44,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Product Demo Prep",
        from: new Date(2025, 11, 2, 14, 20),
        to: new Date(2025, 11, 2, 15, 50)
    },
    {
        id: 45,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Mid-Quarter Leadership Meeting",
        from: new Date(2025, 11, 3, 10, 5),
        to: new Date(2025, 11, 3, 11, 40)
    },
    {
        id: 46,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "QA Bug Triage",
        from: new Date(2025, 11, 3, 13, 25),
        to: new Date(2025, 11, 3, 14, 50)
    },
    {
        id: 47,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Year-End Roadmap Planning",
        from: new Date(2025, 11, 5, 9, 35),
        to: new Date(2025, 11, 5, 10, 55)
    },
    {
        id: 48,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Client Handoff Review",
        from: new Date(2025, 11, 5, 14, 45),
        to: new Date(2025, 11, 5, 15, 50)
    },
    {
        id: 49,
        projectId: 2,
        members: [0, 1, 3, 7],
        title: "Budget Alignment",
        from: new Date(2025, 11, 9, 13, 10),
        to: new Date(2025, 11, 9, 14, 35)
    },
    {
    id: 50,
    projectId: 1,
    members: [2, 3, 4, 6],
    title: "Marketing Plan Finalization",
    from: new Date(2025, 11, 10, 14, 25),
    to: new Date(2025, 11, 10, 15, 55)
  },
  {
    id: 51,
    projectId: 0,
    members: [0, 2, 4, 5, 6],
    title: "Year-End Summary Meeting",
    from: new Date(2025, 11, 17, 10, 15),
    to: new Date(2025, 11, 17, 11, 50)
  },
  {
    id: 52,
    projectId: 2,
    members: [0, 1, 3, 7],
    title: "Holiday Schedule Coordination",
    from: new Date(2025, 11, 18, 15, 20),
    to: new Date(2025, 11, 18, 16, 10)
  },
  {
    id: 53,
    projectId: 0,
    members: [0, 2, 4, 5, 6],
    title: "Final Team Wrap-Up",
    from: new Date(2025, 11, 19, 9, 30),
    to: new Date(2025, 11, 19, 11, 0)
  }
];

export default baseEvents;
