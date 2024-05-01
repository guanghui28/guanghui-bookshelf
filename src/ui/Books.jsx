import Heading from "./Heading";
import Row from "./Row";
import BooksTable from "../features/books/BooksTable";
import AddBook from "../features/books/AddBook";
import BookTableOperations from "../features/books/BookTableOperations";

function Books() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All my Books</Heading>
                <BookTableOperations />
            </Row>
            <Row type="vertical">
                <BooksTable />
                <AddBook />
            </Row>
        </>
    );
}

export default Books;
