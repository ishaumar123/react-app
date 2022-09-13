// import logo from './logo.svg';
import './App.css';
import StoryListing from './StoryListing/StoryListing';
import FollowerListing from './FollowerListing/FollowerListing';
import UserListing from './UserListing';
import Story from './StoryListing/Story';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='container'>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserListing />} />
      <Route path='/users/:id' element={<FollowerListing />} />
      <Route path='/stories' element={<StoryListing />} />
      <Route path='/stories/:id' element={<Story />} />
    </Routes>
  </BrowserRouter>
   </div>

   </>
  );
}

export default App;
