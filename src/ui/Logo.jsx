import styled from "styled-components";

const StyledLogo = styled.div`
    text-align: center;
`;

const Img = styled.img`
    height: 14rem;
    width: auto;
`;

function Logo() {
    return (
        <StyledLogo>
            <Img src="/logo.png" alt="guanghui's bookshelf logo" />
        </StyledLogo>
    );
}

export default Logo;
