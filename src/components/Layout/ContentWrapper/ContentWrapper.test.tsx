import { render, screen } from "@testing-library/react";
import ContentWrapper from "./ContentWrapper";
import { responseStatus } from "components/constants";

const { LOADING, FAILED, SUCCESS } = responseStatus;

describe("ContentWrapper Component Testing", () => {
	test("handles default status", () => {
		render(
			<ContentWrapper status="" errorMsg="" refetch={() => {}}>
				" "
			</ContentWrapper>
		);
		const divElement = document.getElementsByTagName("div").length;

		expect(divElement).toBe(1);
	});

	test("handles LOADING status", () => {
		render(
			<ContentWrapper status={LOADING} errorMsg="" refetch={() => {}}>
				" "
			</ContentWrapper>
		);

		expect(screen.getByTestId("loader-test")).toBeInTheDocument();
	});

	test("handles FAILED status", () => {
		render(
			<ContentWrapper status={FAILED} errorMsg="" refetch={() => {}}>
				" "
			</ContentWrapper>
		);

		expect(screen.getByTestId("failed-test")).toBeInTheDocument();
	});

	test("handles SUCCESS status", () => {
		render(
			<ContentWrapper status={SUCCESS} errorMsg="" refetch={() => {}}>
				" "
			</ContentWrapper>
		);

		expect(screen.getByTestId("success-test")).toBeInTheDocument();
	});
});
