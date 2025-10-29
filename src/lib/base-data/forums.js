export const forumPosts = [
    {
        id: 1,
        title: "How can I access API keys?",
        flair: "technical",
        preview:
            "API Keys are for all clients accessible on the staff intranet MakeIToday under the CTO function. Only certain staff are currently...",
        content:
            "API Keys are for all clients accessible on the staff intranet MakeIToday under the CTO function. Only certain staff are currently authorized to view and use these keys.\n\nIf you require access for a new project, please follow these steps:\n1. Submit a request ticket through the IT portal.\n2. Specify the project name and the exact API you need to access.\n3. Your manager must approve the request.\n\nREMINDER: Do not share API keys over email or in public repositories. They must be stored in environment variables.",
        timeAgo: "3 weeks ago",
        tags: ["api", "help"],
        upvotes: 15,
        downvotes: 0,
        comments: [
            {
                id: 101,
                author: "employee1@gmail.com",
                text: "This is super helpful, thanks!",
                timeAgo: "2 weeks ago",
            },
            {
                id: 102,
                author: "employee2@gmail.com",
                text: "Where can I find the IT portal link?",
                timeAgo: "2 weeks ago",
            },
        ],
        author: "manager1@gmail.com",
        directedTo: "employee1@gmail.com",
    },
    {
        id: 2,
        title: "How can I make a referral for a job posting?",
        flair: "non-technical",
        preview:
            "Here at Make-It-All, we value the insights that our staff members have on the job market. For this reason, we have an attractive...",
        content:
            "Here at Make-It-All, we value the insights that our staff members have on the job market. For this reason, we have an attractive referral program.\n\nHow to make a referral:\n1. Find the job posting on our internal careers page.\n2. Send an email to hr@make-it-all.com with the subject line 'Job Referral: [Job Title] - [Candidate Name]'.\n3. Attach the candidate's resume and a brief note on why you are recommending them.\n\nIf your referral is hired, you are eligible for a $1,000 bonus after their 3-month probation period!",
        timeAgo: "2 weeks ago",
        tags: ["hr", "referral", "recruitment", "selection"],
        upvotes: 10,
        downvotes: 1,
        comments: [
            {
                id: 201,
                author: "hr1@gmail.com",
                text: "Great program!",
                timeAgo: "1 week ago",
            },
        ],
        author: "manager1@gmail.com",
        directedTo: null,
    },
    {
        id: 3,
        title: "Weekly Guest WiFi Code - Week 45",
        flair: "technical",
        preview:
            "For security reasons, we have a separate WiFi code for visitors. This code is updated weekly, ensuring that only genuine...",
        content:
            "For security reasons, we have a separate WiFi code for visitors. This code is updated weekly, ensuring that only genuine visitors have access to our guest network.\n\nThis network is for guest use only and is firewalled from our internal systems.\n\nGuest WiFi Network: Make-It-All_Guest\nPassword for Week 45: visitorWk45!nda",
        timeAgo: "2 hours ago",
        tags: ["wifi", "tech", "visitors"],
        upvotes: 10,
        downvotes: 0,
        comments: [],
        author: "employee1@gmail.com",
        directedTo: null,
    },
];