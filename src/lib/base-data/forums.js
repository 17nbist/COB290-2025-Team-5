export const forumPosts = [
  {
        id: 1,
        title: "Dress Code Policy Reminder",
        flair: "non-technical",
        preview:
            "Good morning everyone, Just a friendly reminder about our company dress code. As the weather gets warmer, please remember that...",
        content:
            "Good morning everyone,\n\nJust a friendly reminder about our company dress code, which is 'Smart Casual'.\n\nAs the weather gets warmer, please remember that items like flip-flops, shorts, and tank tops are not considered appropriate for the office.\n\nWe appreciate your co-operation in maintaining a professional environment.\n\n- Karen",
        timeAgo: "3 months ago",
        tags: ["hr", "policy", "dress-code"],
        upvotes: 5,
        downvotes: 4,
        comments: [
            {
                id: 238,
                author: "employee2@gmail.com",
                text: "Can we get a more concrete definition of 'Smart Casual'?",
                timeAgo: "3 months ago",
            },
            {
                id: 239,
                author: "hr1@gmail.com",
                text: "Hi @Ben Dover, a good rule of thumb is 'no " +
                    "jeans with holes, no t-shirts with large graphics, and no " +
                    "open-toed shoes'. The full policy is on the intranet.",
                timeAgo: "3 months ago",
            },
        ],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 2,
        title: "Welcome our new Senior Developer, Phil McCracken!",
        flair: "non-technical",
        preview:
            "Please join me in welcoming the newest member of the tech team, Phil McCracken! Phil joins us with over 10 years of experience...",
        content:
            "Team,\n\nPlease join me in welcoming the newest member of the tech team, **Phil McCracken**!\n\nPhil (employee4@gmail.com) joins us with over 10 years of experience in full-stack development and will be working on the 'Project Apex' team.\n\nHis desk is on the 4th floor. Please make him feel welcome in the Make-It-All way!",
        timeAgo: "2 months ago",
        tags: ["new-joiner", "welcome", "hr", "dev-team"],
        upvotes: 35,
        downvotes: 0,
        comments: [
            {
                id: 218,
                author: "employee4@gmail.com",
                text: "Thanks for the warm welcome everyone! Happy to be here.",
                timeAgo: "2 months ago",
            },
            {
                id: 219,
                author: "employee1@gmail.com",
                text: "Welcome Phil!",
                timeAgo: "2 months ago",
            },
        ],
        author: "manager2@gmail.com",
        directedTo: "employee4@gmail.com",
    },
    {
        id: 3,
        title: "Security Alert: Phishing Emails Detected",
        flair: "technical",
        preview:
            "Several employees have reported receiving a phishing email disguised as an 'Urgent Password Reset' notification. DO NOT...",
        content:
            "Dear all, \n\nSeveral employees have reported receiving a phishing email disguised as an 'Urgent Password Reset' notification.\n\n**DO NOT CLICK ANY LINKS IN THIS EMAIL.**\n\nIt appears to come from 'IT-Support' but is an external, malicious address. Our IT department will *never* ask for your password over email.\n\nIf you receive this email, please use the 'Report Phishing' button in Outlook immediately and then delete it.\n\nIf you have any queries about this, please email IT. Stay vigilant!",
        timeAgo: "1 month ago",
        tags: ["security", "phishing", "it", "alert"],
        upvotes: 18,
        downvotes: 0,
        comments: [
            {
                id: 213,
                author: "employee1@gmail.com",
                text: "I got this one, reported it!",
                timeAgo: "1 month ago",
            },
        ],
        author: "manager1@gmail.com",
        directedTo: null,
    },
    {
        id: 4,
        title: "How can I access API keys?",
        flair: "technical",
        preview:
            "API Keys are for all clients accessible on the staff intranet MakeIToday under the CTO function. Only certain staff are currently...",
        content:
            "API Keys are for all clients accessible on the staff intranet MakeIToday under the CTO function. Only certain staff are currently authorised to view and use these keys.\n\nIf you require access for a new project, please follow these steps:\n1. Submit a request ticket through the IT portal on MakeIToday.\n2. Specify the project name and the exact API you need to access.\n3. Your manager must approve the request.\n\nREMINDER: Do not share API keys over email or in public repositories. They must be stored in environment variables. Any breaches may mean your employment is terminated.",
        timeAgo: "3 weeks ago",
        tags: ["api", "help", "keys"],
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
            {
                id: 103,
                author: "manager2@gmail.com",
                text: "You can find it on MakeIToday (the intranet).",
                timeAgo: "2 weeks ago",
            },
        ],
        author: "manager1@gmail.com",
        directedTo: "employee1@gmail.com",
    },
    {
        id: 5,
        title: "How can I make a referral for a job posting?",
        flair: "non-technical",
        preview:
            "Here at Make-It-All, we value the insights that our staff members have on the job market. For this reason, we have an attractive...",
        content:
            "Here at Make-It-All, we value the insights that our staff members have on the job market. For this reason, we have an attractive referral programme.\n\nHow to make a referral:\n1. Find the job posting on our internal careers page, accessible from MakeIToday.\n2. Send an email to hr@make-it-all.com with the subject line 'Job Referral: [Job Title] - [Candidate Name]'.\n3. Attach the candidate's CV and a brief note on why you are recommending them.\n\nIf your referral is hired, you are eligible for a £1,000 (tax-free) bonus after their 3-month probation period! Everyone wins!",
        timeAgo: "2 weeks ago",
        tags: ["hr", "referral", "recruitment", "selection"],
        upvotes: 10,
        downvotes: 1,
        comments: [
            {
                id: 201,
                author: "hr1@gmail.com",
                text: "Great programme!",
                timeAgo: "1 week ago",
            },
        ],
        author: "manager1@gmail.com",
        directedTo: null,
    },
    {
        id: 6,
        title: "Python 2.7 Deprecation Plan",
        flair: "technical",
        preview:
            "Dear Development team, As you all know, Python 2.7 has been out of support for a while. We still have several legacy services running on it. I'm putting...",
        content:
            "Dear Development team, \n\nAs you all know, Python 2.7 has been out of support for a while. We still have several legacy services (looking at you, 'Legacy-Reporting-Tool') running on it.\n\nI'm putting together a formal plan to migrate these services to Python 3.10+ by the end of Q1 2026.\n\nI've created a tracking ticket on JIRA (TECH-101) and will be assigning tasks to relevant team members. Please add any dependencies or services I might have missed to the JIRA ticket.",
        timeAgo: "2 weeks ago",
        tags: ["python", "deprecation", "dev", "legacy", "planning"],
        upvotes: 10,
        downvotes: 0,
        comments: [
            {
                id: 237,
                author: "employee4@gmail.com",
                text: "This is long overdue. Glad we're finally tackling it.",
                timeAgo: "2 weeks ago",
            },
        ],
        author: "manager2@gmail.com",
        directedTo: null,
    },
    {
        id: 7,
        title: "Sign up for Volunteer day!",
        flair: "non-technical",
        preview:
            "Hi team, As announced by Mike, we are having our annual company-wide volunteer day! This year, we'll be helping at the 'Town Food Bank'...",
        content:
            "Hi team,\n\nAs announced by Mike, we are having our annual company-wide volunteer day on **Friday, November 14th**.\n\nThis year, we'll be helping at the 'Town Food Bank' to sort and pack donations.\n\nThis is a paid volunteer day (you'll get your regular salary). Please sign up on the e-sheet below so we can give the food bank a headcount.\n\nSign-up link: [link-to-volunteer-sheet]",
        timeAgo: "12 days ago",
        tags: ["hr", "volunteer", "event", "social-impact", "giving"],
        upvotes: 28,
        downvotes: 0,
        comments: [],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 8,
        title: "How to request a new software licence?",
        flair: "technical",
        preview:
            "My team needs a licence for 'Sketch' for a new design project. What's the correct procedure for this? Do I just file an...",
        content:
            "My team needs a licence for 'Sketch' for a new design project. What's the correct procedure for this?\n\nDo I just file an IT ticket, or does it need manager approval first?",
        timeAgo: "10 days ago",
        tags: ["help", "software", "licence", "it"],
        upvotes: 4,
        downvotes: 0,
        comments: [
            {
                id: 230,
                author: "manager1@gmail.com",
                text: "Please submit a 'Software Request' ticket via the IT portal. It will automatically be routed to your manager (me, in this case) for approval before IT purchases it.",
                timeAgo: "10 days ago",
            },
            {
                id: 231,
                author: "employee2@gmail.com",
                text: "Perfect, thank you John!",
                timeAgo: "10 days ago",
            },
        ],
        author: "employee2@gmail.com",
        directedTo: null,
    },
    {
        id: 9,
        title: "Gym Membership Corporate Discount Update",
        flair: "non-technical",
        preview:
            "Good news! We have successfully renewed our corporate partnership with 'Town Fitness'. All employees are eligible for a 25% discount...",
        content:
            "Good news!\n\nWe have successfully renewed our corporate partnership with 'Town Fitness'. All employees are eligible for a 25% discount on monthly memberships.\n\nAdditionally, we have added 'YogaWorks' to our programme, with a 15% discount.\n\nFind details and sign-up links on the intranet (MakeIToday): HR > Benefits > Wellness.",
        timeAgo: "9 days ago",
        tags: ["hr", "benefits", "wellness", "gym"],
        upvotes: 23,
        downvotes: 0,
        comments: [
            {
                id: 261,
                author: "employee3@gmail.com",
                text: "Awesome! I was hoping for a yoga discount.",
                timeAgo: "8 days ago",
            },
        ],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 10,
        title: "Company Book Club - Next Read?",
        flair: "non-technical",
        preview:
            "Hi book lovers! We just finished 'The Phoenix Project' and it's time to pick our next read. Any suggestions?",
        content:
            "Hi book lovers!\n\nWe just finished 'The Phoenix Project' and it's time to pick our next read.\n\nI've set up a poll with a few suggestions. Please vote by the end of Friday!\n\n- 'Atomic Habits' by James Clear\n- 'Project Hail Mary' by Andy Weir\n- 'Thinking, Fast and Slow' by Daniel Kahneman\n\nLink to poll: [link-to-book-poll]",
        timeAgo: "9 days ago",
        tags: ["social", "book-club", "general"],
        upvotes: 6,
        downvotes: 0,
        comments: [
            {
                id: 228,
                author: "employee1@gmail.com",
                text: "Voted for Project Hail Mary!",
                timeAgo: "8 days ago",
            },
        ],
        author: "employee3@gmail.com",
        directedTo: null,
    },
    {
        id: 11,
        title: "Suggestion Box: Better Coffee Options",
        flair: "non-technical",
        preview:
            "I know we love our coffee, but the current 'Generic-Brand' in the breakroom is... not great. Can we explore some...",
        content:
            "I know we love our coffee, but the current 'Generic-Brand' in the breakroom is... not great.\n\nCan we explore some other options? Maybe a local roaster? Or even just a step up in quality?\n\nI'd be willing to pay a little into a 'coffee fund' if that's what it takes!",
        timeAgo: "8 days ago",
        tags: ["suggestion", "kitchen", "office", "coffee"],
        upvotes: 21,
        downvotes: 0,
        comments: [
            {
                id: 235,
                author: "employee3@gmail.com",
                text: "100% agree. The current stuff is terrible.",
                timeAgo: "8 days ago",
            },
            {
                id: 236,
                author: "hr1@gmail.com",
                text: "Thanks for the feedback, Gabe. Let me look at the budget with facilities and see what we can do.",
                timeAgo: "7 days ago",
            },
            {
                id: 237,
                author: "employee4@gmail.com",
                text: "Don't forget the tea and hot chocolate drinkers!",
                timeAgo: "6 days ago",
            }
        ],
        author: "employee1@gmail.com",
        directedTo: null,
    },
    {
        id: 12,
        title: "Exciting News: Q3 Results and Future Direction",
        flair: "non-technical",
        preview:
            "Team, I am thrilled to announce that Make-It-All has exceeded its Q3 targets! This is a testament to all your hard work...",
        content:
            "Team,\n\nI am thrilled to announce that Make-It-All has exceeded its Q3 targets by 15%!\n\nThis is a testament to all your hard work, dedication, and innovative spirit. The success of the 'Project Apex' launch was a significant contributor, and I want to personally thank the development and marketing teams for their incredible efforts.\n\nMoving into Q4, we will be focusing on expanding into the European market. More details will be shared at the all-hands meeting next Friday.\n\nKeep up the fantastic work!\n\nBest,\nMike",
        timeAgo: "1 week ago",
        tags: ["ceo", "announcement", "results", "finance"],
        upvotes: 45,
        downvotes: 0,
        comments: [
            {
                id: 206,
                author: "manager1@gmail.com",
                text: "Great news, Mike!",
                timeAgo: "6 days ago",
            },
            {
                id: 207,
                author: "employee1@gmail.com",
                text: "Awesome! Does this mean bonuses?",
                timeAgo: "6 days ago",
            },
            {
                id: 208,
                author: "hr1@gmail.com",
                text: "Performance bonus details will be discussed by managers in the coming weeks.",
                timeAgo: "5 days ago",
            },
        ],
        author: "ceo@gmail.com",
        directedTo: null,
    },
    {
        id: 13,
        title: "New Software Rollout: 'Momentum' Training Manager",
        flair: "technical",
        preview:
            "Starting next Monday, all teams will be migrating from our old training tracker to 'Momentum'. A reminder that booked in training...",
        content:
            "Hi all,\n\nStarting next Monday, all teams will be migrating from our old project tracker to 'Momentum'.\n\n**A reminder that booked in training sessions are mandatory** Please sign up for a slot that works for your team:\n- Session 1: Monday, 10:00 AM\n- Session 2: Monday, 2:00 PM\n- Session 3: Tuesday, 10:00 AM\n\n'Momentum' will help us better track deliverables and manage cross-team dependencies. All old projects will be archived by the end of Friday.",
        timeAgo: "1 week ago",
        tags: ["software", "rollout", "training", "OD"],
        upvotes: 19,
        downvotes: 1,
        comments: [
            {
                id: 216,
                author: "employee1@gmail.com",
                text: "Is there a link to the sign-up sheet?",
                timeAgo: "6 days ago",
            },
            {
                id: 217,
                author: "manager1@gmail.com",
                text: "Good question! Here it is: [link-to-signup-sheet]",
                timeAgo: "6 days ago",
            },
        ],
        author: "manager1@gmail.com",
        directedTo: null,
    },
    {
        id: 14,
        title: "Quarterly Full Team Meeting Deck",
        flair: "non-technical",
        preview:
            "For those who missed yesterday's full team meeting, or for anyone who wants to review the slides, I've uploaded the slides...",
        content:
            "For those who missed yesterday's full team meeting, or for anyone who wants to review the slides, I've uploaded the slides to the intranet.\n\nYou can find it here: [link-to-all-hands-deck-Q3]\n\nIt covers Q3 performance, Q4 goals, and the new HR initiatives.",
        timeAgo: "1 week ago",
        tags: ["full-team", "meeting", "deck", "finance"],
        upvotes: 14,
        downvotes: 0,
        comments: [],
        author: "manager1@gmail.com",
        directedTo: null,
    },
    {
        id: 15,
        title: "Q&A with the CEO - Submit your questions",
        flair: "non-technical",
        preview:
            "Mike Oxlong will be hosting a company-wide 'Ask Me Anything' session next Friday. We are gathering questions in advance...",
        content:
            "Mike Oxlong (ceo@gmail.com) will be hosting a company-wide 'Ask Me Anything' session next Friday.\n\nWe are gathering questions in advance to help structure the meeting.\n\nPlease submit your questions (anonymously if you prefer) via this form: [link-to-google-form]\n\nWe will try to get to as many as possible.",
        timeAgo: "1 week ago",
        tags: ["ceo", "full-team", "meeting", "q-a"],
        upvotes: 27,
        downvotes: 0,
        comments: [
            {
                id: 259,
                author: "ceo@gmail.com",
                text: "Looking forward to it!",
                timeAgo: "6 days ago",
            },
            {
                id: 260,
                author: "employee2@gmail.com",
                text: "Submitted a few!",
                timeAgo: "5 days ago",
            },
        ],
        author: "hr1@gmail.com",
        directedTo: "ceo@gmail.com",
    },
    {
        id: 16,
        title: "Styling guide for email signatures",
        flair: "technical",
        preview:
            "Hi team, we've noticed a lot of variation in email signatures. To maintain brand consistency, please use the official...",
        content:
            "Hi team,\n\nWe've noticed a lot of variation in email signatures. To maintain brand consistency, please use the official generator here: [link-to-signature-generator]\n\nThis will create the correct HTML with your name, title, and the company logo.\n\nPlease update your signature in our email client by the end of Friday.",
        timeAgo: "1 week ago",
        tags: ["hr", "it", "branding", "policy", "email"],
        upvotes: 10,
        downvotes: 0,
        comments: [],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 17,
        title: "Bank Holiday Schedule",
        flair: "non-technical",
        preview:
            "A reminder for all staff members: The office will be closed next Thursday and Friday (Nov 27th & 28th) for...",
        content:
            "A reminder for all staff members:\n\nThe office will be closed next **Thursday and Friday (Nov 27th & 28th)** for the autumn holiday.\n\nWe hope you all have a wonderful and restful break with your loved ones.\n\n- Management",
        timeAgo: "1 week ago",
        tags: ["hr", "holiday", "announcement", "annual leave"],
        upvotes: 38,
        downvotes: 0,
        comments: [],
        author: "ceo@gmail.com",
        directedTo: null,
    },
    {
        id: 18,
        title: "Who is the contact for office supplies?",
        flair: "non-technical",
        preview:
            "I'm looking for the person in charge of ordering office supplies. We are out of printer paper on the 4th floor...",
        content:
            "Hi all, \n\nI'm looking for the person in charge of ordering office supplies. We are out of printer paper and whiteboard markers on the 4th floor.\n\nWho should I contact about this?",
        timeAgo: "6 days ago",
        tags: ["help", "office", "supplies"],
        upvotes: 2,
        downvotes: 0,
        comments: [
            {
                id: 214,
                author: "manager2@gmail.com",
                text: "That would be me. Please send your requests to me directly by the end of Wednesday for the weekly order.",
                timeAgo: "6 days ago",
            },
            {
                id: 215,
                author: "employee3@gmail.com",
                text: "Thanks Sarah!",
                timeAgo: "5 days ago",
            },
        ],
        author: "employee3@gmail.com",
        directedTo: "manager2@gmail.com",
    },
    {
        id: 19,
        title: "Best way to handle async data fetches in our React app?",
        flair: "technical",
        preview:
            "I'm refactoring a component that makes 3-4 dependent API calls. It's using a messy chain of .then() callbacks and component state...",
        content:
            "I'm refactoring a component that makes 3-4 dependent API calls. It's using a messy chain of .then() callbacks and component state.\n\nWhat's our recommended pattern for this? I saw we're using 'React Query' in some places. Should I use that? Or just async/await?",
        timeAgo: "6 days ago",
        tags: ["react", "frontend", "best-practices", "help", "api"],
        upvotes: 9,
        downvotes: 0,
        comments: [
            {
                id: 253,
                author: "manager2@gmail.com",
                text: "Please use React Query. It handles caching, refetching, and loading/error states for us. Much cleaner. See the 'Project Apex' codebase for examples.",
                timeAgo: "6 days ago",
            },
            {
                id: 254,
                author: "employee4@gmail.com",
                text: "Will do. Thanks, Sarah.",
                timeAgo: "6 days ago",
            },
        ],
        author: "employee4@gmail.com",
        directedTo: null,
    },
    {
        id: 20,
        title: "New Logging Standard (JSON format)",
        flair: "technical",
        preview:
            "To improve our monitoring and observability, all services will be required to output logs in a structured JSON format...",
        content:
            "Dev Team,\n\nTo improve our monitoring and observability (and make our lives easier when debugging), all services will be required to output logs in a structured JSON format going forward.\n\nThis will allow us to properly parse and index logs in our logging tool.\n\nPlease see the new logging standard guide on Confluence: [link-to-logging-guide]\n\nAll new services must comply. We will create tickets to update existing services over the next quarter.",
        timeAgo: "6 days ago",
        tags: ["devops", "logging", "best-practices", "monitoring", "tech"],
        upvotes: 16,
        downvotes: 0,
        comments: [
            {
                id: 280,
                author: "employee4@gmail.com",
                text: "Thank goodness. Grepping string logs was a nightmare.",
                timeAgo: "5 days ago",
            },
            {
                id: 281,
                author: "manager1@gmail.com",
                text: "This is a great move. We'll start refactoring our main app in the next sprint.",
                timeAgo: "5 days ago",
            },
        ],
        author: "manager2@gmail.com",
        directedTo: null,
    },
    {
        id: 21,
        title: "Frontend Best Practises: State Management",
        flair: "technical",
        preview:
            "Hey dev team, I'm starting a new feature and I'm wondering what our current best practise is for state management. Are we using...",
        content:
            "Hey dev team,\n\nI'm starting a new feature and I'm wondering what our current best practise is for state management.\n\nAre we using context, Redux, Zustand, or just component state? The 'Project Apex' codebase seems to use a mix of context and Redux.\n\nLooking for guidance on what to use for new development.",
        timeAgo: "5 days ago",
        tags: ["frontend", "react", "state-management", "best-practises"],
        upvotes: 11,
        downvotes: 0,
        comments: [
            {
                id: 226,
                author: "manager1@gmail.com",
                text: "Great question. For new features, please default to Zustand for global state and React Query for server state. We are actively phasing out Redux.",
                timeAgo: "4 days ago",
            },
            {
                id: 227,
                author: "employee4@gmail.com",
                text: "Thanks, John! That simplifies things.",
                timeAgo: "4 days ago",
            },
        ],
        author: "employee4@gmail.com",
        directedTo: null,
    },
    {
        id: 22,
        title: "Fire Alarm Test Scheduled for Next Tuesday",
        flair: "non-technical",
        preview:
            "This is an advance notice that we will be conducting a mandatory, building-wide fire drill next Tuesday, October 28th...",
        content:
            "Hi everyone,\n\nThis is an advance notice that we will be conducting a mandatory, building-wide fire drill next **Tuesday, 28th October.**\n\nThe alarm will sound at approximately **10:30 AM**.\n\nPlease familiarise yourself with the evacuation routes posted near your desk and in the hallways. The assembly point is in the main car park (Section C).\n\nYour safety is our priority. Thank you for your co-operation.",
        timeAgo: "5 days ago",
        tags: ["safety", "fire-drill", "facilities", "hr"],
        upvotes: 17,
        downvotes: 0,
        comments: [
            {
                id: 229,
                author: "employee3@gmail.com",
                text: "Thanks for the heads-up!",
                timeAgo: "4 days ago",
            },
        ],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 23,
        title: "End-of-Year Code Cleanup Sprint",
        flair: "technical",
        preview:
            "Planning a one-week 'Code Cleanup' sprint for all dev teams, starting Dec 8th. The goal is to pay down tech debt...",
        content:
            "Hi all,\n\nI'm planning a one-week 'Code Cleanup' sprint for all dev teams, starting **Dec 8th** (after the code freeze).\n\nThe goal is to pay down tech debt: refactoring old code, removing dead code, updating dependencies, and improving documentation.\n\nManagers, please work with your teams to identify and ticket tasks for this sprint.",
        timeAgo: "5 days ago",
        tags: ["dev", "tech-debt", "planning", "sprint"],
        upvotes: 18,
        downvotes: 0,
        comments: [
            {
                id: 264,
                author: "employee4@gmail.com",
                text: "This is much needed. I have a long list already.",
                timeAgo: "4 days ago",
            },
            {
                id: 265,
                author: "manager1@gmail.com",
                text: "Great idea, Sarah. My team will be ready.",
                timeAgo: "4 days ago",
            },
        ],
        author: "manager2@gmail.com",
        directedTo: null,
    },
    {
        id: 24,
        title: "Reminder: New Git Branching Strategy",
        flair: "technical",
        preview:
            "This is a reminder for all development teams about the new Git branching strategy we discussed. All new features must be branched...",
        content:
            "This is a reminder for all development teams about the new Git branching strategy we discussed.\n\nEffective immediately:\n1. All new features must be branched from 'develop'.\n2. Branch names must follow the format 'feature/JIRA-TICKET-NUMBER'.\n3. Hotfixes must be branched from 'main' and named 'hotfix/ISSUE-NAME'.\n4. All pull requests require at least one approval from a senior dev or manager before merging.\n\nThis will help us streamline deployments and reduce merge conflicts. Please see the full guide on Confluence.",
        timeAgo: "4 days ago",
        tags: ["git", "dev", "best-practices", "technical"],
        upvotes: 12,
        downvotes: 0,
        comments: [
            {
                id: 209,
                author: "employee4@gmail.com",
                text: "Thanks for the clarification.",
                timeAgo: "3 days ago",
            },
        ],
        author: "manager2@gmail.com",
        directedTo: null,
    },
    {
        id: 25,
        title: "Car Park Update - Resurfacing Section B",
        flair: "non-technical",
        preview:
            "FYI: Section B of the car park (north side) will be closed for resurfacing from next Monday to Wednesday. Please plan...",
        content:
            "FYI: Section B of the car park (north side) will be closed for resurfacing from next Monday to Wednesday.\n\nPlease plan to park in Section A or C. Expect the car park to be fuller than usual.\n\nWe recommend car sharing or using public transport if possible on those days. Apologies for the inconvenience.",
        timeAgo: "4 days ago",
        tags: ["office", "parking", "facilities"],
        upvotes: 7,
        downvotes: 0,
        comments: [],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 26,
        title: "New CI/CD Pipeline for Microservice-Alpha",
        flair: "technical",
        preview:
            "FYI for the dev team, I've just finished setting up the new CI/CD pipeline (using Jenkins) for the 'Microservice-Alpha' project...",
        content:
            "FYI for the dev team,\n\nI've just finished setting up the new CI/CD pipeline (using Jenkins) for the 'Microservice-Alpha' project.\n\nAll pushes to 'develop' will now automatically build, test, and deploy to the alpha environment.\n\nPlease check the build status before merging any PRs. Let me know if you run into any issues.",
        timeAgo: "4 days ago",
        tags: ["devops", "ci-cd", "jenkins", "dev"],
        upvotes: 13,
        downvotes: 0,
        comments: [],
        author: "employee4@gmail.com",
        directedTo: null,
    },
    {
        id: 27,
        title: "Organising a team for the Corporate 5K Run",
        flair: "non-technical",
        preview:
            "Hey everyone, the annual 'Town Corporate 5K Challenge' is next month. I'm looking to put together a 'Make-It-All' team...",
        content:
            "Hey everyone,\n\nThe annual 'Town Corporate 5K Challenge' is next month. I'm looking to put together a 'Make-It-All' team (or multiple teams!).\n\nIt's a fun event for all fitness levels (you can walk!) and benefits a good cause.\n\nIf you're interested in joining, please add your name to this spreadsheet: [link-to-5k-signup]",
        timeAgo: "4 days ago",
        tags: ["social", "event", "wellness", "5k"],
        upvotes: 22,
        downvotes: 0,
        comments: [
            {
                id: 277,
                author: "employee2@gmail.com",
                text: "Signed up!",
                timeAgo: "3 days ago",
            },
            {
                id: 278,
                author: "employee3@gmail.com",
                text: "Me too! Let's do this.",
                timeAgo: "3 days ago",
            },
        ],
        author: "employee3@gmail.com",
        directedTo: null,
    },
    {
        id: 28,
        title: "Planned Server Maintenance - Sunday 10 PM",
        flair: "technical",
        preview:
            "IT will be performing scheduled maintenance on the main database server this Sunday. Expect intermittent downtime...",
        content:
            "Heads up, team.\n\nIT will be performing scheduled maintenance on the main database server (DB-01) this Sunday, from 10:00 PM to 11:00 PM.\n\nDuring this window, internal tools (including the intranet and the dev environment) may be unavailable.\n\nPlease save all your work before this time. We apologise for any inconvenience.",
        timeAgo: "3 days ago",
        tags: ["it", "maintenance", "downtime", "server"],
        upvotes: 8,
        downvotes: 0,
        comments: [],
        author: "manager2@gmail.com",
        directedTo: null,
    },
    {
        id: 29,
        title: "Updated Health Insurance Benefits Guide",
        flair: "non-technical",
        preview:
            "Hi all, open enrolment is next month. We've just received the updated 2026 benefits guide from our provider. Please review...",
        content:
            "Hi all,\n\nEnrolment is next month. We've just received the updated 2026 benefits guide from our provider.\n\nPlease review the changes, as there are slight modifications to the Private Healthcare plans and the services we offer via salary sacrifice.\n\nThe full guide is now available on the intranet (MakeIToday): HR > Benefits > 2026 Health Guide.\n\nWe will also host a Q&A session with our provider representative next Wednesday.",
        timeAgo: "3 days ago",
        tags: ["hr", "benefits", "health", "insurance", "open-enrolment"],
        upvotes: 13,
        downvotes: 0,
        comments: [],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 30,
        title: "Welcome Back, Anita!",
        flair: "non-technical",
        preview:
            "Please join me in giving a warm welcome back to Anita Bath (employee3@gmail.com), who is returning from maternity leave...",
        content:
            "Please join me in giving a warm welcome back to **Anita Bath** (employee3@gmail.com), who is returning from her maternity leave!\n\nWe are so excited to have you back on the team, Anita! We've missed you.",
        timeAgo: "3 days ago",
        tags: ["hr", "welcome-back", "social"],
        upvotes: 41,
        downvotes: 0,
        comments: [
            {
                id: 251,
                author: "employee3@gmail.com",
                text: "Thank you all! It's great to be back!",
                timeAgo: "3 days ago",
            },
            {
                id: 252,
                author: "manager1@gmail.com",
                text: "Welcome back, Anita!",
                timeAgo: "2 days ago",
            },
        ],
        author: "hr1@gmail.com",
        directedTo: "employee3@gmail.com",
    },
    {
        id: 31,
        title: "API Rate Limiting - Heads Up",
        flair: "technical",
        preview:
            "To improve stability, we will be implementing rate limiting on our public API (api.make-it-all.com) effective next Monday...",
        content:
            "To improve stability, we will be implementing rate limiting on our public API (api.make-it-all.com) effective next Monday.\n\nThe limit will be 100 requests/minute per API key.\n\nIf you are a client or internal team that requires a higher limit, please file an IT ticket with your use case so we can whitelist your key.",
        timeAgo: "3 days ago",
        tags: ["api", "dev", "announcement", "infrastructure"],
        upvotes: 11,
        downvotes: 0,
        comments: [
            {
                id: 262,
                author: "employee1@gmail.com",
                text: "Does this apply to internal tools as well?",
                timeAgo: "2 days ago",
            },
            {
                id: 263,
                author: "manager1@gmail.com",
                text: "@Gabe Itch - Yes, if they are using a public-facing key. Please check and file a ticket if needed.",
                timeAgo: "1 day ago",
            },
        ],
        author: "manager1@gmail.com",
        directedTo: null,
    },
    {
        id: 32,
        title: "Mandatory Anti-Harassment Training",
        flair: "non-technical",
        preview:
            "This is a reminder that all staff members must complete the mandatory online anti-harassment training by November 15th. This is...",
        content:
            "This is a reminder that all staff members must complete the mandatory online anti-harassment training by **November 15th**.\n\nThis is a legal requirement and is essential for maintaining a safe and respectful workplace.\n\nThe training takes approximately 45 minutes. You should have received a direct link via email from our compliance partner, 'ComplianceNow'.\n\nPlease complete this as soon as possible.",
        timeAgo: "3 days ago",
        tags: ["hr", "training", "compliance", "mandatory", "policy"],
        upvotes: 19,
        downvotes: 2,
        comments: [
            {
                id: 272,
                author: "employee2@gmail.com",
                text: "I haven't received a link yet.",
                timeAgo: "2 days ago",
            },
            {
                id: 273,
                author: "hr1@gmail.com",
                text: "@Ben Dover, I'll resend your link right now. Please check your spam folder as well.",
                timeAgo: "2 days ago",
            },
        ],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 33,
        title: "Annual Christmas party - Save the Date!",
        flair: "non-technical",
        preview:
            "Get ready to celebrate! The annual Make-It-All Christmas party is officially scheduled for Friday, December 13th...",
        content:
            "Get ready to celebrate!\n\nThe annual Make-It-All Christmas party is officially scheduled for **Friday, December 13th** at Hotel Function Suite.\n\nTheme: 'Winter Wonderland'\n\nFormal invitations with an RSVP link will be sent out next week. Partners are welcome!\n\nWe can't wait to celebrate another successful year with all of you.",
        timeAgo: "2 days ago",
        tags: ["event", "party", "hr", "social"],
        upvotes: 31,
        downvotes: 0,
        comments: [
            {
                id: 210,
                author: "employee3@gmail.com",
                text: "Can't wait!",
                timeAgo: "1 day ago",
            },
            {
                id: 211,
                author: "employee2@gmail.com",
                text: "Is there a plus-one?",
                timeAgo: "22 hours ago",
            },
            {
                id: 212,
                author: "hr1@gmail.com",
                text: "Yes, @Ben Dover, the invitations will confirm that partners (plus-ones) are welcome!",
                timeAgo: "18 hours ago",
            },
        ],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 34,
        title: "Congrats to Sarah Connor on 5-year anniversary!",
        flair: "non-technical",
        preview:
            "I'd like to extend a huge congratulations to our very own Sarah Connor (manager2@gmail.com) on her 5-year work anniversary...",
        content:
            "Team,\n\nI'd like to extend a huge congratulations to our very own **Sarah Connor** (manager2@gmail.com) on her 5-year work anniversary with Make-It-All!\n\nSarah has been an instrumental part of our management team, leading multiple high-impact projects and mentoring many of our top developers.\n\nThank you for your dedication and leadership, Sarah! We are lucky to have you.",
        timeAgo: "2 days ago",
        tags: ["anniversary", "ceo", "kudos", "milestone"],
        upvotes: 52,
        downvotes: 0,
        comments: [
            {
                id: 223,
                author: "manager2@gmail.com",
                text: "Thank you so much, Mike! It's been a fantastic 5 years.",
                timeAgo: "2 days ago",
            },
            {
                id: 224,
                author: "employee4@gmail.com",
                text: "Congrats Sarah! You're the best manager I've had.",
                timeAgo: "1 day ago",
            },
            {
                id: 225,
                author: "hr1@gmail.com",
                text: "Happy anniversary, Sarah!",
                timeAgo: "1 day ago",
            },
        ],
        author: "ceo@gmail.com",
        directedTo: "manager2@gmail.com",
    },
    {
        id: 35,
        title: "Code Freeze for Q4 Release - Dec 1st",
        flair: "technical",
        preview:
            "This is a formal announcement that we will have a full code freeze for the main production branch starting December 1st...",
        content:
            "Team,\n\nThis is a formal announcement that we will have a full code freeze for the main production branch ('main') starting **December 1st** in preparation for the Q4 release.\n\nOnly critical, P0 hotfixes will be permitted for merge after this date, and must be approved by me and @manager2@gmail.com.\n\nPlease schedule all feature merges and testing accordingly.",
        timeAgo: "2 days ago",
        tags: ["dev", "release", "code-freeze", "ceo", "announcement"],
        upvotes: 25,
        downvotes: 0,
        comments: [
            {
                id: 250,
                author: "manager1@gmail.com",
                text: "Understood. My team is on track to have all features merged by then.",
                timeAgo: "1 day ago",
            },
        ],
        author: "ceo@gmail.com",
        directedTo: null,
    },
    {
        id: 36,
        title: "Charity Bake Sale - Next Thursday",
        flair: "non-technical",
        preview:
            "Hi all! I'm organising a charity bake sale to support the Town Food Bank. It will be next Thursday in the 3rd floor breakroom...",
        content:
            "Hi all!\n\nI'm organising a charity bake sale to support the Town Food Bank. It will be next Thursday (Nov 6th) in the 3rd floor breakroom from 10 AM - 2 PM.\n\nAll proceeds will be matched by Make-It-All!\n\nPlease message me if you'd like to contribute by baking something. And don't forget to bring cash!",
        timeAgo: "2 days ago",
        tags: ["social", "charity", "event", "food"],
        upvotes: 29,
        downvotes: 0,
        comments: [
            {
                id: 255,
                author: "hr1@gmail.com",
                text: "This is wonderful, Anita! HR will definitely contribute.",
                timeAgo: "1 day ago",
            },
            {
                id: 256,
                author: "employee2@gmail.com",
                text: "I make some mean brownies. Count me in.",
                timeAgo: "22 hours ago",
            },
        ],
        author: "employee3@gmail.com",
        directedTo: null,
    },
    {
        id: 37,
        title: "New NPM Package Security Vulnerability",
        flair: "technical",
        preview:
            "A critical vulnerability was just announced in 'left-pad' v2.1. (Just kidding, it's in 'node-http-proxy')...",
        content:
            "Hi Dev Team,\n\nA critical vulnerability (CVE-2025-1234) was just announced in 'node-http-proxy', which we use in two of our key services.\n\nA patched version (v1.18.2) is available.\n\nI've created JIRA tickets (TECH-120, TECH-121) to update this dependency, test, and deploy ASAP. This is a high priority.",
        timeAgo: "2 days ago",
        tags: ["security", "npm", "vulnerability", "dev", "urgent"],
        upvotes: 14,
        downvotes: 0,
        comments: [
            {
                id: 276,
                author: "employee1@gmail.com",
                text: "On TECH-120. Starting the update now.",
                timeAgo: "1 day ago",
            },
        ],
        author: "manager1@gmail.com",
        directedTo: null,
    },
    {
        id: 38,
        title: "Lunch Order - Team 'Apex' Milestone",
        flair: "non-technical",
        preview:
            "To celebrate the 'Apex' team hitting their Q4 milestone early, I'm ordering lunch for the whole team next Wednesday...",
        content:
            "To celebrate the 'Project Apex' team hitting their Q4 milestone early, I'm ordering lunch for the whole team next Wednesday!\n\nTeam members (@employee1@gmail.com, @employee4@gmail.com, etc.), please put your order in this spreadsheet from 'The Good Sub Shop' menu.\n\nGreat work, everyone!",
        timeAgo: "2 days ago",
        tags: ["social", "food", "kudos", "milestone", "team-apex"],
        upvotes: 26,
        downvotes: 0,
        comments: [
            {
                id: 282,
                author: "employee1@gmail.com",
                text: "Awesome! Thanks, John!",
                timeAgo: "1 day ago",
            },
            {
                id: 283,
                author: "employee4@gmail.com",
                text: "Wooo! Sub time.",
                timeAgo: "1 day ago",
            },
        ],
        author: "manager1@gmail.com",
        directedTo: null,
    },
    {
        id: 39,
        title: "Updated Holiday Policy for 2026",
        flair: "non-technical",
        preview:
            "Hi team, HR has reviewed and updated the holiday request policy, effective January 1st. Please review the key changes...",
        content:
            "Hi team,\n\nHR has reviewed and updated the holiday request policy, effective January 1st.\n\nKey Changes:\n1. All holiday requests must be submitted at least 2 weeks in advance.\n2. Requests during peak holiday season (Dec 20 - Jan 2) must be submitted by November 1st.\n3. Rollover days are now capped at 5 days, down from 10.\n\nPlease find the full policy document on the intranet (MakeIToday) under HR > Policies.\n\n- Karen",
        timeAgo: "1 day ago",
        tags: ["hr", "policy", "holiday", "annual leave"],
        upvotes: 22,
        downvotes: 3,
        comments: [
            {
                id: 202,
                author: "employee4@gmail.com",
                text: "What about the 5-day cap? That's a big change.",
                timeAgo: "4 hours ago",
            },
            {
                id: 203,
                author: "hr1@gmail.com",
                text: "@Phil McCracken, yes this is a new change to encourage everyone to use their well-deserved time off within the year.",
                timeAgo: "2 hours ago",
            },
        ],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 40,
        title: "4th Floor Fridge Cleanout - Friday 4 PM",
        flair: "non-technical",
        preview:
            "This is your weekly reminder that the 4th-floor fridge will be cleaned out this Friday at 4:00 PM. Please remove...",
        content:
            "This is your weekly reminder that the 4th-floor fridge will be cleaned out this **Friday at 4:00 PM.**\n\nPlease remove any personal items you wish to keep by this time.\n\nAll remaining items, including containers, will be disposed of. Let's work together to keep our kitchen clean!",
        timeAgo: "1 day ago",
        tags: ["office", "kitchen", "facilities", "reminder"],
        upvotes: 9,
        downvotes: 1,
        comments: [
            {
                id: 222,
                author: "employee2@gmail.com",
                text: "Not again... someone always throws out my yoghurt before Friday.",
                timeAgo: "1 day ago",
            },
        ],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 41,
        title: "New Printer Installation - 3rd Floor",
        flair: "technical",
        preview:
            "Just a heads-up, IT will be replacing the old printer ('Printer-03A') on the 3rd floor tomorrow morning around 10 AM...",
        content:
            "Just a heads-up, IT will be replacing the old printer ('Printer-03A') on the 3rd floor tomorrow morning around 10 AM.\n\nThe new model is a 'Canon imageRUNNER ADVANCE'.\n\nYou will need to add the new printer to your device. Instructions will be taped to the printer once it's set up.\n\n- Sarah",
        timeAgo: "1 day ago",
        tags: ["it", "printer", "facilities", "hardware"],
        upvotes: 5,
        downvotes: 0,
        comments: [],
        author: "manager2@gmail.com",
        directedTo: null,
    },
    {
        id: 42,
        title: "UI/UX Design System v2.0 Launch",
        flair: "technical",
        preview:
            "Exciting news! The design and frontend teams have officially launched v2.0 of our internal design system, 'Make-It-UI'...",
        content:
            "Exciting news!\n\nThe design and frontend teams have officially launched v2.0 of our internal design system, 'Make-It-UI'.\n\nThis new version includes:\n- Full TypeScript support\n- Improved accessibility (WCAG 2.1 AA)\n- 5 new components (including a DatePicker!)\n\nAll new projects should use v2.0. We will develop a migration plan for existing apps.\n\nCheck out the Storybook docs here: [link-to-storybook]",
        timeAgo: "1 day ago",
        tags: ["design-system", "ui", "ux", "frontend", "announcement"],
        upvotes: 24,
        downvotes: 0,
        comments: [
            {
                id: 240,
                author: "employee1@gmail.com",
                text: "Finally! The DatePicker is here!",
                timeAgo: "22 hours ago",
            },
            {
                id: 241,
                author: "employee4@gmail.com",
                text: "This looks great. Congrats to the team.",
                timeAgo: "18 hours ago",
            },
        ],
        author: "manager1@gmail.com",
        directedTo: null,
    },
    {
        id: 43,
        title: "Catering for Lunch & Learn - Vote Now",
        flair: "non-technical",
        preview:
            "For next week's Lunch & Learn on 'Public Speaking', we're ordering catering. Please vote for your preference: Pizza, sandwiches, or...",
        content:
            "For next week's Lunch & Learn on 'Public Speaking', we're ordering catering.\n\nPlease vote for your preference by tomorrow so I can place the order.\n\n- Pizza (Assorted)\n- Sandwiches (Boxed Lunches)\n- Indian (Curry Buffet)\n\nVote here: [link-to-food-poll]",
        timeAgo: "1 day ago",
        tags: ["food", "lunch-and-learn", "social", "poll"],
        upvotes: 11,
        downvotes: 0,
        comments: [
            {
                id: 242,
                author: "employee2@gmail.com",
                text: "Voted Indian!",
                timeAgo: "1 day ago",
            },
            {
                id: 243,
                author: "employee1@gmail.com",
                text: "Pizza!",
                timeAgo: "20 hours ago",
            },
        ],
        author: "employee3@gmail.com",
        directedTo: null,
    },
    {
        id: 44,
        title: "Office heating is too high on 4th floor",
        flair: "non-technical",
        preview:
            "Is anyone else on the 4th floor (dev area) finding it extremely hot? The thermostat seems to be locked but it feels...",
        content:
            "Is anyone else on the 4th floor (dev area) finding it extremely hot? The thermostat seems to be locked but it feels like it's 27 degrees in here.\n\nIt's making it really hard to concentrate. Can facilities please check this?",
        timeAgo: "1 day ago",
        tags: ["facilities", "office", "heating", "complaint"],
        upvotes: 14,
        downvotes: 0,
        comments: [
            {
                id: 248,
                author: "employee4@gmail.com",
                text: "YES. It's an oven over here.",
                timeAgo: "1 day ago",
            },
            {
                id: 249,
                author: "hr1@gmail.com",
                text: "Thanks for flagging. I've contacted facilities. They are sending someone to check the system this afternoon.",
                timeAgo: "22 hours ago",
            },
        ],
        author: "employee3@gmail.com",
        directedTo: null,
    },
    {
        id: 45,
        title: "Looking for a car share from Northside",
        flair: "non-technical",
        preview:
            "My car is in the garage for the next two weeks. Is anyone driving in from the Northside area who would be willing to car share?...",
        content:
            "My car is in the garage for the next two weeks. Is anyone driving in from the Northside area who would be willing to car share?\n\nI'm happy to pitch in for fuel! My hours are generally 9 AM to 5 PM.",
        timeAgo: "1 day ago",
        tags: ["social", "car-share", "help"],
        upvotes: 4,
        downvotes: 0,
        comments: [],
        author: "employee2@gmail.com",
        directedTo: null,
    },
    {
        id: 46,
        title: "Docker Compose not working on new M2 Macs",
        flair: "technical",
        preview:
            "Is anyone else on a new M2 Mac having issues with Docker Compose? It seems to fail during the 'db' container build...",
        content:
            "Is anyone else on a new M2 Mac having issues with Docker Compose? It seems to fail during the 'db' container build with an architecture-related error.\n\nI'm trying to set up the local dev environment.\n\n`Error: platform not supported`\n\nAny workarounds?",
        timeAgo: "1 day ago",
        tags: ["docker", "m2", "mac", "dev-env", "help", "technical"],
        upvotes: 7,
        downvotes: 0,
        comments: [
            {
                id: 274,
                author: "manager2@gmail.com",
                text: "Yes, this is a known issue. You need to explicitly set the platform in your docker-compose.yml for the database service:\n\n`platform: linux/amd64`\n\nWe should update the dev-env docs.",
                timeAgo: "1 day ago",
            },
            {
                id: 275,
                author: "employee4@gmail.com",
                text: "Ah, that worked! Thanks, Sarah.",
                timeAgo: "22 hours ago",
            },
        ],
        author: "employee4@gmail.com",
        directedTo: "manager2@gmail.com",
    },
    {
        id: 47,
        title: "Client Feedback: Login Page is Confusing",
        flair: "non-technical",
        preview:
            "Sharing some direct feedback from our new client 'BigCorp'. They find the main login page confusing. Specifically, the 'SSO'...",
        content:
            "Sharing some direct feedback from our new client 'BigCorp'.\n\nThey find the main login page confusing. Specifically, the 'SSO' button and the 'Standard Login' are not clearly differentiated, and their staff members keep trying to use the wrong one.\n\n@manager1@gmail.com - Can your team mock up a clearer design? Let's discuss this in our next sync.",
        timeAgo: "1 day ago",
        tags: ["feedback", "client", "ui", "ux", "design"],
        upvotes: 9,
        downvotes: 0,
        comments: [
            {
                id: 279,
                author: "manager1@gmail.com",
                text: "Noted. We've heard this before. I'll have a designer work on a new layout and we can A/B test it.",
                timeAgo: "23 hours ago",
            },
        ],
        author: "ceo@gmail.com",
        directedTo: "manager1@gmail.com",
    },
    {
        id: 48,
        title: "Expense Reports for October",
        flair: "non-technical",
        preview:
            "This is a reminder for everyone who travelled or had corporate expenses in October. Please submit your expense reports...",
        content:
            "This is a reminder for everyone who travelled or had corporate expenses in October.\n\nPlease submit your expense reports through the 'Expense Portal on MakeIToday' portal by the end of today (Oct 31st) to be included in the next payroll run.\n\nManagers, please approve your team's reports by the end of Monday.",
        timeAgo: "8 hours ago",
        tags: ["finance", "hr", "expenses", "reminder", "payroll"],
        upvotes: 11,
        downvotes: 0,
        comments: [],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 49,
        title: "Security Patch Required for all workstations",
        flair: "technical",
        preview:
            "IT has pushed a critical security patch to all corporate workstations (Windows and Mac). This patch addresses a zero-day...",
        content:
            "IT has pushed a critical security patch to all corporate workstations (Windows and Mac). This patch addresses a zero-day vulnerability.\n\nYou are **required** to restart your machine before the end of the day to ensure the patch is applied.\n\nPlease save all your work and restart as soon as possible.",
        timeAgo: "7 hours ago",
        tags: ["it", "security", "patch", "alert", "urgent"],
        upvotes: 15,
        downvotes: 1,
        comments: [],
        author: "manager2@gmail.com",
        directedTo: null,
    },
    {
        id: 50,
        title: "Reminder: Submit Timesheets by the end of today",
        flair: "non-technical",
        preview:
            "This is a reminder for all direct reports to please submit your weekly timesheets by 5 PM today so I can approve them...",
        content:
            "This is a reminder for all direct reports to please submit your weekly timesheets by 5 PM today so I can approve them before the payroll cutoff.\n\nThanks,\nJohn",
        timeAgo: "6 hours ago",
        tags: ["reminder", "payroll", "timesheets"],
        upvotes: 3,
        downvotes: 0,
        comments: [],
        author: "manager1@gmail.com",
        directedTo: null,
    },
    {
        id: 51,
        title: "Lost: Blue Coffee Mug",
        flair: "non-technical",
        preview:
            "Has anyone seen my blue coffee mug? It has a 'World's Best Dev' logo on it. I think I left it in the 3rd-floor breakroom...",
        content:
            "Has anyone seen my blue coffee mug? It has a 'World's Best Dev' logo on it. I think I left it in the 3rd-floor breakroom yesterday afternoon.\n\nIt's my favourite mug! Please message me if you find it.",
        timeAgo: "5 hours ago",
        tags: ["lost", "general", "breakroom"],
        upvotes: 3,
        downvotes: 0,
        comments: [
            {
                id: 204,
                author: "employee3@gmail.com",
                text: "I think I saw it in the dishwasher on the 4th floor!",
                timeAgo: "1 hour ago",
            },
            {
                id: 205,
                author: "employee2@gmail.com",
                text: "Oh! That was yours? Sorry, I'll put it back on your desk.",
                timeAgo: "30 minutes ago",
            },
        ],
        author: "employee2@gmail.com",
        directedTo: null,
    },
    {
        id: 52,
        title: "Need access to the 'Metrics' dashboard",
        flair: "technical",
        preview:
            "Hi, I'm working on the Q4 report and I can't seem to access the 'Metrics' dashboard on the BI tool. It says my account...",
        content:
            "Hi,\n\nI'm working on the Q4 report and I can't seem to access the 'Metrics' dashboard on the BI tool. It says my account does not have permission.\n\nCan you grant me read-access for this project?\n\nThanks,\nGabe",
        timeAgo: "5 hours ago",
        tags: ["help", "bi", "dashboard", "access-request"],
        upvotes: 2,
        downvotes: 0,
        comments: [
            {
                id: 247,
                author: "manager1@gmail.com",
                text: "Approved. I've sent the request to IT to provision your access. Should be done within the hour.",
                timeAgo: "4 hours ago",
            },
        ],
        author: "employee1@gmail.com",
        directedTo: "manager1@gmail.com",
    },
    {
        id: 53,
        title: "Found: Pair of glasses, 3rd-floor kitchen",
        flair: "non-technical",
        preview:
            "Found a pair of black, rectangular-frame glasses in the 3rd-floor kitchen by the microwave. I left them on the counter...",
        content:
            "Found a pair of black, rectangular-frame glasses in the 3rd-floor kitchen by the microwave.\n\nI left them on the counter by the coffee machine. Hope they find their owner!",
        timeAgo: "4 hours ago",
        tags: ["found", "office", "kitchen"],
        upvotes: 6,
        downvotes: 0,
        comments: [],
        author: "employee2@gmail.com",
        directedTo: null,
    },
    {
        id: 54,
        title: "Staging Environment Deployment Failed",
        flair: "technical",
        preview:
            "The automated deployment to the 'staging' environment just failed. The build log shows a 'Module not found' error...",
        content:
            "The automated deployment to the 'staging' environment just failed.\n\nThe build log shows a 'Module not found' error. This seems to be related to the 'feature/JIRA-456' branch merge from @employee1@gmail.com.\n\nCan you take a look? This is blocking QA.",
        timeAgo: "4 hours ago",
        tags: ["devops", "ci-cd", "build-failed", "staging"],
        upvotes: 3,
        downvotes: 0,
        comments: [
            {
                id: 244,
                author: "employee1@gmail.com",
                text: "Oh, shoot. Looks like I forgot to push the package.json " +
                    "lock file. Pushing a fix now.",
                timeAgo: "3 hours ago",
            },
            {
                id: 245,
                author: "employee1@gmail.com",
                text: "Fix is pushed. Re-running the pipeline.",
                timeAgo: "3 hours ago",
            },
            {
                id: 246,
                author: "employee4@gmail.com",
                text: "Build passed. Deployment to staging is complete. QA is unblocked. Thanks, Gabe.",
                timeAgo: "2 hours ago",
            },
        ],
        author: "employee4@gmail.com",
        directedTo: "employee1@gmail.com",
    },
    {
        id: 55,
        title: "Troubleshooting VPN connection issues",
        flair: "technical",
        preview:
            "I've been unable to connect to the VPN since this morning. It keeps getting stuck at 'Connecting...'. Is anyone else having this issue?",
        content:
            "I've been unable to connect to the VPN since this morning. It keeps getting stuck at 'Connecting...'.\n\nI've tried restarting my machine and reinstalling the client, but no luck.\n\nIs anyone else having this issue, or is it just me? My ticket number is #IT-4567.",
        timeAgo: "3 hours ago",
        tags: ["vpn", "help", "it", "networking"],
        upvotes: 5,
        downvotes: 0,
        comments: [
            {
                id: 220,
                author: "employee2@gmail.com",
                text: "Yeah, me too. Can't access the staging server.",
                timeAgo: "2 hours ago",
            },
            {
                id: 221,
                author: "manager2@gmail.com",
                text: "IT is aware of a partial outage with the VPN provider. They are working on it. See status page: [link-to-status-page]",
                timeAgo: "1 hour ago",
            },
        ],
        author: "employee1@gmail.com",
        directedTo: null,
    },
    {
        id: 56,
        title: "Company Swag - New T-shirts are in!",
        flair: "non-technical",
        preview:
            "They're here! The new company t-shirts (with the updated logo) have arrived. Please come by the HR office on the 3rd floor...",
        content:
            "They're here!\n\nThe new company t-shirts (with the updated logo) have arrived.\n\nPlease come by the HR office on the 3rd floor to pick yours up. We have sizes S-XXL.",
        timeAgo: "3 hours ago",
        tags: ["hr", "merch", "social", "announcement"],
        upvotes: 33,
        downvotes: 0,
        comments: [
            {
                id: 269,
                author: "employee1@gmail.com",
                text: "Nice! On my way.",
                timeAgo: "2 hours ago",
            },
            {
                id: 270,
                author: "employee4@gmail.com",
                text: "Can you save me an XL? I'm in a meeting.",
                timeAgo: "1 hour ago",
            },
            {
                id: 271,
                author: "hr1@gmail.com",
                text: "No problem @Phil McCracken, got one for you.",
                timeAgo: "1 hour ago",
            },
        ],
        author: "hr1@gmail.com",
        directedTo: null,
    },
    {
        id: 57,
        title: "Weekly Guest WiFi Code - Week 45",
        flair: "technical",
        preview:
            "For security reasons, we have a separate WiFi code for visitors. This code is updated weekly, ensuring that only genuine...",
        content:
            "For security reasons, we have a separate WiFi code for visitors. This code is updated weekly, ensuring that only genuine visitors have access to our guest network.\n\nThis network is for guest use only and is firewalled from our internal systems.\n\nGuest WiFi Network: Make-It-All_Guest\nCode for Week 45: 6932",
        timeAgo: "2 hours ago",
        tags: ["wifi", "tech", "visitors"],
        upvotes: 10,
        downvotes: 0,
        comments: [],
        author: "employee1@gmail.com",
        directedTo: null,
    },
    {
        id: 58,
        title: "Weekly Guest WiFi Code - Week 46",
        flair: "technical",
        preview:
            "Here is the guest WiFi password for Week 46. Please use this for all visitors and non-corporate devices...",
        content:
            "Here is the guest WiFi password for Week 46.\n\nPlease use this for all visitors and non-corporate devices.\n\nGuest WiFi Network: Make-It-All_Guest\nCode for Week 46: 3295",
        timeAgo: "2 hours ago",
        tags: ["wifi", "tech", "visitors"],
        upvotes: 8,
        downvotes: 0,
        comments: [],
        author: "manager2@gmail.com",
        directedTo: null,
    },
    {
        id: 59,
        title: "Who borrowed the conference room projector?",
        flair: "non-technical",
        preview:
            "I had the 'Hammer' conference room booked for a client demo at 2 PM, but the portable projector is missing. Does anyone...",
        content:
            "I had the 'Hammer' conference room booked for a client demo at 2 PM, but the portable projector is missing.\n\nDoes anyone know where it is? Please return it ASAP, this is client-facing.",
        timeAgo: "2 hours ago",
        tags: ["office", "help", "facilities", "urgent"],
        upvotes: 1,
        downvotes: 0,
        comments: [
            {
                id: 257,
                author: "employee1@gmail.com",
                text: "Sorry! I grabbed it for a quick review in the 'Nail' room. Bringing it back right now!",
                timeAgo: "1 hour ago",
            },
            {
                id: 258,
                author: "manager1@gmail.com",
                text: "Got it. Thanks, Gabe.",
                timeAgo: "1 hour ago",
            },
        ],
        author: "manager1@gmail.com",
        directedTo: null,
    },
    {
        id: 60,
        title: "Staging server (staging-db-02) is down",
        flair: "technical",
        preview:
            "URGENT: The staging database 'staging-db-02' is not responding. All QA tests are failing. Can someone from IT take a look?",
        content:
            "**URGENT: The staging database 'staging-db-02' is not responding.**\n\nAll QA tests are failing. I can't connect via the client either.\n\nCan someone from IT take a look? This is blocking the entire QA team.",
        timeAgo: "45 minutes ago",
        tags: ["urgent", "db", "outage", "staging", "it"],
        upvotes: 7,
        downvotes: 0,
        comments: [
            {
                id: 266,
                author: "manager2@gmail.com",
                text: "On it. Looks like the service crashed. Restarting it now.",
                timeAgo: "40 minutes ago",
            },
            {
                id: 267,
                author: "manager2@gmail.com",
                text: "Service is back up. Please try again.",
                timeAgo: "35 minutes ago",
            },
            {
                id: 268,
                author: "employee1@gmail.com",
                text: "Connections are working again. Thanks for the quick fix, Sarah!",
                timeAgo: "30 minutes ago",
            },
        ],
        author: "employee1@gmail.com",
        directedTo: "manager2@gmail.com",
    },
    {
        id: 61,
        title: "Database is Read-Only - Urgent",
        flair: "technical",
        preview:
            "URGENT: The production database 'PROD-DB-01' appears to be in a read-only state. All 'INSERT' and 'UPDATE' queries are failing...",
        content:
            "**URGENT: The production database 'PROD-DB-01' appears to be in a read-only state.**\n\nAll 'INSERT' and 'UPDATE' queries are failing with 'Error: Database is read-only'.\n\nThis is affecting all new user signups and data submissions.\n\nPaging IT and @manager2@gmail.com.",
        timeAgo: "25 minutes ago",
        tags: ["urgent", "db", "outage", "production", "it"],
        upvotes: 16,
        downvotes: 0,
        comments: [
            {
                id: 232,
                author: "manager2@gmail.com",
                text: "Looking into it now. Disk space might be full.",
                timeAgo: "20 minutes ago",
            },
            {
                id: 233,
                author: "manager2@gmail.com",
                text: "FIXED. Disk was full. I've cleared the logs and expanded the volume. Write-access is restored. We need to set up better monitoring for this.",
                timeAgo: "5 minutes ago",
            },
            {
                id: 234,
                author: "employee4@gmail.com",
                text: "Confirmed, writes are working again. Thanks Sarah!",
                timeAgo: "2 minutes ago",
            },
        ],
        author: "employee4@gmail.com",
        directedTo: "manager2@gmail.com",
    },
    {
        id: 62,
        title: "Halloween Costume Contest Winners!",
        flair: "non-technical",
        preview:
            "Thank you to everyone who participated in our amazing Halloween costume contest today! The competition was fierce, but the...",
        content:
            "Thank you to everyone who participated in our amazing Halloween costume contest today! The competition was fierce, but the votes are in:\n\n**1st Place:** Ben Dover (@employee2@gmail.com) as 'Server Rack on Fire'\n**2nd Place:** Anita Bath (@employee3@gmail.com) as 'Rosie the Riveter'\n**3rd Place:** Gabe Itch (@employee1@gmail.com) as 'SQL Injection Query'\n\nWinners, please see HR to claim your prizes! Great job, everyone!",
        timeAgo: "Just now",
        tags: ["social", "event", "halloween", "party", "hr"],
        upvotes: 47,
        downvotes: 0,
        comments: [
            {
                id: 284,
                author: "employee2@gmail.com",
                text: "Honoured to have won. The smoke machine was worth it.",
                timeAgo: "Just now",
            },
            {
                id: 285,
                author: "employee1@gmail.com",
                text: "Congrats Ben! That costume was hilarious.",
                timeAgo: "Just now",
            },
        ],
        author: "hr1@gmail.com",
        directedTo: null,
    },

    {
      id: 63,
      title: "Mandatory Return to Office – Full-Time On-Site Requirement",
      flair: "non-technical",
      preview:
        "Following a management decision, all staff members will be required to work on-site...",
      content:
        "Dear all,\n\nFollowing a recent review and a decision by Management, we will be moving to a **full-time on-site working model** with effect from **Monday 1 December 2025**.\n\nFrom that date, all staff members are required to be on-site **five days per week**. Remote working will no longer be the default arrangement except where a formal reasonable adjustment or other exceptional business need has been agreed in advance with your line manager and HR.\n\nPlease note:\n- Normal office hours should be adhered to unless otherwise agreed with your manager.\n- Desk booking is available via MakeIToday > Facilities > Desk Booking.\n- If you believe you require a reasonable adjustment or have exceptional circumstances, speak to your line manager and HR immediately so this can be considered.\n\nNon-compliance with this requirement will be treated seriously and may result in disciplinary action up to and including termination of your employment in accordance with our disciplinary procedure.\n\nWe appreciate everyone’s co-operation during this change. If you have any questions, please contact HR.\n\nKind regards,\nKaren (HR Office)",
      timeAgo: "2 hours ago",
      tags: ["hr", "policy", "rto", "dismissal", "mandatory"],
      upvotes: 11,
      downvotes: 80,
      comments: [
          {
              id: 311,
              author: "employee2@gmail.com",
              text: "This is just ridiculous.",
              timeAgo: "1 hour ago",
          },
          {
              id: 312,
              author: "employee1@gmail.com",
              text: "So we’re being ‘rewarded’ for three years of good work with longer commutes and higher costs. Brilliant.",
              timeAgo: "49 minutes ago",
          },
          {
              id: 313,
              author: "employee3@gmail.com",
              text: "I can't wait to spend more time with you guys in the office! Management have our best interests at heart.",
              timeAgo: "12 minutes ago",
          },
      ],
      author: "hr1@gmail.com",
      directedTo: null
    }
];
