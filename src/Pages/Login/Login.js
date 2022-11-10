import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import loginImage from '../../images/login.webp';
import { FaGoogle } from 'react-icons/fa';
import './Login.css';
import { AuthContext } from '../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    useTitle('Login');
    const { login, loginWithGoogle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user)
            })
            .catch(error => console.error(error));
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero flex w-4/5 mx-auto">
            <div className='login-image'>
                <img className='h-3/5' src={loginImage} alt="" />
            </div>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold text-center">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered bg-[#ffffffe0] text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-white">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered bg-[#ffffffe0] text-black" required />
                                <Link className='text-sm font-light mt-2 text-[#ffffffd8]' to='/register'>Want to create account?</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn border-0 bg-[#dec145]">Login</button>
                            </div>
                        </form>
                        <div onClick={handleLoginWithGoogle} style={{ cursor: 'pointer' }} className="bg-[#ffffff4a] flex items-center text-center p-2 mt-3 rounded-full sign-in">
                            <span className='ml-[3%]'><FaGoogle /></span>
                            <p>Sign with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;