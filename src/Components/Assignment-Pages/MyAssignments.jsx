import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyAssignmentList from "./MyAssignmentList";
import Swal from "sweetalert2";


const MyAssignments = () => {
    const [myAssignments, setMyAssignments] = useState([])
    const { user } = useContext(AuthContext)
    const url = `https://assignment-avengers-server.vercel.app/myAssignments?email=${user?.email}`
    useEffect(() => {
        fetch(url,{credentials:'include'})
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyAssignments(data)})

    }, [url])

    const handleSubmit = (e,_id,allocatedMarks) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const title = form.title.value
        const note = form.note.value
        const status = form.status.value
        const link = form.link.value
        const marks = form.marks.value

        const mySubmission = { name, email, status, title, note, link, marks,allocatedMarks }
        console.log(mySubmission)
        fetch('https://assignment-avengers-server.vercel.app/submissions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(mySubmission)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Assignment Submitted!",
                        icon: "success"
                    });
                    
                }
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/HBwvQgD/superhero-4k-wallpaper.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-center ">
                <h2 className="text-3xl font-bold my-6 text-white">My total Assignments Count: {myAssignments.length}</h2>
                <div className="mx-10   grid grid-cols-1  mb-4 gap-6">
                    {
                        myAssignments.map((assignment,index) => <MyAssignmentList index={index} handleSubmit={handleSubmit} key={assignment._id} assignment={assignment}></MyAssignmentList>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MyAssignments;