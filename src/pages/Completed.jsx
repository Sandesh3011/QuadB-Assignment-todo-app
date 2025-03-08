import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { deleteTask, selectCompletedTasks, updateTask } from "../redux/Task/taskSlice.js";
import TaskCard from "../components/TaskCard.jsx";
import UpdateTask from "../components/UpdateTask.jsx";
import InputTask from "../components/InputTask.jsx";
import { ThemeContext } from "../ThemeContext.jsx"; 
import { Sun, Moon } from "lucide-react"; 

function Completed() {
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState({});

  const tasks = useSelector(selectCompletedTasks);
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleOpenEditModal = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleCloseEditModal = () => {
    setTaskToUpdate({});
    setShowModal(false);
  };

  const handleCompleteTask = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id);
    if (taskToComplete) {
      dispatch(
        updateTask({
          id: id,
          updatedTask: { ...taskToComplete, completed: !taskToComplete.completed },
        })
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); 
    navigate("/login");
  };
  console.log("API Key:", import.meta.env.VITE_WEATHER_API_KEY);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-xl font-semibold ">Completed Tasks</h1>
        <InputTask />
        <div className="flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            <span className="ml-1 dark:text-white">{theme === "light" ? "Dark" : "Light"}</span>
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded dark:bg-red-600 dark:text-gray-100"
          >
            Logout
          </button>

       
        
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-3">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            handleOpenEditModal={handleOpenEditModal}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
          />
        ))}
      </div>

      {showModal && (
        <UpdateTask
          taskToUpdate={taskToUpdate}
          handleCloseEditModal={handleCloseEditModal}
        />
      )}
    </div>
  );
}

export default Completed;
