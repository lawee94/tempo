import { render } from "@testing-library/react";
import Table from "./Table";

const headings = ["ID", "Name"];
const data = [
	{
		id: "1d1",
		name: "Olawale",
	},
];

describe("Table Component Testing", () => {
	test("handles for empty table heading and body", () => {
		render(<Table headings={[]} data={[]} />);

		const trElement = document.getElementsByTagName("tr").length;
		const tdElement = document.getElementsByTagName("td").length;
		const thElement = document.getElementsByTagName("th").length;

		expect(trElement).toBe(1);
		expect(tdElement).toBe(0);
		expect(thElement).toBe(0);
	});

	test("handles all props", () => {
		render(<Table headings={headings} data={data} />);

		const trElement = document.getElementsByTagName("tr").length;
		const tdElement = document.getElementsByTagName("td").length;
		const thElement = document.getElementsByTagName("th").length;

		expect(trElement).toBe(2);
		expect(tdElement).toBe(2);
		expect(thElement).toBe(2);
	});
});
