import {Avatar, Box, Paper, Typography} from "@mui/material";
import * as React from "react";
import {LoadingDots} from "./LoadingDots";

export const LoadingDotsMessage = () => {

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-start" ,
                mb: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row" ,
                    alignItems: "center",
                }}
            >
                <Avatar sx={{bgcolor: '#DC8037'}}>
                    {"B"}
                </Avatar>
                <Paper
                    variant="outlined"
                    sx={{
                        p: 2,
                        ml: 1,
                        mr: 0,
                        backgroundColor: '#FFCBA9',
                        borderRadius: "20px 20px 20px 5px",
                    }}
                >
                    <Typography variant="body1">
                        <LoadingDots></LoadingDots></Typography>
                </Paper>
            </Box>
        </Box>
    );
};
