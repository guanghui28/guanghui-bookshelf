import styled from "styled-components";
import { FaSadTear } from "react-icons/fa";
const StyledEmpty = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 2rem;
    & svg {
        height: 4rem;
        width: 4rem;
        color: var(--color-brand-700);
    }
`;

function Empty({ resourceName }) {
    return (
        <StyledEmpty>
            <div>
                <FaSadTear />
            </div>
            <p>Sorry! No {resourceName} could be found</p>
        </StyledEmpty>
    );
}

export default Empty;
