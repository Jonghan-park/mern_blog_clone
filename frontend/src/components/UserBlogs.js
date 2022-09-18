import axios from "axios";
import Blog from "./Blog";
import React, { useEffect, useState } from "react";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState();
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
    sendRequest().then((data) => setBlogs(data.blogs.blogs));
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            key={index}
            title={blog.title}
            desc={blog.desc}
            imageURL={blog.image}
            userName={blog.user.name}
          />
        ))}
    </div>
  );
};

export default UserBlogs;
