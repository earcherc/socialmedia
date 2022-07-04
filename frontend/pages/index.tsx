/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import UserInfo from "../components/UserInfo";

function Counter() {
  return (
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
  );
}
export default Counter;
