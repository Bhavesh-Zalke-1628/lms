import React from 'react'
import { useNavigate } from 'react-router-dom'

function CourceCard(data) {

    const navigate = useNavigate();
    return (
        <div
            onClick={
                () => {
                    navigate('/course/description')
                }
            }
            className=' text-white w-[22rem] h-[430px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700'>
            <div className=' overflow-hidden '>
                <img
                    src={data?.thumbnails?.secure_url}
                    alt="Cource thaumbnail"
                    className=' w-full h-40 rounded-tl-lg rounded-tr-lg group-hover:sc-[1,2] transition-all ease-in-out duration-300'
                />
                <div className=' p-3 space-y-1 text-white '>
                    <h2 className=' text-4xl font-bold text-yellow-500 line-clamp-2'>
                        {data?.title}
                        <p className=' line-clamp-2'>
                            {data?.description}
                        </p>
                        <p className=' font-semibold'>
                            <span className=' text-yellow-500 font-bold'> CateGory : </span>
                            {data?.categeory}
                        </p>

                        <p className=' font-semibold'>
                            <span className=' text-yellow-500 font-bold'> Total Lecture : </span>
                            {data?.numbersOfLectures}
                        </p>

                        <p className=' font-semibold'>
                            <span className=' text-yellow-500 font-bold'> Instructor : </span>
                            {data?.createdBy}
                        </p>

                    </h2>
                </div>
            </div>
        </div>
    )
}

export default CourceCard

