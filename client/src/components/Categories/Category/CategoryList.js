import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


const CategoryList = ({ dataToRender }) => {
    return (
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Image</StyledTableCell>
                        <StyledTableCell>Quality Name</StyledTableCell>
                        <StyledTableCell>Basic material</StyledTableCell>
                        <StyledTableCell>Marble Qty</StyledTableCell>
                        <StyledTableCell>Colors Present</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataToRender.map((data) => (
                        <TableRow
                            key={data._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell > <Avatar
                                variant="square"
                                alt={data._id}
                                src={data.image}
                                sx={{ width: 60, height: 60 }}
                            /></StyledTableCell>
                            <StyledTableCell>{data.qualityName}</StyledTableCell>
                            <StyledTableCell>{data.basicMaterial}</StyledTableCell>
                            <StyledTableCell>{data.quantity}</StyledTableCell>
                            <StyledTableCell>{data.colors}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default CategoryList;