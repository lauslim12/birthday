import { cn } from "@/cn";
import type { ClassValue } from "clsx";

type ThemeCode =
	| "light"
	| "dark"
	| "rose"
	| "mint"
	| "slate"
	| "amber"
	| "purple"
	| "teal"
	| "midnight"
	| "forest"
	| "sunset"
	| "lavender"
	| "ocean"
	| "coffee"
	| "cherry"
	| "monochrome";

type Theme = {
	meta: {
		name: string;
		value: ThemeCode;
		emoji: string;
	};
	ui: {
		bgColor: ClassValue;
		textColor: ClassValue;
		primaryColor: ClassValue;
		mutedColor: ClassValue;
		borderColor: ClassValue;
		dividerColor: ClassValue;
	};
};

type Themes = {
	light: Theme;
	dark: Theme;
	rose: Theme;
	mint: Theme;
	slate: Theme;
	amber: Theme;
	purple: Theme;
	teal: Theme;
	midnight: Theme;
	forest: Theme;
	sunset: Theme;
	lavender: Theme;
	ocean: Theme;
	coffee: Theme;
	cherry: Theme;
	monochrome: Theme;
};

export const isValidTheme = (theme: unknown): theme is keyof Themes => {
	if (typeof theme !== "string") {
		return false;
	}

	return theme in themes;
};

export const themes: Themes = {
	light: {
		meta: { name: "Light", value: "light", emoji: "🌞" },
		ui: {
			bgColor: cn("bg-white"),
			textColor: cn("text-gray-900"),
			primaryColor: cn("text-gray-900"),
			mutedColor: cn("text-gray-500"),
			borderColor: cn("border-gray-900"),
			dividerColor: cn("bg-gray-900"),
		},
	},
	dark: {
		meta: { name: "Dark", value: "dark", emoji: "🌙" },
		ui: {
			bgColor: cn("bg-gray-900"),
			textColor: cn("text-white"),
			primaryColor: cn("text-white"),
			mutedColor: cn("text-gray-400"),
			borderColor: cn("border-white"),
			dividerColor: cn("bg-white"),
		},
	},
	rose: {
		meta: { name: "Rose", value: "rose", emoji: "🌹" },
		ui: {
			bgColor: cn("bg-rose-50"),
			textColor: cn("text-rose-950"),
			primaryColor: cn("text-rose-600"),
			mutedColor: cn("text-rose-500/70"),
			borderColor: cn("border-rose-600"),
			dividerColor: cn("bg-rose-600"),
		},
	},
	mint: {
		meta: { name: "Mint", value: "mint", emoji: "🍃" },
		ui: {
			bgColor: cn("bg-emerald-50"),
			textColor: cn("text-emerald-950"),
			primaryColor: cn("text-emerald-600"),
			mutedColor: cn("text-emerald-500/70"),
			borderColor: cn("border-emerald-600"),
			dividerColor: cn("bg-emerald-600"),
		},
	},
	slate: {
		meta: { name: "Slate", value: "slate", emoji: "🪨" },
		ui: {
			bgColor: cn("bg-slate-50"),
			textColor: cn("text-slate-950"),
			primaryColor: cn("text-slate-600"),
			mutedColor: cn("text-slate-500/70"),
			borderColor: cn("border-slate-600"),
			dividerColor: cn("bg-slate-600"),
		},
	},
	amber: {
		meta: { name: "Amber", value: "amber", emoji: "🍯" },
		ui: {
			bgColor: cn("bg-amber-50"),
			textColor: cn("text-amber-950"),
			primaryColor: cn("text-amber-600"),
			mutedColor: cn("text-amber-500/70"),
			borderColor: cn("border-amber-600"),
			dividerColor: cn("bg-amber-600"),
		},
	},
	purple: {
		meta: { name: "Purple", value: "purple", emoji: "💜" },
		ui: {
			bgColor: cn("bg-purple-50"),
			textColor: cn("text-purple-950"),
			primaryColor: cn("text-purple-600"),
			mutedColor: cn("text-purple-500/70"),
			borderColor: cn("border-purple-600"),
			dividerColor: cn("bg-purple-600"),
		},
	},
	teal: {
		meta: { name: "Teal", value: "teal", emoji: "🐬" },
		ui: {
			bgColor: cn("bg-teal-50"),
			textColor: cn("text-teal-950"),
			primaryColor: cn("text-teal-600"),
			mutedColor: cn("text-teal-500/70"),
			borderColor: cn("border-teal-600"),
			dividerColor: cn("bg-teal-600"),
		},
	},
	midnight: {
		meta: { name: "Midnight", value: "midnight", emoji: "🌌" },
		ui: {
			bgColor: cn("bg-indigo-950"),
			textColor: cn("text-indigo-50"),
			primaryColor: cn("text-indigo-300"),
			mutedColor: cn("text-indigo-400/70"),
			borderColor: cn("border-indigo-300"),
			dividerColor: cn("bg-indigo-300"),
		},
	},
	forest: {
		meta: { name: "Forest", value: "forest", emoji: "🌲" },
		ui: {
			bgColor: cn("bg-green-950"),
			textColor: cn("text-green-50"),
			primaryColor: cn("text-green-300"),
			mutedColor: cn("text-green-400/70"),
			borderColor: cn("border-green-300"),
			dividerColor: cn("bg-green-300"),
		},
	},
	sunset: {
		meta: { name: "Sunset", value: "sunset", emoji: "🌇" },
		ui: {
			bgColor: cn("bg-gradient-to-r from-orange-100 to-rose-100"),
			textColor: cn("text-orange-950"),
			primaryColor: cn("text-orange-600"),
			mutedColor: cn("text-orange-500/70"),
			borderColor: cn("border-orange-600"),
			dividerColor: cn("bg-orange-600"),
		},
	},
	lavender: {
		meta: { name: "Lavender", value: "lavender", emoji: "💐" },
		ui: {
			bgColor: cn("bg-violet-100"),
			textColor: cn("text-violet-950"),
			primaryColor: cn("text-violet-600"),
			mutedColor: cn("text-violet-500/70"),
			borderColor: cn("border-violet-600"),
			dividerColor: cn("bg-violet-600"),
		},
	},
	ocean: {
		meta: { name: "Ocean", value: "ocean", emoji: "🌊" },
		ui: {
			bgColor: cn("bg-gradient-to-r from-cyan-100 to-blue-100"),
			textColor: cn("text-cyan-950"),
			primaryColor: cn("text-cyan-600"),
			mutedColor: cn("text-cyan-500/70"),
			borderColor: cn("border-cyan-600"),
			dividerColor: cn("bg-cyan-600"),
		},
	},
	coffee: {
		meta: { name: "Coffee", value: "coffee", emoji: "☕" },
		ui: {
			bgColor: cn("bg-[#f5f0e8]"),
			textColor: cn("text-[#3a2618]"),
			primaryColor: cn("text-[#8b5a2b]"),
			mutedColor: cn("text-[#8b5a2b]/70"),
			borderColor: cn("border-[#8b5a2b]"),
			dividerColor: cn("bg-[#8b5a2b]"),
		},
	},
	cherry: {
		meta: { name: "Cherry", value: "cherry", emoji: "🍒" },
		ui: {
			bgColor: cn("bg-red-50"),
			textColor: cn("text-red-950"),
			primaryColor: cn("text-red-600"),
			mutedColor: cn("text-red-500/70"),
			borderColor: cn("border-red-600"),
			dividerColor: cn("bg-red-600"),
		},
	},
	monochrome: {
		meta: { name: "Monochrome", value: "monochrome", emoji: "⚫⚪" },
		ui: {
			bgColor: cn("bg-white"),
			textColor: cn("text-black"),
			primaryColor: cn("text-black"),
			mutedColor: cn("text-gray-600"),
			borderColor: cn("border-black"),
			dividerColor: cn("bg-black"),
		},
	},
};
