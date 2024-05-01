import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateAuthorForm from "./CreateAuthorForm";

function AddAuthor() {
    return (
        <div>
            <Modal>
                <Modal.Open opens="add-author">
                    <Button type="primary" size="medium">
                        Add New Author
                    </Button>
                </Modal.Open>
                <Modal.Window name="add-author">
                    <CreateAuthorForm />
                </Modal.Window>
            </Modal>
        </div>
    );
}

export default AddAuthor;
