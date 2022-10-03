import { Outlet, useNavigate } from "react-router-dom";
import Layout from "components/Layout/Layout";
import { deleteUserData } from "storage/sessionStorage";

const Dashboard = () => {
	const navigate = useNavigate();

	const logout = () => {
		deleteUserData();
		navigate("/login");
	};

	return (
		<Layout logout={logout}>
			<Outlet />
		</Layout>
	);
};

export default Dashboard;
