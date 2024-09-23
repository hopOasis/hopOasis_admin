export const getImagesUrl = (
	imagesName: string[],
	url: string,
	resource: string,
): string[] => {
	if (!Array.isArray(imagesName)) {
			console.error("Expected an array of image names, but received:", imagesName);
			return []; 
	}
	return imagesName.map((image) => `${url}/${resource}/images/${image}`);
};