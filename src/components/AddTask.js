import { Plus, PlusCircle } from 'lucide-react'
import React, { useState } from 'react'
import useTaskStore from '../app/taskStore'

const AddTask = () => {
    const addTask = useTaskStore((state) => state.addTask)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("low")
    const handleTaskSubmit = () => {
        if (!title || !description) return
        addTask({
            id: Math.ceil(Math.random() * 1000000),
            title: title,
            description: description,
            completed: false,
            priority: priority
        })
        setTitle("")
        setDescription("")
    }
    return (
        <div className="w-full h-full max-w-xs m-auto mt-20">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Title
                    </label>
                    <input
                        required
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter task title" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Description
                    </label>
                    <textarea
                        required
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        id="message" rows="4" className="block p-2.5 w-full text-sm  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write about your task here..."></textarea>
                </div>
                <h3 className="mb-4 font-semibold text-gray-900 ">Priority</h3>
                <ul className="items-center mb-4 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">

                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                        <div className="flex items-center ps-3">
                            <input
                                onChange={() => { setPriority("high") }}
                                id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                            <label for="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">High</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                        <div className="flex items-center ps-3">
                            <input
                                onChange={() => { setPriority("low") }}
                                id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                            <label for="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Low</label>
                        </div>
                    </li>

                </ul>

                <div className="flex items-center justify-between">
                    <button
                        onClick={() => {
                            handleTaskSubmit()
                        }}
                        className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Add Task <PlusCircle className='w-4 h-4 ml-2' />
                    </button>

                </div>



            </form>

        </div>
    )
}

export default AddTask