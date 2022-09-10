import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
// import StoryTable from "../StoryListing/StoryTable";

function UserListing() {
  const [users, setUsers] = useState();

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = () => {
    axios
      .get("http://localhost:3000/api/v1/users")
      .then((response) => {
        setUsers(response.data.user);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  console.log(users);
  return (
    <>
      <h1 className=" mt-5 text-center main-heading ">All Users</h1>
      <div className="row mt-4">
      <table className='table table-striped mt-4'>
        <thead className='border'>
          <tr>
            <th className='p-3' colSpan='4'>
            User name
            </th>
          </tr>
        </thead>
        <tbody>
          {users
            && users.map(user => (
              <tr key={user.id}>
                <td className='p-3'>{user.firstname}</td>
                <td>
                <Link
                    to={`/users/${user.id}`}
                    className='btn btn-md rounded-pill btn-outline-info mt-2 shadow'
                  >
                    Follower
                  </Link>
                  </td>
                  <td>
                  <Link
                    to={`/users/${user.id}/stories`}
                    className='btn btn-md rounded-pill btn-outline-info mt-2 shadow'
                  >
                   Stories
                  </Link>
                  </td>
              </tr>
            ))}
        </tbody>
      </table>

      </div>
    </>
  );
}
export default  UserListing;

