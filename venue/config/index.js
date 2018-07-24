const en = require("../lang/en-CA.js");
const fr = require("../lang/fr-CA.js");

const I18N = {
  locales: [
    {
      code: "en",
      iso: "en-CA",
      name: "English"
    },
    {
      code: "fr",
      iso: "fr-CA",
      name: "Français"
    }
  ],
  detectBrowserLanguage: {
    useCookie: false
  },
  defaultLocale: "en",
  vueI18n: {
    fallbackLocale: "en",
    messages: { en, fr }
  }
};

module.exports = {
  I18N
};
