import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MarblesList = ({ dataToRender }) => {
  console.log(dataToRender);
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Storage Location</StyledTableCell>
            <StyledTableCell>Block batch no.</StyledTableCell>
            <StyledTableCell>Angle</StyledTableCell>
            <StyledTableCell>Color</StyledTableCell>
            <StyledTableCell>Material</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Add to Cart</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {dataToRender.map((data) => (
            <TableRow
              key={data._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell>
                {" "}
                <Avatar
                  variant="square"
                  alt={data._id}
                  src={data.image}
                  sx={{ width: 60, height: 60 }}
                />
              </StyledTableCell>
              <StyledTableCell>{data.storageLocation}</StyledTableCell>
              <StyledTableCell>{data.blockBatchNo}</StyledTableCell>
              <StyledTableCell>{data.angle}</StyledTableCell>
              <StyledTableCell>
                <span
                  style={{
                    backgroundColor: `${data.color}`,
                    color: `${data.color}`,
                  }}
                >
                  color
                </span>
              </StyledTableCell>
              <StyledTableCell>{data.material}</StyledTableCell>
              <StyledTableCell>
                <span style={{ color: "red" }}>sold</span>
              </StyledTableCell>
              <StyledTableCell>
                <IconButton
                  variant="outlined"
                  size="small"
                >
                  <AddIcon />{" "}
                </IconButton>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MarblesList;
