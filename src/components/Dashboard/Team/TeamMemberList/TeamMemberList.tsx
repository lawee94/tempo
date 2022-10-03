import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Axios from "axios";
import Table from "utils/Table/Table";
import ContentWrapper from "components/Layout/ContentWrapper/ContentWrapper";
import { getErrorMessage } from "utils/helpers";
import {
	memberHeadings,
	responseStatus,
	teamDetailsResponse,
	teamMemberResponse,
	teamResponse,
	UserProfileProps,
} from "components/constants";

const { LOADING, FAILED, SUCCESS } = responseStatus;

type TeamMemberListProps = {
	team: teamDetailsResponse;
	isLead: boolean;
	isReady: boolean;
	setMemberCount: Dispatch<SetStateAction<number>>;
	showProfile: (data: UserProfileProps) => void;
};

const TeamMemberList = (props: TeamMemberListProps) => {
	const { team, isReady, isLead, showProfile, setMemberCount } = props;

	const [status, setStatus] = useState<string | "">("");
	const [errorMsg, setErrorMsg] = useState<string | "">("");
	const [members, setMembers] = useState([]);

	// Get the teams data on mount
	useEffect(() => {
		getMembers();
		// eslint-disable-next-line
	}, [isReady]);

	// Arrange the Table data
	const getTableData = () => {
		return members?.map((member: teamResponse) => ({
			id: "*******************************",
			displayName: member?.displayName,
			action: (
				<>
					{isLead && (
						<span
							className="pointer fw-bold text-primary"
							onClick={() =>
								showProfile({
									userId: member.id,
									teamId: team?.id,
									teamName: team?.name,
								})
							}
						>
							View User
						</span>
					)}
				</>
			),
		}));
	};

	// Asynchronous function to handle API call for getting users record
	const getMembers = async () => {
		try {
			setStatus(LOADING);
			setErrorMsg("");

			const response = await Axios.get(
				`${process.env.REACT_APP_BASE_URL}/users`
			);

			const { status, data } = response || {};

			if (status === 200) {
				const memberList = data?.filter((v: teamMemberResponse) =>
					team?.teamMemberIds?.includes(v?.id)
				);
				setStatus(SUCCESS);
				setMembers(memberList || []);
				setMemberCount(memberList?.length || 0);
			}
		} catch (error) {
			setStatus(FAILED);
			setErrorMsg(getErrorMessage(error));
		}
	};

	return (
		<ContentWrapper
			errorMsg={errorMsg}
			status={status}
			refetch={getMembers}
		>
			<Table headings={memberHeadings} data={getTableData()} />
		</ContentWrapper>
	);
};

export default TeamMemberList;
