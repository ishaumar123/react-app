import React from "react";
import { getApiData } from "../api/request.js";
import { API_URL_Users } from "../constant";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorComponent from "../ErrorComponent/Error.js";

const FollowerListing = () => {
  const [followers, setFollowers] = useState();
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { id } = useParams();

  const URL = `${API_URL_Users}/${id}`

  useEffect(() => {
    getApiData(URL)
    .then((response) => {
     console.log(response)
     setFollowers(response.data.follower);
         })
         .catch(error => {
           setHasError(true)
           setErrorMessage(error.message)
         })
    },[])
    console.log(followers)
  return (
    <>
    <div>
      { hasError ? (
        <ErrorComponent error={errorMessage} />
      ) : (
      <><h1 className=" mt-5 text-center main-heading ">All Followers</h1><table className="table table-striped mt-4">
              <thead className="border">
                <tr>
                  <th className="p-3" colSpan="4">
                    Followers
                  </th>
                </tr>
              </thead>
              <tbody>
                {followers &&
                  followers.map((follower) => (
                    <tr key={follower.id}>
                      <td className="p-3">{follower.firstname}</td>
                      <td className="p-3">{follower.lastname}</td>
                      <td className="p-3">{follower.email}</td>
                    </tr>
                  ))}
              </tbody>
            </table></>
      )}
      </div>
    </>
  );
}

export default FollowerListing;
