import AccessControl from "components/App/AccessControl/AccessControl";
import { allPermissions } from "components/App/AccessControl/permissions";
import UserProfile from "../common/UserProfile/UserProfile";

const User = () => (
	<AccessControl
		isPage
		allowedPermissions={[allPermissions.CAN_VIEW_OWN_PROFILE]}
	>
		<UserProfile />;
	</AccessControl>
);

export default User;
