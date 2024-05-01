import { LuMoon, LuSunMoon } from "react-icons/lu";

import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<ButtonIcon onClick={toggleDarkMode}>
			{isDarkMode ? <LuSunMoon /> : <LuMoon />}
		</ButtonIcon>
	);
}

export default DarkModeToggle;
