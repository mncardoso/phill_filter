import styles from "../../styles/layout/menuFilter.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export let MenuFilter = (data) => {
	let router = useRouter();

	let changeColorState = (color) => {
		let current = router.query.colors.split("-");
		if (current[0] === "all") {
			return color;
		} else {
			current.includes(color)
				? current.splice(current.indexOf(color), 1)
				: current.push(color);
			if (current.length === 0) {
				return "all";
			} else {
				return current.join("-");
			}
		}
	};
	return (
		<div className={styles.menu} id="filter_menu">
			<div className={styles.options}>
				<Link
					href={{
						query: {
							...router.query,
							kind: "all",
							priceMin: 0,
							priceMax: 0,
							colors: "all",
							size: "all",
							material: "all",
						},
					}}
					passHref
					scroll={false}
					replace
				>
					<a>Clear filter</a>
				</Link>
				<a id="filterClose">X</a>
			</div>
			<div>
				<p>Colour</p>
				<ul>
					{data.data.color.map((color) => (
						<li key={color.id}>
							<Link
								href={{
									url: router.pathname,
									query: {
										...router.query,
										colors: changeColorState(color),
									},
								}}
								passHref
								scroll={false}
								replace
							>
								<dfn title={color}>
									<a
										className={styles.color}
										onClick={() => {
											changeColorState(color);
										}}
										style={{
											backgroundColor: color === "Natural" ? "#B3814D" : color,
											outline: "1px solid lightgray",
										}}
									/>
								</dfn>
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div>
				<p>SIZE</p>
				<ul>
					<li>
						<Link
							href={{
								query: { ...router.query, size: "all" },
							}}
							passHref
							scroll={false}
							replace
						>
							<a>All</a>
						</Link>
					</li>
					{data.data.sizes.map((size) => (
						<li key={size.id}>
							<Link
								href={{
									query: { ...router.query, size: size },
								}}
								passHref
								scroll={false}
								replace
							>
								<a>{size}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div>
				<p>Style</p>
				<ul>
					<li>
						<Link
							href={{
								query: { ...router.query, material: "all" },
							}}
							passHref
							scroll={false}
							replace
						>
							<a>All</a>
						</Link>
					</li>
					<li>
						<Link
							href={{
								query: { ...router.query, material: "Leather" },
							}}
							passHref
							scroll={false}
							replace
						>
							<a>Leather</a>
						</Link>
					</li>
					<li>
						<Link
							href={{
								query: { ...router.query, material: "Non-leather" },
							}}
							passHref
							scroll={false}
							replace
						>
							<a>Non-leather</a>
						</Link>
					</li>
					<li>
						<Link
							href={{
								query: { ...router.query, material: "Nubuck" },
							}}
							passHref
							scroll={false}
							replace
						>
							<a>Nubuck</a>
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<p>Price</p>
				<ul>
					<li>
						<Link
							href={{
								query: { ...router.query, priceMin: "0", priceMax: "0" },
							}}
							passHref
							scroll={false}
							replace
						>
							<a>all</a>
						</Link>
					</li>
					<li>
						<Link
							href={{ query: { ...router.query, priceMin: 0, priceMax: 100 } }}
							passHref
							scroll={false}
							replace
						>
							<a>€0 - €100</a>
						</Link>
					</li>
					<li>
						<Link
							href={{
								query: { ...router.query, priceMin: 100, priceMax: 200 },
							}}
							passHref
							scroll={false}
							replace
						>
							<a>€100 - €200</a>
						</Link>
					</li>
					<li>
						<Link
							href={{
								query: { ...router.query, priceMin: 200, priceMax: 300 },
							}}
							passHref
							scroll={false}
							replace
						>
							<a>€200 - €300</a>
						</Link>
					</li>
					<li>
						<Link
							href={{
								query: { ...router.query, priceMin: 300, priceMax: 400 },
							}}
							passHref
							scroll={false}
							replace
						>
							<a>€300 - €400</a>
						</Link>
					</li>
					<li>
						<Link
							href={{
								query: { ...router.query, priceMin: 400, priceMax: 0 },
							}}
							passHref
							scroll={false}
							replace
						>
							<a>€400 +</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
