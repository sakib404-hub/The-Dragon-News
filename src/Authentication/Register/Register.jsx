import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';

const Register = () => {
    const { createUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // autoClearing Error After certain amount of time 
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError('');
            }, 5000)

            return () => clearTimeout(timer);
        }
    }, [error])

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
            }, 5000)
            return () => clearTimeout(timer);
        }
    }, [success])

    const handleFormSubmission = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value.trim();
        const password = form.password.value;

        // Reset error message
        setError('');

        // ✅ Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // ✅ Password validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must include at least one uppercase letter.');
            return;
        }
        if (!/[0-9]/.test(password)) {
            setError('Password must include at least one number.');
            return;
        }

        // ✅ Proceed with user creation
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                form.reset();
                setSuccess(true);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="card bg-base-100 w-full max-w-xl shadow-2xl p-4">
                <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>

                <div className="card-body space-y-2">
                    <form onSubmit={handleFormSubmission}>
                        <fieldset className="fieldset space-y-2">

                            {/* Username */}
                            <div>
                                <label htmlFor="username" className="label font-medium">Username</label>
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
                                <label htmlFor="email" className="label font-medium">Email</label>
                                <input
                                    type="email"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your email"
                                    id="email"
                                    name="email"
                                    minLength={6}
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="label font-medium">Password</label>
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
                                <label htmlFor="birthday" className="label font-medium">Birthday</label>
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
                                <label htmlFor="gender" className="label font-medium">Gender</label>
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
                            <button className="btn btn-neutral w-full mt-4 text-lg" type="submit">
                                Register
                            </button>
                            {/* Show error message */}
                            {error && (
                                <p className="text-red-500 text-sm mt-2">{error}</p>
                            )}
                            {
                                success && <p
                                    className='text-green-500 text-sm mt-2'>Account Created Successfully.</p>
                            }
                        </fieldset>
                    </form>

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
