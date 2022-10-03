import { useState } from "react";
import AccessControl from "components/App/AccessControl/AccessControl";
import { allPermissions } from "components/App/AccessControl/permissions";
import { UserProfileProps } from "components/constants";
import UserProfile from "../common/UserProfile/UserProfile";

import TeamProfile from "./TeamProfile/TeamProfile";

const Team = () => {
	const [userData, setUserData] = useState<UserProfileProps>({});
	const [showUserProfile, setShowUserProfile] = useState(false);

	const hideProfile = () => {
		setShowUserProfile(false);
		setUserData({});
	};

	const showProfile = (data: UserProfileProps) => {
		setUserData(data);
		setShowUserProfile(true);
	};

	const render = () => {
		if (showUserProfile)
			return <UserProfile {...userData} toggle={hideProfile} />;

		return <TeamProfile showProfile={showProfile} />;
	};

	return (
		<AccessControl
			isPage
			allowedPermissions={[allPermissions.CAN_VIEW_TEAM]}
		>
			{render()}
		</AccessControl>
	);
};

export default Team;
