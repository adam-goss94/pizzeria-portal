import React from 'react';
import styles from './Events.module.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Events = () => (
  <Card>
    <CardContent align="center">
      <Typography color="textPrimary" gutterBottom>
        Event details

      </Typography>
      <Typography color="textSecondary" gutterBottom>Jan Kowalski</Typography>
      <Typography color="textSecondary" gutterBottom>Phone: 000-000-000</Typography>
      <Table className={styles.margin}>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography color="textPrimary" gutterBottom>Table no.</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textPrimary" gutterBottom>Date</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textPrimary" gutterBottom>Number of people</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textPrimary" gutterBottom>Orders</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              <Typography color="textSecondary" gutterBottom>1</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textSecondary" gutterBottom>04.06.2020</Typography>
              <Typography color="textSecondary" gutterBottom>15:00-17:00</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textSecondary" gutterBottom>7</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textSecondary" gutterBottom>3x Lorem ipsum</Typography>
              <Typography color="textSecondary" gutterBottom>7x Lorem ipsum</Typography>
              <Typography color="textSecondary" gutterBottom>4x Lorem ipsum</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography  color="textPrimary">
        Additional information
      </Typography>
      <Typography variant="body2" component="p">
        Child birthday
      </Typography>
      <CardActions >
        <Button className={styles.button} size="small" variant='contained'>Edit event<EditIcon /></Button>
      </CardActions>
    </CardContent>
  </Card>
);

export default Events;
