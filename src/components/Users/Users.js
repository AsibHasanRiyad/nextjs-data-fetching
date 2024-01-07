"use client";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users);
  return (
    <div className=" grid grid-cols-3 gap-10 py-10 px-10">
      {users.map((user) => (
        <div key={user.id} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
