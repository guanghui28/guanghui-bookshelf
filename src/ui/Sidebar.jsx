import styled from "styled-components";
import NavBar from "./NavBar";
import Copyright from "./Copyright";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
    grid-row: 1/-1;
    background-color: var(--color-grey-0);
    border-right: 1px solid var(--color-grey-200);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

function Sidebar() {
    return (
        <StyledSidebar>
            <Logo />
            <NavBar />
            <Copyright />
        </StyledSidebar>
    );
}

export default Sidebar;
