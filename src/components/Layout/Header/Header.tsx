import { Link } from "react-router-dom";
import { TEMPO_USER } from "components/constants";
import AccessControl from "components/App/AccessControl/AccessControl";
import { allPermissions } from "components/App/AccessControl/permissions";

type HeaderProps = {
	logout?: () => void;
};

const Header = ({ logout }: HeaderProps) => {
	const isAuthenticated = sessionStorage.getItem(TEMPO_USER);

	return (
		<section className="header">
			<Link to="/teams">
				<img
					src={
						"https://www.tempo.io/hubfs/Tempo%20Logo%20Full%20512px-1.svg"
					}
					alt="tempo.io"
				/>
			</Link>

			{isAuthenticated && (
				<div className="d-flex align-items-center">
					<AccessControl
						allowedPermissions={[
							allPermissions.CAN_VIEW_OWN_PROFILE,
						]}
					>
						<Link className="me-4" to="/profile">
							Profile
						</Link>
					</AccessControl>

					<button onClick={logout}>Logout</button>
				</div>
			)}
		</section>
	);
};

export default Header;
