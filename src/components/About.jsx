import React, { useContext } from 'react'
import avatar from '../assets/DanoSnow.png'
import { Language } from '../context/Language'

const About = () => {
    const {language} = useContext(Language);

    return (
        <>
            <section id='about' className="hero bg-zinc-800 text-white py-4 px-20">
                <div className="hero-content">
                    <div className='flex flex-col items-center'>
                        <h2 className="text-4xl font-bold py-2">{language=='english' ? 'About me' : language=='spanish' ? 'Sobre mi' : ''}</h2>
                        <div className='flex md:flex-row md:space-x-4 md:space-y-0 flex-col space-x-0 items-center space-y-2'>
                            <img src={avatar} className="w-60 rounded-lg" />
                            <p className="py-6">{language=='english' ? 'Developer with experience in Frontend and Backend developing, as well as in Data Analysis and Data Science. Outsanding skills in the main programming languages Python and Javascript, and solid knowledge in relational dabatase management. Passionate about finding innovative and efficient solutions to technological challenges. Oriented towards the development of quality software highly adaptable and with effective problem solving skills. Commited to learning new technologies and staying abreast of the latest trends in the industry.' :
                            language=='spanish' ? 'Desarrollador con experiencia en desarrollo Frontend y Backend, así como en Análisis de Datos y Ciencia de Datos. Destacados conocimientos en los principales lenguajes de programación Python y Javascript, y sólidos conocimientos en gestión de bases de datos relacionales. Apasionado por encontrar soluciones innovadoras y eficientes a los desafíos tecnológicos. Orientado al desarrollo de software de calidad, altamente adaptable y con capacidad de resolución efectiva de problemas. Comprometido con aprender nuevas tecnologías y mantenerse al tanto de las últimas tendencias de la industria.' :
                            ''}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
