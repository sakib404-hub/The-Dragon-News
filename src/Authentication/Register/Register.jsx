import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="card bg-base-100 w-full max-w-xl shadow-2xl p-4">
                <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>

                <div className="card-body space-y-2">
                    <fieldset className="fieldset space-y-2">
                        {/* Username */}
                        <div>
                            <label
                                htmlFor="usernam
                            " className="label font-medium">Username</label>
                            <input
                                className="input input-bordered w-full"
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                lassName="label font-medium">Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Enter your email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="passwor
                            " className="label font-medium">Password</label>
                            <input
                                type="password"
                                className="input input-bordered w-full"
                                placeholder="Enter your password"
                                id="password"
                                name="password"
                                required
                            />
                        </div>

                        {/* Birthday */}
                        <div>
                            <label
                                htmlFor="birthda
                            " className="label font-medium">Birthday</label>
                            <input
                                type="date"
                                className="input input-bordered w-full"
                                id="birthday"
                                name="birthday"
                                required
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label
                                htmlFor="gender"
                                className="label font-medium">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button className="btn btn-neutral w-full mt-4 text-lg">
                            Register
                        </button>
                    </fieldset>

                    {/* Login link */}
                    <div className="text-center font-medium mt-4">
                        Already have an account?{' '}
                        <Link className="text-secondary hover:underline" to={'/auth'}>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
