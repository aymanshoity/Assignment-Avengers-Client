import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const newUser = { name, photo, email, password }
        console.log(newUser)

        const hasCapitalLetter = /[A-Z]/.test(password);
        const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
        setErrorMessage('');
        setSuccessMessage('')
        if (!hasCapitalLetter || !hasSpecialCharacter || password.length < 6) {
            setErrorMessage('Please provide a strong Password')
        }
        else {
            createUser(email, password)
                .then(result => {
                    console.log(result.user)
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: photo,
                    })
                        .then(() => {
                            console.log('ProfileUpdated')
                            setSuccessMessage('User Registered Successfully!!')
                        })
                        .catch(error => {
                            console.log(error)
                        })
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        return setErrorMessage('You have already Registered..Please Login')
                    }
                    console.error(error)
                })
        }

    }
    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/9N2swnQ/download-1.jpg)' }}>
                <div className=" hero-overlay bg-gradient-to-r from-[#b97d84] to-[rgba(21, 21, 21, 0.00)]"></div>
                <div className="hero-content flex flex-col items-center">
                    <div className="text-center mt-10">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <p>Already have an account? please <Link to='/login' className="text-red-500">Login</Link></p>
                            
                            {successMessage && <p className="text-red-600">{successMessage}</p>}
                            {errorMessage && <p className="text-red-600">{errorMessage}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-[#e879f9] to-[#fda4af]">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;