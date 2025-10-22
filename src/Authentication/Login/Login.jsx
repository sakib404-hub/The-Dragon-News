import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
                <h2 className='text-2xl font-semibold text-center'>Login Your Account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
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
                            required />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn btn-neutral mt-4">
                            Login
                        </button>
                    </fieldset>
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