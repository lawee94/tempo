import Header from "./Header/Header";
import { LayoutContainer } from "./LayoutSC";

type LayoutProps = {
	children: React.ReactNode;
	logout?: () => void;
};

const Layout = ({ children, logout }: LayoutProps) => {
	return (
		<LayoutContainer>
			<Header logout={logout} />

			<div className="container">{children}</div>
		</LayoutContainer>
	);
};

export default Layout;
