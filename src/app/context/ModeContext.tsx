"use client";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

interface ModeContextProps {
	isDark: boolean;
	setIsDark: (mode: boolean) => void;
	changeMode: () => void;
}

export const ModeContext = createContext<ModeContextProps | null>(null);

export const ModeContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isDark, setIsDark] = useState<boolean>(false);

	useEffect(() => {
		setIsDark(isDark);
	}, []);

	const changeMode = () => {
		setIsDark((prev) => !prev);
	};

	return (
		<ModeContext.Provider value={{ isDark, setIsDark, changeMode }}>
			{children}
		</ModeContext.Provider>
	);
};

export const useModeContext = () => {
	const context = useContext(ModeContext);
	if (!context) {
		throw new Error("useAuthContext must be used within a ModeContextProvider");
	}
	return context;
};
