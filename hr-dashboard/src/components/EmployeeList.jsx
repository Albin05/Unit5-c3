import "../App.css"
import { useState, useEffect } from "react";

export const EmployeeList = () => {

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    const data = await fetch("http://localhost:8080/employee");
    setEmployee(await data.json());
  }

  
  return (
    <div className="list_container">
      {
        employee.map((e) => {
          return (
            <div className="employee_card">
              <img className="employee_image" src={e.image} />
              <span className="employee_name">{e.employee_name}</span>
              <span className="employee_title">{e.title}</span>
            </div>
          );
        })
      }
    </div>
  );
};
