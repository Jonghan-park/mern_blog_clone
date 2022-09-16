import React, { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blog");
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  return <div>Blogs</div>;
};

export default Blogs;
