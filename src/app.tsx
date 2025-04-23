import { cn } from "@/cn";
import { languages } from "@/languages";
import { SettingButton } from "@/setting-button";
import { themes } from "@/themes";
import { useBirthday } from "@/use-birthday";
import { useState } from "react";

export const App = () => {
	const { name, age, wishes, emoji, theme, setTheme, language, setLanguage } =
		useBirthday();
	const [isVisible, setIsVisible] = useState(false);

	/**
	 * Derive parameters from the state.
	 */
	const currentTheme = themes[theme];
	const currentLanguage = languages[language];
	const themeCodes = Object.values(themes).map(({ meta: { value } }) => value);
	const languageCodes = Object.values(languages).map(({ code }) => code);

	/**
	 * Changes the current theme to another theme. Do this by
	 * finding the index of the current theme, then cycle through
	 * the available themes.
	 */
	const handleThemeChange = () => {
		const idx = themeCodes.findIndex((t) => t === theme);
		if (idx === -1) {
			setTheme("light");
			return;
		}

		// Cycle to the next theme, go back to zero if we have exhausted the
		// available themes.
		const nextTheme = themeCodes[(idx + 1) % themeCodes.length];
		setTheme(nextTheme);
	};

	/**
	 * Changes the current language to another language. Do this by
	 * finding the index of the current language in the language codes,
	 * then cycle through the available languages.
	 */
	const handleLanguageChange = () => {
		const idx = languageCodes.findIndex((lang) => lang === language);
		if (idx === -1) {
			setLanguage("en");
			return;
		}

		// Cycle to the next language, go back to zero if we have exhausted the
		// available languages.
		const nextLanguage = languageCodes[(idx + 1) % languageCodes.length];
		setLanguage(nextLanguage);
	};

	/**
	 * Opens the overlay to configure the app.
	 */
	const handleSettingsButtonClick = () => {
		setIsVisible((current) => !current);
	};

	return (
		<main
			className={cn(
				"flex min-h-screen w-full items-center justify-center p-4",
				currentTheme.ui.bgColor,
			)}
		>
			<article className="flex w-full max-w-lg flex-col items-center text-center">
				<section
					className={cn(
						"relative mb-8 flex h-24 w-24 items-center justify-center rounded-full border-3 border-dashed",
						currentTheme.ui.borderColor,
					)}
				>
					<span className="text-4xl">{emoji}</span>
				</section>

				<h1
					className={cn(
						"mb-2 font-medium",
						name ? "text-xl" : "text-4xl",
						currentTheme.ui.primaryColor,
					)}
				>
					{currentLanguage.birthday}
				</h1>

				{name && (
					<h2
						className={cn(
							"mb-4 font-bold text-4xl tracking-tight",
							currentTheme.ui.textColor,
						)}
					>
						{name}
						{age && <span className="ml-2">({age})</span>}
					</h2>
				)}

				<aside
					className={cn(
						"my-6 h-0.5 w-16 rounded-full",
						currentTheme.ui.dividerColor,
					)}
				/>

				<p className={cn("mb-12 max-w-sm", currentTheme.ui.mutedColor)}>
					{wishes ? wishes : currentLanguage.congratulatory}
				</p>

				<div className={cn("mt-8 text-[0.25rem]", currentTheme.ui.textColor)}>
					<p>
						Make your own by customizing the URL parameters (name and wishes
						have to be encoded in Base64, all query parameters are optional):
					</p>

					<code>
						{`${window.location.protocol}//${window.location.host}?name={name}?&wishes={wishes}?&age={age}?&emoji={emoji}?&language={language}&theme={theme}?`}
					</code>
				</div>

				<article>
					<div
						className={cn(
							"fixed inset-0 z-[99] bg-[#d4a076]",
							"transition-opacity duration-600",
							isVisible ? "opacity-100" : "pointer-events-none opacity-0",
						)}
					/>

					<div
						role="dialog"
						className={cn(
							"h-24 w-24",
							"-bottom-[6.5rem] -right-[6.5rem] fixed z-[100] rounded-full",
							"transition-transform duration-600 ease-[cubic-bezier(0.86,0,0.07,1)]",
							"bg-radial from-[#d4a076]/30 to-transparent",
							isVisible ? "scale-[80]" : "scale-100",
						)}
					/>

					<section
						className={cn(
							"mx-auto h-full max-w-[90rem]",
							"fixed top-0 right-0 left-0 z-[105]",
							"flex items-center justify-center gap-y-5",
							"transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]",
							isVisible
								? "visible w-full opacity-100"
								: "invisible w-0 opacity-0",
						)}
					>
						<ul className="w-full list-none text-center">
							<li className="flex flex-col items-center gap-y-4">
								<SettingButton onClick={handleThemeChange}>
									Theme: {currentTheme.meta.emoji} {currentTheme.meta.name}
								</SettingButton>
							</li>

							<li className="flex flex-col items-center gap-y-4">
								<SettingButton onClick={handleLanguageChange}>
									Language: {currentLanguage.flag} {currentLanguage.label} (
									{currentLanguage.code})
								</SettingButton>
							</li>
						</ul>
					</section>
				</article>

				<aside className="fixed right-6 bottom-6 z-[105]">
					<button
						type="button"
						onClick={handleSettingsButtonClick}
						className={cn(
							"relative",
							"transition-all duration-200 ease-in-out",
							"hover:text-sky-800 focus:text-sky-800 active:text-sky-800",
							"hover:font-bold focus:font-bold active:font-bold",
							currentTheme.ui.textColor,
						)}
					>
						<svg
							role="img"
							aria-label="Wand icon to configure settings"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M15 4V2" />
							<path d="M15 16v-2" />
							<path d="M8 9h2" />
							<path d="M20 9h2" />
							<path d="M17.8 11.8 19 13" />
							<path d="M15 9h.01" />
							<path d="M17.8 6.2 19 5" />
							<path d="m3 21 9-9" />
							<path d="M12.2 6.2 11 5" />
						</svg>
					</button>
				</aside>
			</article>
		</main>
	);
};
