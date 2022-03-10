import React from "react";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Bar = () => {
  return (
    <>
      <Box mb={4}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">THOSE Chat App</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Bar;
