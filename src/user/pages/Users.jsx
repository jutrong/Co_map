import React from "react";
import UsersList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u5",
      name: "jutrong",
      image:
        "https://express-images.franklymedia.com/6616/sites/380/2021/01/08114610/the-rock-youtube.jpg",
      places: 3,
    },
  ];
  return <UsersList />;
};

export default Users;
