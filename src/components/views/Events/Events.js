import React from 'react';
import PropTypes from 'prop-types';
import styles from './Events.module.scss';

const Events = props => (
  <div className={styles.component}>
    <h2>Events View</h2>
    {props.match.params.id}
  </div>
);

export default Events;

Events.propTypes = {
  match: PropTypes.object,
};
