import { render, screen } from "@testing-library/react";
import FailedState from "./FailedState";

describe("Failed State Component Testing", () => {
	test("handles error message", () => {
		render(<FailedState errorMsg="" btnName="" />);
		const buttonElement = document.getElementsByTagName("button").length;
		const pElement = document.getElementsByTagName("p").length;

		expect(screen.getByText(/failed/i)).toBeInTheDocument();
		expect(buttonElement).toBe(0);
		expect(pElement).toBe(0);
	});

	test("handles all props", () => {
		render(
			<FailedState errorMsg="Error fetching record" btnName="Retry" />
		);
		expect(
			screen.getByRole("button", { name: /retry/i })
		).toBeInTheDocument();

		expect(screen.getByText(/failed/i)).toBeInTheDocument();
		expect(screen.getByText(/error fetching record/i)).toBeInTheDocument();
	});
});
