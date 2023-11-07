import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyAssignmentList from "./MyAssignmentList";


const MyAssignments = () => {
    const [myAssignments, setMyAssignments] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/myAssignments?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyAssignments(data))

    }, [url])
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/HBwvQgD/superhero-4k-wallpaper.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-center ">
                <h2 className="text-3xl font-bold my-6 text-white">My total Assignments Count: {myAssignments.length}</h2>
                <div className="mx-10   grid grid-cols-1  mb-4 gap-6">
                    {
                        myAssignments.map(assignment => <MyAssignmentList key={assignment._id} assignment={assignment}></MyAssignmentList>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MyAssignments;