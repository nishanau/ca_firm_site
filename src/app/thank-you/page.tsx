'use client';

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <>
      <section className="thank-you-section">
        <div className="container">
          <div className="thank-you-content">
            <h1 className="title">Thank You!</h1>
            <p className="message">
              Your message has been received. We appreciate you contacting us and 
              we&apos;ll get back to you shortly.
            </p>
            <Link href="/" className="btn btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .thank-you-section {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 200px);
          padding: 4rem 0;
        }
        
        .thank-you-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          padding: 3rem;
          background: linear-gradient(180deg, var(--panel), var(--panelAlt));
          border: 1px solid var(--border);
          border-radius: 14px;
        }
        
        .title {
          font-size: 2.5rem;
          color: var(--brand);
          margin-bottom: 1.5rem;
        }
        
        .message {
          font-size: 1.2rem;
          color: var(--muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
