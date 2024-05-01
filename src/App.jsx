import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Books from "./ui/Books";
import Authors from "./ui/Authors";
import PageNotFound from "./ui/PageNotFound";
import Me from "./ui/Me";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Book from "./features/books/Book";
import AuthorProfile from "./features/authors/AuthorProfile";
import { StyleSheetManager } from "styled-components";
import { shouldForwardProp } from "./utils/helpers";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

function App() {
	return (
		<DarkModeProvider>
			<StyleSheetManager shouldForwardProp={shouldForwardProp}>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools initialIsOpen={false} />
					<GlobalStyles />
					<BrowserRouter>
						<Routes>
							<Route element={<AppLayout />}>
								<Route index element={<Me />} />
								<Route path="me" element={<Me />} />
								<Route path="books" element={<Books />} />
								<Route path="books/:bookId" element={<Book />} />
								<Route path="authors" element={<Authors />} />
								<Route path="authors/:authorId" element={<AuthorProfile />} />
								<Route path="*" element={<PageNotFound />} />
							</Route>
						</Routes>
					</BrowserRouter>
					<Toaster
						position="top-center"
						gutter={12}
						containerStyle={{
							margin: "8px",
						}}
						toastOptions={{
							success: {
								duration: 3000,
							},
							error: {
								duration: 5000,
							},
							style: {
								fontSize: "16px",
								maxWidth: "500px",
								padding: "16px 24px",
								backgroundColor: "var(--color-grey-0)",
								color: "var(--color-grey-700)",
							},
						}}
					/>
				</QueryClientProvider>
			</StyleSheetManager>
		</DarkModeProvider>
	);
}

export default App;
