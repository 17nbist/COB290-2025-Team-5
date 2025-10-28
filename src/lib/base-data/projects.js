const baseProjects = [
    {
        id: 0, 
        managerId:0, 
        teamLeaderId: 1,
        members: new Set([0, 1, 2]),
        title: "Mobile App", 
        description: "The one and only mobile app",
        creationDate: new Date(2025, 9, 28),
        dueDate: new Date(2025, 10, 28),
    },
    {
        id: 1, 
        managerId: 0, 
        teamLeaderId: 1,
        members: new Set([0, 1, 2]),
        title: "Finance Simulator",
        description: "Finance back-testing",
        creationDate: new Date(2025, 9, 28),
        dueDate: new Date(2025, 11, 28)
    }
]


export default baseProjects;