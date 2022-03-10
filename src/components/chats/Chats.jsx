import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Chats = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const listChatMessages = chatMessages.map((chatMessageDto, index) => {
    <ListItem key={index}>
      <ListItemText
        primary={`${chatMessageDto.user} : ${chatMessageDto.message}`}
      />
    </ListItem>;
  });
  return (
    <>
      <Container>
        <Paper elevation={5}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              THOSE Chat Rooms!
            </Typography>
            <Divider />
            <Grid container spacing={4} alignItems="center">
              <Grid item>
                <List></List>
              </Grid>
              <Grid item></Grid>
              <Grid item></Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Chats;
