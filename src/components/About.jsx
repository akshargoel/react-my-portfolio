import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat ex blanditiis facilis perferendis delectus aliquid minus reprehenderit ab, numquam, necessitatibus et distinctio? Aliquam architecto corrupti, libero a accusantium inventore eos odit. Voluptates, quam. Sunt soluta cumque libero fuga distinctio, quas, quisquam nam exercitationem ut, reprehenderit facilis et quaerat minima.
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore perferendis, adipisci, pariatur sint eius quae, culpa quasi atque illum corrupti expedita vero rem similique earum deleniti modi cupiditate officiis aut!
            </p>
        </div>
    </div>
  )
}

export default About