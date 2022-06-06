import { useState, useEffect, useDebugValue } from "react";
import axios from "axios";

let dataUrl = "/data/miista-export.json";

export let GetData = () => {
	let [data, setData] = useState();

	useEffect(() => {
		axios
			.get(dataUrl)
			.then((res) => {
				setData(res.data.data.allContentfulProductPage.edges);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// useDebugValue(data ? "data" : "no data");

	return data;
};
