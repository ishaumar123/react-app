import React from "react";
import { getApiData } from "./api/request.js";
import { API_URL_Users } from "./constant";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import ErrorComponent from "./ErrorComponent/Error.js";


const UserListing = () => {
  const [users, setUsers] = useState();
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
    getApiData(API_URL_Users)
    .then((response) => {
    setUsers(response.data.user);
         })
         .catch(error => {
           setHasError(true)
           setErrorMessage(error.message)
         })
    },[])
  return (
    <>
       <div>
      { hasError ? (
        <ErrorComponent error={errorMessage} />
      ) : (
        <><Link to='stories' className='btn btn-lg btn-danger me-3 shadow mt-5 text-white'>
              Stories
            </Link><div className="row mt-4">

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

              </div></>
       )}
       </div>
    </>
  );
}
export default  UserListing;

