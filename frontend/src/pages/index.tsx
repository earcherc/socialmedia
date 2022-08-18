import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { increment } from "../store/features/counter";

const Counter = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	function handleClick() {
		dispatch(increment());
	}

	return (
		<div>
			<h1>Index Page</h1>
			<br />
			<nav>
				<Link href="/other">
					<a>Navigate to /other</a>
				</Link>
			</nav>
			<p>Count: {count}</p>
			<button onClick={handleClick}>Increment</button>
		</div>
	);
};
export default Counter;
