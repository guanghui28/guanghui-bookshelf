import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (!isDarkMode) {
			document.documentElement.classList.add("light-mode");
			document.documentElement.classList.remove("dark-mode");
		} else {
			document.documentElement.classList.remove("light-mode");
			document.documentElement.classList.add("dark-mode");
		}
	}, [isDarkMode]);

	function toggleDarkMode() {
		setIsDarkMode((dark) => !dark);
	}

	return (
		<DarkModeContext.Provider value={{ toggleDarkMode, isDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

function useDarkMode() {
	const context = useContext(DarkModeContext);
	if (context === undefined)
		throw new Error("The context is used outside the Dark Mode Provider");
	return context;
}

export { useDarkMode, DarkModeProvider };
