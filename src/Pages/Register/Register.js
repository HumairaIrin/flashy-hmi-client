import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Contexts/AuthProvider';
import './Register.css';

const Register = () => {
    useTitle('Register');
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                handleUpdateUser(name);
                console.log(user)
            })
            .catch(error => console.error(error));
    }

    const handleUpdateUser = (name) => {
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero w-4/5 mx-auto mt-8">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-center">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered bg-[#ffffffe0] text-black" required />
                            </div>
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
                                <input type="password" placeholder="password" name='password' className="input input-bordered bg-[#ffffffe0]  text-black" required />
                                <Link className='text-sm font-light mt-2 text-[#ffffffd8]' to='/login'>Already have an account?</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn border-0 bg-[#dec145]">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;