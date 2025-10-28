const baseProjects = {
    0: {
        id: 0, 
        managerId:0, 
        teamLeaderId: 1,
        members: new Set([0, 1, 2]),
        name: "Mobile App", 
        creationDate: new Date(2025, 9, 28),
        dueDate:new Date(2025, 10, 28)
    },
    1: {
        id: 1, 
        managerId: 0, 
        teamLeaderId: 1,
        members: new Set([0, 1, 2]),
        name: "Finance Simulator",
        creationDate: new Date(2025, 9, 28),
        dueDate:new Date(2025, 11, 28)
    }
}


export default baseProjects;