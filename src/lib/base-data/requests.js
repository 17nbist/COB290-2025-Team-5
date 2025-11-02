export const requests = {
    "manager1@gmail.com": [
        {
            id: 1,
            title: "Vacation Approval: Gabe Itch (Nov 10-14)",
            preview:
                "Gabe Itch has submitted a request for 5 days of annual leave from November 10th to November 14th...",
            content:
                "Gabe Itch has submitted a request for 5 days of annual leave from November 10th to November 14th.\n\nReason: Personal time\n\nTeam coverage is already arranged. Please approve by the end of the day.",
            timeAgo: "2 hours ago",
            highPriority: true,
            type: "Incoming",
        },
        {
            id: 2,
            title: "Q4 Budget Submission",
            preview:
                "Attached is the Q4 budget proposal for the 'Project Apex' team. Requesting CEO review...",
            content:
                "Attached is the Q4 budget proposal for the 'Project Apex' team. Requesting CEO review and approval.\n\nKey items include:\n- New software licenses\n- 2 new contract-to-hire roles\n- Team training budget increase",
            timeAgo: "1 day ago",
            highPriority: false,
            type: "Outgoing",
        },
        {
            id: 3,
            title: "Performance Review: Anita Bath",
            preview:
                "Reminder: The 90-day performance review for Anita Bath is due by the end of Friday. Please complete...",
            content:
                "Reminder: The 90-day performance review for Anita Bath is due by the end of Friday. Please complete the review in the HR portal.",
            timeAgo: "3 days ago",
            highPriority: false,
            type: "Incoming",
        },
    ],
    "ceo@gmail.com": [
        {
            id: 4,
            title: "FWD: Q4 Budget Submission",
            preview:
                "John Doe has submitted the Q4 budget for his team. Please review and provide approval...",
            content:
                "John Doe has submitted the Q4 budget for his team. Please review and provide approval.\n\nAttached: Q4_Budget_Apex.xlsx",
            timeAgo: "1 day ago",
            highPriority: true,
            type: "Incoming",
        },
        {
            id: 5,
            title: "Board Meeting Prep - Q3 Slides",
            preview:
                "Drafting the presentation for the quarterly board meeting. Need final sales numbers...",
            content:
                "Drafting the presentation for the quarterly board meeting. Need final sales numbers and user acquisition metrics by Tuesday.",
            timeAgo: "2 days ago",
            highPriority: false,
            type: "Draft",
        },
        {
            id: 6,
            title: "Action Required: Legal Compliance Training",
            preview:
                "This is a formal request from HR to complete your mandatory executive compliance training...",
            content:
                "This is a formal request from HR to complete your mandatory executive compliance training for 2025. The deadline is November 15th.",
            timeAgo: "4 days ago",
            highPriority: false,
            type: "Incoming",
        },
    ],
    "employee1@gmail.com": [
        {
            id: 7,
            title: "Vacation Request: Nov 10-14",
            preview:
                "Submitting an annual leave request for 5 days in November. I will coordinate with the team...",
            content:
                "Submitting an annual leave request for 5 days in November (10th-14th).\n\nI will coordinate with the team to ensure all my duties are covered during my absence. Thanks!",
            timeAgo: "3 hours ago",
            highPriority: false,
            type: "Outgoing",
        },
        {
            id: 8,
            title: "RE: Your JIRA Ticket #TECH-120",
            preview:
                "Your build issue is resolved. The staging environment has been updated, and QA is now unblocked...",
            content:
                "Your build issue is resolved. The staging environment has been updated, and QA is now unblocked. This was caused by a missing dependency in the lock file.",
            timeAgo: "1 day ago",
            highPriority: false,
            type: "Incoming",
        },
        {
            id: 9,
            title: "Question about pension contributions",
            preview:
                "Hi HR, I had a question about the company's pension contribution policy. I couldn't find...",
            content:
                "Hi HR,\n\nI had a question about the company's pension contribution policy. I couldn't find the details on the intranet. Can you let me know if the company offers a favourable percentage above the legal minimum?",
            timeAgo: "5 days ago",
            highPriority: false,
            type: "Outgoing",
        },
    ],
    "manager2@gmail.com": [
        {
            id: 10,
            title: "Staging server is down",
            preview:
                "Hi Sarah, the staging-db-02 seems to be unresponsive. The whole QA team is blocked...",
            content:
                "Hi Sarah,\n\nThe staging database 'staging-db-02' seems to be unresponsive. The whole QA team is blocked. Can you please investigate? All pings are failing.",
            timeAgo: "45 minutes ago",
            highPriority: true,
            type: "Incoming",
        },
        {
            id: 11,
            title: "New Software License Request: 'Code-Analyzer' Pro",
            preview:
                "Requesting 5 Pro licenses for 'Code-Analyzer' for the senior dev team. This will help us...",
            content:
                "Requesting 5 Pro licenses for 'Code-Analyzer' for the senior dev team.\n\nThis will help us enforce new logging standards and reduce tech debt.\n\nCost: £89/user/year.\n\nSubmitted to IT for processing.",
            timeAgo: "2 days ago",
            highPriority: false,
            type: "Outgoing",
        },
        {
            id: 12,
            title: "Draft: Q1 2026 Tech Roadmap",
            preview:
                "Initial draft of the 2026 tech roadmap. Key initiatives: 1. Python 2.7 deprecation...",
            content:
                "Initial draft of the 2026 tech roadmap.\n\nKey initiatives:\n1. Python 2.7 deprecation (complete)\n2. Microservice migration (Phase 1)\n3. New CI/CD pipeline implementation",
            timeAgo: "6 days ago",
            highPriority: false,
            type: "Draft",
        },
    ],
    "employee2@gmail.com": [
        {
            id: 13,
            title: "My Macbook Pro is running slow",
            preview:
                "Hi, my MacBook Pro has been extremely slow all week. The fan is always on, even when...",
            content:
                "Hi,\n\nMy MacBook Pro has been extremely slow all week. The fan is always on, even when I just have a few browser tabs open. I've tried restarting, but it's not helping.\n\nCan I get IT to take a look or request a new one?",
            timeAgo: "1 day ago",
            highPriority: false,
            type: "Outgoing",
        },
        {
            id: 14,
            title: "RE: Halloween Costume Contest",
            preview:
                "Congratulations on winning 1st Place! Please stop by the HR desk to claim your prize...",
            content:
                "Congratulations on winning 1st Place for your 'Server Rack on Fire' costume! Please stop by the HR desk to claim your prize (a £100 high street card).",
            timeAgo: "Just now",
            highPriority: false,
            type: "Incoming",
        },
        {
            id: 15,
            title: "WFH Request - Nov 5th",
            preview:
                "Submitting a request to work from home next Wednesday (Nov 5th) for a dentist appointment...",
            content:
                "Hello, I would like to request to work from home next Wednesday (Nov 5th) for a dentist appointment in the morning. I will be online by 11 AM.",
            timeAgo: "4 days ago",
            highPriority: false,
            type: "Outgoing",
        },
    ],
    "employee3@gmail.com": [
        {
            id: 16,
            title: "Benefits update - new dependent",
            preview:
                "Hi HR, I would like to add my newborn to my private health insurance plan. What documentation...",
            content:
                "Hi HR,\n\nI would like to add my newborn to my private health insurance plan. What documentation do I need to provide? This is a qualifying life event.\n\nThanks,\nAnita",
            timeAgo: "3 days ago",
            highPriority: true,
            type: "Outgoing",
        },
        {
            id: 17,
            title: "Cannot access 'Project-Apex' repo",
            preview:
                "Hi Sarah, I'm trying to pull the latest changes for 'Project-Apex' but I'm getting a 403...",
            content:
                "Hi Sarah,\n\nI'm trying to pull the latest changes for 'Project-Apex' but I'm getting a 403 forbidden error. I think I need to be added to the repo's permissions list.",
            timeAgo: "2 days ago",
            highPriority: false,
            type: "Outgoing",
        },
        {
            id: 18,
            title: "Welcome Back!",
            preview:
                "Hi Anita, welcome back! We've set up a few short meetings to get you back up to speed...",
            content:
                "Hi Anita, welcome back!\n\nWe've set up a few short meetings to get you back up to speed on the project. Let me know when you're settled in.",
            timeAgo: "3 days ago",
            highPriority: false,
            type: "Incoming",
        },
    ],
    "employee4@gmail.com": [
        {
            id: 19,
            title: "Staging server is down",
            preview:
                "Hi Sarah, the staging-db-02 seems to be unresponsive. The whole QA team is blocked...",
            content:
                "Hi Sarah,\n\nThe staging database 'staging-db-02' seems to be unresponsive. The whole QA team is blocked. Can you please investigate? All pings are failing.",
            timeAgo: "46 minutes ago",
            highPriority: true,
            type: "Outgoing",
        },
        {
            id: 20,
            title: "RE: Your M2 Mac setup",
            preview:
                "Your new M2 MacBook Pro is ready for pickup. We've installed the standard dev toolkit...",
            content:
                "Your new M2 MacBook Pro is ready for pickup. We've installed the standard dev toolkit, Docker, and VPN client. Please see IT on the 4th floor to collect it.",
            timeAgo: "1 day ago",
            highPriority: false,
            type: "Incoming",
        },
        {
            id: 21,
            title: "New Hire Onboarding Documents",
            preview:
                "Hi Phil, welcome to the team! This is a reminder to complete your I-9 and benefits enrollment...",
            content:
                "Hi Phil, welcome to the team!\n\nThis is a reminder to complete your I-9 verification and benefits enrollment by the end of Friday. Please see Karen in HR.",
            timeAgo: "1 month ago",
            highPriority: true,
            type: "Incoming",
        },
    ],
    "hr1@gmail.com": [
        {
            id: 22,
            title: "Question about pension contributions",
            preview:
                "Hi HR, I had a question about the company's pension contribution policy. I couldn't find...",
            content:
                "Hi HR,\n\nI had a question about the company's pension contribution policy. I couldn't find the details on the intranet. Can you let me know if the company offers a favourable percentage above the legal minimum?",
            timeAgo: "5 days ago",
            highPriority: false,
            type: "Incoming",
        },
        {
            id: 23,
            title: "Action Required: Performance Review for Gabe Itch",
            preview:
                "Hi John, this is a reminder that Gabe Itch's 1-year performance review is due...",
            content:
                "Hi John,\n\nThis is a reminder that Gabe Itch's 1-year performance review is due next week. Please schedule the review and submit the final paperwork by Nov 8th.",
            timeAgo: "2 days ago",
            highPriority: false,
            type: "Outgoing",
        },
        {
            id: 24,
            title: "Benefits update - new dependent",
            preview:
                "Hi HR, I would like to add my newborn to my private health insurance plan. What documentation...",
            content:
                "Hi HR,\n\nI would like to add my newborn to my private health insurance plan. What documentation do I need to provide? This is a qualifying life event.\n\nThanks,\nAnita",
            timeAgo: "3 days ago",
            highPriority: true,
            type: "Incoming",
        },
        {
            id: 25,
            title: "Draft: Updated 2026 annual leave Policy",
            preview:
                "Drafting the new 2026 annual leave policy. Key changes: Capped rollover at 5 days. Added...",
            content:
                "Drafting the new 2026 annual leave policy.\n\nKey changes:\n- Capped rollover at 5 days (down from 10).\n- Added 2 'wellness days' for all employees.\n- New 2-week advance notice requirement for requests.\n\nNeed to send to CEO for approval.",
            timeAgo: "1 day ago",
            highPriority: false,
            type: "Draft",
        },
    ],
};

export default requests;
