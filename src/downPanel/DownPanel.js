import {Box, Paper, Typography} from "@mui/material";

import * as React from "react";
import DynamicTable from "./DynamicTable";

export const DownPanel = (props) => {

    return (
        <Box
            sx={{
                height: "24vh",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                bgcolor: "grey.200",
                borderRadius: "5px 5px 5px 5px",

            }}
        >
            {(props.loaded) && <DynamicTable table={props.response}></DynamicTable>}


        </Box>
    );
}


/* <Carousel stopAutoplay swipe={true} indicators={true} navButtonsAlwaysVisible={true}
            >


                {
                    messages.map( (image, i) =>  <Box
                        sx={{
                            height: "20px",
                            borderRadius: "5px 5px 5px 5px",
                            display: "flex",
                            width: "20px",
                            bgcolor: "grey.200",
                        }}
                    >       <Typography color="white" fontSize="medium"> {image.text}</Typography>

                    </Box> )
                }
            </Carousel>*/