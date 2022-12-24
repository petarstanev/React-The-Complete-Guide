import { Fragment } from "react";
import Link from 'next/link';

function NewsPage() {
  return (
    <Fragment>
      <h1>The news page</h1>
      <ul>
        <li><Link href='/news/test'>Next js is great</Link></li>
        <li><Link href='/news/a'>Next js is ok</Link></li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
