import styled from "styled-components";

const Select = styled.select`
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
    font-weight: 500;

    ${(props) =>
        props.type === "white"
            ? "var(--color-grey-100)"
            : "var(--color-grey-300)"}
`;

export default Select;
