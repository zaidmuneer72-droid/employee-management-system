const Employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update UI",
        "taskDescription": "Fix the alignment on the login page.",
        "taskDate": "2024-10-20",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss project milestones with stakeholders.",
        "taskDate": "2024-10-18",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Server Migration",
        "taskDescription": "Move database to the new production server.",
        "taskDate": "2024-10-15",
        "category": "DevOps"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sneha",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Documentation",
        "taskDescription": "Create API documentation for the mobile team.",
        "taskDate": "2024-10-21",
        "category": "Docs"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Bug Fix",
        "taskDescription": "Resolve issues with the payment gateway.",
        "taskDate": "2024-10-22",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Documentation",
        "taskDescription": "Create API documentation for the mobile team.",
        "taskDate": "2024-10-21",
        "category": "Docs"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Refactor Code",
        "taskDescription": "Optimize the helper functions for better performance.",
        "taskDate": "2024-10-19",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Data Entry",
        "taskDescription": "Input quarterly sales figures.",
        "taskDate": "2024-10-14",
        "category": "Admin"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Feature Request",
        "taskDescription": "Implement dark mode for the dashboard.",
        "taskDate": "2024-10-23",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Security Audit",
        "taskDescription": "Perform vulnerability scans on the backend.",
        "taskDate": "2024-10-17",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review pull requests for the authentication module.",
        "taskDate": "2024-10-21",
        "category": "Dev"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Audit hardware assets in the office.",
        "taskDate": "2024-10-25",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Onboarding",
        "taskDescription": "Train new hires on company policies.",
        "taskDate": "2024-10-10",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "System Update",
        "taskDescription": "Update OS on all workstation laptops.",
        "taskDate": "2024-10-12",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Market Research",
        "taskDescription": "Gather data on competitor pricing models.",
        "taskDate": "2024-10-22",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Internal Seminar",
        "taskDescription": "Prepare slides for the technical workshop.",
        "taskDate": "2024-10-26",
        "category": "Education"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Karan",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO Analysis",
        "taskDescription": "Identify top keywords for the landing page.",
        "taskDate": "2024-10-24",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Social Media Post",
        "taskDescription": "Draft LinkedIn updates for the product launch.",
        "taskDate": "2024-10-19",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Email Campaign",
        "taskDescription": "Send out the monthly newsletter.",
        "taskDate": "2024-10-22",
        "category": "Marketing"
      }
    ]
  }
];
const Admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

const generateTaskId = () => Date.now() + Math.random()

const addTaskIds = (employees) => {
  return employees.map(employee => ({
    ...employee,
    tasks: employee.tasks.map(task => ({
      ...task,
      id: task.id ?? generateTaskId()
    }))
  }))
}

export const setLocalStorage = () => {
    const employeesWithIds = addTaskIds(Employees)
    localStorage.setItem('Employees', JSON.stringify(employeesWithIds));
    localStorage.setItem('Admin', JSON.stringify(Admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('Employees'));
    const admin = JSON.parse(localStorage.getItem('Admin'));
    const employeesWithIds = employees ? addTaskIds(employees) : employees;

    if (employees && JSON.stringify(employees) !== JSON.stringify(employeesWithIds)) {
      localStorage.setItem('Employees', JSON.stringify(employeesWithIds));
    }

    return { employees: employeesWithIds, admin };
}