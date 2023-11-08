

const PendingSubmissions = ({ assignment, index, user, handleGiveMark }) => {
    const { name, email, status, link, title, marks, allocatedMarks, _id, note } = assignment

    return (
        <div className="card  glass shadow-xl">
            <h2>Assignment No.:{index + 1}</h2>
            <div className="card-body text-left">
                <h2 className="card-title">Assignment Title:{title}</h2>
                <h2 className="">Examinee Name:{user.displayName}</h2>
                <p>Student Name:{name}</p>
                <p>Allocated Marks:{allocatedMarks}</p>
                {
                    (user.email !== email) ? <a href={link}><button className="btn bg-gradient-to-r from-[#e879f9] to-[#fda4af]">Give Marks</button></a> : ''
                }
                {
                    (user.email !== email) ? <>
                        <form onSubmit={(e) => handleGiveMark(e,_id)} className="card-body glass rounded-lg"  >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Evaluate</span>
                                </label>
                                <input type="text" name="evaluation" placeholder="marks" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Examinee Feedback</span>
                                </label>
                                <textarea type="text" placeholder="feedback" name="feedback" className="textarea textarea-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-[#e879f9] to-[#fda4af]">Submit Marks</button>
                            </div>
                        </form>
                    </> : ''
                }
            </div>
        </div>
    );
};

export default PendingSubmissions;