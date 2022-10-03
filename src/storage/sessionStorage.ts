import { TEMPO_USER } from "components/constants";

export const storeUserData = (userData: {}) => {
	try {
		const data = JSON.stringify(userData);
		sessionStorage.setItem(TEMPO_USER, data);
	} catch (error) {
		throw new Error("Session storage permission is needed");
	}
};

export const fetchUserData = () => {
	try {
		let userData = sessionStorage.getItem(TEMPO_USER);
		let newData = userData ? JSON.parse(userData) : {};
		return newData || {};
	} catch (error) {
		throw new Error("Session storage permission is needed");
	}
};

export const deleteUserData = () => {
	try {
		sessionStorage.removeItem(TEMPO_USER);
	} catch (error) {
		throw new Error("Session storage permission is needed");
	}
};
