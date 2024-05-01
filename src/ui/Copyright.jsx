import styled from "styled-components";

const StyledCopyright = styled.footer`
    font-size: 1rem;
    color: var(--color-grey-500);
    font-weight: 400;
`;

function Copyright() {
    return (
        <StyledCopyright>
            &copy; All rights reserved by GuangHui
        </StyledCopyright>
    );
}

export default Copyright;
