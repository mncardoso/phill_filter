export let uniqueData = (data) => {
	let dataSeparate = { color: [], category: [], tags: [], sizes: [] };
	for (let i = 34; i <= 42; i++) {
		dataSeparate.sizes.push(i);
	}
	data.map((item) => {
		// --- colors ---
		if (dataSeparate.color[item.color] === undefined) {
			if (item.color !== "No Color") {
				dataSeparate.color.push(item.color);
			}
		}
		// --- categories ---
		if (dataSeparate.category[item.nameSplit.slice(-1)[0]] === undefined) {
			dataSeparate.category.push(item.nameSplit.slice(-1)[0]);
		}
		// --- tags ---
		if (item.tags !== null) {
			item.tags.map((tag) => {
				if (dataSeparate.tags[tag] === undefined) {
					dataSeparate.tags.push(tag);
				}
			});
		}
	});

	let uniqueData = {
		color: [...new Set(dataSeparate.color)],
		category: [...new Set(dataSeparate.category)],
		tags: [...new Set(dataSeparate.tags)],
		sizes: [...new Set(dataSeparate.sizes)],
	};

	return uniqueData;
};
