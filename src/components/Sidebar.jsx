// import { BookCheck } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useContext, useState } from 'react'; // Import useContext
// import { ThemeContext } from '../ThemeContext';

// export default function Sidebar({ children }) {
//   const navigate = useNavigate();
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <aside className="h-screen w-full">
//       <nav className="h-full flex-col bg-white border-r shadow-sm">
//         <div className="flex items-center gap-1 p-3" onClick={()=>navigate("/")}>
//           <BookCheck size={30} />
//           <span className="ml-4 font-semibold text-gray-700 text-xl">
//             DoIt
//           </span>
//         </div>

//         <ul className="flex-1 px-3">{children}</ul>
//       </nav>
//     </aside>
//   );
// }
// const checkPath = (path) => {
//   // console.log(location.pathname, path);
//   if (path === location.pathname) return true;
//   else return false;
// };

// export function SidebarItem({ icon, text, active, path }) {
//   active = checkPath(path);
//   const navigate = useNavigate();
//   return (
//     <li
//       className={`
//         relative flex items-center py-2 px-3 my-1
//         font-medium rounded-md cursor-pointer
//         transition-colors group
//         ${
//           active
//             ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
//             : "hover:bg-indigo-50 text-gray-600"
//         }
//     `}
//       onClick={() => navigate(path)}
//     >
//       {icon}
//       <span className={`overflow-hidden transition-all ${"w-52 ml-3"}`}>
//         {text}
//       </span>
//     </li>
//   );
// }
import { BookCheck, Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react'; // Import useContext
import { ThemeContext } from '../ThemeContext.jsx';  // Import ThemeContext

export default function Sidebar({ children }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <aside className="h-screen w-full">
      <nav className="h-full flex-col bg-white border-r shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center gap-1 p-3 cursor-pointer" onClick={() => navigate("/")}>
          <BookCheck size={30} className="dark:text-white"/>
          <span className="ml-4 font-semibold text-gray-700 text-xl dark:text-gray-100">
            DoIt
          </span>
        </div>

        <div className="p-4">
          {/* Profile Image Upload */}
          <label htmlFor="profile-upload" className="cursor-pointer">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto">
              <img
                src={profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyC95HQuuuyzvnPkkGpNKWlGJAK3NkLnVKmlV1l2NhiS3LJdNvzztcju3n0OJo06lsgk&usqp=CAU"} // Default placeholder image
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity">
                <div className="flex items-center justify-center h-full text-white">
                  Upload
                </div>
              </div>
            </div>
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          <span className="ml-2 dark:text-white">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </nav>
    </aside>
  );
}

const checkPath = (path) => {
  if (path === location.pathname) return true;
  else return false;
};

export function SidebarItem({ icon, text, active, path }) {
  active = checkPath(path);
  const navigate = useNavigate();
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
        }
    `}
      onClick={() => navigate(path)}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${"w-52 ml-3"}`}>
        {text}
      </span>
    </li>
  );
}
