import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result)
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    const links = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-red-500 mr-4' : ' text-xl font-bold  mr-4')}>Home</NavLink>

        {
            
            user ?
                <>
                    
                    <NavLink to='/createAssignments' className={({ isActive }) => (isActive ? 'font-bold  text-xl  text-red-500 mr-4' : ' text-xl font-bold   mr-4')}>Create-Assignment</NavLink>
                    <NavLink to='/myAssignment' className={({ isActive }) => (isActive ? 'font-bold  text-xl  text-red-500 mr-4' : ' text-xl font-bold   mr-4')}>My-Assignment</NavLink>
                    <NavLink to='/submissions' className={({ isActive }) => (isActive ? 'font-bold  text-xl  text-red-500 mr-4' : ' text-xl font-bold   mr-4')}>Submissions</NavLink>

                    <button onClick={handleLogout} className="btn bg-[#e879f9]  hover:bg-[#fda4af]"> <div className="tooltip" data-tip={user.displayName}><img className="w-[30px] h-[30px] rounded-full " src={user.photoURL} alt="" /></div>Logout</button>


                </> :
                <>
                    <NavLink to='/assignments' className={({ isActive }) => (isActive ? 'font-bold  text-xl  text-red-500 mr-4' : ' text-xl font-bold   mr-4')}>Assignments</NavLink>
                    <NavLink to='/register' className={({ isActive }) => (isActive ? 'font-bold  text-xl  text-red-500 mr-4' : ' text-xl font-bold   mr-4')}>Register</NavLink>
                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'font-bold  text-xl  text-red-500 mr-4' : ' text-xl font-bold   mr-4')}>Login</NavLink>
                </>
        }
    </>
    // bg-gradient-to-r from-[#2e1065] to-indigo-500
    return (
        <div className="navbar bg-gradient-to-r from-[#e879f9] to-[#fda4af] lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex flex-row items-center">
                    <img src="../../../public/logo-web.png " className="w-[80px] h-[80px] rounded-full mr-4" />
                    <div><h2 className="text-3xl font-bold ">Assignment Avengers</h2></div>
                </div>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;