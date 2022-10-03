import { useEffect, useState } from "react";
import Axios from "axios";
import { ReactComponent as BackIcon } from "assets/arrow-left.svg";
import UserProfileContent from "./UserProfileContent/UserProfileContent";
import ContentWrapper from "components/Layout/ContentWrapper/ContentWrapper";
import { fetchUserData } from "storage/sessionStorage";
import { getErrorMessage } from "utils/helpers";
import {
	responseStatus,
	teamMemberDefaultResponse,
	teamMemberResponse,
	UserProfileProps,
} from "components/constants";

const { LOADING, FAILED, SUCCESS } = responseStatus;

const UserProfile = (props: UserProfileProps) => {
	const { userId, teamName, teamId, toggle } = props;

	const [status, setStatus] = useState<string | "">("");
	const [errorMsg, setErrorMsg] = useState<string | "">("");
	const [user, setUser] = useState<teamMemberResponse>(
		teamMemberDefaultResponse
	);

	// Get the user data on mount
	useEffect(() => {
		getTeam();
		// eslint-disable-next-line
	}, []);

	// Asynchronous function to handle API call for getting single User record
	const getTeam = async () => {
		try {
			setStatus(LOADING);
			setErrorMsg("");

			const { id } = fetchUserData();

			const response = await Axios.get(
				`${process.env.REACT_APP_BASE_URL}/users/${userId || id}`
			);

			const { status, data } = response || {};

			if (status === 200) {
				setStatus(SUCCESS);
				setUser(data);
			}
		} catch (error) {
			setStatus(FAILED);
			setErrorMsg(getErrorMessage(error));
		}
	};

	return (
		<div className="card content_card">
			<div className="p-3 border-bottom">
				<h3>
					{teamId !== undefined && (
						<BackIcon className="me-3 pointer" onClick={toggle} />
					)}
					{userId ? "User" : "My"} Profile
				</h3>
			</div>

			<ContentWrapper
				errorMsg={errorMsg}
				status={status}
				refetch={getTeam}
			>
				<UserProfileContent data={user} teamName={teamName} />
			</ContentWrapper>
		</div>
	);
};

export default UserProfile;
