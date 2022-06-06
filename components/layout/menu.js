import styles from "../../styles/layout/menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export let Menu = (data) => {
	let router = useRouter();
	return (
		<div className={styles.menu}>
			<div>
				<span> </span>
			</div>
			<div className={styles.categories}>
				<ul>
					<li>
						<Link
							href={{ query: { ...router.query, kind: "all" } }}
							passHref
							scroll={false}
							replace
						>
							<a>all</a>
						</Link>
					</li>
					{data.data.category.map(
						(item) =>
							item !== "" &&
							item !== "consultation" &&
							item !== "bag" && (
								<li key={item.id}>
									<Link
										href={{ query: { ...router.query, kind: item } }}
										passHref
										scroll={false}
										replace
									>
										<a>{item}</a>
									</Link>
								</li>
							)
					)}
					{data.data.category.includes("bag") ? (
						<li>
							<Link
								href={{ query: { ...router.query, kind: "bag" } }}
								passHref
								scroll={false}
								replace
							>
								<a>bags</a>
							</Link>
						</li>
					) : (
						<></>
					)}
				</ul>
			</div>
			<div className={styles.filter}>
				<a id="filter">Filters</a>
			</div>
		</div>
	);
};
