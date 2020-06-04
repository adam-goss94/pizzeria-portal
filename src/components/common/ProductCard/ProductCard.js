import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const renderActions = status => {
  switch (status) {
    case 'prepared':
      return null;
    case 'preparing':
      return (
        <Button variant="contained" color="primary">Done</Button>
      );
    case 'ordered':
      return (
        <Button variant="contained" color="primary">Preparing</Button>
      );
    default:
      return null;
  }
};

const ProductCard = products => {
  return products.status !== 'prepared' ?
    <Card className={styles.card}>
      <CardContent>
        <Grid container spacing={4}>

          <Grid item xs={10}>
            <Typography variant='h5'>
              Order ID: <Button component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/${products.order}`}>{products.order}</Button>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant='h5'>{products.table}</Typography>
          </Grid>

          <Grid item xs={10}>
            {products.desc}
          </Grid>
          <Grid item xs={2}>
            {products.amount}
          </Grid>

          <Grid item xs={12} align='center'>
            Status: {products.status}
          </Grid>

          <Grid item xs={12} align='center'>
            {renderActions(products.status)}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    :
    null;
};

ProductCard.propTypes = {
  products: PropTypes.array,
};

export default ProductCard;
