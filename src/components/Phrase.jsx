import React, { useContext } from 'react'
import { Language } from '../context/Language'

const Phrase = () => {
    const {language} = useContext(Language);

    return (
        <>
            <section id='phrase' className='flex flex-col items-center space-y-2 bg-zinc-700 text-white py-4 px-20'>
                <h2 className='text-5xl italic'>{language=='english' ? '"If you can imagine it you can program it"' : 
                language=='spanish' ? '"Si puedes imaginarlo puedes programarlo"' : 
                ''}</h2>
                <p>{language=='english' ? 'Alejandro Taboada. Rest in peace' :
                language=='spanish' ? 'Alejandro Taboada. Descansa en paz' :
                ''}</p>
            </section>
        </>
    )
}

export default Phrase
