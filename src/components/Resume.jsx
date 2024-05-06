import React, { useContext } from 'react'
import ResumeCard from './ResumeCard'
import { Language } from '../context/Language'

const Resume = () => {
    const {language} = useContext(Language);
    //Not until I make both resume
    //const URL = 'https://drive.google.com/file/d/1tcNqUI5-t_chNd7DTOhuUjhi8ApJpWCb/view?usp=sharing'
    
    return (
        <>
            <section id='resume' className="hero bg-zinc-800 text-white py-4 px-20">
                <div className="hero-content">
                    <div className='flex flex-col items-center space-y-4'>
                        <h2 className="text-4xl font-bold py-2">{language=='english' ? 'Resume' : language=='spanish' ? 'Currículum' : ''}</h2>
                        <div className='md:grid md:grid-cols-2 md:gap-4 md:space-y-0 flex flex-col space-y-8'>
                            <div className='flex flex-col space-y-2'>
                                <h3 className="text-2xl font-bold py-2">{language=='english' ? 'Education' : language=='spanish' ? 'Educación' : ''}</h3>
                                <ResumeCard date={language=='english' ? 'Sep. 2016 - Jan. 2022' : language=='spanish' ? 'Sep. 2016 - Ene. 2022' : ''}
                                title={language=='english' ? 'Automation Engineering career' : language=='spanish' ? 'Carrera de Ingeniería en Automatización' : ''}
                                content={language=='english' ? 'Technological University of Havana CUJAE' : language=='spanish' ? 'Universidad Tecnológica de la Habana CUJAE' : ''}/>
                                <ResumeCard date={language=='english' ? 'Oct. 2022 - Dec. 2022' : language=='spanish' ? 'Oct. 2022 - Dic. 2022' : ''}
                                title={language=='english' ? 'Postgraduate degree in Data Analysis and Machine Learning with Python' : language=='spanish' ? 'Postgrado en Análisis de Datos y Machine Learning con Python' : ''}
                                content={language=='english' ? 'University of Havana' : language=='spanish' ? 'Universidad de la Habana' : ''}/>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <h3 className="text-2xl font-bold py-2">{language=='english' ? 'Experience' : language=='spanish' ? 'Experiencia' : ''}</h3>
                                <ResumeCard date={language=='english' ? 'Aug. 2023 - Present day' : language=='spanish' ? 'Ago. 2023 - Actualidad' : ''}
                                title={language=='english' ? 'Advanced computing specialist (full time)' : language=='spanish' ? 'Especialista en computación avanzada (tiempo completo)' : ''}
                                content={language=='english' ? 'Center for Advanced Studies of Cuba (CEA)' : language=='spanish' ? 'Centro de Estudios Avanzados de Cuba (CEA)' : ''}/>
                                <ResumeCard date={language=='english' ? 'Feb. 2024 - May. 2024' : language=='spanish' ? 'Feb. 2024 - May. 2024' : ''}
                                title={language=='english' ? 'Python Data Scientist (part time)' : language=='spanish' ? 'Científico de Datos con Python (tiempo parcial)' : ''}
                                content={language=='english' ? 'National Radar Center of Cuba (LADETEC)' : language=='spanish' ? 'Centro Nacional de Radares de Cuba (LADETEC)' : ''}/>
                                <ResumeCard date={language=='english' ? 'May. 2024 - Present day' : language=='spanish' ? 'May. 2024 - Actualidad' : ''}
                                title={language=='english' ? 'Frontend developer (full time)' : language=='spanish' ? 'Desarrollador frontend (tiempo completo)' : ''}
                                content={language=='english' ? 'Reserva Inc' : language=='spanish' ? 'Reserva Inc' : ''}/>
                            </div>
                        </div>
                        {/* Not yet until I make the both resume */}
                        {/* <a role='button' href={URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-red-500 rounded-full hover:bg-red-500 hover:text-white">
                            {language=='english' ? 'See full resume' : language=='spanish' ? 'Ver currículum completo' : ''}
                        </a> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume