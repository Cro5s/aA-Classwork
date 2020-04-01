import React from "react";
import UserDetails from "../components/users/UserDetail";
import Navbar from "../components/Navbar";
import LogOutButton from "../components/users/LogOutButton";

const UserProfile = props => {
  return (
    <>
      <Navbar />
      <LogOutButton />
      <UserDetails />
    </>
  );
};

export default UserProfile;
