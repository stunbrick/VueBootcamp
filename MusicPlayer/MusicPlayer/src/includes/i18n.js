import {createI18n} from "vue-i18n";
import en from "@/locales/en.json";
import afr from "@/locales/afr.json";
export default createI18n({
    locale: "afr",
    fallbackLocale: "en",
    messages: {
        en,
        afr,
    },
    numberFormats: {
        en: {
            currency: {
                style: "currency",
                currency: "USD",
            }
        },
        afr: {
            currency: {
                style: "currency",
                currency: "ZAR",
            }
        }
    },
});