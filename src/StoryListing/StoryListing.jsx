import axios from "axios";
import { useEffect, useState } from "react";
import StoryTable from "../StoryListing/StoryTable";
import { useParams } from 'react-router-dom'
function StoryListing() {
  const [stories, setStories] = useState();
  const { id } = useParams()
  useEffect(() => {
    getAllStories();
  }, []);
  const getAllStories = () => {
    axios
      .get(`http://localhost:3000/api/v1/users/${id}/stories`)
      .then((response) => {
        setStories(response.data.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  console.log(stories);
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
