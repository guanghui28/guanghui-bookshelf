import { useSearchParams } from "react-router-dom";
import Select from "./Select";
import styled from "styled-components";

const StyledSort = styled.div`
    border: 1px solid var(--color-grey-100);
    background-color: var(--color-grey-0);
    box-shadow: var(--shadow-sm);
    border-radius: var(--border-radius-sm);
    padding: 0.4rem;
`;

function SortBy({ options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("SortBy") || "";

    function handleOnChange(value) {
        searchParams.set("SortBy", value);
        setSearchParams(searchParams);
    }

    return (
        <StyledSort>
            <Select
                value={sortBy}
                type="white"
                onChange={(e) => handleOnChange(e.target.value)}
            >
                {options.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </Select>
        </StyledSort>
    );
}

export default SortBy;
