const baseTasks = [
    {
        id: 0, 
        projectId: 0,
        members: [0, 1, 2],
        title: "Google Auth", 
        description: "abacadaba", 
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
        members: [0, 1, 2],
        title: "Main Dashboard", 
        description: "abacadaba", from: new Date(2025, 9, 31, 0), 
        to: new Date(2025, 10, 8, 0),
        todos: [
            {id: 0, title: "Todo 1", checked: false},
            {id: 1, title: "Todo 1", checked: false},
        ],
    },
    {
        id: 2, 
        projectId: 0,
        members: [0, 1, 2],
        title: "A Task", 
        description: "abacadaba", 
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
        members: [0, 1, 2],
        title: "Other Task", 
        description: "abacadaba", 
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
        title: "Task B", 
        description: "abacadaba", 
        from: new Date(2025, 10, 4, 0), 
        to: new Date(2025, 10, 9, 20),
        todos: [
            {id: 0, title: "Todo 1", checked: false},
            {id: 1, title: "Todo 1", checked: false},
        ],

    },
];

export default baseTasks;