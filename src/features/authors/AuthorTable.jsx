import Table from "../../ui/Table";
import AuthorRow from "./AuthorRow";
import { useAuthors } from "./useAuthors";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { AUTHOR_PER_PAGE } from "../../utils/constants";
import Menus from "../../ui/Menus";

function AuthorTable() {
	const { authors, count, isLoading } = useAuthors();

	if (isLoading) return <Spinner />;
	return (
		<Menus>
			<Table columns="10rem 2fr 1fr 1fr 1fr 1fr 0.5fr">
				<Table.Header>
					<div></div>
					<div>Name</div>
					<div>Age</div>
					<div>Gender</div>
					<div>Country</div>
					<div>Flag</div>
					<div></div>
				</Table.Header>
				<Table.Body
					data={authors}
					render={(author) => <AuthorRow key={author.name} author={author} />}
				/>
				<Table.Footer>
					<Pagination count={count} itemsPerPage={AUTHOR_PER_PAGE} />
				</Table.Footer>
			</Table>
		</Menus>
	);
}

export default AuthorTable;
