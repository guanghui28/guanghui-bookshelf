import styled from "styled-components";
import { SKILLS } from "../utils/constants";
import Skill from "../features/me/Skill";

const StyledContainer = styled.main`
	display: flex;
	/* background-image: linear-gradient(
		135deg,
		var(--color-blue-100),
		var(--color-blue-700)
	); */
	/* background: linear-gradient(45deg, #96dcff, #14a6ef); */
	background: linear-gradient(
		90deg,
		var(--color-bg-1),
		var(--color-bg-2),
		var(--color-bg-3),
		var(--color-bg-4)
	);
	border-radius: var(--border-radius-md);
	box-shadow: var(--shadow-lg);
	gap: 8rem;
	padding: 3rem 5rem;
`;

const BackgroundImage = styled.div`
	width: 30rem;
	height: 30rem;
	border-radius: 50%;
	border: 0.5rem solid var(--color-silver-100);
	overflow: hidden;
	background-color: var(--color-grey-800);
	box-shadow: var(--shadow-md);
`;

const Common = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
`;

const Details = styled.div`
	flex-grow: 1;
`;

const Info = styled.div`
	text-align: center;
	font-size: 1.8rem;
	color: var(--color-grey-700);
	font-weight: 500;
	& > p {
		margin-bottom: 1rem;
	}
`;

const Name = styled.span`
	font-size: 3rem;
	font-weight: 700;

	background-image: linear-gradient(
		45deg,
		var(--color-name-1) 0%,
		var(--color-name-2) 50%,
		var(--color-name-3) 100%
	);
	background-clip: text;
	color: transparent;
`;

function Me() {
	return (
		<StyledContainer>
			<Common>
				<BackgroundImage>
					<img src="/me.png" alt="my image" />
				</BackgroundImage>
				<Info>
					<p>
						I&apos;m <Name>GuangHui</Name>
					</p>
					<p>Coding for fun ^^</p>
				</Info>
			</Common>
			<Details>
				{SKILLS.map((skill) => (
					<Skill skill={skill} key={skill.name} />
				))}
			</Details>
		</StyledContainer>
	);
}

export default Me;
