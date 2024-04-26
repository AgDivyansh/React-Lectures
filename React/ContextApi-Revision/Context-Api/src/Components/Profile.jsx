import React from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContest";
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please Login</div>;
  }

  return <div>
    Welcome {user.customername}
    and password is {user.password}
  </div>
}

export default Profile;
