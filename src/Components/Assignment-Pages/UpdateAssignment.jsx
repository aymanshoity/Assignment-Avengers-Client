import {  useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const {id}=useParams()
    console.log(id)
    const [updateAssignment,setUpdateAssignment]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/assignments')
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            const findUpdateOne=data.find(assignment=> assignment._id===id)
            setUpdateAssignment(findUpdateOne)
        })
    },[id])

    const handleUpdateAssignment=e=>{
        e.preventDefault()
        const form =e.target;
        const name=form.name.value
        const email=form.email.value
        const title=form.title.value
        const image=form.image.value
        const details=form.details.value
        const level=form.level.value
        const marks=form.marks.value
        const date=form.date.value

        const updatedAssignment={name,email,title,image,details,level,marks,date};
        console.log(updatedAssignment)
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/assignments/${id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updatedAssignment)
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.modifiedCount>1){
                    Swal.fire("Saved!", "", "success");
                }
            })
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/dWRyg4w/The-Man-of-Iron-Crossover-x-Iron-Man-Male-Reader-CHAPTER-2-A-BLAST-FROM-THE-PAST.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>

            <div className=" text-center px-4">

                <h1 className="my-5 text-5xl font-bold text-white">Update Assignment</h1>


                <div className="card flex-shrink-0 w-full min-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleUpdateAssignment} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={updateAssignment.name}  placeholder="Student Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={updateAssignment.email} placeholder="Student Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assignment Title</span>
                            </label>
                            <input type="text" name="title" defaultValue={updateAssignment.title} placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input defaultValue={updateAssignment.image} type="text" name="image" placeholder="ImageURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea defaultValue={updateAssignment.details} name="details" className="textarea textarea-bordered" placeholder="Assignment Description"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Dificulty Level</span>
                            </label>
                            <select defaultValue={updateAssignment.level} className="input input-bordered" required name="level" >
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Marks</span>
                                </label>
                                <input defaultValue={updateAssignment.marks} type="text" name="marks" placeholder="Marks" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Date</span>
                                </label>
                                <div>
                                    <DatePicker defaultValue={updateAssignment.date} className="input input-bordered text-left" selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat='dd/MM/yyyy' name="date" required />,

                                </div>
                            </div>

                        </div>



                        <div className="form-control mt-6">
                            <button onClick={()=>handleUpdateAssignment()} className="btn bg-gradient-to-r from-[#e879f9] to-[#fda4af]">Update Assignment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAssignment;