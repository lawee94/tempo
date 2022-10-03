import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
	render(
		<Router>
			<App />
		</Router>
	);
	const divElement = screen.getByAltText(/tempo.io/i);
	expect(divElement).toBeInTheDocument();
});
