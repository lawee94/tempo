export const getErrorMessage = (error: any) => {
	const response = error.response;

	const errorMessage =
		response && response.data
			? response.data.message
			: "Error getting record. Please try again.";

	return errorMessage;
};
