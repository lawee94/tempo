import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";

describe("Login functionality test", () => {
	test("smokescreen test", () => {
		render(
			<Router>
				<Login />
			</Router>
		);
		expect(
			screen.getByText(/Enter your ID to continue/i)
		).toBeInTheDocument();
	});

	test("renders a login form", () => {
		render(
			<Router>
				<Login />
			</Router>
		);

		expect(screen.getByTestId("login-form")).toHaveFormValues({
			id: "",
		});
		expect(
			screen.getByRole("button", { name: /login/i })
		).toBeInTheDocument();
	});

	test("validates empty form inputs and disable button if empty", async () => {
		render(
			<Router>
				<Login />
			</Router>
		);

		userEvent.click(screen.getByRole("button", { name: /login/i }));

		expect(screen.getByRole("button", { name: /login/i })).toHaveAttribute(
			"disabled"
		);

		expect(screen.getByTestId("login-form")).toHaveFormValues({
			id: "",
		});
	});

	test("authenticates user if id is correct", async () => {
		render(
			<Router>
				<Login />
			</Router>
		);

		userEvent.type(screen.getByPlaceholderText(/enter your id/i), "vela");
		userEvent.click(screen.getByRole("button", { name: /login/i }));

		await waitFor(() => {
			expect(
				screen.queryByText(/field cannot be empty/i)
			).not.toBeInTheDocument();
		});
	});
});
