import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function FollowerListing() {
  const [followers, setFollowers] = useState();
  const { id } = useParams();
  useEffect(() => {
    getAllFollowers();
  }, []);

  const getAllFollowers = () => {
    axios
      .get(`http://localhost:3000/api/v1/users/${id}`)
      .then((response) => {
        setFollowers(response.data.follower);
      })
      .catch((error) => `Error: ${error}`);
  };
  return (
    <>
      <h1 className=" mt-5 text-center main-heading ">All Followers</h1>
      <table className="table table-striped mt-4">
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
      </table>
    </>
  );
}

export default FollowerListing;
