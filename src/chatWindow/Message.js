import {Avatar, Box, Paper, Typography} from "@mui/material";
import * as React from "react";


export const Message = ({message}) => {
    const isBot = message.sender === "bot";

    return (

            <Box
                sx={{
                    display: "flex",
                    justifyContent: isBot ? "flex-start" : "flex-end",
                    mb: 2,
                    overflowWrap: 'break-word',
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isBot ? "row" : "row-reverse",
                        alignItems: "center",
                        overflowWrap: 'break-word',

                    }}
                >
                    <Avatar sx={{bgcolor: isBot ? '#DC8037' : '#374C53'}}>
                        {isBot ? "B" : "U"}
                    </Avatar>
                    <Paper
                        variant="outlined"
                        sx={{
                            p: 2,
                            ml: isBot ? 1 : 0,
                            mr: isBot ? 0 : 1,
                            textAlign: 'left',
                            backgroundColor: isBot ? '#FFCBA9' : '#C2CACD',
                            borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
                        }}
                    >
                        <Typography variant="body1" >{message.text}</Typography>
                    </Paper>
                </Box>
            </Box>

    );
};
