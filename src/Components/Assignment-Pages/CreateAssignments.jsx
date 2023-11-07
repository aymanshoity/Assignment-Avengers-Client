import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Provider/AuthProvider";

const CreateAssignments = () => {
    const {user}=useContext(AuthContext)
    const [selectedDate, setSelectedDate] = useState(null)

    const handleCreateAssignment=e=>{
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

        const newAssignment={name,email,title,image,details,level,marks,date};
        console.log(newAssignment)
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RTQ1dN7/HD-wallpaper-avengers-infinity-war-poster-hd-4k-movies-2018-movies.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>

            <div className=" text-center px-4">

                <h1 className="my-5 text-5xl font-bold text-white">Create a New Assignment</h1>


                <div className="card flex-shrink-0 w-full min-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleCreateAssignment} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user.displayName}  placeholder="Student Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user.email} placeholder="Student Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assignment Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="ImageURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="details" className="textarea textarea-bordered" placeholder="Assignment Description"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Dificulty Level</span>
                            </label>
                            <select className="input input-bordered" required name="level" >
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
                                <input type="text" name="marks" placeholder="Marks" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Date</span>
                                </label>
                                <div>
                                    <DatePicker className="input input-bordered text-left" selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat='dd/MM/yyyy' name="date" required />,

                                </div>
                            </div>

                        </div>



                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-[#e879f9] to-[#fda4af]">Create Assignment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;