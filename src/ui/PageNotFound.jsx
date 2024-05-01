import styled from "styled-components";
import { TbError404 } from "react-icons/tb";
import { useNavigate, useNavigation } from "react-router-dom";
import Button from "./Button";

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-height: 40rem;

    & p {
        font-size: 4rem;
        font-weight: 500;
        text-transform: uppercase;
    }
`;

const NotFound = styled.div`
    & svg {
        width: 10rem;
        height: 10rem;
        color: var(--color-brand-700);
    }
`;

function PageNotFound() {
    const navigate = useNavigate();
    return (
        <Container>
            <NotFound>
                <TbError404 />
            </NotFound>
            <p>page not found</p>
            <Button onClick={() => navigate("/")}>Back to Home</Button>
        </Container>
    );
}

export default PageNotFound;
