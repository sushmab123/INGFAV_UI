import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import XHR from "i18next-xhr-backend";

 

i18n

    .use(XHR)

    .use(LanguageDetector)

    .init({

        fallbackLng: {

          

            default: ['en'],

        },

        debug: true,

        interpolation: {

            escapeValue: false 

        },

        backend: {
            loadPath: `./locales/{{lng}}/{{ns}}.json`
        },

        react: {

            wait: true,

            useSuspense: false

        }

    });

 

export default i18n;


