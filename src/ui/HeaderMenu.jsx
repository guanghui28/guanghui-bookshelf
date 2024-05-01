import styled from "styled-components";
import Logout from "./Logout";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.ul`
	display: flex;
	gap: 0.4rem;
`;

function HeaderMenu() {
	return (
		<StyledHeader>
			<li>
				<DarkModeToggle />
			</li>
			<li>
				<Logout />
			</li>
		</StyledHeader>
	);
}

export default HeaderMenu;
