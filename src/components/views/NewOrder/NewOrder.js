import React from 'react';
import styles from './NewOrder.module.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const NewOrder = () => (
  <Card>
    <CardContent align='center'>
      <Typography color='textPrimary' gutterBottom>
        New Order
      </Typography>
      <Table className={styles.margin}>
        <TableRow>
          <TableCell align='center'>
            <Typography color='textPrimary'>Table</Typography>
            <Select>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </TableCell>

          <TableCell align='center'>
            <form noValidate>
              <TextField
                id='standard-multiline-static'
                label='Add dish'
                multiline
                rows={4}
              />
            </form>
          </TableCell>
          <TableCell align='center'>
            <form noValidate>
              <TextField
                id='standard-multiline-static'
                label='Additional information'
                multiline
                rows={4}
              />
            </form>
          </TableCell>
          <TableCell align='center'>
            <Typography color='textPrimary' variant='body2' component='p'>
              Total amount:
            </Typography>
            <Typography color='textPrimary' variant='body2' component='p'>
              $0.0
            </Typography>
          </TableCell>
        </TableRow>
      </Table>
      <CardActions >
        <Button className={styles.btn} size='small'>Add order</Button>
      </CardActions>

    </CardContent>
  </Card>
);

export default NewOrder;
