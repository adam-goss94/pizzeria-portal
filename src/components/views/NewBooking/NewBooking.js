import React from 'react';
import styles from './NewBooking.module.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const NewBooking = () => (
  <Card className={styles.component}>
    <CardContent align="center">
      <Typography color="textPrimary" gutterBottom>
        New Reservation
      </Typography>

      <Table className={styles.margin}>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography color="textPrimary" gutterBottom>Date</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textPrimary" gutterBottom>Number of people</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textPrimary" gutterBottom>Table no.</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              <form noValidate>
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </TableCell>
            <TableCell align="center">
              <FormControl>
                <Select>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell align="center">
              <FormControl>
                <Select>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <Typography color="textPrimary" gutterBottom>Costumer details:</Typography>
              <form noValidate autoComplete="off">
                <div>
                  <TextField
                    id="standard-multiline-flexible"
                    label="Name"
                    multiline
                    rowsMax={2}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-multiline-flexible"
                    label="Phone number"
                    multiline
                    rowsMax={2}
                  />
                </div>
              </form>
            </TableCell>
            <TableCell></TableCell>
            <TableCell align="center">
              <form noValidate>
                <TextField
                  id="standard-multiline-static"
                  label="Additional information"
                  multiline
                  rows={4}
                />
              </form>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <CardActions >
        <Button className={styles.button} variant="contained" size="small">Add reservation<AddIcon /></Button>
      </CardActions>
    </CardContent>
  </Card>
);

export default NewBooking;
