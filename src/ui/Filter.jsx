import styled from "styled-components";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

const StyledFilter = styled.div`
    border: 1px solid var(--color-grey-100);
    background-color: var(--color-grey-0);
    box-shadow: var(--shadow-sm);
    border-radius: var(--border-radius-sm);
    padding: 0.4rem;
`;

function Filter({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleOnChange(value) {
        searchParams.set("page", 1);
        searchParams.set(filterField, value);
        setSearchParams(searchParams);
    }
    return (
        <StyledFilter>
            <Select onChange={(e) => handleOnChange(e.target.value)}>
                {options.map((item) => (
                    <option key={item.label} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </Select>
        </StyledFilter>
    );
}

export default Filter;
