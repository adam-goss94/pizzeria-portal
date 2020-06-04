import React from 'react';
import styles from './Order.module.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const Order = () => (
  <Card>
    <CardContent align='center'>
      <Typography color='textPrimary'>
        Order details
      </Typography>
      <Table className={styles.margin}>
        <TableRow>
          <TableCell align='center'>
            <Typography color='textPrimary'>Table</Typography>
            <Typography color='textSecondary'>2</Typography>
          </TableCell>
          <TableCell align='center'>
            Order
            <Typography color='textSecondary'>Lorem ipsum ipsum lorem</Typography>
          </TableCell>
          <TableCell align='center'>
            Additional information
            <Typography color='textSecondary'>
              Some text with orders additional informations.
            </Typography>
          </TableCell>
          <TableCell align='center'>
            <Typography color='textPrimary' component='p'>
              Amount:
            </Typography>
            <Typography color='textPrimary' component='p'>
              $20.0
            </Typography>
          </TableCell>
        </TableRow>
      </Table>
      <CardActions >
        <Button className={styles.button} size='small'>Edit order<EditIcon /></Button>
      </CardActions>
    </CardContent>
  </Card>
);

export default Order;
