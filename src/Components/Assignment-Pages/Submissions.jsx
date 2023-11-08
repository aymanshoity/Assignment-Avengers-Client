import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import PendingSubmissions from "./PendingSubmissions";
import Swal from "sweetalert2";


const Submissions = () => {
    const [pending, setPending] = useState([])
    const { user } = useContext(AuthContext)
    const url = `https://assignment-avengers-server.vercel.app/submissions?status=pending`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data =>{
                 setPending(data)
                console.log(data.length)})

    }, [])

    const handleGiveMark = (e, id) => {
        e.preventDefault()
        const form = e.target;
        console.log(e.target)
        const status = "completed"
        const marks = form.evaluation.value;
        // const feedback = form.feedback.value;

        const evaluation = { status, marks };
        console.log(evaluation)
        
        fetch(`https://assignment-avengers-server.vercel.app/submissions/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(evaluation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount>0){
                    
                    Swal.fire({
                        title: "Good job!",
                        text: "You marked an  Assignment!",
                        icon: "success"
                    });
                    const remaining = pending.filter(p => p._id !== id)
                    console.log(remaining)
                    setPending(remaining)
                }
            })



    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TtHHNcg/this-is-an-infinity-avengers-wallpaper-make-sure-follow-me-thank-you.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-center text-neutral-content">
                <h2 className="text-3xl font-bold my-6 text-white">Pending Assignments Count:{pending.length} </h2>

                <div className="mx-10   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 gap-6">
                    {
                        pending.map((assignment, index) => <PendingSubmissions user={user} handleGiveMark={handleGiveMark} key={assignment._id} index={index} assignment={assignment}></PendingSubmissions>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Submissions;