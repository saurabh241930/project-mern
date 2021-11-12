import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';




const CategoryList = ({ dataToRender }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Quality Name</TableCell>
                        <TableCell>Basic material</TableCell>
                        <TableCell>Marble Qty</TableCell>
                        <TableCell>Colors Present</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataToRender.map((data) => (
                        <TableRow
                            key={data._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell > <Avatar
                                variant="square"
                                alt={data._id}
                                src={data.image}
                                sx={{ width: 60, height: 60 }}
                            /></TableCell>
                            <TableCell >{data.qualityName}</TableCell>
                            <TableCell >{data.basicMaterial}</TableCell>
                            <TableCell >{data.quantity}</TableCell>
                            <TableCell >{data.colors}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default CategoryList;