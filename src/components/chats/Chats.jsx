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
import { ChatMessageDto } from "../../model/ChatMessageDto";

const Chats = () => {
  const [chatMessages, setChatMessages] = useState([
      new ChatMessageDto("John", "Hi")
  ]);
  const listChatMessages = chatMessages.map((chatMessageDto, index) => (
    <ListItem key={index}>
      <ListItemText
        primary={`${chatMessageDto.user} : ${chatMessageDto.message}`}
      />
    </ListItem>
  ));
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
              <Grid id="chat__window" item>
                <List id="chat__window__message">
                    {listChatMessages}
                </List>
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
