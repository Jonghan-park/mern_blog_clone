import axios from "axios";
import Blog from "./Blog";
import React, { useEffect, useState } from "react";

const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");

  const sendRequest = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`);
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
    console.log(user);
  }, []);
  return (
    <div>
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <Blog
            key={index}
            title={blog.title}
            desc={blog.desc}
            imageURL={blog.image}
            userName={user.name}
            isUser={user}
            id={blog._id}
          />
        ))}
    </div>
  );
};

export default UserBlogs;
