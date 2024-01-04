import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
function HomeLayout({ children }) {

    function changeWidth() {
        const drawSide = document.getElementsByClassName('drawer-side')
        drawSide[0].style.width = 'auto'
    }


    function hideDrawer() {
        const element = document.getElementsByClassName('drawer-toggle')
        element[0].checked = false;


        const drawSide = document.getElementsByClassName('drawer-side')
        drawSide[0].style.width = 'auto'
        // changeWidth();
    }

    return (
        <div className='min-h-[90vh]'>
            <div className="drawer absolute left-0 z-50 w-fit">
                <input type="checkbox" className='drawer-toggle' id='my-drawer' />
                <div className='drawer-content'>
                    <label htmlFor='my-drawer' className=' cursor-pointer relative'>
                        <FiMenu
                            onClick={changeWidth}
                            size={'32px'}
                            className=' font-bold text-white m-4'
                        />
                    </label>
                </div>
                <div className='drawer-side w-0'>
                    <label htmlFor="my-drawer" className='drawer-overlay'>
                    </label>
                    <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative ">
                        <li className=' w-fit absolute right-2 z-50'>
                            <button className=''>
                                <AiFillCloseCircle
                                    size={'24px'}
                                    onClick={hideDrawer} />
                            </button>
                        </li>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/couces'>
                                All Cources
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {children}

            <Footer />
        </div>
    )
}

export default HomeLayout
