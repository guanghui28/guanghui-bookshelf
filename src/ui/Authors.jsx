import Row from "./Row";
import Heading from "./Heading";
import AuthorTable from "../features/authors/AuthorTable";
import AddAuthor from "../features/authors/AddAuthor";
import AuthorTableOperations from "../features/authors/AuthorTableOperations";

function Authors() {
	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">All Authors</Heading>
				<AuthorTableOperations />
			</Row>
			<Row type="vertical">
				<AuthorTable />
				<AddAuthor />
			</Row>
		</>
	);
}

export default Authors;
