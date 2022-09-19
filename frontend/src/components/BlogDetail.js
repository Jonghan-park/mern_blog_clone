import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, InputLabel, TextField, Button } from "@mui/material";
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const BlogDetail = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  console.log(id);

  const handleChange = async (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myBlogs"));
  };

  const fetchDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/blog/${id}`);
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data.blog);
      setInputs({
        title: data.blog.title,
        desc: data.blog.desc,
      });
    });
  }, [id]);

  const sendRequest = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/blog/update/${id}`,
        {
          title: inputs.title,
          desc: inputs.desc,
        }
      );
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(blog);
  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderColor="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 48%, rgba(0,212,255,1) 100%)"
            borderRadius={10}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin={"auto"}
            marginTop={3}
            display="flex"
            flexDirection={"column"}
            width={"80%"}
          >
            <Typography
              fontWeight={"bold"}
              padding={3}
              color="grey"
              variant="h2"
              textAlign={"center"}
            >
              Post Your Blog
            </Typography>
            <InputLabel sx={labelStyles}>Title</InputLabel>
            <TextField
              name="title"
              onChange={handleChange}
              value={inputs.title}
              margin="normal"
              variant="outlined"
            />
            <InputLabel sx={labelStyles}>Description</InputLabel>
            <TextField
              name="desc"
              onChange={handleChange}
              value={inputs.desc}
              margin="normal"
              variant="outlined"
            />

            <Button
              sx={{ mt: 2, borderRadius: 4 }}
              variant="contained"
              color="warning"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BlogDetail;
