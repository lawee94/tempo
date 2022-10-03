import { ChangeEvent, useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "utils/Table/Table";
import ContentWrapper from "components/Layout/ContentWrapper/ContentWrapper";
import AccessControl from "components/App/AccessControl/AccessControl";
import { allPermissions } from "components/App/AccessControl/permissions";
import { getErrorMessage } from "utils/helpers";
import {
	memberHeadings,
	responseStatus,
	teamResponse,
} from "components/constants";

const { LOADING, FAILED, SUCCESS } = responseStatus;

const AllTeams = () => {
	const navigate = useNavigate();

	const [status, setStatus] = useState<string | "">("");
	const [errorMsg, setErrorMsg] = useState<string | "">("");
	const [teams, setTeams] = useState([]);
	const [filteredTeams, setFilteredTeams] = useState([]);

	// Get the teams data on mount
	useEffect(() => {
		getTeams();
		// eslint-disable-next-line
	}, []);

	// Handle Search Team and update the team records
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target || {};
		if (value) {
			const newTeams = [...teams].filter((team: teamResponse) =>
				team?.name?.toLowerCase().includes(value.toLowerCase())
			);
			setFilteredTeams(newTeams);
		} else setFilteredTeams(teams);
	};

	// Arrange the Table data
	const getTableData = () => {
		return filteredTeams?.map((team: teamResponse) => ({
			id: team?.id,
			name: team?.name,
			action: (
				<AccessControl
					allowedPermissions={[allPermissions.CAN_VIEW_TEAM]}
				>
					<span
						className="pointer fw-bold text-primary"
						onClick={() => navigate(`/teams/${team?.id}`)}
					>
						View Details
					</span>
				</AccessControl>
			),
		}));
	};

	// Asynchronous function to handle API call for getting team record
	const getTeams = async () => {
		try {
			setStatus(LOADING);
			setErrorMsg("");

			const response = await Axios.get(
				`${process.env.REACT_APP_BASE_URL}/teams`
			);

			const { status, data } = response || {};

			if (status === 200) {
				setStatus(SUCCESS);
				setTeams(data);
				setFilteredTeams(data);
			}
		} catch (error) {
			setStatus(FAILED);
			setErrorMsg(getErrorMessage(error));
		}
	};

	return (
		<div className="card content_card">
			<div className="p-3 border-bottom">
				<h3>All Development Teams</h3>
			</div>

			<ContentWrapper
				errorMsg={errorMsg}
				status={status}
				refetch={getTeams}
			>
				<div className="p-3">
					<input
						className="short"
						placeholder="Search by team name"
						onChange={handleChange}
					/>
				</div>
				<Table headings={memberHeadings} data={getTableData()} />
			</ContentWrapper>
		</div>
	);
};

export default AllTeams;
