import { USER } from "components/constants";
import { fetchUserData } from "storage/sessionStorage";
import { emPermissions, tlPermissions } from "./permissions";

const { ENGINEERING_MANAGER, TEAM_LEAD } = USER;

type AccessControlProps = {
	children: React.ReactNode;
	allowedPermissions: string[];
	isPage?: boolean;
};

const getCurrentPermission = () => {
	const { role } = fetchUserData();
	if (role === ENGINEERING_MANAGER) return emPermissions;
	else if (role === TEAM_LEAD) return tlPermissions;
	return [];
};

const checkPermissions = (allowedPermissions: string[]) => {
	return allowedPermissions.some((allowedPermission) =>
		getCurrentPermission().includes(allowedPermission)
	);
};

const AccessControl = (props: AccessControlProps) => {
	const { isPage, children, allowedPermissions } = props;

	if (checkPermissions(allowedPermissions)) return <>{children}</>;

	if (isPage)
		return (
			<div className="py-5 text-center text--primary">
				<h3 className="fw-bold">
					You don't have right permission to access this page
				</h3>
			</div>
		);

	return null;
};

export default AccessControl;
