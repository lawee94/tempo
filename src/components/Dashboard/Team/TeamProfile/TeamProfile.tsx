import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from "assets/arrow-left.svg";
import ContentWrapper from "components/Layout/ContentWrapper/ContentWrapper";
import AccessControl from "components/App/AccessControl/AccessControl";
import { fetchUserData } from "storage/sessionStorage";
import TeamContent from "../TeamContent/TeamContent";
import { getErrorMessage } from "utils/helpers";
import {
	responseStatus,
	teamDetailsResponse,
	teamDefaultResponse,
	UserProfileProps,
	EM_ID,
} from "components/constants";

const { LOADING, FAILED, SUCCESS } = responseStatus;

type TeamProfileProps = {
	showProfile: (data: UserProfileProps) => void;
};

const TeamProfile = ({ showProfile }: TeamProfileProps) => {
	const [status, setStatus] = useState<string | "">("");
	const [errorMsg, setErrorMsg] = useState<string | "">("");
	const [isMember, setIsMember] = useState(true);
	const [teamData, setTeamData] =
		useState<teamDetailsResponse>(teamDefaultResponse);

	const { id } = useParams();
	const navigate = useNavigate();

	// Get the teams data on mount
	useEffect(() => {
		getTeam();
		// eslint-disable-next-line
	}, []);

	// Asynchronous function to handle API call for getting team record
	const getTeam = async () => {
		try {
			setStatus(LOADING);
			setErrorMsg("");

			const user = fetchUserData();

			const response = await Axios.get(
				`${process.env.REACT_APP_BASE_URL}/teams/${id}`
			);

			const { status, data } = response || {};

			if (status === 200) {
				const exist =
					data?.teamLeadId === user?.id ||
					data?.teamMemberIds.includes(user?.id) ||
					user?.id === EM_ID;
				setStatus(SUCCESS);
				if (!exist) setIsMember(false);
				else setTeamData(data);
			}
		} catch (error) {
			setStatus(FAILED);
			setErrorMsg(getErrorMessage(error));
		}
	};

	const renderByAccess = () => {
		if (isMember)
			return <TeamContent data={teamData} showProfile={showProfile} />;
		return (
			<AccessControl isPage allowedPermissions={[]}>
				{" "}
			</AccessControl>
		);
	};

	return (
		<div className="card content_card">
			<div className="p-3 border-bottom">
				<h3>
					<BackIcon
						className="me-3 pointer"
						onClick={() => navigate("/teams")}
					/>
					Team {teamData?.name}{" "}
				</h3>
			</div>

			<ContentWrapper
				errorMsg={errorMsg}
				status={status}
				refetch={getTeam}
			>
				{renderByAccess()}
			</ContentWrapper>
		</div>
	);
};

export default TeamProfile;
