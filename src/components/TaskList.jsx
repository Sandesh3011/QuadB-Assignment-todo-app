import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskCard from "./TaskCard";
import UpdateTask from "./UpdateTask";
import InputTask from "./InputTask";
import { ThemeContext } from "../ThemeContext.jsx"; // Import ThemeContext
import { Sun, Moon } from "lucide-react"; // Import icons

import { deleteTask, updateTask } from "../redux/Task/taskSlice";

function TaskList() {
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState({});

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggleTheme

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
    localStorage.removeItem("isAuthenticated"); // Remove authentication
    navigate("/login"); // Redirect to login page
  };

  // Separate completed and incomplete tasks
  const completedTasks = tasks.filter((task) => task.completed);
  const incompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl font-semibold dark:text-gray-1 ">All Tasks</h1>
        <InputTask />
        <div className="flex items-center space-x-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            <span className="ml-1 dark:text-white">{theme === "light" ? "Dark" : "Light"}</span>
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded dark:bg-red-600 dark:text-gray-100"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-3">
        {incompleteTasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            handleOpenEditModal={handleOpenEditModal}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask} // Pass the function
          />
        ))}
        {completedTasks.length > 0 && (
          <div className="w-full col-span-full">
            <h2 className="text-lg font-semibold mt-4 dark:text-gray-1">Completed Tasks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {completedTasks.map((task, index) => (
                <TaskCard
                  key={index}
                  task={task}
                  handleOpenEditModal={handleOpenEditModal}
                  handleDeleteTask={handleDeleteTask}
                  handleCompleteTask={handleCompleteTask} // Pass the function
                />
              ))}
            </div>
          </div>
        )}
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

export default TaskList;

// import React, { useState, useContext } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import TaskCard from "./TaskCard";
// import UpdateTask from "./UpdateTask";
// import InputTask from "./InputTask";
// import { ThemeContext } from "../ThemeContext.jsx"; // Import ThemeContext
// import { Sun, Moon } from "lucide-react"; // Import icons

// import { deleteTask, updateTask } from "../redux/Task/taskSlice";

// function TaskList() {
//   const [showModal, setShowModal] = useState(false);
//   const [taskToUpdate, setTaskToUpdate] = useState({});

//   const tasks = useSelector((state) => state.tasks);
//   const dispatch = useDispatch();
//   const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggleTheme

//   const navigate = useNavigate();

//   const handleDeleteTask = (id) => {
//     dispatch(deleteTask(id));
//   };

//   const handleOpenEditModal = (task) => {
//     setTaskToUpdate(task);
//     setShowModal(true);
//   };

//   const handleCloseEditModal = () => {
//     setTaskToUpdate({});
//     setShowModal(false);
//   };

//   const handleCompleteTask = (id) => {
//     const taskToComplete = tasks.find((task) => task.id === id);
//     if (taskToComplete) {
//       dispatch(
//         updateTask({
//           id: id,
//           updatedTask: { ...taskToComplete, completed: !taskToComplete.completed },
//         })
//       );
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated"); // Remove authentication
//     window.location.href = "/login"; // Redirect to login page
//   };

//   // Separate completed and incomplete tasks
//   const completedTasks = tasks.filter((task) => task.completed);
//   const incompleteTasks = tasks.filter((task) => !task.completed);

//   return (
//     <div>
//       <div className="flex flex-col sm:flex-row justify-between items-center">
//         <h1 className="text-xl font-semibold text-gray-800">All Tasks</h1> 
     
//         <InputTask />
//         <div className="flex items-center space-x-2">
//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className="flex items-center justify-center px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
//           >
//             {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
//             <span className="ml-1 dark:text-white">{theme === "light" ? "Dark" : "Light"}</span>
//           </button>
//           <button
//             onClick={handleLogout}
//             className="px-4 py-2 bg-red-500 text-white rounded dark:bg-red-600 dark:text-gray-100"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-3">
//         {incompleteTasks.map((task, index) => (
//           <TaskCard
//             key={index}
//             task={task}
//             handleOpenEditModal={handleOpenEditModal}
//             handleDeleteTask={handleDeleteTask}
//             handleCompleteTask={handleCompleteTask} // Pass the function
//           />
//         ))}
//         {completedTasks.length > 0 && (
//           <div className="w-full col-span-full">
//             <h2 className="text-lg font-semibold mt-4 dark:text-gray-100">Completed Tasks</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
//               {completedTasks.map((task, index) => (
//                 <TaskCard
//                   key={index}
//                   task={task}
//                   handleOpenEditModal={handleOpenEditModal}
//                   handleDeleteTask={handleDeleteTask}
//                   handleCompleteTask={handleCompleteTask} // Pass the function
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {showModal && (
//         <UpdateTask
//           taskToUpdate={taskToUpdate}
//           handleCloseEditModal={handleCloseEditModal}
//         />
//       )}
//     </div>
//   );
// }

// export default TaskList;


