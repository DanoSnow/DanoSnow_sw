import React, { useContext } from 'react'
import ServiceCard from './ServiceCard'
import backend from '../assets/server-cog.png'
import data from '../assets/chart-bar.png'
import frontend from '../assets/device-analytics.png'
import { Language } from '../context/Language'

const Services = () => {
    const {language} = useContext(Language);

    return (
        <>
            <section id='services' className="hero bg-zinc-800 text-white py-4 px-20">
                <div className="hero-content">
                    <div className='flex flex-col items-center space-y-4'>
                        <h2 className="text-4xl font-bold py-2">{language=='english' ? 'Services' : language=='spanish' ? 'Servicios' : ''}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <ServiceCard imgUrl={frontend} title={language=='english' ? 'Frontend developing' : language=='spanish' ? 'Desarrollo frontend' : ''} content='React JS, Tailwind CSS, Bootstrap'/>
                            <ServiceCard imgUrl={backend} title={language=='english' ? 'Backend developing' : language=='spanish' ? 'Desarrollo backend' : ''} content='Python - FastAPI, Python - SQLAlchemy'/>
                            <ServiceCard imgUrl={data} title={language=='english' ? 'Data Analysis | Science' : language=='spanish' ? 'Análisis | Ciencia de datos' : ''} content='Python - Numpy, Python - Pandas, Python - Matplotlib, Python - Seaborn, Python - Plotly'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
