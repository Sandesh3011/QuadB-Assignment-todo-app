// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Redirect if already logged in
//     if (localStorage.getItem("isAuthenticated") === "true") {
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleLogin = (e) => {
//     e.preventDefault();
    
//     if (!username.trim() || !password.trim()) {
//       alert("Username and password cannot be empty.");
//       return;
//     }

//     // Simulate successful login
//     localStorage.setItem("isAuthenticated", "true");
//     navigate("/"); // Redirect to home after login
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
//         <h2 className="mb-4 text-xl font-semibold text-center">Login</h2>
//         <div className="mb-4">
//           <label className="block mb-2 font-medium">Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-medium">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
//         <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsAuthenticated }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username && password) {
//       localStorage.setItem("isAuthenticated", "true");
//       setIsAuthenticated(true); // Update state immediately
//       navigate("/"); // Redirect to home after login
//     } else {
//       alert("Please enter both username and password");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
//         <h2 className="mb-4 text-xl font-semibold">Login</h2>
//         <div className="mb-4">
//           <label className="block mb-2">Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsAuthenticated }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Redirect if already logged in
//     if (localStorage.getItem("isAuthenticated")) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleLogin = () => {
//     // Basic Authentication Logic (Replace with your actual authentication)
//     if (username === "admin" && password === "password") {
//       localStorage.setItem("isAuthenticated", "true");
//       setIsAuthenticated(true);
//       navigate("/"); // Redirect to the home page
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
//       <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="dark:text-white text-2xl font-bold mb-6 text-center">Login</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700"
//             id="username"
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700"
//             id="password"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-blue-600"
//             type="button"
//             onClick={handleLogin}
//           >
//             Sign In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsAuthenticated }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Redirect if already logged in
//     if (localStorage.getItem("isAuthenticated") === "true") {
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleLogin = () => {
//     // Basic Authentication Logic (Replace with your actual authentication)
//     if (username === "admin" && password === "password") {
//       localStorage.setItem("isAuthenticated", "true");
//       setIsAuthenticated(true); // Update authentication state
//       navigate("/"); // Redirect to home
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
//       <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="dark:text-white text-2xl font-bold mb-6 text-center">Login</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700"
//             id="username"
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700"
//             id="password"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-blue-600"
//             type="button"
//             onClick={handleLogin}
//           >
//             Sign In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem("isAuthenticated")) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleLogin = () => {
//     // Simple authentication check
//     if (username === "admin" && password === "password") {
//       localStorage.setItem("isAuthenticated", "true");
//       window.location.href = "/"; // Reload the page
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       handleLogin();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Username
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Password
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               onKeyDown={handleKeyDown}
//             />
//           </label>
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="button"
//             onClick={handleLogin}
//           >
//             Sign In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = () => {
    // Simple authentication check
    if (username === "admin" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      window.location.href = "/"; // Reload the page
    } else {
      alert("Invalid credentials");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    
    <div className="flex items-center justify-center h-screen w-full bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Use <strong>admin</strong> as Username and <strong>password</strong> as Password.
        </p>
      </div>
    </div>
  );
};

export default Login;
