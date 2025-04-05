import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";

function Component5() {
    const {language} = useContext(UserContext);

  return (
    <>
      <h2>promming language : {language}</h2>
      {/* <p> {user2} </p> */}
   <Link to='/'>go to first page</Link>
    </>
  );
}

export default Component5;
