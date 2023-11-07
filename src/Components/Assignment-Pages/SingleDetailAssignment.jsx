import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleDetailAssignment = () => {
    const {id}=useParams()
    console.log(id)
    const [viewAssignment,setViewAssignment]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/assignments')
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            const findUpdateOne=data.find(assignment=> assignment._id===id)
            setViewAssignment(findUpdateOne)
        })
    },[id])
    const { image, title, marks, date,level,email ,_id,details} = viewAssignment
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/NWskZ5P/Avengers-4-K-wallpapers-for-your-desktop-or-mobile-screen-free-and-easy-to-download.jpg' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="card lg:w-[900px] w-[300px]  md:w-[500px]  glass">
                    <figure><img className="lg:w-[900px] md:w-[500px] w-[300px]" src={image} /></figure>
                    <div className="card-body text-white text-left">
                        <h2 className="card-title">AssignmentTitle:{title}</h2>
                        <h2 className="card-title">Description:{details}</h2>
                        <h2 className="card-title">Difficulty Level:{level}</h2>
                        <h2 className="card-title">Marks:{marks}</h2>
                        <h2 className="card-title">Deadline:{date}</h2>
                        
                        <div className="card-actions">
                            <button className="btn w-full text-white bg-gradient-to-r from-[#e879f9] to-[#fda4af]">TAKE ASSIGNMENT!!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDetailAssignment;