import Filter from "../../ui/Filter";

import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";
import {
	GENERATE_FILTER_AUTHOR_OPTIONS,
	GENERATE_SORT_BY_AUTHOR_OPTIONS,
} from "../../utils/constants";

function BookTableOperations() {
	return (
		<TableOperations>
			<Filter filterField="gender" options={GENERATE_FILTER_AUTHOR_OPTIONS} />
			<SortBy options={GENERATE_SORT_BY_AUTHOR_OPTIONS} />
		</TableOperations>
	);
}

export default BookTableOperations;
