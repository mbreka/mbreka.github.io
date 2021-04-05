import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  row: {
    '&>*':{
      padding: '0.5rem 0.5rem 0.5rem 0',
    }
  }
});

export default function InfoTable(props) {
  const classes = useStyles();
  const rows = props.rows;
  return (
    <TableContainer>

      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.row}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}