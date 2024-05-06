import React, { createContext, useState } from 'react'

export const Language = createContext();

export const LanguageData = ({ children }) => {
    const [language, setLanguage] = useState('english');
    return (
        <Language.Provider value={{ language, setLanguage }}>
            {children}
        </Language.Provider>
    )
}

