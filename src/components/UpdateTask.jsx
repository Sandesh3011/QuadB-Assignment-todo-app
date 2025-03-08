import React, { useState } from "react";
import { updateTask } from "../redux/Task/taskSlice.js";
import { useDispatch } from "react-redux";

const UpdateTask = ({ taskToUpdate, handleCloseEditModal }) => {
  const dispatch = useDispatch();
  const [updatedTask, setUpdatedTask] = useState({
    id: taskToUpdate.id,
    title: taskToUpdate.title,
    description: taskToUpdate.description,
    deadline: taskToUpdate.deadline,
    completed: taskToUpdate.completed,
    important: taskToUpdate.important,
    priority: taskToUpdate.priority || "medium",
  });

  const handleSaveChanges = () => {
    dispatch(updateTask({ id: updatedTask.id, updatedTask }));
    handleCloseEditModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50 dark:bg-gray-800">
      <div className="bg-white p-6 rounded-md dark:bg-gray-700">
        <input
          type="text"
          value={updatedTask.title}
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, title: e.target.value })
          }
          className="border border-gray-300 rounded-md px-2 py-1 mb-2 w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
        <input
          type="date"
          value={updatedTask.deadline}
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, deadline: e.target.value })
          }
          className="border border-gray-300 rounded-md px-2 py-1 mb-2 w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
        <textarea
          cols="10"
          rows="5"
          value={updatedTask.description}
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, description: e.target.value })
          }
          className="border border-gray-300 rounded-md px-2 py-1 mb-2 w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        ></textarea>

<input
        type="text"
        placeholder="Location (e.g., London)"
        value={updatedTask.location}
        onChange={(e) =>
          setUpdatedTask({ ...updatedTask, location: e.target.value })
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
            value={updatedTask.priority}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, priority: e.target.value })
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
            checked={updatedTask.completed}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, completed: e.target.checked })
            }
            className="mr-2"
          />
          <span>Completed</span>
        </div>
        <div className="mb-4 dark:text-white">
          <input
            type="checkbox"
            checked={updatedTask.important}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, important: e.target.checked })
            }
            className="mr-2"
          />
          <span>Important</span>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 dark:bg-blue-600 dark:text-gray-100"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md dark:bg-gray-600 dark:text-white"
            onClick={handleCloseEditModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
