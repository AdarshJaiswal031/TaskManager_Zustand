import { PlusCircle, PocketKnife } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-5">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <PocketKnife className="text-white h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FluxPlanner</span>
                </Link>
                <Link to="/addtask">
                    <button
                        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">

                        Add Task <PlusCircle className='w-4 h-4 ml-2' />
                    </button>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar