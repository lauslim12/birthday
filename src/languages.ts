type LanguageCode = "en" | "id" | "ja" | "kr" | "cn";

/**
 * Language metadata, `code` is important for iterations with `Object.entries`, since
 * `Object.entries` does not preserve the type of the keys.
 */
type LanguageMetadata = {
	code: LanguageCode;
	flag: string;
	label: string;
	birthday: string;
	congratulatory: string;
};

export const isValidLanguage = (lang: unknown): lang is LanguageCode => {
	if (typeof lang !== "string") {
		return false;
	}

	return lang in languages;
};

export const languages: Record<LanguageCode, LanguageMetadata> = {
	en: {
		code: "en",
		flag: "🇺🇸",
		label: "English",
		birthday: "Happy birthday!",
		congratulatory:
			"Wishing you a wonderful day filled with joy and happiness!",
	},
	id: {
		code: "id",
		flag: "🇮🇩",
		label: "Bahasa Indonesia",
		birthday: "Selamat ulang tahun!",
		congratulatory: "Semoga makin sukses ya!",
	},
	ja: {
		code: "ja",
		flag: "🇯🇵",
		label: "日本語",
		birthday: "お誕生日おめでとう！",
		congratulatory: "素晴らしい一年になりますように！",
	},
	kr: {
		code: "kr",
		flag: "🇰🇷",
		label: "한국",
		birthday: "생일 축하해！",
		congratulatory: "항상 건강하고 행복하세요.",
	},
	cn: {
		code: "cn",
		flag: "🇨🇳",
		label: "中文",
		birthday: "生日快乐！",
		congratulatory: "祝你身体健康，万事如意。",
	},
};
