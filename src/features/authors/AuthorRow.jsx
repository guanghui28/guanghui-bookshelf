import styled, { css } from "styled-components";
import Table from "../../ui/Table";
import { FaFemale, FaMale } from "react-icons/fa";
import Button from "../../ui/Button";
import { ImProfile } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { HiPencilAlt } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateAuthorForm from "../authors/CreateAuthorForm";
import Menus from "../../ui/Menus";

const StyledImage = styled.div`
	height: 10rem;
	border-radius: 50%;
	overflow: hidden;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
`;

const Flag = styled.img`
	max-width: 4rem;
	border-radius: var(--border-radius-tiny);
	display: block;
	border: 1px solid var(--color-grey-100);
`;

const Gender = styled.div`
	& svg {
		width: 4rem;
		height: 4rem;
		${(props) =>
			props.gender === "true" &&
			css`
				color: var(--color-brand-600);
			`}
		${(props) =>
			props.gender === "false" &&
			css`
				color: var(--color-red-700);
			`}
	}
`;

const Paragraph = styled.p`
	font-size: 1.6rem;
`;

const Name = styled.h3`
	font-size: 2rem;
	font-weight: 600;
	color: var(--color-grey-700);
	font-family: "Sono";
`;

function AuthorRow({ author }) {
	const { id, name, gender, birthYear, country, flagCountry, image, alive } =
		author;

	const navigate = useNavigate();
	const age = new Date().getFullYear() - Number(birthYear) + 1;

	function handleSeeDetails() {
		navigate(`/authors/${id}`);
	}

	return (
		<Table.Row>
			<StyledImage>
				<Img src={image} alt={`image of ${name}`} />
			</StyledImage>
			<Name>{name}</Name>
			<Paragraph>{alive ? age : "R.I.P"}</Paragraph>
			<Gender gender={gender.toString()}>
				{gender ? <FaMale /> : <FaFemale />}
			</Gender>
			<Paragraph>{country}</Paragraph>
			<Flag src={flagCountry} />
			<div>
				<Menus.Menu>
					<Modal>
						<Menus.Toggle id={id} />
						<Menus.List id={id}>
							<Menus.Button icon={<ImProfile />} onClick={handleSeeDetails}>
								See Detail
							</Menus.Button>
							<Modal.Open opens="edit-author">
								<Menus.Button icon={<HiPencilAlt />}>
									Update author
								</Menus.Button>
							</Modal.Open>
						</Menus.List>
						<Modal.Window name="edit-author">
							<CreateAuthorForm authorToEdit={author} />
						</Modal.Window>
					</Modal>
				</Menus.Menu>
			</div>
		</Table.Row>
	);
}

export default AuthorRow;
