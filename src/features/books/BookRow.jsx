import styled from "styled-components";
import Table from "../../ui/Table";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HiPencilAlt } from "react-icons/hi";
import CreateBookForm from "./CreateBookForm";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";

const Title = styled.div`
	font-size: 1.6rem;
	font-weight: 600;
	color: var(--color-grey-600);
	font-family: "Sono";
`;

const Paragraph = styled.p`
	font-size: 1.6rem;
	color: var(--color-grey-600);
`;

function BookRow({ book }) {
	const navigate = useNavigate();
	const {
		title,
		genre,
		authors: { name: author },
		year,
		pages,
		id,
	} = book;

	function handleClick() {
		navigate(`/books/${id}`);
	}

	return (
		<Table.Row>
			<Title>{title}</Title>
			<Paragraph>{genre}</Paragraph>
			<Paragraph>{author}</Paragraph>
			<Paragraph>{year}</Paragraph>
			<Paragraph>{pages}</Paragraph>
			<div>
				<Modal>
					<Menus.Menu>
						<Menus.Toggle id={id} />
						<Menus.List id={id}>
							<Menus.Button onClick={handleClick} icon={<FaEye />}>
								See Detail
							</Menus.Button>

							<Modal.Open opens="edit-book">
								<Menus.Button icon={<HiPencilAlt />}>Update book</Menus.Button>
							</Modal.Open>
						</Menus.List>
					</Menus.Menu>
					<Modal.Window name="edit-book">
						<CreateBookForm bookToEdit={book} />
					</Modal.Window>
				</Modal>
			</div>
		</Table.Row>
	);
}

export default BookRow;
