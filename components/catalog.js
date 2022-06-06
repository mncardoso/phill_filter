import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/catalog.module.css";

let Catalog = ({ data, type, sizes, style, color, price, page }) => {
	let router = useRouter();
	let pageData = [];
	let pageOutput = [];
	let pageCurrent = parseInt(page);
	let itemsPerPage = 25;

	data.map((data) => {
		let typeCheck = type === "all" ? true : data.nameSplit.includes(type);
		let sizeCheck = sizes === "all" ? true : data.sizes === parseFloat(sizes);
		let styleCheck =
			style.toLowerCase() === "all"
				? true
				: style.toLowerCase() === "non-leather"
				? !data.nameSplit.includes("leather")
				: data.nameSplit.includes(style.toLowerCase());

		let colorValues = color.toLowerCase().split("-");
		let colorCheck = colorValues.includes("all")
			? true
			: data.nameSplit.some((x) => colorValues.includes(x));
		let priceMin =
			parseFloat(price.min) === 0 ? true : data.price >= parseFloat(price.min);
		let priceMax =
			parseFloat(price.max) === 0 ? true : data.price <= parseFloat(price.max);

		if (
			typeCheck &&
			sizeCheck &&
			styleCheck &&
			colorCheck &&
			priceMin &&
			priceMax
		) {
			pageData.push({ name: data.name, price: data.price, image: data.image });
		}
	});

	pageOutput = pageData.slice(
		pageCurrent * itemsPerPage - itemsPerPage,
		pageCurrent * itemsPerPage > pageData.length
			? pageData.length
			: pageCurrent * itemsPerPage
	);

	let changePage = (val) => {
		if (
			pageCurrent + val > pageData.length / itemsPerPage ||
			pageCurrent + val < 1
		) {
			return pageCurrent;
		} else {
			return pageCurrent + val;
		}
	};

	return (
		<>
			<div className={styles.container} id="containe">
				{pageOutput.map((data) => {
					return (
						<div key={data.id}>
							<img src={data.image} />
							<div className={styles.item_data}>
								<p>{data.name}</p>
								<p>€{data.price}</p>
							</div>
						</div>
					);
				})}
			</div>
			{pageData.length > itemsPerPage ? (
				<div className={styles.page_changer}>
					<Link
						href={{ query: { ...router.query, page: changePage(-1) } }}
						passHref
						scroll={true}
						replace
					>
						<a>{"<"}</a>
					</Link>
					<p>{pageCurrent}</p>
					<Link
						href={{ query: { ...router.query, page: changePage(+1) } }}
						passHref
						scroll={true}
						replace
					>
						<a>{">"}</a>
					</Link>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Catalog;
