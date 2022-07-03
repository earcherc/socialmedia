/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";

function OtherPage() {
  return (
    <div>
      <h1>Other Page</h1>
      <Link href="/">
        <a>Get back to "/"</a>
      </Link>
    </div>
  );
}

export default OtherPage;
