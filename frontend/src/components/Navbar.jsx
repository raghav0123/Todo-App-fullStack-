import { NavLink } from "react-router-dom";
import ThemeButton from '../ThemeButton'
import { useUser } from "../context/UserContext";
function Navbar() {
    const { user, setUser, login, register, logout } = useUser()
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">{
        Object.keys(user).length>0 ? `Hi ${user.name} `: 'Todo App'
        }
        </h1>

      <div className="flex gap-6 text-center items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "hover:text-gray-300"
          }
        >
          Home
        </NavLink>
         {Object.keys(user).length==0 && <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-red-500 text-center " : "hover:text-gray-300 text-center"
          }
        >
          Login
        </NavLink>
        }
        
        {Object.keys(user).length==0 && <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "hover:text-gray-300"
          }
        >
          Register
        </NavLink>
        }
        {Object.keys(user).length>0 && <button
          
          className="hover:text-gray-300 cursor-pointer"
          onClick = {logout}
        >
          Logout
        </button>
        }
         
        <ThemeButton />
      </div>
    </nav>
  );
}

export default Navbar;