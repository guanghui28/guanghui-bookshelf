import styled, { css } from "styled-components";
import { FaFemale, FaMale } from "react-icons/fa";
import { useAuthor } from "./useAuthor";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import BackButton from "../../ui/BackButton";

const StyledProfile = styled.div`
	position: relative;
	padding: 3rem 5rem;
	background-color: var(--color-grey-100);
	border-radius: var(--border-radius-md);
	box-shadow: var(--shadow-lg);
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const Details = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
	/* width: 80%; */
	margin: 0 auto;
	padding: 3rem;
	padding-bottom: 5rem;
`;

const StyledImg = styled.div`
	width: 24rem;
	height: 24rem;
	overflow: hidden;
	border-radius: 50%;
	border: 5px solid var(--color-grey-900);
`;

const Story = styled.div`
	& h4 {
		display: inline-block;
		font-size: 2rem;
		text-transform: uppercase;
		background-color: var(--color-brand-200);
		color: var(--color-brand-900);
		border-radius: var(--border-radius-sm);
		padding: 0.4rem 1rem;
		margin-bottom: 2rem;
	}
	& p {
		text-align: justify;
		font-size: 1.8rem;
		line-height: 1.8;
	}
`;

const Heading = styled.h3`
	font-size: 4rem;
	font-weight: 700;
	color: var(--color-grey-900);
	text-align: center;
	text-transform: uppercase;
	font-family: "Sono";
	text-shadow: var(--text-shadow-md);
`;

const Paragraph = styled.p`
	display: flex;
	gap: 2rem;
	margin-bottom: 1.5rem;
	font-size: 1.8rem;
	align-items: center;
	& strong {
		min-width: 12rem;
		color: var(--color-brand-700);
	}

	& span {
	}

	& img {
		height: 2.5rem;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
	}
`;

const Status = styled.span`
	display: inline-block;
	padding: 0.4rem 0.8rem;
	font-weight: 600;
	border-radius: var(--border-radius-lg);
	box-shadow: var(--shadow-sm);
	${(props) =>
		props.alive &&
		css`
			background-color: var(--color-green-100);
			color: var(--color-green-700);
		`}
	${(props) =>
		!props.alive &&
		css`
			color: var(--color-silver-700);
			background-color: var(--color-silver-100);
		`};
`;

const Gender = styled.span`
	& svg {
		height: 2.5rem;
		${(props) =>
			props.gender &&
			css`
				color: var(--color-brand-600);
			`}
		${(props) =>
			!props.gender &&
			css`
				color: var(--color-red-700);
			`}
	}
`;

function AuthorProfile() {
	const { isLoading, error, author } = useAuthor();
	if (error) return <Empty />;
	if (isLoading) return <Spinner />;

	const age = new Date().getFullYear() - author.birthYear + 1;

	return (
		<StyledProfile>
			<Heading>{author.name}</Heading>

			<Details>
				<StyledImg>
					<img src={author.image} />
				</StyledImg>
				<div>
					<Paragraph>
						<strong>Birth Year</strong>
						<span>
							{author.birthYear} {author.alive && `(${age} ages)`}
						</span>
					</Paragraph>
					<Paragraph>
						<strong>Country</strong>
						<span>{author.country}</span>
					</Paragraph>
					<Paragraph>
						<strong>Gender</strong>
						<Gender gender={author.gender}>
							{author.gender ? <FaMale /> : <FaFemale />}
						</Gender>
					</Paragraph>
					<Paragraph>
						<strong>Country Flag</strong>
						<img src={author.flagCountry} alt="Flag country" />
					</Paragraph>
					<Paragraph>
						<strong>Status</strong>
						<Status alive={author.alive}>
							{author.alive ? "Alive" : "Dead"}
						</Status>
					</Paragraph>
				</div>
			</Details>

			<Story>
				<h4>{author.gender ? "His" : "Her"} Story</h4>
				<p>{author.story}</p>
			</Story>
			<BackButton />
		</StyledProfile>
	);
}

export default AuthorProfile;
