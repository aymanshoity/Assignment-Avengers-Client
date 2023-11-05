import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>hello</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;