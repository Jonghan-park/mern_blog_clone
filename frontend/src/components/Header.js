import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 48%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        <Box display="flex" marginLeft="auto">
          <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            SignUp
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
