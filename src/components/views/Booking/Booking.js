import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

const Booking = props => (

  <div className={styles.component}>
    <h2>Booking View</h2>
    {props.match.params.id}
  </div>
);

export default Booking;

Booking.propTypes = {
  match: PropTypes.object,
};
