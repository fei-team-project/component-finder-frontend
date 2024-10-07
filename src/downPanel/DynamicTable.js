import * as React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export default function DynamicTable(props) {

    const handleClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        { props.table.header != null && props.table.header.length > 0 && props.table.header.map((column) => {
                            return <TableCell style={{
                                backgroundColor: '#DC8037',
                                color: 'white',
                                fontWeight: 'bold'
                            }}>{column}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    { props.table.components != null && props.table.components.length > 0 && props.table.components.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            {Object.keys(row).map((key, index) => {
                                if (key === 'datasheet' && row[key].startsWith('https')) {
                                    return (
                                        <TableCell key={index}>
                                            <LinkIcon style={{cursor: 'pointer'}}
                                                      onClick={() => handleClick(row[key])}/>
                                        </TableCell>
                                    );
                                } else if (row[key]===true) {
                                    return (
                                        <TableCell key={index}>
                                           <CheckCircleOutlineIcon style={{color:'#16b841'}}/>
                                        </TableCell>
                                    );
                                }
                                else if (row[key]===false) {
                                    return (
                                        <TableCell key={index}>
                                            <CancelOutlinedIcon  style={{color:'#ad251d'}}  />
                                        </TableCell>
                                    );
                                }
                                else if (row[key]===null) {
                                    return (
                                        <TableCell key={index}>
                                            -
                                        </TableCell>
                                    );
                                }
                                else if ( key === 'id' || key==='attributesAsString' || key === 'columns') {
                                    return
                                }else if ( key === 'decsription') {
                                    return <TableCell key={index} style={{ width: 400 }}>{row[key]}</TableCell>;
                                }
                                else {
                                    return <TableCell key={index}>{row[key]}</TableCell>;
                                }
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}