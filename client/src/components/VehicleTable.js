import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const VehicleTable = () => {
  const rows = [
    { id: 111111111111 },
    { id: 222222222222 },
    { id: 333333333333 },
    { id: 444444444444 },
    { id: 555555555555 },
    { id: 666666666666 },
    { id: 777777777777 },
    { id: 888888888888 },
    { id: 999999999999 },
    { id: 211111111111 },
    { id: 233333333333 },
    { id: 244444444444 },
  ];

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Vehicle ID</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ backgroundColor: "#2196F3" }}
                >
                  View Timeline
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VehicleTable;
