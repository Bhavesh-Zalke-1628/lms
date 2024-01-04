import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import AboutImg from '../Assets/Images/aboutMainImage.png'
import apj from '../Assets/Images/apj.png'
import billgates from '../Assets/Images/billgates.png'
import einstine from '../Assets/Images/einstein.png'
import steveJobs from '../Assets/Images/steveJobs.png'
import nelsonMondela from '../Assets/Images/nelsonMandela.png'
function AboutUs() {
    return (
        <HomeLayout>
            <div className=' pl-20 pt-20 flex flex-col text-white'>
                <div className=' flex items-center gap-5 px-10'>
                    <section className=' w-1/2 scroll-py-10'>
                        <h1 className=' text-5xl text-yellow-500 font-semibold'>Afordable and Quality Education</h1>
                        <p className=' text-xl text-gray-200'>
                            Our goal is to provide afordable and the Quality education to the world,
                            We are providing the platform form for the aspiring teacher and students to share their skiils , creativity and knowledge to each other
                            to empawer and contribute in the growth and wellness of mankind.
                        </p>
                    </section>
                    <div className=' w-1/2'>
                        <img
                            id='test1'
                            style={{
                                filter: 'drop-shadow(0px 10px rgb(0,0,0))'
                            }}
                            className=' drop-shadow-2xl'
                            src={AboutImg}
                            alt="AboutUs img" />
                    </div>
                </div>
                <div className="carousel w-1/2 my-16 m-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className=' flex  flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={nelsonMondela} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className=' text-xl text-gray-200'>
                                "Education is the most powerfull tool you can used to change the world"
                            </p>
                            <h3 className=' text-2xl font-semibold capitalize'>nelson mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className=' flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className=' text-xl text-gray-200'>
                                "Never stop fighting until you arrive at your destined place - that is, the unique you"
                            </p>
                            <h3 className=' text-2xl font-semibold capitalize'>APJ Abdul Kalam</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className=' flex  flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={einstine} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className=' text-xl text-gray-200'>
                                "Life is like riding a bicycle. To keep your balance, you must keep moving."
                            </p>
                            <h3 className=' text-2xl font-semibold capitalize'>Albert Einstine</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className=' flex  flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className=' text-xl text-gray-200'>
                                "You can't connect the dots looking forward; you can only connect them looking backwards."
                            </p>
                            <h3 className=' text-2xl font-semibold capitalize'>steve jobs</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <div className=' flex  flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={billgates} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className=' text-xl text-gray-200'>
                                “The belief that the world is getting worse, that we can't solve extreme poverty and disease, isn't just mistaken."
                            </p>
                            <h3 className=' text-2xl font-semibold capitalize'>Bill gates</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUs
