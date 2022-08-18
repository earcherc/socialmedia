import Link from "next/link";

const Counter = () => {
	return (
		<div>
			<h1>Index Page</h1>
			<br />
			<nav>
				<Link href="/other">
					<a>Navigate to /other</a>
				</Link>
			</nav>
		</div>
	);
};
export default Counter;
