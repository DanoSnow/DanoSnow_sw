import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Language } from '../context/Language'
import studioImg from '../assets/studio.jpg'

const Home = () => {
    const {language} = useContext(Language);

    return (
        <>
            <div className='sticky top-0 z-[1]'>
                <Navbar />
            </div>
            <section id='home' className="hero min-h-screen" style={{backgroundImage: `url(${studioImg})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content flex-col-reverse md:flex-row">
                    <div>
                        <h2 className="mb-5 text-2xl">{language=='english' ? 'Hello,' : language=='spanish' ? 'Hola,' : ''}</h2>
                        <h1 className="mb-5 text-5xl font-bold">{language=='english' ? 'I am Daniel Izaguirre' : language=='spanish' ? 'Soy Daniel Izaguirre' : ''}</h1>
                        <p className="mb-5">{language=='english' ? 'Aka Dano Snow SW.' : language=='spanish' ? 'Alias Dano Snow SW.' : ''}</p>
                        <p className="mb-5">{language=='english' ? 'Frontend developer. Backend Developer. Data Analist. Data Scientist.' : 
                        language=='spanish' ? 'Desarrollador Frontend. Desarrollador Backend. Analista de datos. Científico de datos.' : 
                        ''}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
