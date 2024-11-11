import axios from "axios";
import React, { useEffect, useState } from "react";
import "./UserList.css";
const UseList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
    }).then(function (response) {
      setListOfUSer(response.data.data.data);
    });
    //fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10")
    // .then((response) => response.json())
    //.then((response) => setListOfUSer(response.data.data));
  });
  return (
    <div>
      <div className="titre">
        <h1>COMPTE UTILISATEUR</h1>
      </div>
      <table className="table">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Genre</th>
          <th>Title</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {listOfUSer &&
          listOfUSer.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.gender}</td>
                <td>{user.name.title}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};
export default UseList;
