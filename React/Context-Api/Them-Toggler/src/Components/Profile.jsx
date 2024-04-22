import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import UserContextProvider from "../Context/UserContextProvier";

function Profile() {
  const { user } = useContext(UserContext);

  //   return (
  //     <UserContextProvider>

  //     </UserContextProvider>
  //   )
  if (!user) return <div>Please login</div>;

  return <div> Welcome {user.username} </div>
}

export default Profile;
