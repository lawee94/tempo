import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "components/Dashboard/Dashboard";
import { fetchUserData } from "storage/sessionStorage";

const ProtectedApp = () => {
	const [currentId, setCurrentId] = useState<string | "">("");

	useEffect(() => {
		const { id } = fetchUserData();
		setCurrentId(id);
	}, []);

	if (currentId === undefined) return <Navigate to="/login" />;

	return <Dashboard />;
};

export default ProtectedApp;
