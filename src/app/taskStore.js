import create from "zustand"
import { devtools, persist } from 'zustand/middleware'

const taskStore = (set) => (
    {
        tasks: [],
        addTask: (task) => {
            set((state) => ({
                tasks: task.priority === "high" ? [task, ...state.tasks] : [...state.tasks, task],
            }))
        },
        removeTask: (taskId) => {
            set((state) => ({
                tasks: state.tasks.filter((c) => c.id !== taskId)
            }))
        },
        toggleTaskStatus: (taskId) => {

            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === taskId ? { ...task, completed: !task.completed } : task
                )
            }))
        },
        editTask: (newTask) => {

            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === newTask.id ? { ...task, ...newTask } : task
                )
            }))
        }
    }
)

const useTaskStore = create(
    devtools(
        persist(taskStore, {
            name: "tasks"
        })
    )
)

export default useTaskStore