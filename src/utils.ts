export const getImagesUrl = (
	imagesName: string[],
	url: string,
	resource: string,
) => {
	return imagesName.map((image) => `${url}/${resource}/images/${image}`);
};
