import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Assignment from "./Assignment";

const AllAssignment = () => {
    const [assignments, setAssignments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [])


    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZgsZj4X/sheild.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="  ">
                <h2 className="text-5xl text-center font-bold text-white">All Assignments</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        assignments.map(assignment => <Assignment key={assignment._id} assignment={assignment}></Assignment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllAssignment;