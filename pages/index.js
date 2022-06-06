import { useState, useEffect, useDebugValue } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import styles from "../styles/home.module.css";
import Catalog from "../components/catalog";
import { Menu } from "../components/layout/menu";
import { MenuFilter } from "../components/layout/menuFilter";

import { getData } from "../components/constructor/getData";
import { parseData } from "../components/constructor/parseData";
import { uniqueData } from "../components/constructor/uniqueData";

export default function Home() {
	let router = useRouter();
	let data = getData();
	let dataParsed = data ? parseData(data) : null;
	let dataUnique = dataParsed ? uniqueData(dataParsed) : null;

	let getPriceRange = () => {
		let [priceMin, setPriceMin] = useState(0);
		router.query.priceMin = router.query.priceMin
			? (router.query.priceMin, setPriceMin(router.query.priceMin))
			: priceMin;
		useEffect(() => {
			if (router.query.priceMin !== priceMin) {
				setPriceMin(router.query.priceMin), (router.query.page = 1);
			}
		}, [router.query.priceMin]);
		let [priceMax, setPriceMax] = useState(0);
		router.query.priceMax = router.query.priceMax
			? (router.query.priceMax, setPriceMax(router.query.priceMax))
			: priceMax;
		useEffect(() => {
			if (router.query.priceMax !== priceMax) {
				setPriceMax(router.query.priceMax), (router.query.page = 1);
			}
		}, [router.query.priceMax]);
		useDebugValue({ min: priceMin, max: priceMax });
		return { min: priceMin, max: priceMax };
	};
	let price = getPriceRange();

	let getColor = () => {
		let [colorsSelect, setColorsSelect] = useState("all");
		router.query.colors = router.query.colors
			? router.query.colors
			: colorsSelect;
		router.query.colors !== colorsSelect &&
			(setColorsSelect(router.query.colors), (router.query.page = 1)),
			[router.query.colors];
		useDebugValue(colorsSelect);
		return colorsSelect;
	};
	let color = getColor();

	let getSize = () => {
		let [sizeSelect, setSizeSelect] = useState("all");
		router.query.size = router.query.size ? router.query.size : sizeSelect;
		router.query.size !== sizeSelect &&
			(setSizeSelect(router.query.size), (router.query.page = 1)),
			[router.query.size];
		useDebugValue(sizeSelect);
		return sizeSelect;
	};
	let size = getSize();

	let getMaterial = () => {
		let [materialSelect, setMaterialSelect] = useState("all");
		router.query.material = router.query.material
			? router.query.material
			: materialSelect;
		router.query.material !== materialSelect &&
			(setMaterialSelect(router.query.material), (router.query.page = 1)),
			[router.query.material];
		useDebugValue(materialSelect);
		return materialSelect;
	};
	let material = getMaterial();

	let getKind = () => {
		let [kindSelect, setKindSelect] = useState("all");
		router.query.kind = router.query.kind ? router.query.kind : kindSelect;
		router.query.kind !== kindSelect &&
			(setKindSelect(router.query.kind), (router.query.page = 1)),
			[router.query.kind];
		useDebugValue(kindSelect);
		return kindSelect;
	};
	let kind = getKind();

	let getPage = () => {
		let [page, setPage] = useState(1);
		router.query.page = router.query.page ? router.query.page : page;
		router.query.page !== page && setPage(router.query.page),
			[router.query.page];
		useDebugValue(page);
		return page;
	};
	let page = getPage();

	let [filterState, setFilterState] = useState(false);
	if (typeof window !== "undefined") {
		if (document.getElementById("filter") !== null) {
			document.getElementById("filter").addEventListener("click", () => {
				setFilterState(!filterState);
			});
		}
		if (document.getElementById("filterClose") !== null) {
			document.getElementById("filterClose").addEventListener("click", () => {
				setFilterState(!filterState);
			});
		}
	}

	return (
		<>
			<Head>
				<title>
					Miista | Designed in London | Handcrafted in Spain&lrm; | The Opposite
					Thing
				</title>
				<meta
					name="description"
					content="Miista represents fashion-forward footwear. Shop our new handcrafted collection for AW21. Shop online or visit us at our stores in Paris, Barcelona and London. "
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className={styles.catalog}>
				{dataUnique ? <Menu data={dataUnique} /> : <></>}
				{filterState ? <MenuFilter data={dataUnique} /> : <></>}
				{dataParsed ? (
					<Catalog
						data={dataParsed}
						type={kind}
						sizes={size}
						style={material}
						color={color}
						price={price}
						page={page}
					/>
				) : (
					<></>
				)}
			</div>
			<Footer />
		</>
	);
}
