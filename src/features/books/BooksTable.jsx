import Table from "../../ui/Table";
import BookRow from "./BookRow";
import { useBooks } from "./useBooks";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { BOOK_PER_PAGE } from "../../utils/constants";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

function BooksTable() {
	const { isLoading, books, count } = useBooks();
	if (isLoading) return <Spinner />;
	return (
		<Menus>
			<Table columns="4fr 1.5fr 2fr 0.5fr 0.5fr 0.5fr">
				<Table.Header>
					<div>Title</div>
					<div>Genre</div>
					<div>Author</div>
					<div>Year</div>
					<div>Pages</div>
					<div></div>
				</Table.Header>
				{books?.length > 0 ? (
					<Table.Body
						data={books}
						render={(book) => <BookRow key={book.title} book={book} />}
					/>
				) : (
					<Empty resourceName="book" />
				)}
				<Table.Footer>
					<Pagination count={count} itemsPerPage={BOOK_PER_PAGE} />
				</Table.Footer>
			</Table>
		</Menus>
	);
}

export default BooksTable;
