import axios from "axios";
import "./story.css"
import { useEffect, useState } from "react";
import StoryTable from "../StoryListing/StoryTable";
const StoryListing = () => {
  const [stories, setStories] = useState();

  useEffect(() => {
    getAllStories();
  }, []);
  const getAllStories = () => {
    axios
      .get(`http://localhost:3000/api/v1/stories`)
      .then((response) => {
        setStories(response.data.data);
      })
      .catch((error) => (`Error: ${error}`));
  };
  return (
    <>
      <h1 className=" mt-5 text-center main-heading ">All Stories</h1>
      <div className="row mt-4">
        {stories &&
          stories.map((storie) => {
            return <StoryTable key={storie.id} storie={storie} />;
          })}
      </div>
    </>
  );
}
export default StoryListing;
