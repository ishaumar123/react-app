import React from "react";
import { Link } from "react-router-dom";
const Errors = () => {
  return (
    <div className="App">
      <h1>404 - Page Not Found! </h1>
      <h2>Try Again!</h2>
      <Link to="/">
        <button className="btn btn-outline-primary">Go Home</button>
      </Link>
    </div>
  );
  };
  export default Errors;
