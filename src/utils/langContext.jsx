import React, { useState } from "react"
import messageEnghish from './lang/en-US.json'
import messageSpanish from './lang/es-AR.json'
import messagePortuguese from './lang/pt-BR.json'
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {

    let localeDefault;
    let menssageDefault;

    const lang = localStorage.getItem('lang')

    if (lang) {
        localeDefault = lang

        if (lang === 'es-AR') {
            menssageDefault = messageSpanish
        } else if (lang === 'en-US') {
            menssageDefault = messageEnghish
        }
        else if (lang === 'pt-BR') {
            menssageDefault = messagePortuguese
        } else {
            localeDefault = 'en-US'
            menssageDefault = messageEnghish
        }


    }

    const [menssages, setMessage] = useState(menssageDefault);
    const [locale, setLocale] = useState(localeDefault);

    const setLaguage = (language) => {
        switch (language) {
            case 'es-AR':
                setMessage(messageSpanish);
                setLocale("es-AR");
                localStorage.setItem('lang', "es-AR")
                break;
            case 'en-US':
                setMessage(messageEnghish);
                setLocale("en-US");
                localStorage.setItem('lang', "en-US")
                break;
            case 'pt-BR':
                setMessage(messagePortuguese);
                setLocale("pt-BR");
                localStorage.setItem('lang', "pt-BR")
                break;
            default:
                setMessage(messageEnghish);
                setLocale("en-US");
                localStorage.setItem('lang', "en-US")
        }
    }

    return (
        <langContext.Provider value={{ setLanguage: setLaguage }}>
            <IntlProvider locale={locale} messages={menssages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { LangProvider, langContext }