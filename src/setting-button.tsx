import type { ReactNode } from "react";
import { cn } from "./cn";

type SettingButtonProps = {
	onClick: () => void;
	children: ReactNode;
};

export const SettingButton = ({ onClick, children }: SettingButtonProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(
				"inline-block px-5 py-3",
				"bg-[length:230%] bg-[linear-gradient(120deg,transparent_0%,transparent_50%,white_50%)]",
				"font-light text-2xl uppercase no-underline md:text-3xl",
				"transition-all duration-400",
				"hover:translate-x-5 hover:bg-[position:100%] hover:text-[#8B4513]",
				"focus:translate-x-5 focus:bg-[position:100%] focus:text-[#8B4513]",
				"active:translate-x-5 active:bg-[position:100%] active:text-[#8B4513]",
			)}
		>
			{children}
		</button>
	);
};
