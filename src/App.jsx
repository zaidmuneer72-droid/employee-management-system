import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Logins";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInEmployeeRef, setLoggedInEmployeeRef] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [userData,setuserData] = useContext(AuthContext);

  useEffect(() => {
    // Changed to "loggedInUser" to match your logic below
    const loggedInUser = localStorage.getItem("loggedInUser");
    
    if (loggedInUser) {
      const storedUser = JSON.parse(loggedInUser);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(storedUser.role); // Use .role (lowercase) to stay consistent

      if (storedUser.role === "employee") {
        // Support both new { employeeRef } and old { data } shapes.
        if (storedUser.employeeRef) {
          setLoggedInEmployeeRef(storedUser.employeeRef);
        } else if (storedUser.data) {
          setLoggedInEmployeeRef({
            id: storedUser.data.id,
            email: storedUser.data.email
          });
        }
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      // FIX: Changed "loggedin" to "loggedInUser" and "Role" to "role"
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
  (emp) => emp.email === email && emp.password === password
);
      if (employee) {
        setUser("employee"); // Using singular "employee" to match common patterns
        const employeeRef = { id: employee.id, email: employee.email };
        setLoggedInEmployeeRef(employeeRef);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", employeeRef }));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  const currentEmployee =
    userData?.find((emp) => {
      if (!loggedInEmployeeRef) return false;
      if (loggedInEmployeeRef.id !== undefined) return emp.id === loggedInEmployeeRef.id;
      return emp.email === loggedInEmployeeRef.email;
    }) || null;

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashBoard changeuser={setUser} /> : null}
      {user === "employee" ? <EmployeeDashBoard changeuser={setUser} data={currentEmployee} /> : null}
    </>
  );
};

export default App;