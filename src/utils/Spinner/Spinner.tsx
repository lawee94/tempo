type CustomSpinnerProps = {
	cls?: string;
};

const CustomSpinner = ({ cls = "text-light" }: CustomSpinnerProps) => (
	<div className={`spinner-border ${cls}`} role="status">
		<span className="visually-hidden">Loading...</span>
	</div>
);

export default CustomSpinner;
