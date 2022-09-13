import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
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
        <Link to='stories' className='btn btn-lg btn-danger me-3 shadow mt-5 text-white'>
        Stories
       </Link>
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
              </tr>
            ))}
        </tbody>
      </table>

      </div>
    </>
  );
}
export default  UserListing;

