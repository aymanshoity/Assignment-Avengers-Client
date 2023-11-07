

const MyAssignmentList = ({ assignment }) => {
    const { title, studentName, studentEmail } = assignment;
    const handleSubmit=e=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const title = form.title.value
        const note = form.note.value
        const status = form.status.value
        const link = form.link.value

        const mySubmission={name,email,status,title,note,link}
        console.log(mySubmission)
    }

    return (


        <form onSubmit={handleSubmit} className="card lg:w-full my-4 glass p-10">
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
                    <span className="label-text text-white">Assignment Title</span>
                </label>
                <input type="text" name="title" defaultValue={title} placeholder="email" className="input input-bordered" required />
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
                <input required name="status" defaultValue="pending"  className="input input-bordered" placeholder="notes"/>
                
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white">PDF Link</span>
                </label>
                <input required name="link"  className="input input-bordered" placeholder="pdf link"/>
                
            </div>
            
            
            
            
            <div className="form-control mt-6">
                <button className="btn text-white bg-gradient-to-r from-[#e879f9] to-[#fda4af]">Submit</button>
            </div>
           

        </form >

    );
};

export default MyAssignmentList;