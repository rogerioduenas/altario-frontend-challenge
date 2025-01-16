import React, { useState } from 'react';
import styles from './style.module.scss';

function EmailForm() {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.emailSubscription}>
      <div>
        <p className={styles['emailSubscription__title']}>
          Email
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles['emailSubscription__input']}
          placeholder="your@email.com"
        />
      </div>
      <button
        className={styles['emailSubscription__button']}
        onClick={() => setEmail('')}
      >
        Start Tracking
      </button>
    </div>
  );
}

export default EmailForm;
