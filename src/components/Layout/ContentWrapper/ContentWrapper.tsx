import { responseStatus } from "components/constants";
import CustomSpinner from "utils/Spinner/Spinner";
import FailedState from "utils/FailedState/FailedState";

const { LOADING, FAILED, SUCCESS } = responseStatus;

type ContentWrapperProps = {
	status: string;
	children: React.ReactNode;
	errorMsg: string;
	refetch: () => void;
};

const ContentWrapper = (props: ContentWrapperProps) => {
	const { children, status, errorMsg, refetch } = props;

	const renderByStatus = () => {
		switch (status) {
			case LOADING:
				return (
					<div
						data-testid="loader-test"
						className="flex__center my-5"
					>
						<CustomSpinner cls="text-primary" />
					</div>
				);

			case FAILED:
				return (
					<div data-testid="failed-test">
						<FailedState
							btnName="Retry"
							errorMsg={errorMsg}
							handleClick={refetch}
						/>
					</div>
				);

			case SUCCESS:
				return <div data-testid="success-test">{children}</div>;

			default:
				return "";
		}
	};
	return <>{renderByStatus()}</>;
};

export default ContentWrapper;
