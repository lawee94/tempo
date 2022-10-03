export const responseStatus = {
	LOADING: "LOADING",
	FAILED: "FAILED",
	SUCCESS: "SUCCESS",
};

export type teamResponse = {
	id?: string;
	name?: string;
	displayName?: string;
};

export type teamDetailsResponse = {
	id: string;
	name: string;
	teamLeadId: string;
	teamMemberIds: string[];
};

export type teamMemberResponse = {
	id: string;
	firstName: string;
	lastName: string;
	displayName: string;
	avatarUrl: string;
	location: string;
};

export type UserProfileProps = {
	userId?: string;
	teamId?: string;
	teamName?: string;
	toggle?: () => void;
};

export const teamMemberDefaultResponse = {
	id: "",
	firstName: "",
	lastName: "",
	displayName: "",
	avatarUrl: "",
	location: "",
};

export const teamDefaultResponse = {
	id: "",
	name: "",
	teamLeadId: "",
	teamMemberIds: [],
};

export const memberHeadings = ["ID", "Name", ""];

export const EM_ID = process.env.REACT_APP_EM_ID;

export const TEMPO_USER = "tempo_user";

export const USER = {
	ENGINEERING_MANAGER: "engineering_manager",
	TEAM_LEAD: "team_lead",
	MEMBER: "member",
};
