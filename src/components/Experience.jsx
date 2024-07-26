import React from 'react'
import html from '../asset/html.png'
import css from '../asset/css.png'
import javascript from '../asset/javascript.png'
import react from '../asset/react.png'
import tailwind from '../asset/tailwind.png'
import github from '../asset/github.png'
import java from '../asset/java.png'
import hibernate from '../asset/hibernate.png'

const Experience = () => {

    const experiences=[
        {
            id:1,
            src:html,
            title:'HtML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:github,
            title:'GITHUB',
            style:'shadow-gray-400'
        },
        {
            id:7,
            src:java,
            title:'JAVA',
            style:'shadow-orange-600'
        },
        {
            id:8,
            src:hibernate,
            title:'HIBERNATE',
            style:'shadow-gray-700'
        },
    ]

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen ">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div className='pb-8 mt-32'>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"> Experience </p>

                    <p className='py-6'> These are the technologies I've worked with </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
{
                experiences.map(({id,src,title,style})=>(
                    <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}` }>
                    <img src={src} alt="" className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                </div>
        ))}
            </div>
        </div>
    </div>
  )
}

export default Experience;