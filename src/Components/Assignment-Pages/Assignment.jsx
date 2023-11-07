import { GrView ,GrUpdate} from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsArrowRightCircle} from "react-icons/bs";
import { Link } from "react-router-dom";
const Assignment = ({ assignment }) => {
    console.log(assignment)
    const { image, title, marks, date,level } = assignment
    return (
        <div className="my-10 mx-8">
            <div className="card card-side lg:h-[200px] bg-gradient-to-r from-[#e879f9] to-[#fda4af] shadow-xl">
                <figure><img src={image} className="w-[200px] h-[200px]" alt="Movie" /></figure>
                <div className="card-body ">
                    <div>
                        <h2 className="card-title">Title: {title}</h2>
                        <p className="font-bold">Dificulty Level:{level}</p>
                        <p className="font-bold">Marks:{marks}</p>
                        <p className="font-bold">Deadline:{date}</p>
                    </div>
                    <div className="card-actions ">
                        <button className="btn btn-circle btn-outline text-2xl "><GrView></GrView></button>
                        <button className="btn btn-circle btn-outline text-2xl"> <RiDeleteBin6Line></RiDeleteBin6Line></button>
                        <Link to='/updateAssignment'><button className="btn btn-circle btn-outline text-2xl"><GrUpdate></GrUpdate> </button></Link>
                        <button className="btn btn-circle btn-outline text-2xl"> <BsArrowRightCircle></BsArrowRightCircle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assignment;