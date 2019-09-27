import React from 'react';

import styles from './Book.module.css';

const Book = function (props) {
  return (
    <div className={styles.book}>
      <div className={styles.title}>
        {props.title}
      </div>
      <div>
        {props.author}
      </div>
    </div>
  )
};

export default Book;