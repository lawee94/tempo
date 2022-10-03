type TableProps = {
	headings: string[];
	data: {}[];
};

const Table = ({ headings, data }: TableProps) => {
	return (
		<div className="table-responsive">
			<table className="table table-striped">
				<thead>
					<tr>
						{headings?.map((heading, k) => (
							<th key={`th${k}`}>{heading}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data?.map((items, j) => (
						<tr key={`tr${j}`}>
							{Object.values(items)?.map((item: any, i) => (
								<td key={i}>{item}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
