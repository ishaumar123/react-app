import React from "react";
import { getApiData } from "../api/request.js";
import { API_URL_Stories } from "../constant";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorComponent from "../ErrorComponent/Error.js";

const Story = () => {
  const [story, setStory] = useState();
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { id } = useParams();

  const URL = `${API_URL_Stories}/${id}`
   useEffect(() => {
   getApiData(URL)
   .then((response) => {
          setStory(response.data.data);
        })
        .catch(error => {
          setHasError(true)
          setErrorMessage(error.message)
        })
   },[])
  if (!story) return <h1>Loading</h1>;
  return (

    <div>
    { hasError ? (
      <ErrorComponent error={errorMessage} />
    ) : (
    <div className="container mt-5 mb-5 ">
      {story && story.image.service_url && (
        <img
          className="shadow storyimage"
          key={story.id}
          src={story.image.service_url}
          alt="not found"
        />
      )}
    </div>
     )}
     </div>
  );
}
export default Story;
