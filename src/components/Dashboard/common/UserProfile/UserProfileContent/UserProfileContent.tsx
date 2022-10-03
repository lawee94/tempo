import { teamMemberResponse } from "components/constants";
import { ReactComponent as Avatar } from "assets/avatar.svg";

type UserProfileContentProps = {
	teamName?: string;
	data: teamMemberResponse;
};

const UserProfileContent = ({ data, teamName }: UserProfileContentProps) => {
	const { id, avatarUrl, firstName, lastName, displayName, location } =
		data || {};

	return (
		<>
			<div className="team_member">
				<div className="me-5 text-center">
					{!avatarUrl ? <img src={avatarUrl} alt="" /> : <Avatar />}
				</div>

				<div>
					<p>
						User ID: <span>{id}</span>
					</p>
					<p>
						Name:
						<span>
							{firstName} {lastName}
						</span>
					</p>
					<p>
						Display Name: <span>{displayName}</span>
					</p>
					<p>
						Location: <span>{location}</span>
					</p>
					{teamName && (
						<p>
							Team: <span>{teamName}</span>
						</p>
					)}
				</div>
			</div>
		</>
	);
};

export default UserProfileContent;
