const baseEvents = [
    {
        id: 0, 
        projectId: 0,
        members: [0, 1, 2],
        title: "Meeting",
        from: new Date(2025, 9, 24, 0), 
        to: new Date(2025, 10, 7, 0)
    },
    {
        id: 1, 
        projectId: 1, 
        members: [0, 1, 2],
        title: "Other meeting",
        from: new Date(2025, 9, 31, 0), 
        to: new Date(2025, 10, 8, 0)
    },
    {
        id: 2, 
        projectId: 0, 
        members: [0, 1, 2],
        title: "Meeting 3", 
        from: new Date(2025, 10, 2, 8), 
        to: new Date(2025, 10, 11, 14)
    },
    {
        id: 3, 
        projectId: 1, 
        members: [0, 1, 2],
        title: "Yet Another meeting", 
        from: new Date(2025, 10, 5, 8), 
        to: new Date(2025, 10, 11, 14)
    },
    {
        id: 4, 
        projectId: 0, 
        members: [0, 1, 2],
        title: "catchup session", 
        from: new Date(2025, 10, 4, 0), 
        to: new Date(2025, 10, 9, 20)
    },
];

export default baseEvents;