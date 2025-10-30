const baseProjects = [
    {
        id: 0, 
        managerId:0, 
        leaderId: 0,
        members: [0, 2, 4, 5, 6],
        title: "Mobile App", 
        description: "The one and only mobile app",
        creationDate: new Date(2025, 9, 28),
        dueDate: new Date(2025, 10, 22),
    },
    {
        id: 1, 
        managerId: 3, 
        leaderId: 3,
        members: [2, 3, 4, 6],
        title: "Finance Simulator",
        description: "Finance back-testing",
        creationDate: new Date(2025, 9, 30),
        dueDate: new Date(2025, 11, 20)
    },
    {
        id: 2, 
        managerId: 1, 
        leaderId: 1,
        members: [0, 1, 3, 7],
        title: "Hiring project",
        description: "A discussion on new hires",
        creationDate: new Date(2025, 10, 2),
        dueDate: new Date(2025, 10, 10)
    }
]


export default baseProjects;