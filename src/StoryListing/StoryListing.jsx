import { getApiData } from "../api/request.js";
import { API_URL_Stories } from "../constant";
import "./story.css"
import { useEffect, useState } from "react";
import StoryTable from "../StoryListing/StoryTable";
import ErrorComponent from "../ErrorComponent/Error.js";

const StoryListing = () => {
  const [stories, setStories] = useState();
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
    getApiData(API_URL_Stories)
    .then((response) => {
     console.log(response)
      setStories(response.data.data);
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
      <><h1 className=" mt-5 text-center main-heading ">All Stories</h1><div className="row mt-4">
              {stories &&
                stories.map((storie) => {
                  return <StoryTable key={storie.id} storie={storie} />;
                })}
            </div></>
      )}
      </div>
    </>
  );
}
export default StoryListing;
