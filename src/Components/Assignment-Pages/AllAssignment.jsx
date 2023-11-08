import { useContext, useEffect, useState } from "react";
import Assignment from "./Assignment";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AllAssignment = () => {
    const { user } = useContext(AuthContext)
    const [assignments, setAssignments] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data => {
                setAssignments(data)

            })
    }, [])

    const handleLevel = e => {
        e.preventDefault()
        const level = e.target.level.value
        console.log(level)
        const levelData = assignments.filter(assignment => assignment.level === level)
        setAssignments(levelData)

    }
    const handleDelete = (id, email) => {

        if (user) {
            if (user.email === email) {
                fetch(`http://localhost:5000/assignments/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });
                                    const remaining = assignments.filter(assignment => assignment._id !== id)
                                    setAssignments(remaining)
                                }
                            });


                        }
                    })

            }
            else {
                Swal.fire("You can't delete this Assignmnet");

            }
        }
        else {
            navigate('/login')
        }
    }
    const handleUpdate = (id, email) => {
        if (user) {
            if (user.email === email) {
                return navigate(`/updateAssignment/${id}`)

            }
            else {
                Swal.fire("You can not Update this Assignmnet");
            }
        }
        else {
            return navigate('/login')
        }

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZgsZj4X/sheild.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="  ">
                <h2 className="text-5xl text-center font-bold text-white">All Assignments</h2>
                <div className="flex flex-row justify-center items-center">
                    <h2 className="text-2xl text-center font-bold text-white my-6">Choose the Difficulty Level</h2>
                    <form onSubmit={handleLevel} className="mx-4">
                        <select name='level' className="input input-bordered" >
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                        <input className="input input-bordered" type="submit" value="Submit" />
                    </form>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        assignments.map(assignment => <Assignment handleUpdate={handleUpdate} handleDelete={handleDelete} key={assignment._id} assignment={assignment}></Assignment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllAssignment;