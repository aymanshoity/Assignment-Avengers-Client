import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const newUser = { email, password }
        console.log(newUser)

        setErrorMessage('')
        setSuccessMessage('')
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccessMessage('User Logged Successfully!!')
            })
            .catch(error => {
                console.log(error)
                if (error.code === 'auth/invalid-login-credentials') {
                    return setErrorMessage('Invalid Email/Password..Please Provide the Correct One')
                }

            })


    }

    const handleGoggleSignIn = (e) => {
        e.preventDefault()
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                setSuccessMessage('User Logged Successfully!!')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/PZhqQgM/deleted-by-user.jpg)' }}>
                <div className=" hero-overlay bg-gradient-to-r from-[#aca0ef] to-[rgba(21, 21, 21, 0.00)]"></div>
                <div className="hero-content flex-col ">
                    <div className="text-center mt-10">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                            <p>New to this website? please <Link to='/register' className="text-red-500">Register</Link></p>
                            {successMessage && <p className="text-red-600">{successMessage}</p>}
                            {errorMessage && <p className="text-red-600">{errorMessage}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-[#e879f9] to-[#fda4af] ">Login</button>
                            </div>


                        </form>
                        <div className="divider">OR Login with</div>
                        <div className="flex justify-center my-10 ">
                            <button onClick={handleGoggleSignIn} className="btn bg-gradient-to-r from-[#e879f9] to-[#fda4af]"> <BsGoogle></BsGoogle> Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;