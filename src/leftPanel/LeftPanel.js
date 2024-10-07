import {Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import {FiltersWrapper} from "./FiltersWrapper";
import * as React from "react";
import {useState} from "react";


export const LeftPanel = (props) => {

    return (
        <Box
            sx={{
                height: "74vh",
                borderRadius: "5px 5px 5px 5px",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                bgcolor: "grey.200",
            }}
        >

            <Paper
                variant="outlined"
                sx={{
                    p: 2,
                    ml: 1,
                    mr: 1,
                    mt: 1,

                    backgroundColor: '#DC8037',
                    borderRadius: "5px 5px 5px 5px",
                }}
            >
                <Typography variant="body1" color="white" fontSize="medium">According to the query I found these filter
                    criteria...</Typography>
            </Paper>

            {props.loaded && <FiltersWrapper filters={props.filters} setFilterChang={props.setFilterChange} setResponse={props.setResponse} setFilterRequest={props.setFilterRequest}></FiltersWrapper>}

        </Box>
    );
}