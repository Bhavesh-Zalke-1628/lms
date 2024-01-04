import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Component/Footer'
function HomeLayout({ children }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // for checking if user is logged in 
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

    //role for display the option 
    const role = useSelector((state) => state?.auth?.role)

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

    function handleLogOut(e) {
        e.preventDefault();
        // const res = await dispatch(logout)
        // if (res?.payload?.success)
        // navigate('/')
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
                        {isLoggedIn && role === "Admin" && (
                            <li>
                                <Link to='/admin/dashboard'>Admin Dashboard</Link>
                            </li>
                        )}
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
                        {!isLoggedIn && (
                            <li className=' absolute bottom-4 w-[90%]'>
                                <div className='w-full flex items-center justify-center'>
                                    <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link to='/login'>Login</Link>
                                    </button>
                                    <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link to='/signup'>Sign Up</Link>
                                    </button>
                                </div>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li className=' absolute bottom-4 w-[90%]'>
                                <div className='w-full flex items-center justify-center'>
                                    <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link to='/user/profile'>Profile</Link>
                                    </button>
                                    <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link onClick={handleLogOut}'>Log Out</Link>
                                </button>
                            </div>
                            </li>
                        )}
                </ul>
            </div>
        </div >
            { children }

    < Footer />
        </div >
    )
}

export default HomeLayout
