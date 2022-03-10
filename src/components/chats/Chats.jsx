import {
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ChatMessageDto } from "../../model/ChatMessageDto";
import SendIcon from "@mui/icons-material/Send";

import "./Chats.css";

const Chats = () => {
  const [chatMessages, setChatMessages] = useState([
    new ChatMessageDto("John", "Hi"),
  ]);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
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
              <Grid id="chat__window" xs={12} item>
                <List id="chat__window__message">{listChatMessages}</List>
              </Grid>
              <Grid xs={2} item>
                <FormControl fullWidth>
                  <TextField value={user} label="Nickname" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid xs={9} item>
                <FormControl fullWidth>
                  <TextField
                    value={message}
                    label="Nickname"
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid xs={1} item>
                <IconButton>
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Chats;
