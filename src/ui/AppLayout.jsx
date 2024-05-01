import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const StyledLayout = styled.div`
	display: grid;
	grid-template-columns: 20rem 1fr;
	grid-template-rows: 8rem 1fr;
	width: 100%;
	height: 100vh;
	overflow-x: hidden;
`;

const Main = styled.main`
	background-color: var(--color-grey-100);
	padding: 1.2rem 2.4rem 4.8rem;
	overflow-y: scroll;
	overflow-x: hidden;
`;

const Container = styled.div`
	max-width: 120rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

function AppLayout() {
	return (
		<StyledLayout>
			<Header />
			<Sidebar />
			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
		</StyledLayout>
	);
}

export default AppLayout;
