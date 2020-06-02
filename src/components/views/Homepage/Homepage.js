import React from 'react';
import styles from './Homepage.module.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const Homepage = () => (
  <Paper className={styles.component}>
    <Table className={styles.margin}>
      <TableHead>
        <TableRow>
          <TableCell colSpan={3} align='center'>Completed Orders </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align='center'>Type</TableCell>
          <TableCell align='center'>Amount</TableCell>
          <TableCell align='center'>Profit</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align='center'>Restaurant orders </TableCell>
          <TableCell align='center'>25</TableCell>
          <TableCell align='center'>$123.45</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align='center'>Delivered orders</TableCell>
          <TableCell align='center'>82</TableCell>
          <TableCell align='center'>$543.21</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3} align='center'>
            <Button className={styles.button} size='small'>See details</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2} align='center'>Events and reservations</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align='center'>Events</TableCell>
          <TableCell align='center'>Reservation</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align='center'>2</TableCell>
          <TableCell align='center'>4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3} align='center'>
            <Button className={styles.button} size='small'>See details</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

  </Paper>
);

export default Homepage;
