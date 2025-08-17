'use client';

import Link from 'next/link';
import styles from './thank-you.module.css';

export default function ThankYouPage() {
  return (
    <>
      <section className={styles.thankYouSection}>
        <div className="container">
          <div className={styles.thankYouContent}>
            <h1 className={styles.title}>Thank You!</h1>
            <p className={styles.message}>
              Your message has been received. We appreciate you contacting us and 
              we&apos;ll get back to you shortly.
            </p>
            <Link href="/" className="btn btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
