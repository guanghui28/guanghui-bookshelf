import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateBookForm from "./CreateBookForm";

function AddBook() {
    return (
        <div>
            <Modal>
                <Modal.Open opens="add-book">
                    <Button type="primary" size="medium">
                        Add New Book
                    </Button>
                </Modal.Open>
                <Modal.Window name="add-book">
                    <CreateBookForm />
                </Modal.Window>
            </Modal>
        </div>
    );
}

export default AddBook;
