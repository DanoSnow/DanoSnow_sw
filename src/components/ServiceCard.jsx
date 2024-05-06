import React, { useContext } from 'react'
import { Language } from '../context/Language';

const ServiceCard = ({ imgUrl, title, content }) => {
    const {language} = useContext(Language);
    const contentList = content.split(', ');
    const renderContent = contentList.map(e => <p key={e}>• {e}</p>);
    
    return (
        <>
            <div className='flex flex-col items-start shadow-lg p-8 w-full'>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-28 h-28 bg-white rounded-full flex items-center justify-center'>
                        <img src={imgUrl} className='w-24' />
                    </div>
                </div>
                <h4 className="font-bold text-2xl py-2 w-full text-center">{title}</h4>
                <div className='flex flex-col items-start'>
                    <h5 className='text-xl'>{language=='english' ? 'Technologies:' : language=='spanish' ? 'Tecnologías' : ''}</h5>
                    <div>{renderContent}</div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
