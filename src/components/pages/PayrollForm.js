import React, { useState , useEffect, useCallback} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import profile1 from '../../Assets/profile-images/Ellipse -3.png';
import profile2 from '../../Assets/profile-images/Ellipse -1.png';
import profile3 from '../../Assets/profile-images/Ellipse -8.png';
import profile4 from '../../Assets/profile-images/Ellipse -7.png';
import deleteIcon from "../../Assets/icons/delete-black-18dp.svg";
import editIcon from "../../Assets/icons/create-black-18dp.svg";
//import viewIcon from "../../Assets/icons/download.jpg";

const PayrollForm = () => {

  //let employeeList = JSON.parse(localStorage.getItem('EmployeeList'));
   // console.log(employeeList);

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data);
    }
    const deleteUserData= async (id) => {
      await axios.delete(`http://localhost:3001/users/${id}`);
      loadUsers();
  }

    return (
        <div className="container" >
            <div className="py-4">
                <h1>Employee payroll List</h1>
                <table class="table border shadow">
          <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Profile Image</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Department</th>
      <th scope="col">Salary</th>
      <th scope="col">Start Date</th>
         <th>Action</th>
      
    </tr>
  </thead>
  <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td><img className="profile" 
                src={
                  user.profilePic ===
                  "../../Assets/profile-images/Ellipse -3.png"
                    ? profile1
                    : user.profilePic ===
                      "../../Assets/profile-images/Ellipse -1.png"
                    ? profile2
                    : user.profilePic ===
                      "../../Assets/profile-images/Ellipse -4.png"
                    ? profile3
                    : profile4
                }
                alt=""
              />
                </td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.departMentValue.map(dept =>(
                  <div  >
                    {dept}
                  </div>
                ))}</td>
                <td>{user.salary}</td>
                <td>{user.startdate}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  
                  <img src={deleteIcon} alt="delete" onClick={() => deleteUserData(user.id)}/>
                  <Link to={`/users/edit/${user.id}`}>
                  <img  src={editIcon} alt="edit"  />
                  </Link>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PayrollForm;