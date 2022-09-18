import axios from "axios";
import React, { useEffect } from "react";

const UserBlogs = () => {
  const id = localStorage.getItem("userId");

  const sendRequest = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`);
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return <div>UserBlogs</div>;
};

export default UserBlogs;
