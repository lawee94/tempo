import styled from "styled-components";

type FailedStateProps = {
	errorMsg: string;
	btnName: string;
	handleClick?: () => void;
};

const FailedStateSC = styled.div`
	text-align: center;
	margin: auto;
	padding: 20px;
	max-width: 400px;

	h4 {
		font-weight: 600;
		margin-top: 20px;
	}
`;

const FailedState = (props: FailedStateProps) => {
	const { errorMsg, btnName, handleClick } = props;

	return (
		<FailedStateSC>
			<h4>Failed</h4>

			{errorMsg && <p>{errorMsg}</p>}

			{btnName && (
				<button type="button" onClick={handleClick}>
					{btnName}
				</button>
			)}
		</FailedStateSC>
	);
};

export default FailedState;
