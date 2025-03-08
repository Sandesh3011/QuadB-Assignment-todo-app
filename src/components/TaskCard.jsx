import { Calendar, CalendarClock, FilePenLine, Trash } from "lucide-react";
import React, {useState, useEffect} from "react";

const TaskCard = ({ task, handleOpenEditModal, handleDeleteTask, handleCompleteTask }) => {
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  
  useEffect(() => {
    const fetchWeather = async () => {
      if (!task.location) {
        setWeatherError('No location specified for this task');
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          // `https://api.openweathermap.org/data/2.5/weather?q=${task.location}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        `https://api.openweathermap.org/data/2.5/weather?q=${task.location}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.cod !== 200) {
          throw new Error(data.message || 'Unknown weather API error');
        }

        setWeather(data);
        setWeatherError(null);
      } catch (error) {
        setWeatherError(error.message);
        console.error("Error fetching weather:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [task.location]);



  const priorityColors = {
    low: "bg-green-200 text-green-600 border-green-600 dark:bg-green-800 dark:border-green-500 dark:text-green-300",
    medium: "bg-yellow-200 text-yellow-600 border-yellow-600 dark:bg-yellow-800 dark:border-yellow-500 dark:text-yellow-300",
    high: "bg-red-200 text-red-600 border-red-600 dark:bg-red-800 dark:border-red-500 dark:text-red-300",
  };
  
  return (
    <li className="relative bg-white flex flex-col justify-between border border-gray-300  hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 p-8 gap-2 dark:bg-gray-700 dark:border-gray-600">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleCompleteTask(task.id)} // Call the new function
          className="mr-2"
        />
        {task.completed && (
          <div className="text-green-600 bg-green-200 border border-green-600 text-sm px-[8px]  rounded-full mr-4 dark:bg-green-800 dark:border-green-500 dark:text-green-300">
            Completed
          </div>
        )}
        {!task.completed && (
          <div className="text-red-600 bg-red-200 border border-red-600 text-sm px-[8px]  rounded-full mr-4 dark:bg-red-800 dark:border-red-500 dark:text-red-300">
            ToDo
          </div>
        )}
      </div>
      
      
      {/* Weather Display */}
      <div className="mt-2 flex justify-end">
        {isLoading && (
          <div className="text-sm text-gray-500">Loading weather...</div>
        )}
        
        {weatherError && (
          <div className="text-sm text-red-600">
            Weather error: {weatherError}
          </div>
        )}

        {weather && !weatherError && (
          <div className="flex items-center gap-2 text-sm">
            <img 
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="Weather icon"
              className="w-8 h-8"
            />
            <div>
              <p className="font-medium text-gray-200">{Math.round(weather.main.temp)}°C</p>
              <p className="text-gray-200 capitalize">
                {weather.weather[0].description}
              </p>
              <p className="text-xs text-gray-200">{task.location}</p>
            </div>
          </div>
        )}
      </div>

      
      
      
      <h2 className={`text-xl font-bold text-[#4B5563] ${task.completed ? 'line-through' : ''} dark:text-gray-100`}>{task.title}</h2>
      <p className={`${task.completed ? 'line-through' : ''} dark:text-gray-300`}>{task.description}</p>
      
       {/* Priority Display */}
       <div className={`text-sm px-2 py-1 rounded-full inline-block ${priorityColors[task.priority]}`}>
        {task.priority.toUpperCase()}
      </div>
      
      
      <hr className="dark:border-gray-500"/>
      <div className="flex justify-between items-center">
        <div className="mb-2 flex items-center gap-2">
          <CalendarClock color="#4B5563" size={20} />
          <span className="text-[#4B5563] dark:text-gray-300">
            {new Date(task.deadline).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex justify-end gap-2">
          <FilePenLine
            className="text-[#4B5563] cursor-pointer dark:text-gray-300"
            onClick={() => handleOpenEditModal(task)}
            size={20}
          />
          <Trash
            className="text-[#4B5563] cursor-pointer dark:text-gray-300"
            onClick={() => handleDeleteTask(task.id)}
            size={20}
          />
        </div>
      </div>
    </li>
  );
};

export default TaskCard;
