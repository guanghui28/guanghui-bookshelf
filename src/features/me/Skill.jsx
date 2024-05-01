import styled from "styled-components";

const StyledSkillContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 2rem;
	border-radius: var(--border-radius-md);
	background-color: var(--color-grey-50);
	padding: 1rem 3rem;
	box-shadow: var(--shadow-md);
	cursor: pointer;
	transition: all ease 0.3s;

	&:hover {
		transform: translateY(5px);
	}
`;

const Details = styled.div`
	flex-grow: 1;
`;

const Img = styled.img`
	width: 5rem;
`;

const ProgressBar = styled.div`
	border-radius: 20px;
	height: 1.5rem;
	width: 100%;
	background-color: var(--color-brand-200);
`;

const Progress = styled.div`
	height: 100%;
	border-radius: 20px;
	width: calc(${(props) => props.progress} * 100%);
	background-color: var(--color-brand-500);
`;

const NameSkill = styled.p`
	font-size: 1.8rem;
	text-transform: uppercase;
	margin-bottom: 0.5rem;
`;

function Skill({ skill }) {
	return (
		<StyledSkillContainer>
			<Img src={skill.image} alt={`Image of skill ${skill.name}`} />
			<Details>
				<NameSkill>
					{skill.name} ({skill.progress * 100}%)
				</NameSkill>
				<ProgressBar>
					<Progress progress={skill.progress} />
				</ProgressBar>
			</Details>
		</StyledSkillContainer>
	);
}

export default Skill;
