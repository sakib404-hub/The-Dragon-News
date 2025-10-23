import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';

const Login = () => {
    const { signInUser } = use(AuthContext);
    const [error, setError] = useState('');

    const location = useLocation();
    // console.log(location);
    const path = useNavigate();

    const handleLoginButtonSumission = (event) => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        signInUser(email, password)
            .then(() => {
                alert('User Signed In SuccessFully!');
                form.reset();
                path(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                // alert(`${error.message}`)
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            })


    }
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
                <h2 className='text-2xl font-semibold text-center'>Login Your Account</h2>
                <div className="card-body">
                    <form action=""
                        onSubmit={handleLoginButtonSumission}>
                        <fieldset className="fieldset">
                            {/* Email Field  */}
                            <label
                                className="label"
                                htmlFor='email'>
                                Email
                            </label>
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                id='email'
                                name='email'
                                required />
                            {/* Password Field  */}
                            <label
                                className="label"
                                htmlFor='password'>
                                Password
                            </label>
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                id='password'
                                name='password'
                                minLength={6}
                                required />
                            {/* Forgot password Field  */}
                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                            {/* Login Field  */}
                            <button
                                type='submit'
                                className="btn btn-neutral mt-4">
                                Login
                            </button>
                        </fieldset>
                    </form>
                    {
                        error && <p className='text-red-500 text-sm'>{error}</p>
                    }
                    {/* If the user doesnt have an accout he can register  */}
                    <div className='text-center font-semibold'>
                        Don't Have an Account ? <Link
                            className='text-secondary'
                            to={'/auth/register'}>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;