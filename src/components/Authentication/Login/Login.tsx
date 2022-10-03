import { ChangeEvent, useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "components/Layout/Layout";
import { ReactComponent as Close } from "assets/close.svg";
import { EM_ID, teamResponse, USER } from "components/constants";
import { fetchUserData, storeUserData } from "storage/sessionStorage";
import CustomSpinner from "utils/Spinner/Spinner";
import { getErrorMessage } from "utils/helpers";

const { ENGINEERING_MANAGER, TEAM_LEAD } = USER;

const Login = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [errorMsg, setErrorMsg] = useState<string | "">("");
	const [id, setId] = useState("");

	const navigate = useNavigate();
	const disabled = id?.length < 1 || loading;

	useEffect(() => {
		const { id } = fetchUserData();
		if (id) navigate("/teams");
		// eslint-disable-next-line
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setId(value);
	};

	const pushToDashboard = (data: teamResponse[]) => {
		const userExist = data.find((user) => user.id === id);
		if (userExist) {
			storeUserData({ id, role: TEAM_LEAD });
			navigate("/teams");
		} else setErrorMsg("Invalid Login Details");
	};

	const LoginUser = async () => {
		try {
			setLoading(true);
			setErrorMsg("");

			const url = process.env.REACT_APP_BASE_URL;

			const response = await Axios.get(`${url}/users`);

			const { status, data } = response || {};

			if (status === 200) {
				setLoading(false);
				if (!data) setErrorMsg("Invalid Login Details");
				else pushToDashboard(data);
			}
		} catch (error) {
			setLoading(false);
			setErrorMsg(getErrorMessage(error));
		}
	};

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (id?.length > 0) {
			if (id === EM_ID) {
				storeUserData({ id, role: ENGINEERING_MANAGER });
				navigate("/teams");
			} else LoginUser();
		} else setErrorMsg("Field cannot be empty");
	};

	return (
		<Layout>
			<div className="card login-card py-5">
				{errorMsg && (
					<div className="error">
						<span>{errorMsg}</span>
						<Close onClick={() => setErrorMsg("")} />
					</div>
				)}

				<h3 className="text-center">Welcome Back</h3>

				<p>Enter your ID to continue</p>

				<form onSubmit={handleSubmit} data-testid="login-form">
					<div className="pb-5">
						<input
							type="text"
							name="id"
							value={id}
							placeholder="Enter your ID"
							onChange={handleChange}
						/>
					</div>

					<button type="submit" disabled={disabled}>
						{loading ? (
							<CustomSpinner cls="spinner-border-sm" />
						) : (
							"Login"
						)}
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default Login;
