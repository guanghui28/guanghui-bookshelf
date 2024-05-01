import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import {
	GENERATE_FILTER_BOOK_OPTIONS,
	GENERATE_SORT_BY_BOOK_OPTIONS,
} from "../../utils/constants";
import SortBy from "../../ui/SortBy";

function BookTableOperations() {
	return (
		<TableOperations>
			<Filter filterField="genres" options={GENERATE_FILTER_BOOK_OPTIONS} />
			<SortBy options={GENERATE_SORT_BY_BOOK_OPTIONS} />
		</TableOperations>
	);
}

export default BookTableOperations;
