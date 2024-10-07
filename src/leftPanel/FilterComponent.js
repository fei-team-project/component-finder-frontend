import {Checkbox, TableCell, TableRow, TextField} from "@mui/material";
import "./checkboxStyle.css"
import * as React from "react";

export const FilterComponent = (props) => {
    const [value, setValue] = React.useState("");
    React.useEffect(() => {
        setValue(props.filter.value)
    }, [])

    return (

        <TableRow
            key={props.id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell component="th" scope="row">
                <Checkbox defaultChecked sx={{
                    '&.Mui-checked': {
                        color: '#DC8037',
                    },
                }}
                          onChange={(event) => {
                              props.filter.checked = event.target.checked

                          }}
                />
            </TableCell>
            <TableCell align="left" width="45%">{props.filter.name} {props.filter.range}</TableCell>
            <TableCell align="left" width="45%"><TextField id="outlined-basic" label="Filter value" variant="outlined"
                                                           value={value}
                                                           onChange={(e) => {
                                                               props.filter.value = e.target.value
                                                               setValue(e.target.value)
                                                           }}/></TableCell>

        </TableRow>

    )

}
