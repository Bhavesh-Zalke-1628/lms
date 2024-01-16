import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeLayout from '../../Layouts/HomeLayout'
import CourceCard from '../../Component/CourceCard'
import { getAllCourses } from '../../Redux/Slices/CourceSlice'


function CourceList() {
    const dispatch = useDispatch()

    const { courceData } = useSelector(state => state.cource)

    console.log(courceData)

    async function loadCources() {
        await dispatch(getAllCourses)
    }
    useEffect(() => {
        loadCources()
    }, []);
    return (
        <HomeLayout>
            <div className=' min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white'>
                <h1 className=' text-center text-3xl font-semibold '>Expore the Cources made by
                    <span className=' font-bold text-yellow-500'> Industry Expert</span>
                </h1>
                <div className="mb-10 flex flex-wrap gap-14">
                    {courceData?.map((element) => {
                        console.log(element)
                        return <CourceCard key={element._id} data={element} />

                    })}
                </div>
            </div>
        </HomeLayout>
    )
}

export default CourceList