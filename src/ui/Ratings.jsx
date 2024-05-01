import styled from "styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";

const Star = styled.span`
    & svg {
        color: var(--color-brand-900);
        width: 2.4rem;
        height: 2.4rem;
    }
`;
const StyledRating = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    margin-top: 2rem;
`;
function Ratings({ ratings }) {
    return (
        <StyledRating>
            {Array.from({ length: 10 }, (_, i) =>
                i + 1 <= ratings ? (
                    <Star key={i}>
                        <FaStar />
                    </Star>
                ) : (
                    <Star key={i}>
                        <FaRegStar />
                    </Star>
                )
            )}
        </StyledRating>
    );
}

export default Ratings;
