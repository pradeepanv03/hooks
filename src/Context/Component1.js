import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";

function Component1() {
  const {name } = useContext(UserContext);  // Destructure the values from the context

  return (
    <>
 <h2>User: {name}</h2>
 <Link to='/page2'> Go to next page</Link>
 {/* <h3>Role: {role}</h3>  */}
    </>
  );
}

export default Component1;
