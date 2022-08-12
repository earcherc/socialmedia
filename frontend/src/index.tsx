/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from "next/head";
import Link from "next/link";
import UserInfo from "./components/UserInfo";

const Counter = () => (
  <>
    <Head>
      <title>Index</title>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <div>
      <h1>Index Page</h1>
      <UserInfo />
      <br />
      <nav>
        <Link href="/other">
          <a>Navigate to "/other"</a>
        </Link>
      </nav>
    </div>
  </>
);
export default Counter;
