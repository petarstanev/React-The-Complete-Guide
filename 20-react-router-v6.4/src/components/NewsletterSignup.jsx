import { useRef } from "react";
import { useFetcher } from "react-router-dom";
import classes from './NewsletterSignup.module.css'

function NewsletterSignup() {
  const emailEl = useRef();
  const fetcher = useFetcher();

  return (
    <section className={classes.newsletter}>
      <h2>Sign up for our weekly newsletter</h2>
      <fetcher.Form method="post" action="/newsletter">
        <input
          ref={emailEl}
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          aria-label="Your email address."
        />
        <button>Sign Up</button>
      </fetcher.Form>
    </section>
  );
}

export default NewsletterSignup;
