import { useState } from "react";
import Swal from "sweetalert2";


const MyAssignmentList = ({ assignment, index,handleSubmit }) => {
    const { title, studentName, studentEmail, marks, _id } = assignment;
    const allocatedMarks = marks

    return (


        <form onSubmit={(e) => handleSubmit(e, _id, allocatedMarks)} className="card my-4 glass p-10">
            <h2 className="text-white text-center">Assignment Num: {index + 1}</h2>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white">Assignment Title</span>
                </label>
                <input type="text" name="title" defaultValue={title} placeholder="email" className="input input-bordered" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text text-white">Students Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={studentName} placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Students Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={studentEmail} placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Quick Notes</span>
                    </label>
                    <textarea required name="note" className="textarea textarea-bordered" placeholder="notes"></textarea>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Status</span>
                    </label>
                    <input required name="status" defaultValue="pending" className="input input-bordered" placeholder="notes" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">PDF Link</span>
                    </label>
                    <input required name="link" className="input input-bordered" placeholder="pdf link" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Marks</span>
                    </label>
                    <input required name="marks" defaultValue="0" className="input input-bordered" />

                </div>
            </div>




            <div className="form-control mt-6">

                <button className="btn text-white bg-gradient-to-r from-[#e879f9] to-[#fda4af]">Submit</button>


            </div>


        </form >

    );
};

export default MyAssignmentList;