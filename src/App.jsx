// import React, { useEffect, useRef, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import {
//   LayoutDashboard,
//   Gauge,
//   ClipboardCheck,
//   NotebookPen,
//   Import,
// } from "lucide-react";
// import Sidebar, { SidebarItem } from "./components/Sidebar";
// import Todo from "./pages/Todo";
// import Important from "./pages/Important";
// import Completed from "./pages/Completed";
// import MobileHeader from "./components/MobileHeader";
// import Login from "./pages/Login";

// const App = () => {
//   const mobileMenuRef = useRef();

//   const [showMobileMainDropdown, setShowMobileMainDropdown] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     localStorage.getItem("isAuthenticated") === "true"
//   );

//   useEffect(() => {
//     const handler = (e) => {
//       if (!mobileMenuRef.current.contains(e.target)) {
//         console.log(mobileMenuRef);
//         setShowMobileMainDropdown(false);
//       }
//     };

//     if (showMobileMainDropdown) {
//       document.addEventListener("mousedown", handler);
//     } else {
//       document.removeEventListener("mousedown", handler);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   }, [showMobileMainDropdown]);

//   //const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
//   const handleLogin = () => {
//     localStorage.setItem("isAuthenticated", "true");
//     setIsAuthenticated(true);
//   };

//   if (!isAuthenticated) {
//     return <Login onLogin={handleLogin} />;
//   }
  
//   return (
//     <div className="flex">
//       <div className="hidden sm:block sticky top-0 h-screen overflow-y-auto w-64 bg-gray-200">
//         <Sidebar>
//           <SidebarItem
//             icon={<LayoutDashboard size={20} />}
//             text={"Tasks"}
//             path={"/"}
//           />
//           <SidebarItem
//             icon={<Gauge size={20} />}
//             text={"Important"}
//             path={"/important"}
//           />
//           <SidebarItem
//             icon={<ClipboardCheck size={20} />}
//             text={"Completed"}
//             path={"/completed"}
//           />
//           <SidebarItem
//             icon={<NotebookPen size={20} />}
//             text={"ToDo"}
//             path={"/todo"}
//           />
//         </Sidebar>
//       </div>
//       <div className="flex-1 p-6 overflow-y-auto w-full min-h-screen">
//         <MobileHeader />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/todo" element={<Todo />} />
//           <Route path="/important" element={<Important />} />
//           <Route path="/completed" element={<Completed />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;
// import React, { useEffect, useRef, useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import {
//   LayoutDashboard,
//   Gauge,
//   ClipboardCheck,
//   NotebookPen,
// } from "lucide-react";
// import Sidebar, { SidebarItem } from "./components/Sidebar";
// import Todo from "./pages/Todo";
// import Important from "./pages/Important";
// import Completed from "./pages/Completed";
// import MobileHeader from "./components/MobileHeader";
// import Login from "./pages/Login";

// const App = () => {
//   const mobileMenuRef = useRef();
//   const navigate = useNavigate();

//   const [showMobileMainDropdown, setShowMobileMainDropdown] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     localStorage.getItem("isAuthenticated") === "true"
//   );

//   useEffect(() => {
//     const handler = (e) => {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
//         setShowMobileMainDropdown(false);
//       }
//     };

//     if (showMobileMainDropdown) {
//       document.addEventListener("mousedown", handler);
//     } else {
//       document.removeEventListener("mousedown", handler);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   }, [showMobileMainDropdown]);
// // Listen for authentication changes
//   useEffect(() => {
//     const handleStorageChange = () => {
//       setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
//       if (localStorage.getItem("isAuthenticated") === "true") {
//         navigate("/");
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, [navigate]);


//   return (
//     <div className="flex">
//       {!isAuthenticated ? (
//         <Routes>
//           <Route path="*" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       ) : (
//         <>
//           <div className="hidden sm:block sticky top-0 h-screen overflow-y-auto w-64 bg-gray-200">
//             <Sidebar>
//               <SidebarItem
//                 icon={<LayoutDashboard size={20} />}
//                 text={"Tasks"}
//                 path={"/"}
//               />
//               <SidebarItem
//                 icon={<Gauge size={20} />}
//                 text={"Important"}
//                 path={"/important"}
//               />
//               <SidebarItem
//                 icon={<ClipboardCheck size={20} />}
//                 text={"Completed"}
//                 path={"/completed"}
//               />
//               <SidebarItem
//                 icon={<NotebookPen size={20} />}
//                 text={"ToDo"}
//                 path={"/todo"}
//               />
//             </Sidebar>
//           </div>
//           <div className="flex-1 p-6 overflow-y-auto w-full min-h-screen">
//             <MobileHeader />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/todo" element={<Todo />} />
//               <Route path="/important" element={<Important />} />
//               <Route path="/completed" element={<Completed />} />
//               <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useRef, useState } from "react";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import Home from "./pages/Home";
// import {
//   LayoutDashboard,
//   Gauge,
//   ClipboardCheck,
//   NotebookPen,
// } from "lucide-react";
// import Sidebar, { SidebarItem } from "./components/Sidebar";
// import Todo from "./pages/Todo";
// import Important from "./pages/Important";
// import Completed from "./pages/Completed";
// import MobileHeader from "./components/MobileHeader";
// import Login from "./pages/Login";

// const App = () => {
//   const mobileMenuRef = useRef();
//   const navigate = useNavigate();

//   const [showMobileMainDropdown, setShowMobileMainDropdown] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     localStorage.getItem("isAuthenticated") === "true"
//   );

//   useEffect(() => {
//     const handler = (e) => {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
//         setShowMobileMainDropdown(false);
//       }
//     };

//     if (showMobileMainDropdown) {
//       document.addEventListener("mousedown", handler);
//     } else {
//       document.removeEventListener("mousedown", handler);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   }, [showMobileMainDropdown]);

//   // Listen for authentication changes
//   useEffect(() => {
//     const handleStorageChange = () => {
//       setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
//       if (localStorage.getItem("isAuthenticated") === "true") {
//         navigate("/");
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, [navigate]);

//   return (
//     <div className="flex">
//       {!isAuthenticated ? (
//         <Routes>
//           <Route path="*" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         </Routes>
//       ) : (
//         <>
//           <div className="hidden sm:block sticky top-0 h-screen overflow-y-auto w-64 bg-gray-200">
//             <Sidebar>
//               <SidebarItem icon={<LayoutDashboard size={20} />} text={"Tasks"} path={"/"} />
//               <SidebarItem icon={<Gauge size={20} />} text={"Important"} path={"/important"} />
//               <SidebarItem icon={<ClipboardCheck size={20} />} text={"Completed"} path={"/completed"} />
//               <SidebarItem icon={<NotebookPen size={20} />} text={"ToDo"} path={"/todo"} />
//             </Sidebar>
//           </div>
//           <div className="flex-1 p-6 overflow-y-auto w-full min-h-screen">
//             <MobileHeader />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/todo" element={<Todo />} />
//               <Route path="/important" element={<Important />} />
//               <Route path="/completed" element={<Completed />} />
//               <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useRef, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import {
  LayoutDashboard,
  Gauge,
  ClipboardCheck,
  NotebookPen,
} from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import Todo from "./pages/Todo";
import Important from "./pages/Important";
import Completed from "./pages/Completed";
import MobileHeader from "./components/MobileHeader";
import Login from "./pages/Login";

const App = () => {
  const mobileMenuRef = useRef();
  const navigate = useNavigate();

  const [showMobileMainDropdown, setShowMobileMainDropdown] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    const handler = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setShowMobileMainDropdown(false);
      }
    };

    if (showMobileMainDropdown) {
      document.addEventListener("mousedown", handler);
    } else {
      document.removeEventListener("mousedown", handler);
    }

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [showMobileMainDropdown]);

  useEffect(() => {
    // Handle authentication check on initial load
    if (!isAuthenticated && window.location.pathname !== "/login") {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex">
      {isAuthenticated ? (
        <>
          <div className="hidden sm:block sticky top-0 h-screen overflow-y-auto w-64 bg-gray-200">
            <Sidebar>
              <SidebarItem icon={<LayoutDashboard size={20} />} text={"Tasks"} path={"/"} />
              <SidebarItem icon={<Gauge size={20} />} text={"Important"} path={"/important"} />
              <SidebarItem icon={<ClipboardCheck size={20} />} text={"Completed"} path={"/completed"} />
              <SidebarItem icon={<NotebookPen size={20} />} text={"ToDo"} path={"/todo"} />
            </Sidebar>
          </div>
          <div className="flex-1 p-6 overflow-y-auto w-full min-h-screen">
            <MobileHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/important" element={<Important />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
     
      )}
    </div>
  );
};

export default App;


