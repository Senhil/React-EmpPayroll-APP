import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({
        name: '',
            profileArray: [
                { url: '../../Assets/profile-images/Ellipse -3.png' },
                { url: '../../Assets/profile-images/Ellipse -1.png' },
                { url: '../../Assets/profile-images/Ellipse -8.png' },
                { url: '../../Assets/profile-images/Ellipse -7.png' }
    
            ],
            allDepartment: [
                'HR', 'Sales', 'Finance', 'Engineer', 'Others'
            ],
            departMentValue: [],
            gender: '',
            salary: '',
            day: '',
            month: '',
            year: '',
            startDate: '',
            notes: '',
            id: '',
            profilePic: '',
            isUpdate: false,
            error: {
                department: '',
                name: '',
                gender: '',
                salary: '',
                profilePic: '',
                startDate: ''
            }
      });
      const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">profileimage: {user.profileimage}</li>
        <li className="list-group-item"> name: {user.name}</li>
        <li className="list-group-item">gender: {user.gender}</li>
        <li className="list-group-item">department: {user.department}</li>
        <li className="list-group-item">salary: {user.salary}</li>
        <li className="list-group-item">startdate: {user.startdate}</li>
      </ul>
    </div>
  );
};

export default User;



