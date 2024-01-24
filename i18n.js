module.exports = {
    "locales": ["de", "en"],
    "defaultLocale": "de",
    "logBuild": true,
    "pages": {"*": ["common"]},
    "loadLocaleFrom": async (lang, ns) => require(`./locales/${lang}/${ns}.js`),
};
