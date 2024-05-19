import React, { useState, useEffect, useContext } from 'react'
import { Language } from '../context/Language';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(''); // Estado para almacenar el enlace activo
    const {language, setLanguage} = useContext(Language);

    useEffect(() => {
        //ScrollSpy
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveLink(sectionId); // Actualiza el estado del enlace activo
                }
            });
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function selectSpanish(){
        setLanguage('spanish');
    }
    function selectEnglish(){
        setLanguage('english');
    }

    return (
        <>
            <div className="navbar bg-transparent text-white absolute">
                <div className="lg:navbar-start w-screen">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl rounded-box w-32 bg-transparent">
                            <li><a href='#home' className={!activeLink ? 'text-red-500 px-2' : activeLink == 'home' ? 'text-red-500  px-2' : 'px-2'}>{language=='english' ? 'Home' : language=='spanish' ? 'Inicio' : ''}</a></li>
                            <li><a href='#about' className={activeLink == 'about' || activeLink == 'phrase' ? 'text-red-500  px-2' : 'px-2'}>{language=='english' ? 'About' : language=='spanish' ? 'Sobre mi' : ''}</a></li>
                            <li><a href='#services' className={activeLink == 'services' ? 'text-red-500 px-2' : 'px-2'}>{language=='english' ? 'Services' : language=='spanish' ? 'Servicios' : ''}</a></li>
                            <li><a href='#skills' className={activeLink == 'skills' ? 'text-red-500 px-2' : 'px-2'}>{language=='english' ? 'Skills' : language=='spanish' ? 'Habilidades' : ''}</a></li>
                            <li><a href='#resume' className={activeLink == 'resume' ? 'text-red-500 px-2' : 'px-2'}>{language=='english' ? 'Resume' : language=='spanish' ? 'CV' : ''}</a></li>
                            <li><a href='#contact' className={activeLink == 'contact' ? 'text-red-500 px-2' : 'px-2'}>{language=='english' ? 'Contact' : language=='spanish' ? 'Contacto' : ''}</a></li>
                            <li>
                                <details>
                                    <summary className='flex flex-row pl-2'>                                    
                                        {language=='english' ? 'Language' : language=='spanish' ? 'Idioma' : ''}
                                    </summary>
                                    <ul className="bg-transparent rounded-t-none ml-0 pl-0">
                                        <li><a onClick={selectSpanish}>
                                            <div className='grid grid-cols-4 items-center'>
                                                <span>{language=='spanish' ? <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> : ''}</span>
                                                <p className='col-span-3'>{language=='english' ? 'Spanish' : language=='spanish' ? 'Español' : ''}</p>
                                            </div>
                                        </a></li>
                                        <li><a onClick={selectEnglish}>
                                            <div className='grid grid-cols-4 items-center'>
                                                <span>{language=='english' ? <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> : ''}</span>
                                                <p className='col-span-3'>{language=='english' ? 'English' : language=='spanish' ? 'Inglés' : ''}</p>
                                            </div>
                                        </a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <h1 className="text-3xl px-4 flex">Dano Snow <span className='text-red-500 ml-2'>SW</span></h1>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#home' className={!activeLink ? 'text-red-500 px-2' : activeLink == 'home' ? 'text-red-500 ' : 'px-2'}>{language=='english' ? 'Home' : language=='spanish' ? 'Inicio' : ''}</a></li>
                        <li><a href='#about' className={activeLink == 'about' || activeLink == 'phrase' ? 'text-red-500 ' : 'px-2'}>{language=='english' ? 'About' : language=='spanish' ? 'Sobre mi' : ''}</a></li>
                        <li><a href='#services' className={activeLink == 'services' ? 'text-red-500 px-2' : 'px-2'}>{language=='english' ? 'Services' : language=='spanish' ? 'Servicios' : ''}</a></li>
                        <li><a href='#skills' className={activeLink == 'skills' ? 'text-red-500 px-2' : 'px-2'}>{language=='english' ? 'Skills' : language=='spanish' ? 'Habilidades' : ''}</a></li>
                        <li><a href='#resume' className={activeLink == 'resume' ? 'text-red-500 px-2' : 'px-2'}>{language=='english' ? 'Resume' : language=='spanish' ? 'CV' : ''}</a></li>
                        <li><a href='#contact' className={activeLink == 'contact' ? 'text-red-500 px-2' : 'px-2'}>{language=='english' ? 'Contact' : language=='spanish' ? 'Contacto' : ''}</a></li>
                        <li className="dropdown dropdown-end">
                            <div tabIndex={0} className='px-2'>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="text-white icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl w-32">
                                <li><a onClick={selectSpanish}>
                                    <div className='grid grid-cols-4 items-center'>
                                        <span>{language=='spanish' ? <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> : ''}</span>
                                        <p className='col-span-3'>{language=='english' ? 'Spanish' : language=='spanish' ? 'Español' : ''}</p>
                                    </div>
                                </a></li>
                                <li><a onClick={selectEnglish}>
                                    <div className='grid grid-cols-4 items-center'>
                                        <span>{language=='english' ? <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> : ''}</span>
                                        <p className='col-span-3'>{language=='english' ? 'English' : language=='spanish' ? 'Inglés' : ''}</p>
                                    </div>
                                </a></li>
                            </ul>
                        </li>
                        {/* <li>
                            <details>
                                <summary className='flex flex-row'>                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                                </summary>
                                <ul className="p-2 bg-transparent rounded-t-none">
                                    <li><a onClick={selectSpanish} className={language=='spanish' ? 'text-red-500' : ''}>
                                        {language=='english' ? 'Spanish' : language=='spanish' ? 'Español' : ''}
                                    </a></li>
                                    <li><a onClick={selectEnglish} className={language=='english' ? 'text-red-500' : ''}>
                                        {language=='english' ? 'English' : language=='spanish' ? 'Inglés' : ''}
                                    </a></li>
                                </ul>
                            </details>
                        </li> */}
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
