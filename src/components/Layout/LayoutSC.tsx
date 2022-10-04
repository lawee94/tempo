import styled from "styled-components";

export const LayoutContainer = styled.div`
	min-height: 100vh;
	background: #0047891c;

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		padding: 1em 2em !important;
		background: #fff;
		border-bottom: 4px solid #004789;
		z-index: 9;

		a {
			text-decoration: none;
			font-size: 1em;
			font-weight: 600;
			color: #000;
		}

		img {
			max-width: 130px;
		}
	}

	.flex__center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		height: calc(100vh - 85px);
	}

	.table-responsive {
		max-height: 500px;
		overflow: scroll;
		margin: 20px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	}

	.card {
		background: #fff;
		border-radius: 2px;
		display: inline-block;
		min-height: 300px;
		margin: 1rem;
		position: relative;
		min-width: 300px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

		&.login-card {
			min-width: 500px;
			padding: 30px;
			margin-top: 100px;

			h3 {
				margin: 0 auto 30px auto;
			}

			@media (max-width: 480px) {
				min-width: 95% !important;
			}
		}

		&.content_card {
			min-width: 80%;
			max-height: 80vh;
			overflow: scroll;
		}
	}

	input {
		padding: 0.5rem 1rem;
		line-height: inherit;
		font-style: normal;
		color: inherit;
		border-radius: 5px;
		width: 100%;
		border: 1px solid #aaaaaa;

		&.short {
			width: 400px;

			@media (max-width: 480px) {
				width: 100% !important;
			}
		}

		&::placeholder {
			font: inherit;
			line-height: inherit;
			color: #ccc;
		}

		&:read-only {
			cursor: not-allowed;
		}
		&:disabled {
			opacity: 0.8;
		}
	}

	.pointer {
		cursor: pointer;
	}

	.team_member {
		display: flex;
		margin: 20px;
		padding: 20px;
		flex-wrap: wrap;

		span {
			font-weight: 600;
			padding-left: 15px;
		}

		img {
			max-height: 200px;
			max-width: 200px;
		}

		svg {
			margin-bottom: 20px;
			path {
				fill: #004789;
			}
		}
	}

	.team_details {
		display: flex;
		justify-content: space-between;
		margin: 20px;
		padding: 20px;

		@media (max-width: 480px) {
			padding: 0;
			margin: 10px;
		}

		div {
			padding: 20px;
			text-align: center;
			margin: 0 10px;
			width: 100%;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
				0 1px 2px rgba(0, 0, 0, 0.24);
		}
	}

	.error {
		background: #dc35451f;
		color: #dc3545;
		font-size: 0.9em;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		border-radius: 3px;
		margin-bottom: 30px;

		svg {
			cursor: pointer;
			path {
				fill: #dc3545;
			}
		}
	}

	button {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1em;
		font-weight: 600;
		background: #004789;
		color: #fff;
		border: none;
		box-shadow: none;
		padding: 0.5em 1em;
		border-radius: 4px;
		height: 40px;

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}
`;
