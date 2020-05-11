import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <nav>
      <Link to={process.env.PUBLIC_URL + '/tables/booking/123'}>
          Booking with ID 123
      </Link>
      <Link to={process.env.PUBLIC_URL + '/tables/booking/new'}>
          New booking
      </Link>

      <Link to={process.env.PUBLIC_URL + '/tables/events/abcd1234'}>
          Event with ID abcd1234
      </Link>
      <Link to={process.env.PUBLIC_URL + '/tables/events/new'}>
          New event
      </Link>

    </nav>
  </div>
);

export default Tables;
