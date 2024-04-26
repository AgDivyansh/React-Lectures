import React from "react";
import { useState } from "react";
// import UserContextProvider from "../Context/UserContextProvider";
import { useContext } from "react";
import UserContext from "../Context/UserContest";
function Login() {
    
    const [customername, setcustomername] = useState("");
    const [password, setPassword] = useState();
    
    const { setUser } = useContext(UserContext);

//   const {setUser} = useContext(UserContext) ;
  const handelSubmit = (e) => {
    e.preventDefault() ;

    setUser({customername, password}) ;
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="customername"
        // {" "}
        value={customername}
        onChange={(e) => setcustomername(e.target.value)}
      />
      {/* {" "} */}
      {/* <br> */}
      <br/>
      {/* </br> */}

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <br/>
      
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}
export default Login;
