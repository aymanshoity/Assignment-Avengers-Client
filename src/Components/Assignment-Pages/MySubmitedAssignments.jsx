import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MySingleSubmit from "./MySingleSubmit";


const MySubmitedAssignments = () => {
    const { user } = useContext(AuthContext);
    const [myAssignments, setMyAssignments] = useState([])

    const url = `http://localhost:5000/submissions?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyAssignments(data)
            })

    }, [url])
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/wMm8zzt/superhero-4k-wallpaper.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-center text-neutral-content">
                <h2 className="lg:text-4xl font-bold text-center my-10">My Submitted Assignments</h2>
                <div className="w-[300px] md:w-[600px] lg:w-full">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="text-white lg:text-3xl">
                                <tr>
                                    <th>Assignment no.</th>
                                    <th>Assignment Title</th>
                                    <th>Status</th>
                                    <th>Allocated Marks</th>
                                    <th>Obtained Marks</th>
                                </tr>
                            </thead>
                            <tbody className="text-white lg:text-2xl">

                                {
                                    myAssignments.map((assignment,index) => <MySingleSubmit index={index} key={assignment._id} assignment={assignment}></MySingleSubmit>)
                                }


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MySubmitedAssignments;