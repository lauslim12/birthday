import { isValidLanguage } from "@/languages";
import { isValidTheme } from "@/themes";
import { useState } from "react";

export const useBirthday = () => {
	/**
	 * Get URL parameters.
	 */
	const search = new URLSearchParams(window.location.search);
	const params = {
		name: search.get("name"),
		age: search.get("age"),
		wishes: search.get("wishes"),
		emoji: search.get("emoji"),
		language: search.get("language"),
		theme: search.get("theme"),
	};

	/**
	 * Ensure that our query parameters match to our expected input, especially
	 * inputs with default values.
	 */
	const lang = isValidLanguage(params.language) ? params.language : "en";
	const mode = isValidTheme(params.theme) ? params.theme : "light";
	const emoji = params.emoji ? params.emoji : "🎉";

	/**
	 * Load default values as state.
	 */
	const [theme, setTheme] = useState(mode);
	const [language, setLanguage] = useState(lang);

	/**
	 * Decode the values of `name` and `wishes` from Base64.
	 */
	const parsedName = params.name
		? decodeURIComponent(window.atob(params.name))
		: null;
	const parsedWishes = params.wishes
		? decodeURIComponent(window.atob(params.wishes))
		: null;

	/**
	 * Return the variables that we want.
	 */
	return {
		name: parsedName,
		age: params.age,
		wishes: parsedWishes,
		emoji,
		theme,
		setTheme,
		language,
		setLanguage,
	};
};
