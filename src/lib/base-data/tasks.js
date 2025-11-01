const baseTasks = [
    {
        id: 0,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Google Auth",
        description: "Implement Google Auth (G-Auth) into authentication workflow",
        from: new Date(2025, 9, 24, 0),
        to: new Date(2025, 10, 7, 0),
        todos: [
            {id: 0, title: "Todo 1", checked: false},
            {id: 1, title: "Todo 1", checked: false},
        ],
    },
    {
        id: 1,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Main Dashboard",
        description: "Produce mockup for main dashboard",
        from: new Date(2025, 9, 31, 0),
        to: new Date(2025, 10, 8, 0),
        todos: [
            {id: 0, title: "Todo 1", checked: false},
            {id: 1, title: "Todo 1", checked: false},
        ],
    },
    {
        id: 2,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "API Keys",
        description: "Refresh API Keys as per digital information management policy",
        from: new Date(2025, 10, 2, 8),
        to: new Date(2025, 10, 11, 14),
        todos: [
            {id: 0, title: "Todo 1", checked: false},
            {id: 1, title: "Todo 1", checked: false},
        ],
    },
    {
        id: 3,
        projectId: 1,
        members: [2, 3, 4, 6],
        title: "Update DSAR",
        description: "Collate and report Data Subject Access Request information for company accounts",
        from: new Date(2025, 10, 5, 8),
        to: new Date(2025, 10, 11, 14),
        todos: [
            {id: 0, title: "Todo 1", checked: false},
            {id: 1, title: "Todo 1", checked: false},
        ],
    },
    {
        id: 4,
        projectId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Lunch vouchers",
        description: "Order lunch voucher codes from HR", 
        from: new Date(2025, 10, 4, 0),
        to: new Date(2025, 10, 9, 20),
        todos: [
            {id: 0, title: "Todo 1", checked: false},
            {id: 1, title: "Todo 1", checked: false},
        ],

    },
];

export default baseTasks;
