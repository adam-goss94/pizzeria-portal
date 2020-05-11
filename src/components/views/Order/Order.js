import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = props => (
  <div className={styles.component}>
    <h2>Order View</h2>
    {props.match.params.id}
  </div>
);

export default Order;

Order.propTypes = {
  match: PropTypes.object,
};
