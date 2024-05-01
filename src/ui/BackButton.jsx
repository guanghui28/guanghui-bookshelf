import { FaBackward } from "react-icons/fa";
import Button from "./Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledBack = styled.span`
    position: absolute;
    top: 1rem;
    right: 1rem;
    box-shadow: var(--shadow-md);
`;

const Container = styled.span`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

function BackButton() {
    const navigate = useNavigate();
    return (
        <StyledBack onClick={() => navigate(-1)}>
            <Button size="large" variation="primary">
                <Container>
                    <FaBackward />
                    <span>Back</span>
                </Container>
            </Button>
        </StyledBack>
    );
}

export default BackButton;
