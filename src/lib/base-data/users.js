//In the next phrase, we need to remove the profilPic and passwords or have hashes of them.
const baseUsers = [
    {
        id: 0,
        email: "manager1@gmail.com",
        name: "John Doe",
        role: "Manager",
        profilePic: "/images/pexels-blitzboy-1040880.jpg",
        password: "password123",
        isManager: true
    },
    {
        id: 1,
        email: "ceo@gmail.com",
        name: "Mike Oxlong",
        role: "CEO",
        profilePic: "/images/pexels-moh-adbelghaffar-771742.jpg",
        password: "password123",
        isManager: true
    },
    {
        id: 2,
        email: "employee1@gmail.com",
        name: "Gabe Itch",
        role: "Employee",
        profilePic: "/images/pexels-rfera-432059.jpg",
        password: "password123",
        isManager: false
    },
    {
        id: 3,
        email: "manager2@gmail.com",
        name: "Sarah Connor",
        role: "Manager",
        password: "password123",
        isManager: true
    },
    {
        id: 4,
        email: "employee2@gmail.com",
        name: "Ben Dover",
        role: "Employee",
        password: "password123",
        isManager: false
    },
    {
        id: 5,
        email: "employee3@gmail.com",
        name: "Anita Bath",
        role: "Employee",
        password: "password123",
        isManager: false
    },
    {
        id: 6,
        email: "employee4@gmail.com",
        name: "Phil McCracken",
        role: "Employee",
        password: "password123",
        isManager: false
    },
    {
        id: 7,
        email: "hr1@gmail.com",
        name: "Karen Price",
        role: "HR",
        password: "password123",
        isManager: false
    }
]

export default baseUsers;