import React from "react";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Bar = () => {
  return (
    <>
      <Box mb={4}>
        <AppBar position="static">
          <Toolbar>
              <Box mr={2}>
                  <ChatBubbleIcon fontSize="large" />
              </Box>
            <Typography variant="h6">THOSE Chat App</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Bar;
