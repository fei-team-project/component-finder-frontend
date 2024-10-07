import {ChatComponent} from "./ChatComponent";
import {LeftPanel} from "../leftPanel/LeftPanel"
import {Grid} from "@mui/material";
import * as React from "react";
import {DownPanel} from "../downPanel/DownPanel"
import {useState} from "react";

export const ChatWindowWrapper = () => {

    const [response, setResponse] = React.useState(null)
    const [loaded, setLoaded] = React.useState(null);
    const [filterRequest, setFilterRequest]= React.useState(false)
    const [filterChange, setFilterChange]= React.useState("")
    return (

        <Grid container spacing={1} alignItems="flex-start" flexDirection="row">
            <Grid item xs={4}>
                <LeftPanel loaded={loaded} filters={response} setResponse={setResponse} setFilterRequest={setFilterRequest} setFilterChange={setFilterChange}></LeftPanel>
            </Grid>
            <Grid item xs={8}>
                <ChatComponent setResponse={setResponse} response={response} setLoaded={setLoaded} setFilterRequest={setFilterRequest} filterRequest={filterRequest} filterChange={filterChange}></ChatComponent>
            </Grid>
            <Grid item xs={12}>
                <DownPanel response={response} loaded={loaded} ></DownPanel>
            </Grid>
        </Grid>)

}