import React from 'react'

const ResumeCard = ({ date, title, content}) => {
    return (
        <>
            <div>
                <span className='text-red-500 absolute'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-bookmark"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z" /></svg>
                </span>
                <div className='flex flex-col shadow-lg p-8 w-full'>
                    <p className='text-zinc-500'>{date}</p>
                    <h4 className="text-2xl py-2">{title}</h4>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}

export default ResumeCard
