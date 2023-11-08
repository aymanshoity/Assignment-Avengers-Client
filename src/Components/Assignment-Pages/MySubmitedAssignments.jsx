import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MySubmitedAssignments = () => {
    const {user}=useContext(AuthContext);
    const [myAssignments, setMyAssignments] = useState([])

    const url = `http://localhost:5000/submissions?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data =>{
                setMyAssignments(data.length)})

    }, [url])
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/wMm8zzt/superhero-4k-wallpaper.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                
            </div>
        </div>
    );
};

export default MySubmitedAssignments;