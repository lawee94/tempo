import { Routes, Route, Navigate } from "react-router-dom";

import Login from "components/Authentication/Login/Login";
import AllTeams from "components/Dashboard/AllTeams/AllTeams";
import Team from "components/Dashboard/Team/Team";
import User from "components/Dashboard/User/User";
import ProtectedApp from "components/ProtectedApp/ProtectedApp";

const App = () => {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route element={<ProtectedApp />}>
				<Route path="teams" element={<AllTeams />} />
				<Route path="profile" element={<User />} />
				<Route path="teams/:id" element={<Team />} />
				<Route path="*" element={<Navigate to="/teams" />} />
			</Route>
		</Routes>
	);
};

export default App;
