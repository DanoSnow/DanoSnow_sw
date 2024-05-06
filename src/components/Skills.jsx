import React, { useContext } from 'react'
import SkillCard from './SkillCard'
import webDev from '../assets/braces.png'
import webDes from '../assets/code.png'
import backend from '../assets/brackets.png'
import dataAn from '../assets/chart-pie.png'
import dataSci from '../assets/brand-databricks.png'
import robot from '../assets/robot.png'
import mobile from '../assets/device-mobile.png'
import brain from '../assets/brain.png'
import { Language } from '../context/Language'

const Skills = () => {
    const {language} = useContext(Language);

    return (
        <>
            <section id='skills' className="hero bg-zinc-700 text-white py-4 px-20">
                <div className="hero-content">
                    <div className='flex flex-col items-center space-y-4'>
                        <h2 className="text-4xl font-bold py-2">{language=='english' ? 'Skills' : language=='spanish' ? 'Habilidades' : ''}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <SkillCard imgUrl={webDev} title={language=='english' ? 'Web Developing' : language=='spanish' ? 'Desarrollo Web' : ''} content='React, react-admin, Javascript, jQuery' />
                            <SkillCard imgUrl={webDes} title={language=='english' ? 'Web Design' : language=='spanish' ? 'Diseño Web' : ''} content='Tailwind CSS, DaisyUI, Material UI, Bootstrap, HTML 5, CSS 3' />
                            <SkillCard imgUrl={backend} title={language=='english' ? 'Backend Developing' : language=='spanish' ? 'Desarrollo Backend' : ''} content='Python - FastAPI, Python - SQLAlchemy' />
                            <SkillCard imgUrl={dataAn} title={language=='english' ? 'Data Analysis' : language=='spanish' ? 'Análisis de datos' : ''} content='Python - Numpy, Python - Pandas, Python - Matplotlib, Python - Seaborn, Python - Plotly' />
                            <SkillCard imgUrl={dataSci} title={language=='english' ? 'Data Science' : language=='spanish' ? 'Ciencia de datos' : ''} content='Python - Numpy, Python - Pandas, Python - Matplotlib, Python - Seaborn, Python - Plotly' />
                        </div>
                        <h3 className="text-3xl font-bold py-2">{language=='english' ? 'Learning' : language=='spanish' ? 'Aprendiendo' : ''}</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {/* <SkillCard imgUrl={robot} title={language=='english' ? 'Machine Learning Engineering' : language=='spanish' ? 'Ingeniería de Machine Learning' : ''} content='Python - Scikit-learn' /> */}
                            {/* <SkillCard imgUrl={brain} title={language=='english' ? 'Deep Learning Engineering' : language=='spanish' ? 'Ingeniería de Deep Learning' : ''} content='Python - Tensowflow' /> */}
                            <SkillCard imgUrl={brain} title={language=='english' ? 'AI Engineering' : language=='spanish' ? 'Ingeniería de IA' : ''} content='Python - Scikit-learn, Python - Tensowflow' />
                            <SkillCard imgUrl={webDev} title={language=='english' ? 'Web Developing' : language=='spanish' ? 'Desarrollo Web' : ''} content='Next JS' />
                            <SkillCard imgUrl={mobile} title={language=='english' ? 'Mobile Developing' : language=='spanish' ? 'Desarrollo Móvil' : ''} content='React Native' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
