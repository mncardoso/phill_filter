export let parseData = (data) => {
	let parsedData = [];
	data.map((item) => {
		if (item.node.name.toLowerCase() !== "phone consultation") {
			let parsedItem = {
				name: item.node.name.toLowerCase(),
				nameSplit: item.node.name.toLowerCase().split(" "),
				image: item.node.thumbnailImage.file.url,
				price: parseFloat(
					item.node.shopifyProductEu.variants.edges[0].node.price
				),
				tags: item.node.categoryTags === null ? [] : item.node.categoryTags,
				color:
					item.node.colorFamily === null
						? "No Color"
						: item.node.colorFamily[0].name,
				sizes: Math.floor(Math.random() * 9) + 34,
			};
			parsedData.push(parsedItem);
		}
	});
	return parsedData;
};
