import {Button, Grid, Paper, Table, TableBody, TableContainer, TableHead} from "@mui/material";
import * as React from "react";
import {FilterComponent} from "./FilterComponent"
import {useState} from "react";

const url = process.env.REACT_APP_API_URL;
export const FiltersWrapper = (props) => {
    const sendFilters = () => {
        if (props.filters.attributes.length > 0) {
            let tempString = "I want the attributes for " + props.filters.component + " to be set like "
            props.filters.attributes.map((attr) => {
                tempString = tempString + attr.name + " = " + attr.range + " " + attr.value + " and "
            })
            props.setFilterChang(tempString)
        }else{
            props.setFilterChang("")
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(props.filters)
        };
        fetch(`${url}/gpt/request/update`, requestOptions)
            .then(async (response) => {
                const res = await response.json();

                res.attributes.forEach(att => att.checked = true)
                props.setResponse(res)
            }).then(() => {
            props.setFilterRequest(true)
        }).catch(function (error) {

        });
    }


    return (
        <>
            <Paper
                variant="outlined"
                sx={{
                    p: 2,
                    ml: 1,
                    mr: 1,
                    mt: 1,
                    height: "80%",
                    overflow: "auto",
                    backgroundColor: '#FFFFFF',
                    borderRadius: "5px 5px 5px 5px",
                }}
            >

                <TableContainer component={Paper}>
                    <Table width="auto" responsive aria-label="simple table">
                        <TableHead>
                        </TableHead>
                        <TableBody>
                            {props.filters.attributes != null && props.filters.attributes.length > 0 ? props.filters.attributes.map((filter) => (
                                <Grid item xs={12}>
                                    <FilterComponent filter={filter}></FilterComponent>
                                </Grid>
                            )) : <></>}


                        </TableBody>
                    </Table>
                </TableContainer>
                <Button onClick={() => {
                    console.log(props.filters)
                    props.filters.attributes = props.filters.attributes.filter(att => att.checked === true)
                    sendFilters()
                }}>SEARCH</Button>
            </Paper>


        </>

    )
}


/*{props.messeges.length > 0 ? props.messeges.map((message) => (
                    <Grid item xs={12}>
                        <FilterComponent filterText={message.text} filterValue={message.value}></FilterComponent>
                    </Grid>
                )) : <></>}*/
/* <Button onClick={()=>{console.log(selectedRows)}}>PRINT</Button>

                <Box>

                    <DataGrid
                        rows={props.messeges}
                        columns={columns}
                        checkboxSelection
                        onSelectionModelChange={handleSelectionModelChange}
                    />
                </Box>*/


/* {props.messeges.length > 0 ? props.messeges.map((message) => (
                    <Grid item xs={12}>
                        <FilterComponent filterText={message.text} filterValue={message.value}></FilterComponent>
                    </Grid>
                )) : <></>} */