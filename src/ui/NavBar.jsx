import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoHome } from "react-icons/io5";
import { GiWhiteBook } from "react-icons/gi";
import { IoIosPerson } from "react-icons/io";

const StyledNav = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	flex-grow: 1;
`;

const StyledLink = styled(NavLink)`
	&:visited,
	&:link {
		display: flex;
		gap: 1.2rem;
		align-items: center;
		padding: 0.5rem 1rem;
		border-radius: var(--border-radius-sm);
		font-size: 1.6rem;
		color: var(--color-grey-600);
		font-weight: 600;
		cursor: pointer;
	}

	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		color: var(--color-grey-700);
	}

	& svg {
		width: 2.4rem;
		height: 2.4rem;
		color: var(--color-grey-400);
		transition: all 0.3s;
	}

	&:hover svg,
	&:active svg,
	&.active:link svg,
	&.active:visited svg {
		color: var(--color-brand-600);
	}
`;

function NavBar() {
	return (
		<StyledNav>
			<li>
				<StyledLink to="me">
					<IoHome />
					<span>Me</span>
				</StyledLink>
			</li>
			<li>
				<StyledLink to="books">
					<GiWhiteBook />
					<span>Books</span>
				</StyledLink>
			</li>
			<li>
				<StyledLink to="authors">
					<IoIosPerson />
					<span>Authors</span>
				</StyledLink>
			</li>
		</StyledNav>
	);
}

export default NavBar;
