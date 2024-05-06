import React from 'react'

const SkillCard = ({ imgUrl, title, content }) => {
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
                <div>{renderContent}</div>
            </div>
        </>
    )
}

export default SkillCard
