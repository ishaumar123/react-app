// import logo from './logo.svg';
import "./App.css";
import StoryListing from "./StoryListing/StoryListing";
import FollowerListing from "./FollowerListing/FollowerListing";
import UserListing from "./UserListing";
import Story from "./StoryListing/Story";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Errors from "./Errors";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exect path="/" element={<UserListing />} />
            <Route path="/users/:id" element={<FollowerListing />} />
            <Route path="/stories" element={<StoryListing />} />
            <Route path="/stories/:id" element={<Story />} />
            <Route path="*" element={<Errors />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
