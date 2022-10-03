import { useEffect, useState } from "react";
import TeamMemberList from "../TeamMemberList/TeamMemberList";
import { fetchUserData } from "storage/sessionStorage";
import {
	EM_ID,
	teamDetailsResponse,
	UserProfileProps,
} from "components/constants";

type TeamContentProps = {
	data: teamDetailsResponse;
	showProfile: (data: UserProfileProps) => void;
};

const TeamContent = ({ data, showProfile }: TeamContentProps) => {
	const [memberCount, setMemberCount] = useState<number>(0);
	const [isLead, setIsLead] = useState(false);

	useEffect(() => {
		const { id } = fetchUserData();
		if (id === data?.teamLeadId || id === EM_ID) setIsLead(true);
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<div className="team_details">
				<div>
					<h4> Team Name</h4>
					<span>{data.name}</span>
				</div>

				<div>
					<h4> Member Count</h4>
					<span>{memberCount}</span>
				</div>
			</div>
			<TeamMemberList
				team={data}
				isLead={isLead}
				isReady={Boolean(data?.name)}
				setMemberCount={setMemberCount}
				showProfile={showProfile}
			/>
		</>
	);
};

export default TeamContent;
