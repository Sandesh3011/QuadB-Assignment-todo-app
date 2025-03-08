// // AddTask.js
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTask } from "../redux/Task/taskSlice.js";
// import { v4 as uuidv4 } from "uuid";

// function InputTask() {
//   const [showModal, setShowModal] = useState(false);
//   const [newTask, setNewTask] = useState({
//     id: uuidv4(),
//     title: "",
//     deadline: "",
//     completed: false,
//     important: false,
//   });

//   const dispatch = useDispatch();

//   const handleSaveTask = () => {
//     dispatch(addTask(newTask));
//     setNewTask({
//       id: "",
//       title: "",
//       description: "",
//       deadline: "",
//       completed: false,
//       important: false,
//     });
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <button
//         className="py-2 px-3 my-1
//         font-medium rounded-md cursor-pointer
//         transition-colors bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
//         onClick={() => setShowModal(true)}
//       >
//         + Add Task
//       </button>
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-md">
//             <h2 className="text-xl font-bold mb-4">Add Task</h2>
//             <input
//               type="text"
//               placeholder="Title"
//               value={newTask.title}
//               onChange={(e) =>
//                 setNewTask({ ...newTask, title: e.target.value })
//               }
//               className="border border-gray-300 rounded-md px-2 py-1 mb-2 w-full"
//             />
//             <textarea
//               cols="10"
//               rows="5"
//               value={newTask.description}
//               placeholder="Description"
//               onChange={(e) =>
//                 setNewTask({ ...newTask, description: e.target.value })
//               }
//               className="border border-gray-300 rounded-md px-2 py-1 mb-[3px] w-full"
//             ></textarea>
//             <input
//               type="date"
//               placeholder="Deadline"
//               value={newTask.deadline}
//               onChange={(e) =>
//                 setNewTask({ ...newTask, deadline: e.target.value })
//               }
//               className="border border-gray-300 rounded-md px-2 py-1 mb-2 w-full"
//             />
//             <div className="mb-2">
//               <input
//                 type="checkbox"
//                 checked={newTask.completed}
//                 onChange={(e) =>
//                   setNewTask({
//                     ...newTask,
//                     completed: e.target.checked,
//                   })
//                 }
//                 className="mr-2"
//               />
//               <span>Completed</span>
//             </div>
//             <div className="mb-4">
//               <input
//                 type="checkbox"
//                 checked={newTask.important}
//                 onChange={(e) =>
//                   setNewTask({
//                     ...newTask,
//                     important: e.target.checked,
//                   })
//                 }
//                 className="mr-2"
//               />
//               <span>Important</span>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
//                 onClick={handleSaveTask}
//               >
//                 Save Task
//               </button>
//               <button
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
//                 onClick={() => setShowModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default InputTask;

// AddTask.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Task/taskSlice.js";
import { v4 as uuidv4 } from "uuid";

function InputTask() {
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    deadline: "",
    completed: false,
    important: false,
    priority: "medium",
    location: "pune"
  });

  const dispatch = useDispatch();

  const handleSaveTask = () => {
    dispatch(addTask(newTask));
    setNewTask({
      id: uuidv4(),
      title: "",
      description: "",
      deadline: "",
      completed: false,
      important: false,
      priority: "medium",
      location: "pune"
    });
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:bg-gradient-to-tr dark:from-gray-600 dark:to-gray-500 dark:text-white"
        onClick={() => setShowModal(true)}
      >
        + Add Task
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50 dark:bg-gray-800">
          <div className="bg-white p-6 rounded-md dark:bg-gray-700">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Add Task</h2>
            <input
              type="text"
              placeholder="Title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className="border border-gray-300 rounded-md px-2 py-1 mb-2 w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <textarea
              cols="10"
              rows="5"
              value={newTask.description}
              placeholder="Description"
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="border border-gray-300 rounded-md px-2 py-1 mb-[3px] w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            ></textarea>
            <input
              type="date"
              placeholder="Deadline"
              value={newTask.deadline}
              onChange={(e) =>
                setNewTask({ ...newTask, deadline: e.target.value })
              }
              className="border border-gray-300 rounded-md px-2 py-1 mb-2 w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />

<input
        type="text"
        placeholder="Location (e.g., London)"
        value={newTask.location}
        onChange={(e) =>
          setNewTask({ ...newTask, location: e.target.value })
        }
        className="border border-gray-300 rounded-md px-2 py-1 mb-2 w-full"
      />
             {/* Priority Select */}
             <div className="mb-2 dark:text-white">
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Priority:
              </label>
              <select
                id="priority"
                value={newTask.priority}
                onChange={(e) =>
                  setNewTask({ ...newTask, priority: e.target.value })
                }
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="mb-2 dark:text-white">
              <input
                type="checkbox"
                checked={newTask.completed}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    completed: e.target.checked,
                  })
                }
                className="mr-2"
              />
              <span>Completed</span>
            </div>
            <div className="mb-4 dark:text-white">
              <input
                type="checkbox"
                checked={newTask.important}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    important: e.target.checked,
                  })
                }
                className="mr-2"
              />
              <span>Important</span>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 dark:bg-blue-600 dark:text-gray-100"
                onClick={handleSaveTask}
              >
                Save Task
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md dark:bg-gray-600 dark:text-white"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputTask;
