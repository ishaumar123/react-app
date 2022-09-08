// import logo from './logo.svg';
import './App.css';
import StoryListing from './StoryListing/StoryListing';
import FollowerListing from './FollowerListing/FollowerListing';
// import StoryTable from './StoryListing/StoryTable';

function App() {
  return (
    <>
    <div className='container'>
   <StoryListing />
   <FollowerListing/>
   </div>
   
   </>
  );
}

export default App;
