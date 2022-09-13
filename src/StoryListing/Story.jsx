import React from "react";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Story() {
  const [story, setStory] = useState()
  const { id } = useParams()

  const getStory = () => {
    axios
      .get(`http://localhost:3000/api/v1/stories/${id}`)
      .then(response => {
        setStory(response.data.data)
      })
      .catch(error => (`Error: ${error}`))
  }
  useEffect(() => {
    getStory()
  }, [])
  if (!story) return <h1>Loading</h1>
  return (

    <div className='container mt-5 mb-5 '>
  
              {story && story.image.service_url && (
                <img className="shadow storyimage"
                  key={story.id}
                  src={story.image.service_url}
                  alt='not found'
                />
              )}
            </div>

  )
}
export default Story





